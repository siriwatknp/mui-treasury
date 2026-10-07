import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { resolveTargets } from '../src/lib/targets.mjs';

const project = (files) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-targets-'));
  for (const [name, text] of Object.entries(files)) {
    fs.writeFileSync(path.join(dir, name), typeof text === 'string' ? text : JSON.stringify(text));
  }
  return dir;
};

test('targets: --targets wins, then the browserslist config', async () => {
  const dir = project({ 'package.json': { browserslist: ['safari >= 15'], devDependencies: { electron: '^30.0.0' } } });
  assert.equal((await resolveTargets(dir, { targets: 'chrome 100' })).browsers.join(), 'chrome 100');
  const config = await resolveTargets(dir);
  assert.equal(config.source, 'browserslist config');
  assert.ok(config.browsers.includes('safari 15') && !config.assumed);
});

test('targets: an Electron app ships to its Chromium', async () => {
  const r = await resolveTargets(project({ 'package.json': { devDependencies: { electron: '^30.1.2' } } }));
  assert.deepEqual(r.browsers, ['chrome 124']);
});

test("targets: Next.js and Vite defaults; an explicit Vite build.target, naming what it can't map", async () => {
  assert.ok((await resolveTargets(project({ 'package.json': { dependencies: { next: '15.0.0' } } }))).browsers.includes('safari 16.4'));
  assert.ok((await resolveTargets(project({ 'package.json': { devDependencies: { vite: '^8.0.0' } } }))).browsers.includes('ios_saf 16.4'));
  const custom = await resolveTargets(project({ 'package.json': { devDependencies: { vite: '^8.0.0' } }, 'vite.config.ts': "export default { build: { target: ['chrome100', 'es2020'] } };\n" }));
  assert.deepEqual(custom.browsers, ['chrome 100']);
  assert.match(custom.note, /es2020/);
});

test('targets: nothing found → browserslist defaults, reported as assumed', async () => {
  const r = await resolveTargets(project({ 'package.json': {} }));
  assert.equal(r.assumed, true);
  assert.match(r.note, /--targets/);
});
