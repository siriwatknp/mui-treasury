import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const BIN = path.resolve(HERE, '../bin/mui.mjs');

const recommend = (pkg, ...args) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-recommend-'));
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(pkg));
  const r = spawnSync(process.execPath, [BIN, '--json', 'recommend', ...args], { cwd: dir, encoding: 'utf8' });
  assert.equal(r.status, 0, r.stderr);
  const data = JSON.parse(r.stdout).data;
  return { ...data, byId: Object.fromEntries(data.results.map((x) => [x.id, x])) };
};

test("recommend: the same option is advised or blocked by the project's targets, naming the blocking browser", () => {
  const electron = recommend({ devDependencies: { electron: '^31.0.0' } });
  assert.equal(electron.targets.source, 'electron ^31.0.0 (package.json)');
  assert.equal(electron.byId.nativeColor.status, 'recommended');
  const oldSafari = recommend({ browserslist: ['safari >= 15'] });
  assert.equal(oldSafari.byId.nativeColor.status, 'blocked');
  assert.ok(oldSafari.byId.nativeColor.support.blocking.some((b) => b.feature === 'relative-color' && b.browser.startsWith('safari 15')));
  assert.equal(oldSafari.byId.reducedMotion.status, 'recommended');
});

test('recommend: no targets found is reported as assumed; adopted options and customized tokens are recognized', () => {
  const plain = recommend({});
  assert.equal(plain.targets.assumed, true);
  assert.equal(plain.byId.shadows.status, 'default');
  assert.equal(plain.byId.modularCssLayers.status, 'not needed');
  const themed = recommend({}, '--theme', path.join(HERE, 'fixtures/theme.ts'));
  assert.equal(themed.byId.shape.status, 'customized');
  const ring = recommend({}, '--theme', path.join(HERE, 'fixtures/gate-broken.theme.ts'));
  assert.equal(ring.byId.focusVisible.status, 'adopted');
});

test('recommend <id> lists one entry; every catalog requires-id exists in web-features', async () => {
  assert.deepEqual(recommend({}, 'nativeColor').results.map((r) => r.id), ['nativeColor']);
  const { features } = await import('web-features');
  const catalog = JSON.parse(fs.readFileSync(path.resolve(HERE, '../data/material/recommendations.json'), 'utf8')).entries;
  for (const id of catalog.flatMap((e) => e.requires ?? [])) {
    assert.ok(features[id], `web-features has ${id}`);
  }
});

test('--show adds the snippet by deep-merging it into what createTheme receives, keeping the rest of the theme', async () => {
  const { withSnippet } = await import('../src/commands/recommend.run.mjs');
  const { loadThemeModule } = await import('../src/lib/themeModule.mjs');
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-show-'));
  const out = path.join(dir, 'show.theme.ts');
  const source = "import { createTheme } from '@mui/material/styles';\n\nconst theme: ReturnType<typeof createTheme> = createTheme({ palette: { primary: { main: '#3E63DD' } } });\n\nexport default theme;\n";
  fs.writeFileSync(out, await withSnippet(source, out, "palette: { contrastThreshold: 4.5 }"));
  const theme = await loadThemeModule(out);
  assert.equal(theme.palette.primary.main, '#3E63DD');
  assert.equal(theme.palette.contrastThreshold, 4.5);
  fs.writeFileSync(out, await withSnippet("export default { shape: { borderRadius: 8 } };\n", out, "motion: { reducedMotion: 'system' }"));
  assert.deepEqual(await loadThemeModule(out), { shape: { borderRadius: 8 }, motion: { reducedMotion: 'system' } });
});

test('--preset prints a Tailwind-inspired module for a design token; presets follow the theme code rules and keep 25 shadows', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-preset-'));
  fs.writeFileSync(path.join(dir, 'package.json'), '{}');
  const r = spawnSync(process.execPath, [BIN, '--json', 'recommend', 'shadows', '--preset', 'tailwind'], { cwd: dir, encoding: 'utf8' });
  assert.equal(r.status, 0, r.stderr);
  assert.match(JSON.parse(r.stdout).data.source, /export const shadows/);
  const bad = spawnSync(process.execPath, [BIN, 'recommend', 'shape', '--preset', 'tailwind'], { cwd: dir, encoding: 'utf8' });
  assert.match(bad.stderr, /no preset/);
  const { checkThemeCode } = await import('../src/lib/themeCode.mjs');
  const { loadThemeModule } = await import('../src/lib/themeModule.mjs');
  for (const id of ['typography', 'shadows']) {
    const file = path.resolve(HERE, `../data/material/presets/${id}.tailwind.ts`);
    assert.deepEqual(await checkThemeCode(file), []);
    assert.ok(!/treasury/i.test(fs.readFileSync(file, 'utf8')));
  }
  const shadowsFile = path.join(dir, 'shadows.theme.ts');
  fs.writeFileSync(shadowsFile, `${fs.readFileSync(path.resolve(HERE, '../data/material/presets/shadows.tailwind.ts'), 'utf8')}\nexport default { shadows };\n`);
  assert.equal((await loadThemeModule(shadowsFile)).shadows.length, 25);
});
