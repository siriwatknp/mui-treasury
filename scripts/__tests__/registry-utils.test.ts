import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  getRegistryBaseUrl,
  extractDependencies,
  extractDefaultExportName,
} from "../lib/registry-utils";

describe("getRegistryBaseUrl", () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    // Save original env
    originalEnv = { ...process.env };
  });

  afterEach(() => {
    // Restore original env
    process.env = originalEnv;
  });

  it("should return production URL when VERCEL_ENV=production and VERCEL_PROJECT_PRODUCTION_URL exists", () => {
    process.env.VERCEL_ENV = "production";
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "mui-plus.vercel.app";

    expect(getRegistryBaseUrl()).toBe("https://mui-plus.vercel.app");
  });

  it("should fallback to mui-treasury.com when VERCEL_ENV=production but no VERCEL_PROJECT_PRODUCTION_URL", () => {
    process.env.VERCEL_ENV = "production";
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;

    expect(getRegistryBaseUrl()).toBe("https://mui-treasury.com");
  });

  it("should return branch URL for preview deployments", () => {
    process.env.VERCEL_ENV = "preview";
    process.env.VERCEL_BRANCH_URL = "feature-branch-abc123.vercel.app";

    expect(getRegistryBaseUrl()).toBe(
      "https://feature-branch-abc123.vercel.app"
    );
  });

  it("should return localhost:3000 for local development", () => {
    delete process.env.VERCEL_ENV;
    delete process.env.VERCEL_BRANCH_URL;

    expect(getRegistryBaseUrl()).toBe("http://localhost:3000");
  });
});

describe("extractDependencies", () => {
  it("should extract unscoped npm packages", () => {
    const content = `
      import lodash from 'lodash';
      import { format } from 'date-fns';
    `;

    const deps = extractDependencies(content);
    expect(deps).toContain("lodash");
    expect(deps).toContain("date-fns");
  });

  it("should extract scoped packages like @mui/material", () => {
    const content = `
      import { Box } from '@mui/material';
      import { DataGrid } from '@mui/x-data-grid';
    `;

    const deps = extractDependencies(content);
    expect(deps).toContain("@mui/material");
    expect(deps).toContain("@mui/x-data-grid");
  });

  it("should ignore relative imports", () => {
    const content = `
      import { helper } from './utils';
      import Component from '../components/Component';
    `;

    const deps = extractDependencies(content);
    expect(deps).toHaveLength(0);
  });

  it("should ignore @/ alias imports", () => {
    const content = `
      import { Button } from '@/components/ui/button';
      import { useTheme } from '@/hooks/useTheme';
    `;

    const deps = extractDependencies(content);
    expect(deps).toHaveLength(0);
  });

  it("should automatically add @emotion/react and @emotion/styled when @mui is detected", () => {
    const content = `import { Box } from '@mui/material';`;

    const deps = extractDependencies(content);
    expect(deps).toContain("@emotion/react");
    expect(deps).toContain("@emotion/styled");
  });

  it("should filter out react (peer dependency)", () => {
    const content = `
      import React from 'react';
      import { useState } from 'react';
    `;

    const deps = extractDependencies(content);
    expect(deps).not.toContain("react");
  });

  it("should extract package name from deep imports", () => {
    const content = `import { Button } from '@mui/material/Button';`;

    const deps = extractDependencies(content);
    expect(deps).toContain("@mui/material");
  });

  it("should return empty array when no imports found", () => {
    const content = `const foo = "bar";`;

    expect(extractDependencies(content)).toEqual([]);
  });
});

describe("extractDefaultExportName", () => {
  it('should extract name from "export default function Name"', () => {
    const content = `export default function MyComponent() { return null; }`;

    expect(extractDefaultExportName(content)).toBe("MyComponent");
  });

  it('should extract name from "export default class Name"', () => {
    const content = `export default class MyClass { }`;

    expect(extractDefaultExportName(content)).toBe("MyClass");
  });

  it('should extract name from "export default const Name"', () => {
    const content = `export default const MyComponent = () => {};`;

    expect(extractDefaultExportName(content)).toBe("MyComponent");
  });

  it('should extract name from "export default ComponentName;"', () => {
    const content = `
      const MyComponent = () => {};
      export default MyComponent;
    `;

    expect(extractDefaultExportName(content)).toBe("MyComponent");
  });

  it("should return null when no default export", () => {
    const content = `export const foo = "bar";`;

    expect(extractDefaultExportName(content)).toBeNull();
  });

  it("should return null for anonymous arrow function", () => {
    const content = `export default () => {};`;

    expect(extractDefaultExportName(content)).toBeNull();
  });

  it("should return null for lowercase identifier (not a component/class)", () => {
    const content = `export default myVariable;`;

    expect(extractDefaultExportName(content)).toBeNull();
  });

  it("should extract first match when multiple patterns exist", () => {
    const content = `
      export default function FirstComponent() {}
      // This shouldn't happen but test defensive behavior
      export default class SecondComponent {}
    `;

    expect(extractDefaultExportName(content)).toBe("FirstComponent");
  });
});
