/** @file compile-theme: TS serializer + DESIGN.md → theme options (globals + component cascades). */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { serializeTs } from '../src/commands/compileTheme.run.mjs';

const BIN = path.resolve(fileURLToPath(import.meta.url), '../../bin/mui.mjs');

test('serializeTs: identifier keys bare, others quoted, strings single-quoted', () => {
  assert.equal(serializeTs('a'), "'a'");
  assert.equal(serializeTs(42), '42');
  assert.equal(serializeTs(true), 'true');
  assert.equal(serializeTs("O'Brien"), "'O\\'Brien'");
  const obj = serializeTs({ root: { '&:hover': { color: 'red' } }, 500: 'x' });
  assert.match(obj, /root: \{/);
  assert.match(obj, /'&:hover': \{/);
  assert.match(obj, /'500': 'x'/);
});

test('serializeTs: function-source strings emit as code, not quoted', () => {
  const fn = "({ ownerState }) => ownerState.size === 'small'";
  assert.equal(serializeTs(fn), fn, 'arrow source stays verbatim (unquoted)');
  assert.equal(serializeTs('function (o) { return o.x; }'), 'function (o) { return o.x; }');
  const obj = serializeTs({ props: '(o) =>\n      o.type !== 1', style: { height: '8px' } });
  assert.match(obj, /props: \(o\) => o\.type !== 1/, 'fn code, indentation collapsed');
  assert.match(obj, /height: '8px'/, 'ordinary value still quoted');
});

test('serializeTs: round-trips arbitrary plain data through eval', () => {
  const value = {
    cssVariables: true,
    palette: { primary: { main: '#1976d2' }, grey: { 500: '#9e9e9e' }, divider: '#e0e0e0' },
    spacing: 8,
    components: { MuiButton: { styleOverrides: { root: { variants: [{ props: { size: 'small' }, style: { height: '34px' } }] } } } },
  };
  // eslint-disable-next-line no-new-func
  const recovered = new Function(`return ${serializeTs(value)}`)();
  assert.deepEqual(recovered, value);
});

const FIXTURE = [
  '---',
  'colors:',
  '  primary-main: "#1976d2"',
  '  background-paper: "#f5f5f5"',
  '  grey-500: "#9e9e9e"',
  '  divider: "#e0e0e0"',
  'typography:',
  '  body1:',
  '    fontSize: 1rem',
  '    fontWeight: "400"',
  'rounded:',
  '  "1": 8px',
  'spacing:',
  '  "1": 8px',
  '---',
  '',
  '# body ignored',
  '',
].join('\n');

function compile(md, ...flags) {
  const file = path.join(os.tmpdir(), `mui-compile-test-${process.pid}-${flags.join('') || 'x'}.md`);
  fs.writeFileSync(file, md);
  try {
    const out = execFileSync('node', [BIN, '--json', 'compile-theme', file, ...flags], { encoding: 'utf8' });
    return JSON.parse(out).data;
  } finally {
    fs.rmSync(file, { force: true });
  }
}

test('compile-theme: globals mapped, no components without a cascade', () => {
  const { theme, ignored } = compile(FIXTURE);
  assert.equal(theme.cssVariables, true);
  assert.deepEqual(theme.palette.primary, { main: '#1976d2' });
  assert.equal(theme.palette.background.paper, '#f5f5f5');
  assert.equal(theme.palette.grey['500'], '#9e9e9e');
  assert.equal(theme.palette.divider, '#e0e0e0');
  assert.equal(theme.shape.borderRadius, 8);
  assert.equal(theme.spacing, 8);
  assert.equal(theme.typography.body1.fontWeight, 400);
  assert.ok(!('components' in theme));
  assert.equal(ignored, undefined);
});

test('compile-theme: a density block is reported as ignored, not compiled', () => {
  const md = ['---', 'colors:', '  primary-main: "#111111"', 'spacing:', '  "1": 12px', 'density:', '  control-height: 40px', '  spacing-unit: 4px', '---'].join('\n');
  const { theme, ignored } = compile(md);
  assert.deepEqual(ignored, ['density']);
  assert.equal(theme.spacing, 12, 'spacing comes from the spacing scale only');
  assert.ok(!('components' in theme));
});

test('compile-theme: a component cascade compiles into styleOverrides', () => {
  const md = ['---', 'colors:', '  primary-main: "#3E63DD"', '  primary-dark: "#3451B2"', 'components:', '  MuiButton:', '    cascade:', '      root:', '        contained:', '          hover: { background: primary-dark }', '---'].join('\n');
  const { theme } = compile(md);
  assert.ok(theme.components.MuiButton.styleOverrides.root);
});

test('compile-theme: a <name>-dark.md sibling → colorSchemes {light, dark}, shared type', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-dual-'));
  fs.writeFileSync(path.join(dir, 'DESIGN.md'), '---\ncolors:\n  primary-main: "#2563EB"\n  background-default: "#FFFFFF"\ntypography:\n  fontFamily: Inter\n---\n');
  fs.writeFileSync(path.join(dir, 'DESIGN-dark.md'), '---\ncolors:\n  primary-main: "#60A5FA"\n  background-default: "#0B1120"\n---\n');
  try {
    const { theme } = JSON.parse(execFileSync('node', [BIN, '--json', 'compile-theme', path.join(dir, 'DESIGN.md')], { encoding: 'utf8' })).data;
    assert.deepEqual(Object.keys(theme.colorSchemes), ['light', 'dark']);
    assert.equal(theme.colorSchemes.light.palette.primary.main, '#2563EB');
    assert.equal(theme.colorSchemes.dark.palette.primary.main, '#60A5FA');
    assert.ok(!('palette' in theme), 'palette moved under colorSchemes');
    assert.match(theme.typography.fontFamily, /^Inter,/, 'typography shared at top level (fallbacks appended)');
    assert.equal(theme.typography.button.textTransform, 'initial');
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('compile-theme: applies the app type-scale ramp by base font (integer line-heights, not MUI 96px)', () => {
  const md = (lines) => ['---', 'colors:', '  primary-main: "#111111"', ...lines, '---'].join('\n');
  const compact = compile(md(['typography:', '  fontSize: 0.875rem'])).theme;
  assert.equal(compact.typography.h1.fontSize, '30px', 'compact h1 = 30px');
  assert.equal(compact.typography.h1.lineHeight, '36px', 'integer px line-height');
  const comfy = compile(md([])).theme;
  assert.equal(comfy.typography.h1.fontSize, '40px', 'comfortable (default) h1 = 40px');
  const spacious = compile(md(['typography:', '  fontSize: 1.0625rem'])).theme;
  assert.equal(spacious.typography.h1.fontSize, '48px', 'spacious h1 = 48px');
});

test('compile-theme: bare font gets system fallbacks; headingFontFamily → h1-h6', () => {
  const md = ['---', 'colors:', '  primary-main: "#111111"', 'typography:', '  fontFamily: Inter', '  headingFontFamily: Newsreader', '---'].join('\n');
  const { theme } = compile(md);
  assert.match(theme.typography.fontFamily, /^Inter, -apple-system/, 'bare body font → sans fallbacks');
  assert.match(theme.typography.h1.fontFamily, /^Newsreader,/, 'display font on h1');
  assert.match(theme.typography.h6.fontFamily, /^Newsreader,/, 'display font on h6');
  assert.ok(!('headingFontFamily' in theme.typography), 'custom field not leaked into the theme');
  // a full stack passes through untouched
  const full = compile(['---', 'colors:', '  primary-main: "#111"', 'typography:', '  fontFamily: \'Georgia, serif\'', '---'].join('\n'));
  assert.equal(full.theme.typography.fontFamily, 'Georgia, serif');
});

test('compile-theme: always sets typography.button.textTransform = initial', () => {
  assert.equal(compile(FIXTURE).theme.typography.button.textTransform, 'initial', 'button transform baked in');
  // even a blueprint with no typography block gets it
  const bare = ['---', 'colors:', '  primary-main: "#111111"', '---'].join('\n');
  assert.equal(compile(bare).theme.typography.button.textTransform, 'initial');
});
