import { selectorCode, tokenCode } from '../lib/codeForm.mjs';
import { jsonOut } from '../lib/json.mjs';
import { loadSeams, matcherLabel } from '../lib/seams.mjs';

function score(tokens, row, fns) {
  const comp = row.component.slice(3).toLowerCase();
  const prop = row.prop.toLowerCase();
  let rest = null;
  let total = 0;
  for (const t of tokens) {
    if (comp === t) {
      total += 30;
    } else if (comp.includes(t)) {
      total += 15;
    } else if (prop === t) {
      total += 12;
    } else if (prop.includes(t)) {
      total += 8;
    } else {
      rest ??= [row.slot ?? '', row.category, row.token ?? '', row.selector.join(' '), matcherLabel(row.matcher, fns)].join('\n').toLowerCase();
      if (!rest.includes(t)) {
        return 0;
      }
      total += 5;
    }
  }
  return total - (row.internal ? 10 : 0) - (row.selector.length ? 1 : 0);
}

export async function run(program, words, options) {
  const { rows, fns } = loadSeams();
  const tokens = words.join(' ').toLowerCase().split(/\s+/).filter(Boolean);
  const results = rows
    .map((row) => ({ row, score: score(tokens, row, fns) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, Number(options.limit));
  const query = words.join(' ');
  if (program.opts().json) {
    jsonOut('search', { query, results: results.map(({ row, score: s }) => ({ ...row, score: s })) });
    return;
  }
  if (!results.length) {
    console.log(`No style rows match "${query}".`);
    return;
  }
  console.log(`Results for "${query}" (${results.length}):\n`);
  for (const { row } of results) {
    const where = [row.slot ?? `internal ${row.element}`, matcherLabel(row.matcher, fns), row.selector.map((part) => selectorCode(part, row.component).code).join(' ')].filter((x) => x && x !== 'base').join(' · ');
    console.log(`  ${row.component.replace(/^Mui/, '')} · ${where ? `${where} · ` : ''}${row.prop} = ${typeof row.value === 'string' ? row.value : JSON.stringify(row.value)}${row.token ? `  ← ${tokenCode(row.token)}` : ''}${row.verified ? '  ✓' : ''}`);
  }
  console.log(`\n→ mui component ${results[0].row.component.replace(/^Mui/, '')}`);
}
