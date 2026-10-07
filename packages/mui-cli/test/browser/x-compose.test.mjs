import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { withCapture, HARNESS_DIR } from '../../src/lib/capture.mjs';

const BIN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../bin/mui.mjs');

test('composed MUI X demos, with data files from sibling folders, render', async () => {
  const dir = fs.mkdtempSync(path.join(HARNESS_DIR, '_demos-x-'));
  try {
    execFileSync(process.execPath, [BIN, 'compose', 'charts/lines:LineDataset', 'tree-view/rich-tree-view/editing:LabelEditingAllItems', 'date-pickers/date-picker:BasicDatePicker', 'data-grid/overview:DataGridDemo', '-o', path.join(dir, 'Composed.tsx')], { stdio: 'ignore' });
    assert.deepEqual(fs.readdirSync(dir).sort(), ['Composed.tsx', 'products.ts', 'worldElectricityProduction.ts']);
    const out = await withCapture(async (run) => {
      const rendered = await run({ gate: 'render', probeUrl: `/${path.basename(dir)}/Composed.tsx`, component: 'MuiCheckbox', propsKey: 'base' });
      await run({ gate: 'done' });
      return rendered;
    });
    assert.equal(out.error, undefined);
    assert.ok(out.instances > 0, 'the data grid renders its selection checkboxes');
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
