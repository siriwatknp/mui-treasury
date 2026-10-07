import fs from 'node:fs';
import path from 'node:path';
import { resolveToken } from '../lib/aliases.mjs';
import { selectorCode, tokenCode } from '../lib/codeForm.mjs';
import { DATA_DIR } from '../lib/data.mjs';
import { demosFor } from '../lib/demos.mjs';
import { jsonOut } from '../lib/json.mjs';
import { loadGraph, loadSeams, matcherLabel, relatedFor } from '../lib/seams.mjs';
import { DEFAULT_CATEGORIES } from './component.mjs';

const short = (c) => c.replace(/^Mui/, '');
const fmt = (v) => (typeof v === 'string' ? v : JSON.stringify(v));

function distance(a, b) {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const next = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = row[j];
      row[j] = next;
    }
  }
  return row[b.length];
}

function suggest(name, names) {
  const n = name.toLowerCase().replace(/^mui/, '');
  return names
    .map((c) => ({ c, d: short(c).toLowerCase().includes(n) ? 0 : distance(n, short(c).toLowerCase()) }))
    .filter((x) => x.d <= Math.max(2, Math.floor(n.length / 4)))
    .sort((a, z) => a.d - z.d)
    .slice(0, 5)
    .map((x) => x.c);
}

let direct;
/** Docs demos rendering each component directly (sync-compositions). */
const directUses = () => (direct ??= JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/compositions.json'), 'utf8')).direct ?? {});

function printRelated(component, related) {
  const lines = [];
  if (related.tree.length) {
    lines.push('parts (- renders · ↑ extends — the base component\'s styleOverrides also apply):');
    for (const n of related.tree) {
      lines.push(`  ${'  '.repeat(n.depth)}${n.kind === 'extends' ? '↑ ' : '- '}${short(n.component)}`);
    }
  }
  if (related.extendedBy.length) {
    lines.push(`extended by: ${related.extendedBy.map(short).join(', ')} — ${short(component)} styleOverrides reach them too`);
    const direct = directUses()[component] ?? [];
    if (direct.length) {
      const names = direct.map((d) => d.split('/')[1]);
      lines.push(`also used on its own: ${direct.length} docs demo${direct.length === 1 ? '' : 's'} (${names.slice(0, 3).join(', ')}${names.length > 3 ? ', …' : ''}) — not only a base: a requirement for the components built on it usually covers it too`);
    }
  }
  if (related.partOf.length) {
    lines.push(`part of: ${related.partOf.map(short).join(', ')}`);
  }
  if (related.contentSource) {
    lines.push(`text follows theme.${related.contentSource}${related.contentSourceVia ? ` (via ${short(related.contentSourceVia)})` : ''}`);
  }
  if (lines.length) {
    console.log(`related:\n${lines.map((l) => `  ${l}`).join('\n')}\n`);
  }
}

export async function run(program, name, options) {
  const { byComponent, fns } = loadSeams();
  const { components } = loadGraph();
  if (!name) {
    const list = components.map((c) => {
      const rows = (byComponent.get(c) ?? []).filter((r) => !r.internal);
      return { component: c, rows: rows.length, verified: rows.filter((r) => r.verified).length };
    });
    const record = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/renders.json'), 'utf8')).rows;
    const total = { rows: Object.keys(record).length, verified: Object.values(record).filter((e) => typeof e === 'string').length };
    if (program.opts().json) {
      jsonOut('components', { components: list, total });
      return;
    }
    for (const c of list) {
      console.log(`${short(c.component).padEnd(26)} ${String(c.rows).padStart(4)} rows${c.verified ? `  ${c.verified} verified` : ''}`);
    }
    console.log(`\n${total.verified}/${total.rows} style rows of public components verified by a real render (${Math.round((100 * total.verified) / total.rows)}%)`);
    console.log(`→ mui component <Name>   (aliases work: mui component tag)`);
    return;
  }
  const target = resolveToken(name);
  if (target?.kind === 'x') {
    (await import('../lib/xRender.mjs')).renderFeatureMap(program, target.product, target.label);
    return;
  }
  const component = target?.component ?? `Mui${name}`;
  const all = byComponent.get(component) ?? [];
  const related = relatedFor(component);
  const page = await demosFor(component);
  if (!all.length && !components.includes(component) && !related.partOf.length && !page) {
    const close = suggest(name, components);
    throw new Error(`unknown component: ${name}${close.length ? ` — did you mean ${close.map(short).join(', ')}?` : ' — `mui component` lists them all'}`);
  }
  const categories = options.category ? options.category.split(',').map((c) => c.trim()) : options.all ? null : DEFAULT_CATEGORIES;
  const rows = all.filter(
    (r) =>
      (options.all || !r.internal) &&
      (!categories || categories.includes(r.category)) &&
      (!options.slot || r.slot === options.slot || r.selector.some((part) => part.includes(`.${component}-${options.slot}`))),
  );
  // why a row is not confirmed by a render (render record): the component's exception list
  const record = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/renders.json'), 'utf8')).rows;
  const unconfirmed = {};
  for (const r of all) {
    const reason = record[r.id]?.skip;
    if (reason) {
      unconfirmed[reason] = (unconfirmed[reason] ?? 0) + 1;
    }
  }
  if (program.opts().json) {
    jsonOut('component', {
      component,
      unconfirmed,
      rows: rows.map(({ component: _c, ...r }) => ({
        ...r,
        // how to write it in a theme: selectors with *Classes keys, tokens through (theme.vars || theme)
        selectorCode: r.selector.map((part) => selectorCode(part, component).code),
        ...(r.token ? { tokenCode: tokenCode(r.token) } : {}),
        ...(r.matcher?.fn ? { matcherSource: fns[r.matcher.fn] } : {}),
        ...(record[r.id]?.skip ? { notConfirmed: record[r.id].skip } : {}),
      })),
      imports: [...new Set(rows.flatMap((r) => r.selector.flatMap((part) => selectorCode(part, component).imports)))],
      shown: rows.length,
      total: all.length,
      related,
      demos: page ? { url: page.url, count: page.demos.length } : null,
    });
    return;
  }
  const verified = all.filter((r) => r.verified).length;
  console.log(`${component} — ${all.length} style rows${verified ? ` · ${verified} verified by render` : ''}${page ? ` · ${page.demos.length} docs demos (mui demos ${short(component)})` : ''}`);
  const reasons = Object.entries(unconfirmed);
  console.log(reasons.length ? `not verified: ${reasons.map(([k, n]) => `${n} ${k}`).join(', ')}\n` : '');
  printRelated(component, related);
  if (!all.length) {
    console.log(`${short(component)} has no styles of its own — theme its parts.`);
    return;
  }
  const bySlot = new Map();
  const imports = new Set();
  for (const r of rows) {
    const slot = r.slot ?? `(internal ${r.element})`;
    // selectors as theme code: `&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`
    const code = r.selector.map((part) => selectorCode(part, component));
    code.forEach((c) => c.imports.forEach((i) => imports.add(i)));
    const group = `${matcherLabel(r.matcher, fns)}${code.length ? `  ${code.map((c) => c.code).join(' ')}` : ''}`;
    const groups = bySlot.get(slot) ?? new Map();
    groups.set(group, [...(groups.get(group) ?? []), r]);
    bySlot.set(slot, groups);
  }
  for (const [slot, groups] of bySlot) {
    console.log(slot.startsWith('(') ? `${slot} — not addressable via styleOverrides` : `slot ${slot}  (styleOverrides.${slot})`);
    for (const [group, list] of groups) {
      console.log(`  ${group}`);
      for (const r of list) {
        const link = r.token ? `  ← ${tokenCode(r.token)}` : r.refs ? `  ← ${r.refs.join(', ')}` : '';
        const value = r.token && fmt(r.value).length > 40 ? '…' : fmt(r.value);
        console.log(`    ${r.prop.padEnd(22)} ${value}${link}${r.verified ? '  ✓' : ''}${r.partial ? '  (partial)' : ''}`);
      }
    }
  }
  const hiddenRows = all.filter((r) => !rows.includes(r));
  if (hiddenRows.length) {
    const counts = Object.entries(Object.groupBy(hiddenRows, (r) => (r.internal ? 'internal' : r.category))).map(([k, v]) => `${k} ${v.length}`);
    console.log(`\n${hiddenRows.length} more rows (${counts.join(', ')}) — --category <list> or --all`);
  }
  if (imports.size) {
    console.log(`\nimports for these selectors:\n${[...imports].map((i) => `  ${i}`).join('\n')}`);
  }
  console.log('✓ = value confirmed in a real render · ← = follows that theme value (… = long value, see the token or --json)');
}
