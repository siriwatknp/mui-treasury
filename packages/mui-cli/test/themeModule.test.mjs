import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { loadThemeModule } from '../src/lib/themeModule.mjs';

function themeFile(name, source) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'theme-'));
  fs.writeFileSync(path.join(dir, name), source);
  return path.join(dir, name);
}

test('a typed .ts theme loads without the typescript package', async () => {
  const file = themeFile(
    'theme.ts',
    `interface Brand { main: string }\nconst brand: Brand = { main: '#123456' };\nexport default { palette: { primary: brand } } satisfies Record<string, unknown>;\n`,
  );
  assert.deepEqual(await loadThemeModule(file), { palette: { primary: { main: '#123456' } } });
});

test('a theme file with JSX explains the limit', async () => {
  const file = themeFile('theme.tsx', `const x: number = 1;\nexport default { components: { MuiButton: { defaultProps: { startIcon: <span /> } } } };\n`);
  await assert.rejects(loadThemeModule(file), /theme files must be plain TypeScript without JSX/);
});

test('a .ts theme that imports its own .ts tokens loads (relative imports follow the original files)', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-theme-imports-'));
  fs.mkdirSync(path.join(dir, 'tokens'));
  fs.writeFileSync(path.join(dir, 'tokens/index.ts'), "export const brand: string = '#3E63DD';\n");
  fs.writeFileSync(path.join(dir, 'theme.ts'), "import { brand } from './tokens';\n\nexport default { palette: { primary: { main: brand } } };\n");
  const theme = await loadThemeModule(path.join(dir, 'theme.ts'));
  assert.equal(theme.palette.primary.main, '#3E63DD');
});
