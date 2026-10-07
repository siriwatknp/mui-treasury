import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { builtWith, loadData } from '../src/lib/data.mjs';

function dataDir(meta, files = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'data-fixture-'));
  fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify(meta));
  for (const [rel, content] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, rel)), { recursive: true });
    fs.writeFileSync(path.join(dir, rel), content);
  }
  return dir;
}

test('builtWith reads the generated versions', () => {
  assert.deepEqual(builtWith(dataDir({ builtWith: { material: '9.4.0' } })), { material: '9.4.0' });
  assert.deepEqual(builtWith(dataDir({})), {});
});

test('loadData loads a library data module', async () => {
  const dir = dataDir({ builtWith: { material: '9.4.0' } }, { 'material/seams.mjs': 'export const rows = [1];\n' });
  assert.deepEqual((await loadData('material', 'seams', dir)).rows, [1]);
});

test('loadData explains missing data and unknown libraries', async () => {
  const dir = dataDir({ builtWith: {} });
  await assert.rejects(loadData('x', 'demos', dir), /no x data "demos" in this build \(not generated\)/);
  await assert.rejects(loadData('joy', 'seams', dir), /unknown data library "joy"/);
});
