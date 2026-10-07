import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const GENERIC = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'system-ui', 'ui-serif', 'ui-sans-serif', 'ui-monospace', 'ui-rounded', 'emoji', 'math', 'fangsong', 'inherit', 'initial', 'unset'];
const SYSTEM = [
  '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Helvetica', 'Arial', 'Noto Sans', 'Liberation Sans', 'Ubuntu', 'Cantarell', 'Oxygen', 'Oxygen-Sans',
  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'SF Pro Text', 'SF Pro Display', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas',
  'Liberation Mono', 'Courier New', 'Courier', 'Times New Roman', 'Times', 'Georgia', 'Verdana', 'Tahoma', 'Trebuchet MS',
];
const FONT_FILE = /\.(woff2?|ttf|otf)$/i;

/** Split at top-level commas, outside quotes and parentheses. */
function splitTop(text) {
  const parts = [];
  let depth = 0;
  let quote = null;
  let start = 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quote) {
      quote = ch === quote ? null : quote;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
    } else if (ch === '(') {
      depth += 1;
    } else if (ch === ')') {
      depth -= 1;
    } else if (ch === ',' && depth === 0) {
      parts.push(text.slice(start, i));
      start = i + 1;
    }
  }
  parts.push(text.slice(start));
  return parts.map((p) => p.trim()).filter(Boolean);
}

/** The family names in a CSS font-family value; a `var(--x, a, b)` contributes its fallback list. */
export function familiesOf(value) {
  if (typeof value !== 'string') {
    return [];
  }
  return splitTop(value).flatMap((part) => {
    const v = /^var\(\s*--[\w-]+\s*(?:,(.*))?\)$/s.exec(part);
    if (v) {
      return familiesOf(v[1] ?? '');
    }
    return [part.replace(/^(['"])(.*)\1$/, '$2').trim()];
  });
}

/** Every family the created theme names: typography.fontFamily and each variant's own. */
export function themeFamilies(theme) {
  const typography = theme?.typography ?? {};
  const values = [typography.fontFamily, ...Object.values(typography).map((v) => (v && typeof v === 'object' ? v.fontFamily : null))];
  return [...new Set(values.flatMap(familiesOf))];
}

/** The theme's families that are neither generic, a common system font, nor in MUI's default list. */
export function customFamilies(theme, vanilla) {
  const known = new Set([...GENERIC, ...SYSTEM, ...themeFamilies(vanilla)].map((f) => f.toLowerCase()));
  return themeFamilies(theme).filter((f) => !known.has(f.toLowerCase()));
}

/** The families a stylesheet declares in its @font-face rules. */
export function declaredFamilies(css) {
  return [...new Set([...css.matchAll(/@font-face\s*{[^}]*?font-family\s*:\s*(['"]?)([^;'"}]+)\1/g)].map((m) => m[2].trim()))];
}

function packageStylesheet(name, fromDir) {
  const require = createRequire(path.join(fromDir, 'noop.js'));
  for (const spec of [name, `${name}/index.css`]) {
    try {
      const file = require.resolve(spec);
      if (file.endsWith('.css')) {
        return file;
      }
    } catch {
      // try the next form
    }
  }
  throw new Error(`--font ${name}: no such package with a stylesheet in this project (install it, or pass "Family=<file>")`);
}

/**
 * The fonts a render loads, from `--font` sources: a package (its stylesheet) or `Family=file` (a bare file when exactly
 * one custom family is left). Throws when a custom family of the theme has no source, unless `skip`.
 */
export function resolveFonts({ sources = [], skip = false, custom = [], fromDir = process.cwd() }) {
  const fonts = [];
  const bare = [];
  for (const source of sources) {
    const named = /^([^=]+)=(.+)$/.exec(source);
    if (named || FONT_FILE.test(source)) {
      const file = path.resolve(fromDir, named ? named[2].trim() : source);
      if (!fs.existsSync(file)) {
        throw new Error(`--font ${source}: no such file`);
      }
      (named ? fonts : bare).push({ kind: 'file', family: named?.[1].trim(), file });
    } else {
      const file = packageStylesheet(source, fromDir);
      fonts.push({ kind: 'css', file, families: declaredFamilies(fs.readFileSync(file, 'utf8')) });
    }
  }
  const supplied = (list) => new Set(list.flatMap((f) => f.families ?? [f.family]).map((f) => f.toLowerCase()));
  if (bare.length) {
    const left = custom.filter((f) => !supplied(fonts).has(f.toLowerCase()));
    if (bare.length > 1 || left.length !== 1) {
      throw new Error(`--font ${path.basename(bare[0].file)}: name its family, e.g. --font "${left[0] ?? 'Family'}=${path.basename(bare[0].file)}"${left.length ? ` (the theme's: ${left.join(', ')})` : ''}`);
    }
    fonts.push({ ...bare[0], family: left[0] });
  }
  const missing = custom.filter((f) => !supplied(fonts).has(f.toLowerCase()));
  if (missing.length && !skip) {
    throw new Error(
      `the theme uses ${missing.map((f) => `"${f}"`).join(', ')} — say which font to render with: --font <package> (e.g. @fontsource/<name>) or --font "${missing[0]}=<file>"; or --skip-font to render with the fallback fonts`,
    );
  }
  return fonts;
}

/** resolveFonts for a --theme file: its custom families come from the created theme. */
export async function fontsForTheme(themeFile, { font, skipFont } = {}) {
  const sources = [font ?? []].flat();
  if (!themeFile) {
    return resolveFonts({ sources, skip: true });
  }
  const { loadThemeModule, isCreatedTheme } = await import('./themeModule.mjs');
  const { loadMuiStyles } = await import('./muiStyles.mjs');
  const { createTheme } = await loadMuiStyles();
  const loaded = await loadThemeModule(path.resolve(themeFile));
  const theme = isCreatedTheme(loaded) ? loaded : createTheme(loaded);
  return resolveFonts({ sources, skip: skipFont, custom: customFamilies(theme, createTheme()) });
}
