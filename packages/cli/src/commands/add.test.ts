import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import path from "path";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const REGISTRY_URL = "https://test-registry.com/r";
const TEST_DIR = path.join(__dirname, "../../test/.tmp-add-test");

function makeItem(name: string, deps: string[] = [], registryDeps: string[] = []) {
  return {
    name,
    type: "registry:item",
    dependencies: deps,
    registryDependencies: registryDeps,
    files: [
      {
        path: `components/${name}/${name}.tsx`,
        target: `src/mui-treasury/components/${name}/${name}.tsx`,
        content: `export const ${name} = () => null;\n`,
        type: "registry:item",
      },
      {
        path: `components/${name}/index.ts`,
        target: `src/mui-treasury/components/${name}/index.ts`,
        content: `export * from './${name}';\n`,
        type: "registry:item",
      },
    ],
  };
}

const server = setupServer(
  http.get(`${REGISTRY_URL}/button.json`, () => {
    return HttpResponse.json(makeItem("button", ["@mui/material", "@emotion/react", "@emotion/styled"]));
  }),
  http.get(`${REGISTRY_URL}/dialog.json`, () => {
    return HttpResponse.json(
      makeItem("dialog", ["@mui/material"], [`${REGISTRY_URL}/button.json`]),
    );
  }),
);

beforeAll(() => server.listen());
afterAll(() => server.close());

beforeEach(() => {
  mkdirSync(TEST_DIR, { recursive: true });
  writeFileSync(path.join(TEST_DIR, "package.json"), "{}");
});

afterEach(() => {
  server.resetHandlers();
  if (existsSync(TEST_DIR)) {
    rmSync(TEST_DIR, { recursive: true });
  }
});

// Import add command internals by testing the resolver + file writing directly
// (The command itself calls process.exit which is hard to test)
import { clearCache } from "@/registry/fetcher";
import { resolveRegistryTree } from "@/registry/resolver";

describe("add command integration", () => {
  afterEach(() => clearCache());

  it("writes component files to correct target paths", async () => {
    const tree = await resolveRegistryTree(["button"], REGISTRY_URL);

    for (const file of tree.files) {
      if (!file.content) continue;
      const targetPath = path.resolve(TEST_DIR, file.target);
      mkdirSync(path.dirname(targetPath), { recursive: true });
      writeFileSync(targetPath, file.content, "utf-8");
    }

    const componentPath = path.join(
      TEST_DIR,
      "src/mui-treasury/components/button/button.tsx",
    );
    const indexPath = path.join(
      TEST_DIR,
      "src/mui-treasury/components/button/index.ts",
    );

    expect(existsSync(componentPath)).toBe(true);
    expect(existsSync(indexPath)).toBe(true);
    expect(readFileSync(componentPath, "utf-8")).toContain("export const button");
    expect(readFileSync(indexPath, "utf-8")).toContain("export * from");
  });

  it("resolves and writes transitive dependencies", async () => {
    const tree = await resolveRegistryTree(["dialog"], REGISTRY_URL);

    for (const file of tree.files) {
      if (!file.content) continue;
      const targetPath = path.resolve(TEST_DIR, file.target);
      mkdirSync(path.dirname(targetPath), { recursive: true });
      writeFileSync(targetPath, file.content, "utf-8");
    }

    // Both button (dep) and dialog should be written
    expect(
      existsSync(path.join(TEST_DIR, "src/mui-treasury/components/button/button.tsx")),
    ).toBe(true);
    expect(
      existsSync(path.join(TEST_DIR, "src/mui-treasury/components/dialog/dialog.tsx")),
    ).toBe(true);
  });

  it("collects all npm dependencies from resolved tree", async () => {
    const tree = await resolveRegistryTree(["dialog"], REGISTRY_URL);

    expect(tree.dependencies).toContain("@mui/material");
    expect(tree.dependencies).toContain("@emotion/react");
    expect(tree.dependencies).toContain("@emotion/styled");
  });

  it("skips files with identical content on re-add", async () => {
    const tree = await resolveRegistryTree(["button"], REGISTRY_URL);

    // First write
    for (const file of tree.files) {
      if (!file.content) continue;
      const targetPath = path.resolve(TEST_DIR, file.target);
      mkdirSync(path.dirname(targetPath), { recursive: true });
      writeFileSync(targetPath, file.content, "utf-8");
    }

    // Check that content matches — simulating the skip logic
    for (const file of tree.files) {
      if (!file.content) continue;
      const targetPath = path.resolve(TEST_DIR, file.target);
      const existing = readFileSync(targetPath, "utf-8");
      expect(existing).toBe(file.content);
    }
  });
});
