import fs from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const PKG_ROOT = path.resolve(fileURLToPath(import.meta.url), '../../..');

export function stripTypes(source, file) {
  const emit = process.emitWarning;
  process.emitWarning = (warning, ...rest) => {
    if (!/Type Stripping|stripTypeScriptTypes/i.test(String(warning))) {
      emit.call(process, warning, ...rest);
    }
  };
  try {
    return stripTypeScriptTypes(source);
  } catch (err) {
    throw new Error(`could not read ${file} as TypeScript (${err.code ?? err.message}) — theme files must be plain TypeScript without JSX`);
  } finally {
    process.emitWarning = emit;
  }
}

const TS = /\.(ts|mts|tsx)$/;
const RESOLVE_EXT = ['', '.ts', '.mts', '.tsx', '.js', '.mjs', '/index.ts', '/index.js'];

/**
 * A .ts module as an importable .mjs: types stripped, landed INSIDE the package so bare specifiers (@mui/material) still
 * resolve from our node_modules. Its relative imports (a theme's own tokens file) point back at the original files,
 * TypeScript ones stripped the same way, since a moved module can't resolve `./tokens` and Node only imports .ts from 22.18.
 */
function stripToCache(abs, dir, made) {
  const source = stripTypes(fs.readFileSync(abs, 'utf8'), abs);
  const out = source.replace(/((?:from|import)\s*\(?\s*)(['"])(\.{1,2}\/[^'"]+)\2/g, (whole, lead, quote, spec) => {
    const target = RESOLVE_EXT.map((ext) => path.resolve(path.dirname(abs), spec + ext)).find((f) => fs.existsSync(f) && fs.statSync(f).isFile());
    if (!target) {
      return whole;
    }
    return `${lead}${quote}${pathToFileURL(TS.test(target) ? stripToCache(target, dir, made) : target).href}${quote}`;
  });
  const tmp = path.join(dir, `theme-${process.pid}-${Math.random().toString(36).slice(2)}.mjs`);
  fs.writeFileSync(tmp, out);
  made.push(tmp);
  return tmp;
}

async function importThemeModule(file) {
  const abs = path.resolve(file);
  if (!fs.existsSync(abs)) {
    throw new Error(`no such file: ${file}`);
  }
  const made = [];
  let importPath = abs;
  if (TS.test(abs)) {
    const dir = path.join(PKG_ROOT, 'node_modules', '.cache', 'mui-cli');
    fs.mkdirSync(dir, { recursive: true });
    importPath = stripToCache(abs, dir, made);
  }
  try {
    const mod = await import(`${pathToFileURL(importPath).href}?t=${Date.now()}`);
    if (!mod.default || typeof mod.default !== 'object') {
      throw new Error(`--theme file must default-export a theme options object: ${file}`);
    }
    return mod.default;
  } finally {
    made.forEach((tmp) => fs.rmSync(tmp, { force: true }));
  }
}

/** A createTheme() RESULT (not options): runtime methods only a built theme has. */
export const isCreatedTheme = (obj) =>
  Boolean(obj) &&
  (typeof obj.applyStyles === 'function' || typeof obj.palette?.getContrastText === 'function');

/** Default export of a --theme module (options OR a created theme). */
export async function loadThemeModule(file) {
  return importThemeModule(file);
}

