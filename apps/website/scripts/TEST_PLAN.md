# Test Plan: create-registry-json.ts

## Overview

This document outlines the comprehensive testing strategy for `create-registry-json.ts`, a CLI tool that generates registry JSON files for MUI Treasury components. The plan includes refactoring for testability, unit tests, integration tests, and end-to-end tests.

## Architecture & Refactoring Plan

### Current Structure

- Single file (`create-registry-json.ts`) with ~890 lines
- Mixes CLI logic, file operations, and pure functions
- Hard to test in isolation

### Proposed Structure

```
scripts/
├── create-registry-json.ts          # CLI entry point (Commander.js setup)
├── lib/
│   ├── registry-utils.ts            # Pure utility functions
│   ├── registry-file-ops.ts         # File system operations
│   ├── registry-processor.ts        # Main processing logic
│   └── types.ts                     # Shared TypeScript types
└── __tests__/
    ├── registry-utils.test.ts
    ├── registry-file-ops.test.ts
    ├── registry-processor.test.ts
    └── e2e/
        └── cli.test.ts
```

---

## Phase 1: Setup & Refactoring

### Task 1.1: Setup Test Infrastructure

**Files to create:**

- `vitest.config.ts` (if not exists)
- `scripts/__tests__/` directory

**Dependencies to install:**

```bash
pnpm add -D vitest @vitest/ui memfs
```

**Vitest Configuration:**

```typescript
// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["**/__tests__/**", "**/node_modules/**"],
    },
  },
});
```

---

### Task 1.2: Extract TypeScript Types

**Create:** `scripts/lib/types.ts`

**Types to extract:**

- `FileInfo`
- `RegistryFile`
- `RegistryMeta`
- `RegistryJson`

**Details:**

- Copy all interface definitions from main script
- Export them for reuse across modules
- Update main script to import from `./lib/types`

---

### Task 1.3: Extract Pure Utility Functions

**Create:** `scripts/lib/registry-utils.ts`

**Functions to extract:**

1. `getRegistryBaseUrl(): string`
2. `extractDependencies(content: string): string[]`
3. `extractDefaultExportName(content: string): string | null`

**Why these?**

- Zero file I/O dependencies
- Pure input/output functions
- Perfect for unit testing

---

### Task 1.4: Extract File Operation Functions

**Create:** `scripts/lib/registry-file-ops.ts`

**Functions to extract:**

1. `scanRegistryFiles(dir: string | null): string[]`
2. `findAllRelatedFiles(itemPath: string, itemName: string): FileInfo[]`
3. `findMatchingFiles(name: string): FileInfo[]`
4. `getAllRegistryItems(): FileInfo[]`

**Why these?**

- All perform file system operations
- Can be tested with memfs (in-memory filesystem)
- Reusable across different contexts

---

### Task 1.5: Extract Processing Logic

**Create:** `scripts/lib/registry-processor.ts`

**Functions to extract:**

1. `extractRegistryDependencies(content: string, currentFilePath: string, itemDir: string): string[]`
2. `processRegistryFile(fileInfo: FileInfo, ...): { metadata: RegistryMeta; registryJson: RegistryJson }`
3. `generateRegistryForItem(name: string, ...): void`
4. `processAllRegistries(): void`

---

## Phase 2: Unit Tests - Pure Functions

### Task 2.1: Test `getRegistryBaseUrl()`

**File:** `scripts/__tests__/registry-utils.test.ts`

**Test Cases:**

#### TC1: Production environment with VERCEL_PROJECT_PRODUCTION_URL

```typescript
describe("getRegistryBaseUrl", () => {
  it("should return production URL when VERCEL_ENV=production and VERCEL_PROJECT_PRODUCTION_URL exists", () => {
    process.env.VERCEL_ENV = "production";
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "mui-treasury.vercel.app";

    expect(getRegistryBaseUrl()).toBe("https://mui-treasury.vercel.app");
  });
});
```

#### TC2: Production environment without VERCEL_PROJECT_PRODUCTION_URL

```typescript
it("should fallback to mui-treasury.com when VERCEL_ENV=production but no VERCEL_PROJECT_PRODUCTION_URL", () => {
  process.env.VERCEL_ENV = "production";
  delete process.env.VERCEL_PROJECT_PRODUCTION_URL;

  expect(getRegistryBaseUrl()).toBe("https://mui-treasury.com");
});
```

#### TC3: Preview environment with VERCEL_BRANCH_URL

```typescript
it("should return branch URL for preview deployments", () => {
  process.env.VERCEL_ENV = "preview";
  process.env.VERCEL_BRANCH_URL = "feature-branch-abc123.vercel.app";

  expect(getRegistryBaseUrl()).toBe("https://feature-branch-abc123.vercel.app");
});
```

#### TC4: Local development (no env vars)

```typescript
it("should return localhost:3000 for local development", () => {
  delete process.env.VERCEL_ENV;
  delete process.env.VERCEL_BRANCH_URL;

  expect(getRegistryBaseUrl()).toBe("http://localhost:3000");
});
```

**Setup/Teardown:**

```typescript
beforeEach(() => {
  // Save original env
  originalEnv = { ...process.env };
});

afterEach(() => {
  // Restore original env
  process.env = originalEnv;
});
```

---

### Task 2.2: Test `extractDependencies()`

**File:** `scripts/__tests__/registry-utils.test.ts`

**Test Cases:**

#### TC1: Extract npm packages (unscoped)

```typescript
it("should extract unscoped npm packages", () => {
  const content = `
    import lodash from 'lodash';
    import { format } from 'date-fns';
  `;

  const deps = extractDependencies(content);
  expect(deps).toContain("lodash");
  expect(deps).toContain("date-fns");
});
```

#### TC2: Extract scoped packages

```typescript
it("should extract scoped packages like @mui/material", () => {
  const content = `
    import { Box } from '@mui/material';
    import { DataGrid } from '@mui/x-data-grid';
  `;

  const deps = extractDependencies(content);
  expect(deps).toContain("@mui/material");
  expect(deps).toContain("@mui/x-data-grid");
});
```

#### TC3: Ignore relative imports

```typescript
it("should ignore relative imports", () => {
  const content = `
    import { helper } from './utils';
    import Component from '../components/Component';
  `;

  const deps = extractDependencies(content);
  expect(deps).toHaveLength(0);
});
```

#### TC4: Ignore @/ alias imports

```typescript
it("should ignore @/ alias imports", () => {
  const content = `
    import { Button } from '@/components/ui/button';
    import { useTheme } from '@/hooks/useTheme';
  `;

  const deps = extractDependencies(content);
  expect(deps).toHaveLength(0);
});
```

#### TC5: Add emotion dependencies when MUI is used

```typescript
it("should automatically add @emotion/react and @emotion/styled when @mui is detected", () => {
  const content = `import { Box } from '@mui/material';`;

  const deps = extractDependencies(content);
  expect(deps).toContain("@emotion/react");
  expect(deps).toContain("@emotion/styled");
});
```

#### TC6: Filter out React

```typescript
it("should filter out react (peer dependency)", () => {
  const content = `
    import React from 'react';
    import { useState } from 'react';
  `;

  const deps = extractDependencies(content);
  expect(deps).not.toContain("react");
});
```

#### TC7: Handle deep imports

```typescript
it("should extract package name from deep imports", () => {
  const content = `import { Button } from '@mui/material/Button';`;

  const deps = extractDependencies(content);
  expect(deps).toContain("@mui/material");
});
```

#### TC8: Handle no imports

```typescript
it("should return empty array when no imports found", () => {
  const content = `const foo = "bar";`;

  expect(extractDependencies(content)).toEqual([]);
});
```

---

### Task 2.3: Test `extractDefaultExportName()`

**File:** `scripts/__tests__/registry-utils.test.ts`

**Test Cases:**

#### TC1: Named function export

```typescript
it('should extract name from "export default function Name"', () => {
  const content = `export default function MyComponent() { return null; }`;

  expect(extractDefaultExportName(content)).toBe("MyComponent");
});
```

#### TC2: Named class export

```typescript
it('should extract name from "export default class Name"', () => {
  const content = `export default class MyClass { }`;

  expect(extractDefaultExportName(content)).toBe("MyClass");
});
```

#### TC3: Const export

```typescript
it('should extract name from "export default const Name"', () => {
  const content = `export default const MyComponent = () => {};`;

  expect(extractDefaultExportName(content)).toBe("MyComponent");
});
```

#### TC4: Identifier export

```typescript
it('should extract name from "export default ComponentName;"', () => {
  const content = `
    const MyComponent = () => {};
    export default MyComponent;
  `;

  expect(extractDefaultExportName(content)).toBe("MyComponent");
});
```

#### TC5: No default export

```typescript
it("should return null when no default export", () => {
  const content = `export const foo = "bar";`;

  expect(extractDefaultExportName(content)).toBeNull();
});
```

#### TC6: Anonymous arrow function

```typescript
it("should return null for anonymous arrow function", () => {
  const content = `export default () => {};`;

  expect(extractDefaultExportName(content)).toBeNull();
});
```

#### TC7: Lowercase identifier (not component)

```typescript
it("should return null for lowercase identifier (not a component/class)", () => {
  const content = `export default myVariable;`;

  expect(extractDefaultExportName(content)).toBeNull();
});
```

#### TC8: Multiple default exports (edge case)

```typescript
it("should extract first match when multiple patterns exist", () => {
  const content = `
    export default function FirstComponent() {}
    // This shouldn't happen but test defensive behavior
    export default class SecondComponent {}
  `;

  expect(extractDefaultExportName(content)).toBe("FirstComponent");
});
```

---

## Phase 3: Integration Tests - File Operations

### Task 3.1: Setup memfs for File System Tests

**File:** `scripts/__tests__/registry-file-ops.test.ts`

**Setup:**

```typescript
import { vol } from "memfs";
import { vi } from "vitest";

// Mock fs module with memfs
vi.mock("fs", () => ({ default: require("memfs").fs }));
vi.mock("fs/promises", () => require("memfs").fs.promises);

beforeEach(() => {
  vol.reset();
  // Create test registry structure
  vol.fromJSON({
    "/test-registry/components/button/button.tsx":
      "export default function Button() {}",
    "/test-registry/components/card/card.tsx":
      "export default function Card() {}",
    "/test-registry/hooks/use-theme/index.ts":
      "export default function useTheme() {}",
  });
});

afterEach(() => {
  vol.reset();
});
```

---

### Task 3.2: Test `scanRegistryFiles()`

**File:** `scripts/__tests__/registry-file-ops.test.ts`

**Test Cases:**

#### TC1: Scan all TypeScript files recursively

```typescript
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
```

#### TC2: Ignore non-TypeScript files

```typescript
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
```

#### TC3: Handle empty directory

```typescript
it("should return empty array for empty directory", () => {
  vol.fromJSON({ "/empty": null });

  const files = scanRegistryFiles("/empty");

  expect(files).toEqual([]);
});
```

#### TC4: Handle non-existent directory gracefully

```typescript
it("should return empty array for non-existent directory", () => {
  const files = scanRegistryFiles("/does-not-exist");

  expect(files).toEqual([]);
});
```

#### TC5: Use current working directory when null

```typescript
it("should use process.cwd()/registry when dir is null", () => {
  const originalCwd = process.cwd();
  process.cwd = vi.fn(() => "/test");

  vol.fromJSON({
    "/test/registry/component.tsx": "",
  });

  const files = scanRegistryFiles(null);

  expect(files).toHaveLength(1);

  process.cwd = originalCwd;
});
```

---

### Task 3.3: Test `findMatchingFiles()`

**File:** `scripts/__tests__/registry-file-ops.test.ts`

**Test Cases:**

#### TC1: Find file by exact name match

```typescript
it("should find file matching exact name", () => {
  vol.fromJSON({
    "/registry/components/button/button.tsx": "",
  });

  const matches = findMatchingFiles("button");

  expect(matches).toHaveLength(1);
  expect(matches[0].name).toBe("button");
});
```

#### TC2: Find index file in named directory

```typescript
it("should find index.ts/tsx in directory matching name", () => {
  vol.fromJSON({
    "/registry/hooks/use-theme/index.ts": "",
  });

  const matches = findMatchingFiles("use-theme");

  expect(matches).toHaveLength(1);
  expect(matches[0].relativePath).toContain("use-theme/index.ts");
});
```

#### TC3: Prefer .meta.json when exists

```typescript
it("should prefer .meta.json file over source files", () => {
  vol.fromJSON({
    "/registry/components/button/button.tsx": "",
    "/registry/components/button/button.meta.json": "{}",
  });

  const matches = findMatchingFiles("button");

  expect(matches).toHaveLength(1);
  expect(matches[0].path).toContain(".meta.json");
});
```

#### TC4: Return empty array when no match

```typescript
it("should return empty array when name not found", () => {
  vol.fromJSON({
    "/registry/components/card/card.tsx": "",
  });

  const matches = findMatchingFiles("button");

  expect(matches).toEqual([]);
});
```

#### TC5: Find multiple matches across categories

```typescript
it("should find multiple files if name exists in different categories", () => {
  vol.fromJSON({
    "/registry/components/button/button.tsx": "",
    "/registry/blocks/button/button.tsx": "",
  });

  const matches = findMatchingFiles("button");

  expect(matches.length).toBeGreaterThan(1);
});
```

---

### Task 3.4: Test `findAllRelatedFiles()`

**File:** `scripts/__tests__/registry-file-ops.test.ts`

**Test Cases:**

#### TC1: Find all files in same directory

```typescript
it("should find all .ts/.tsx files in the same directory", () => {
  vol.fromJSON({
    "/registry/components/button/button.tsx": "",
    "/registry/components/button/button-group.tsx": "",
    "/registry/components/button/types.ts": "",
  });

  const files = findAllRelatedFiles(
    "/registry/components/button/button.tsx",
    "button"
  );

  expect(files).toHaveLength(3);
});
```

#### TC2: Exclude .demo.tsx files

```typescript
it("should exclude .demo.tsx files", () => {
  vol.fromJSON({
    "/registry/components/card/card.tsx": "",
    "/registry/components/card/card.demo.tsx": "",
  });

  const files = findAllRelatedFiles(
    "/registry/components/card/card.tsx",
    "card"
  );

  expect(files).toHaveLength(1);
  expect(files[0].path).toContain("card.tsx");
  expect(files[0].path).not.toContain(".demo.tsx");
});
```

#### TC3: Handle single file directory

```typescript
it("should return single file when directory has only one file", () => {
  vol.fromJSON({
    "/registry/hooks/use-theme/index.ts": "",
  });

  const files = findAllRelatedFiles(
    "/registry/hooks/use-theme/index.ts",
    "use-theme"
  );

  expect(files).toHaveLength(1);
});
```

#### TC4: Return relative paths from registry root

```typescript
it("should return paths relative to registry root", () => {
  process.cwd = vi.fn(() => "/project");

  vol.fromJSON({
    "/project/registry/components/alert/alert.tsx": "",
  });

  const files = findAllRelatedFiles(
    "/project/registry/components/alert/alert.tsx",
    "alert"
  );

  expect(files[0].relativePath).toBe("components/alert/alert.tsx");
});
```

---

### Task 3.5: Test `getAllRegistryItems()`

**File:** `scripts/__tests__/registry-file-ops.test.ts`

**Test Cases:**

#### TC1: Get all unique registry items

```typescript
it("should return unique registry items from all categories", () => {
  vol.fromJSON({
    "/registry/components/button/button.tsx": "",
    "/registry/components/card/card.tsx": "",
    "/registry/hooks/use-theme/index.ts": "",
    "/registry/blocks/header/header.tsx": "",
  });

  const items = getAllRegistryItems();

  expect(items).toHaveLength(4);
  expect(items.map((i) => i.name)).toEqual(
    expect.arrayContaining(["button", "card", "use-theme", "header"])
  );
});
```

#### TC2: Extract item name from path structure

```typescript
it("should extract item name from path structure (second segment)", () => {
  vol.fromJSON({
    "/registry/themes/mui-treasury/index.ts": "",
  });

  const items = getAllRegistryItems();

  expect(items[0].name).toBe("mui-treasury");
});
```

#### TC3: Skip sub-files within items

```typescript
it("should skip sub-files that do not match item name", () => {
  vol.fromJSON({
    "/registry/components/form/form.tsx": "",
    "/registry/components/form/form-input.tsx": "", // sub-file
    "/registry/components/form/types.ts": "", // sub-file
  });

  const items = getAllRegistryItems();

  expect(items).toHaveLength(1);
  expect(items[0].name).toBe("form");
});
```

#### TC4: Include meta-only items

```typescript
it("should include items with only .meta.json and no TypeScript files", () => {
  vol.fromJSON({
    "/registry/components/legacy/legacy.meta.json": "{}",
    // No .ts/.tsx files
  });

  const items = getAllRegistryItems();

  expect(items).toHaveLength(1);
  expect(items[0].name).toBe("legacy");
  expect(items[0].path).toContain(".meta.json");
});
```

#### TC5: Handle index files correctly

```typescript
it("should recognize index.ts as valid item file", () => {
  vol.fromJSON({
    "/registry/ui/button/index.ts": "",
  });

  const items = getAllRegistryItems();

  expect(items).toHaveLength(1);
  expect(items[0].name).toBe("button");
});
```

---

## Phase 4: Integration Tests - Processing Functions

### Task 4.1: Test `extractRegistryDependencies()`

**File:** `scripts/__tests__/registry-processor.test.ts`

**Test Cases:**

#### TC1: Extract relative import from same registry

```typescript
it("should extract registry dependencies from relative imports", () => {
  const content = `import { useTheme } from '../../hooks/use-theme';`;
  const currentFile = "/registry/components/button/button.tsx";
  const itemDir = "/registry/components/button";

  vol.fromJSON({
    "/registry/hooks/use-theme/index.ts": "",
  });

  const deps = extractRegistryDependencies(content, currentFile, itemDir);

  expect(deps).toContain("http://localhost:3000/r/use-theme.json");
});
```

#### TC2: Extract @/registry alias imports

```typescript
it("should extract registry dependencies from @/registry alias", () => {
  const content = `import { Button } from '@/registry/ui/button';`;
  const currentFile = "/registry/components/card/card.tsx";
  const itemDir = "/registry/components/card";

  vol.fromJSON({
    "/registry/ui/button/index.ts": "",
  });

  const deps = extractRegistryDependencies(content, currentFile, itemDir);

  expect(deps).toContain("http://localhost:3000/r/button.json");
});
```

#### TC3: Ignore internal imports within same item

```typescript
it("should ignore imports within same item directory", () => {
  const content = `import { ButtonGroup } from './button-group';`;
  const currentFile = "/registry/components/button/button.tsx";
  const itemDir = "/registry/components/button";

  vol.fromJSON({
    "/registry/components/button/button-group.tsx": "",
  });

  const deps = extractRegistryDependencies(content, currentFile, itemDir);

  expect(deps).toHaveLength(0);
});
```

#### TC4: Handle .ts/.tsx extension resolution

```typescript
it("should resolve imports without extensions", () => {
  const content = `import { helper } from '../../utils/format';`;
  const currentFile = "/registry/components/table/table.tsx";
  const itemDir = "/registry/components/table";

  vol.fromJSON({
    "/registry/utils/format/index.ts": "", // File exists without .ts in import
  });

  const deps = extractRegistryDependencies(content, currentFile, itemDir);

  expect(deps).toContain("http://localhost:3000/r/format.json");
});
```

#### TC5: Ignore non-registry imports

```typescript
it("should ignore imports outside registry directory", () => {
  const content = `import { config } from '../../../config';`;
  const currentFile = "/registry/components/alert/alert.tsx";
  const itemDir = "/registry/components/alert";

  vol.fromJSON({
    "/config/index.ts": "", // Outside registry
  });

  const deps = extractRegistryDependencies(content, currentFile, itemDir);

  expect(deps).toHaveLength(0);
});
```

#### TC6: Use correct base URL based on environment

```typescript
it("should use correct base URL from environment", () => {
  process.env.VERCEL_ENV = "production";
  process.env.VERCEL_PROJECT_PRODUCTION_URL = "mui-treasury.com";

  const content = `import { useTheme } from '@/registry/hooks/use-theme';`;
  const currentFile = "/registry/components/button/button.tsx";
  const itemDir = "/registry/components/button";

  vol.fromJSON({
    "/registry/hooks/use-theme/index.ts": "",
  });

  const deps = extractRegistryDependencies(content, currentFile, itemDir);

  expect(deps).toContain("https://mui-treasury.com/r/use-theme.json");
});
```

---

### Task 4.2: Test `processRegistryFile()` - Core Logic

**File:** `scripts/__tests__/registry-processor.test.ts`

**Test Cases:**

#### TC1: Generate registry JSON with all fields

```typescript
it("should generate complete registry JSON structure", () => {
  vol.fromJSON({
    "/registry/components/button/button.tsx": `
      import { Button as MuiButton } from '@mui/material';
      export default function Button() {}
    `,
  });

  const result = processRegistryFile({
    path: "/registry/components/button/button.tsx",
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
```

#### TC2: Create meta.json when not exists

```typescript
it("should create meta.json file when it does not exist", () => {
  vol.fromJSON({
    "/registry/components/card/card.tsx": `export default function Card() {}`,
  });

  processRegistryFile(
    {
      path: "/registry/components/card/card.tsx",
      relativePath: "components/card/card.tsx",
      name: "card",
    },
    "Custom Card",
    "A custom card component"
  );

  const metaExists = vol.existsSync("/registry/components/card/card.meta.json");
  expect(metaExists).toBe(true);

  const meta = JSON.parse(
    vol.readFileSync("/registry/components/card/card.meta.json", "utf-8")
  );
  expect(meta.title).toBe("Custom Card");
});
```

#### TC3: Use existing meta.json when present

```typescript
it("should use existing meta.json without CLI overrides", () => {
  vol.fromJSON({
    "/registry/components/alert/alert.tsx": `export default function Alert() {}`,
    "/registry/components/alert/alert.meta.json": JSON.stringify({
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      type: "registry:item",
      title: "Existing Alert",
      description: "Original description",
      meta: { category: "feedback" },
    }),
  });

  const result = processRegistryFile({
    path: "/registry/components/alert/alert.tsx",
    relativePath: "components/alert/alert.tsx",
    name: "alert",
  });

  expect(result.metadata.title).toBe("Existing Alert");
  expect(result.metadata.description).toBe("Original description");
});
```

#### TC4: Override meta.json with CLI arguments

```typescript
it("should override meta.json fields when CLI args provided", () => {
  vol.fromJSON({
    "/registry/components/chip/chip.tsx": `export default function Chip() {}`,
    "/registry/components/chip/chip.meta.json": JSON.stringify({
      title: "Old Title",
      description: "Old Description",
      meta: {},
    }),
  });

  const result = processRegistryFile(
    {
      path: "/registry/components/chip/chip.tsx",
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
```

#### TC5: Generate index.ts with exports

```typescript
it("should generate index.ts with wildcard and named default exports", () => {
  vol.fromJSON({
    "/registry/components/form/form.tsx": `export default function Form() {}`,
    "/registry/components/form/form-input.tsx": `export default function FormInput() {}`,
  });

  const result = processRegistryFile({
    path: "/registry/components/form/form.tsx",
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
```

#### TC6: Skip index.ts generation if already exists

```typescript
it("should not generate index.ts if it already exists", () => {
  vol.fromJSON({
    "/registry/hooks/use-state/index.ts": `export default function useState() {}`,
  });

  const result = processRegistryFile({
    path: "/registry/hooks/use-state/index.ts",
    relativePath: "hooks/use-state/index.ts",
    name: "use-state",
  });

  const indexFiles = result.registryJson.files.filter((f) =>
    f.target.endsWith("index.ts")
  );

  expect(indexFiles).toHaveLength(1); // Only the original
});
```

#### TC7: Map theme paths correctly

```typescript
it("should map themes/ to src/mui-treasury/theme/ in target paths", () => {
  vol.fromJSON({
    "/registry/themes/mui-treasury/components/alert.ts": `export const alert = {}`,
  });

  const result = processRegistryFile({
    path: "/registry/themes/mui-treasury/components/alert.ts",
    relativePath: "themes/mui-treasury/components/alert.ts",
    name: "mui-treasury",
  });

  expect(result.registryJson.files[0].target).toBe(
    "src/mui-treasury/theme/components/alert.ts"
  );
});
```

#### TC8: Map non-theme paths to src/mui-treasury/

```typescript
it("should prepend src/mui-treasury/ to non-theme paths", () => {
  vol.fromJSON({
    "/registry/components/button/button.tsx": `export default function Button() {}`,
  });

  const result = processRegistryFile({
    path: "/registry/components/button/button.tsx",
    relativePath: "components/button/button.tsx",
    name: "button",
  });

  expect(result.registryJson.files[0].target).toBe(
    "src/mui-treasury/components/button/button.tsx"
  );
});
```

#### TC9: Create v0.json with registry:block type

```typescript
it("should create v0.json with registry:block type", () => {
  vol.fromJSON({
    "/registry/blocks/header/header.tsx": `export default function Header() {}`,
  });

  processRegistryFile({
    path: "/registry/blocks/header/header.tsx",
    relativePath: "blocks/header/header.tsx",
    name: "header",
  });

  const v0Json = JSON.parse(
    vol.readFileSync("/public/r/header.v0.json", "utf-8")
  );

  expect(v0Json.type).toBe("registry:block");
  expect(v0Json.files[0].type).toBe("registry:block");
});
```

#### TC10: Transform registry dependencies in v0.json

```typescript
it("should transform registryDependencies URLs to v0.json format", () => {
  vol.fromJSON({
    "/registry/components/form/form.tsx": `
      import { Button } from '@/registry/ui/button';
      export default function Form() {}
    `,
    "/registry/ui/button/button.tsx": `export default function Button() {}`,
  });

  processRegistryFile({
    path: "/registry/components/form/form.tsx",
    relativePath: "components/form/form.tsx",
    name: "form",
  });

  const v0Json = JSON.parse(
    vol.readFileSync("/public/r/form.v0.json", "utf-8")
  );

  expect(v0Json.registryDependencies[0]).toContain(".v0.json");
});
```

#### TC11: Merge dependencies from meta.json

```typescript
it("should merge dependencies from meta.json with detected ones", () => {
  vol.fromJSON({
    "/registry/components/custom/custom.tsx": `
      import { Box } from '@mui/material';
    `,
    "/registry/components/custom/custom.meta.json": JSON.stringify({
      dependencies: ["custom-lib"],
      meta: {},
    }),
  });

  const result = processRegistryFile({
    path: "/registry/components/custom/custom.tsx",
    relativePath: "components/custom/custom.tsx",
    name: "custom",
  });

  expect(result.registryJson.dependencies).toContain("custom-lib");
  expect(result.registryJson.dependencies).toContain("@mui/material");
});
```

#### TC12: Include screenshot path in meta when file exists

```typescript
it("should include screenshot path in meta when file exists", () => {
  vol.fromJSON({
    "/registry/components/dialog/dialog.tsx": `export default function Dialog() {}`,
    "/public/screenshots/dialog.png": "", // Screenshot exists
  });

  const result = processRegistryFile({
    path: "/registry/components/dialog/dialog.tsx",
    relativePath: "components/dialog/dialog.tsx",
    name: "dialog",
  });

  expect(result.metadata.meta.screenshot).toBe("/screenshots/dialog.png");
});
```

---

## Phase 5: End-to-End Tests

### Task 5.1: Test CLI with Specific Component

**File:** `scripts/__tests__/e2e/cli.test.ts`

**Test Cases:**

#### TC1: Generate files for specific component

```typescript
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

it("should generate registry files for specific component", async () => {
  vol.fromJSON({
    "/registry/components/badge/badge.tsx": `export default function Badge() {}`,
  });

  await execAsync("node scripts/create-registry-json.js badge");

  expect(vol.existsSync("/registry/components/badge/badge.meta.json")).toBe(
    true
  );
  expect(vol.existsSync("/public/r/badge.json")).toBe(true);
  expect(vol.existsSync("/public/r/badge.v0.json")).toBe(true);
});
```

#### TC2: Generate with CLI options

```typescript
it("should generate with title, description, category, and tags", async () => {
  vol.fromJSON({
    "/registry/components/tooltip/tooltip.tsx": `export default function Tooltip() {}`,
  });

  await execAsync(
    "node scripts/create-registry-json.js tooltip " +
      '-t "Custom Tooltip" ' +
      '-d "A customizable tooltip" ' +
      "-c feedback " +
      '--tags "overlay,hint"'
  );

  const meta = JSON.parse(
    vol.readFileSync("/registry/components/tooltip/tooltip.meta.json", "utf-8")
  );

  expect(meta.title).toBe("Custom Tooltip");
  expect(meta.description).toBe("A customizable tooltip");
  expect(meta.meta.category).toBe("feedback");
  expect(meta.meta.tags).toEqual(["overlay", "hint"]);
});
```

#### TC3: Error when component not found

```typescript
it("should exit with error when component not found", async () => {
  await expect(
    execAsync("node scripts/create-registry-json.js nonexistent")
  ).rejects.toThrow();
});
```

---

### Task 5.2: Test CLI with All Components

**File:** `scripts/__tests__/e2e/cli.test.ts`

**Test Cases:**

#### TC1: Generate all registry items

```typescript
it("should generate files for all registry items when no name provided", async () => {
  vol.fromJSON({
    "/registry/components/button/button.tsx": `export default function Button() {}`,
    "/registry/hooks/use-theme/index.ts": `export default function useTheme() {}`,
    "/registry/blocks/header/header.tsx": `export default function Header() {}`,
  });

  await execAsync("node scripts/create-registry-json.js");

  expect(vol.existsSync("/public/r/button.json")).toBe(true);
  expect(vol.existsSync("/public/r/use-theme.json")).toBe(true);
  expect(vol.existsSync("/public/r/header.json")).toBe(true);
});
```

#### TC2: Handle mixed items (with and without meta.json)

```typescript
it("should process items with and without existing meta.json", async () => {
  vol.fromJSON({
    "/registry/components/card/card.tsx": `export default function Card() {}`,
    "/registry/components/card/card.meta.json": JSON.stringify({
      title: "Card",
    }),
    "/registry/components/alert/alert.tsx": `export default function Alert() {}`,
    // No meta.json for alert
  });

  await execAsync("node scripts/create-registry-json.js");

  // Both should have meta.json after processing
  expect(vol.existsSync("/registry/components/card/card.meta.json")).toBe(true);
  expect(vol.existsSync("/registry/components/alert/alert.meta.json")).toBe(
    true
  );
});
```

---

## Phase 6: Edge Cases & Error Handling

### Task 6.1: Error Handling Tests

**File:** `scripts/__tests__/edge-cases.test.ts`

**Test Cases:**

#### TC1: Corrupt meta.json file

```typescript
it("should handle corrupt meta.json gracefully", () => {
  vol.fromJSON({
    "/registry/components/broken/broken.tsx": `export default function Broken() {}`,
    "/registry/components/broken/broken.meta.json": "invalid json{]",
  });

  expect(() => {
    processRegistryFile({
      path: "/registry/components/broken/broken.tsx",
      relativePath: "components/broken/broken.tsx",
      name: "broken",
    });
  }).not.toThrow();

  // Should create new meta.json
  const meta = JSON.parse(
    vol.readFileSync("/registry/components/broken/broken.meta.json", "utf-8")
  );
  expect(meta.title).toBeDefined();
});
```

#### TC2: Circular registry dependencies

```typescript
it("should handle circular registry dependencies", () => {
  vol.fromJSON({
    "/registry/components/a/a.tsx": `import { B } from '@/registry/components/b';`,
    "/registry/components/b/b.tsx": `import { A } from '@/registry/components/a';`,
  });

  const resultA = processRegistryFile({
    path: "/registry/components/a/a.tsx",
    relativePath: "components/a/a.tsx",
    name: "a",
  });

  expect(resultA.registryJson.registryDependencies).toContain(
    expect.stringContaining("/r/b.json")
  );
});
```

#### TC3: Special characters in component names

```typescript
it("should handle component names with special characters", () => {
  vol.fromJSON({
    "/registry/components/my-special-component_v2/index.tsx": `export default function Component() {}`,
  });

  const items = getAllRegistryItems();

  expect(items[0].name).toBe("my-special-component_v2");
});
```

#### TC4: Empty file content

```typescript
it("should handle empty file content", () => {
  vol.fromJSON({
    "/registry/components/empty/empty.tsx": "",
  });

  const result = processRegistryFile({
    path: "/registry/components/empty/empty.tsx",
    relativePath: "components/empty/empty.tsx",
    name: "empty",
  });

  expect(result.registryJson.dependencies).toEqual([]);
  expect(result.registryJson.files).toHaveLength(1); // Just the empty file
});
```

#### TC5: Very deep directory structure

```typescript
it("should handle deeply nested directory structures", () => {
  vol.fromJSON({
    "/registry/components/deep/nested/structure/component/index.tsx": `export default function Deep() {}`,
  });

  const files = scanRegistryFiles("/registry");

  expect(files).toHaveLength(1);
  expect(files[0]).toContain("deep/nested/structure/component/index.tsx");
});
```

---

## Phase 7: Performance & Optimization Tests

### Task 7.1: Performance Tests

**File:** `scripts/__tests__/performance.test.ts`

**Test Cases:**

#### TC1: Large registry (100+ items)

```typescript
it("should process 100+ registry items efficiently", async () => {
  const items: Record<string, string> = {};

  for (let i = 0; i < 150; i++) {
    items[
      `/registry/components/comp-${i}/comp-${i}.tsx`
    ] = `export default function Comp${i}() {}`;
  }

  vol.fromJSON(items);

  const startTime = Date.now();
  await execAsync("node scripts/create-registry-json.js");
  const duration = Date.now() - startTime;

  // Should complete within reasonable time (adjust threshold as needed)
  expect(duration).toBeLessThan(10000); // 10 seconds
});
```

#### TC2: Files with many imports

```typescript
it("should handle files with 50+ imports efficiently", () => {
  const imports = Array.from(
    { length: 50 },
    (_, i) => `import { Component${i} } from '@pkg/lib${i}';`
  ).join("\n");

  vol.fromJSON({
    "/registry/components/heavy/heavy.tsx": imports,
  });

  const startTime = Date.now();
  const result = processRegistryFile({
    path: "/registry/components/heavy/heavy.tsx",
    relativePath: "components/heavy/heavy.tsx",
    name: "heavy",
  });
  const duration = Date.now() - startTime;

  expect(result.registryJson.dependencies.length).toBeGreaterThan(40);
  expect(duration).toBeLessThan(1000); // 1 second
});
```

---

## Phase 8: Test Coverage & Documentation

### Task 8.1: Achieve Test Coverage Goals

**Coverage Targets:**

- Overall: 90%+
- Pure functions (`registry-utils.ts`): 100%
- File operations (`registry-file-ops.ts`): 95%+
- Processing logic (`registry-processor.ts`): 90%+
- CLI entry point: 80%+

**Run coverage:**

```bash
pnpm vitest --coverage
```

---

### Task 8.2: Update Documentation

**Files to create/update:**

1. **README.md** (in scripts/)

   - Add "Testing" section
   - Document how to run tests
   - Explain test structure

2. **CONTRIBUTING.md** (project root)
   - Add guidelines for adding new tests
   - Explain when to add unit vs integration tests

---

## Running Tests

### Commands

```bash
# Run all tests
pnpm test:scripts

# Run specific test file
pnpm vitest scripts/__tests__/registry-utils.test.ts

# Run in watch mode
pnpm vitest --watch

# Run with coverage
pnpm vitest --coverage

# Run only e2e tests
pnpm vitest scripts/__tests__/e2e/
```

### Test Execution Order

1. **Unit tests first** (fast feedback)

   - `registry-utils.test.ts`

2. **Integration tests** (file operations)

   - `registry-file-ops.test.ts`

3. **Processing tests** (complex logic)

   - `registry-processor.test.ts`

4. **E2E tests last** (slowest)
   - `cli.test.ts`

---

## Success Criteria

### Phase Completion Checklist

- [ ] Phase 1: Setup & Refactoring complete
- [ ] Phase 2: All pure function tests passing
- [ ] Phase 3: All file operation tests passing
- [ ] Phase 4: All processing logic tests passing
- [ ] Phase 5: E2E tests passing
- [ ] Phase 6: Edge case handling validated
- [ ] Phase 7: Performance benchmarks met
- [ ] Phase 8: Coverage goals achieved

### Quality Gates

- [ ] All tests pass in CI/CD
- [ ] No flaky tests (run 10x to verify)
- [ ] Test execution time < 30 seconds (excluding e2e)
- [ ] Zero test warnings or errors
- [ ] Documentation updated

---

## Notes & Considerations

1. **memfs Limitations:**

   - Cannot test actual file permissions
   - May behave differently than real fs in edge cases
   - Consider real filesystem tests for critical paths

2. **Environment Variables:**

   - Always restore `process.env` in `afterEach`
   - Use `vi.mock()` for process.cwd() when needed

3. **Async Operations:**

   - Use `async/await` consistently
   - Ensure proper cleanup in `afterEach`

4. **Test Isolation:**

   - Each test should be independent
   - Reset all mocks between tests
   - Clear memfs volume after each test

5. **CI/CD Integration:**
   - Add test script to `package.json`
   - Configure GitHub Actions to run tests
   - Fail build on test failures or coverage drops
