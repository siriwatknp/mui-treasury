import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BIN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../bin/mui.mjs');
const theme = (extra) => `export default { components: { MuiChip: { styleOverrides: { root: { borderRadius: 4${extra} } } } } };\n`;

function repo() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-diff-'));
  const git = (...a) => execFileSync('git', ['-C', dir, ...a], { stdio: 'ignore' });
  git('init', '-q');
  fs.writeFileSync(path.join(dir, 'theme.ts'), theme(''));
  git('add', '.');
  git('-c', 'user.email=t@t', '-c', 'user.name=t', 'commit', '-qm', 'init');
  return dir;
}
const diff = (cwd, ...args) => JSON.parse(spawnSync(process.execPath, [BIN, '--json', 'diff', '--theme', 'theme.ts', ...args], { cwd, encoding: 'utf8' }).stdout).data;

test('against git HEAD: the edited component and what renders it, the edit shows, the HEAD copy is cleaned up', () => {
  const dir = repo();
  fs.writeFileSync(path.join(dir, 'theme.ts'), theme(', paddingInline: 10'));
  const data = diff(dir);
  assert.deepEqual(data.scope.components.sort(), ['MuiAutocomplete', 'MuiChip'], 'Autocomplete renders Chips for its tags');
  assert.ok(data.changes.some((c) => c.slot === 'root' && c.prop.includes('padding-left') && c.after === '10px'));
  assert.deepEqual(fs.readdirSync(dir).filter((f) => f.startsWith('.mui-diff')), []);
});

test('no edit since HEAD: no changes', () => {
  const data = diff(repo());
  assert.equal(data.scope.components.length, 0);
  assert.deepEqual(data.changes, []);
});

test('against vanilla, limited to a named component', () => {
  const data = diff(repo(), 'Chip', '--against', 'vanilla');
  assert.equal(data.against, 'vanilla Material UI');
  assert.ok(data.changes.some((c) => c.prop.includes('border-top-left-radius') && c.after === '4px'));
});
