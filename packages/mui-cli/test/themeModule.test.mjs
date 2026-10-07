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

test('a theme with JSX loads, in the entry and in the files it imports', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-theme-jsx-'));
  fs.writeFileSync(path.join(dir, 'controls.tsx'), "const Icon = () => null;\nexport const controls = { MuiCheckbox: { defaultProps: { icon: <Icon /> } } };\n");
  fs.writeFileSync(path.join(dir, 'theme.tsx'), "import { controls } from './controls';\n\nconst n: number = 1;\nexport const Wrapper = ({ children }: { children: unknown }) => <div>{children}</div>;\nexport default { spacing: n, components: { ...controls } };\n");
  const theme = await loadThemeModule(path.join(dir, 'theme.tsx'));
  assert.equal(theme.spacing, 1);
  assert.equal(typeof theme.components.MuiCheckbox.defaultProps.icon, 'object');
});

test('a .ts theme that imports its own .ts tokens loads (relative imports follow the original files)', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-theme-imports-'));
  fs.mkdirSync(path.join(dir, 'tokens'));
  fs.writeFileSync(path.join(dir, 'tokens/index.ts'), "export const brand: string = '#3E63DD';\n");
  fs.writeFileSync(path.join(dir, 'theme.ts'), "import { brand } from './tokens';\n\nexport default { palette: { primary: { main: brand } } };\n");
  const theme = await loadThemeModule(path.join(dir, 'theme.ts'));
  assert.equal(theme.palette.primary.main, '#3E63DD');
});

test('an import used only as a type, written without `type`, is dropped as a bundler would', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mui-theme-type-import-'));
  fs.writeFileSync(path.join(dir, 'types.ts'), 'export interface ThemeComponents { [name: string]: unknown }\n');
  fs.writeFileSync(path.join(dir, 'theme.ts'), "import { ThemeComponents } from './types';\n\nconst components: ThemeComponents = { MuiButton: {} };\nexport default { components };\n");
  assert.deepEqual(await loadThemeModule(path.join(dir, 'theme.ts')), { components: { MuiButton: {} } });
});
