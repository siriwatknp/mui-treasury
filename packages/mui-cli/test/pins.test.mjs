import { test } from 'node:test';
import assert from 'node:assert/strict';
import { comparePins } from '../scripts/lib/pins.mjs';

const pins = { material: '9.4.0', x: '9.14.0' };

test('all pins aligned → no failures', () => {
  const { failures } = comparePins(pins, {
    material: { vendorTag: 'v9.4.0', installed: '9.4.0' },
    x: { vendorTag: 'v9.14.0', installed: '9.14.0' },
  });
  assert.deepEqual(failures, []);
});

test('missing or stale vendor fails', () => {
  const { failures } = comparePins(pins, {
    material: { vendorTag: 'v9.3.0', installed: '9.4.0' },
    x: { vendorTag: null, installed: null },
  });
  assert.equal(failures.length, 2);
  assert.match(failures[0], /vendor is v9\.3\.0, pin is v9\.4\.0/);
  assert.match(failures[1], /vendor is missing/);
});

test('installed version must equal the pin', () => {
  const { failures } = comparePins(pins, {
    material: { vendorTag: 'v9.4.0', installed: '9.3.1' },
    x: { vendorTag: 'v9.14.0', installed: '9.14.0' },
  });
  assert.deepEqual(failures, ['material: installed @mui/material@9.3.1, pin is 9.4.0']);
});

test('material is required, x is optional', () => {
  const { failures, notes } = comparePins(pins, {
    material: { vendorTag: 'v9.4.0', installed: null },
    x: { vendorTag: 'v9.14.0', installed: null },
  });
  assert.deepEqual(failures, ['material: installed @mui/material@missing, pin is 9.4.0']);
  assert.deepEqual(notes, ['x: @mui/x-data-grid not installed — skipped']);
});

test('unknown library fails', () => {
  const { failures } = comparePins({ joy: '5.0.0' }, {});
  assert.deepEqual(failures, ['versions.json: unknown library "joy"']);
});
