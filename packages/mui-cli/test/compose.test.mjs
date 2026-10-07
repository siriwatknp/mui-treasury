import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const BIN = path.resolve(fileURLToPath(import.meta.url), '../../bin/mui.mjs');
const run = (...args) => execFileSync(process.execPath, [BIN, ...args], { encoding: 'utf8' });
const runFull = (...args) => {
  const r = execFileSync(process.execPath, [BIN, ...args], { encoding: 'utf8' });
  return r;
};

test('collision rename: both demos declare `const label` — second becomes label2, usages updated', () => {
  const out = run('compose', 'Checkbox:Checkboxes', 'Switch:BasicSwitches');
  assert.ok(out.includes('const label = '), 'first demo keeps its name');
  assert.ok(out.includes('const label2 = '), 'second demo suffixed');
  assert.ok(out.includes('<Switch {...label2}'), 'usage updated to the suffix');
  assert.ok(out.includes("'aria-label': 'Switch demo'"), 'string/property label untouched');
});

test('binding-level import dedupe: shared imports collapse; wrapper reuses an existing Stack', () => {
  const out = run('compose', 'Button:BasicButtons', 'Avatar:LetterAvatars');
  assert.equal(out.match(/import Stack from '@mui\/material\/Stack';/g)?.length, 1);
  assert.ok(!out.includes('Stack2'), 'no spurious alias when the binding is identical');
  const withReact = run('compose', 'Tabs:BasicTabs', 'Switch:ControlledSwitches');
  assert.equal(withReact.match(/import \* as React from 'react';/g)?.length, 1);
});

test('wrapper: named demo functions + default-export ComposedDemos in <Stack spacing={4}>', () => {
  const out = run('compose', 'Button:BasicButtons', 'Tabs:BasicTabs');
  assert.ok(out.includes('function BasicButtons()'));
  assert.ok(out.includes('function BasicTabs()'));
  assert.ok(out.includes('export default function ComposedDemos()'));
  assert.ok(out.includes('<Stack spacing={4}>') && out.includes('<BasicButtons />') && out.includes('<BasicTabs />'));
  assert.equal(out.match(/export default/g)?.length, 1, 'demo default exports stripped');
});

test('--theme wraps with ThemeProvider and a relative theme import; -o writes the file', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-cli-compose-'));
  fs.writeFileSync(path.join(dir, 'my-theme.ts'), 'export default {};\n');
  const outFile = path.join(dir, 'composed.tsx');
  const msg = run('compose', 'Switch:BasicSwitches', '--theme', path.join(dir, 'my-theme.ts'), '-o', outFile);
  assert.match(msg, /composed 1 demos → /);
  const out = fs.readFileSync(outFile, 'utf8');
  assert.ok(out.includes("import themeOptions from './my-theme';"));
  assert.ok(out.includes('<ThemeProvider theme={createTheme(themeOptions)}>'));
});

test('needs note names packages beyond react + @mui/material', () => {
  const out = runFull('compose', 'IconButton:IconButtons', '-o', path.join(os.tmpdir(), 'mui-needs.tsx'));
  assert.match(out, /needs: .*@mui\/icons-material/);
});

test('bad picks refuse with candidates / format error', () => {
  assert.throws(
    () => run('compose', 'Switch:Nope'),
    (err) => {
      assert.match(String(err.stderr), /available: BasicSwitches/);
      return true;
    },
  );
  assert.throws(
    () => run('compose', 'JustAName'),
    (err) => {
      assert.match(String(err.stderr), /expects Component:Demo/);
      return true;
    },
  );
});

test('--js strips types from the composed file, JSX kept', () => {
  const out = run('compose', 'Tabs:BasicTabs', '--js');
  assert.ok(!out.includes('interface TabPanelProps'), 'interface stripped');
  assert.ok(out.includes('<Stack spacing={4}>'), 'JSX kept');
});

test('--copy puts the composed file on the clipboard, summary only', { skip: process.platform !== 'darwin' || !process.env.MUI_CLI_TEST_CLIPBOARD }, () => {
  const out = run('compose', 'Checkbox:Checkboxes', 'Switch:BasicSwitches', '--copy');
  assert.match(out, /^copied 2 composed demos \(\d+ lines\) to clipboard/);
  assert.ok(!out.includes('const label'), 'source must not print in copy mode');
  const clip = execFileSync('pbpaste', { encoding: 'utf8' });
  assert.ok(clip.includes('const label2 = ') && clip.includes('export default function ComposedDemos()'));
});

test('--theme with a createTheme() RESULT: passed to ThemeProvider as-is, no createTheme import', () => {
  const fixture = path.resolve(fileURLToPath(import.meta.url), '../fixtures/createdTheme.theme.mjs');
  const out = run('compose', 'Switch:BasicSwitches', '--theme', fixture);
  assert.ok(out.includes('<ThemeProvider theme={appTheme}>'), 'created theme used verbatim');
  assert.ok(!out.includes('createTheme'), 'no createTheme import or call');
});

test('data files: -o emits the assets a demo imports next to the output', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-cli-assets-'));
  const outFile = path.join(dir, 'combo.tsx');
  const msg = run('compose', 'Autocomplete:ComboBox', '-o', outFile);
  assert.match(msg, /emitted: top100Films\.ts \(data file of ComboBox\)/);
  const asset = fs.readFileSync(path.join(dir, 'top100Films.ts'), 'utf8');
  assert.ok(asset.includes('The Shawshank Redemption'), 'asset content written');
  assert.ok(fs.readFileSync(outFile, 'utf8').includes("from './top100Films'"), 'import preserved');
});

test('data files: transitive asset imports ride along (server → movies)', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-cli-assets-'));
  const msg = run('compose', 'Autocomplete:InfiniteLoading', '-o', path.join(dir, 'inf.tsx'));
  assert.match(msg, /emitted: server\.ts \(data file of InfiniteLoading\)/);
  assert.match(msg, /emitted: movies\.ts/);
  assert.ok(fs.existsSync(path.join(dir, 'movies.ts')), 'nested asset written');
});

test('data files: stdout mode keeps the pipe clean and notes the needed file on stderr', () => {
  const r = spawnSync(process.execPath, [BIN, 'compose', 'Autocomplete:ComboBox'], { encoding: 'utf8' });
  assert.ok(!r.stdout.includes('data file needed'), 'note not on stdout');
  assert.match(r.stderr, /data file needed: top100Films\.ts \(data file of ComboBox\)/);
});

test('data files: --js transpiles emitted assets and renames to .js', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-cli-assets-'));
  run('compose', 'Autocomplete:ComboBox', '--js', '-o', path.join(dir, 'combo.jsx'));
  const asset = fs.readFileSync(path.join(dir, 'top100Films.js'), 'utf8');
  assert.ok(asset.includes('The Shawshank Redemption'));
  assert.ok(!fs.existsSync(path.join(dir, 'top100Films.ts')), 'no stray .ts twin');
});

test('data files: --json carries assets + unresolved', () => {
  const raw = run('--json', 'compose', 'Autocomplete:ComboBox');
  const { data } = JSON.parse(raw);
  assert.deepEqual(data.assets.map((a) => a.file), ['top100Films.ts']);
  assert.deepEqual(data.unresolved, []);
});
