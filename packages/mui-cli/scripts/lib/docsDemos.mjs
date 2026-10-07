import fs from 'node:fs';
import path from 'node:path';

/** Docs demos by the Material UI components they import: Mui<Name> → ['<slug>/<Demo>']. */
export function demoIndex(docs) {
  const byImport = new Map();
  for (const slug of fs.readdirSync(docs)) {
    const dir = path.join(docs, slug);
    if (!fs.statSync(dir).isDirectory()) {
      continue;
    }
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.tsx'))) {
      const src = fs.readFileSync(path.join(dir, f), 'utf8');
      if (!/export default/.test(src)) {
        continue;
      }
      const names = new Set([...src.matchAll(/from '@mui\/material\/(\w+)'/g)].map((m) => m[1]));
      for (const m of src.matchAll(/import \{([^}]+)\} from '@mui\/material'/g)) {
        m[1].split(',').forEach((n) => names.add(n.trim().split(' ')[0]));
      }
      for (const n of names) {
        byImport.set(`Mui${n}`, [...(byImport.get(`Mui${n}`) ?? []), `${slug}/${f.replace(/\.tsx$/, '')}`]);
      }
    }
  }
  return byImport;
}

/** A demo needing only react + @mui/material renders in any project. */
export const coreOnly = (docs, demo) => [...fs.readFileSync(path.join(docs, `${demo}.tsx`), 'utf8').matchAll(/(?:from\s+|import\s+)'([^'.][^']*)'/g)].every(([, m]) => /^(react|react-dom|@mui\/material)(\/|$)/.test(m));

/** Copy a demo and the files it imports relatively into `outDir`, so the shipped package can render it. */
export function shipDemo(docs, outDir, demo, seen = new Set()) {
  const [slug, name] = demo.split('/');
  const copy = (file) => {
    if (seen.has(file)) {
      return;
    }
    seen.add(file);
    const src = fs.readFileSync(path.join(docs, slug, file), 'utf8');
    fs.mkdirSync(path.join(outDir, slug), { recursive: true });
    fs.writeFileSync(path.join(outDir, slug, file), src);
    for (const [, spec] of src.matchAll(/(?:from\s+|import\s+)'(\.\/[^']+)'/g)) {
      const base = spec.slice(2);
      const hit = ['tsx', 'ts', 'js'].map((ext) => `${base}.${ext}`).find((f) => fs.existsSync(path.join(docs, slug, f)));
      if (hit) {
        copy(hit);
      }
    }
  };
  copy(`${name}.tsx`);
}
