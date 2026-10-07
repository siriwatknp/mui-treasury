import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from '../src/lib/data.mjs';
import { installedVersion } from '../scripts/lib/pins.mjs';

const data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/seams.json'), 'utf8'));
const row = (id) => data.rows.find((r) => r.id === id);

test('built from the installed Material UI', () => {
  assert.equal(data.$source.mui, installedVersion('@mui/material'));
});

test('ids are unique and every function matcher resolves', () => {
  assert.equal(new Set(data.rows.map((r) => r.id)).size, data.rows.length);
  assert.deepEqual(data.rows.filter((r) => r.matcher?.fn && !data.fns[r.matcher.fn]).map((r) => r.id), []);
});

test('every row carries the full schema', () => {
  for (const r of data.rows) {
    assert.ok(r.component.startsWith('Mui') && typeof r.prop === 'string' && Array.isArray(r.selector), r.id);
    assert.ok(r.slot === null ? r.internal === true : typeof r.slot === 'string', r.id);
    assert.ok(['sizing', 'spacing', 'typography', 'color', 'border', 'shadow', 'motion', 'layout', 'variable'].includes(r.category), r.id);
    assert.ok([true, null].includes(r.verified), `${r.id}: verified must be true or null in shipped data`);
  }
});

test('values come from the real style code, including generated and shared-slot variants', () => {
  assert.equal(row('MuiButton|root|base||padding').value, '6px 16px');
  assert.equal(row('MuiButton|root|size=small,variant=text||padding').value, '4px 5px');
  assert.ok(row('MuiButton|root|color=success||--variant-containedBg'), 'palette-generated variant present');
  assert.equal(row('MuiPaginationItem|root(ButtonBase)|size=small||height').value, 26);
  assert.equal(row('MuiPaginationItem|root(div)|base||height').value, 'auto');
});

test('theme links: tokens and typography', () => {
  assert.equal(row('MuiButton|root|base||borderRadius').token, 'shape.borderRadius');
  assert.equal(row('MuiButton|root|base||fontSize').token, 'typography.button.fontSize');
  assert.equal(row('MuiButton|root|base|&.Mui-disabled|color').token, 'palette.action.disabled');
  assert.equal(row('MuiButton|root|size=small,variant=text||fontSize').token, undefined);
});

test('prop-computed components are marked partial', () => {
  const partial = new Set(data.rows.filter((r) => r.partial).map((r) => r.component));
  assert.deepEqual([...partial].sort(), ['MuiContainer', 'MuiGrid', 'MuiNativeSelect', 'MuiStack']);
});

test('shipped data holds no local paths', () => {
  assert.doesNotMatch(JSON.stringify(data), /\/Users\/|node_modules|Personal-Repos/);
});
