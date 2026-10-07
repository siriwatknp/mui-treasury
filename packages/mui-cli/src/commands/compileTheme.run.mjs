import fs from 'node:fs';
import path from 'node:path';
import { parseFrontmatter } from '../lib/frontmatter.mjs';
import { mapGlobals, unflattenColors, parsePx, spacingBaseFrom } from '../lib/globals.mjs';
import { typographyScales, pickScale } from '../design/typographyScales.mjs';
import { buildCascade } from '../lib/cascade.mjs';
import { loadMuiStyles } from '../lib/muiStyles.mjs';
import { jsonOut } from '../lib/json.mjs';

const TYPO_VARIANTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline'];
const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const SANS_FALLBACK = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
/** A bare family (no fallbacks) gets the system sans stack appended; a full stack is used as-is. */
const withFallback = (f) => (typeof f === 'string' && f.trim() && !f.includes(',') ? `${f}, ${SANS_FALLBACK}` : f);

/** JS plain data → TS source. Unquoted identifier keys, single-quoted strings. */
export function serializeTs(value, level = 0) {
  if (value === null || value === undefined) {
    return 'null';
  }
  const type = typeof value;
  if (type === 'number' || type === 'boolean') {
    return String(value);
  }
  if (type === 'string') {
    // Function-source strings (variant `props` matchers) emit as CODE, not a quoted string. Theme VALUES never
    // contain `=>` or start with `function`, so this is unambiguous.
    const trimmed = value.trim();
    if (trimmed.includes('=>') || /^function\b/.test(trimmed)) {
      return value.replace(/\n\s*/g, ' '); // collapse source indentation onto one line
    }
    return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
  }
  const pad = '  '.repeat(level + 1);
  const close = '  '.repeat(level);
  if (Array.isArray(value)) {
    if (!value.length) {
      return '[]';
    }
    return `[\n${value.map((v) => `${pad}${serializeTs(v, level + 1)}`).join(',\n')}\n${close}]`;
  }
  const entries = Object.entries(value).filter(([, v]) => v !== undefined);
  if (!entries.length) {
    return '{}';
  }
  const key = (k) => (/^[A-Za-z_$][\w$]*$/.test(k) ? k : `'${k.replace(/'/g, "\\'")}'`);
  return `{\n${entries.map(([k, v]) => `${pad}${key(k)}: ${serializeTs(v, level + 1)}`).join(',\n')}\n${close}}`;
}

/** `export default {...} satisfies ThemeOptions;` file text. */
function emitThemeFile(options) {
  return [
    "import type { ThemeOptions } from '@mui/material/styles';",
    '',
    `export default ${serializeTs(options)} satisfies ThemeOptions;`,
    '',
  ].join('\n');
}

export async function compileDesign(design, options = {}) {
  const file = path.resolve(design);
  if (!fs.existsSync(file)) {
    throw new Error(`no such file: ${design}`);
  }
  const { front } = parseFrontmatter(fs.readFileSync(file, 'utf8'));
  const globals = mapGlobals(front);

  // Dual color-scheme: a sibling <name>-dark.md (or --dark) supplies the dark
  // palette; everything else (type/shape/spacing/components) is shared.
  const darkPath = options.dark ? path.resolve(options.dark) : file.replace(/\.md$/, '-dark.md');
  const darkFront =
    fs.existsSync(darkPath) && path.resolve(darkPath) !== file
      ? parseFrontmatter(fs.readFileSync(darkPath, 'utf8')).front
      : null;

  const spacingBase = spacingBaseFrom(front.spacing);
  if (spacingBase != null) {
    globals.spacing = spacingBase;
  }

  // App type-scale ramp (by base font size) replaces MUI's marketing-scale defaults;
  // any explicit DESIGN.md variant overrides it. Then kill uppercase buttons.
  const ramp = typographyScales[pickScale({ baseFontPx: parsePx(front.typography?.fontSize) })];
  const designTypo = globals.typography ?? {};
  globals.typography = { ...designTypo };
  for (const variant of TYPO_VARIANTS) {
    globals.typography[variant] = { ...ramp[variant], ...(designTypo[variant] ?? {}) };
  }
  globals.typography.button = { ...globals.typography.button, textTransform: 'initial' };

  // Fonts: bare family → append system fallbacks; an optional
  // `headingFontFamily` (the editorial display font) applies to h1–h6.
  if (globals.typography.fontFamily) {
    globals.typography.fontFamily = withFallback(globals.typography.fontFamily);
  }
  if (globals.typography.headingFontFamily) {
    const heading = withFallback(globals.typography.headingFontFamily);
    for (const v of HEADINGS) {
      globals.typography[v] = { ...globals.typography[v], fontFamily: heading };
    }
    delete globals.typography.headingFontFamily;
  }

  // Integer line-heights: the ramp is already integer; this rounds any DESIGN
  // override or leftover MUI-default variant to an integer px.
  const muiStyles = await loadMuiStyles();
  const { createTheme } = muiStyles;
  const probe = createTheme({ typography: globals.typography });
  for (const v of TYPO_VARIANTS) {
    const t = probe.typography?.[v];
    const fsPx = t ? parsePx(t.fontSize) : null;
    if (fsPx == null) {
      continue;
    }
    const lhPx = typeof t.lineHeight === 'number' ? Math.round(fsPx * t.lineHeight) : parsePx(t.lineHeight);
    if (lhPx != null) {
      globals.typography[v] = { ...(globals.typography[v] ?? {}), lineHeight: `${lhPx}px` };
    }
  }

  const cascade = buildCascade(front, muiStyles);
  const components = Object.keys(cascade).length ? cascade : null;

  let theme;
  if (darkFront) {
    // palette moves under colorSchemes.light; dark gets its own palette
    const { palette, ...shared } = globals;
    theme = {
      cssVariables: true,
      colorSchemes: {
        light: { palette },
        dark: { palette: unflattenColors(darkFront.colors) },
      },
      ...shared,
      ...(components ? { components } : {}),
    };
  } else {
    theme = { cssVariables: true, ...globals, ...(components ? { components } : {}) };
  }
  return { theme, source: emitThemeFile(theme), front, darkFront, components, globals };
}

export async function run(program, design, options) {
  const { theme, source, front, darkFront, components, globals } = await compileDesign(design, options);

  if (options.out) {
    fs.writeFileSync(path.resolve(options.out), source);
  }
  if (program.opts().json) {
    jsonOut('compile-theme', { theme, out: options.out ?? null, ...(front.density ? { ignored: ['density'] } : {}) });
    return;
  }
  if (front.density) {
    console.error('note: the DESIGN.md `density:` block is not compiled in this build — component sizes stay MUI defaults');
  }
  if (options.out) {
    console.log(`→ ${options.out}  (schemes:${darkFront ? 'light+dark' : 'light'} typography:${globals.typography ? 'y' : 'n'} components:${components ? Object.keys(components).length : 0})`);
  } else {
    console.log(source);
  }
}
