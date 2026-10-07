import { test } from 'node:test';
import assert from 'node:assert/strict';
import { claimsFor } from '../src/commands/annotate.run.mjs';

test('default claims: height, padding, gap, icon — no width; nothing pinned, so the harness spreads them', () => {
  const claims = claimsFor('.MuiButton-root', ['height', 'padding', 'gap', 'icon']);
  assert.deepEqual(claims.map((c) => `${c.aspect}${c.axis ? `-${c.axis}` : ''}`), ['size-block', 'padding-block', 'padding-inline', 'gap', 'icon']);
  assert.ok(claims.every((c) => !c.route && !c.pinned));
});

test('--routes pins a label by key, or by aspect for both padding axes', () => {
  const claims = claimsFor('.X-root', ['height', 'width', 'padding'], { 'padding-block': { gutter: 'right', shift: 20 }, width: { out: 1 } });
  assert.deepEqual(claims.find((c) => c.aspect === 'padding' && c.axis === 'block'), { on: '.X-root', aspect: 'padding', axis: 'block', route: { gutter: 'right', shift: 20 }, pinned: true });
  assert.deepEqual(claims.find((c) => c.axis === 'inline' && c.aspect === 'size').route, { out: 1 });
  assert.equal(claims.find((c) => c.axis === 'inline' && c.aspect === 'padding').pinned, undefined);
});
