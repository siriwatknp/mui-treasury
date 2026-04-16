import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';

import { clearCache } from './fetcher';
import { resolveRegistryTree } from './resolver';

const REGISTRY_URL = 'https://test-registry.com/r';

function makeItem(
  name: string,
  deps: string[] = [],
  registryDeps: string[] = [],
) {
  return {
    name,
    type: 'registry:item',
    dependencies: deps,
    registryDependencies: registryDeps,
    files: [
      {
        path: `components/${name}/${name}.tsx`,
        target: `src/mui-treasury/components/${name}/${name}.tsx`,
        content: `export const ${name} = () => null;`,
        type: 'registry:item',
      },
      {
        path: `components/${name}/index.ts`,
        target: `src/mui-treasury/components/${name}/index.ts`,
        content: `export * from './${name}';`,
        type: 'registry:item',
      },
    ],
  };
}

const server = setupServer(
  http.get(`${REGISTRY_URL}/button.json`, () => {
    return HttpResponse.json(makeItem('button', ['@mui/material']));
  }),
  http.get(`${REGISTRY_URL}/dialog.json`, () => {
    return HttpResponse.json(
      makeItem('dialog', ['@mui/material'], [`${REGISTRY_URL}/button.json`]),
    );
  }),
  http.get(`${REGISTRY_URL}/form.json`, () => {
    return HttpResponse.json(
      makeItem(
        'form',
        ['@mui/material', 'zod'],
        [`${REGISTRY_URL}/button.json`, `${REGISTRY_URL}/dialog.json`],
      ),
    );
  }),
  http.get(`${REGISTRY_URL}/standalone.json`, () => {
    return HttpResponse.json(makeItem('standalone', ['lucide-react']));
  }),
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  clearCache();
});
afterAll(() => server.close());

describe('resolveRegistryTree', () => {
  it('resolves a single item with no dependencies', async () => {
    const tree = await resolveRegistryTree(['button'], REGISTRY_URL);

    expect(tree.items).toHaveLength(1);
    expect(tree.items[0].name).toBe('button');
    expect(tree.dependencies).toEqual(['@mui/material']);
    expect(tree.files).toHaveLength(2);
  });

  it('resolves transitive dependencies (DFS post-order)', async () => {
    const tree = await resolveRegistryTree(['dialog'], REGISTRY_URL);

    expect(tree.items).toHaveLength(2);
    // button comes before dialog (dependency first)
    expect(tree.items[0].name).toBe('button');
    expect(tree.items[1].name).toBe('dialog');
  });

  it('resolves deep transitive dependencies', async () => {
    const tree = await resolveRegistryTree(['form'], REGISTRY_URL);

    // form depends on button + dialog, dialog depends on button
    expect(tree.items).toHaveLength(3);
    expect(tree.items[0].name).toBe('button');
    expect(tree.items[1].name).toBe('dialog');
    expect(tree.items[2].name).toBe('form');
  });

  it('deduplicates items visited via multiple paths', async () => {
    const tree = await resolveRegistryTree(['form'], REGISTRY_URL);

    // button should appear only once even though both form and dialog depend on it
    const buttonItems = tree.items.filter((i) => i.name === 'button');
    expect(buttonItems).toHaveLength(1);
  });

  it('deduplicates dependencies', async () => {
    const tree = await resolveRegistryTree(['form'], REGISTRY_URL);

    // @mui/material appears in all three items but should be listed once
    const muiDeps = tree.dependencies.filter((d) => d === '@mui/material');
    expect(muiDeps).toHaveLength(1);
    expect(tree.dependencies).toContain('zod');
  });

  it('handles multiple root items', async () => {
    const tree = await resolveRegistryTree(
      ['button', 'standalone'],
      REGISTRY_URL,
    );

    expect(tree.items).toHaveLength(2);
    expect(tree.dependencies).toContain('@mui/material');
    expect(tree.dependencies).toContain('lucide-react');
  });

  it('deduplicates duplicate root items', async () => {
    const tree = await resolveRegistryTree(['button', 'button'], REGISTRY_URL);

    expect(tree.items).toHaveLength(1);
  });

  it('deduplicates files by target path', async () => {
    const tree = await resolveRegistryTree(['form'], REGISTRY_URL);

    const targets = tree.files.map((f) => f.target);
    const uniqueTargets = [...new Set(targets)];
    expect(targets.length).toBe(uniqueTargets.length);
  });

  it('throws on non-existent item', async () => {
    server.use(
      http.get(`${REGISTRY_URL}/does-not-exist.json`, () => {
        return new HttpResponse(null, { status: 404 });
      }),
    );

    await expect(
      resolveRegistryTree(['does-not-exist'], REGISTRY_URL),
    ).rejects.toThrow('was not found');
  });
});
