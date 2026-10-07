// Compositions: per component, the docs demos that render it in context (inside a label, a group, a list, a card…), and its own docs page's demos.
// `verify --all` runs its rules on every instance in them. Writes data/material/compositions.json and ships the demos.
import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from '../src/lib/data.mjs';
import { COMPOSITION_DEMOS_DIR, loadRenders } from '../src/lib/renders.mjs';
import { bootEngine, runOn } from '../src/lib/renderEngine.mjs';
import { demosFor } from '../src/lib/demos.mjs';
import { coreOnly, demoIndex, shipDemo } from './lib/docsDemos.mjs';
import { readPins, tagFor, vendorPath, vendorTag } from './lib/pins.mjs';

const version = readPins().material;
const VENDOR = vendorPath('material', version);
if (vendorTag(VENDOR) !== tagFor(version)) {
  throw new Error(`vendor/material-ui@${version} missing or not at ${tagFor(version)} — run \`pnpm vendor\``);
}
const DOCS = path.join(VENDOR, 'docs/data/material/components');
const PER_COMPONENT = 4;
const PER_OWN = 6;
const byImport = demoIndex(DOCS);
const source = (demo) => fs.readFileSync(path.join(DOCS, `${demo}.tsx`), 'utf8');
const muiImports = (demo) => [...byImport.entries()].filter(([, demos]) => demos.includes(demo)).length;
// a demo restyling the component (styled(Switch), a Customized* demo) shows the demo's styles, not the theme's
const restyles = (demo, c) => /\/Customized/.test(demo) || new RegExp(`styled\\(\\s*${c.slice(3)}\\b`).test(source(demo));

const components = Object.keys(loadRenders().components).sort();
const candidates = (c) =>
  (byImport.get(c) ?? [])
    .filter((d) => coreOnly(DOCS, d) && !restyles(d, c))
    .sort((a, b) => Number(muiImports(b) > 1) - Number(muiImports(a) > 1) || Number(b.includes(c.slice(3))) - Number(a.includes(c.slice(3))));

const engine = await bootEngine({ hostRoot: path.dirname(DATA_DIR) });
const lease = await engine.acquire({});
const run = (cfg) => runOn(lease.page, cfg);
const renders = async (demo, c) => {
  const probeUrl = `/@fs${path.join(DOCS, `${demo}.tsx`)}`;
  const rendered = await run({ gate: 'render', probeUrl, component: c, propsKey: 'base' }).catch(() => null);
  await run({ gate: 'done' }).catch(() => null);
  return Boolean(rendered?.instances);
};
const out = {};
// a component's own docs page: the demos that show it as documented (what a family gallery showed)
const own = {};
for (const c of components) {
  const kept = [];
  for (const demo of candidates(c)) {
    if (kept.length >= PER_COMPONENT) {
      break;
    }
    if (await renders(demo, c)) {
      kept.push(demo);
    }
  }
  if (kept.length) {
    out[c] = kept;
  }
  const page = await demosFor(c);
  const mine = [];
  for (const demo of (page?.demos ?? []).map((d) => `${page.slug}/${d.name}`)) {
    if (mine.length >= PER_OWN) {
      break;
    }
    if (fs.existsSync(path.join(DOCS, `${demo}.tsx`)) && coreOnly(DOCS, demo) && !restyles(demo, c) && !kept.includes(demo) && (await renders(demo, c))) {
      mine.push(demo);
    }
  }
  if (mine.length) {
    own[c] = mine;
  }
  process.stderr.write(`\r  compositions: ${components.indexOf(c) + 1}/${components.length}`);
}
process.stderr.write('\n');
await engine.release(lease);
await engine.close();

fs.rmSync(COMPOSITION_DEMOS_DIR, { recursive: true, force: true });
for (const demo of new Set([...Object.values(out), ...Object.values(own)].flat())) {
  shipDemo(DOCS, COMPOSITION_DEMOS_DIR, demo);
}
// demos rendering a component directly (`<InputBase`, `styled(InputBase)`): it is used on its own, not only as another component's base
const direct = {};
for (const c of components) {
  const re = new RegExp(`<${c.slice(3)}\\b|styled\\(\\s*${c.slice(3)}\\b`);
  const hits = (byImport.get(c) ?? []).filter((d) => re.test(source(d)));
  if (hits.length) {
    direct[c] = hits;
  }
}
fs.writeFileSync(path.join(DATA_DIR, 'material/compositions.json'), `${JSON.stringify({ source: `@mui/material@${version} docs`, components: out, own, direct }, null, 2)}\n`);
console.log(`${Object.keys(out).length}/${components.length} components have compositions, ${Object.keys(own).length} their own page demos · ${new Set([...Object.values(out), ...Object.values(own)].flat()).size} demos shipped`);
