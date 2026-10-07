import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

// Vite 8's build target for 'baseline-widely-available' (its default), used when the project's Vite can't be read
const VITE_BASELINE_FALLBACK = ['chrome111', 'edge111', 'firefox114', 'safari16.4', 'ios16.4'];
// Next.js's documented default browser support (15+), used when a Next app has no browserslist of its own
const NEXT_DEFAULT = ['chrome 111', 'edge 111', 'firefox 111', 'safari 16.4'];
const ESBUILD_NAMES = { chrome: 'chrome', edge: 'edge', firefox: 'firefox', safari: 'safari', ios: 'ios_saf', opera: 'opera' };

const readJson = (file) => {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return null;
  }
};

/** esbuild-style targets ('chrome111', 'ios16.4') → browserslist entries; anything else (es2020, node18) can't name a browser. */
function fromEsbuild(list) {
  const out = [];
  for (const t of list) {
    const m = String(t).match(/^([a-z]+)(\d+(?:\.\d+)?)$/);
    if (m && ESBUILD_NAMES[m[1]]) {
      out.push(`${ESBUILD_NAMES[m[1]]} ${m[2]}`);
    }
  }
  return out;
}

/** The project's Vite build target: an explicit build.target in vite.config, else the installed Vite's baseline default. */
function viteTarget(projectDir) {
  const config = ['vite.config.ts', 'vite.config.mts', 'vite.config.js', 'vite.config.mjs'].map((f) => path.join(projectDir, f)).find((f) => fs.existsSync(f));
  const text = config ? fs.readFileSync(config, 'utf8') : '';
  const explicit = text.match(/build\s*:\s*\{[^}]*?\btarget\s*:\s*(\[[^\]]*\]|['"][^'"]+['"])/);
  if (explicit && !/baseline-widely-available/.test(explicit[1])) {
    const list = [...explicit[1].matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1]);
    const browsers = fromEsbuild(list);
    return browsers.length ? { query: browsers, source: `${path.basename(config)} build.target`, note: browsers.length < list.length ? `ignored targets that name no browser: ${list.filter((t) => !fromEsbuild([t]).length).join(', ')}` : null } : null;
  }
  let list = VITE_BASELINE_FALLBACK;
  try {
    const require = createRequire(path.join(projectDir, 'noop.js'));
    const dist = path.join(path.dirname(require.resolve('vite/package.json')), 'dist/node/chunks');
    for (const file of fs.readdirSync(dist)) {
      const m = fs.readFileSync(path.join(dist, file), 'utf8').match(/BASELINE_WIDELY_AVAILABLE_TARGET\s*=\s*\[([^\]]*)\]/);
      if (m) {
        list = [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
        break;
      }
    }
  } catch {
    // no Vite in the project: keep the fallback list
  }
  return { query: fromEsbuild(list), source: "Vite's default build target (baseline widely available)", note: null };
}

/**
 * The browsers a project ships to, from the most explicit source: --targets, its browserslist config, its Electron
 * version, its framework's default (Vite build target, Next.js), else browserslist `defaults`, reported as an assumption.
 */
export async function resolveTargets(projectDir, { targets } = {}) {
  const browserslist = (await import('browserslist')).default;
  const resolve = (query) => browserslist(query, { path: projectDir });
  if (targets) {
    return { source: '--targets', query: targets, browsers: resolve(targets), assumed: false };
  }
  const config = browserslist.loadConfig({ path: projectDir });
  if (config) {
    return { source: 'browserslist config', query: config, browsers: resolve(config), assumed: false };
  }
  const pkg = readJson(path.join(projectDir, 'package.json')) ?? {};
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  const electron = deps.electron?.match(/\d+/)?.[0];
  if (electron) {
    const query = `electron ${electron}.0`;
    try {
      return { source: `electron ${deps.electron} (package.json)`, query, browsers: resolve(query), assumed: false };
    } catch {
      // an Electron newer than this browserslist knows: fall through to the next source, saying so
    }
  }
  if (deps.next) {
    return { source: "Next.js's default browser support", query: NEXT_DEFAULT, browsers: resolve(NEXT_DEFAULT), assumed: false };
  }
  if (deps.vite) {
    const vite = viteTarget(projectDir);
    if (vite?.query.length) {
      return { source: vite.source, query: vite.query, browsers: resolve(vite.query), assumed: false, ...(vite.note ? { note: vite.note } : {}) };
    }
  }
  return { source: 'browserslist defaults', query: 'defaults', browsers: resolve('defaults'), assumed: true, note: 'no targets found — assumed browserslist defaults; pass --targets or add a browserslist config' };
}
