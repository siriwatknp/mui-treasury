import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createTheme } from '@mui/material/styles';
import { customFamilies, declaredFamilies, familiesOf, resolveFonts } from '../src/lib/fonts.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const BIN = path.resolve(HERE, '../bin/mui.mjs');

test('font families: quotes stripped, a var() contributes its fallback list', () => {
  assert.deepEqual(familiesOf('var(--font-primary, "Geist Variable", -apple-system, sans-serif)'), ['Geist Variable', '-apple-system', 'sans-serif']);
  assert.deepEqual(familiesOf("'Inter', var(--x), serif"), ['Inter', 'serif']);
});

test('custom families: not generic, not a system font, not in MUI defaults — a vanilla theme has none', () => {
  const vanilla = createTheme();
  assert.deepEqual(customFamilies(vanilla, vanilla), []);
  const theme = createTheme({ typography: { fontFamily: '"Inter", "Segoe UI", sans-serif', h1: { fontFamily: 'var(--display, "Playfair Display", serif)' } } });
  assert.deepEqual(customFamilies(theme, vanilla), ['Inter', 'Playfair Display']);
});

test('--font sources: a package stylesheet supplies the families it declares; a bare file the one family left', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-fonts-'));
  const pkg = path.join(dir, 'node_modules/@fontsource/inter');
  fs.mkdirSync(pkg, { recursive: true });
  fs.writeFileSync(path.join(pkg, 'package.json'), '{"name":"@fontsource/inter","main":"index.css"}');
  fs.writeFileSync(path.join(pkg, 'index.css'), "@font-face {\n  font-family: 'Inter';\n  src: url(./files/inter.woff2);\n}\n");
  fs.writeFileSync(path.join(dir, 'Display.woff2'), '');
  assert.deepEqual(declaredFamilies(fs.readFileSync(path.join(pkg, 'index.css'), 'utf8')), ['Inter']);
  const fonts = resolveFonts({ sources: ['@fontsource/inter', 'Display.woff2'], custom: ['Inter', 'Playfair Display'], fromDir: dir });
  assert.deepEqual(fonts.map((f) => [f.kind, f.families ?? f.family]), [['css', ['Inter']], ['file', 'Playfair Display']]);
  assert.throws(() => resolveFonts({ sources: ['@fontsource/inter'], custom: ['Inter', 'Playfair Display'], fromDir: dir }), /"Playfair Display" — say which font.*--skip-font/);
  assert.deepEqual(resolveFonts({ sources: [], custom: ['Inter'], skip: true, fromDir: dir }), []);
  assert.throws(() => resolveFonts({ sources: ['Display.woff2'], custom: ['Inter', 'Playfair Display'], fromDir: dir }), /name its family/);
  assert.throws(() => resolveFonts({ sources: ['@fontsource/nope'], custom: [], fromDir: dir }), /no such package/);
});

test('verify on a theme with a custom font fails before rendering unless --font or --skip-font', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-fonts-theme-'));
  fs.writeFileSync(path.join(dir, 'theme.ts'), "export default { typography: { fontFamily: '\"Probe Sans\", sans-serif' } };\n");
  const run = spawnSync(process.execPath, [BIN, 'verify', 'Button', '--theme', path.join(dir, 'theme.ts')], { cwd: path.resolve(HERE, '..'), encoding: 'utf8' });
  assert.equal(run.status, 1);
  assert.match(run.stderr, /"Probe Sans" — say which font/);
});
