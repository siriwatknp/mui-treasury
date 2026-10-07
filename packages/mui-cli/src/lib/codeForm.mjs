import { createRequire } from 'node:module';
import path from 'node:path';

/** A MUI class in a selector: `.MuiOutlinedInput-notchedOutline` (component + key) or a state class `.Mui-focused`. */
export const MUI_CLASS = /\.?(Mui([A-Z][A-Za-z]*)-([A-Za-z]+)|Mui-([a-z][A-Za-z]*))/g;
/** Theme values that live under theme.vars when CSS variables are on. */
export const VAR_ROOTS = ['palette', 'shape', 'shadows'];

export const classesName = (name) => `${name[0].toLowerCase()}${name.slice(1)}Classes`;

/** Where `<name>Classes` may be exported: its own module, the module it lives in (TouchRipple), then MUI X. */
const modulesOf = (name) => [
  `@mui/material/${name}`,
  ...(name === 'TouchRipple' ? ['@mui/material/ButtonBase'] : []),
  `@mui/x-date-pickers/${name}`,
  `@mui/x-tree-view/${name}`,
  '@mui/x-date-pickers',
  '@mui/x-tree-view',
  '@mui/x-data-grid',
  '@mui/x-charts',
];
const exportOf = (name) => (name === 'DataGrid' ? 'gridClasses' : classesName(name));

const keysCache = new Map();
/** `<name>Classes` as installed for `fromDir`: its keys and the module to import it from, or null when none exports it. */
export function classesOf(name, fromDir = process.cwd()) {
  const at = `${fromDir}|${name}`;
  if (!keysCache.has(at)) {
    const require = createRequire(path.join(fromDir, 'noop.js'));
    let found = null;
    for (const from of modulesOf(name)) {
      try {
        const classes = require(from)[exportOf(name)];
        if (classes) {
          found = { keys: Object.keys(classes), from };
          break;
        }
      } catch {
        // not installed, or no such module
      }
    }
    keysCache.set(at, found);
  }
  return keysCache.get(at);
}

export const classKeysOf = (name, fromDir) => classesOf(name, fromDir)?.keys ?? null;

/**
 * `MuiOutlinedInput-notchedOutline` → outlinedInputClasses.notchedOutline; a state class uses `owner` (the component it's
 * written under), else ButtonBase's (Checkbox has no focusVisible key, its ButtonBase does). Null when no key exists.
 */
export function classKeyFor(match, owner, fromDir) {
  const [, , component, slot, state] = match;
  const key = slot ?? state;
  const names = component ? [component] : [owner?.replace(/^Mui/, ''), 'ButtonBase'].filter(Boolean);
  for (const name of names) {
    const classes = classesOf(name, fromDir);
    if (classes?.keys.includes(key)) {
      return { name, expr: `${exportOf(name)}.${key}`, from: `import { ${exportOf(name)} } from '${classes.from}';` };
    }
  }
  return null;
}

/** A token as theme code: `palette.text.primary` → `(theme.vars || theme).palette.text.primary`. */
export const tokenCode = (token) => `${VAR_ROOTS.includes(token.split(/[.[]/)[0]) ? '(theme.vars || theme)' : 'theme'}.${token}`;

/** A selector part as theme code: MUI classes become `*Classes` keys in a template literal; the imports it needs. */
export function selectorCode(part, owner, fromDir) {
  const imports = new Set();
  let changed = false;
  const code = part.replace(MUI_CLASS, (whole, ...m) => {
    const fix = classKeyFor([whole, ...m], owner, fromDir);
    if (!fix) {
      return whole;
    }
    changed = true;
    imports.add(fix.from);
    return `${whole.startsWith('.') ? '.' : ''}\${${fix.expr}}`;
  });
  return { code: changed ? `\`${code}\`` : part, imports: [...imports] };
}
