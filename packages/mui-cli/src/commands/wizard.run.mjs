import { contract } from '../design/wizard.mjs';
import { jsonOut } from '../lib/json.mjs';

export function run(program) {
  if (program.opts().json) {
    jsonOut('wizard', contract);
    return;
  }
  const out = [];
  out.push('mui wizard — the DESIGN.md authoring contract');
  out.push('Run this FIRST, then interview the user with the question framework below.');
  out.push('The user owns every decision; you never invent fields or numbers.\n');

  out.push('SCHEMA — what `mui compile-theme` reads:');
  for (const s of contract.schema) {
    out.push(`  ${s.field.padEnd(26)} [${s.required ? 'required' : 'optional'}]  ${s.type}`);
    out.push(`  ${''.padEnd(26)}  → ${s.mapsTo}${s.note ? ` — ${s.note}` : ''}`);
  }

  out.push('\nDECISION → FIELD:');
  for (const d of contract.decisions) {
    out.push(`  ${d.decision.padEnd(22)} → ${d.fills}`);
    out.push(`  ${''.padEnd(22)}   (${d.how})`);
  }

  out.push('\nVIBE DEFAULTS — a round-1 vibe sets the recommended shape/type (else the flat * applies):');
  for (const [vibe, d] of Object.entries(contract.vibeDefaults)) {
    out.push(`  ${vibe.padEnd(14)} corners ${d.corners} · base-font ${d.baseFont} · palette: ${d.palette}`);
  }

  out.push('\nFONTS — the agent decides the typeface from vibe/domain:');
  for (const [vibe, font] of Object.entries(contract.fonts.byVibe)) {
    out.push(`  ${vibe.padEnd(14)} ${font}`);
  }
  out.push(`  display        ${contract.fonts.display}`);
  out.push(`  data-heavy     ${contract.fonts.data}`);
  out.push(`  rule: ${contract.fonts.rule}`);

  out.push('\nALWAYS APPLIED by compile-theme (not asked):');
  for (const a of contract.alwaysApplied) {
    out.push(`  • ${a}`);
  }

  out.push('\nQUESTION FRAMEWORK — ask in order; * = recommended default (vibe overrides shape/type):');
  for (const r of contract.rounds) {
    out.push(`\n  Round ${r.round} — ${r.title}`);
    for (const q of r.questions) {
      out.push(`    ${q.id}: ${q.ask}`);
      out.push(`      [${q.options.join(', ')}]  → ${q.fills}`);
      if (q.note) {
        out.push(`      note: ${q.note}`);
      }
    }
  }

  out.push('\nNext: interview the user round by round, fill the schema, then');
  out.push('`mui compile-theme <DESIGN.md> -o theme.ts` → `mui showcase <DESIGN.md>` (and `--tokens`).');
  console.log(out.join('\n'));
}
