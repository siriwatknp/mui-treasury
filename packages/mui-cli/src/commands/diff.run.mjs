import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { resolveToken } from '../lib/aliases.mjs';
import { jsonOut } from '../lib/json.mjs';
import { longhandsOf } from '../lib/match.mjs';
import { loadSeams } from '../lib/seams.mjs';
import { demoNeeds, demoUrl, generatedUrl, loadRenders, propsKeyOf, snapshot } from '../lib/renders.mjs';
import { loadThemeModule } from '../lib/themeModule.mjs';
import { scopeOf } from '../lib/scope.mjs';

const kebab = (p) => (p.startsWith('--') ? p : p.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`));
const git = (cwd, ...args) => execFileSync('git', ['-C', cwd, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });

/** The baseline theme file: a copy of the theme at git HEAD next to it (so its relative imports resolve), null for vanilla, or a given file. */
function baselineFor(themeFile, against) {
  if (against && !['HEAD', 'vanilla'].includes(against)) {
    return { file: path.resolve(against), label: against };
  }
  if (against === 'vanilla') {
    return { file: null, label: 'vanilla Material UI' };
  }
  const dir = path.dirname(themeFile);
  try {
    const prefix = git(dir, 'rev-parse', '--show-prefix').trim();
    const source = git(dir, 'show', `HEAD:${prefix}${path.basename(themeFile)}`);
    const copy = path.join(dir, `.mui-diff-HEAD.${path.basename(themeFile)}`);
    fs.writeFileSync(copy, source);
    return { file: copy, label: `${path.basename(themeFile)} at HEAD`, temp: true };
  } catch {
    if (against === 'HEAD') {
      throw new Error(`${themeFile} is not in git at HEAD — pass --against vanilla or a file`);
    }
    return { file: null, label: 'vanilla Material UI (theme file not in git at HEAD)' };
  }
}

/** Renders to compare for one component: at rest and in each recorded state set (or every recorded render with --all). */
function rendersOf(component, all) {
  const record = loadRenders();
  const entry = record.components[component];
  const kept = Object.values(record.renders).filter((r) => r.component === component);
  const seen = new Map();
  if (!entry || entry.standalone) {
    seen.set('base', { label: 'base', render: { url: generatedUrl(component, entry?.parent, entry?.parentProps), props: entry?.props ?? {}, interaction: [] }, states: [], touch: false, target: 'root' });
  }
  for (const r of kept) {
    if (r.kind === 'demo' && demoNeeds(r.demo).length) {
      continue;
    }
    if (r.kind === 'generated' && !all && Object.keys(r.props).some((k) => !r.states.includes(k))) {
      continue;
    }
    const key = all ? JSON.stringify(r) : `${r.kind}|${r.demo ?? ''}|${r.states.join('+')}|${r.touch}|${JSON.stringify(r.media ?? {})}|${r.target}`;
    if (!seen.has(key)) {
      const label = `${r.kind === 'demo' ? `demo ${r.demo}` : propsKeyOf(Object.fromEntries(Object.entries(r.props).filter(([k]) => !r.states.includes(k))))}${r.states.length ? ` +${r.states.join('+')}` : ''}${r.touch ? ' (touch)' : ''}`;
      const render = r.kind === 'demo' ? { url: demoUrl(r.demo), props: {}, interaction: r.interaction } : { url: generatedUrl(component, r.parent, r.parentProps), props: r.props, interaction: [] };
      seen.set(key, { label, render, states: r.states, touch: r.touch, media: r.media ?? {}, target: r.target });
    }
  }
  return [...seen.values()];
}

export async function run(program, names, options) {
  if (!options.theme) {
    throw new Error('diff needs --theme <file> (the theme to inspect)');
  }
  const themeFile = path.resolve(options.theme);
  const { byComponent } = await loadSeams();
  const baseline = baselineFor(themeFile, options.against);
  try {
    const after = await loadThemeModule(themeFile);
    const before = baseline.file ? await loadThemeModule(baseline.file) : {};
    const scope = names.length
      ? { components: names.map((n) => { const t = resolveToken(n); return t?.component ?? `Mui${n}`; }), why: 'asked' }
      : await scopeOf(before, after);
    const changes = [];
    let renderCount = 0;
    const failed = [];
    const skipped = [];
    if (scope.components.length) {
      const { withCapture } = await import('../lib/capture.mjs');
      // several pages of the warm render server at once; in-process rendering stays on one
      const queue = [...scope.components];
      const total = queue.length;
      const jobs = process.env.MUI_CLI_NO_SERVER ? 1 : Math.min(4, total);
      const worker = () => withCapture(
        async (runCapture, helpers) => {
          for (let component = queue.shift(); component; component = queue.shift()) {
            if (total > 8) {
              process.stderr.write(`\r  diff: ${total - queue.length}/${total} components`);
            }
            const rows = (byComponent.get(component) ?? []).filter((r) => !r.internal);
            if (!rows.length) {
              continue;
            }
            const slots = [...new Set(rows.map((r) => r.slot))];
            const read = Object.fromEntries(slots.map((s) => [s, [...new Set(rows.filter((r) => r.slot === s && !/^(transition|animation)/.test(r.prop)).flatMap((r) => longhandsOf(r.prop)).map(kebab))]]));
            for (const item of rendersOf(component, options.all || scope.why.startsWith('entries') || scope.why === 'asked')) {
              const once = (file) => snapshot(runCapture, helpers, { component, render: item.render, slots, read, states: item.states, touch: item.touch, media: item.media, target: item.target, themeFile: file });
              // a page Vite reloaded between a held render and its measurement (a new theme file was just written) gets the render once more
              const shot = (file) => once(file).catch((err) => (/Execution context was destroyed|navigation|__runCapture|__snapshot/.test(err.message) ? once(file) : Promise.reject(err)));
              const failure = (err) => {
                failed.push({ component, render: item.label, error: String(err.message).split('\n')[0].slice(0, 160) });
                return null;
              };
              const a = await shot(baseline.file).catch(failure);
              const b = a && (await shot(themeFile).catch(failure));
              renderCount += 1;
              if (!a || !b) {
                continue;
              }
              const unreached = item.states.filter((st) => !a.reached[st] || !b.reached[st]);
              if (unreached.length) {
                skipped.push({ component, render: item.label, reason: `state ${unreached.join(', ')} not reached` });
                continue;
              }
              const index = (els) => {
                const out = new Map();
                const count = {};
                for (const e of els) {
                  count[e.slot] = (count[e.slot] ?? 0) + 1;
                  out.set(`${e.slot}#${count[e.slot]}`, e);
                }
                return out;
              };
              const ia = index(a.elements);
              const ib = index(b.elements);
              for (const key of new Set([...ia.keys(), ...ib.keys()])) {
                const ea = ia.get(key);
                const eb = ib.get(key);
                const [slot, nth] = key.split('#');
                const where = ia.size > 0 && [...ia.keys()].some((k) => k === `${slot}#2`) ? `${slot}#${nth}` : slot;
                if (!ea || !eb) {
                  changes.push({ component, render: item.label, slot: where, prop: 'element', before: ea ? 'rendered' : 'absent', after: eb ? 'rendered' : 'absent' });
                  continue;
                }
                for (const prop of Object.keys({ ...ea.values, ...eb.values })) {
                  if (ea.values[prop] !== eb.values[prop]) {
                    changes.push({ component, render: item.label, slot: where, prop, before: ea.values[prop], after: eb.values[prop] });
                  }
                }
                for (const side of ['width', 'height']) {
                  if (Math.abs(ea.box[side] - eb.box[side]) > 0.5 && !(side in ea.values)) {
                    changes.push({ component, render: item.label, slot: where, prop: `box ${side}`, before: `${ea.box[side]}px`, after: `${eb.box[side]}px` });
                  }
                }
              }
            }
          }
        },
        { themeFile, otherThemeFiles: baseline.file ? [baseline.file] : [] },
      );
      if (jobs > 1) {
        await withCapture(async () => null, { themeFile, otherThemeFiles: baseline.file ? [baseline.file] : [] });
      }
      await Promise.all(Array.from({ length: jobs }, worker));
      if (total > 8) {
        process.stderr.write('\n');
      }
    }
    // one line per distinct change; renders sharing it are listed together
    const merged = new Map();
    for (const c of changes) {
      const key = `${c.component}|${c.slot}|${c.prop}|${c.before}|${c.after}`;
      const m = merged.get(key) ?? { ...c, renders: [] };
      if (!m.renders.includes(c.render)) {
        m.renders.push(c.render);
      }
      merged.set(key, m);
    }
    // properties that moved the same way on the same element in the same renders read as one line
    // ...and repeated elements (root#1, root#2…) that moved identically read as one, with a count
    const grouped = new Map();
    for (const { render, ...c } of merged.values()) {
      const key = `${c.component}|${c.slot}|${c.before}|${c.after}|${c.renders.join(',')}`;
      const g = grouped.get(key);
      grouped.set(key, g ? { ...g, prop: g.prop.split(', ').includes(c.prop) ? g.prop : `${g.prop}, ${c.prop}` } : c);
    }
    const collapsed = new Map();
    for (const c of grouped.values()) {
      const slot = c.slot.replace(/#\d+$/, '');
      const key = `${c.component}|${slot}|${c.prop}|${c.before}|${c.after}|${c.renders.join(',')}`;
      const g = collapsed.get(key);
      collapsed.set(key, g ? { ...g, count: g.count + 1 } : { ...c, slot, count: 1 });
    }
    const order = new Map(scope.components.map((c, i) => [c, i]));
    const list = [...collapsed.values()].sort((a, b) => order.get(a.component) - order.get(b.component));
    if (program.opts().json) {
      jsonOut('diff', { theme: options.theme, against: baseline.label, scope, renders: renderCount, changes: list, failed, skipped });
      if (failed.length) {
        process.exitCode = 1;
      }
      return;
    }
    if (failed.length) {
      process.exitCode = 1;
      console.error(`✗ ${failed.length} render${failed.length === 1 ? '' : 's'} failed — their changes are not in this report:\n${failed.map((f) => `  ${f.component.replace(/^Mui/, '')} [${f.render}]: ${f.error}`).join('\n')}\n`);
    }
    if (skipped.length) {
      console.error(`note: ${skipped.length} recorded render${skipped.length === 1 ? '' : 's'} skipped (state not reproduced): ${skipped.map((x) => `${x.component.replace(/^Mui/, '')} [${x.render}]`).join('; ')}\n`);
    }
    console.log(`diff ${options.theme} vs ${baseline.label} — ${scope.why} · ${scope.components.length} component${scope.components.length === 1 ? '' : 's'}, ${renderCount} renders\n`);
    if (!list.length) {
      console.log('  no computed-style changes');
      return;
    }
    const byComp = new Map();
    for (const c of list) {
      byComp.set(c.component, [...(byComp.get(c.component) ?? []), c]);
    }
    for (const [component, items] of byComp) {
      if (options.full) {
        console.log(component.replace(/^Mui/, ''));
        for (const c of items) {
          const where = c.renders.length > 3 ? `${c.renders.slice(0, 3).join(', ')} +${c.renders.length - 3} more` : c.renders.join(', ');
          console.log(`  ${c.slot}${c.count > 1 ? ` (×${c.count})` : ''}.${c.prop}  ${c.before} → ${c.after}   [${where}]`);
        }
        continue;
      }
      // one line per component: which slot properties moved, in how many renders
      const slots = new Map();
      for (const c of items) {
        for (const prop of c.prop.split(', ')) {
          (slots.get(c.slot) ?? slots.set(c.slot, new Set()).get(c.slot)).add(prop);
        }
      }
      const renders = new Set(items.flatMap((c) => c.renders)).size;
      console.log(`${component.replace(/^Mui/, '')} — ${renders} render${renders === 1 ? '' : 's'}: ${[...slots].map(([slot, props]) => `${slot} (${[...props].join(', ')})`).join('; ')}`);
    }
    const unchanged = scope.components.length - byComp.size;
    console.log(`\n${byComp.size} component${byComp.size === 1 ? '' : 's'} changed${unchanged ? `, ${unchanged} unchanged` : ''}${options.full ? '' : ' — `--full` for every before → after, or `mui diff <Component> --full` for one'}`);
  } finally {
    if (baseline.temp) {
      fs.rmSync(baseline.file, { force: true });
    }
  }
}
