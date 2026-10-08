import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { xProducts, xDemoSource, xDemosFor, xAllDemos } from '../src/lib/demosX.mjs';
import { resolveToken } from '../src/lib/aliases.mjs';
import { builtWith } from '../src/lib/data.mjs';
import { readPins } from '../scripts/lib/pins.mjs';

const BIN = path.resolve(fileURLToPath(import.meta.url), '../../bin/mui.mjs');
const run = (...args) => execFileSync(process.execPath, [BIN, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
const fails = (args, pattern) => assert.throws(() => run(...args), (err) => pattern.test(String(err.stderr)));

test('X data comes from the pinned mui-x tag', () => {
  assert.deepEqual(Object.keys(xProducts()), ['data-grid', 'charts', 'date-pickers', 'tree-view']);
  assert.equal(xDemoSource(), `v${readPins().x}`);
  assert.equal(builtWith().x, readPins().x);
});

test('every synced X demo carries name/plan/section/url/source/analysis', () => {
  const PLANS = new Set(['community', 'pro', 'premium']);
  for (const [product, { features }] of Object.entries(xProducts())) {
    for (const { feature } of features) {
      const page = xDemosFor(product, feature);
      assert.ok(page.demos.length, `${product}/${feature}: no demos`);
      for (const d of page.demos) {
        assert.ok(d.name && d.section && PLANS.has(d.plan), `${product}/${feature}/${d.name}: bad metadata`);
        assert.ok(d.url.startsWith('https://mui.com/x/'), `${product}/${feature}/${d.name}: bad url`);
        assert.ok(d.source.includes('export default') && d.analysis.source.defaultName, `${product}/${feature}/${d.name}: not a runnable module`);
      }
    }
  }
});

test('data files are keyed by their path from the feature dir, so sibling-folder imports resolve', () => {
  const page = xDemosFor('tree-view', 'rich-tree-view/editing');
  assert.equal(page.assets['../../datasets/products'].file, 'products.ts');
  assert.ok(xDemosFor('charts', 'lines').assets['../dataset/worldElectricityProduction']);
});

test('plan is per demo, from imports, never from label strings', () => {
  assert.ok(xDemosFor('tree-view', 'simple-tree-view/expansion').demos.every((d) => d.plan === 'community'));
  const filtering = xDemosFor('data-grid', 'filtering');
  assert.equal(filtering.demos.find((d) => d.name === 'QuickFilteringGrid').plan, 'community');
  assert.equal(filtering.demos.find((d) => d.name === 'HeaderFilteringDataGridPro').plan, 'pro');
  assert.equal(filtering.plan, 'community,pro');
});

test('sub-page titles become section prefixes; nested features stay under the product', () => {
  assert.match(xDemosFor('data-grid', 'filtering').demos.find((d) => d.name === 'HeaderFilteringDataGridPro').section, /^Header filters/);
  const all = xAllDemos('tree-view');
  assert.ok(all.demos.every((d) => d.feature));
  assert.ok(all.demos.some((d) => d.feature === 'rich-tree-view/items'));
});

test('resolveToken: X names, aliases and product slugs', () => {
  assert.deepEqual(resolveToken('DataGrid'), { kind: 'x', product: 'data-grid', label: 'DataGrid', component: 'MuiDataGrid' });
  assert.deepEqual(resolveToken('DatePicker'), { kind: 'x', product: 'date-pickers', label: 'DatePicker' });
  assert.equal(resolveToken('DataGridPremium').product, 'data-grid');
  assert.equal(resolveToken('DatePicker').product, 'date-pickers');
  assert.equal(resolveToken('grid').product, 'data-grid');
  assert.equal(resolveToken('tree-view').product, 'tree-view');
  assert.equal(resolveToken('scheduler'), null);
});

test('mui component <X> prints the feature map for products without style rows; style commands point to demos', () => {
  const map = run('component', 'DatePicker');
  assert.ok(map.includes('MUI X date-pickers') && map.includes('PLAN'));
  assert.ok(run('date-pickers').includes('MUI X date-pickers'));
  fails(['annotate', 'DatePicker'], /MUI X — style rows cover Material UI and the Data Grid only.*mui demos date-pickers/);
  fails(['verify', 'DataGrid'], /MUI X — verify covers Material UI only.*mui annotate DataGrid.*mui demos data-grid/);
  fails(['diff', 'DataGrid', '--theme', path.resolve(BIN, '../../test/fixtures/code-standard.theme.ts')], /MUI X — diff covers Material UI only/);
});

test('mui component DataGrid prints its style rows, nested slots included', () => {
  const out = run('component', 'DataGrid', '--slot', 'cell');
  assert.ok(out.startsWith('MuiDataGrid — ') && out.includes('mui demos data-grid'));
  assert.ok(out.includes('& .${gridClasses.cell}'));
  assert.ok(run('data-grid').startsWith('MuiDataGrid — '));
});

test('mui demos <X> [feature] [demo]', () => {
  const feat = run('demos', 'data-grid', 'filtering');
  assert.ok(feat.includes('QuickFilteringGrid') && feat.includes('SECTION'));
  const tsx = run('demos', 'data-grid', 'filtering', 'QuickFilteringGrid');
  assert.ok(tsx.includes("from '@mui/x-data-grid'") && tsx.includes('export default function QuickFilteringGrid'));
  const js = run('demos', 'tree-view', 'rich-tree-view/editing', 'Validation', '--js');
  assert.ok(!/:\s*React\./.test(js) && js.includes('export default function Validation'));
  assert.ok(run('demos', 'Button', 'BasicButtons').includes('export default function BasicButtons'));
  fails(['demos', 'data-grid', 'nofeature'], /no feature 'nofeature' in DataGrid/);
  fails(['demos', 'data-grid', 'filtering', 'Nope'], /no demo 'Nope'/);
  fails(['demos', 'Button', 'BasicButtons', 'Extra'], /Button is a component/);
});

test('--json envelopes: x-features, x-demos, x-demo', () => {
  assert.equal(JSON.parse(run('--json', 'component', 'DatePicker')).type, 'x-features');
  assert.equal(JSON.parse(run('--json', 'component', 'DataGrid')).type, 'component');
  const feat = JSON.parse(run('--json', 'demos', 'data-grid', 'filtering'));
  assert.equal(feat.type, 'x-demos');
  assert.ok(feat.data.demos.every((d) => d.plan && !('source' in d) && !('analysis' in d)));
  assert.ok(JSON.parse(run('--json', 'demos', 'data-grid')).data.demos.every((d) => d.feature));
  const demo = JSON.parse(run('--json', 'demos', 'data-grid', 'filtering', 'QuickFilteringGrid'));
  assert.equal(demo.type, 'x-demo');
  assert.equal(demo.data.plan, 'community');
});

test('compose: X picks dedupe imports, list packages, flatten sibling-folder data files', () => {
  const out = run('compose', 'data-grid/filtering:QuickFilteringGrid,ServerFilterGrid');
  assert.ok(out.includes('function QuickFilteringGrid') && out.includes('function ServerFilterGrid'));
  assert.equal((out.match(/^import .* from '@mui\/x-data-grid';$/gm) ?? []).length, 1);
  const res = JSON.parse(run('--json', 'compose', 'tree-view/rich-tree-view/editing:LabelEditingAllItems')).data;
  assert.deepEqual(res.needs, ['@mui/x-tree-view']);
  assert.deepEqual(res.assets.map((a) => a.file), ['products.ts']);
  assert.match(res.source, /from '\.\/products';/);
  assert.deepEqual(res.unresolved, []);
});
