import { test } from 'node:test';
import assert from 'node:assert/strict';
import { withCapture } from '../../src/lib/capture.mjs';
import { generatedUrl } from '../../src/lib/renders.mjs';

const button = { probeUrl: generatedUrl('MuiButton'), component: 'MuiButton', slots: ['root'] };

test('vanilla Button renders and measures through the harness', async () => {
  const rects = await withCapture(async (run) => ({
    small: (await run({ ...button, propsKey: 'size=small', rectSlot: 'root' })).rect,
    medium: (await run({ ...button, propsKey: 'size=medium', rectSlot: 'root' })).rect,
    large: (await run({ ...button, propsKey: 'size=large', rectSlot: 'root' })).rect,
  }));
  assert.equal(rects.small.height, 30.75);
  assert.equal(rects.medium.height, 36.5);
  assert.equal(rects.large.height, 42.25);
});

test('reads computed styles of a slot', async () => {
  const { seams } = await withCapture((run) =>
    run({
      ...button,
      propsKey: 'size=medium',
      seams: [{ id: 'pad', slot: 'root', prop: 'paddingBlock' }, { id: 'lh', slot: 'root', prop: 'lineHeight' }],
    }),
  );
  assert.deepEqual(seams, { pad: '6px', lh: '24.5px' });
});
