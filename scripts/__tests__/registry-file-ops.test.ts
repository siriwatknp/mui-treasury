import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { vol } from "memfs";
import {
  scanRegistryFiles,
  findAllRelatedFiles,
  findMatchingFiles,
  getAllRegistryItems,
} from "../lib/registry-file-ops";

// Mock fs module with memfs
vi.mock("fs", async () => {
  const memfs = await import("memfs");
  return memfs.fs;
});

describe("scanRegistryFiles", () => {
  beforeEach(() => {
    vol.reset();
  });

  afterEach(() => {
    vol.reset();
  });

  it("should find all .ts and .tsx files recursively", () => {
    vol.fromJSON({
      "/registry/components/button/button.tsx": "",
      "/registry/components/button/types.ts": "",
      "/registry/hooks/use-state.ts": "",
      "/registry/blocks/header/header.tsx": "",
    });

    const files = scanRegistryFiles("/registry");

    expect(files).toHaveLength(4);
    expect(files).toContain("/registry/components/button/button.tsx");
    expect(files).toContain("/registry/components/button/types.ts");
  });

  it("should ignore non-TypeScript files", () => {
    vol.fromJSON({
      "/registry/component.tsx": "",
      "/registry/readme.md": "",
      "/registry/config.json": "",
      "/registry/styles.css": "",
    });

    const files = scanRegistryFiles("/registry");

    expect(files).toHaveLength(1);
    expect(files[0]).toContain("component.tsx");
  });

  it("should return empty array for empty directory", () => {
    vol.fromJSON({ "/empty": null });

    const files = scanRegistryFiles("/empty");

    expect(files).toEqual([]);
  });

  it("should return empty array for non-existent directory", () => {
    const files = scanRegistryFiles("/does-not-exist");

    expect(files).toEqual([]);
  });

  it("should use process.cwd()/registry when dir is null", () => {
    const originalCwd = process.cwd;
    process.cwd = vi.fn(() => "/test");

    vol.fromJSON({
      "/test/registry/component.tsx": "",
    });

    const files = scanRegistryFiles(null);

    expect(files).toHaveLength(1);

    process.cwd = originalCwd;
  });
});

describe("findMatchingFiles", () => {
  beforeEach(() => {
    vol.reset();
    // Mock process.cwd
    process.cwd = vi.fn(() => "/project");
  });

  afterEach(() => {
    vol.reset();
    vi.restoreAllMocks();
  });

  it("should find file matching exact name", () => {
    vol.fromJSON({
      "/project/registry/components/button/button.tsx": "",
    });

    const matches = findMatchingFiles("button");

    expect(matches).toHaveLength(1);
    expect(matches[0].name).toBe("button");
  });

  it("should find index.ts/tsx in directory matching name", () => {
    vol.fromJSON({
      "/project/registry/hooks/use-theme/index.ts": "",
    });

    const matches = findMatchingFiles("use-theme");

    expect(matches).toHaveLength(1);
    expect(matches[0].relativePath).toContain("use-theme/index.ts");
  });

  it("should prefer .meta.json file over source files", () => {
    vol.fromJSON({
      "/project/registry/components/button/button.tsx": "",
      "/project/registry/components/button/button.meta.json": "{}",
    });

    const matches = findMatchingFiles("button");

    expect(matches).toHaveLength(1);
    expect(matches[0].path).toContain(".meta.json");
  });

  it("should return empty array when name not found", () => {
    vol.fromJSON({
      "/project/registry/components/card/card.tsx": "",
    });

    const matches = findMatchingFiles("button");

    expect(matches).toEqual([]);
  });

  it("should find multiple files if name exists in different categories", () => {
    vol.fromJSON({
      "/project/registry/components/button/button.tsx": "",
      "/project/registry/blocks/button/button.tsx": "",
    });

    const matches = findMatchingFiles("button");

    expect(matches.length).toBeGreaterThan(1);
  });
});

describe("findAllRelatedFiles", () => {
  beforeEach(() => {
    vol.reset();
    process.cwd = vi.fn(() => "/project");
  });

  afterEach(() => {
    vol.reset();
    vi.restoreAllMocks();
  });

  it("should find all .ts/.tsx files in the same directory", () => {
    vol.fromJSON({
      "/project/registry/components/button/button.tsx": "",
      "/project/registry/components/button/button-group.tsx": "",
      "/project/registry/components/button/types.ts": "",
    });

    const files = findAllRelatedFiles(
      "/project/registry/components/button/button.tsx",
      "button",
    );

    expect(files).toHaveLength(3);
  });

  it("should exclude .demo.tsx files", () => {
    vol.fromJSON({
      "/project/registry/components/card/card.tsx": "",
      "/project/registry/components/card/card.demo.tsx": "",
    });

    const files = findAllRelatedFiles(
      "/project/registry/components/card/card.tsx",
      "card",
    );

    expect(files).toHaveLength(1);
    expect(files[0].path).toContain("card.tsx");
    expect(files[0].path).not.toContain(".demo.tsx");
  });

  it("should return single file when directory has only one file", () => {
    vol.fromJSON({
      "/project/registry/hooks/use-theme/index.ts": "",
    });

    const files = findAllRelatedFiles(
      "/project/registry/hooks/use-theme/index.ts",
      "use-theme",
    );

    expect(files).toHaveLength(1);
  });

  it("should return paths relative to registry root", () => {
    vol.fromJSON({
      "/project/registry/components/alert/alert.tsx": "",
    });

    const files = findAllRelatedFiles(
      "/project/registry/components/alert/alert.tsx",
      "alert",
    );

    expect(files[0].relativePath).toBe("components/alert/alert.tsx");
  });
});

describe("getAllRegistryItems", () => {
  beforeEach(() => {
    vol.reset();
    process.cwd = vi.fn(() => "/project");
  });

  afterEach(() => {
    vol.reset();
    vi.restoreAllMocks();
  });

  it("should return unique registry items from all categories", () => {
    vol.fromJSON({
      "/project/registry/components/button/button.tsx": "",
      "/project/registry/components/card/card.tsx": "",
      "/project/registry/hooks/use-theme/index.ts": "",
      "/project/registry/blocks/header/header.tsx": "",
    });

    const items = getAllRegistryItems();

    expect(items).toHaveLength(4);
    expect(items.map((i) => i.name)).toEqual(
      expect.arrayContaining(["button", "card", "use-theme", "header"]),
    );
  });

  it("should extract item name from path structure (second segment)", () => {
    vol.fromJSON({
      "/project/registry/themes/mui-plus/index.ts": "",
    });

    const items = getAllRegistryItems();

    expect(items[0].name).toBe("mui-plus");
  });

  it("should skip sub-files that do not match item name", () => {
    vol.fromJSON({
      "/project/registry/components/form/form.tsx": "",
      "/project/registry/components/form/form-input.tsx": "", // sub-file
      "/project/registry/components/form/types.ts": "", // sub-file
    });

    const items = getAllRegistryItems();

    expect(items).toHaveLength(1);
    expect(items[0].name).toBe("form");
  });

  it("should include items with only .meta.json and no TypeScript files", () => {
    vol.fromJSON({
      "/project/registry/components/legacy/legacy.meta.json": "{}",
      // No .ts/.tsx files
    });

    const items = getAllRegistryItems();

    expect(items).toHaveLength(1);
    expect(items[0].name).toBe("legacy");
    expect(items[0].path).toContain(".meta.json");
  });

  it("should recognize index.ts as valid item file", () => {
    vol.fromJSON({
      "/project/registry/ui/button/index.ts": "",
    });

    const items = getAllRegistryItems();

    expect(items).toHaveLength(1);
    expect(items[0].name).toBe("button");
  });
});
