import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { resolveToken } from '../src/lib/aliases.mjs';
import { DATA_DIR } from '../src/lib/data.mjs';
import { annotateSelector, generatedUrl, interactionSteps, renderFor, slotsOf } from '../src/lib/renders.mjs';
import { HARNESS_DIR } from '../src/lib/renderEngine.mjs';
import { loadGraph, loadSeams } from '../src/lib/seams.mjs';
import { importOf, xProductOfKey, xStyledProducts } from '../src/lib/xStyled.mjs';
import { installedVersion, readPins } from '../scripts/lib/pins.mjs';

const grid = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'x/data-grid/seams.json'), 'utf8'));

test('chart styles branching on props are extracted per value, one prop at a time', () => {
  const charts = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'x/charts/seams.json'), 'utf8'));
  const find = (component, matcher, prop) => charts.rows.find((r) => r.component === component && JSON.stringify(r.matcher) === JSON.stringify(matcher) && r.prop === prop && !r.selector.length);
  // compared in source: `ownerState.direction === 'vertical'`
  assert.equal(find('MuiChartsLegend', { direction: 'vertical' }, 'flexDirection').value, 'column');
  // listed values: a flag and an object
  assert.equal(find('MuiChartsWrapper', { hideLegend: true }, 'gridTemplateRows').value, '1fr');
  assert.equal(find('MuiChartsWrapper', { legendPosition: { vertical: 'bottom', horizontal: 'center' } }, 'alignItems').value, 'flex-end');
  // measured numbers and derived state stay out
  assert.ok(!charts.rows.some((r) => r.matcher && ('width' in r.matcher || 'thickness' in r.matcher || 'isRtl' in r.matcher)));
  // a value that changes nothing adds no row
  assert.ok(!charts.rows.some((r) => r.component === 'MuiChartsLegend' && r.matcher?.direction === 'horizontal' && r.prop === 'flexDirection'));
});

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
  assert.deepEqual(xStyledProducts(), ['data-grid', 'charts', 'date-pickers', 'tree-view']);
  assert.equal(resolveToken('BarChart').component, undefined);
  assert.equal(resolveToken('Gauge').component, 'MuiGauge');
  assert.equal(resolveToken('ChartsTooltip').component, 'MuiChartsTooltip');
  assert.equal(resolveToken('DateCalendar').component, 'MuiDateCalendar');
  // DatePicker styles nothing itself: its parts are the keys
  assert.equal(resolveToken('DatePicker').component, undefined);
  assert.equal(resolveToken('PickersLayout').component, 'MuiPickersLayout');
  assert.equal(resolveToken('TreeItem').component, 'MuiTreeItem');
  assert.equal(resolveToken('RichTreeView').component, 'MuiRichTreeView');
  // a many-part product name stays the product (its feature map); a one-key product resolves to its key
  assert.equal(resolveToken('tree').component, undefined);
  assert.deepEqual(resolveToken('DataGrid'), { kind: 'x', product: 'data-grid', label: 'DataGrid', component: 'MuiDataGrid' });
  assert.equal(resolveToken('DataGridPremium').component, 'MuiDataGrid');
  assert.equal(resolveToken('grid').component, 'MuiDataGrid');
  assert.equal(xProductOfKey('MuiDayCalendar'), 'date-pickers');
  assert.equal(importOf('MuiDayCalendar'), "import { DateCalendar as C } from '@mui/x-date-pickers';");
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
  assert.equal(renderFor('MuiDataGrid', { slot: 'panelContent' }).props.scenario, 'columns-panel');
  assert.equal(renderFor('MuiDataGrid', { slot: 'cellCheckbox' }).props.scenario, 'checkbox');
  assert.equal(renderFor('MuiDataGrid', { slot: 'root--densityCompact' }).props.density, 'compact');
  assert.deepEqual(renderFor('MuiDataGrid', { slot: 'menuIcon' }).interaction, ['header-hover']);
  assert.equal(renderFor('MuiDataGrid', { slot: 'cell--pinnedLeft' }).props.scenario, 'pinned');
  assert.throws(() => renderFor('MuiDataGrid', { slot: 'rowDragOverlay' }), /DataGrid rowDragOverlay can't be rendered for a picture: exists only while/);
  assert.deepEqual(renderFor('MuiDataGrid', { slot: 'menuList' }).interaction, ['column-menu']);
  assert.deepEqual(renderFor('MuiDataGrid', { slot: 'cell' }).interaction, []);
  assert.deepEqual(interactionSteps('MuiDataGrid', ['column-menu']).map((s) => Object.keys(s)[0]), ['hover', 'settle', 'click', 'settle']);
});

test('a routed slot is found by its tag or its routed class (an element carries one mark: cell--textLeft wins over cell)', () => {
  assert.equal(annotateSelector('MuiDataGrid', 'cell'), ':is([data-mui-slot~="MuiDataGrid|cell"], .MuiDataGrid-cell)');
  assert.equal(annotateSelector('MuiDataGrid', 'toolbar'), '[data-mui-slot~="MuiDataGrid|toolbar"]');
  assert.equal(annotateSelector('MuiChip', 'deleteIcon'), ':is([data-mui-slot~="MuiChip|deleteIcon"], .MuiChip-deleteIcon)');
  assert.equal(annotateSelector('MuiButton', 'root'), '[data-mui-slot~="MuiButton|root"]');
  // a state-only slot routed to its base class (inputFocused → .MuiAutocomplete-input) must not draw on the unfocused base
  assert.equal(annotateSelector('MuiAutocomplete', 'inputFocused'), '[data-mui-slot~="MuiAutocomplete|inputFocused"]');
  assert.equal(annotateSelector('MuiTabs', 'scrollButtonsHideMobile'), '[data-mui-slot~="MuiTabs|scrollButtonsHideMobile"]');
});

test('every grid scenario a slot names exists in the fixture', async () => {
  const { DATA_GRID, DATA_GRID_PREMIUM } = await import('../src/lib/xFixtures.mjs');
  const { components } = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'x/data-grid/renders.json'), 'utf8'));
  const { slotProps, slotVariant = {} } = components.MuiDataGrid;
  for (const [slot, { scenario }] of Object.entries(slotProps).filter(([, p]) => p.scenario)) {
    const fixture = slotVariant[slot] === 'premium' ? DATA_GRID_PREMIUM : DATA_GRID;
    assert.match(fixture.imports, new RegExp(`\\n  '?${scenario}'?: \\{`), `${slot} → ${scenario}`);
  }
});

test('Pro/Premium slots render from their own module, and say which package a project is missing', () => {
  const premium = renderFor('MuiDataGrid', { slot: 'pinnedRows' });
  assert.match(premium.url, /MuiDataGrid@premium\.jsx$/);
  assert.match(fs.readFileSync(path.join(HARNESS_DIR, premium.url), 'utf8'), /from '@mui\/x-data-grid-premium'/);
  assert.doesNotMatch(fs.readFileSync(path.join(HARNESS_DIR, renderFor('MuiDataGrid', { slot: 'cell' }).url), 'utf8'), /x-data-grid-premium/);
  assert.equal(importOf('MuiDateRangeCalendar'), "import { DateRangeCalendar as C } from '@mui/x-date-pickers-pro';");
  const host = process.env.MUI_CLI_HOST_ROOT;
  process.env.MUI_CLI_HOST_ROOT = fs.mkdtempSync(path.join(os.tmpdir(), 'no-x-'));
  try {
    assert.throws(() => renderFor('MuiDataGrid', { slot: 'pinnedRows' }), /DataGrid pinnedRows renders through @mui\/x-data-grid, @mui\/x-data-grid-premium, which this project doesn't have — npm i -D/);
    assert.throws(() => renderFor('MuiDateRangeCalendar', {}), /renders through @mui\/x-date-pickers-pro/);
  } finally {
    if (host === undefined) {
      delete process.env.MUI_CLI_HOST_ROOT;
    } else {
      process.env.MUI_CLI_HOST_ROOT = host;
    }
  }
});
