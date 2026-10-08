import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BIN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../bin/mui.mjs');
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'annotate-'));
const annotate = (...args) => {
  const r = spawnSync(process.execPath, [BIN, '--json', 'annotate', ...args, '--shot', path.join(dir, 'a.png')], { encoding: 'utf8' });
  return { status: r.status, data: JSON.parse(r.stdout).data, shot: fs.existsSync(path.join(dir, 'a.png')) };
};

test('annotate draws the measured size and padding of a component', () => {
  const { status, data, shot } = annotate('Button', '--props', 'size=medium,variant=contained');
  assert.equal(status, 0);
  assert.ok(shot);
  const labels = Object.fromEntries(data.items.map((i) => [`${i.kind === 'band' ? i.tone : 'size'}-${i.measures}`, i.label]));
  assert.deepEqual(labels, { 'size-y': '36.5px', 'padding-y': '6px', 'padding-x': '16px' }, 'no width by default');
  assert.deepEqual(data.items.map((i) => i.gutter).sort(), ['left', 'right', 'top'], 'three labels on three sides, none crossing the component');
  assert.deepEqual(data.collisions, { labelOverLabel: [], labelOverComponent: [] });
});

test('gap and icon appear when the component has them; a shared side ladders outward', () => {
  const { data } = annotate('Alert');
  assert.deepEqual(data.items.filter((i) => i.gutter === 'top').map((i) => [i.label, i.rung]), [['16px', 0], ['22px', 1]]);
  assert.ok(data.items.some((i) => i.tone === 'gap' && i.label === '12px'));
  assert.ok(data.items.some((i) => i.icon && i.label === '22px'));
});

test('--strict exits 1 when routes force labels onto each other', () => {
  const routes = path.join(dir, 'routes.json');
  fs.writeFileSync(routes, JSON.stringify({ 'padding-block': { gutter: 'right' }, height: { gutter: 'right' } }));
  const loose = annotate('Button', '--props', 'size=medium', '--routes', routes);
  assert.equal(loose.status, 0);
  assert.ok(loose.data.collisions.labelOverLabel.length > 0);
  assert.equal(annotate('Button', '--props', 'size=medium', '--routes', routes, '--strict').status, 1);
});

test('default placement fills every empty side before any side takes a second label', async () => {
  const { variants: matrix } = await import('../fixtures/variants.mjs');
  const problems = [];
  for (const [component, keys] of Object.entries(matrix)) {
    const props = keys[0];
    const { data } = annotate(component.replace(/^Mui/, ''), ...(props === 'base' ? [] : ['--props', props]));
    const count = { top: 0, right: 0, bottom: 0, left: 0 };
    data.items.forEach((i) => {
      count[i.gutter] += 1;
    });
    const doubled = Object.entries(count).filter(([, n]) => n > 1).map(([side]) => side);
    const empty = Object.entries(count).filter(([, n]) => n === 0).map(([side]) => side);
    const heightCanUse = data.items.some((i) => i.kind === 'bound' && !i.icon) ? ['left', 'right'] : [];
    const avoidable = doubled.length && empty.some((side) => data.items.some((i) => i.gutter && (i.kind !== 'bound' || i.icon || heightCanUse.includes(side))));
    if (avoidable) {
      problems.push(`${component} [${props}]: ${doubled.join(', ')} doubled while ${empty.join(', ')} empty`);
    }
    for (const side of doubled) {
      const rungs = data.items.filter((i) => i.gutter === side).map((i) => i.rung);
      if (new Set(rungs).size !== rungs.length) {
        problems.push(`${component} [${props}]: labels sharing the ${side} side are on the same rung ${JSON.stringify(rungs)}`);
      }
    }
    if (data.collisions.labelOverLabel.length) {
      problems.push(`${component} [${props}]: labels collide ${JSON.stringify(data.collisions.labelOverLabel)}`);
    }
  }
  assert.deepEqual(problems, []);
});

test('MUI X Data Grid: every slot a density theme sets draws on a real grid render, popups opened', () => {
  const expected = {
    cell: ['padding', 'height'],
    columnHeader: ['padding', 'height'],
    columnHeaderTitleContainer: ['gap'],
    toolbar: ['padding', 'gap'],
    menuList: ['padding'],
    panelContent: ['height'],
    footerContainer: ['height'],
  };
  for (const [slot, aspects] of Object.entries(expected)) {
    const { status, data, shot } = annotate('DataGrid', '--slot', slot, '--aspects', aspects.join(','));
    assert.equal(status, 0, slot);
    assert.ok(shot, slot);
    const drawn = new Set(data.items.map((i) => (i.kind === 'band' ? i.tone : 'height')));
    assert.deepEqual(aspects.filter((a) => !drawn.has(a)), [], `${slot}: something not drawn`);
    assert.deepEqual(data.collisions, { labelOverLabel: [], labelOverComponent: [] }, slot);
  }
});

test('a popup from an earlier render on the same page is not the next render\'s match', () => {
  const height = () => annotate('DataGrid', '--slot', 'menuList', '--aspects', 'height').data.items.map((i) => i.label);
  const first = height();
  assert.equal(first.length, 1);
  assert.deepEqual(height(), first);
});

test('MUI X Data Grid: the theme reaches the grid (styleOverrides.cell)', () => {
  const padding = (...args) => annotate('DataGrid', '--slot', 'cell', '--aspects', 'padding', ...args).data.items.find((i) => i.measures === 'x').label;
  assert.equal(padding(), '10px');
  assert.equal(padding('--theme', path.resolve(BIN, '../../test/fixtures/grid.theme.ts')), '24px');
});
