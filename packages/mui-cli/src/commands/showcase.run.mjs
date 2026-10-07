import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { families } from '../showcase/families.mjs';
import { typographyVariants, shadowLevels } from '../showcase/tokens.mjs';
import { withCapture } from '../lib/capture.mjs';
import { jsonOut } from '../lib/json.mjs';
import os from 'node:os';
import { parseFrontmatter } from '../lib/frontmatter.mjs';
import { parsePx } from '../lib/globals.mjs';
import { resolveColor, resolutionTheme } from '../lib/cascade.mjs';
import { loadMuiStyles } from '../lib/muiStyles.mjs';
import { generatedUrl } from '../lib/renders.mjs';


const stateLabel = (s) => (s === 'focusVisible' ? 'focus-visible' : s);

const PROP_SLOT = { backgroundColor: 'background', color: 'foreground', borderColor: 'border' };
const hexOf = (front, token, alpha) => {
  const v = front.colors?.[token];
  if (typeof v !== 'string') {
    return null;
  }
  const a = alpha == null ? '' : Math.round(alpha * 255).toString(16).padStart(2, '0');
  return `${v}${a}`.toUpperCase();
};

/** family (+ an optional DESIGN.md front-matter) → the three section cell-sets. Colors gate on the DESIGN's own cascade value, else its token. */
export function buildSections(family, front = {}, resolve = null) {
  const measurements = [];
  const colors = [];
  const states = [];
  for (const member of family.members) {
    const variants = member.variants ?? [null];
    const name = member.component.replace(/^Mui/, '');
    for (const variant of variants) {
      const rowLabel = `${name}${variant ? ` · ${variant}` : ''}`;
      for (const size of member.sizes) {
        const parts = [];
        if (variant) {
          parts.push(`variant=${variant}`);
        }
        if (size !== 'medium') {
          parts.push(`size=${size}`);
        }
        measurements.push({
          component: member.component,
          propsKey: parts.join(',') || 'base',
          row: rowLabel,
          col: size,
          label: `${rowLabel} · ${size}`,
          target: null,
        });
      }
    }
    if (member.colorChecks) {
      for (const variant of member.variants) {
        colors.push({
          component: member.component,
          propsKey: [`variant=${variant}`, member.colorProps?.[variant]].filter(Boolean).join(','),
          row: `${name} · ${variant}`,
          col: 'color',
          label: `${name} · ${variant}`,
          checks: member.colorChecks[variant].map((chk) => {
            const cascade = front.components?.[member.component]?.cascade;
            const declared = resolve ? (cascade?.root?.[variant] ?? cascade?.[variant])?.default?.[PROP_SLOT[chk.prop]] : undefined;
            return { prop: chk.prop, label: chk.label, ...(chk.slot ? { slot: chk.slot } : {}), expect: declared != null ? resolve(declared) : hexOf(front, chk.token, chk.alpha) };
          }),
        });
      }
    }
    if (member.states) {
      for (const variant of member.variants) {
        for (const state of member.states) {
          const parts = [`variant=${variant}`];
          // mouse and keyboard states are forced on the render; the rest are props (disabled, checked)
          if (!['default', 'hover', 'active', 'focusVisible'].includes(state)) {
            parts.push(`${state}=true`);
          }
          states.push({ component: member.component, propsKey: parts.join(','), row: variant, col: stateLabel(state), label: `${variant} · ${stateLabel(state)}`, state });
        }
      }
    }
  }
  return { measurements, colors, states };
}

const STANDARD_COLORS = [
  'primary-main', 'primary-contrastText',
  'secondary-main', 'secondary-contrastText',
  'error-main', 'warning-main', 'info-main', 'success-main',
  'text-primary', 'text-secondary',
  'background-default', 'background-paper',
  'divider',
];

/** Foundation-token sections; with a DESIGN.md, its declared colors / radius / spacing become gates. */
export function buildTokens(front = {}) {
  const declared = Object.keys(front.colors ?? {}).filter((name) => !(name.split('-').length === 1 && `${name}-main` in front.colors));
  const radius = parsePx(front.rounded?.['1'] ?? front.rounded?.DEFAULT);
  const spacing = parsePx(front.spacing?.['1']);
  return {
    typography: typographyVariants.map(([variant, sample]) => ({ variant, sample })),
    colors: [...new Set([...STANDARD_COLORS, ...declared])].map((name) => ({ name, expect: hexOf(front, name) })),
    radius: [{ name: 'base', expect: radius == null ? null : `${radius}px` }],
    spacing: [{ name: 'base', expect: spacing == null ? null : `${spacing}px` }],
    shadows: shadowLevels.map((level) => ({ level })),
  };
}

export async function run(program, design, options) {
  const { compileDesign } = await import('./compileTheme.run.mjs');
  const result = await compileDesign(design);
  const scheme = options.scheme === 'dark' ? 'dark' : 'light';
  const front = scheme === 'dark' && result.darkFront ? { ...result.front, colors: result.darkFront.colors } : result.front;
  let resolve = null;
  if (Object.values(front.components ?? {}).some((c) => c?.cascade)) {
    const muiStyles = await loadMuiStyles();
    const rt = resolutionTheme(front, muiStyles);
    resolve = (value) => resolveColor(value, rt, muiStyles);
  }
  let themeFile = options.theme ? path.resolve(options.theme) : null;
  if (themeFile && !fs.existsSync(themeFile)) {
    throw new Error(`no such theme file: ${options.theme}`);
  }
  if (!themeFile) {
    // one stable folder, so the warm render server already serves it and repeat runs never restart it
    const dir = path.join(os.tmpdir(), 'mui-cli-designs');
    fs.mkdirSync(dir, { recursive: true });
    themeFile = path.join(dir, `${createHash('sha1').update(path.resolve(design)).digest('hex').slice(0, 12)}.ts`);
    fs.writeFileSync(themeFile, result.source);
  }
  const suffix = scheme === 'dark' ? '-dark' : '';
  const themeName = front.name ?? path.basename(design).replace(/\.[^.]+$/, '');

  if (options.tokens) {
    const shot = path.resolve(options.shot ?? `tokens${suffix}.png`);
    let out;
    await withCapture(
      async (run, helpers) => {
        out = await run({ tokens: { title: `Design tokens — ${themeName}`, scheme, ...buildTokens(front) } });
        await helpers.screenshotElement(out.selector, shot);
      },
      { themeFile, colorScheme: scheme },
    );
    if ([...out.typography, ...out.colors, ...out.radius, ...out.spacing].some((r) => r.ok === false)) {
      process.exitCode = 1;
    }
    if (program.opts().json) {
      jsonOut('tokens', { scheme, shot, ...out });
      return;
    }
    console.log(`tokens — ${themeName}${scheme === 'dark' ? ' (dark)' : ''}\n`);
    const gate = (rows) => {
      const gated = rows.filter((r) => r.ok != null);
      return gated.length ? `  ${gated.filter((r) => r.ok).length}/${gated.length} match the DESIGN.md` : '';
    };
    console.log(`  Typography  ${out.typography.length} variants${gate(out.typography)}`);
    console.log(`  Colour      ${out.colors.length} swatches${gate(out.colors)}`);
    const mark = (r) => `${r.got ?? ''}${r.ok == null ? '' : r.ok ? ' ✓' : ` ✗ want ${r.expect}`}`;
    console.log(`  Radius      ${out.radius.map(mark).join(' ')}`);
    console.log(`  Spacing     ${out.spacing.map(mark).join(' ')}`);
    console.log(`  Elevation   ${out.shadows.length} levels`);
    console.log(`\n→ ${shot}`);
    return;
  }

  const familyName = options.family ?? Object.keys(families)[0];
  const family = families[familyName];
  if (!family) {
    throw new Error(`unknown family: ${familyName} — known: ${Object.keys(families).join(', ')}`);
  }
  const shot = path.resolve(options.shot ?? `showcase-${familyName}${suffix}.png`);
  const renders = Object.fromEntries(family.members.map((m) => [m.component, generatedUrl(m.component)]));
  let out;
  await withCapture(
    async (run, helpers) => {
      out = await run({ showcase: { title: `${family.title} — ${themeName}`, scheme, renders, ...buildSections(family, front, resolve) } });
      await helpers.forcePseudo('#mui-showcase [data-force="hover"]', ['hover']);
      await helpers.forcePseudo('#mui-showcase [data-force="active"]', ['active']);
      await helpers.screenshotElement(out.selector, shot);
    },
    { themeFile, colorScheme: scheme },
  );
  const failed = out.colors.flatMap((c) => c.checks).filter((k) => k.ok === false).length;
  if (failed) {
    process.exitCode = 1;
  }
  if (program.opts().json) {
    jsonOut('showcase', { family: familyName, scheme, shot, ...out });
    return;
  }
  console.log(`showcase ${familyName} — ${themeName}${scheme === 'dark' ? ' (dark)' : ''}\n`);
  console.log('  Measurements');
  for (const r of out.measurements) {
    console.log(`    ${r.label.padEnd(26)} ${String(r.measured).padStart(6)}px`);
  }
  console.log('\n  Color & Background');
  for (const c of out.colors) {
    console.log(`    ${c.label.padEnd(20)} ${c.checks.map((k) => `${k.label} ${k.got ?? '—'}${k.ok == null ? '' : k.ok ? ' ✓' : ` ✗ want ${k.expect}`}`).join('  ')}`);
  }
  console.log(`\n  States  ${out.states.length} rendered`);
  if (failed) {
    console.log(`\n  ✗ ${failed} color${failed > 1 ? 's' : ''} differ from the DESIGN.md`);
  }
  console.log(`\n→ ${shot}`);
}
