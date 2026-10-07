import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { withCapture } from '../src/lib/capture.mjs';
import { DATA_DIR } from '../src/lib/data.mjs';
import { generatedUrl } from '../src/lib/renders.mjs';
import { ROOT, installedVersion } from './lib/pins.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(DATA_DIR, 'material/seams.json');
const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'seams-')), 'extracted.json');

execFileSync(process.execPath, ['--import', path.join(HERE, 'lib/extract/register.mjs'), path.join(HERE, 'lib/extract/extract.mjs'), ROOT, tmp], { stdio: 'inherit' });
const data = JSON.parse(fs.readFileSync(tmp, 'utf8'));
fs.rmSync(path.dirname(tmp), { recursive: true, force: true });
if (data.$source.mui !== installedVersion('@mui/material')) {
  throw new Error(`extracted ${data.$source.mui} but ${installedVersion('@mui/material')} is installed`);
}

const reachable = (from) => {
  const seen = new Set();
  const walk = (c) => {
    for (const next of [data.graph[c]?.extends, ...(data.graph[c]?.composes ?? [])].filter(Boolean)) {
      if (!seen.has(next)) {
        seen.add(next);
        walk(next);
      }
    }
  };
  walk(from);
  return seen;
};
// The derived graph must explain what really renders: every Mui component inside a plain generated render is reachable
// from it (the icon a generated render adds is ours, not the component's).
const graphGaps = [];
const exported = (c) => fs.existsSync(path.join(ROOT, 'node_modules/@mui/material', c.replace(/^Mui/, '')));
await withCapture(async (run) => {
  for (const component of Object.keys(data.graph).filter(exported)) {
    const out = await run({ probeUrl: generatedUrl(component), component, propsKey: 'base', graphDump: true }).catch(() => null);
    if (!out?.graph) {
      continue;
    }
    const compOf = (cls) => /^(Mui[A-Z]\w*)-root$/.exec(cls)?.[1];
    const seen = [...new Set([...out.graph.rootClasses, ...out.graph.descendants.flat()].map(compOf).filter((c) => c && c !== component && c !== 'MuiSvgIcon'))];
    const ok = reachable(component);
    seen.filter((c) => !ok.has(c)).forEach((c) => graphGaps.push(`${component} renders ${c}, not reachable in the derived graph`));
  }
});
if (graphGaps.length) {
  console.error(`sync-seams FAILED — graph misses what renders:\n  ${graphGaps.join('\n  ')}`);
  process.exit(1);
}

// `verified` comes from sync-renders; a row that did not change keeps it, a new or changed row waits for the next sync-renders
const previous = fs.existsSync(OUT) ? new Map(JSON.parse(fs.readFileSync(OUT, 'utf8')).rows.map((r) => [r.id, r])) : new Map();
let kept = 0;
for (const row of data.rows) {
  const old = previous.get(row.id);
  row.verified = old && JSON.stringify(old.value) === JSON.stringify(row.value) ? old.verified ?? null : null;
  kept += row.verified ? 1 : 0;
}
const { graph, components, ...seams } = data;
fs.writeFileSync(OUT, `${JSON.stringify(seams)}\n`);
fs.writeFileSync(path.join(DATA_DIR, 'material/graph.json'), `${JSON.stringify({ $source: data.$source, components, graph }, null, 2)}\n`);
console.log(`sync-seams → data/material/seams.json (@mui/material ${data.$source.mui}): ${data.rows.length} rows, ${kept} keep their render confirmation — run \`pnpm sync-renders\` to confirm the rest`);
console.log(`  graph: ${Object.keys(graph).length} components → data/material/graph.json, consistent with every generated render`);
