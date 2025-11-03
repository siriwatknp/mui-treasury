import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { vol } from "memfs";
import {
  extractRegistryDependencies,
  processRegistryFile,
} from "../lib/registry-processor";

// Mock fs module with memfs
vi.mock("fs", async () => {
  const memfs = await import("memfs");
  return memfs.fs;
});

describe("extractRegistryDependencies", () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    vol.reset();
    originalEnv = { ...process.env };
    process.cwd = vi.fn(() => "/project");
    // Set default environment
    delete process.env.VERCEL_ENV;
    delete process.env.VERCEL_BRANCH_URL;
  });

  afterEach(() => {
    vol.reset();
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  it("should extract registry dependencies from relative imports", () => {
    const content = `import { useTheme } from '../../hooks/use-theme';`;
    const currentFile = "/project/registry/components/button/button.tsx";
    const itemDir = "/project/registry/components/button";

    vol.fromJSON({
      "/project/registry/hooks/use-theme/index.ts": "",
    });

    const deps = extractRegistryDependencies(content, currentFile, itemDir);

    expect(deps).toContain("http://localhost:3000/r/use-theme.json");
  });

  it("should extract registry dependencies from @/registry alias", () => {
    const content = `import { Button } from '@/registry/ui/button';`;
    const currentFile = "/project/registry/components/card/card.tsx";
    const itemDir = "/project/registry/components/card";

    vol.fromJSON({
      "/project/registry/ui/button/index.ts": "",
    });

    const deps = extractRegistryDependencies(content, currentFile, itemDir);

    expect(deps).toContain("http://localhost:3000/r/button.json");
  });

  it("should ignore imports within same item directory", () => {
    const content = `import { ButtonGroup } from './button-group';`;
    const currentFile = "/project/registry/components/button/button.tsx";
    const itemDir = "/project/registry/components/button";

    vol.fromJSON({
      "/project/registry/components/button/button-group.tsx": "",
    });

    const deps = extractRegistryDependencies(content, currentFile, itemDir);

    expect(deps).toHaveLength(0);
  });

  it("should handle multiple registry dependencies", () => {
    const content = `
      import { useTheme } from '@/registry/hooks/use-theme';
      import { Button } from '@/registry/ui/button';
    `;
    const currentFile = "/project/registry/components/card/card.tsx";
    const itemDir = "/project/registry/components/card";

    vol.fromJSON({
      "/project/registry/hooks/use-theme/index.ts": "",
      "/project/registry/ui/button/button.tsx": "",
    });

    const deps = extractRegistryDependencies(content, currentFile, itemDir);

    expect(deps).toHaveLength(2);
    expect(deps).toContain("http://localhost:3000/r/use-theme.json");
    expect(deps).toContain("http://localhost:3000/r/button.json");
  });

  it("should ignore imports outside registry directory", () => {
    const content = `import { config } from '../../../config';`;
    const currentFile = "/project/registry/components/alert/alert.tsx";
    const itemDir = "/project/registry/components/alert";

    vol.fromJSON({
      "/project/config/index.ts": "",
    });

    const deps = extractRegistryDependencies(content, currentFile, itemDir);

    expect(deps).toHaveLength(0);
  });

  it("should use correct base URL from environment", () => {
    process.env.VERCEL_ENV = "production";
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "mui-treasury.com";

    const content = `import { useTheme } from '@/registry/hooks/use-theme';`;
    const currentFile = "/project/registry/components/button/button.tsx";
    const itemDir = "/project/registry/components/button";

    vol.fromJSON({
      "/project/registry/hooks/use-theme/index.ts": "",
    });

    const deps = extractRegistryDependencies(content, currentFile, itemDir);

    expect(deps).toContain("https://mui-treasury.com/r/use-theme.json");
  });
});

describe("processRegistryFile", () => {
  beforeEach(() => {
    vol.reset();
    process.cwd = vi.fn(() => "/project");
    delete process.env.VERCEL_ENV;
  });

  afterEach(() => {
    vol.reset();
    vi.restoreAllMocks();
  });

  it("should generate complete registry JSON structure", () => {
    vol.fromJSON({
      "/project/registry/components/button/button.tsx": `
        import { Button as MuiButton } from '@mui/material';
        export default function Button() {}
      `,
    });

    const result = processRegistryFile({
      path: "/project/registry/components/button/button.tsx",
      relativePath: "components/button/button.tsx",
      name: "button",
    });

    expect(result.registryJson).toMatchObject({
      $schema: expect.any(String),
      name: "button",
      type: "registry:item",
      title: expect.any(String),
      description: expect.any(String),
      dependencies: expect.arrayContaining(["@mui/material"]),
      files: expect.any(Array),
    });
  });

  it("should create meta.json file when it does not exist", () => {
    vol.fromJSON({
      "/project/registry/components/card/card.tsx": `export default function Card() {}`,
    });

    processRegistryFile(
      {
        path: "/project/registry/components/card/card.tsx",
        relativePath: "components/card/card.tsx",
        name: "card",
      },
      "Custom Card",
      "A custom card component"
    );

    const metaExists = vol.existsSync(
      "/project/registry/components/card/card.meta.json"
    );
    expect(metaExists).toBe(true);

    const meta = JSON.parse(
      vol.readFileSync(
        "/project/registry/components/card/card.meta.json",
        "utf-8"
      ) as string
    );
    expect(meta.title).toBe("Custom Card");
  });

  it("should use existing meta.json without CLI overrides", () => {
    vol.fromJSON({
      "/project/registry/components/alert/alert.tsx": `export default function Alert() {}`,
      "/project/registry/components/alert/alert.meta.json": JSON.stringify({
        $schema: "https://ui.shadcn.com/schema/registry-item.json",
        type: "registry:item",
        title: "Existing Alert",
        description: "Original description",
        meta: { category: "feedback" },
      }),
    });

    const result = processRegistryFile({
      path: "/project/registry/components/alert/alert.tsx",
      relativePath: "components/alert/alert.tsx",
      name: "alert",
    });

    expect(result.metadata.title).toBe("Existing Alert");
    expect(result.metadata.description).toBe("Original description");
  });

  it("should override meta.json fields when CLI args provided", () => {
    vol.fromJSON({
      "/project/registry/components/chip/chip.tsx": `export default function Chip() {}`,
      "/project/registry/components/chip/chip.meta.json": JSON.stringify({
        title: "Old Title",
        description: "Old Description",
        meta: {},
      }),
    });

    const result = processRegistryFile(
      {
        path: "/project/registry/components/chip/chip.tsx",
        relativePath: "components/chip/chip.tsx",
        name: "chip",
      },
      "New Chip",
      "Updated description",
      "display",
      ["badge", "tag"]
    );

    expect(result.metadata.title).toBe("New Chip");
    expect(result.metadata.description).toBe("Updated description");
    expect(result.metadata.meta.category).toBe("display");
    expect(result.metadata.meta.tags).toEqual(["badge", "tag"]);
  });

  it("should generate index.ts with wildcard and named default exports", () => {
    vol.fromJSON({
      "/project/registry/components/form/form.tsx": `export default function Form() {}`,
      "/project/registry/components/form/form-input.tsx": `export default function FormInput() {}`,
    });

    const result = processRegistryFile({
      path: "/project/registry/components/form/form.tsx",
      relativePath: "components/form/form.tsx",
      name: "form",
    });

    const indexFile = result.registryJson.files.find((f) =>
      f.target.endsWith("index.ts")
    );

    expect(indexFile).toBeDefined();
    expect(indexFile?.content).toContain("export * from './form';");
    expect(indexFile?.content).toContain(
      "export { default as Form } from './form';"
    );
  });

  it("should not generate index.ts if it already exists", () => {
    vol.fromJSON({
      "/project/registry/hooks/use-state/index.ts": `export default function useState() {}`,
    });

    const result = processRegistryFile({
      path: "/project/registry/hooks/use-state/index.ts",
      relativePath: "hooks/use-state/index.ts",
      name: "use-state",
    });

    const indexFiles = result.registryJson.files.filter((f) =>
      f.target.endsWith("index.ts")
    );

    expect(indexFiles).toHaveLength(1); // Only the original
  });

  it("should map themes/ to src/mui-treasury/theme/ in target paths", () => {
    vol.fromJSON({
      "/project/registry/themes/mui-treasury/components/alert.ts": `export const alert = {}`,
    });

    const result = processRegistryFile({
      path: "/project/registry/themes/mui-treasury/components/alert.ts",
      relativePath: "themes/mui-treasury/components/alert.ts",
      name: "mui-treasury",
    });

    expect(result.registryJson.files[0].target).toBe(
      "src/mui-treasury/theme/components/alert.ts"
    );
  });

  it("should prepend src/mui-treasury/ to non-theme paths", () => {
    vol.fromJSON({
      "/project/registry/components/button/button.tsx": `export default function Button() {}`,
    });

    const result = processRegistryFile({
      path: "/project/registry/components/button/button.tsx",
      relativePath: "components/button/button.tsx",
      name: "button",
    });

    expect(result.registryJson.files[0].target).toBe(
      "src/mui-treasury/components/button/button.tsx"
    );
  });

  it("should create v0.json with registry:block type", () => {
    vol.fromJSON({
      "/project/registry/blocks/header/header.tsx": `export default function Header() {}`,
    });

    processRegistryFile({
      path: "/project/registry/blocks/header/header.tsx",
      relativePath: "blocks/header/header.tsx",
      name: "header",
    });

    const v0Json = JSON.parse(
      vol.readFileSync("/project/public/r/header.v0.json", "utf-8") as string
    );

    expect(v0Json.type).toBe("registry:block");
    expect(v0Json.files[0].type).toBe("registry:block");
  });

  it("should transform registryDependencies URLs to v0.json format", () => {
    vol.fromJSON({
      "/project/registry/components/form/form.tsx": `
        import { Button } from '@/registry/ui/button';
        export default function Form() {}
      `,
      "/project/registry/ui/button/button.tsx": `export default function Button() {}`,
    });

    processRegistryFile({
      path: "/project/registry/components/form/form.tsx",
      relativePath: "components/form/form.tsx",
      name: "form",
    });

    const v0Json = JSON.parse(
      vol.readFileSync("/project/public/r/form.v0.json", "utf-8") as string
    );

    expect(v0Json.registryDependencies[0]).toContain(".v0.json");
  });

  it("should merge dependencies from meta.json with detected ones", () => {
    vol.fromJSON({
      "/project/registry/components/custom/custom.tsx": `
        import { Box } from '@mui/material';
      `,
      "/project/registry/components/custom/custom.meta.json": JSON.stringify({
        dependencies: ["custom-lib"],
        meta: {},
      }),
    });

    const result = processRegistryFile({
      path: "/project/registry/components/custom/custom.tsx",
      relativePath: "components/custom/custom.tsx",
      name: "custom",
    });

    expect(result.registryJson.dependencies).toContain("custom-lib");
    expect(result.registryJson.dependencies).toContain("@mui/material");
  });

  it("should include screenshot path in meta when file exists", () => {
    vol.fromJSON({
      "/project/registry/components/dialog/dialog.tsx": `export default function Dialog() {}`,
      "/project/public/screenshots/dialog.png": "",
    });

    const result = processRegistryFile({
      path: "/project/registry/components/dialog/dialog.tsx",
      relativePath: "components/dialog/dialog.tsx",
      name: "dialog",
    });

    expect(result.metadata.meta.screenshot).toBe("/screenshots/dialog.png");
  });
});
