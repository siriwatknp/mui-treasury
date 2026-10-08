/**
 * @file Node-side render driver. withCapture hands a callback `run(cfg)` + screenshot helpers bound to one page
 * of the harness. By default the page comes from a warm background render server (Vite + Chrome stay up for a few
 * idle minutes, so later calls skip the ~1.3s boot); MUI_CLI_NO_SERVER=1, or any server failure, boots in-process.
 */
import { spawn } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { HARNESS_DIR as HARNESS, bootEngine, helpersFor, runOn } from './renderEngine.mjs';
import { xStyledProducts } from './xStyled.mjs';

/** The harness (Vite root) dir — demo modules must live here so plugin-react transforms their JSX. */
export const HARNESS_DIR = HARNESS;

const PKG_ROOT = path.resolve(fileURLToPath(import.meta.url), '../../..');
const SERVER_ENTRY = path.join(PKG_ROOT, 'src/lib/renderServer.mjs');
const IDLE_MS = Number(process.env.MUI_CLI_SERVER_IDLE_MS ?? 5 * 60 * 1000);

// the server's own code, the harness it serves, and what decides Vite's up-front bundle (a later re-bundle splits the
// theme context): an edit to any of them (development, a data sync) starts a fresh server
const SERVER_CODE = ['src/lib/renderServer.mjs', 'src/lib/renderEngine.mjs', 'harness/capture-main.jsx', 'harness/annotations.jsx', 'harness/vite.config.mjs', 'data/material/renders.json', 'data/material/graph.json'];
const serverCode = () => [...SERVER_CODE, ...xStyledProducts().flatMap((p) => [`data/x/${p}/renders.json`, `data/x/${p}/graph.json`])];

function serverKey(hostRoot) {
  const version = JSON.parse(fs.readFileSync(path.join(PKG_ROOT, 'package.json'), 'utf8')).version;
  const code = serverCode().map((f) => fs.statSync(path.join(PKG_ROOT, f)).mtimeMs).join(',');
  return crypto.createHash('sha1').update(`${fs.realpathSync(PKG_ROOT)}|${version}|${hostRoot}|${code}`).digest('hex').slice(0, 12);
}

const lockPath = (key) => path.join(os.tmpdir(), 'mui-cli', `render-${key}.json`);

async function call(port, op, body, timeoutMs = 120000) {
  const res = await fetch(`http://127.0.0.1:${port}/${op}`, { method: 'POST', body: JSON.stringify(body ?? {}), signal: AbortSignal.timeout(timeoutMs) });
  const data = await res.json();
  if (!data.ok) {
    throw new Error(data.error);
  }
  return data.result;
}

async function readLiveLock(key) {
  try {
    const lock = JSON.parse(fs.readFileSync(lockPath(key), 'utf8'));
    const status = await call(lock.port, 'status', {}, 1000);
    return status.key === key ? lock : null;
  } catch {
    return null;
  }
}

const covers = (dirs, dir) => dirs.some((d) => dir === d || dir.startsWith(`${d}${path.sep}`));

/** A warm server whose Vite may read every dir in `themeDirs`: reuse it, restart it wider, or start one. */
async function ensureServer(hostRoot, wanted) {
  const key = serverKey(hostRoot);
  const live = await readLiveLock(key);
  if (live && wanted.every((dir) => covers(live.themeDirs, dir))) {
    return { port: live.port, warm: true };
  }
  if (live) {
    await call(live.port, 'stop', {}, 2000).catch(() => {});
    await new Promise((r) => setTimeout(r, 150));
  }
  const themeDirs = [...new Set([...(live?.themeDirs ?? []), ...wanted])];
  fs.mkdirSync(path.dirname(lockPath(key)), { recursive: true });
  fs.rmSync(lockPath(key), { force: true });
  spawn(process.execPath, [SERVER_ENTRY, JSON.stringify({ key, lockFile: lockPath(key), hostRoot, themeDirs, idleMs: IDLE_MS })], {
    detached: true,
    stdio: 'ignore',
    cwd: hostRoot,
  }).unref();
  for (let i = 0; i < 300; i += 1) {
    await new Promise((r) => setTimeout(r, 100));
    const lock = await readLiveLock(key);
    if (lock) {
      return { port: lock.port, warm: false };
    }
  }
  throw new Error('render server did not start');
}

/** This project's warm render server, or null. */
export async function renderServerStatus(hostRoot = process.cwd()) {
  const live = await readLiveLock(serverKey(hostRoot));
  if (!live) {
    return null;
  }
  return { running: true, ...(await call(live.port, 'status', {}, 1000)), idleMs: IDLE_MS };
}

/** Stop this project's warm render server, if one is up. */
export async function stopRenderServer(hostRoot = process.cwd()) {
  const live = await readLiveLock(serverKey(hostRoot));
  if (!live) {
    return false;
  }
  await call(live.port, 'stop', {}, 2000).catch(() => {});
  for (let i = 0; i < 50 && (await readLiveLock(serverKey(hostRoot))); i += 1) {
    await new Promise((r) => setTimeout(r, 100));
  }
  return true;
}

/**
 * @param {(run: (cfg: object) => Promise<any>, helpers?: { screenshotElement: Function, screenshotDrawn: Function, forcePseudo: Function }) => Promise<any>} fn
 * @param {{ themeFile?: string, colorScheme?: 'light' | 'dark', scale?: number, width?: number }} [options]
 */
let versionNoted = false;
/** Once per run: say when the project's Material UI is not the version this CLI's data was built from. */
async function noteVersion(hostRoot, note) {
  if (versionNoted) {
    return;
  }
  versionNoted = true;
  try {
    const { createRequire } = await import('node:module');
    const { builtWith } = await import('./data.mjs');
    const { compareVersions } = await import('./versionCheck.mjs');
    const have = JSON.parse(fs.readFileSync(createRequire(path.join(hostRoot, 'package.json')).resolve('@mui/material/package.json'), 'utf8')).version;
    const material = compareVersions(builtWith(), { material: have }).find((v) => v.lib === 'material');
    if (material.level !== 'ok') {
      note('⚠', `${material.message} — \`mui doctor\` for details`);
    }
  } catch {
    // no @mui/material to compare: the render itself reports it
  }
}

export async function withCapture(fn, { themeFile, otherThemeFiles = [], fonts = [], colorScheme, scale = 1, width = 900 } = {}) {
  const { step, note } = await import('./progress.mjs');
  const hostRoot = process.cwd();
  await noteVersion(hostRoot, note);
  const themeDirs = [...new Set([themeFile, ...otherThemeFiles, ...fonts.map((f) => f.file)].filter(Boolean).map((f) => path.dirname(path.resolve(f))))];
  const themeUrl = themeFile ? `/@fs/${path.resolve(themeFile)}` : undefined;
  // always sent, empty too: a reused page drops the fonts an earlier command loaded
  const fontUrls = fonts.map((f) => (f.kind === 'css' ? { css: `/@fs/${f.file}` } : { family: f.family, url: `/@fs/${f.file}` }));
  const prepare = (rawCfg) => {
    const cfg = { ...rawCfg };
    // themeFile: a path for this render only, null for vanilla, absent for the session theme
    const url = cfg.themeFile === null ? undefined : cfg.themeFile ? `/@fs/${path.resolve(cfg.themeFile)}` : themeUrl;
    delete cfg.themeFile;
    return { ...cfg, themeUrl: url, fonts: fontUrls };
  };
  const pageOpts = { colorScheme: colorScheme ?? null, scale, width };
  if (themeFile) {
    note('🎨', `rendering under your theme: ${themeFile}`);
  }

  if (!process.env.MUI_CLI_NO_SERVER) {
    let server = null;
    try {
      const starting = step('⚡', 'render server…');
      server = await ensureServer(hostRoot, themeDirs);
      starting.done(server.warm ? 'render server warm' : 'render server started');
    } catch (err) {
      note('↩', `render server unavailable (${err.message}) — rendering in-process`);
    }
    let opened = null;
    if (server) {
      opened = await call(server.port, 'open', pageOpts).catch(async () => {
        server = await ensureServer(hostRoot, themeDirs).catch(() => null);
        return server ? call(server.port, 'open', pageOpts).catch(() => null) : null;
      });
    }
    if (server && opened) {
      const { id } = opened;
      const helper = (name) => (...args) => call(server.port, 'helper', { id, name, args });
      try {
        return await fn((rawCfg) => call(server.port, 'run', { id, cfg: prepare(rawCfg) }), {
          screenshotElement: helper('screenshotElement'),
          screenshotDrawn: helper('screenshotDrawn'),
          forcePseudo: helper('forcePseudo'),
          interact: helper('interact'),
          renderSheet: helper('renderSheet'),
        });
      } finally {
        await call(server.port, 'close', { id }).catch(() => {});
      }
    }
  }

  const boot = step('🚀', 'starting the render harness (Vite + Chrome)…');
  const engine = await bootEngine({ hostRoot, themeDirs });
  boot.done('harness up');
  const session = await engine.acquire(pageOpts);
  try {
    return await fn((rawCfg) => runOn(session.page, prepare(rawCfg)), helpersFor(session.page));
  } finally {
    await engine.close();
  }
}
