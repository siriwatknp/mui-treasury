import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { LIBRARIES, readPins, tagFor, vendorPath, vendorTag } from './lib/pins.mjs';

const git = (args) => execFileSync('git', args, { stdio: 'inherit' });

for (const [lib, version] of Object.entries(readPins())) {
  const spec = LIBRARIES[lib];
  const dir = vendorPath(lib, version);
  const tag = tagFor(version);
  if (vendorTag(dir) === tag) {
    console.log(`${lib}: ${tag} already vendored`);
    continue;
  }
  fs.rmSync(dir, { recursive: true, force: true });
  console.log(`${lib}: cloning ${spec.repo} at ${tag}`);
  git(['-c', 'advice.detachedHead=false', 'clone', '--quiet', '--depth', '1', '--branch', tag, '--filter=blob:none', '--sparse', spec.repo, dir]);
  git(['-C', dir, 'sparse-checkout', 'set', ...spec.sparse]);
  console.log(`${lib}: ${tag} → ${dir}`);
}
