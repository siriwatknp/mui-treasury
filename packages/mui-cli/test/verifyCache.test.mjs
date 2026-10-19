import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { openCache } from '../src/lib/verifyCache.mjs';

function project() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-verify-cache-'));
  fs.mkdirSync(path.join(dir, 'theme/components'), { recursive: true });
  const write = (file, text) => fs.writeFileSync(path.join(dir, 'theme', file), text);
  write('scales.ts', 'export const HEIGHT = 32;\n');
  write('palette.ts', "export const palette = { primary: { main: '#123456' } };\n");
  write('components/button.ts', "import { HEIGHT } from '../scales';\nexport const buttonTheme = { MuiButton: { styleOverrides: { root: () => ({ minHeight: HEIGHT }) } } };\n");
  write('components/chip.ts', 'export const chipTheme = { MuiChip: { styleOverrides: { root: { borderRadius: 4 } } } };\n');
  write('components/input.ts', 'export const inputTheme = { MuiNotchedOutlined: { styleOverrides: { root: { borderWidth: 2 } } } };\n');
  write('theme.ts', [
    "import { palette } from './palette';",
    "import { buttonTheme } from './components/button';",
    "import { chipTheme } from './components/chip';",
    "import { inputTheme } from './components/input';",
    'export default { palette, components: { ...buttonTheme, ...chipTheme, ...inputTheme } };',
    '',
  ].join('\n'));
  return { dir, theme: path.join(dir, 'theme/theme.ts'), write };
}

const caseOf = (component) => ({ component, kind: 'variant', label: 'base', url: `/${component}`, propsKey: 'base', interaction: [] });
const resultOf = (c, rendered) => ({ case: c, instances: 1, checks: { target: 1, dead: 1, ring: 1 }, failures: [], shot: null, rendered });
const noShot = () => false;
const CASES = { button: caseOf('MuiButton'), chip: caseOf('MuiChip'), input: caseOf('MuiOutlinedInput') };
const RENDERED = { button: ['MuiButton', 'MuiButtonBase', 'MuiTouchRipple'], chip: ['MuiChip'], input: ['MuiInputBase', 'MuiOutlinedInput'] };

async function hitsAfter(p, edit) {
  const first = await openCache({ hostRoot: p.dir, themeFile: p.theme });
  for (const k of Object.keys(CASES)) {
    first.put(resultOf(CASES[k], RENDERED[k]));
  }
  first.save();
  edit?.();
  const next = await openCache({ hostRoot: p.dir, themeFile: p.theme });
  return Object.keys(CASES).filter((k) => next.lookup(CASES[k], noShot));
}

test('verify cache: an unchanged theme reuses every result, marked as cached', async () => {
  const p = project();
  assert.deepEqual(await hitsAfter(p), ['button', 'chip', 'input']);
  const again = await openCache({ hostRoot: p.dir, themeFile: p.theme });
  const hit = again.lookup(CASES.chip, noShot);
  assert.equal(hit.cached, true);
  assert.equal(hit.case, CASES.chip);
  assert.deepEqual(hit.checks, { target: 1, dead: 1, ring: 1 });
});

test('verify cache: a component file re-runs only the cases rendering its components', async () => {
  const p = project();
  assert.deepEqual(await hitsAfter(p, () => p.write('components/chip.ts', 'export const chipTheme = { MuiChip: { styleOverrides: { root: { borderRadius: 8 } } } };\n')), ['button', 'input']);
});

test('verify cache: a file a style function reads (not a value in the theme) re-runs the cases it reaches', async () => {
  const p = project();
  assert.deepEqual(await hitsAfter(p, () => p.write('scales.ts', 'export const HEIGHT = 36;\n')), ['chip', 'input']);
});

test('verify cache: a global value re-runs every case', async () => {
  const p = project();
  assert.deepEqual(await hitsAfter(p, () => p.write('palette.ts', "export const palette = { primary: { main: '#654321' } };\n")), []);
});

test('verify cache: a key with no class of its own re-runs the components that apply it', async () => {
  const p = project();
  assert.deepEqual(await hitsAfter(p, () => p.write('components/input.ts', 'export const inputTheme = { MuiNotchedOutlined: { styleOverrides: { root: { borderWidth: 1 } } } };\n')), ['button', 'chip']);
});

test('verify cache: a result the sheet needs is reused only with its screenshot', async () => {
  const p = project();
  const cache = await openCache({ hostRoot: p.dir, themeFile: p.theme });
  const shot = path.join(p.dir, 'chip.png');
  fs.writeFileSync(shot, 'png');
  cache.put({ ...resultOf(CASES.chip, RENDERED.chip), shot });
  cache.put(resultOf(CASES.button, RENDERED.button));
  cache.save();
  fs.rmSync(shot);
  const next = await openCache({ hostRoot: p.dir, themeFile: p.theme });
  assert.ok(fs.existsSync(next.lookup(CASES.chip, () => true).shot));
  assert.equal(next.lookup(CASES.button, () => true), null);
});

test('verify cache: reuse off runs every case and still keeps the fresh results', async () => {
  const p = project();
  const off = await openCache({ hostRoot: p.dir, themeFile: p.theme, reuse: false });
  off.put(resultOf(CASES.chip, RENDERED.chip));
  off.save();
  const again = await openCache({ hostRoot: p.dir, themeFile: p.theme, reuse: false });
  assert.equal(again.lookup(CASES.chip, noShot), null);
  assert.ok((await openCache({ hostRoot: p.dir, themeFile: p.theme })).lookup(CASES.chip, noShot));
});
