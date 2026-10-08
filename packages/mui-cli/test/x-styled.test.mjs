import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { resolveToken } from '../src/lib/aliases.mjs';
import { DATA_DIR } from '../src/lib/data.mjs';
import { annotateSelector, generatedUrl, interactionSteps, renderFor, slotsOf } from '../src/lib/renders.mjs';
import { HARNESS_DIR } from '../src/lib/renderEngine.mjs';
import { loadGraph, loadSeams } from '../src/lib/seams.mjs';
import { importOf, xProductOfKey, xStyledProducts } from '../src/lib/xStyled.mjs';
import { installedVersion, readPins } from '../scripts/lib/pins.mjs';

const grid = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'x/data-grid/seams.json'), 'utf8'));

test('data grid rows are built from the pinned MUI X', () => {
  assert.equal(grid.$source.x, readPins().x);
  assert.equal(grid.$source.x, installedVersion('@mui/x-data-grid'));
  assert.deepEqual([...new Set(grid.rows.map((r) => r.component))], ['MuiDataGrid']);
});

test('grid rows keep nested selectors and mark values the grid writes from JS', () => {
  const cellPadding = grid.rows.find((r) => r.slot === 'root' && r.prop === 'padding' && r.selector.join(' ').includes('.MuiDataGrid-cell'));
  assert.equal(cellPadding.category, 'spacing');
  const cellHeight = grid.rows.find((r) => r.id === 'MuiDataGrid|root|base|& .MuiDataGrid-cell|height');
  assert.equal(cellHeight.value, 'var(--height)');
  assert.equal(cellHeight.category, 'dynamic');
});

test('@mui/system styled slots are recorded (toolbar, footer, panel content)', () => {
  const slots = new Set(grid.rows.map((r) => r.slot));
  for (const slot of ['toolbar', 'footerContainer', 'panelContent', 'menu']) {
    assert.ok(slots.has(slot), slot);
  }
});

test('X tokens resolve to a theme key only when the product has style rows', () => {
  assert.deepEqual(xStyledProducts(), ['data-grid']);
  assert.deepEqual(resolveToken('DataGrid'), { kind: 'x', product: 'data-grid', label: 'DataGrid', component: 'MuiDataGrid' });
  assert.equal(resolveToken('DataGridPremium').component, 'MuiDataGrid');
  assert.equal(resolveToken('grid').component, 'MuiDataGrid');
  assert.equal(resolveToken('BarChart').component, undefined);
  assert.equal(xProductOfKey('MuiDataGrid'), 'data-grid');
  assert.equal(xProductOfKey('MuiButton'), null);
});

test('seams and graph merge Material UI with every X layer', async () => {
  const { byComponent, rows } = loadSeams();
  assert.ok(byComponent.get('MuiButton').length);
  assert.ok(byComponent.get('MuiDataGrid').length);
  assert.equal(new Set(rows.map((r) => r.id)).size, rows.length);
  const { graph, components } = loadGraph();
  assert.ok(components.includes('MuiDataGrid') && components.includes('MuiButton'));
  assert.deepEqual(graph.MuiDataGrid.routes.cell, ['& .MuiDataGrid-cell']);
  const slots = await slotsOf('MuiDataGrid');
  for (const slot of ['root', 'cell', 'columnHeader', 'columnHeaderTitleContainer', 'toolbar', 'menuList', 'panelContent', 'footerContainer']) {
    assert.ok(slots.includes(slot), slot);
  }
});

test('the grid renders from its X package with fixed rows, in a sized frame', () => {
  assert.equal(importOf('MuiDataGrid'), "import { DataGrid as C } from '@mui/x-data-grid';");
  assert.equal(importOf('MuiButton'), "import C from '@mui/material/Button';");
  const url = generatedUrl('MuiDataGrid');
  const source = fs.readFileSync(path.join(HARNESS_DIR, url), 'utf8');
  assert.match(source, /import \{ DataGrid as C \} from '@mui\/x-data-grid';/);
  assert.match(source, /<div style=\{\{ width: \d+, height: \d+ \}\}>/);
  assert.doesNotMatch(source, /Math\.random|Date\.now|new Date/);
});

test('a slot that only shows in a state gets the props or clicks that open it', () => {
  assert.equal(renderFor('MuiDataGrid', { slot: 'toolbar' }).props.showToolbar, true);
  assert.equal(renderFor('MuiDataGrid', { slot: 'panelContent' }).props.panel, 'columns');
  assert.deepEqual(renderFor('MuiDataGrid', { slot: 'menuList' }).interaction, ['column-menu']);
  assert.deepEqual(renderFor('MuiDataGrid', { slot: 'cell' }).interaction, []);
  assert.deepEqual(interactionSteps('MuiDataGrid', ['column-menu']).map((s) => Object.keys(s)[0]), ['hover', 'settle', 'click', 'settle']);
});

test('a routed slot is found by its tag or its routed class (an element carries one mark: cell--textLeft wins over cell)', () => {
  assert.equal(annotateSelector('MuiDataGrid', 'cell'), ':is([data-mui-slot="MuiDataGrid|cell"], .MuiDataGrid-cell)');
  assert.equal(annotateSelector('MuiDataGrid', 'toolbar'), '[data-mui-slot="MuiDataGrid|toolbar"]');
  assert.equal(annotateSelector('MuiChip', 'deleteIcon'), ':is([data-mui-slot="MuiChip|deleteIcon"], .MuiChip-deleteIcon)');
  assert.equal(annotateSelector('MuiButton', 'root'), '[data-mui-slot="MuiButton|root"]');
  // a state-only slot routed to its base class (inputFocused → .MuiAutocomplete-input) must not draw on the unfocused base
  assert.equal(annotateSelector('MuiAutocomplete', 'inputFocused'), '[data-mui-slot="MuiAutocomplete|inputFocused"]');
  assert.equal(annotateSelector('MuiTabs', 'scrollButtonsHideMobile'), '[data-mui-slot="MuiTabs|scrollButtonsHideMobile"]');
});
