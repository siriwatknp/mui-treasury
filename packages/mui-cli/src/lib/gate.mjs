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

/** A content case's `export const interaction = ['popup']`: what the gate does to it before checking, the way a user would. */
const interactionOf = (file) => [...(/export const interaction = \[([^\]]*)\]/.exec(fs.readFileSync(file, 'utf8'))?.[1].matchAll(/'([^']+)'/g) ?? [])].map((m) => m[1]);

/** Every case the rules run on: each recorded variant at rest and in each state that moves it, the recorded demos of a component that only renders in one, and its docs compositions. */
export function casesOf(component, { own = true } = {}) {
  const record = loadRenders();
  const entry = record.components[component];
  const cases = [];
  if (!entry || entry.standalone) {
    const variants = new Map([[`base|${entry?.parent ?? ''}`, { props: { ...entry?.props }, parent: entry?.parent, parentProps: entry?.parentProps }]]);
    const states = new Set();
    const isPublic = (k) => !entry?.api || entry.api.includes(k);
    for (const r of Object.values(record.renders)) {
      if (r.component !== component || r.kind !== 'generated' || r.extra) {
        continue;
      }
      r.states.filter((s) => GEOMETRY_STATES.includes(s) && isPublic(s)).forEach((s) => states.add(s));
      const props = Object.fromEntries(Object.entries(r.props).filter(([k]) => !r.states.includes(k)));
      if (Object.keys(props).some((k) => k === 'disabled' || !isPublic(k))) {
        continue;
      }
      const own = Object.fromEntries(Object.entries(props).filter(([k, v]) => entry?.props?.[k] !== v));
      variants.set(`${propsKeyOf(own)}|${r.parent ?? entry?.parent ?? ''}`, { props: { ...entry?.props, ...props }, parent: r.parent ?? entry?.parent, parentProps: r.parentProps ?? entry?.parentProps });
    }
    for (const v of variants.values()) {
      const label = `${propsKeyOf(Object.fromEntries(Object.entries(v.props).filter(([k, val]) => entry?.props?.[k] !== val)))}${v.parent ? ` in ${short(v.parent)}` : ''}`;
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
    cases.push({ component, kind: 'content', label: `content ${file.replace(/\.tsx$/, '')}`, url: `/@fs${path.join(contentDir, file)}`, propsKey: 'base', interaction: interactionOf(path.join(contentDir, file)), sheet: true });
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
  if (cases.some((c) => c.kind !== 'variant')) {
    cases.filter((c) => c.kind === 'variant').forEach((c) => {
      c.covered = true;
    });
  }
  return cases;
}

/** One case per demo file and interaction: a docs demo or content case that renders several components (Dialog, DialogTitle, DialogActions) is rendered once and checks each of them. */
export function mergeCases(cases) {
  const byUrl = new Map();
  const out = [];
  for (const c of cases) {
    if (c.kind === 'variant') {
      out.push(c);
      continue;
    }
    const key = `${c.url.replace(/^.*\/(render-demos|composition-demos)\//, 'demo:')}|${c.interaction.join('+')}`;
    const first = byUrl.get(key);
    if (first) {
      if (!first.components.includes(c.component)) {
        first.components.push(c.component);
      }
      continue;
    }
    const merged = { ...c, components: [c.component] };
    byUrl.set(key, merged);
    out.push(merged);
  }
  return out;
}

/** Run the rules on one case: touch target and dead zones on every instance, then keyboard focus onto each (up to RING_INSTANCES) for the ring. */
export async function runCase(runCapture, helpers, c, shotDir, { onlyFailing = false } = {}) {
  const failures = [];
  const checks = { target: 0, dead: 0, ring: 0 };
  let rendered = await runCapture({ gate: 'render', probeUrl: c.url, component: c.component, propsKey: c.propsKey });
  try {
    if (rendered.error) {
      throw new Error(rendered.error);
    }
    if (c.interaction.length) {
      await helpers.interact(interactionSteps(c.component, c.interaction));
      if (c.interaction.includes('popup')) {
        const items = await runCapture({ gate: 'items' });
        checks.items = items.length;
        if (!items.length) {
          failures.push({ rule: 'popup', instance: 0, detail: `${short(c.component)}: the popup opened no items to check` });
        }
        for (const item of items) {
          if (!item.fits) {
            failures.push({ rule: 'touch target', instance: item.index, detail: `${short(c.component)} item "${item.label}": ${item.size.w}×${item.size.h} — under 24×24 and closer than 24px to the next item` });
          }
          if (item.squeezed) {
            failures.push({ rule: 'content squeezed', instance: item.index, detail: `${short(c.component)} item "${item.label}": its text doesn't fit its ${item.size.h}px-tall box (items shrink or overlap)` });
          }
        }
        if (c.kind === 'content') {
          const shot = shotDir && c.sheet ? await helpers.screenshotElement('body', path.join(shotDir, `${c.component}-${c.kind}-${c.label.replace(/[^\w]+/g, '_')}.png`)).catch(() => null) : null;
          return { case: c, instances: rendered.instances ?? 0, checks, failures, shot };
        }
      }
      rendered = await runCapture({ gate: 'count', component: c.component });
    }
    let shot = null;
    const takeShot = async () => {
      const file = path.join(shotDir, `${c.component}-${c.kind}-${c.label.replace(/[^\w]+/g, '_')}.png`);
      shot = await helpers.screenshotElement('#mount', file).catch(() => null);
    };
    let instances = 0;
    let controls = 0;
    for (const [n, component] of (c.components ?? [c.component]).entries()) {
      if (n > 0) {
        await helpers.interact([{ reset: true }]);
        rendered = await runCapture({ gate: 'count', component });
      }
      if (!rendered.instances) {
        continue;
      }
      if (!instances && shotDir && c.sheet && (!onlyFailing || c.kind === 'content')) {
        await takeShot();
      }
      instances += rendered.instances;
      const count = rendered.instances;
      const where = (i) => (count > 1 ? ` #${i + 1}` : '');
      checks.content = checks.content ?? 0;
      for (const result of await runCapture({ gate: 'content', component })) {
        checks.content += 1;
        for (const f of result.failures) {
          failures.push({ rule: `content ${f.rule}`, instance: result.index, detail: `${short(component)}${where(result.index)}: ${f.detail}` });
        }
      }
      const touched = await runCapture({ gate: 'touch', component });
      for (const t of touched) {
        if (t.status !== 'checked') {
          continue;
        }
        controls += 1;
        checks.target += 1;
        checks.dead += 1;
        if (!t.target.fits) {
          failures.push({ rule: 'touch target', instance: t.index, detail: `${short(component)}${where(t.index)}: clickable area ${t.target.area.w}×${t.target.area.h} — under 24×24, and another control is within 12px of its centre` });
        }
        if (t.dead.count) {
          const box = t.dead.box;
          failures.push({ rule: 'dead zone', instance: t.index, detail: `${short(component)}${where(t.index)}: ${t.dead.count}px of what it paints don't respond to a click (within ${box.w}×${box.h} at ${box.x},${box.y} of the ${t.control.w}×${t.control.h} control)` });
        }
      }
      // only instances with an enabled control of their own take keyboard focus (a Dialog's focus trap is not one)
      for (const i of touched.filter((t) => t.status === 'checked').map((t) => t.index).slice(0, RING_INSTANCES)) {
        await helpers.interact([{ tabTo: `[data-mui-gate="${i}"]` }]);
        const ring = await runCapture({ gate: 'ring', component });
        if (ring.status !== 'checked' || ring.index !== i) {
          continue;
        }
        checks.ring += 1;
        if (!ring.ring) {
          failures.push({ rule: 'focus ring', instance: i, detail: `${short(component)}${where(i)}: keyboard focus changes nothing visible (no outline, ring, border, fill or ripple)` });
        }
        for (const cut of ring.clipped) {
          failures.push({ rule: 'focus ring', instance: i, detail: `${short(component)}${where(i)}: ${cut.part} cut off by ${cut.by}px — ${cut.clipper} has overflow: ${cut.overflow}` });
        }
      }
    }
    if (!instances) {
      return { case: c, instances: 0, checks, failures: [], skipped: `no ${(c.components ?? [c.component]).map(short).join(' / ')} rendered` };
    }
    if (c.covered && !controls) {
      return { case: c, instances, checks: { target: 0, dead: 0, ring: 0 }, failures: [], skipped: 'covered by its demos: a bare render has no control of its own', covered: true };
    }
    if (shotDir && onlyFailing && failures.length && !shot) {
      await helpers.interact([{ reset: true }]);
      await takeShot();
    }
    const seen = new Set();
    const unique = failures.filter((f) => !seen.has(`${f.rule}|${f.detail}`) && seen.add(`${f.rule}|${f.detail}`));
    return { case: c, instances, checks, failures: unique, shot };
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
