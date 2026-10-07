import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { loadRenders, propsKeyOf, reachOf, RENDER_DEMOS_DIR, stateProps, statesOf, stepsFor } from '../src/lib/renders.mjs';
import { loadSeams } from '../src/lib/seams.mjs';

test('states come from row selectors and map to a way of reaching them', () => {
  const row = { selector: ['&.Mui-selected', '&:hover', '@media (hover: none)'] };
  assert.deepEqual(statesOf(row), ['selected', ':hover']);
  assert.equal(reachOf('selected'), 'prop');
  assert.equal(reachOf(':hover'), 'hover');
  assert.equal(reachOf(':active'), 'press');
  assert.equal(reachOf('focusVisible'), 'keyboard');
  assert.equal(reachOf('readOnly'), null);
  assert.deepEqual(stateProps(['disabled', ':hover']), { disabled: true });
  assert.equal(propsKeyOf({}), 'base');
  assert.equal(propsKeyOf({ size: 'small', disabled: true }), 'size=small,disabled=true');
});

test('steps reach states the way a user would', () => {
  const steps = stepsFor({ component: 'MuiChip', states: [':active', 'focusVisible'], target: 'deleteIcon', interaction: ['popup'] });
  assert.deepEqual(steps.map((s) => Object.keys(s)[0]), ['emulate', 'reset', 'click', 'tab', 'hover', 'hover', 'down']);
  assert.equal(steps.at(-2).hover, '.MuiChip-deleteIcon');
});

test('the render record covers every row and points at renders and demos that exist', async () => {
  const record = loadRenders();
  const { rows } = await loadSeams();
  const ids = new Set(rows.map((r) => r.id));
  for (const [id, entry] of Object.entries(record.rows)) {
    assert.ok(ids.has(id), `${id} not in seams`);
    if (typeof entry === 'string') {
      assert.ok(record.renders[entry], `${id} → missing render ${entry}`);
    } else {
      assert.ok(entry.skip, `${id} has neither a render nor a reason`);
    }
  }
  for (const r of Object.values(record.renders).filter((x) => x.kind === 'demo')) {
    assert.ok(fs.existsSync(path.join(RENDER_DEMOS_DIR, `${r.demo}.tsx`)), `demo ${r.demo} not shipped`);
  }
  const confirmed = Object.values(record.rows).filter((e) => typeof e === 'string').length;
  const verified = rows.filter((r) => r.verified === true).length;
  assert.equal(verified, confirmed, 'seams.json verified flags follow the record');
});
