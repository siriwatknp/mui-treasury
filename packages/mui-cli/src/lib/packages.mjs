import { createRequire } from 'node:module';

const packageOf = (spec) => (spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0]);

/** Packages a module's source imports that can't be resolved from `resolveFrom`. */
export function missingPackages(source, resolveFrom) {
  const require = createRequire(resolveFrom);
  const specs = [...source.matchAll(/(?:from\s+|import\s+)'([^'.][^']*)'/g)].map((m) => m[1]);
  return [...new Set(specs.map(packageOf))].filter((pkg) => {
    try {
      require.resolve(`${pkg}/package.json`);
      return false;
    } catch {
      try {
        require.resolve(pkg);
        return false;
      } catch {
        return true;
      }
    }
  });
}
