import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { builtWith } from '../lib/data.mjs';
import { jsonOut } from '../lib/json.mjs';
import { LIB_PACKAGES, compareVersions } from '../lib/versionCheck.mjs';

const PKG_ROOT = path.resolve(fileURLToPath(import.meta.url), '../../..');
const requireFromCli = createRequire(import.meta.url);

const MEASURE_STACK = ['vite', '@vitejs/plugin-react', 'react', 'react-dom', '@emotion/react', '@emotion/styled', 'playwright-core'];

function versionOf(pkg) {
  try {
    return JSON.parse(fs.readFileSync(requireFromCli.resolve(`${pkg}/package.json`), 'utf8')).version;
  } catch {
    try {
      let dir = path.dirname(requireFromCli.resolve(pkg));
      while (dir !== path.dirname(dir)) {
        const pj = path.join(dir, 'package.json');
        if (fs.existsSync(pj)) {
          const parsed = JSON.parse(fs.readFileSync(pj, 'utf8'));
          if (parsed.name === pkg) {
            return parsed.version;
          }
        }
        dir = path.dirname(dir);
      }
    } catch {
      /* not installed */
    }
    return null;
  }
}

function chromeStatus() {
  if (process.platform === 'darwin') {
    return fs.existsSync('/Applications/Google Chrome.app') ? 'ok' : 'missing';
  }
  if (process.platform === 'linux') {
    const dirs = (process.env.PATH ?? '').split(':');
    const found = ['google-chrome', 'google-chrome-stable'].some((bin) => dirs.some((d) => d && fs.existsSync(path.join(d, bin))));
    return found ? 'ok' : 'missing';
  }
  return 'unknown';
}

const MARKS = { ok: '✓', warn: '⚠', error: '✗', note: '·' };

export async function run(program) {
  const cliVersion = JSON.parse(fs.readFileSync(path.join(PKG_ROOT, 'package.json'), 'utf8')).version;
  const installed = Object.fromEntries(
    Object.entries(LIB_PACKAGES).map(([lib, pkgs]) => [lib, pkgs.map(versionOf).find(Boolean) ?? null]),
  );
  const versions = compareVersions(builtWith(), installed);
  const missingMeasure = MEASURE_STACK.filter((p) => versionOf(p) === null);
  const chrome = chromeStatus();
  const measure = {
    ok: missingMeasure.length === 0 && chrome !== 'missing',
    warn: chrome === 'unknown' ? 'could not detect Google Chrome on this platform — --measure needs it installed' : null,
    fix: missingMeasure.length
      ? `npm i -D ${missingMeasure.join(' ')}${chrome === 'missing' ? '  (and install Google Chrome)' : ''}`
      : chrome === 'missing'
        ? 'install Google Chrome'
        : null,
  };
  const broken = versions.some((v) => v.level === 'error') || !measure.ok;

  if (program.opts().json) {
    jsonOut('doctor', { cli: cliVersion, node: process.versions.node, builtWith: builtWith(), installed, versions, chrome, measure });
    process.exitCode = broken ? 1 : 0;
    return;
  }
  console.log(`mui-cli ${cliVersion} · node ${process.versions.node} · data built with ${JSON.stringify(builtWith())}\n`);
  for (const v of versions) {
    console.log(`${MARKS[v.level]} ${v.message}`);
  }
  console.log(`${measure.ok ? '✓' : '✗'} --measure (render + verify in Chrome)`);
  if (measure.warn) {
    console.log(`    ⚠ ${measure.warn}`);
  }
  if (measure.fix) {
    console.log(`    fix: ${measure.fix}`);
  }
  console.log(broken ? '\nfix the ✗ items above, then re-run `mui doctor`' : '\nready');
  process.exitCode = broken ? 1 : 0;
}
