import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { withCapture } from '../../src/lib/capture.mjs';
import { DATA_DIR } from '../../src/lib/data.mjs';
import { generatedUrl } from '../../src/lib/renders.mjs';

const data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'material/seams.json'), 'utf8'));

async function verify(rows, component, propsKey) {
  return withCapture(async (run) => {
    await run({ seamRows: { rows, fns: data.fns } });
    return (await run({ probeUrl: generatedUrl(component), component, propsKey, verifySeams: true })).results;
  });
}

test('the render check agrees with the shipped rows and catches a changed value', async () => {
  const tampered = data.rows.map((r) => (r.id === 'MuiButton|root|base||padding' ? { ...r, value: '7px 16px' } : r));
  const [clean, bad] = [await verify(data.rows, 'MuiButton', 'size=medium,variant=contained'), await verify(tampered, 'MuiButton', 'size=medium,variant=contained')];
  assert.deepEqual(clean.filter((r) => r.status === 'mismatch'), []);
  assert.ok(clean.some((r) => r.id === 'MuiButton|root|base||padding' && r.status === 'match'));
  const caught = bad.find((r) => r.id === 'MuiButton|root|base||padding');
  assert.equal(caught.status, 'mismatch');
  assert.equal(caught.got, '6px 16px 6px 16px');
});
