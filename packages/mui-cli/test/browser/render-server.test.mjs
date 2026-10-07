import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BIN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../bin/mui.mjs');
const mui = (...args) => {
  const t = performance.now();
  const { MUI_CLI_NO_SERVER: _off, ...env } = process.env;
  const r = spawnSync(process.execPath, [BIN, ...args], { encoding: 'utf8', timeout: 120000, env });
  return { ...r, ms: performance.now() - t, out: r.stdout + r.stderr };
};

test('the first render starts a warm server; later renders reuse it; stop ends it', () => {
  mui('server', 'stop');
  assert.match(mui('server').out, /no render server running/);
  const cold = mui('verify', 'Button', '--expect', 'root.box.height=36.5px');
  assert.match(cold.out, /render server started/);
  assert.match(cold.out, /✓ root\.box\.height = 36\.5px/);
  const warm = mui('verify', 'Button', '--expect', 'root.box.height=36.5px');
  assert.match(warm.out, /render server warm/);
  assert.ok(warm.ms < 1000, `warm call took ${Math.round(warm.ms)}ms`);
  assert.match(mui('server').out, /render server running/);
  assert.match(mui('server', 'stop').out, /render server stopped/);
  assert.match(mui('server').out, /no render server running/);
});

test('MUI_CLI_NO_SERVER renders in-process with the same result', () => {
  const r = spawnSync(process.execPath, [BIN, 'verify', 'Button', '--expect', 'root.box.height=36.5px'], { encoding: 'utf8', env: { ...process.env, MUI_CLI_NO_SERVER: '1' }, timeout: 120000 });
  assert.match(r.stdout + r.stderr, /harness up/);
  assert.match(r.stdout, /✓ root\.box\.height = 36\.5px/);
});
