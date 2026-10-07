import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { DATA_DIR } from './data.mjs';
import { COMPOSITION_DEMOS_DIR, CONTENT_CASES_DIR, PROP_STATES, demoNeeds, demoUrl, generatedUrl, interactionSteps, loadRenders, propsKeyOf, stateProps } from './renders.mjs';

const RING_INSTANCES = 6;
// states that move or resize the control (a checked thumb slides, a selected tab grows); disabled turns the rules off
const GEOMETRY_STATES = PROP_STATES.filter((s) => s !== 'disabled');
// a base shared by more components than this (ButtonBase, SvgIcon, Typography) says nothing about a family
const FAMILY_BASE_MAX = 6;

let compositions;
const loadCompositions = () => (compositions ??= JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/compositions.json'), 'utf8')));
const short = (c) => c.replace(/^Mui/, '');

/** Components built on the same small base as `component` (Switch, Checkbox and Radio share SwitchBase). */
export async function familyOf(component) {
  const { loadGraph } = await import('./seams.mjs');
  const { graph } = loadGraph();
  const basesOf = (c) => [graph[c]?.extends, ...(graph[c]?.composes ?? [])].filter(Boolean);
  const dependents = (base) => Object.keys(graph).filter((c) => basesOf(c).includes(base));
  const known = new Set(Object.keys(loadRenders().components));
  const family = new Set();
  for (const base of basesOf(component)) {
    const users = dependents(base);
    if (users.length <= FAMILY_BASE_MAX) {
      users.filter((c) => c !== component && known.has(c)).forEach((c) => family.add(c));
    }
  }
  return [...family].sort();
}

/** Every case the rules run on: each recorded variant at rest and in each state that moves it, the recorded demos of a component that only renders in one, and its docs compositions. */
export function casesOf(component, { own = true } = {}) {
  const record = loadRenders();
  const entry = record.components[component];
  const cases = [];
  if (!entry || entry.standalone) {
    const variants = new Map([[`base|${entry?.parent ?? ''}`, { props: { ...entry?.props }, parent: entry?.parent, parentProps: entry?.parentProps }]]);
    const states = new Set();
    for (const r of Object.values(record.renders)) {
      if (r.component !== component || r.kind !== 'generated' || r.extra) {
        continue;
      }
      r.states.filter((s) => GEOMETRY_STATES.includes(s)).forEach((s) => states.add(s));
      const props = Object.fromEntries(Object.entries(r.props).filter(([k]) => !r.states.includes(k)));
      if (Object.keys(props).some((k) => k === 'disabled')) {
        continue;
      }
      variants.set(`${propsKeyOf(props)}|${r.parent ?? entry?.parent ?? ''}`, { props: { ...entry?.props, ...props }, parent: r.parent ?? entry?.parent, parentProps: r.parentProps ?? entry?.parentProps });
    }
    for (const v of variants.values()) {
      const label = propsKeyOf(Object.fromEntries(Object.entries(v.props).filter(([k]) => !(k in (entry?.props ?? {})))));
      for (const st of [null, ...states]) {
        const props = { ...v.props, ...(st ? stateProps([st]) : {}) };
        cases.push({ component, kind: 'variant', label: `${label}${st ? ` +${st}` : ''}`, url: generatedUrl(component, v.parent, v.parentProps), propsKey: propsKeyOf(props), interaction: [], sheet: !st });
      }
    }
  } else {
    const demos = new Set();
    for (const r of Object.values(record.renders)) {
      if (r.component === component && r.kind === 'demo' && !demos.has(r.demo) && !demoNeeds(r.demo).length) {
        demos.add(r.demo);
        cases.push({ component, kind: 'demo', label: `demo ${r.demo}`, url: demoUrl(r.demo), propsKey: 'base', interaction: r.interaction ?? [], sheet: true });
      }
    }
  }
  // hand-picked real content (data/material/content-cases/<Component>/*.tsx): long values, typed lines, long labels
  const contentDir = path.join(CONTENT_CASES_DIR, component);
  for (const file of fs.existsSync(contentDir) ? fs.readdirSync(contentDir).filter((f) => f.endsWith('.tsx')).sort() : []) {
    cases.push({ component, kind: 'content', label: `content ${file.replace(/\.tsx$/, '')}`, url: `/@fs${path.join(contentDir, file)}`, propsKey: 'base', interaction: [], sheet: true });
  }
  // a case spanning components (variants side by side) lives in _shared/ and names them: `export const components = [...]`
  const sharedDir = path.join(CONTENT_CASES_DIR, '_shared');
  for (const file of fs.existsSync(sharedDir) ? fs.readdirSync(sharedDir).filter((f) => f.endsWith('.tsx')).sort() : []) {
    const named = fs.readFileSync(path.join(sharedDir, file), 'utf8').match(/export const components = \[([^\]]*)\]/)?.[1] ?? '';
    if (named.match(/'[^']+'/g)?.some((n) => n.slice(1, -1) === component)) {
      cases.push({ component, kind: 'content', label: `content ${file.replace(/\.tsx$/, '')}`, url: `/@fs${path.join(sharedDir, file)}`, propsKey: 'base', interaction: [], sheet: true });
    }
  }
  for (const demo of loadCompositions().components[component] ?? []) {
    cases.push({ component, kind: 'composition', label: `in ${demo}`, url: `/@fs${path.join(COMPOSITION_DEMOS_DIR, `${demo}.tsx`)}`, propsKey: 'base', interaction: [], sheet: true });
  }
  // a component's own docs page demos: in a one-component run only, the whole-theme gate stays fast
  for (const demo of own ? (loadCompositions().own?.[component] ?? []) : []) {
    cases.push({ component, kind: 'own demo', label: `demo ${demo}`, url: `/@fs${path.join(COMPOSITION_DEMOS_DIR, `${demo}.tsx`)}`, propsKey: 'base', interaction: [], sheet: true });
  }
  return cases;
}

/** Run the rules on one case: touch target and dead zones on every instance, then keyboard focus onto each (up to RING_INSTANCES) for the ring. */
export async function runCase(runCapture, helpers, c, shotDir, { onlyFailing = false } = {}) {
  const failures = [];
  const checks = { target: 0, dead: 0, ring: 0 };
  let rendered = await runCapture({ gate: 'render', probeUrl: c.url, component: c.component, propsKey: c.propsKey });
  try {
    if (c.interaction.length) {
      await helpers.interact(interactionSteps(c.component, c.interaction));
      rendered = await runCapture({ gate: 'count', component: c.component });
    }
    if (rendered.type !== undefined) {
      await helpers.interact([{ type: rendered.type, ...(rendered.typeInto ? { into: `#mount ${rendered.typeInto}` } : {}) }]);
    }
    if (!rendered.instances) {
      return { case: c, instances: 0, checks, failures: [], skipped: `no ${short(c.component)} rendered` };
    }
    let shot = null;
    const takeShot = async () => {
      const file = path.join(shotDir, `${c.component}-${c.kind}-${c.label.replace(/[^\w]+/g, '_')}.png`);
      shot = await helpers.screenshotElement('#mount', file).catch(() => null);
    };
    // a whole-theme run shows its content cases even when they pass: real usage, variants side by side
    if (shotDir && c.sheet && (!onlyFailing || c.kind === 'content')) {
      await takeShot();
    }
    const where = (i) => (rendered.instances > 1 ? ` #${i + 1}` : '');
    // content rules run on every case: docs compositions are real usage too, not only the hand-picked content cases
    {
      checks.content = 0;
      for (const result of await runCapture({ gate: 'content', component: c.component })) {
        checks.content += 1;
        for (const f of result.failures) {
          failures.push({ rule: `content ${f.rule}`, instance: result.index, detail: `${short(c.component)}${where(result.index)}: ${f.detail}` });
        }
      }
    }
    const touched = await runCapture({ gate: 'touch', component: c.component });
    for (const t of touched) {
      if (t.status !== 'checked') {
        continue;
      }
      checks.target += 1;
      checks.dead += 1;
      if (!t.target.fits) {
        failures.push({ rule: 'touch target', instance: t.index, detail: `${short(c.component)}${where(t.index)}: clickable area ${t.target.area.w}×${t.target.area.h} — under 24×24, and another control is within 12px of its centre` });
      }
      if (t.dead.count) {
        const b = t.dead.box;
        failures.push({ rule: 'dead zone', instance: t.index, detail: `${short(c.component)}${where(t.index)}: ${t.dead.count}px of what it paints don't respond to a click (within ${b.w}×${b.h} at ${b.x},${b.y} of the ${t.control.w}×${t.control.h} control)` });
      }
    }
    // only instances with an enabled control of their own take keyboard focus (a Dialog's focus trap is not one)
    for (const i of touched.filter((t) => t.status === 'checked').map((t) => t.index).slice(0, RING_INSTANCES)) {
      await helpers.interact([{ tabTo: `[data-mui-gate="${i}"]` }]);
      const ring = await runCapture({ gate: 'ring', component: c.component });
      if (ring.status !== 'checked' || ring.index !== i) {
        continue;
      }
      checks.ring += 1;
      if (!ring.ring) {
        failures.push({ rule: 'focus ring', instance: i, detail: `${short(c.component)}${where(i)}: keyboard focus changes nothing visible (no outline, ring, border, fill or ripple)` });
      }
      for (const cut of ring.clipped) {
        failures.push({ rule: 'focus ring', instance: i, detail: `${short(c.component)}${where(i)}: ${cut.part} cut off by ${cut.by}px — ${cut.clipper} has overflow: ${cut.overflow}` });
      }
    }
    if (shotDir && onlyFailing && failures.length && !shot) {
      await helpers.interact([{ reset: true }]);
      await takeShot();
    }
    return { case: c, instances: rendered.instances, checks, failures, shot };
  } finally {
    await helpers.interact([{ reset: true }]);
    await runCapture({ gate: 'done' });
  }
}

/** A contact sheet of every case's screenshot, failing cases framed red with their failures listed. */
export function sheetHtml(title, results) {
  const esc = (s) => String(s).replace(/[&<>]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[ch]);
  const tiles = results.filter((r) => r.shot && fs.existsSync(r.shot)).map((r) => {
    const img = `data:image/png;base64,${fs.readFileSync(r.shot).toString('base64')}`;
    const fails = r.failures.map((f) => `<li>${esc(f.rule)}: ${esc(f.detail)}</li>`).join('');
    return `<figure class="${r.failures.length ? 'bad' : ''}"><figcaption>${esc(short(r.case.component))} · ${esc(r.case.label)}</figcaption><img src="${img}">${fails ? `<ul>${fails}</ul>` : ''}</figure>`;
  });
  return `<!doctype html><html><head><meta charset="utf-8"><style>
body{font:13px system-ui,sans-serif;margin:16px;background:#fff;color:#222}h1{font-size:16px;margin:0 0 12px}
main{display:flex;flex-wrap:wrap;gap:12px;align-items:flex-start}figure{margin:0;border:1px solid #ddd;border-radius:6px;padding:8px;max-width:920px}
figure.bad{border:2px solid #d32f2f}figcaption{font-weight:600;margin-bottom:6px}img{display:block;max-width:900px}ul{margin:6px 0 0;padding-left:18px;color:#b71c1c;max-width:880px}
</style></head><body><h1>${esc(title)}</h1><main>${tiles.join('')}</main></body></html>`;
}

export const shotDirFor = (component) => fs.mkdtempSync(path.join(os.tmpdir(), `mui-verify-${short(component)}-`));
