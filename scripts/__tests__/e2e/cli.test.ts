import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { vol } from "memfs";
import { processRegistryFile } from "../../lib/registry-processor";
import { getAllRegistryItems } from "../../lib/registry-file-ops";

// Mock fs module with memfs
vi.mock("fs", async () => {
  const memfs = await import("memfs");
  return memfs.fs;
});

describe("CLI E2E Tests - Happy Paths", () => {
  beforeEach(() => {
    vol.reset();
    process.cwd = vi.fn(() => "/project");
  });

  afterEach(() => {
    vol.reset();
    vi.restoreAllMocks();
  });

  it("should generate registry files for a specific component", () => {
    // Setup: Create a simple component
    vol.fromJSON({
      "/project/registry/components/test-button/test-button.tsx": `
        import { Button } from '@mui/material';
        export default function TestButton() {
          return <Button>Test</Button>;
        }
      `,
    });

    const result = processRegistryFile({
      path: "/project/registry/components/test-button/test-button.tsx",
      relativePath: "components/test-button/test-button.tsx",
      name: "test-button",
    });

    // Verify outputs
    expect(result.registryJson.name).toBe("test-button");
    expect(result.registryJson.type).toBe("registry:item");
    expect(result.registryJson.dependencies).toContain("@mui/material");

    // Verify files were created
    expect(
      vol.existsSync(
        "/project/registry/components/test-button/test-button.meta.json",
      ),
    ).toBe(true);
    expect(vol.existsSync("/project/public/r/test-button.json")).toBe(true);
    expect(vol.existsSync("/project/public/r/test-button.v0.json")).toBe(true);
  });

  it("should generate registry with custom title and description", () => {
    vol.fromJSON({
      "/project/registry/components/custom-card/custom-card.tsx": `
        export default function CustomCard() {
          return <div>Card</div>;
        }
      `,
    });

    const result = processRegistryFile(
      {
        path: "/project/registry/components/custom-card/custom-card.tsx",
        relativePath: "components/custom-card/custom-card.tsx",
        name: "custom-card",
      },
      "Awesome Card",
      "A really awesome card component",
      "display",
      ["card", "container"],
    );

    // Verify custom metadata
    expect(result.metadata.title).toBe("Awesome Card");
    expect(result.metadata.description).toBe("A really awesome card component");
    expect(result.metadata.meta.category).toBe("display");
    expect(result.metadata.meta.tags).toEqual(["card", "container"]);

    // Verify meta.json was created with custom data
    const metaContent = JSON.parse(
      vol.readFileSync(
        "/project/registry/components/custom-card/custom-card.meta.json",
        "utf-8",
      ) as string,
    );
    expect(metaContent.title).toBe("Awesome Card");
    expect(metaContent.meta.category).toBe("display");
  });

  it("should generate files for multiple components", () => {
    vol.fromJSON({
      "/project/registry/components/button/button.tsx": `
        export default function Button() {}
      `,
      "/project/registry/components/card/card.tsx": `
        export default function Card() {}
      `,
      "/project/registry/hooks/use-theme/index.ts": `
        export default function useTheme() {}
      `,
    });

    const items = getAllRegistryItems();

    // Process all items
    items.forEach((item) => {
      processRegistryFile(item);
    });

    // Verify all files were created
    expect(vol.existsSync("/project/public/r/button.json")).toBe(true);
    expect(vol.existsSync("/project/public/r/card.json")).toBe(true);
    expect(vol.existsSync("/project/public/r/use-theme.json")).toBe(true);

    // Verify v0 versions exist
    expect(vol.existsSync("/project/public/r/button.v0.json")).toBe(true);
    expect(vol.existsSync("/project/public/r/card.v0.json")).toBe(true);
    expect(vol.existsSync("/project/public/r/use-theme.v0.json")).toBe(true);
  });

  it("should correctly handle component with registry dependencies", () => {
    vol.fromJSON({
      "/project/registry/components/form/form.tsx": `
        import { Button } from '@/registry/ui/button';
        import { useForm } from '@/registry/hooks/use-form';

        export default function Form() {
          return <div>Form</div>;
        }
      `,
      "/project/registry/ui/button/button.tsx": `
        export default function Button() {}
      `,
      "/project/registry/hooks/use-form/index.ts": `
        export default function useForm() {}
      `,
    });

    const result = processRegistryFile({
      path: "/project/registry/components/form/form.tsx",
      relativePath: "components/form/form.tsx",
      name: "form",
    });

    // Verify registry dependencies were detected
    expect(result.registryJson.registryDependencies).toHaveLength(2);
    expect(result.registryJson.registryDependencies).toEqual(
      expect.arrayContaining([
        expect.stringContaining("/r/button.json"),
        expect.stringContaining("/r/use-form.json"),
      ]),
    );
  });

  it("should generate index.ts with proper exports", () => {
    vol.fromJSON({
      "/project/registry/components/dialog/dialog.tsx": `
        export default function Dialog() {}
      `,
      "/project/registry/components/dialog/dialog-header.tsx": `
        export default function DialogHeader() {}
      `,
    });

    const result = processRegistryFile({
      path: "/project/registry/components/dialog/dialog.tsx",
      relativePath: "components/dialog/dialog.tsx",
      name: "dialog",
    });

    // Find the generated index.ts
    const indexFile = result.registryJson.files.find((f) =>
      f.target.endsWith("index.ts"),
    );

    expect(indexFile).toBeDefined();
    expect(indexFile!.content).toContain("export * from './dialog'");
    expect(indexFile!.content).toContain(
      "export { default as Dialog } from './dialog'",
    );
    expect(indexFile!.content).toContain("export * from './dialog-header'");
    expect(indexFile!.content).toContain(
      "export { default as DialogHeader } from './dialog-header'",
    );
  });

  it("should properly map theme files to correct target paths", () => {
    vol.fromJSON({
      "/project/registry/themes/custom-theme/components/button.ts": `
        export const button = { /* config */ };
      `,
    });

    const result = processRegistryFile({
      path: "/project/registry/themes/custom-theme/components/button.ts",
      relativePath: "themes/custom-theme/components/button.ts",
      name: "custom-theme",
    });

    // Verify theme path mapping
    const buttonFile = result.registryJson.files[0];
    expect(buttonFile.target).toBe("src/mui-plus/theme/components/button.ts");
  });

  it("should correctly merge dependencies from existing meta.json", () => {
    vol.fromJSON({
      "/project/registry/components/advanced/advanced.tsx": `
        import { Box } from '@mui/material';
        export default function Advanced() {}
      `,
      "/project/registry/components/advanced/advanced.meta.json":
        JSON.stringify({
          $schema: "https://ui.shadcn.com/schema/registry-item.json",
          type: "registry:item",
          title: "Advanced Component",
          description: "An advanced component",
          dependencies: ["custom-package"],
          meta: {},
        }),
    });

    const result = processRegistryFile({
      path: "/project/registry/components/advanced/advanced.tsx",
      relativePath: "components/advanced/advanced.tsx",
      name: "advanced",
    });

    // Should have both detected and meta.json dependencies
    expect(result.registryJson.dependencies).toContain("@mui/material");
    expect(result.registryJson.dependencies).toContain("custom-package");
  });
});
