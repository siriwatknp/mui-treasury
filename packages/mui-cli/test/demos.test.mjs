import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { demosFor, demoIn, demoPagesIndex, demoSource } from '../src/lib/demos.mjs';
import { missingPackages } from '../src/lib/packages.mjs';
import { readPins, tagFor } from '../scripts/lib/pins.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const demoPages = demoPagesIndex();
const BIN = path.resolve(HERE, '../bin/mui.mjs');
const run = (...args) => execFileSync(process.execPath, [BIN, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

test('index maps the core surface; stamped with the pinned release tag', () => {
  assert.equal(demoPages.MuiSwitch, 'switches');
  assert.equal(demoPages.MuiTextField, 'text-fields');
  assert.equal(demoPages.MuiIconButton, 'buttons');
  assert.equal(demoSource(), tagFor(readPins().material));
});

test('every synced demo carries name/section/url/source', async () => {
  for (const slug of new Set(Object.values(demoPages))) {
    const page = await demosFor(Object.keys(demoPages).find((c) => demoPages[c] === slug));
    assert.ok(page.demos.length, `${slug}: no demos`);
    for (const d of page.demos) {
      assert.ok(d.name && d.section && d.url.startsWith('https://mui.com/material-ui/'), `${slug}/${d.name}: bad metadata`);
      assert.ok(d.source.includes('export default'), `${slug}/${d.name}: not a runnable module`);
    }
  }
});

test('sections carry h3 hierarchy; descriptions come from the intro paragraph', async () => {
  const page = await demosFor('MuiButton');
  const text = page.demos.find((d) => d.name === 'TextButtons');
  assert.equal(text.section, 'Basic button › Text button');
  assert.match(text.description, /^Text buttons are typically used/);
  assert.match(page.demos.find((d) => d.name === 'ButtonSizes').description, /size prop/);
});

test('every demo ships the official .js twin with its own analysis', async () => {
  const demo = (await demosFor('MuiSwitch')).demos.find((d) => d.name === 'ControlledSwitches');
  assert.ok(demo.source.includes('React.ChangeEvent'));
  const js = demoIn(demo, true);
  assert.equal(js.lang, 'js');
  assert.ok(!js.source.includes('React.ChangeEvent') && js.source.includes('<Switch'));
  assert.ok(js.analysis.sites.Switch.length > 0);
  for (const slug of new Set(Object.values(demoPages))) {
    const page = await demosFor(Object.keys(demoPages).find((c) => demoPages[c] === slug));
    assert.deepEqual(page.demos.filter((d) => d.lang === 'tsx' && !(d.js && d.analysis.js)).map((d) => d.name), [], slug);
  }
});

test('CLI: lists, prints source, --js transpiles, unknown demo names candidates', () => {
  const list = run('demos', 'Switch');
  assert.ok(list.includes('BasicSwitches') && list.includes('react-switch'));
  assert.ok(run('demos', 'Switch', 'ControlledSwitches').includes('React.ChangeEvent'));
  const js = run('demos', 'Switch', 'ControlledSwitches', '--js');
  assert.ok(!js.includes('React.ChangeEvent') && js.includes('export default function ControlledSwitches'));
  assert.ok(run('demos', 'tag').includes('react-chip'));
  assert.throws(() => run('demos', 'Switch', 'Nope'), (err) => /available: BasicSwitches/.test(String(err.stderr)));
});

test('--copy puts the source on the clipboard', { skip: process.platform !== 'darwin' || !process.env.MUI_CLI_TEST_CLIPBOARD }, () => {
  const out = run('demos', 'Button', 'BasicButtons', '--copy');
  assert.match(out, /^copied BasicButtons \(tsx, \d+ lines\) to clipboard/);
  assert.ok(execFileSync('pbpaste', { encoding: 'utf8' }).includes("import Button from '@mui/material/Button';"));
});

test('a demo whose packages are not installed is detected', () => {
  const from = path.resolve(HERE, '../harness/capture-main.jsx');
  assert.deepEqual(missingPackages("import Button from '@mui/material/Button';\nimport x from './local';", from), []);
  assert.deepEqual(missingPackages("import Foo from '@acme/not-installed/Foo';\nimport 'left-pad-nope';", from), ['@acme/not-installed', 'left-pad-nope']);
});
