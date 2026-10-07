// Spike: confirm every extracted style row without hand-written setups, to size what is left for an exception list.
// Phase 1 generated renders (variants from object matchers, props solved for function matchers, states via props / mouse / keyboard, touch emulation).
// Phase 2 docs demos for what is left (open popups, click the component's elements, then hover / Tab).
import fs from 'node:fs';
import path from 'node:path';
import { bootEngine, HARNESS_DIR, runOn } from '../src/lib/renderEngine.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'spike/out');
const DIR = path.join(HARNESS_DIR, '_demos-exceptions');
fs.mkdirSync(DIR, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/material/seams.json'), 'utf8'));
const exported = (c) => fs.existsSync(path.join(ROOT, 'node_modules/@mui/material', c.replace(/^Mui/, '')));
const only = process.env.ONLY?.split(',');
const rows = data.rows.filter((r) => !r.internal && exported(r.component) && (!only || only.includes(r.component)));
const fnOf = Object.fromEntries(Object.entries(data.fns).map(([id, src]) => [id, new Function(`return (${src})`)()]));

const PROP_STATES = ['selected', 'disabled', 'checked', 'error', 'active', 'expanded', 'completed'];
const tokensOf = (r) => {
  const sel = (r.selector ?? []).join(' ');
  return [...new Set([...[...sel.matchAll(/\.Mui-(\w+)/g)].map((m) => m[1]), ...[...sel.matchAll(/:(hover|active|focus-visible|focus)\b/g)].map((m) => `:${m[1]}`)])];
};
const reachOf = (t) => (PROP_STATES.includes(t) ? 'prop' : t === ':hover' ? 'hover' : t === ':active' ? 'press' : ['focusVisible', 'focused', ':focus', ':focus-visible'].includes(t) ? 'keyboard' : null);
const touchOf = (r) => (r.selector ?? []).some((s) => /hover:\s*none/.test(s));

// Props that satisfy a function matcher, tried from values the component's rows and the function itself use.
const NODE = '@node';
function solveFn(r) {
  const fn = fnOf[r.matcher.fn];
  const src = data.fns[r.matcher.fn];
  const names = [...new Set([...src.matchAll(/(?:ownerState|props)\.(\w+)/g)].map((m) => m[1]))].slice(0, 4);
  const literals = [...src.matchAll(/'([\w-]+)'/g)].map((m) => m[1]);
  const seen = (n) => [...new Set(rows.filter((x) => x.component === r.component && x.matcher && !x.matcher.fn && n in x.matcher).map((x) => x.matcher[n]))];
  const candidates = names.map((n) => [undefined, true, ...seen(n), ...literals, NODE]);
  const test = (props) => {
    try {
      return Boolean(fn({ ...props, ownerState: props }));
    } catch {
      return false;
    }
  };
  let best = null;
  const walk = (i, acc) => {
    if (best) return;
    if (i === names.length) {
      if (test(acc)) best = Object.fromEntries(Object.entries(acc).filter(([, v]) => v !== undefined));
      return;
    }
    for (const v of candidates[i]) walk(i + 1, { ...acc, [names[i]]: v });
  };
  walk(0, {});
  return best;
}

const put = (file, text) => {
  const abs = path.join(DIR, file);
  if (!fs.existsSync(abs) || fs.readFileSync(abs, 'utf8') !== text) fs.writeFileSync(abs, text);
};
const genUrl = (c) => {
  put(`${c}.jsx`, `import * as React from 'react';
import C from '@mui/material/${c.slice(3)}';
import SvgIcon from '@mui/material/SvgIcon';
const node = <SvgIcon><path d="M12 2 2 22h20L12 2z" /></SvgIcon>;
export const Render = (props) => <C {...Object.fromEntries(Object.entries(props).map(([k, v]) => [k, v === '${NODE}' ? node : v]))}>Probe</C>;
`);
  return `/_demos-exceptions/${c}.jsx`;
};
const keyOf = (props) => Object.entries(props).map(([k, v]) => `${k}=${v}`).join(',') || 'base';

// Demos from the pinned docs, found by import.
const DOCS = path.join(ROOT, 'vendor/material-ui@9.4.0/docs/data/material/components');
const byImport = new Map();
for (const slug of fs.readdirSync(DOCS)) {
  const dir = path.join(DOCS, slug);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.tsx'))) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    if (!/export default/.test(src)) continue;
    const names = new Set([...src.matchAll(/from '@mui\/material\/(\w+)'/g)].map((m) => m[1]));
    for (const m of src.matchAll(/import \{([^}]+)\} from '@mui\/material'/g)) for (const n of m[1].split(',')) names.add(n.trim().split(' ')[0]);
    for (const n of names) byImport.set(`Mui${n}`, [...(byImport.get(`Mui${n}`) ?? []), { slug, file: f }]);
  }
}
const copied = new Set();
function demoUrl({ slug, file }) {
  if (!copied.has(slug)) {
    fs.cpSync(path.join(DOCS, slug), path.join(DIR, 'docs', slug), { recursive: true, filter: (f) => fs.statSync(f).isDirectory() || /\.(tsx?|js)$/.test(f) });
    copied.add(slug);
  }
  const base = file.replace(/\.tsx$/, '');
  put(`docs/${slug}/${base}.render.jsx`, `export { default as Render } from './${base}.tsx';\n`);
  return `/_demos-exceptions/docs/${slug}/${base}.render.jsx`;
}

// Phase 1 plan: one generated render per (component, variant props, states, touch, hover target).
const plan = new Map();
const unsolved = new Set();
for (const r of rows) {
  let props = {};
  if (r.matcher?.fn) {
    const solved = solveFn(r);
    if (!solved) {
      unsolved.add(r.id);
      continue;
    }
    props = solved;
  } else if (r.matcher) {
    props = r.matcher;
  }
  const tokens = tokensOf(r).filter(reachOf);
  props = { ...props, ...Object.fromEntries(tokens.filter((t) => reachOf(t) === 'prop').map((t) => [t, true])) };
  const pointer = tokens.some((t) => ['hover', 'press'].includes(reachOf(t)));
  const key = [r.component, keyOf(props), tokens.sort().join('+'), touchOf(r), pointer ? r.slot : ''].join('|');
  plan.set(key, { c: r.component, props, tokens, touch: touchOf(r), slot: r.slot });
}

const engine = await bootEngine({ hostRoot: ROOT });
const lease = await engine.acquire({});
const { page } = lease;
const cdp = await page.context().newCDPSession(page);
const run = (cfg) => runOn(page, cfg);

// warm-up so Vite's dependency optimizer settles before measuring
const components = [...new Set(rows.map((r) => r.component))];
const warm = [...components.map(genUrl), ...components.flatMap((c) => (byImport.get(c) ?? []).slice(0, 10).map(demoUrl))];
for (let round = 0; round < 6; round += 1) {
  let reloads = 0;
  for (const u of warm) {
    try {
      await page.evaluate((x) => import(/* @vite-ignore */ x).then(() => null, () => null), u);
    } catch {
      reloads += 1;
      await page.waitForFunction(() => typeof window.__runCapture === 'function').catch(() => {});
    }
  }
  if (!reloads) break;
}
await run({ seamRows: { rows: data.rows, fns: data.fns } });

const outcomes = new Map();
// demos carry their own styles: they can confirm a row, never fail it
const record = (results, how) => {
  for (const x of results) {
    const y = how.startsWith('demo') && x.status === 'mismatch' ? { ...x, status: 'overridden-by-demo' } : x;
    outcomes.set(x.id, [...(outcomes.get(x.id) ?? []), { ...y, how }]);
  }
};
const confirmed = (id) => (outcomes.get(id) ?? []).some((o) => o.status === 'match');

async function attempt({ c, url, props, tokens, touch, slot, before }) {
  const reaches = new Set(tokens.map(reachOf));
  await cdp.send('Emulation.setEmulatedMedia', { features: [{ name: 'hover', value: touch ? 'none' : 'hover' }] });
  await page.mouse.move(0, 0);
  await page.evaluate(() => document.activeElement?.blur());
  try {
    await run({ probeUrl: url, component: c, propsKey: keyOf(props), verifySeams: true, hold: true });
  } catch {
    return null;
  }
  if (before) await before();
  if (reaches.has('keyboard')) {
    await page.locator('body').click({ position: { x: 1, y: 1 } }).catch(() => {});
    await page.keyboard.press('Tab');
  }
  if (reaches.has('hover') || reaches.has('press')) {
    const own = page.locator(`.${c}-${slot}`).first();
    await ((await own.count()) ? own : page.locator(`.${c}-root`).first()).hover({ timeout: 800, force: true }).catch(() => {});
  }
  if (reaches.has('press')) await page.mouse.down();
  const out = await run({ measureHeld: true }).catch(() => null);
  if (reaches.has('press')) await page.mouse.up();
  return out?.results ?? null;
}

let renders = 0;
for (const p of plan.values()) {
  const results = await attempt({ ...p, url: genUrl(p.c) });
  renders += 1;
  if (results) record(results, `generated ${p.c}[${keyOf(p.props)}]${p.tokens.length ? ` +${p.tokens.join('+')}` : ''}${p.touch ? ' touch' : ''}`);
}
const afterPhase1 = new Set(rows.filter((r) => confirmed(r.id)).map((r) => r.id));

// Phase 2: docs demos for components with rows left.
const TRIGGERS = '[aria-haspopup]:not([aria-haspopup="false"]), [aria-expanded="false"], [role="combobox"]';
const openPopups = async () => {
  const t = page.locator(`#mount :is(${TRIGGERS})`);
  if (await t.count()) {
    await t.first().click({ timeout: 800 }).catch(() => {});
    await page.waitForTimeout(250);
  }
};
const left = (c) => rows.filter((r) => r.component === c && !confirmed(r.id) && !unsolved.has(r.id));
for (const c of components) {
  const groups = new Map();
  for (const r of left(c)) {
    const tokens = tokensOf(r).filter(reachOf);
    const pointer = tokens.some((t) => ['hover', 'press'].includes(reachOf(t)));
    const key = [tokens.sort().join('+'), touchOf(r), pointer ? r.slot : ''].join('|');
    groups.set(key, { tokens, touch: touchOf(r), slot: r.slot });
  }
  if (!groups.size) continue;
  for (const demo of (byImport.get(c) ?? []).slice(0, 10)) {
    const url = demoUrl(demo);
    for (const g of groups.values()) {
      if (!left(c).length) break;
      const needsProp = g.tokens.some((t) => reachOf(t) === 'prop');
      const befores = [null, openPopups, ...(needsProp ? [0, 1, 2].map((i) => async () => {
        await openPopups();
        await page.locator(`.${c}-root`).nth(i).click({ timeout: 800, force: true }).catch(() => {});
        await page.waitForTimeout(150);
      }) : [])];
      for (const before of befores) {
        const results = await attempt({ c, url, props: {}, ...g, before });
        renders += 1;
        if (results) record(results, `demo ${demo.slug}/${demo.file}${before ? ' +interaction' : ''}${g.tokens.length ? ` +${g.tokens.join('+')}` : ''}${g.touch ? ' touch' : ''}`);
      }
    }
  }
}

await engine.release(lease);
await engine.close();
fs.rmSync(DIR, { recursive: true, force: true });

// Classify what is left.
const reasonOf = (r) => {
  const st = (outcomes.get(r.id) ?? []).map((o) => o.status);
  const sel = (r.selector ?? []).join(' ');
  if (unsolved.has(r.id)) return 'function matcher not solvable from literals';
  if (st.includes('mismatch')) return 'MISMATCH';
  if (st.includes('pseudo-element')) return 'pseudo-element (::before/::after) — verifier skips';
  if (st.includes('harness-disabled')) return 'transition/animation — harness disables motion';
  if (st.includes('unresolvable')) return 'value the browser rejects';
  if (st.includes('inline')) return 'set inline by the component at runtime';
  if (/@media/.test(sel) && !/hover/.test(sel)) return 'width/print media query';
  if (/@keyframes/.test(sel)) return 'keyframes';
  if (!st.length) return 'never rendered';
  return 'rendered, row never applied (context / optional content / combination)';
};
const remaining = rows.filter((r) => !confirmed(r.id));
const byReason = {};
for (const r of remaining) (byReason[reasonOf(r)] ??= []).push(r.id);
const byComponent = {};
for (const id of byReason['rendered, row never applied (context / optional content / combination)'] ?? []) {
  const c = id.split('|')[0];
  byComponent[c] = (byComponent[c] ?? 0) + 1;
}
fs.writeFileSync(path.join(OUT, 'exceptions.json'), JSON.stringify({ byReason, byComponent, mismatches: remaining.filter((r) => reasonOf(r) === 'MISMATCH').map((r) => ({ id: r.id, outcomes: outcomes.get(r.id) })) }, null, 2));
console.log(`rows ${rows.length} · confirmed after generated ${afterPhase1.size} · after demos ${rows.length - remaining.length} · renders ${renders}`);
for (const [reason, ids] of Object.entries(byReason).sort((a, b) => b[1].length - a[1].length)) console.log(`${String(ids.length).padStart(5)}  ${reason}`);
console.log('unapplied by component:', JSON.stringify(Object.entries(byComponent).sort((a, b) => b[1] - a[1])));
