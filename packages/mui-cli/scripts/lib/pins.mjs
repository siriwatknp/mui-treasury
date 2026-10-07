import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const ROOT = path.resolve(fileURLToPath(import.meta.url), '../../..');

export const LIBRARIES = {
  material: {
    repo: 'https://github.com/mui/material-ui.git',
    dir: 'material-ui',
    probePackage: '@mui/material',
    required: true,
    sparse: ['packages/mui-material/src', 'packages/mui-system/src', 'docs/data/material'],
  },
  x: {
    repo: 'https://github.com/mui/mui-x.git',
    dir: 'mui-x',
    probePackage: '@mui/x-data-grid',
    required: false,
    sparse: [
      'packages/x-data-grid/src',
      'packages/x-date-pickers/src',
      'packages/x-charts/src',
      'packages/x-tree-view/src',
      'docs/data',
    ],
  },
};

export const tagFor = (version) => `v${version}`;

export function readPins(root = ROOT) {
  return JSON.parse(fs.readFileSync(path.join(root, 'versions.json'), 'utf8'));
}

export function vendorPath(lib, version, root = ROOT) {
  return path.join(root, 'vendor', `${LIBRARIES[lib].dir}@${version}`);
}

export function vendorTag(dir) {
  if (!fs.existsSync(dir)) {
    return null;
  }
  const tags = execFileSync('git', ['-C', dir, 'tag', '--points-at', 'HEAD'], { encoding: 'utf8' });
  return tags.split('\n').find((t) => /^v\d/.test(t)) ?? null;
}

export function installedVersion(pkgName, root = ROOT) {
  try {
    return createRequire(pathToFileURL(path.join(root, 'package.json')))(`${pkgName}/package.json`).version;
  } catch {
    return null;
  }
}

/**
 * @param {Record<string, string>} pins
 * @param {Record<string, { vendorTag: string | null, installed: string | null }>} observed
 */
export function comparePins(pins, observed) {
  const failures = [];
  const notes = [];
  for (const [lib, version] of Object.entries(pins)) {
    const spec = LIBRARIES[lib];
    if (!spec) {
      failures.push(`versions.json: unknown library "${lib}"`);
      continue;
    }
    const { vendorTag: tag, installed } = observed[lib];
    if (tag !== tagFor(version)) {
      failures.push(`${lib}: vendor is ${tag ?? 'missing'}, pin is ${tagFor(version)} — run \`pnpm vendor\``);
    }
    if (installed === null && !spec.required) {
      notes.push(`${lib}: ${spec.probePackage} not installed — skipped`);
    } else if (installed !== version) {
      failures.push(`${lib}: installed ${spec.probePackage}@${installed ?? 'missing'}, pin is ${version}`);
    }
  }
  return { failures, notes };
}
