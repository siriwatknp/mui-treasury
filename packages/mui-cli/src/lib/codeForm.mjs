import { createRequire } from 'node:module';
import path from 'node:path';

/** A MUI class in a selector: `.MuiOutlinedInput-notchedOutline` (component + key) or a state class `.Mui-focused`. */
export const MUI_CLASS = /\.?(Mui([A-Z][A-Za-z]*)-([A-Za-z]+)|Mui-([a-z][A-Za-z]*))/g;
/** Theme values that live under theme.vars when CSS variables are on. */
export const VAR_ROOTS = ['palette', 'shape', 'shadows'];

export const classesName = (name) => `${name[0].toLowerCase()}${name.slice(1)}Classes`;

const keysCache = new Map();
/** The keys of `<name>Classes` in @mui/material as installed for `fromDir`, or null when it can't be read. */
export function classKeysOf(name, fromDir = process.cwd()) {
  const at = `${fromDir}|${name}`;
  if (!keysCache.has(at)) {
    try {
      const require = createRequire(path.join(fromDir, 'noop.js'));
      keysCache.set(at, Object.keys(require(`@mui/material/${name}`)[classesName(name)] ?? {}));
    } catch {
      keysCache.set(at, null);
    }
  }
  return keysCache.get(at);
}

/** `MuiOutlinedInput-notchedOutline` → outlinedInputClasses.notchedOutline; a state class uses `owner` (the component it's written under). Null when that key doesn't exist. */
export function classKeyFor(match, owner, fromDir) {
  const [, , component, slot, state] = match;
  const name = component ?? owner?.replace(/^Mui/, '');
  const key = slot ?? state;
  const keys = name ? classKeysOf(name, fromDir) : null;
  if (!keys?.includes(key)) {
    return null;
  }
  return { name, expr: `${classesName(name)}.${key}`, from: `import { ${classesName(name)} } from '@mui/material/${name}';` };
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
