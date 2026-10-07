import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { DATA_DIR } from '../lib/data.mjs';
import { jsonOut } from '../lib/json.mjs';
import { loadMuiStyles } from '../lib/muiStyles.mjs';
import { loadSeams } from '../lib/seams.mjs';
import { supportOf } from '../lib/support.mjs';
import { resolveTargets } from '../lib/targets.mjs';
import { isCreatedTheme, loadThemeModule } from '../lib/themeModule.mjs';

const short = (c) => c.replace(/^Mui/, '');
const older = (a, b) => {
  const [x, y] = [a, b].map((v) => v.split(/[.-]/).map((n) => parseInt(n, 10) || 0));
  for (let i = 0; i < 3; i += 1) {
    if (x[i] !== y[i]) {
      return x[i] < y[i];
    }
  }
  return false;
};

function installedMui(projectDir) {
  try {
    return createRequire(path.join(projectDir, 'noop.js'))('@mui/material/package.json').version;
  } catch {
    return null;
  }
}

/** What the data knows each token group feeds: shadow levels and typography variants per component. */
function tokenUses(group) {
  const { rows } = loadSeams();
  const by = new Map();
  for (const r of rows) {
    const refs = [r.token, ...(r.refs ?? [])].filter(Boolean);
    for (const ref of refs) {
      const m = group === 'shadows' ? ref.match(/^shadows\.?\[?(\d+)/) : ref.match(/^typography\.(\w+)/);
      if (m) {
        by.set(short(r.component), new Set([...(by.get(short(r.component)) ?? []), m[1]]));
      }
    }
  }
  if (group === 'shadows') {
    return [...by].map(([c, set]) => `${c} ${[...set].sort((x, y) => x - y).join('/')}`).join(', ');
  }
  // typography: the variants, each with how many components read it (fontFamily / fontWeight* are not variants)
  const count = new Map();
  for (const set of by.values()) {
    [...set].filter((v) => !/^font/.test(v)).forEach((v) => count.set(v, (count.get(v) ?? 0) + 1));
  }
  return [...count].sort((x, y) => y[1] - x[1]).map(([v, n]) => `${v} (${n})`).join(', ');
}

export async function run(program, id, options) {
  const projectDir = process.cwd();
  const catalog = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/recommendations.json'), 'utf8')).entries;
  const entries = id ? catalog.filter((e) => e.id === id) : catalog;
  if (id && !entries.length) {
    throw new Error(`no recommendation '${id}' — ids: ${catalog.map((e) => e.id).join(', ')}`);
  }
  const { createTheme } = await loadMuiStyles();
  const vanilla = createTheme();
  const loaded = options.theme ? await loadThemeModule(options.theme) : null;
  const theme = !loaded ? vanilla : isCreatedTheme(loaded) ? loaded : createTheme(loaded);
  const mui = installedMui(projectDir);
  const targets = await resolveTargets(projectDir, { targets: options.targets });
  const pkg = (() => {
    try {
      return JSON.parse(fs.readFileSync(path.join(projectDir, 'package.json'), 'utf8'));
    } catch {
      return {};
    }
  })();
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  // entries are data, their checks are expressions over the created theme (and vanilla for "still the default")
  const holds = (expr) => new Function('theme', 'vanilla', `return (${expr});`)(theme, vanilla);

  if (options.preset && !options.show) {
    return printPreset(program, entries, options);
  }
  if (options.show) {
    return show(program, entries, options, projectDir);
  }

  const results = [];
  for (const e of entries) {
    if (e.kind === 'token') {
      results.push({ id: e.id, kind: e.kind, status: holds(e.default) ? 'default' : 'customized', why: e.why, ...(e.uses ? { uses: tokenUses(e.uses) } : {}), ...(e.presets ? { presets: Object.keys(e.presets) } : {}) });
      continue;
    }
    const base = { id: e.id, kind: e.kind, why: e.why, snippet: e.snippet, requires: e.requires, ...(e.migration ? { migration: true } : {}), ...(e.changesLook ? { changesLook: true } : {}) };
    if (mui && older(mui, e.since)) {
      results.push({ ...base, status: 'unavailable', detail: `needs @mui/material ${e.since} (installed ${mui})` });
    } else if (holds(e.adopted)) {
      results.push({ ...base, status: 'adopted' });
    } else if (e.relevantWith && !e.relevantWith.some((d) => deps[d])) {
      results.push({ ...base, status: 'not needed', detail: `only with another CSS framework (${e.relevantWith.join(', ')}) — none found` });
    } else {
      const support = await supportOf(e.requires, targets.browsers);
      const status = support.ok ? 'recommended' : e.degrades === 'no' ? 'blocked' : 'partial';
      results.push({ ...base, status, support, degrades: e.degrades });
    }
  }

  if (program.opts().json) {
    jsonOut('recommend', { theme: options.theme ?? null, mui, targets: { source: targets.source, query: targets.query, browsers: targets.browsers, assumed: targets.assumed, ...(targets.note ? { note: targets.note } : {}) }, results });
    return;
  }
  const query = Array.isArray(targets.query) ? targets.query.join(', ') : targets.query;
  console.log(`recommend — ${options.theme ?? 'vanilla Material UI'} · @mui/material ${mui ?? '?'} · targets: ${query} (${targets.source})`);
  if (targets.note) {
    console.log(`note: ${targets.note}`);
  }
  const mark = { adopted: '✓', recommended: '+', blocked: '✗', partial: '⚠', unavailable: '·', 'not needed': '·', default: '·', customized: '✓' };
  const blockers = (r) => {
    const byFeature = new Map();
    for (const b of r.support.blocking) {
      byFeature.set(b.feature, [...(byFeature.get(b.feature) ?? []), b]);
    }
    return [...byFeature].map(([f, list]) => `${f} needs ${[...new Set(list.map((b) => b.needs))].join(' / ')} — not on ${list.map((b) => b.browser).slice(0, 4).join(', ')}${list.length > 4 ? ` +${list.length - 4}` : ''}`).join('; ');
  };
  const line = (r) => {
    if (r.kind === 'token') {
      const presets = r.presets ? `\n      preset: ${r.presets.map((p) => `${p} (Tailwind-inspired) — mui recommend ${r.id} --preset ${p} [--show]`).join('; ')}` : '';
      return `  ${mark[r.status]} ${r.id.padEnd(18)} ${r.status === 'default' ? `MUI default — ${r.why}; decide with the user` : 'customized'}${r.status === 'default' && r.uses ? `\n      ${r.id === 'typography' ? 'variants read by components' : 'levels read by components'}: ${r.uses}` : ''}${presets}`;
    }
    const head = `  ${mark[r.status]} ${r.id.padEnd(18)}`;
    if (r.status === 'adopted') {
      return `${head} adopted`;
    }
    if (r.status === 'unavailable' || r.status === 'not needed') {
      return `${head} ${r.detail}`;
    }
    const notes = [r.migration ? 'existing theme: ask the user (code reading theme.palette changes)' : '', r.changesLook ? 'changes the look: check with diff' : ''].filter(Boolean).join(' · ');
    const support = r.status === 'recommended' ? `supported by all targets${r.support.noData.length ? ` (no data: ${r.support.noData.join(', ')})` : ''}` : `${r.status === 'blocked' ? "don't adopt" : 'degrades'}: ${blockers(r)}`;
    // a blocked entry says only what blocks it: its benefits don't apply to this project
    if (r.status === 'blocked') {
      return `${head} ${support}`;
    }
    return `${head} ${r.why}\n      ${support}${notes ? `\n      ${notes}` : ''}\n      ${r.snippet}`;
  };
  console.log('\nPlatform');
  results.filter((r) => r.kind === 'platform').forEach((r) => console.log(line(r)));
  console.log('\nDesign tokens (report only — the look is the user\'s call)');
  results.filter((r) => r.kind === 'token').forEach((r) => console.log(line(r)));
  console.log('\n✓ adopted · + recommended (snippet to add) · ✗ a target can\'t run it · ⚠ works, degrades on some targets');
}

/**
 * What adopting a recommendation changes: a copy of the theme with the snippet deep-merged into what createTheme receives
 * (or into the exported options), diffed against the theme as it is.
 */
async function show(program, entries, options, projectDir) {
  const [e] = entries;
  if (entries.length !== 1) {
    throw new Error('--show measures one recommendation: mui recommend <id> --show');
  }
  const preset = e.kind === 'token' ? presetFile(e, options.preset) : null;
  const base = options.theme ? path.resolve(options.theme) : null;
  // a sibling of the theme, so its own imports still resolve and the render server already serves its folder
  const dir = base ? path.dirname(base) : projectDir;
  const tmp = path.join(dir, `.mui-recommend-${e.id}.theme.ts`);
  // a preset is a module of its own: copied next to the theme and imported, so its breakpoints helper resolves from the project
  const presetCopy = preset ? path.join(dir, `.mui-recommend-preset-${e.id}.ts`) : null;
  if (preset) {
    fs.copyFileSync(preset, presetCopy);
  }
  const snippet = preset ? `${e.id}: __preset` : e.snippet;
  const prelude = preset ? `import { ${e.id} as __preset } from './${path.basename(presetCopy, '.ts')}';\n` : '';
  if (base) {
    fs.writeFileSync(tmp, prelude + (await withSnippet(fs.readFileSync(base, 'utf8'), base, snippet)));
  } else {
    fs.writeFileSync(tmp, `${prelude}export default { ${snippet} };\n`);
  }
  try {
    if (!program.opts().json) {
      console.log(`${e.id}: ${preset ? `the ${options.preset} preset (Tailwind-inspired)` : `{ ${e.snippet} }`} added to ${options.theme ?? 'vanilla Material UI'} — what it changes:\n`);
    }
    await (await import('./diff.run.mjs')).run(program, [], { theme: tmp, against: base ?? 'vanilla' });
  } finally {
    fs.rmSync(tmp, { force: true });
    if (presetCopy) {
      fs.rmSync(presetCopy, { force: true });
    }
  }
}

function presetFile(e, name) {
  if (!e.presets) {
    throw new Error(`${e.id} has no preset — it is report only`);
  }
  if (!name || !e.presets[name]) {
    throw new Error(`${e.id} is a design token: pick a preset with --preset <${Object.keys(e.presets).join('|')}>`);
  }
  return path.join(DATA_DIR, 'material', e.presets[name]);
}

/** A design-token preset as a module to save next to the theme and pass to createTheme. */
function printPreset(program, entries, options) {
  if (entries.length !== 1) {
    throw new Error('--preset prints one token preset: mui recommend <typography|shadows> --preset tailwind');
  }
  const [e] = entries;
  const file = presetFile(e, options.preset);
  const source = fs.readFileSync(file, 'utf8');
  if (program.opts().json) {
    jsonOut('recommend-preset', { id: e.id, preset: options.preset, source });
    return;
  }
  console.log(`// ${e.id} — ${options.preset} preset (Tailwind-inspired). Show it to the user first: it changes the look.`);
  console.log(`// Save as ${e.id}.ts next to the theme, then: import { ${e.id} } from './${e.id}'; createTheme({ …, ${e.id} })\n`);
  console.log(source);
}

const MERGE = "const __merge = (a: any, b: any): any => (a && b && typeof a === 'object' && typeof b === 'object' && !Array.isArray(b) ? Object.fromEntries([...new Set([...Object.keys(a), ...Object.keys(b)])].map((k) => [k, k in b ? __merge(a[k], b[k]) : a[k]])) : b);\n";

/** The theme source with `snippet` deep-merged into what its first createTheme(…) receives, else into its default export. */
export async function withSnippet(source, file, snippet) {
  const { parseSource } = await import('../lib/themeCode.mjs');
  const ast = await parseSource(source, file);
  let target = null;
  const visit = (node) => {
    if (target || !node || typeof node.type !== 'string') {
      return;
    }
    if (node.type === 'CallExpression' && node.callee.type === 'Identifier' && node.callee.name === 'createTheme' && node.arguments.length) {
      target = node.arguments[0];
      return;
    }
    Object.values(node).forEach((v) => (Array.isArray(v) ? v.forEach(visit) : v && typeof v === 'object' && visit(v)));
  };
  visit(ast);
  target ??= ast.body.find((n) => n.type === 'ExportDefaultDeclaration')?.declaration;
  if (!target) {
    throw new Error(`no createTheme(…) call or default export in ${file} to add the snippet to`);
  }
  return `${MERGE}${source.slice(0, target.start)}__merge(${source.slice(target.start, target.end)}, { ${snippet} })${source.slice(target.end)}`;
}
