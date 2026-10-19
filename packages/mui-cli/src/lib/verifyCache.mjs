/**
 * @file Gate results kept between runs (verify --all). A case's result is reused while nothing it depends on changed:
 * the case, this CLI (code, harness, data), the project's packages, the fonts, the theme's global part, and the
 * theme source behind every Mui* key of a component the case rendered. Theme sources are keyed by file contents
 * (a style function reading `CONTROL_HEIGHTS` from another file changes when that file does), never by values.
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseSource, resolveRelative } from './themeCode.mjs';

const PKG_ROOT = path.resolve(fileURLToPath(import.meta.url), '../../..');
const MUI_KEY = /^Mui[A-Z][A-Za-z]*$/;
// theme keys that style without a class of their own (Material UI 9: a `name` with no utility classes): global ones reach
// every case, the rest apply through the components that render them
const GLOBAL_KEYS = ['MuiCssBaseline', 'MuiUseMediaQuery'];
const APPLIED_BY = {
  MuiBreadcrumbs: ['MuiBreadcrumbCollapsed'],
  MuiCheckbox: ['MuiSwitchBase'],
  MuiDrawer: ['MuiSwipeableDrawer', 'MuiSwipeArea'],
  MuiOutlinedInput: ['MuiNotchedOutlined'],
  MuiRadio: ['MuiSwitchBase', 'MuiRadioButtonIcon'],
  MuiSwitch: ['MuiSwitchBase'],
};
const sha = (...parts) => crypto.createHash('sha1').update(parts.join('\0')).digest('hex').slice(0, 16);

/** This CLI's code, harness and data: any edit (development, a data sync) starts over. */
function cliKey() {
  const parts = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(file);
      } else {
        const st = fs.statSync(file);
        parts.push(`${path.relative(PKG_ROOT, file)}:${st.size}:${st.mtimeMs}`);
      }
    }
  };
  ['src', 'harness', 'data'].forEach((d) => walk(path.join(PKG_ROOT, d)));
  return sha(JSON.parse(fs.readFileSync(path.join(PKG_ROOT, 'package.json'), 'utf8')).version, ...parts);
}

/** The installed versions of the packages a render draws on (Material UI, React, Emotion, and the rest the project lists). */
function packagesKey(hostRoot) {
  const require = createRequire(path.join(hostRoot, 'package.json'));
  let listed = [];
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(hostRoot, 'package.json'), 'utf8'));
    listed = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies });
  } catch {
    // no package.json: the fixed list below
  }
  const names = [...new Set(['@mui/material', 'react', 'react-dom', '@emotion/react', '@emotion/styled', ...listed.filter((n) => /^(@mui\/|@emotion\/|react)/.test(n))])].sort();
  return sha(...names.map((n) => {
    try {
      return `${n}@${JSON.parse(fs.readFileSync(require.resolve(`${n}/package.json`), 'utf8')).version}`;
    } catch {
      return `${n}@-`;
    }
  }));
}

const walkAst = (node, fn) => {
  if (!node || typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((n) => walkAst(n, fn));
    return;
  }
  if (typeof node.type === 'string') {
    fn(node);
  }
  for (const [k, v] of Object.entries(node)) {
    if (k !== 'type' && v && typeof v === 'object') {
      walkAst(v, fn);
    }
  }
};
const keyName = (p) => (p.type === 'Property' && !p.computed ? String(p.key.name ?? p.key.value) : null);

/**
 * Per file of the theme: its text, its relative imports (with the names taken), the Mui* keys it defines, and which of its
 * exports hold them. The global key covers the files reached from the entry, skipping an import that only takes exports
 * holding Mui* keys (`import { buttonTheme } from './components/button'`); a Mui* key covers its file and all it imports.
 */
async function themeKeys(entry) {
  const files = new Map();
  const load = async (file) => {
    if (files.has(file)) {
      return;
    }
    const text = fs.readFileSync(file, 'utf8');
    const info = { text, imports: [], keys: new Set(), muiExports: new Set() };
    files.set(file, info);
    const ast = await parseSource(text, file);
    walkAst(ast, (n) => {
      if (MUI_KEY.test(keyName(n) ?? '')) {
        info.keys.add(keyName(n));
      }
    });
    for (const node of ast.body) {
      if (node.type === 'ExportNamedDeclaration' && node.declaration?.type === 'VariableDeclaration') {
        for (const d of node.declaration.declarations) {
          let holds = false;
          walkAst(d.init, (n) => {
            holds ||= MUI_KEY.test(keyName(n) ?? '');
          });
          if (holds && d.id.type === 'Identifier') {
            info.muiExports.add(d.id.name);
          }
        }
      }
      if (['ImportDeclaration', 'ExportNamedDeclaration', 'ExportAllDeclaration'].includes(node.type) && node.source?.value?.startsWith('.')) {
        const target = resolveRelative(file, node.source.value);
        if (target) {
          const names = node.type === 'ImportDeclaration' && node.importKind !== 'type'
            ? node.specifiers.map((s) => (s.type === 'ImportSpecifier' ? (s.imported.name ?? s.imported.value) : '*'))
            : node.type === 'ImportDeclaration' ? [] : ['*'];
          info.imports.push({ target, names });
          await load(target);
        }
      }
    }
  };
  const root = path.resolve(entry);
  await load(root);
  const closure = (file, seen = new Set()) => {
    if (!seen.has(file)) {
      seen.add(file);
      files.get(file).imports.forEach((i) => closure(i.target, seen));
    }
    return seen;
  };
  const global = new Set();
  const reach = (file) => {
    if (global.has(file)) {
      return;
    }
    global.add(file);
    for (const { target, names } of files.get(file).imports) {
      if (!names.length || !names.every((n) => files.get(target).muiExports.has(n))) {
        reach(target);
      }
    }
  };
  reach(root);
  const textOf = (set) => [...set].sort().map((f) => `${f}\n${files.get(f).text}`);
  const components = new Map();
  for (const [file, info] of files) {
    for (const key of info.keys) {
      components.set(key, [...(components.get(key) ?? []), file]);
    }
  }
  const sourceOf = (key) => (components.has(key) ? textOf(new Set(components.get(key).flatMap((f) => [...closure(f)]))) : []);
  const globalKey = sha(...textOf(global), ...GLOBAL_KEYS.flatMap(sourceOf));
  const componentKey = (name) => sha(...[name, ...(APPLIED_BY[name] ?? [])].flatMap((key) => [key, ...sourceOf(key)]));
  return { globalKey, componentKey };
}

const fontsKey = (fonts) => sha(...fonts.map((f) => {
  const st = fs.existsSync(f.file) ? fs.statSync(f.file) : null;
  return `${f.kind ?? ''}|${f.family ?? ''}|${f.file}|${st?.size}|${st?.mtimeMs}`;
}));

// every field of a case: the same demo is a different case when it checks other components or is covered by others
export const caseId = (c) => sha(JSON.stringify(Object.keys(c).sort().map((k) => [k, c[k]])));

/** The cache for one theme (or vanilla) in this project: lookup before a case runs, put after, save at the end. `reuse: false` only stores. */
export async function openCache({ hostRoot = process.cwd(), themeFile, fonts = [], reuse = true }) {
  const dir = path.join(hostRoot, 'node_modules/.cache/mui-cli/verify', sha(themeFile ? path.resolve(themeFile) : 'vanilla'));
  const file = path.join(dir, 'results.json');
  const shots = path.join(dir, 'shots');
  const theme = themeFile ? await themeKeys(themeFile) : { globalKey: 'vanilla', componentKey: () => '-' };
  const env = sha(cliKey(), packagesKey(hostRoot), fontsKey(fonts), theme.globalKey);
  let stored = {};
  try {
    const saved = JSON.parse(fs.readFileSync(file, 'utf8'));
    stored = saved.env === env ? saved.cases : {};
  } catch {
    // first run, or an unreadable cache: start empty
  }
  const depsKey = (rendered) => sha(...rendered.map((n) => `${n}:${theme.componentKey(n)}`));
  return {
    /** The stored result of `c`, or null. `needsShot(result)` says whether this run puts it on the sheet. */
    lookup(c, needsShot) {
      const hit = stored[caseId(c)];
      if (!reuse || !hit || hit.deps !== depsKey(hit.rendered) || (needsShot(hit.result) && !(hit.shot && fs.existsSync(hit.shot)))) {
        return null;
      }
      return { ...hit.result, case: c, shot: hit.shot ?? null, cached: true };
    },
    put(result) {
      const { case: c, shot, cached, ...rest } = result;
      if (cached) {
        return;
      }
      let kept = null;
      if (shot && fs.existsSync(shot)) {
        fs.mkdirSync(shots, { recursive: true });
        kept = path.join(shots, `${caseId(c)}-${sha(env, depsKey(rest.rendered))}.png`);
        fs.copyFileSync(shot, kept);
      }
      stored[caseId(c)] = { deps: depsKey(rest.rendered), rendered: rest.rendered, result: rest, shot: kept };
    },
    save() {
      try {
        fs.mkdirSync(dir, { recursive: true });
        const tmp = `${file}.${process.pid}.tmp`;
        fs.writeFileSync(tmp, JSON.stringify({ env, cases: stored }));
        fs.renameSync(tmp, file);
        const kept = new Set(Object.values(stored).map((e) => e.shot).filter(Boolean));
        for (const f of fs.existsSync(shots) ? fs.readdirSync(shots) : []) {
          if (!kept.has(path.join(shots, f))) {
            fs.rmSync(path.join(shots, f), { force: true });
          }
        }
      } catch {
        // a cache that can't be written (read-only node_modules) only means the next run checks everything again
      }
    },
  };
}
