import { fetchRegistryItem, fetchRegistryItemByUrl } from '@/registry/fetcher';
import type { RegistryItem, RegistryItemFile } from '@/registry/schema';

export interface ResolvedRegistryTree {
  items: RegistryItem[];
  dependencies: string[];
  devDependencies: string[];
  files: RegistryItemFile[];
}

export async function resolveRegistryTree(
  names: string[],
  registryUrl: string,
): Promise<ResolvedRegistryTree> {
  const visited = new Set<string>();
  const items: RegistryItem[] = [];

  async function resolve(nameOrUrl: string) {
    const trackingKey = nameOrUrl.startsWith('http')
      ? nameOrUrl
      : `${registryUrl}/${nameOrUrl}.json`;

    if (visited.has(trackingKey)) return;
    visited.add(trackingKey);

    const item = nameOrUrl.startsWith('http')
      ? await fetchRegistryItemByUrl(nameOrUrl)
      : await fetchRegistryItem(nameOrUrl, registryUrl);

    // Resolve transitive dependencies first (DFS post-order)
    if (item.registryDependencies?.length) {
      for (const dep of item.registryDependencies) {
        if (dep.startsWith('http')) {
          await resolve(dep);
        } else {
          // Extract name from URL-like dep or use as bare name
          const match = dep.match(/\/([^/]+)\.json$/);
          const name = match ? match[1] : dep;
          await resolve(name);
        }
      }
    }

    items.push(item);
  }

  const uniqueNames = [...new Set(names)];
  for (const name of uniqueNames) {
    await resolve(name);
  }

  // Collect and deduplicate
  const allDeps = new Set<string>();
  const allDevDeps = new Set<string>();
  const fileMap = new Map<string, RegistryItemFile>();

  for (const item of items) {
    item.dependencies?.forEach((d) => allDeps.add(d));
    item.devDependencies?.forEach((d) => allDevDeps.add(d));
    item.files?.forEach((f) => {
      fileMap.set(f.target, f);
    });
  }

  return {
    items,
    dependencies: [...allDeps],
    devDependencies: [...allDevDeps],
    files: [...fileMap.values()],
  };
}
