import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from '../src/lib/data.mjs';
import { installedVersion } from '../scripts/lib/pins.mjs';

const { $source, components, graph } = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/graph.json'), 'utf8'));

test('built from the installed Material UI', () => {
  assert.equal($source.mui, installedVersion('@mui/material'));
});

test('extends follows the wrapped component, through slot-less and shared roots', () => {
  assert.equal(graph.MuiButton.extends, 'MuiButtonBase');
  assert.equal(graph.MuiOutlinedInput.extends, 'MuiInputBase');
  assert.equal(graph.MuiCheckbox.extends, 'MuiSwitchBase');
  assert.equal(graph.MuiSwitchBase.extends, 'MuiButtonBase');
  assert.equal(graph.MuiPaginationItem.extends, 'MuiButtonBase');
});

test('composes = components MUI renders itself, not children you pass or helpers it imports', () => {
  assert.ok(graph.MuiSelect.composes.includes('MuiMenu'));
  assert.ok(graph.MuiTextField.composes.includes('MuiInputLabel'));
  assert.ok(graph.MuiAlert.composes.includes('MuiSvgIcon'));
  assert.equal(graph.MuiBadge?.composes, undefined);
  assert.equal(graph.MuiButtonGroup?.composes, undefined);
  assert.equal(graph.MuiMenuItem.composes, undefined);
});

test('contentSource comes from typography tokens, inherited along extends', () => {
  assert.equal(graph.MuiButton.contentSource, 'typography.button');
  assert.equal(graph.MuiAlert.contentSource, 'typography.body2');
  assert.deepEqual([graph.MuiOutlinedInput.contentSource, graph.MuiOutlinedInput.contentSourceVia], ['typography.body1', 'MuiInputBase']);
});

test('every edge points at a known component', () => {
  const names = new Set(components);
  for (const [name, node] of Object.entries(graph)) {
    for (const target of [node.extends, node.contentSourceVia, ...(node.composes ?? [])].filter(Boolean)) {
      assert.ok(names.has(target), `${name} → ${target}`);
    }
  }
});
