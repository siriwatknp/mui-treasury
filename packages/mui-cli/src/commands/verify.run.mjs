import fs from 'node:fs';
import path from 'node:path';
import { resolveToken } from '../lib/aliases.mjs';
import { jsonOut } from '../lib/json.mjs';
import { longhandsOf, parsePropsKey } from '../lib/match.mjs';
import { loadSeams } from '../lib/seams.mjs';
import { RENDER_DEFAULTS, propsKeyOf, reachOf, renderFor, snapshot } from '../lib/renders.mjs';

const kebab = (p) => (p.startsWith('--') ? p : p.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`));

/** [when:]slot.prop=value — `when` limits it to some cases: touch, mouse, @<900, @>=900 (viewport width). */
function parseExpect(text) {
  const m = /^(?:(touch|mouse|@(?:<|>=)\d+)\s*:\s*)?((?:[A-Z]\w*\.)?[\w-]+)\.((?:box\.)?[\w-]+)=(.+)$/.exec(text);
  if (!m) {
    throw new Error(`--expect takes [when:]slot.property=value (e.g. root.paddingTop=10px, root.box.height=36px, touch:input.fontSize=16px, @>=900:input.fontSize=14px), got: ${text}`);
  }
  return { when: m[1] ?? null, slot: m[2], prop: m[3], value: m[4] };
}

/** Does an expectation's `when` hold for a case (width defaults to the 900px harness page; pointer to mouse)? */
function applies(when, c) {
  if (!when) {
    return true;
  }
  if (when === 'touch' || when === 'mouse') {
    return (c.pointer === 'coarse') === (when === 'touch');
  }
  const [, op, px] = /^@(<|>=)(\d+)$/.exec(when);
  const width = c.width ?? 900;
  return op === '<' ? width < Number(px) : width >= Number(px);
}

export async function run(program, name, options) {
  if (!name) {
    if (!options.all || !options.theme) {
      throw new Error('name a component, or check every component your theme touches with `mui verify --all --theme <file>`');
    }
    const { loadThemeModule } = await import('../lib/themeModule.mjs');
    const { scopeOf } = await import('../lib/scope.mjs');
    const scope = await scopeOf({}, await loadThemeModule(path.resolve(options.theme)));
    return runAll(program, scope.components, options, scope.why);
  }
  const target = resolveToken(name);
  if (target?.kind === 'x') {
    throw new Error(`${target.label} is MUI X — style rows cover Material UI only for now; \`mui demos ${target.product}\` lists its demos`);
  }
  const component = target?.component ?? `Mui${name}`;
  const { byComponent } = await loadSeams();
  const own = (c) => (byComponent.get(c) ?? []).filter((r) => !r.internal);
  // a composite (TextField) has no styles of its own: render it as used and read its parts' slots as Part.slot
  const { loadGraph } = await import('../lib/seams.mjs');
  const { graph } = loadGraph();
  const withBases = (c) => (c ? [c, ...withBases(graph[c]?.extends)] : []);
  // parts and the bases they extend (OutlinedInput → InputBase): `InputBase.root` addresses every variant at once
  const composite = !own(component).length;
  // a composite's parts, or a component's own bases (Input → InputBase): their slots read as Base.slot
  // what it renders, all the way down (Autocomplete → TextField → OutlinedInput → InputBase), and the bases each extends
  // plus what its generated render passes it (Autocomplete's renderInput TextField)
  const renders = (c, seen = new Set()) => [...(graph[c]?.composes ?? []), ...(RENDER_DEFAULTS[c]?.parts ?? [])].filter((x) => !seen.has(x) && seen.add(x)).flatMap((x) => [...withBases(x), ...renders(x, seen)]);
  const parts = [...new Set([...withBases(graph[component]?.extends), ...renders(component)])].filter((c) => c !== component && own(c).length);
  if (composite && !parts.length) {
    throw new Error(`unknown component: ${name} — \`mui component\` lists them`);
  }
  if (options.all) {
    if (composite) {
      throw new Error(`${name} has no styles of its own — run the gate on its parts: ${parts.map((c) => c.replace(/^Mui/, '')).join(', ')} (e.g. \`mui verify ${parts[0].replace(/^Mui/, '')} --all\`)`);
    }
    return runAll(program, [component], options);
  }
  const rows = [...(composite ? [] : own(component)), ...parts.flatMap((c) => own(c).map((r) => ({ ...r, slot: `${c.replace(/^Mui/, '')}.${r.slot}` })))];
  // every --props × every --state set is one case; each --expect is checked in every case
  const propsList = options.props?.length ? options.props.map(parsePropsKey) : [{}];
  const stateSets = options.state?.length ? options.state.map((s) => s.split(',').map((x) => x.trim()).filter(Boolean)) : [[]];
  const unknown = stateSets.flat().filter((s) => !reachOf(s));
  if (unknown.length) {
    throw new Error(`no way to reach state ${[...new Set(unknown)].join(', ')} — use: disabled, checked, selected, expanded, error, active, completed, :hover, :active, focusVisible, focused`);
  }
  // its styled slots and the theme keys it routes to nested parts (Autocomplete's inputRoot, input)
  const { slotsOf } = await import('../lib/renders.mjs');
  const slots = composite ? [] : await slotsOf(component);
  // a slot the component doesn't have but its base does (Input has no `input` slot; InputBase does) means the base's
  const baseOf = (slot) => parts.find((c) => !slot.includes('.') && own(c).some((r) => r.slot === slot) && !slots.includes(slot));
  const expect = (options.expect ?? []).map(parseExpect).map((e) => (baseOf(e.slot) ? { ...e, slot: `${baseOf(e.slot).replace(/^Mui/, '')}.${e.slot}` } : e));
  const focus = options.slot ?? expect[0]?.slot ?? 'root';
  const read = Object.fromEntries([...new Set(rows.map((r) => r.slot))].map((s) => [s, [...new Set(rows.filter((r) => r.slot === s && !/^(transition|animation)/.test(r.prop)).flatMap((r) => longhandsOf(r.prop)).map(kebab))]]));
  const widths = options.width ? String(options.width).split(',').map((w) => Number(w.trim())) : [null];
  if (widths.some((w) => w !== null && !(w > 0))) {
    throw new Error(`--width takes pixel widths, comma list (e.g. 390,1280), got: ${options.width}`);
  }
  const pointers = options.pointer ? options.pointer.split(',').map((p) => p.trim()) : [options.touch ? 'coarse' : null];
  if (pointers.some((p) => p !== null && !['fine', 'coarse'].includes(p))) {
    throw new Error(`--pointer takes fine and/or coarse, got: ${options.pointer}`);
  }
  const cases = propsList.flatMap((props) =>
    stateSets.flatMap((states) =>
      widths.flatMap((width) => pointers.map((pointer) => ({ props, states, width, pointer, render: renderFor(component, { props, states, slot: focus }) }))),
    ),
  );
  if (cases.some((c) => c.render.kind === 'demo') && options.props?.length) {
    process.stderr.write(`note: ${name} renders inside the docs demo ${cases[0].render.demo}; --props is not applied there\n`);
  }

  const { withCapture } = await import('../lib/capture.mjs');
  const results = await withCapture(async (runCapture, helpers) => {
    const out = [];
    // props that render nothing (the render threw) fail the same way in every state, width and pointer: one try per props
    const broken = new Map();
    for (const c of cases) {
      const media = c.width ? { width: c.width } : {};
      const mine = expect.filter((e) => applies(e.when, c));
      const key = propsKeyOf(c.props);
      if (broken.has(key)) {
        out.push({ ...c, reached: {}, elements: [], expectations: mine.map(({ slot, prop, value, when }) => ({ slot, prop, value, status: 'no-element', ...(when ? { when } : {}) })), error: broken.get(key), skipped: true });
        continue;
      }
      const result = await snapshot(runCapture, helpers, { component, render: c.render, slots, read, states: c.states, touch: c.pointer === 'coarse', media, target: composite ? 'root' : focus, expect: mine, parts, routes: graph[component]?.routes ?? {} });
      result.expectations = result.expectations.map((e, i) => ({ ...e, ...(mine[i].when ? { when: mine[i].when } : {}) }));
      if (result.error) {
        broken.set(key, result.error);
      }
      out.push({ ...c, ...result });
    }
    return out;
  }, { themeFile: options.theme });

  for (const r of results) {
    r.elements = options.slot ? r.elements.filter((e) => e.slot === options.slot) : r.elements;
    r.unreached = Object.entries(r.reached).filter(([, ok]) => !ok).map(([s]) => s);
    r.failed = r.expectations.filter((e) => e.status !== 'pass');
  }
  if (results.some((r) => r.unreached.length || r.failed.length || !r.elements.length)) {
    process.exitCode = 1;
  }
  const caseLabel = (r) => `${propsKeyOf(r.props)}${r.states.length ? ` +${r.states.join('+')}` : ''}${r.width ? ` @${r.width}` : ''}${r.pointer ? ` ${r.pointer === 'coarse' ? 'touch' : 'mouse'}` : ''}`;
  if (program.opts().json) {
    const element = ({ values, ...e }) => (options.values ? { ...e, values } : e);
    const asData = (r) => ({ props: r.props, states: r.states, ...(r.width ? { width: r.width } : {}), ...(r.pointer ? { pointer: r.pointer } : {}), render: { kind: r.render.kind, ...(r.render.demo ? { demo: r.render.demo } : {}) }, reached: r.reached, expectations: r.expectations, elements: r.elements.map(element), ...(r.error ? { error: r.error } : {}) });
    jsonOut('verify', { component, touch: results[0].pointer === 'coarse', ...asData(results[0]), cases: results.map(asData) });
    return;
  }
  const short = component.replace(/^Mui/, '');
  const demo = results[0].render.kind === 'demo' ? ` · rendered in docs demo ${results[0].render.demo}` : '';
  if (results.length > 1) {
    const passed = results.filter((r) => !r.unreached.length && !r.failed.length && r.elements.length).length;
    console.log(`verify ${short} — ${options.theme ?? 'vanilla Material UI'}${demo} · ${results.length} cases${expect.length ? ` × ${expect.length} check${expect.length === 1 ? '' : 's'}` : ''}\n`);
    const width = Math.max(...results.map((r) => caseLabel(r).length));
    for (const r of results) {
      if (r.skipped) {
        continue;
      }
      const bad = r.unreached.length || r.failed.length || !r.elements.length;
      const summary = expect.length ? r.expectations.map((e) => `${e.slot}.${e.prop} ${e.got ?? e.status}`).join(' · ') || 'no check applies' : r.elements.filter((e, i, all) => all.findIndex((x) => x.slot === e.slot) === i).map((e) => `${e.slot} ${e.box.width}×${e.box.height}`).join(' · ');
      console.log(`  ${bad ? '✗' : '✓'} ${caseLabel(r).padEnd(width)}  ${summary}`);
      r.unreached.forEach((s) => console.log(`      ✗ state ${s} NOT reached`));
      r.failed.forEach((e) => console.log(`      ✗ ${e.slot}.${e.prop} = ${e.value}  ${e.status === 'fail' ? `got ${e.got} (want ${e.want})` : e.status}`));
      if (r.error) {
        const rest = results.filter((x) => x.skipped && propsKeyOf(x.props) === propsKeyOf(r.props)).length;
        console.log(`      ✗ did not render: ${r.error}${rest ? ` — its other ${rest} case${rest === 1 ? '' : 's'} skipped` : ''}`);
      } else if (!r.elements.length) {
        console.log(`      ✗ no ${options.slot ?? ''} element rendered`);
      }
    }
    console.log(`\n${passed}/${results.length} cases pass`);
    return;
  }
  const [r] = results;
  const label = `${short}${Object.keys(r.props).length ? ` [${propsKeyOf(r.props)}]` : ''}${r.states.length ? ` +${r.states.join('+')}` : ''}${r.width ? ` @${r.width}px` : ''}${r.pointer === 'coarse' ? ' (touch)' : ''}`;
  console.log(`verify ${label} — ${options.theme ?? 'vanilla Material UI'}${demo}\n`);
  for (const [s, ok] of Object.entries(r.reached)) {
    console.log(`  ${ok ? '✓' : '✗'} state ${s} ${ok ? 'reached' : 'NOT reached — the values below are not in that state'}`);
  }
  if (r.error) {
    console.log(`  ✗ did not render: ${r.error}`);
  } else if (!r.elements.length) {
    console.log(`  ✗ no ${options.slot ?? ''} element rendered`);
  }
  if (r.expectations.length) {
    console.log('');
    for (const e of r.expectations) {
      const mark = e.status === 'pass' ? '✓' : '✗';
      const detail = e.status === 'pass' ? `(${e.got})` : e.status === 'fail' ? `got ${e.got} (want ${e.want})` : e.status;
      console.log(`  ${mark} ${e.slot}.${e.prop} = ${e.value}  ${detail}`);
    }
    return;
  }
  const seen = new Set();
  for (const e of r.elements) {
    if (seen.has(e.slot)) {
      continue;
    }
    seen.add(e.slot);
    const count = r.elements.filter((x) => x.slot === e.slot).length;
    const values = Object.entries(e.values);
    console.log(`  ${e.slot}${count > 1 ? ` (×${count}, first shown)` : ''}  ${e.box.width}×${e.box.height}${options.values || !values.length ? '' : `  · ${values.length} values`}`);
    if (options.values) {
      for (const [k, v] of values) {
        console.log(`    ${k.padEnd(28)} ${v}`);
      }
    }
  }
  if (!options.values && r.elements.length) {
    console.log('\n  check a value with --expect slot.prop=value (e.g. root.box.height=36px), or print them all with --values');
  }
}

/**
 * verify --all: every case of the targets (and their families) through the rules, parallel pages, one contact sheet.
 * One component: every case on the sheet. A whole theme (`why` set): only failing components listed; failing cases and every content case on the sheet.
 */
async function runAll(program, targets, options, why = null) {
  if (options.props || options.state || options.expect) {
    throw new Error('--all checks every variant and state itself — drop --props / --state / --expect');
  }
  const { casesOf, familyOf, runCase, sheetHtml, shotDirFor } = await import('../lib/gate.mjs');
  const short = (c) => c.replace(/^Mui/, '');
  const family = why ? [] : (await Promise.all(targets.map(familyOf))).flat().filter((c, i, all) => !targets.includes(c) && all.indexOf(c) === i);
  const components = [...targets, ...family];
  // a shared content case named by several components in scope runs once
  const cases = components.flatMap((c) => casesOf(c, { own: !why })).filter((c, i, all) => c.kind !== 'content' || all.findIndex((x) => x.url === c.url) === i);
  const name = why ? 'theme' : short(targets[0]);
  if (!cases.length) {
    console.log(`verify --all — ${why ?? name}: nothing to check`);
    return;
  }
  const shotDir = shotDirFor(name);
  const results = [];
  const errors = [];
  const queue = [...cases];
  const { withCapture } = await import('../lib/capture.mjs');
  const jobs = process.env.MUI_CLI_NO_SERVER ? 1 : Math.min(4, cases.length);
  const worker = () => withCapture(async (runCapture, helpers) => {
    for (let c = queue.shift(); c; c = queue.shift()) {
      process.stderr.write(`\r  verify --all: ${cases.length - queue.length}/${cases.length} cases`);
      // a page Vite reloaded mid-case (dependencies bundled on a first run) gets the case once more
      for (let attempt = 0; ; attempt += 1) {
        try {
          results.push(await runCase(runCapture, helpers, c, shotDir, { onlyFailing: Boolean(why) }));
          break;
        } catch (err) {
          if (attempt === 0 && /Execution context was destroyed|navigation|__runCapture/.test(err.message)) {
            continue;
          }
          errors.push({ case: c, error: String(err.message).split('\n')[0].slice(0, 160) });
          break;
        }
      }
    }
  }, { themeFile: options.theme });
  if (jobs > 1) {
    await withCapture(async () => null, { themeFile: options.theme });
  }
  await Promise.all(Array.from({ length: jobs }, worker));
  process.stderr.write('\n');
  const order = new Map(cases.map((c, i) => [c, i]));
  results.sort((a, b) => order.get(a.case) - order.get(b.case));
  const onSheet = why ? results.filter((r) => r.failures.length || r.case.kind === 'content') : results;
  const shot = onSheet.length ? path.resolve(options.shot ?? `verify-${name.replace(/^theme$/, 'theme')}.png`) : null;
  const title = `verify ${why ? '' : `${name} `}--all — ${options.theme ?? 'vanilla Material UI'}${why ? ` · ${why}` : ''}`;
  if (shot) {
    await withCapture(async (runCapture, helpers) => helpers.renderSheet(sheetHtml(title, onSheet), shot), { themeFile: options.theme });
  }
  fs.rmSync(shotDir, { recursive: true, force: true });

  const checksOf = (r) => r.checks.target + r.checks.dead + r.checks.ring + (r.checks.content ?? 0);
  const checks = results.reduce((n, r) => n + checksOf(r), 0);
  const failures = results.flatMap((r) => r.failures.map((f) => ({ component: r.case.component, case: r.case.label, kind: r.case.kind, ...f })));
  // the theme file's own code: imported *Classes, tokens through (theme.vars || theme), applyStyles for dark mode
  const code = options.theme ? await (await import('../lib/themeCode.mjs')).checkThemeCode(path.resolve(options.theme), path.dirname(path.resolve(options.theme))) : [];
  if (failures.length || errors.length || code.length) {
    process.exitCode = 1;
  }
  if (program.opts().json) {
    jsonOut('verify', { components, ...(why ? { scope: why } : { component: targets[0], family }), theme: options.theme ?? null, cases: results.length, checks, failures, skipped: results.filter((r) => r.skipped).map((r) => ({ component: r.case.component, case: r.case.label, reason: r.skipped })), errors: errors.map((e) => ({ component: e.case.component, case: e.case.label, error: e.error })), code, sheet: shot });
    return;
  }
  console.log(`${title}${family.length ? ` · family: ${family.map(short).join(', ')}` : ''}\n`);
  const passing = [];
  const containers = [];
  for (const c of components) {
    const mine = results.filter((r) => r.case.component === c);
    const bad = mine.filter((r) => r.failures.length);
    const ran = mine.reduce((n, r) => n + checksOf(r), 0);
    if (why && !bad.length) {
      (ran ? passing : containers).push(short(c));
      continue;
    }
    const kinds = ['variant', 'demo', 'composition', 'content'].map((k) => [k, mine.filter((r) => r.case.kind === k).length]).filter(([, n]) => n).map(([k, n]) => `${n} ${k}${n === 1 ? '' : 's'}`).join(', ');
    console.log(`${bad.length ? '✗' : '✓'} ${short(c)} — ${kinds || 'no cases'}${mine.length && !ran ? ' · no control of its own: check the components inside it (e.g. Tab in Tabs, AccordionSummary in Accordion)' : ''}`);
    for (const r of bad) {
      console.log(`    [${r.case.label}]`);
      for (const f of r.failures) {
        console.log(`      ✗ ${f.rule}: ${f.detail}`);
      }
    }
  }
  if (passing.length) {
    console.log(`✓ ${passing.length} component${passing.length === 1 ? '' : 's'} pass: ${passing.join(', ')}`);
  }
  if (containers.length) {
    console.log(`· ${containers.length} with no control of their own (checked through the components inside them): ${containers.join(', ')}`);
  }
  for (const e of errors) {
    console.log(`  ✗ ${short(e.case.component)} [${e.case.label}] did not render: ${e.error}`);
  }
  if (code.length) {
    console.log(`✗ theme code — ${options.theme}`);
    for (const c of code) {
      console.log(`    line ${c.line} · ${c.rule}: ${c.detail}`);
    }
  }
  const skipped = results.filter((r) => r.skipped);
  if (skipped.length) {
    console.log(`\nnote: ${skipped.length} case${skipped.length === 1 ? '' : 's'} rendered no instance (not checked): ${skipped.map((r) => `${short(r.case.component)} [${r.case.label}]`).join('; ')}`);
  }
  console.log(`\n${results.length} cases · ${checks} checks · ${failures.length} failed${errors.length ? ` · ${errors.length} render errors` : ''}${options.theme ? ` · ${code.length} theme code issue${code.length === 1 ? '' : 's'}` : ''}`);
  console.log(shot ? `sheet: ${shot}` : 'no failures — no sheet');
}
