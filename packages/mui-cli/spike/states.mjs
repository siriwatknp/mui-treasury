// Spike: reach each state the extracted rows depend on, honestly (props, real mouse, keyboard), and check the rows render as extracted.
import fs from 'node:fs';
import path from 'node:path';
import { bootEngine, HARNESS_DIR, runOn } from '../src/lib/renderEngine.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'spike/out');
const DIR = path.join(HARNESS_DIR, '_demos-states');
fs.mkdirSync(DIR, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/material/seams.json'), 'utf8'));
const rows = data.rows.filter((r) => !r.internal);
const exported = (c) => fs.existsSync(path.join(ROOT, 'node_modules/@mui/material', c.replace(/^Mui/, '')));

const PROP_STATES = ['selected', 'disabled', 'checked', 'error', 'active', 'expanded', 'completed'];
const tokensOf = (r) => {
  const sel = (r.selector ?? []).join(' ');
  return [
    ...new Set([
      ...[...sel.matchAll(/\.Mui-(\w+)/g)].map((m) => m[1]),
      ...[...sel.matchAll(/:(hover|active|focus-visible|focus)\b/g)].map((m) => `:${m[1]}`),
    ]),
  ];
};
const stateRows = rows.filter((r) => tokensOf(r).length && exported(r.component));
const reachOf = (t) => (PROP_STATES.includes(t) ? 'prop' : t === ':hover' ? 'hover' : t === ':active' ? 'press' : ['focusVisible', 'focused', ':focus', ':focus-visible'].includes(t) ? 'keyboard' : null);

const put = (file, text) => {
  const abs = path.join(DIR, file);
  if (!fs.existsSync(abs) || fs.readFileSync(abs, 'utf8') !== text) fs.writeFileSync(abs, text);
};
const urlOf = (c) => {
  put(`${c}.jsx`, `import * as React from 'react';\nimport C from '@mui/material/${c.slice(3)}';\nexport const Render = (props) => <C {...props}>Probe</C>;\n`);
  return `/_demos-states/${c}.jsx`;
};
const keyOf = (props) => Object.entries(props).map(([k, v]) => `${k}=${v}`).join(',') || 'base';

// one render per (component, row variant, the row's full state combination)
const plan = new Map();
for (const r of stateRows) {
  const tokens = tokensOf(r);
  if (!tokens.every(reachOf)) continue;
  const props = r.matcher && !r.matcher.fn ? r.matcher : {};
  const key = `${r.component}|${r.slot}|${JSON.stringify(props)}|${[...tokens].sort().join('+')}`;
  plan.set(key, { c: r.component, slot: r.slot, props, tokens });
}
const engine = await bootEngine({ hostRoot: ROOT });
const lease = await engine.acquire({});
const { page } = lease;
const run = (cfg) => runOn(page, cfg);
for (const c of new Set([...plan.values()].map((p) => p.c))) await run({ probeUrl: urlOf(c), component: c, propsKey: 'base', verifySeams: true }).catch(() => null);
await run({ seamRows: { rows: data.rows, fns: data.fns } });

const outcomes = new Map();
const renderErrors = [];
for (const { c, slot, props: variant, tokens } of plan.values()) {
  const props = { ...variant, ...Object.fromEntries(tokens.filter((t) => reachOf(t) === 'prop').map((t) => [t, true])) };
  const reaches = new Set(tokens.map(reachOf));
  await page.mouse.move(0, 0);
  await page.evaluate(() => document.activeElement?.blur());
  try {
    await run({ probeUrl: urlOf(c), component: c, propsKey: keyOf(props), verifySeams: true, hold: true });
  } catch (e) {
    renderErrors.push(`${c} ${tokens.join('+')} ${keyOf(props)}: ${String(e.message).split('\n')[0].slice(0, 120)}`);
    continue;
  }
  if (reaches.has('keyboard')) {
    await page.locator('body').click({ position: { x: 1, y: 1 } }).catch(() => {});
    await page.keyboard.press('Tab');
  }
  if (reaches.has('hover') || reaches.has('press')) {
    const own = page.locator(`#mount .${c}-${slot}`).first();
    await ((await own.count()) ? own : page.locator(`#mount .${c}-root`).first()).hover({ timeout: 1000, force: true }).catch(() => {});
  }
  if (reaches.has('press')) await page.mouse.down();
  const reached = await page.evaluate(({ c, tokens }) => {
    const root = document.querySelector(`#mount .${c}-root`);
    if (!root) return false;
    const all = [root, ...root.querySelectorAll('*')];
    return tokens.every((t) => (t.startsWith(':') ? all.some((el) => el.matches(t)) : all.some((el) => el.classList.contains(`Mui-${t}`))));
  }, { c, tokens });
  const { results } = await run({ measureHeld: true });
  if (reaches.has('press')) await page.mouse.up();
  for (const r of results) outcomes.set(r.id, [...(outcomes.get(r.id) ?? []), { ...r, reached, render: `${c}[${keyOf(props)}]` }]);
}
await engine.release(lease);
await engine.close();
fs.rmSync(DIR, { recursive: true, force: true });

const byToken = {};
const mismatches = [];
for (const r of stateRows) {
  for (const t of tokensOf(r)) {
    const list = outcomes.get(r.id) ?? [];
    const best = list.find((o) => o.status === 'match') ?? list.find((o) => o.status === 'mismatch') ?? list[0];
    const status = !reachOf(t) ? 'no-reach-rule' : best?.status ?? 'not-rendered';
    const tally = (byToken[t] ??= { rows: 0 });
    tally.rows += 1;
    tally[status] = (tally[status] ?? 0) + 1;
    if (best?.status === 'mismatch') mismatches.push({ id: r.id, token: t, expected: best.expected, got: best.got, render: best.render });
  }
}
const notApplied = stateRows.filter((r) => !(outcomes.get(r.id) ?? []).some((o) => o.status === 'match')).map((r) => {
  const list = outcomes.get(r.id) ?? [];
  return { id: r.id, tokens: tokensOf(r), matcher: r.matcher?.fn ? 'fn' : r.matcher ? 'object' : 'none', media: (r.selector ?? []).some((x) => x.startsWith('@media')), reached: list.some((o) => o.reached), renders: list.length };
});
fs.writeFileSync(path.join(OUT, 'states.json'), JSON.stringify({ byToken, mismatches, renderErrors, notApplied }, null, 2));
console.table(byToken);
console.log(`state rows ${stateRows.length}; matched ${new Set(stateRows.filter((r) => (outcomes.get(r.id) ?? []).some((o) => o.status === 'match')).map((r) => r.id)).size}; mismatches ${mismatches.length}; render errors ${renderErrors.length}`);
