import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from '../src/lib/data.mjs';
import { uncoveredOptions } from './lib/optionCoverage.mjs';
import { LIBRARIES, comparePins, installedVersion, readPins, vendorPath, vendorTag } from './lib/pins.mjs';

const pins = readPins();
const observed = Object.fromEntries(
  Object.entries(pins).map(([lib, version]) => [
    lib,
    { vendorTag: vendorTag(vendorPath(lib, version)), installed: installedVersion(LIBRARIES[lib]?.probePackage ?? '') },
  ]),
);
const { failures, notes } = comparePins(pins, observed);
notes.forEach((n) => console.log(`note: ${n}`));
// every theme option the pinned Material UI declares is either a `recommend` entry or listed as reviewed
const catalog = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/recommendations.json'), 'utf8'));
const uncovered = uncoveredOptions(vendorPath('material', pins.material), catalog);
if (uncovered.length) {
  failures.push(`theme options with no recommend entry or review: ${uncovered.join(', ')} — add them to data/material/recommendations.json (entries[].options or reviewed)`);
}
if (failures.length) {
  console.error(`check-pins FAILED:\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log(`check-pins OK — ${JSON.stringify(pins)}`);
