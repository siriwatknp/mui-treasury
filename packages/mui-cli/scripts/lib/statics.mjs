import fs from 'node:fs';
import path from 'node:path';

const STATIC = /['"`(](\/static\/[^'"`)\s]+)/g;

const sources = (dir) =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? sources(path.join(dir, e.name)) : /\.[jt]sx?$/.test(e.name) ? [path.join(dir, e.name)] : []))
    : [];

/**
 * Ship the docs' static files the shipped demos reference (`/static/images/avatar/1.jpg`), copied from the vendored
 * docs/public, so a page rendering the demos can serve them. A path built at runtime (`avatar/${n}.jpg`) ships its folder.
 */
export function shipStatics(publicDir, demoDirs, outDir) {
  const wanted = new Set();
  for (const file of demoDirs.flatMap(sources)) {
    for (const [, ref] of fs.readFileSync(file, 'utf8').matchAll(STATIC)) {
      wanted.add(ref.includes('${') ? `${path.posix.dirname(ref.slice(0, ref.indexOf('${')) + 'x')}/` : ref);
    }
  }
  fs.rmSync(outDir, { recursive: true, force: true });
  const copied = [];
  for (const ref of [...wanted].sort()) {
    const from = path.join(publicDir, ref);
    if (!fs.existsSync(from)) {
      continue;
    }
    const to = path.join(outDir, ref);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.cpSync(from, to, { recursive: true });
    copied.push(ref);
  }
  return copied;
}
