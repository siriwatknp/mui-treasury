// Spike: can components render for measurement without hand-written setups?
// Pass 1 generated `<C {...props}>Probe</C>`; pass 2 the component's docs demos; pass 3 a generic popup/tooltip opening rule.
// Then: do generated renders reproduce the hand-written setups' measurements (data/material/master)?
import fs from 'node:fs';
import path from 'node:path';
import { bootEngine, HARNESS_DIR } from '../src/lib/renderEngine.mjs';
import { loadSeams } from '../src/lib/seams.mjs';
import { parsePropsKey } from '../src/lib/match.mjs';
import { renderSpecs } from '../data/material/renderSpecs.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'spike/out');
const DIR = path.join(HARNESS_DIR, '_demos-spike');
fs.rmSync(DIR, { recursive: true, force: true });
fs.mkdirSync(DIR, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

const { byComponent } = await loadSeams();
const exported = (c) => fs.existsSync(path.join(ROOT, 'node_modules/@mui/material', c.replace(/^Mui/, '')));
const components = [...byComponent.keys()].filter(exported).sort();
const put = (file, text) => {
  const abs = path.join(DIR, file);
  if (!fs.existsSync(abs) || fs.readFileSync(abs, 'utf8') !== text) fs.writeFileSync(abs, text);
};
const slotsOf = (c) => [...new Set(byComponent.get(c).filter((r) => r.slot && !r.internal).map((r) => r.slot))];

const BOUNDARY = `
class B extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  render() { return this.state.error ? <div data-spike-error={String(this.state.error.message).slice(0, 200)} /> : this.props.children; }
}
export function mount(el, props) {
  return new Promise((resolve) => { const root = createRoot(el); window.__spikeRoots = [...(window.__spikeRoots ?? []), root]; root.render(<B><Render {...props} /></B>); setTimeout(resolve, 120); });
}`;

function writeGenerated(c) {
  const name = c.replace(/^Mui/, '');
  const file = `${c}.gen.jsx`;
  put(file, `import * as React from 'react';
import { createRoot } from 'react-dom/client';
import C from '@mui/material/${name}';
const Render = (props) => <C {...props}>Probe</C>;
${BOUNDARY}`);
  return `/_demos-spike/${file}`;
}

// Demos from the pinned docs source, found by what they import (no hand-kept page map).
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
function vendorDemo({ slug, file }) {
  if (!copied.has(slug)) {
    fs.cpSync(path.join(DOCS, slug), path.join(DIR, 'docs', slug), { recursive: true, filter: (f) => !/\.(md|json)$/.test(f) || fs.statSync(f).isDirectory() });
    copied.add(slug);
  }
  const base = file.replace(/\.tsx$/, '');
  put(`docs/${slug}/${base}.mount.jsx`, `import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Render from './${base}.tsx';
${BOUNDARY}`);
  return `/_demos-spike/docs/${slug}/${base}.mount.jsx`;
}
const demosOf = (c) => (byImport.get(c) ?? []).sort((a, b) => Number(b.file.includes(c.slice(3))) - Number(a.file.includes(c.slice(3)))).slice(0, 8);

const engine = await bootEngine({ hostRoot: ROOT });
const lease = await engine.acquire({});
const { page } = lease;
let consoleErrors = [];
page.on('console', (m) => m.type() === 'error' && consoleErrors.push(m.text().slice(0, 160)));
page.on('pageerror', (e) => consoleErrors.push(String(e.message).slice(0, 160)));

const reset = () => page.evaluate(() => {
  for (const root of window.__spikeRoots ?? []) root.unmount();
  window.__spikeRoots = [];
  document.getElementById('mount').innerHTML = '';
  for (const el of [...document.body.children]) {
    if (el.id !== 'mount' && el.tagName !== 'SCRIPT') el.remove();
  }
});

const reloadRace = (e) => /Execution context was destroyed|Failed to fetch dynamically imported module|__runCapture/.test(String(e.message));
async function render(url, props = {}) {
  for (let attempt = 0; ; attempt += 1) {
    consoleErrors = [];
    try {
      await reset();
      await page.evaluate(async ({ url, props }) => (await import(/* @vite-ignore */ url)).mount(document.getElementById('mount'), props), { url, props });
      break;
    } catch (e) {
      if (attempt < 12 && reloadRace(e)) {
        await page.waitForFunction(() => typeof window.__runCapture === 'function').catch(() => {});
        await page.waitForTimeout(300);
        continue;
      }
      return { error: `import: ${String(e.message).slice(0, 160)}` };
    }
  }
  const error = await page.evaluate(() => document.querySelector('[data-spike-error]')?.getAttribute('data-spike-error') ?? null);
  return { error };
}

const found = (c, slots) => page.evaluate(({ c, slots }) => slots.filter((s) => document.querySelector(`.${c}-${s}`)), { c, slots });

const TRIGGERS = '[aria-haspopup]:not([aria-haspopup="false"]), [aria-expanded="false"], [role="combobox"]';
async function openPopups(c, slots, opened) {
  let acted = 0;
  const triggers = page.locator(`#mount :is(${TRIGGERS})`);
  for (let i = 0; i < Math.min(await triggers.count(), 3); i += 1) {
    await triggers.nth(i).click({ timeout: 1000 }).catch(() => {});
    acted += 1;
  }
  const tips = page.locator('#mount [aria-label]');
  for (let i = 0; i < Math.min(await tips.count(), 2); i += 1) {
    await tips.nth(i).hover({ timeout: 1000 }).catch(() => {});
    acted += 1;
  }
  await page.waitForTimeout(acted ? 400 : 0);
  for (const x of await found(c, slots)) opened.add(x);
  const buttons = page.locator('#mount button');
  for (let i = 0; i < Math.min(await buttons.count(), 4) && opened.size < slots.length; i += 1) {
    await buttons.nth(i).click({ timeout: 1000 }).catch(() => {});
    await page.waitForTimeout(300);
    for (const x of await found(c, slots)) opened.add(x);
  }
  return acted;
}

// Warm-up: import every module once so Vite's dependency optimizer settles (it reloads the page on new deps).
const urls = [];
for (const c of components) {
  urls.push(writeGenerated(c));
  for (const d of demosOf(c)) urls.push(vendorDemo(d));
}
for (let round = 0; round < 6; round += 1) {
  let reloads = 0;
  for (const url of urls) {
    try {
      await page.evaluate((u) => import(/* @vite-ignore */ u).then(() => null, () => null), url);
    } catch (e) {
      if (!reloadRace(e)) throw e;
      reloads += 1;
      await page.waitForFunction(() => typeof window.__runCapture === 'function').catch(() => {});
    }
  }
  console.log(`warm-up round ${round}: ${reloads} reloads`);
  if (!reloads) break;
}

const report = [];
for (const c of components) {
  const slots = slotsOf(c);
  const row = { component: c, slots: slots.length, gen: null, genError: null, demos: null, demosOpened: null, demosTried: 0, missing: [] };
  const gen = await render(writeGenerated(c));
  row.genError = gen.error ?? consoleErrors.find((e) => /required|Failed prop|Warning/.test(e)) ?? null;
  const genFound = gen.error ? [] : await found(c, slots);
  row.gen = genFound.length;
  const union = new Set(genFound);
  const opened = new Set(genFound);
  for (const d of demosOf(c)) {
    if (union.size === slots.length && opened.size === slots.length) break;
    row.demosTried += 1;
    const r = await render(vendorDemo(d));
    if (r.error) continue;
    for (const s of await found(c, slots)) union.add(s);
    for (const s of union) opened.add(s);
    await openPopups(c, slots, opened);
  }
  for (const s of union) opened.add(s);
  row.demos = union.size;
  row.demosOpened = opened.size;
  row.missing = slots.filter((s) => !opened.has(s));
  report.push(row);
  process.stdout.write(`${c.padEnd(28)} slots ${String(slots.length).padStart(2)}  gen ${String(row.gen).padStart(2)}  +demos ${String(row.demos).padStart(2)}  +open ${String(row.demosOpened).padStart(2)}${row.genError ? `  genErr: ${row.genError.slice(0, 70)}` : ''}\n`);
}

// Compare generated renders with the hand-written setups' stored measurements.
const compare = [];
for (const [c, variants] of Object.entries(renderSpecs)) {
  const master = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/material/master', `${c}.json`), 'utf8'));
  for (const [key, spec] of Object.entries(variants)) {
    await render(writeGenerated(c), parsePropsKey(key));
    const got = await page.evaluate(({ c, reads }) => Object.fromEntries(reads.map((read) => {
      const [slot, prop] = read.split('.');
      const el = document.querySelector(`.${c}-${slot}`);
      return [read, el ? getComputedStyle(el)[prop] : null];
    })), { c, reads: spec.reads });
    for (const read of spec.reads) {
      const want = master[key]?.styles?.[read];
      const real = slotsOf(c).includes(read.split('.')[0]);
      compare.push({ component: c, key, read, want, got: got[read], status: got[read] == null ? (real ? 'missing' : 'probe-only name') : got[read] === want ? 'match' : 'differ' });
    }
  }
}

await engine.release(lease);
await engine.close();
fs.rmSync(DIR, { recursive: true, force: true });
fs.writeFileSync(path.join(OUT, 'coverage.json'), JSON.stringify({ report, compare }, null, 2));
const full = (n) => report.filter((r) => n(r) === r.slots).length;
console.log(`\ncomponents ${report.length}: all slots via gen ${full((r) => r.gen)} · +demos ${full((r) => r.demos)} · +open ${full((r) => r.demosOpened)} · root rendered by gen ${report.filter((r) => r.gen > 0).length}`);
const tally = compare.reduce((t, x) => ({ ...t, [x.status]: (t[x.status] ?? 0) + 1 }), {});
console.log(`hand-written comparison (${compare.length} reads): ${JSON.stringify(tally)}`);
