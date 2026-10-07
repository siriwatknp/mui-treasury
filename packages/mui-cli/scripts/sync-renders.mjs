// Confirm every extracted style row in a real render, without hand-written setups, and record how (data/material/renders.json):
// 1. generated `<Component {...props}>Probe</Component>`: variants from row matchers, props solved for function matchers,
//    states through props, the mouse or the keyboard, touch devices emulated;
// 2. docs demos for what is left: open popups, press buttons, hover tooltip triggers, click the component.
// Demo renders can confirm a row but never fail it (they carry their own styles). Exits 1 on any mismatch.
import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from '../src/lib/data.mjs';
import { bootEngine, helpersFor, runOn } from '../src/lib/renderEngine.mjs';
import { coreOnly, demoIndex, shipDemo } from './lib/docsDemos.mjs';
import { FN, PROP_STATES, RENDER_DEMOS_DIR, NODE, generatedUrl, mediaOf, pointerTargetOf, propsKeyOf, reachOf, stateProps, statesOf, stepsFor, touchOf } from '../src/lib/renders.mjs';
import { readPins, tagFor, vendorPath, vendorTag } from './lib/pins.mjs';
import { propTypesOf, requiredPropsOf } from './lib/propTypes.mjs';

const version = readPins().material;
const VENDOR = vendorPath('material', version);
if (vendorTag(VENDOR) !== tagFor(version)) {
  throw new Error(`vendor/material-ui@${version} missing or not at ${tagFor(version)} — run \`pnpm vendor\``);
}
const DOCS = path.join(VENDOR, 'docs/data/material/components');
const SEAMS = path.join(DATA_DIR, 'material/seams.json');
const { graph } = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/graph.json'), 'utf8'));
const data = JSON.parse(fs.readFileSync(SEAMS, 'utf8'));
const only = process.env.ONLY?.split(',');
const exported = (c) => fs.existsSync(path.join(path.dirname(DATA_DIR), 'node_modules/@mui/material', c.replace(/^Mui/, '')));
const rows = data.rows.filter((r) => !r.internal && exported(r.component) && (!only || only.includes(r.component)));
const fnOf = Object.fromEntries(Object.entries(data.fns).map(([id, src]) => [id, new Function(`return (${src})`)()]));
const log = (msg) => process.stderr.write(`${msg}\n`);

/** Props satisfying a function matcher, tried from values the component's rows and the function itself use. */
function solveFn(row) {
  const src = data.fns[row.matcher.fn];
  const names = [...new Set([...src.matchAll(/(?:ownerState|props)\.(\w+)/g)].map((m) => m[1]))].slice(0, 4);
  const literals = [...src.matchAll(/'([\w-]+)'/g)].map((m) => m[1]);
  const seen = (n) => [...new Set(rows.filter((x) => x.component === row.component && x.matcher && !x.matcher.fn && n in x.matcher).map((x) => x.matcher[n]))];
  const types = propTypesOf(path.dirname(DATA_DIR), row.component);
  const typed = (n) => (types[n] ? [...types[n].literals, ...(types[n].kind === 'fn' ? [FN] : [])] : []);
  const candidates = names.map((n) => [undefined, true, false, ...seen(n), ...typed(n), ...literals, NODE, 'Probe']);
  const holds = (props) => {
    try {
      return Boolean(fnOf[row.matcher.fn]({ ...props, ownerState: props }));
    } catch {
      return false;
    }
  };
  let found = null;
  const walk = (i, acc) => {
    if (found) {
      return;
    }
    if (i === names.length) {
      if (holds(acc)) {
        found = Object.fromEntries(Object.entries(acc).filter(([, v]) => v !== undefined));
      }
      return;
    }
    for (const v of candidates[i]) {
      walk(i + 1, { ...acc, [names[i]]: v });
    }
  };
  walk(0, {});
  return found;
}

// Docs demos found by what they import; demos needing only react + @mui/material first (they render in any project), then the component's own page
const byImport = demoIndex(DOCS);
const demosOf = (c) =>
  (byImport.get(c) ?? [])
    .slice()
    .sort((a, b) => Number(coreOnly(DOCS, b)) - Number(coreOnly(DOCS, a)) || Number(b.includes(c.slice(3))) - Number(a.includes(c.slice(3))))
    .slice(0, 6);

const required = new Map();
const requiredOf = (c) => required.get(c) ?? required.set(c, requiredPropsOf(path.dirname(DATA_DIR), c)).get(c);

/** The generated render a row asks for: its variant's props (solved for function matchers), states, touch, pointer target; null when unsolvable. */
function renderOf(row) {
  const variant = row.matcher?.fn ? solveFn(row) : (row.matcher ?? {});
  if (!variant) {
    return null;
  }
  const states = statesOf(row).filter(reachOf).sort();
  const pointer = states.some((st) => ['hover', 'press'].includes(reachOf(st)));
  const media = mediaOf(row);
  return { kind: 'generated', component: row.component, props: { ...requiredOf(row.component), ...variant, ...stateProps(states) }, states, touch: touchOf(row), ...(Object.keys(media).length ? { media } : {}), target: pointer ? pointerTargetOf(row) : 'root' };
}
const keyOf = (r) => [r.component, r.parent ?? '', propsKeyOf(r.props), r.states.join('+'), r.touch, JSON.stringify(r.media ?? {}), r.target].join('|');

// Phase 1 plan: one generated render per (component, props, states, touch, pointer target).
const plan = new Map();
const unsolved = new Set();
for (const row of rows) {
  const render = renderOf(row);
  if (render) {
    plan.set(keyOf(render), render);
  } else {
    unsolved.add(row.id);
  }
}

/**
 * Phase 1b — what the plain render left out, from the component's own prop types: a variant key that is not a prop
 * (an owner value MUI derives, e.g. Alert's colorSeverity) is tried as the props it is made of; slots that only appear
 * with content (Chip's deleteIcon needs onDelete, Button's startIcon) are tried with each content prop, handler and switch.
 */
function retriesOf(component, leftRows) {
  const types = propTypesOf(path.dirname(DATA_DIR), component);
  const words = (key) => key.split(/(?=[A-Z])/).map((w) => w.toLowerCase());
  const remap = (props) => {
    let options = [{}];
    for (const [k, v] of Object.entries(props)) {
      const as = k in types || PROP_STATES.includes(k) ? [k] : [...new Set([...words(k), ...Object.keys(types).filter((p) => types[p].literals.includes(String(v)))])];
      options = options.flatMap((o) => as.map((name) => ({ ...o, [name]: v })));
    }
    return options.slice(0, 6);
  };
  const extras = [
    {},
    ...Object.entries(types)
      .filter(([, t]) => t.kind === 'node' || t.kind === 'fn')
      .map(([k, t]) => ({ [k]: t.kind === 'fn' ? FN : /(label|title|text)$/i.test(k) ? 'Probe' : NODE })),
    ...Object.entries(types)
      .filter(([, t]) => t.kind === 'boolean')
      .map(([k]) => ({ [k]: true })),
  ];
  // a base row shadowed by a min-width rule at the default 900px shows below the smallest breakpoint it uses
  const minWidths = rows.filter((r) => r.component === component).flatMap((r) => (r.selector ?? []).map((p) => /min-width:\s*([\d.]+)px/.exec(p)?.[1])).filter(Boolean).map(Number).filter((w) => w > 0);
  const narrow = minWidths.length ? { width: Math.floor(Math.min(...minWidths)) - 1 } : null;
  // props named after the slot a row reaches go first (deleteIcon / onDelete for `.MuiChip-deleteIcon`)
  const related = (row, extra) => {
    const slot = (new RegExp(`\\.${component}-(\\w+)`).exec((row.selector ?? []).join(' '))?.[1] ?? row.slot).toLowerCase();
    return Object.keys(extra).some((k) => words(k).some((w) => w.length > 2 && w !== 'on' && slot.includes(w)));
  };
  const out = new Map();
  for (const row of leftRows) {
    const base = renderOf(row);
    if (!base) {
      continue;
    }
    if (narrow && !base.media) {
      const r = { ...base, media: narrow };
      out.set(keyOf(r), { r, rank: 1 });
    }
    for (const props of remap(base.props)) {
      for (const extra of extras) {
        const r = { ...base, props: { ...props, ...extra }, ...(Object.keys(extra).length ? { extra } : {}) };
        const rank = !Object.keys(extra).length ? 2 : related(row, extra) ? 1 : 0;
        out.set(keyOf(r), { r, rank: Math.max(rank, out.get(keyOf(r))?.rank ?? 0) });
      }
    }
  }
  return [...out.values()].sort((a, b) => b.rank - a.rank).map((x) => x.r).slice(0, 200);
}

const outcomes = new Map();
const partial = new Set(rows.filter((r) => r.partial).map((r) => r.id));
const renders = {};
const refCount = {};
const record = (render, results) => {
  refCount[render.component] = (refCount[render.component] ?? 0) + 1;
  const ref = `${render.component.replace(/^Mui/, '')}:${refCount[render.component]}`;
  renders[ref] = render;
  for (const x of results) {
    // demos carry their own styles; a partial row (style computed from props, condition unknown) may be switched off by a prop
    // ...and props a retry added (disabled, onDelete) or a wrapper (ButtonGroup restyles Button) bring conditions the row never claimed
    const status = x.status !== 'mismatch' ? x.status : render.kind === 'demo' ? 'overridden-by-demo' : partial.has(x.id) ? 'partial-condition' : render.extra || render.parent ? 'overridden-by-retry' : x.status;
    outcomes.set(x.id, [...(outcomes.get(x.id) ?? []), { ...x, status, ref }]);
  }
};
const confirmed = (id) => (outcomes.get(id) ?? []).some((o) => o.status === 'match');

// Parallel pages, one component at a time each (JOBS, default 4); a page's held render and loaded rows are its own.
const JOBS = Number(process.env.JOBS ?? 4);
const engine = await bootEngine({ hostRoot: path.dirname(DATA_DIR) });
try {
  const components = [...new Set(rows.map((r) => r.component))];
  const urls = [...components.map((c) => generatedUrl(c)), ...components.flatMap((c) => demosOf(c).map((d) => `/@fs${path.join(DOCS, `${d}.tsx`)}`))];
  const first = await engine.acquire({});
  for (let round = 0; round < 3; round += 1) {
    await runOn(first.page, { warm: urls });
  }
  const leases = [first, ...(await Promise.all(Array.from({ length: JOBS - 1 }, () => engine.acquire({}))))];

  const INTERACTIONS = [[], ['popup'], ['button:0'], ['button:1'], ['label-hover']];
  const TOGGLES = [['root:0'], ['root:1'], ['popup', 'root:0'], ['popup', 'root:1']];
  const left = (c) => rows.filter((r) => r.component === c && !confirmed(r.id) && !unsolved.has(r.id));
  const generatedPlan = [...plan.values()];

  async function work({ page }) {
    const run = (cfg) => runOn(page, cfg);
    const helpers = helpersFor(page);
    const load = () => run({ seamRows: { rows: data.rows, fns: data.fns } });
    await load();
    const attempt = async (render, url) => {
      try {
        await run({ probeUrl: url, component: render.component, propsKey: propsKeyOf(render.props ?? {}), verifySeams: true, hold: true });
        await helpers.interact(stepsFor(render));
        const { results } = await run({ measureHeld: true });
        await helpers.interact([{ reset: true }, { emulate: {} }]);
        record(render, results);
      } catch (err) {
        if (process.env.DEBUG) {
          log(`attempt failed: ${String(err.message).split('\n')[0]}`);
        }
        await load().catch(() => {});
      }
    };
    /** Mui components the docs wrap `c` in, most likely first: the tag around `<C` in demo sources, then the Mui roots above it in a rendered demo (popups opened). */
    const parentsOf = async (c) => {
      const short = c.slice(3);
      const counts = new Map();
      for (const demo of byImport.get(c) ?? []) {
        const src = fs.readFileSync(path.join(DOCS, `${demo}.tsx`), 'utf8');
        for (const m of src.matchAll(new RegExp(`<([A-Z]\\w*)\\b[^<>]*>\\s*(?:\\{[^{}]*\\}\\s*)?<${short}\\b`, 'g'))) {
          counts.set(`Mui${m[1]}`, (counts.get(`Mui${m[1]}`) ?? 0) + 1);
        }
      }
      for (const demo of demosOf(c).slice(0, 2)) {
        try {
          await run({ probeUrl: `/@fs${path.join(DOCS, `${demo}.tsx`)}`, component: c, propsKey: 'base', verifySeams: true, hold: true });
          await helpers.interact(stepsFor({ component: c, interaction: ['popup'] }));
          const above = await page.evaluate((name) => {
            const out = [];
            for (let el = document.querySelector(`.${name}-root`)?.parentElement; el; el = el.parentElement) {
              const root = [...el.classList].map((k) => /^(Mui[A-Z]\w*)-root$/.exec(k)?.[1]).find(Boolean);
              if (root && root !== name) {
                out.push(root);
              }
            }
            return out;
          }, c);
          await run({ measureHeld: true });
          await helpers.interact([{ reset: true }, { emulate: {} }]);
          above.forEach((p) => counts.set(p, (counts.get(p) ?? 0) + 0.5));
        } catch {
          await load().catch(() => {});
        }
      }
      return [...counts].filter(([p]) => p !== c && exported(p)).sort((a, b) => b[1] - a[1]).map(([p]) => p).slice(0, 4);
    };
    for (let c = queue.shift(); c; c = queue.shift()) {
      for (const render of generatedPlan.filter((r) => r.component === c)) {
        await attempt(render, generatedUrl(c));
      }
      for (const retry of left(c).length ? retriesOf(c, left(c)) : []) {
        if (!left(c).length) {
          break;
        }
        if (!plan.has(keyOf(retry))) {
          await attempt(retry, generatedUrl(c));
        }
      }
      // a component that only works inside another (MenuItem in MenuList, Tab in Tabs): learn the wrapper from a demo, render inside it
      for (const parent of left(c).length ? await parentsOf(c) : []) {
        const parentProps = requiredOf(parent);
        const before = left(c).length;
        const tries = [...left(c).map(renderOf).filter(Boolean), ...retriesOf(c, left(c))];
        await attempt({ ...tries[0], parent, parentProps }, generatedUrl(c, parent, parentProps));
        if (left(c).length === before) {
          continue;
        }
        for (const retry of tries.slice(1)) {
          if (!left(c).length) {
            break;
          }
          await attempt({ ...retry, parent, parentProps }, generatedUrl(c, parent, parentProps));
        }
        break;
      }
      const groups = new Map();
      for (const row of left(c)) {
        const states = statesOf(row).filter(reachOf);
        const pointer = states.some((st) => ['hover', 'press'].includes(reachOf(st)));
        const media = mediaOf(row);
        groups.set([states.sort().join('+'), touchOf(row), JSON.stringify(media), pointer ? pointerTargetOf(row) : ''].join('|'), { states, touch: touchOf(row), ...(Object.keys(media).length ? { media } : {}), target: pointer ? pointerTargetOf(row) : 'root' });
      }
      for (const demo of left(c).length ? demosOf(c) : []) {
        for (const group of groups.values()) {
          const needsToggle = group.states.some((st) => PROP_STATES.includes(st));
          for (const interaction of [...INTERACTIONS, ...(needsToggle ? TOGGLES : [])]) {
            if (!left(c).length) {
              break;
            }
            await attempt({ kind: 'demo', component: c, demo, interaction, ...group }, `/@fs${path.join(DOCS, `${demo}.tsx`)}`);
          }
        }
      }
      log(`${c}: ${left(c).length} of ${rows.filter((r) => r.component === c).length} rows left (${components.length - queue.length}/${components.length})`);
    }
  }
  const queue = [...components];
  await Promise.all(leases.map(work));
} finally {
  await engine.close();
}

// Keep only renders that confirmed something; ship their demos.
const reasonOf = (row) => {
  const st = (outcomes.get(row.id) ?? []).map((o) => o.status);
  const sel = (row.selector ?? []).join(' ');
  if (unsolved.has(row.id)) return 'function matcher not solvable from literals';
  if (st.includes('pseudo-element')) return 'pseudo-element';
  if (st.includes('harness-disabled')) return 'motion';
  if (st.includes('unresolvable')) return 'value the browser rejects';
  if (st.includes('inline')) return 'set inline at runtime';
  if (/@media/.test(sel) && !/hover/.test(sel)) return 'width/print media';
  if (!st.length) return 'never rendered';
  return 'not reached';
};
const rowRecord = {};
const used = new Set();
const mismatches = [];
for (const row of rows) {
  const list = outcomes.get(row.id) ?? [];
  const match = list.find((o) => o.status === 'match');
  const bad = list.find((o) => o.status === 'mismatch');
  if (bad) {
    mismatches.push({ id: row.id, expected: bad.expected, got: bad.got, render: renders[bad.ref] });
  }
  if (match) {
    rowRecord[row.id] = match.ref;
    used.add(match.ref);
  } else {
    rowRecord[row.id] = { skip: reasonOf(row) };
  }
}
const kept = Object.fromEntries([...used].map((ref) => [ref, renders[ref]]));
const RECORD = path.join(DATA_DIR, 'material/renders.json');
// a partial run (ONLY=...) replaces those components' entries in the existing record
const previous = only && fs.existsSync(RECORD) ? JSON.parse(fs.readFileSync(RECORD, 'utf8')) : null;
if (!previous) {
  fs.rmSync(RENDER_DEMOS_DIR, { recursive: true, force: true });
}
for (const demo of new Set(Object.values(kept).filter((r) => r.kind === 'demo').map((r) => r.demo))) {
  shipDemo(DOCS, RENDER_DEMOS_DIR, demo);
}
// a slot only some content shows (Chip's deleteIcon needs onDelete, Tooltip's tooltip needs open) records the props that showed it
const slotProps = {};
for (const row of rows) {
  const ref = typeof rowRecord[row.id] === 'string' ? rowRecord[row.id] : null;
  const confirmedBy = (outcomes.get(row.id) ?? []).filter((o) => o.status === 'match').map((o) => renders[o.ref]);
  // the slot the row reaches: a nested `.Mui<C>-<slot>` in its selector, else its own
  // (a real slot — `.MuiChip-clickable` is a state class; never root, which always renders: a root row needing a prop is a variant)
  const named = new RegExp(`\\.${row.component}-(\\w+)`).exec((row.selector ?? []).join(' '))?.[1];
  const routedKeys = Object.keys(graph[row.component]?.routes ?? {});
  const reached = named && (routedKeys.includes(named) || rows.some((r) => r.component === row.component && r.slot === named)) ? named : row.slot;
  const withExtra = confirmedBy.find((r) => r.kind === 'generated' && r.extra && !r.parent);
  if (ref && reached !== 'root' && withExtra && !confirmedBy.some((r) => r.kind === 'generated' && !r.extra && !r.parent)) {
    (slotProps[row.component] ??= {})[reached] ??= withExtra.extra;
  }
}
const components = {};
for (const row of rows) {
  const ref = typeof rowRecord[row.id] === 'string' ? rowRecord[row.id] : null;
  const c = (components[row.component] ??= {
    standalone: false,
    slots: {},
    ...(Object.keys(requiredOf(row.component)).length ? { props: requiredOf(row.component) } : {}),
    ...(slotProps[row.component] ? { slotProps: slotProps[row.component] } : {}),
  });
  if (ref && kept[ref].kind === 'generated') {
    c.standalone = true;
    if (kept[ref].parent && !Object.values(rowRecord).some((r) => typeof r === 'string' && kept[r]?.component === row.component && kept[r].kind === 'generated' && !kept[r].parent)) {
      c.parent = kept[ref].parent;
      if (Object.keys(kept[ref].parentProps ?? {}).length) {
        c.parentProps = kept[ref].parentProps;
      }
    }
  }
  if (ref && (!c.slots[row.slot] || (kept[c.slots[row.slot]].kind === 'demo' && kept[ref].kind === 'generated'))) {
    c.slots[row.slot] = ref;
  }
}
const keep = (obj, componentOf) => Object.fromEntries(Object.entries(obj ?? {}).filter(([k, v]) => !only.includes(componentOf(k, v))));
const merged = previous
  ? {
      components: { ...keep(previous.components, (k) => k), ...components },
      renders: { ...keep(previous.renders, (k, v) => v.component), ...kept },
      rows: { ...keep(previous.rows, (k) => k.split('|')[0]), ...rowRecord },
    }
  : { components, renders: kept, rows: rowRecord };
fs.writeFileSync(RECORD, `${JSON.stringify({ source: tagFor(version), ...merged })}\n`);

for (const row of data.rows) {
  if (row.id in rowRecord) {
    row.verified = typeof rowRecord[row.id] === 'string' ? true : mismatches.some((m) => m.id === row.id) ? false : null;
  }
}
fs.writeFileSync(SEAMS, `${JSON.stringify(data)}\n`);

const reasons = {};
for (const v of Object.values(rowRecord)) {
  if (typeof v !== 'string') {
    reasons[v.skip] = (reasons[v.skip] ?? 0) + 1;
  }
}
const total = Object.keys(rowRecord).length;
const ok = Object.values(rowRecord).filter((v) => typeof v === 'string').length;
console.log(`confirmed ${ok}/${total} rows · ${Object.keys(kept).length} renders kept · ${new Set(Object.values(kept).filter((r) => r.kind === 'demo').map((r) => r.demo)).size} demos shipped`);
console.log(`not confirmed: ${JSON.stringify(reasons)}`);
if (mismatches.length) {
  console.error(`✗ ${mismatches.length} mismatches:\n${mismatches.map((m) => `  ${m.id}: expected ${m.expected}, got ${m.got}`).join('\n')}`);
  process.exitCode = 1;
}
