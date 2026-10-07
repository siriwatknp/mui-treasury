import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { builtWith } from '../src/lib/data.mjs';

const BIN = path.resolve(fileURLToPath(import.meta.url), '../../bin/mui.mjs');

test('--version reports the CLI version and data build', () => {
  const out = execFileSync(process.execPath, [BIN, '--version'], { encoding: 'utf8' });
  assert.equal(out.trim(), `9.0.0-dev.0 (data built with ${JSON.stringify(builtWith())})`);
});
