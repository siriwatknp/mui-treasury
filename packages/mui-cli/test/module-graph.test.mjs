import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const BIN = path.resolve(HERE, '../bin/mui.mjs');
const RECORD = path.resolve(HERE, 'helpers/record-modules.mjs');
const HEAVY = /\/node_modules\/(?:\.pnpm\/[^/]+\/node_modules\/)?(typescript|@mui\/material|@mui\/system|vite|playwright-core|react-dom)\//;

function loadedModules(args) {
  const out = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'graph-')), 'modules.txt');
  execFileSync(process.execPath, ['--import', RECORD, BIN, ...args], { env: { ...process.env, MUI_CLI_RECORD_MODULES: out }, stdio: 'ignore' });
  return fs.readFileSync(out, 'utf8').split('\n').filter(Boolean);
}

for (const args of [['--version'], ['doctor'], ['demos', 'Button'], ['demos', 'Button', 'BasicButtons'], ['demos', 'Button', 'BasicButtons', '--js'], ['compose', 'Checkbox:Checkboxes', 'Switch:BasicSwitches'], ['compose', 'Tabs:BasicTabs', '--js'], ['component', 'Button'], ['component'], ['search', 'button', 'padding'], ['tag'], ['server'], ['wizard'], ['--json', 'wizard'], ['component', 'DataGrid'], ['demos', 'data-grid', 'filtering'], ['demos', 'data-grid', 'filtering', 'QuickFilteringGrid', '--js'], ['compose', 'tree-view/rich-tree-view/editing:LabelEditingAllItems']]) {
  test(`\`mui ${args.join(' ')}\` loads no heavy module`, () => {
    const heavy = loadedModules(args).filter((url) => HEAVY.test(url)).map((url) => url.match(HEAVY)[1]);
    assert.deepEqual([...new Set(heavy)], []);
  });
}

test('the recorder sees heavy modules when they are loaded', () => {
  const theme = path.resolve(HERE, 'fixtures/createdTheme.theme.mjs');
  assert.ok(loadedModules(['compose', 'Switch:BasicSwitches', '--theme', theme]).some((url) => HEAVY.test(url)));
});

test('`mui compile-theme` loads createTheme only — never typescript, vite or playwright', () => {
  const heavy = new Set(loadedModules(['compile-theme', path.resolve(HERE, 'fixtures/DESIGN.md')]).filter((url) => HEAVY.test(url)).map((url) => url.match(HEAVY)[1]));
  assert.deepEqual([...heavy].filter((m) => !['@mui/material', '@mui/system'].includes(m)), []);
});
