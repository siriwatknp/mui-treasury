import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkThemeCode } from '../src/lib/themeCode.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));

test('theme code: every rule is reported once, on its line, with the fix', async () => {
  const issues = await checkThemeCode(path.join(HERE, 'fixtures/code-unstandard.theme.ts'));
  assert.deepEqual([...new Set(issues.map((i) => i.rule))].sort(), ['classes', 'color helpers', 'css variables', 'dark mode', 'spread function', 'tokens', 'typography', 'width queries']);
  assert.deepEqual(issues.filter((i) => i.rule !== 'classes').map((i) => [i.rule, i.line]), [['tokens', 8], ['dark mode', 9], ['typography', 10], ['color helpers', 11], ['css variables', 12], ['width queries', 13], ['spread function', 16]]);
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
