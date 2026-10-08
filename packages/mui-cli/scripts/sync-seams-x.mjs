import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { X_STYLED, xDataDir } from '../src/lib/xStyled.mjs';
import { ROOT, installedVersion, readPins } from './lib/pins.mjs';

// `pnpm sync-seams-x [product…]` — style rows of MUI X products, extracted by running their style code like sync-seams
const HERE = path.dirname(fileURLToPath(import.meta.url));
const products = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(X_STYLED);

for (const product of products) {
  const { package: pkg, tiers = [] } = X_STYLED[product] ?? {};
  if (!pkg) {
    throw new Error(`no MUI X product "${product}" — one of ${Object.keys(X_STYLED).join(', ')}`);
  }
  const pin = readPins().x;
  for (const required of [pkg, ...tiers.filter((tier) => installedVersion(tier))]) {
    if (installedVersion(required) !== pin) {
      throw new Error(`${required}@${installedVersion(required) ?? 'missing'} is installed, versions.json pins MUI X ${pin}`);
    }
  }
  const missingTiers = tiers.filter((tier) => !installedVersion(tier));
  if (missingTiers.length) {
    console.warn(`sync-seams-x ${product}: ${missingTiers.join(', ')} not installed — their slots are left out`);
  }
  const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'seams-x-')), 'extracted.json');
  execFileSync(process.execPath, ['--import', path.join(HERE, 'lib/extract/register.mjs'), path.join(HERE, 'lib/extract/extract.mjs'), ROOT, tmp, product], {
    stdio: 'inherit',
    env: { ...process.env, MUI_CLI_EXTRACT_X: '1' },
  });
  const data = JSON.parse(fs.readFileSync(tmp, 'utf8'));
  fs.rmSync(path.dirname(tmp), { recursive: true, force: true });
  if (data.$source.x !== pin) {
    throw new Error(`extracted ${pkg}@${data.$source.x} but versions.json pins ${pin}`);
  }

  const dir = xDataDir(product);
  const out = path.join(dir, 'seams.json');
  const previous = fs.existsSync(out) ? new Map(JSON.parse(fs.readFileSync(out, 'utf8')).rows.map((r) => [r.id, r])) : new Map();
  for (const row of data.rows) {
    const old = previous.get(row.id);
    row.verified = old && JSON.stringify(old.value) === JSON.stringify(row.value) ? old.verified ?? null : null;
  }
  const { graph, components, ...seams } = data;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(out, `${JSON.stringify(seams)}\n`);
  fs.writeFileSync(path.join(dir, 'graph.json'), `${JSON.stringify({ $source: data.$source, components, graph }, null, 2)}\n`);
  console.log(`sync-seams-x → data/x/${product}/seams.json (${pkg}@${data.$source.x}): ${data.rows.length} rows, ${components.join(', ')}`);
}
