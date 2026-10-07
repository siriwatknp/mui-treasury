import { test } from 'node:test';
import assert from 'node:assert/strict';
import { casesOf, familyOf } from '../src/lib/gate.mjs';

test('a family is the components sharing a small base', async () => {
  assert.deepEqual(await familyOf('MuiSwitch'), ['MuiCheckbox', 'MuiRadio']);
  assert.deepEqual(await familyOf('MuiCheckbox'), ['MuiRadio', 'MuiSwitch']);
});

test('a base shared by many components makes no family', async () => {
  const family = await familyOf('MuiButton');
  assert.ok(!family.includes('MuiTab') && !family.includes('MuiMenuItem'), 'ButtonBase is shared too widely');
});

test('cases: each variant at rest and in the states that move it, plus docs compositions, none twice', () => {
  const cases = casesOf('MuiSwitch');
  const labels = cases.map((c) => c.label);
  assert.equal(new Set(labels).size, labels.length);
  assert.ok(labels.includes('base') && labels.includes('base +checked') && labels.includes('size=small +checked'));
  assert.ok(!labels.some((l) => /disabled/.test(l)), 'disabled turns the rules off');
  assert.ok(cases.some((c) => c.kind === 'composition' && c.label === 'in switches/SwitchLabels'));
});

test('a component that only renders inside docs demos gets its recorded demos', () => {
  const cases = casesOf('MuiAccordion');
  assert.ok(cases.length && cases.every((c) => c.kind !== 'variant'));
});

test('hand-picked content cases are gate cases, typed ones say what to type', () => {
  const content = casesOf('MuiOutlinedInput').filter((c) => c.kind === 'content');
  assert.deepEqual(content.map((c) => c.label).sort(), ['content LabelGap', 'content LongLabel', 'content LongValueAdornments', 'content MultilineMaxRows', 'content MultilineTyped', 'content Password']);
  assert.ok(casesOf('MuiChip').some((c) => c.kind === 'content'));
  // a shared case joins only the components it names
  assert.ok(casesOf('MuiInputLabel').some((c) => c.label === 'content LabelGap'));
  assert.ok(!casesOf('MuiChip').some((c) => c.label === 'content LabelGap'));
});

test("a component's own docs page demos are gate cases, after its compositions", () => {
  const cases = casesOf('MuiButton');
  const own = cases.filter((c) => c.kind === 'own demo');
  assert.ok(own.length > 0 && own.every((c) => c.label.startsWith('demo buttons/')), own.map((c) => c.label).join());
  const compositions = cases.filter((c) => c.kind === 'composition').map((c) => c.label.replace(/^in /, ''));
  assert.ok(own.every((c) => !compositions.includes(c.label.replace(/^demo /, ''))));
  // the whole-theme gate leaves them out
  assert.ok(!casesOf('MuiButton', { own: false }).some((c) => c.kind === 'own demo'));
});
