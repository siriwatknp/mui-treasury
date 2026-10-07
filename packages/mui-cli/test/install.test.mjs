import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const BIN = path.resolve(HERE, '../bin/mui.mjs');
const SKILL_DIR = path.resolve(HERE, '../skill');
const run = (cwd, ...args) => execFileSync(process.execPath, [BIN, ...args], { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

test('install --skill copies the repo skill verbatim (no placeholders to fill)', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'install-'));
  try {
    const out = run(dir, 'install', '--skill');
    assert.match(out, /Skill installed to `\.claude\/skills\/mui-cli`/);
    const target = path.join(dir, '.claude/skills/mui-cli');
    for (const f of ['SKILL.md', 'references/demos.md']) {
      const text = fs.readFileSync(path.join(target, f), 'utf8');
      assert.equal(text, fs.readFileSync(path.join(SKILL_DIR, f), 'utf8'));
      assert.doesNotMatch(text, /\{\{\w+\}\}/, `${f} has a placeholder`);
    }
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('install refuses without --skill and for unknown agents', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'install-'));
  try {
    assert.throws(() => run(dir, 'install'), (err) => /did you mean `mui install --skill`/.test(String(err.stderr)));
    assert.throws(() => run(dir, 'install', '--skill', 'nope'), (err) => /unsupported agent 'nope'/.test(String(err.stderr)));
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('every command the skill mentions exists in this CLI', () => {
  const help = run(HERE, '--help');
  const registered = new Set([...help.matchAll(/^\s{2}(\w[\w-]*)/gm)].map((m) => m[1]));
  const texts = [path.join(SKILL_DIR, 'SKILL.md'), ...fs.readdirSync(path.join(SKILL_DIR, 'references')).map((f) => path.join(SKILL_DIR, 'references', f))];
  const mentioned = new Set(texts.flatMap((f) => [...fs.readFileSync(f, 'utf8').matchAll(/\bmui ([a-z][\w-]*)/g)].map((m) => m[1])));
  assert.deepEqual([...mentioned].filter((c) => !registered.has(c)), []);
});
