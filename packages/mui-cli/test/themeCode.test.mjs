import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkThemeCode } from '../src/lib/themeCode.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));

test('theme code: every rule is reported once, on its line, with the fix', async () => {
  const issues = await checkThemeCode(path.join(HERE, 'fixtures/code-unstandard.theme.ts'));
  assert.deepEqual([...new Set(issues.map((i) => i.rule))].sort(), ['classes', 'color helpers', 'css variables', 'dark mode', 'spread function', 'tokens', 'typography']);
  assert.deepEqual(issues.filter((i) => i.rule !== 'classes').map((i) => [i.rule, i.line]), [['tokens', 8], ['dark mode', 9], ['typography', 10], ['color helpers', 11], ['css variables', 12], ['spread function', 16]]);
  const notch = issues.find((i) => i.detail.includes('MuiOutlinedInput-notchedOutline'));
  assert.equal(notch.line, 8);
  assert.match(notch.detail, /outlinedInputClasses\.notchedOutline.*import \{ outlinedInputClasses \} from '@mui\/material\/OutlinedInput'/);
  assert.match(issues.find((i) => i.detail.includes("'Mui-focused'")).detail, /outlinedInputClasses\.focused/);
  // the mode comparison is reported once, as dark mode, not also as a token read
  assert.equal(issues.filter((i) => i.line === 9).length, 1);
});

test('theme code: the standard forms pass, and a color helper outside components is fine', async () => {
  assert.deepEqual(await checkThemeCode(path.join(HERE, 'fixtures/code-standard.theme.ts')), []);
});

test('theme code: component maps in imported files are checked, JSX included; a width query is not a rule', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-code-imports-'));
  fs.mkdirSync(path.join(dir, 'components'));
  fs.writeFileSync(path.join(dir, 'components/button.ts'), "export const button = {\n  MuiButton: { styleOverrides: { root: { '& .MuiButton-icon': { margin: 0 } } } },\n};\n");
  fs.writeFileSync(path.join(dir, 'components/controls.tsx'), "const Icon = () => null;\nexport const controls = {\n  MuiCheckbox: { defaultProps: { icon: <Icon /> }, styleOverrides: { root: ({ theme }) => ({ borderRadius: theme.shape.borderRadius }) } },\n};\n");
  fs.writeFileSync(path.join(dir, 'theme.tsx'), "import { button } from './components/button';\nimport { controls } from './components/controls';\n\nconst TOUCH = '@media (max-width: 768px)';\nexport const Wrapper = () => <div />;\nexport default { components: { ...button, ...controls, MuiChip: { styleOverrides: { root: { [TOUCH]: { height: 40 }, '@media (min-width: 900px)': { height: 32 } } } } } };\n");
  const issues = await checkThemeCode(path.join(dir, 'theme.tsx'), dir);
  assert.deepEqual(issues.map((i) => [path.basename(i.file), i.line, i.rule]), [['button.ts', 2, 'classes'], ['controls.tsx', 3, 'tokens']]);
});
