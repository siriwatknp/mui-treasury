import { test } from 'node:test';
import assert from 'node:assert/strict';
import { compareVersions } from '../src/lib/versionCheck.mjs';

const levels = (built, installed) => Object.fromEntries(compareVersions(built, installed).map((r) => [r.lib, r.level]));

test('same minor (patch differs) is ok', () => {
  assert.deepEqual(levels({ material: '9.4.0' }, { material: '9.4.2', x: null }), { material: 'ok', x: 'ok' });
});

test('minor mismatch warns, in either direction', () => {
  assert.equal(levels({ material: '9.4.0' }, { material: '9.2.1' }).material, 'warn');
  assert.equal(levels({ material: '9.4.0' }, { material: '9.6.0' }).material, 'warn');
});

test('major mismatch is an error naming the right CLI major', () => {
  const [material] = compareVersions({ material: '9.4.0' }, { material: '10.0.0' });
  assert.equal(material.level, 'error');
  assert.match(material.message, /@siriwatknp\/mui-cli@10/);
});

test('missing Material UI is an error; missing MUI X is fine', () => {
  assert.deepEqual(levels({ material: '9.4.0' }, { material: null, x: null }), { material: 'error', x: 'ok' });
});

test('MUI X installed without X data is a note', () => {
  assert.equal(levels({ material: '9.4.0' }, { material: '9.4.0', x: '9.14.0' }).x, 'note');
});

test('MUI X compared on its own version line', () => {
  assert.equal(levels({ material: '9.4.0', x: '9.14.0' }, { material: '9.4.0', x: '9.12.3' }).x, 'warn');
});
