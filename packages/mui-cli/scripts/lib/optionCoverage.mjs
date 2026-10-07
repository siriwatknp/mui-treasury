import fs from 'node:fs';
import path from 'node:path';

/** The top-level option names an interface declares (`name?: …` at its first brace level). */
function interfaceKeys(file, name) {
  const text = fs.readFileSync(file, 'utf8');
  const start = text.indexOf(`export interface ${name}`);
  if (start < 0) {
    return [];
  }
  const keys = [];
  let depth = 0;
  for (const line of text.slice(text.indexOf('{', start)).split('\n')) {
    if (depth === 1) {
      const m = line.match(/^\s*([A-Za-z_]\w*)\??\s*:/);
      if (m) {
        keys.push(m[1]);
      }
    }
    depth += (line.match(/\{/g) ?? []).length - (line.match(/\}/g) ?? []).length;
    if (depth <= 0 && keys.length) {
      break;
    }
  }
  return keys;
}

/** Theme options in the pinned Material UI that the recommend catalog neither covers nor lists as reviewed. */
export function uncoveredOptions(vendorDir, catalog) {
  const styles = path.join(vendorDir, 'packages/mui-material/src/styles');
  const options = new Set([
    ...interfaceKeys(path.join(styles, 'createTheme.ts'), 'ThemeOptions'),
    ...interfaceKeys(path.join(styles, 'createThemeNoVars.d.ts'), 'ThemeOptions'),
    ...interfaceKeys(path.join(styles, 'createThemeWithVars.d.ts'), 'CssVarsThemeOptions'),
  ]);
  const covered = new Set([...catalog.entries.flatMap((e) => e.options ?? []), ...(catalog.reviewed ?? [])]);
  return [...options].filter((o) => !covered.has(o)).sort();
}
