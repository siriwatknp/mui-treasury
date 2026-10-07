import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const BIN = path.resolve(HERE, '../../bin/mui.mjs');
const THEME = path.resolve(HERE, '../fixtures/theme.ts');

function showcase(...args) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'showcase-'));
  const shot = path.join(dir, 'shot.png');
  const r = spawnSync(process.execPath, [BIN, '--json', 'showcase', ...args, '--shot', shot], { encoding: 'utf8' });
  const shotExists = fs.existsSync(shot);
  fs.rmSync(dir, { recursive: true, force: true });
  return { data: JSON.parse(r.stdout).data, shotExists, status: r.status };
}

const DESIGN = path.resolve(HERE, '../fixtures/DESIGN.md');

test('a theme checked against a DESIGN.md: the family matrix and the tokens read the theme', () => {
  const { data, shotExists, status } = showcase(DESIGN, '--theme', THEME);
  assert.ok(shotExists);
  // the fixture theme's purple primary is not the DESIGN.md's blue
  assert.equal(status, 1);
  const height = (label) => data.measurements.find((m) => m.label === label).measured;
  assert.equal(height('Button · contained · medium'), 44);
  assert.equal(height('Button · contained · small'), 30.8);
  const contained = data.colors.find((c) => c.label === 'Button · contained').checks;
  assert.equal(contained.find((k) => k.label === 'bg').got, '#7C3AED');
  assert.equal(data.states.length, 15);
  const tokens = showcase(DESIGN, '--tokens', '--theme', THEME).data;
  assert.equal(tokens.colors.find((c) => c.name === 'primary-main').got, '#7C3AED');
  assert.equal(tokens.radius[0].got, 12);
  assert.deepEqual(tokens.typography.filter((t) => t.ok === false).map((t) => t.variant), []);
});

test('a DESIGN.md compiles on the fly and gates colors and tokens against it', () => {
  const verify = showcase(DESIGN).data;
  const checks = verify.colors.flatMap((c) => c.checks);
  assert.ok(checks.some((k) => k.ok === true));
  assert.deepEqual(checks.filter((k) => k.ok === false), []);
  assert.equal(verify.colors.find((c) => c.label === 'Button · outlined').checks.find((k) => k.label === 'border').got, '#3E63DD80');
  const tokens = showcase(DESIGN, '--tokens').data;
  assert.equal(tokens.radius[0].ok, true);
  assert.equal(tokens.colors.find((c) => c.name === 'primary-main').ok, true);
});

test('a token that differs from the DESIGN.md exits 1', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'showcase-'));
  const design = path.join(dir, 'DESIGN.md');
  fs.writeFileSync(design, fs.readFileSync(DESIGN, 'utf8').replace('"1": 4px', '"1": 6px'));
  const result = spawnSync(process.execPath, [BIN, '--json', 'showcase', design, '--tokens', '--theme', THEME, '--shot', path.join(dir, 'shot.png')], { encoding: 'utf8' });
  fs.rmSync(dir, { recursive: true, force: true });
  assert.equal(result.status, 1);
  assert.equal(JSON.parse(result.stdout).data.radius[0].ok, false);
});
