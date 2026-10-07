import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BIN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../bin/mui.mjs');
const run = (...args) => execFileSync(process.execPath, [BIN, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
const json = (...args) => JSON.parse(run('--json', ...args)).data;

test('component view: slots, variants, theme links, render checks, related parts', () => {
  const out = run('component', 'Button');
  assert.match(out, /slot root {2}\(styleOverrides\.root\)/);
  assert.match(out, /size=small, variant=text\n +padding +4px 5px +✓/);
  assert.match(out, /borderRadius +4 +← \(theme\.vars \|\| theme\)\.shape\.borderRadius +✓/);
  assert.match(out, /↑ ButtonBase/);
  assert.match(out, /text follows theme\.typography\.button/);
  assert.match(out, /more rows \(.*color \d+/);
});

test('--json carries ids, matcher source and totals', () => {
  const data = json('component', 'Chip', '--category', 'spacing');
  assert.ok(data.rows.every((r) => r.category === 'spacing' && r.id.startsWith('MuiChip|')));
  assert.ok(data.total > data.shown);
  assert.equal(data.demos.url, 'https://mui.com/material-ui/react-chip/');
});

test('--slot also finds rows that reach the slot through a nested selector', () => {
  const rows = json('component', 'Chip', '--slot', 'deleteIcon').rows;
  assert.ok(rows.some((r) => r.slot === 'root' && r.selector.includes('& .MuiChip-deleteIcon') && r.prop === 'fontSize'));
});

test('wrappers without styles show their parts; aliases and typos are handled', () => {
  assert.match(run('component', 'TextField'), /no styles of its own — theme its parts/);
  assert.match(run('tag'), /^MuiChip — /);
  assert.throws(() => run('component', 'Buton'), (err) => /did you mean Button\?/.test(String(err.stderr)));
});

test('search ranks rows across components', () => {
  const data = json('search', 'button', 'padding', 'small');
  assert.equal(data.results[0].id, 'MuiButton|root|size=small,variant=text||padding');
  assert.match(run('search', 'radius', 'shape'), /← \(theme\.vars \|\| theme\)\.shape\.borderRadius/);
  assert.match(run('search', 'zzzz-nothing'), /No style rows match/);
});

test('a base other components extend says when it is also used on its own', () => {
  const out = run('component', 'InputBase');
  assert.match(out, /extended by: FilledInput, Input, OutlinedInput/);
  assert.match(out, /also used on its own: \d+ docs demos \(.*\) — not only a base/);
  assert.doesNotMatch(run('component', 'Chip'), /also used on its own/);
});

test('selectors print as theme code: *Classes keys in a template literal, with the imports they need', () => {
  const out = run('component', 'OutlinedInput');
  assert.match(out, /`&\.\$\{outlinedInputClasses\.focused\} \.\$\{outlinedInputClasses\.notchedOutline\}`/);
  assert.match(out, /import \{ outlinedInputClasses \} from '@mui\/material\/OutlinedInput';/);
  assert.ok(!/\.MuiOutlinedInput-notchedOutline/.test(out));
});
