---
title: mui-treasury CLI v0.4.0
date: 07-04-2026
reference: .claude/tasks/07-04-2026-mui-treasury-cli/tech-analysis.md
---

# Implementation Plan: `mui-treasury` CLI v0.4.0

## Phase 0: Monorepo Setup [ ]

Convert the project to a Turborepo monorepo with `apps/website` and `packages/cli`.

### 0.1 Create root workspace config

- Create `pnpm-workspace.yaml`:
  ```yaml
  packages:
    - "apps/*"
    - "packages/*"
  ```
- Create `turbo.json`:
  ```json
  {
    "$schema": "https://turbo.build/schema.json",
    "tasks": {
      "build": {
        "dependsOn": ["^build"],
        "outputs": ["dist/**", ".next/**"]
      },
      "dev": {
        "cache": false,
        "persistent": true
      },
      "lint": {},
      "typecheck": {}
    }
  }
  ```
- Create root `package.json` (workspace root, private):
  ```json
  {
    "name": "mui-treasury-monorepo",
    "private": true,
    "packageManager": "pnpm@10.11.0",
    "scripts": {
      "dev": "turbo dev",
      "build": "turbo build",
      "lint": "turbo lint",
      "typecheck": "turbo typecheck"
    },
    "devDependencies": {
      "turbo": "^2.5.0"
    }
  }
  ```
- Install turbo: `pnpm add -Dw turbo`

### 0.2 Move website to `apps/website/`

- Create `apps/website/` directory
- Move ALL project files (except root workspace configs) into `apps/website/`:
  - Directories: `app/`, `components/`, `registry/`, `scripts/`, `lib/`, `hooks/`, `public/`, `docs/`, `examples/`, `tests/`
  - Config files: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `vitest.config.ts`, `playwright.config.ts`, `postcss.config.mjs`, `components.json`, `.prettierrc.json`, `next-env.d.ts`
  - Env files: `.env`, `.env.local`
  - Docs: `README.md`, `GETTING_STARTED.md`, `ai-elements-mui-conversion.md`
  - Current `package.json` → `apps/website/package.json` (keep as-is, it's already named `registry`)
- Keep at root: `CLAUDE.md`, `.gitignore`, `.github/`, `.claude/`
- Update root `.gitignore` to cover `apps/website/public/r/`, `apps/website/.next/`, etc.
- Move `pnpm-lock.yaml` stays at root (workspace root)
- The `pnpm overrides` from current package.json should move to root `package.json`

### 0.3 Verify website still works

Run from `apps/website/`:

```bash
cd apps/website && pnpm install
pnpm registry:build
pnpm dev          # verify dev server on port 4418
pnpm lint
npx tsc --noEmit
```

**Expected Result:** Dev server starts, pages load, lint and typecheck pass. All existing functionality preserved.

---

## Phase 1: CLI Package Scaffold [ ]

Create the `packages/cli/` package with build tooling.

### 1.1 Create package structure

```
packages/cli/
├── src/
│   ├── index.ts
│   ├── commands/
│   │   └── add.ts
│   ├── registry/
│   │   ├── schema.ts
│   │   ├── fetcher.ts
│   │   ├── resolver.ts
│   │   └── errors.ts
│   └── utils/
│       ├── logger.ts
│       ├── highlighter.ts
│       ├── spinner.ts
│       ├── handle-error.ts
│       └── get-package-manager.ts
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

### 1.2 `packages/cli/package.json`

```json
{
  "name": "mui-treasury",
  "version": "0.4.0",
  "description": "CLI for adding MUI Treasury components to your project",
  "type": "module",
  "bin": {
    "mui-treasury": "./dist/index.js"
  },
  "main": "./dist/index.js",
  "files": ["dist"],
  "engines": {
    "node": ">=18"
  },
  "scripts": {
    "dev": "tsup --watch",
    "build": "tsup",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "commander": "^14.0.0",
    "zod": "^3.24.0",
    "prompts": "^2.4.2",
    "kleur": "^4.1.5",
    "ora": "^8.2.0"
  },
  "devDependencies": {
    "tsup": "^8.5.0",
    "typescript": "^5.9.0",
    "@types/prompts": "^2.4.9",
    "@types/node": "^22.0.0"
  }
}
```

### 1.3 `packages/cli/tsup.config.ts`

Copy pattern from shadcn (`/Users/siriwatknp/Personal-Repos/ui/packages/shadcn/tsup.config.ts`), simplified:

```typescript
import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  sourcemap: false,
  minify: true,
  target: "esnext",
  outDir: "dist",
  treeshake: true,
});
```

### 1.4 `packages/cli/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "declaration": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "dist",
    "rootDir": "src",
    "resolveJsonModule": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

### 1.5 Entry point `src/index.ts`

Copy pattern from shadcn (`/Users/siriwatknp/Personal-Repos/ui/packages/shadcn/src/index.ts`):

```typescript
#!/usr/bin/env node
import { Command } from "commander";

import { add } from "@/commands/add";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const program = new Command()
    .name("mui-treasury")
    .description("add MUI Treasury components to your project")
    .version("0.4.0", "-v, --version", "display the version number");

  program.addCommand(add);

  program.parse();
}

main();
```

### 1.6 Verify build

```bash
cd packages/cli && pnpm install && pnpm build
```

**Expected Result:** `dist/index.js` is generated, running `node dist/index.js --version` prints `0.4.0`.

---

## Phase 2: Utility Layer [ ]

Create shared utilities copied from shadcn patterns.

### 2.1 `src/utils/highlighter.ts`

Copy directly from shadcn (`/Users/siriwatknp/Personal-Repos/ui/packages/shadcn/src/utils/highlighter.ts`):

```typescript
import { cyan, green, red, yellow } from "kleur/colors";

export const highlighter = {
  error: red,
  warn: yellow,
  info: cyan,
  success: green,
};
```

### 2.2 `src/utils/logger.ts`

Copy from shadcn (`/Users/siriwatknp/Personal-Repos/ui/packages/shadcn/src/utils/logger.ts`):

```typescript
import { highlighter } from "@/utils/highlighter";

export const logger = {
  error(...args: unknown[]) {
    console.log(highlighter.error(args.join(" ")));
  },
  warn(...args: unknown[]) {
    console.log(highlighter.warn(args.join(" ")));
  },
  info(...args: unknown[]) {
    console.log(highlighter.info(args.join(" ")));
  },
  success(...args: unknown[]) {
    console.log(highlighter.success(args.join(" ")));
  },
  log(...args: unknown[]) {
    console.log(args.join(" "));
  },
  break() {
    console.log("");
  },
};
```

### 2.3 `src/utils/spinner.ts`

Copy from shadcn (`/Users/siriwatknp/Personal-Repos/ui/packages/shadcn/src/utils/spinner.ts`):

```typescript
import ora, { type Options } from "ora";

export function spinner(text: Options["text"], options?: { silent?: boolean }) {
  return ora({
    text,
    isSilent: options?.silent,
  });
}
```

### 2.4 `src/utils/handle-error.ts`

Simplified from shadcn (`/Users/siriwatknp/Personal-Repos/ui/packages/shadcn/src/utils/handle-error.ts`), adapted to our error types:

```typescript
import { z } from "zod";

import { RegistryError } from "@/registry/errors";
import { highlighter } from "@/utils/highlighter";
import { logger } from "@/utils/logger";

export function handleError(error: unknown) {
  logger.break();
  logger.error(
    "Something went wrong. Please check the error below for more details.",
  );
  logger.error("If the problem persists, please open an issue on GitHub.");
  logger.error("");

  if (typeof error === "string") {
    logger.error(error);
    logger.break();
    process.exit(1);
  }

  if (error instanceof RegistryError) {
    if (error.message) {
      logger.error(error.message);
    }
    if (error.suggestion) {
      logger.error("\nSuggestion:");
      logger.error(error.suggestion);
    }
    logger.break();
    process.exit(1);
  }

  if (error instanceof z.ZodError) {
    logger.error("Validation failed:");
    for (const [key, value] of Object.entries(error.flatten().fieldErrors)) {
      logger.error(`- ${highlighter.info(key)}: ${value}`);
    }
    logger.break();
    process.exit(1);
  }

  if (error instanceof Error) {
    logger.error(error.message);
    logger.break();
    process.exit(1);
  }

  logger.break();
  process.exit(1);
}
```

### 2.5 `src/utils/get-package-manager.ts`

Detect package manager for dependency install suggestion:

```typescript
import { existsSync } from "fs";
import path from "path";

export function getPackageManager(
  cwd: string,
): "pnpm" | "yarn" | "bun" | "npm" {
  if (existsSync(path.resolve(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (existsSync(path.resolve(cwd, "yarn.lock"))) return "yarn";
  if (
    existsSync(path.resolve(cwd, "bun.lockb")) ||
    existsSync(path.resolve(cwd, "bun.lock"))
  )
    return "bun";
  return "npm";
}
```

**Expected Result:** Build passes, all utils importable.

---

## Phase 3: Registry Schema & Errors [ ]

Define the types and error classes for registry operations.

### 3.1 `src/registry/schema.ts`

Minimal schema derived from shadcn (`/Users/siriwatknp/Personal-Repos/ui/packages/shadcn/src/registry/schema.ts`). Only include what we need:

```typescript
import { z } from "zod";

export const registryItemFileSchema = z.object({
  path: z.string(),
  content: z.string().optional(),
  type: z.string(),
  target: z.string(),
});

export const registryItemSchema = z.object({
  $schema: z.string().optional(),
  name: z.string(),
  type: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional().default([]),
  devDependencies: z.array(z.string()).optional().default([]),
  registryDependencies: z.array(z.string()).optional().default([]),
  files: z.array(registryItemFileSchema).optional().default([]),
  meta: z.record(z.any()).optional(),
});

export type RegistryItem = z.infer<typeof registryItemSchema>;
export type RegistryItemFile = z.infer<typeof registryItemFileSchema>;
```

### 3.2 `src/registry/errors.ts`

Simplified from shadcn (`/Users/siriwatknp/Personal-Repos/ui/packages/shadcn/src/registry/errors.ts`). Keep only the error classes we use:

```typescript
export class RegistryError extends Error {
  public readonly suggestion?: string;

  constructor(message: string, options?: { suggestion?: string }) {
    super(message);
    this.name = "RegistryError";
    this.suggestion = options?.suggestion;
  }
}

export class RegistryNotFoundError extends RegistryError {
  constructor(public readonly url: string) {
    super(`The item at ${url} was not found.`, {
      suggestion:
        "Check if the item name is correct and the registry URL is accessible.",
    });
    this.name = "RegistryNotFoundError";
  }
}

export class RegistryFetchError extends RegistryError {
  constructor(
    public readonly url: string,
    statusCode?: number,
  ) {
    super(
      statusCode
        ? `Failed to fetch from registry (${statusCode}): ${url}`
        : `Failed to fetch from registry: ${url}`,
      { suggestion: "Check your network connection and try again." },
    );
    this.name = "RegistryFetchError";
  }
}

export class RegistryParseError extends RegistryError {
  constructor(
    public readonly url: string,
    cause?: unknown,
  ) {
    super(`Failed to parse registry item: ${url}`, {
      suggestion: "The registry item may have an invalid format.",
    });
    this.name = "RegistryParseError";
  }
}
```

**Expected Result:** Build passes, types are correct.

---

## Phase 4: Registry Fetcher [ ]

Implement HTTP fetching with caching, adapted from shadcn's fetcher.

### 4.1 `src/registry/fetcher.ts`

Adapt from shadcn (`/Users/siriwatknp/Personal-Repos/ui/packages/shadcn/src/registry/fetcher.ts`). Key differences:

- Use native `fetch` (Node 18+) instead of `node-fetch`
- No proxy support initially (simpler)
- No local file support (not needed for v1)
- Registry URL constructed from base URL + name

```typescript
import {
  RegistryFetchError,
  RegistryNotFoundError,
  RegistryParseError,
} from "@/registry/errors";
import { type RegistryItem, registryItemSchema } from "@/registry/schema";

const cache = new Map<string, Promise<RegistryItem>>();

export function clearCache() {
  cache.clear();
}

export async function fetchRegistryItem(
  name: string,
  registryUrl: string,
): Promise<RegistryItem> {
  const url = `${registryUrl}/${name}.json`;

  if (cache.has(url)) {
    return cache.get(url)!;
  }

  const promise = (async () => {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new RegistryNotFoundError(url);
      }
      throw new RegistryFetchError(url, response.status);
    }

    const json = await response.json();

    try {
      return registryItemSchema.parse(json);
    } catch (error) {
      throw new RegistryParseError(url, error);
    }
  })();

  cache.set(url, promise);
  return promise;
}

// Fetch by full URL (for registryDependencies stored as URLs)
export async function fetchRegistryItemByUrl(
  url: string,
): Promise<RegistryItem> {
  if (cache.has(url)) {
    return cache.get(url)!;
  }

  const promise = (async () => {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new RegistryNotFoundError(url);
      }
      throw new RegistryFetchError(url, response.status);
    }

    const json = await response.json();

    try {
      return registryItemSchema.parse(json);
    } catch (error) {
      throw new RegistryParseError(url, error);
    }
  })();

  cache.set(url, promise);
  return promise;
}
```

**Expected Result:** Can fetch a single registry item by name from a URL.

---

## Phase 5: Dependency Resolver [ ]

Implement recursive dependency resolution, adapted from shadcn's resolver.

### 5.1 `src/registry/resolver.ts`

Simplified from shadcn (`/Users/siriwatknp/Personal-Repos/ui/packages/shadcn/src/registry/resolver.ts`). Key differences:

- No config/namespace handling
- No theme resolution
- No CSS vars/tailwind merging
- Just fetch items → resolve registryDependencies → deduplicate files → collect npm deps

```typescript
import { fetchRegistryItem, fetchRegistryItemByUrl } from "@/registry/fetcher";
import type { RegistryItem, RegistryItemFile } from "@/registry/schema";

export interface ResolvedRegistryTree {
  items: RegistryItem[];
  dependencies: string[];
  devDependencies: string[];
  files: RegistryItemFile[];
}

// Extract item name from a registry dependency (URL or bare name)
function extractNameFromDep(dep: string): string | null {
  if (dep.startsWith("http")) {
    const match = dep.match(/\/([^/]+)\.json$/);
    return match ? match[1] : null;
  }
  return dep;
}

export async function resolveRegistryTree(
  names: string[],
  registryUrl: string,
): Promise<ResolvedRegistryTree> {
  const visited = new Set<string>();
  const items: RegistryItem[] = [];

  async function resolve(nameOrUrl: string) {
    // Normalize: extract name for dedup tracking
    const trackingKey = nameOrUrl.startsWith("http")
      ? nameOrUrl
      : `${registryUrl}/${nameOrUrl}.json`;

    if (visited.has(trackingKey)) return;
    visited.add(trackingKey);

    // Fetch the item
    const item = nameOrUrl.startsWith("http")
      ? await fetchRegistryItemByUrl(nameOrUrl)
      : await fetchRegistryItem(nameOrUrl, registryUrl);

    // Resolve transitive dependencies first (DFS post-order)
    if (item.registryDependencies?.length) {
      for (const dep of item.registryDependencies) {
        if (dep.startsWith("http")) {
          // Full URL dependency — fetch directly
          await resolve(dep);
        } else {
          // Bare name — resolve via registry URL
          const name = extractNameFromDep(dep);
          if (name) await resolve(name);
        }
      }
    }

    items.push(item);
  }

  const uniqueNames = [...new Set(names)];
  for (const name of uniqueNames) {
    await resolve(name);
  }

  // Collect and deduplicate dependencies
  const allDeps = new Set<string>();
  const allDevDeps = new Set<string>();
  const fileMap = new Map<string, RegistryItemFile>();

  for (const item of items) {
    item.dependencies?.forEach((d) => allDeps.add(d));
    item.devDependencies?.forEach((d) => allDevDeps.add(d));
    item.files?.forEach((f) => {
      // Deduplicate by target path (last writer wins)
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
```

**Expected Result:** Given `["ai-conversation"]`, resolves the item and all transitive deps, returns merged dep lists and deduplicated files.

---

## Phase 6: Add Command [ ]

Implement the `add` command that ties everything together.

### 6.1 `src/commands/add.ts`

Modeled after shadcn (`/Users/siriwatknp/Personal-Repos/ui/packages/shadcn/src/commands/add.ts`), but dramatically simplified:

```typescript
import { Command } from "commander";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import prompts from "prompts";
import { z } from "zod";

import { clearCache } from "@/registry/fetcher";
import { resolveRegistryTree } from "@/registry/resolver";
import { getPackageManager } from "@/utils/get-package-manager";
import { handleError } from "@/utils/handle-error";
import { highlighter } from "@/utils/highlighter";
import { logger } from "@/utils/logger";
import { spinner } from "@/utils/spinner";

const DEFAULT_REGISTRY_URL = "https://mui-treasury.com/r";

const addOptionsSchema = z.object({
  components: z.array(z.string()),
  yes: z.boolean(),
  overwrite: z.boolean(),
  cwd: z.string(),
  registry: z.string(),
});

export const add = new Command()
  .name("add")
  .description("add components to your project")
  .argument("[components...]", "component names to add")
  .option("-y, --yes", "skip confirmation prompt.", false)
  .option("-o, --overwrite", "overwrite existing files.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd(),
  )
  .option("-r, --registry <url>", "registry base URL.", DEFAULT_REGISTRY_URL)
  .action(async (components, opts) => {
    try {
      const options = addOptionsSchema.parse({
        components,
        ...opts,
        cwd: path.resolve(opts.cwd),
      });

      if (!options.components.length) {
        logger.error(
          "No components specified. Usage: mui-treasury add <component...>",
        );
        process.exit(1);
      }

      // Preflight: check cwd exists and has package.json
      if (!existsSync(options.cwd)) {
        logger.error(
          `Directory ${highlighter.info(options.cwd)} does not exist.`,
        );
        process.exit(1);
      }
      if (!existsSync(path.resolve(options.cwd, "package.json"))) {
        logger.error(
          `No package.json found in ${highlighter.info(options.cwd)}.`,
        );
        process.exit(1);
      }

      // Resolve registry tree
      const resolveSpinner = spinner("Resolving components...").start();
      const tree = await resolveRegistryTree(
        options.components,
        options.registry,
      );
      resolveSpinner.succeed(`Resolved ${tree.items.length} component(s).`);

      // Write files
      const created: string[] = [];
      const updated: string[] = [];
      const skipped: string[] = [];

      for (const file of tree.files) {
        if (!file.content) continue;

        const targetPath = path.resolve(options.cwd, file.target);
        const targetDir = path.dirname(targetPath);
        const relativePath = path.relative(options.cwd, targetPath);

        if (existsSync(targetPath)) {
          // Check if content is identical
          const existingContent = readFileSync(targetPath, "utf-8");
          if (existingContent === file.content) {
            skipped.push(relativePath);
            continue;
          }

          if (!options.overwrite && !options.yes) {
            const { confirm } = await prompts({
              type: "confirm",
              name: "confirm",
              message: `File ${highlighter.info(relativePath)} already exists. Overwrite?`,
              initial: false,
            });
            if (!confirm) {
              skipped.push(relativePath);
              continue;
            }
          }
          updated.push(relativePath);
        } else {
          created.push(relativePath);
        }

        mkdirSync(targetDir, { recursive: true });
        writeFileSync(targetPath, file.content, "utf-8");
      }

      // Summary
      logger.break();
      if (created.length) {
        logger.success(`Created:`);
        created.forEach((f) => logger.log(`  - ${f}`));
      }
      if (updated.length) {
        logger.success(`Updated:`);
        updated.forEach((f) => logger.log(`  - ${f}`));
      }
      if (skipped.length) {
        logger.info(`Skipped:`);
        skipped.forEach((f) => logger.log(`  - ${f}`));
      }

      // Print dependency install command
      const allDeps = [...tree.dependencies, ...tree.devDependencies];
      if (allDeps.length) {
        const pm = getPackageManager(options.cwd);
        const installCmd = pm === "npm" ? "npm install" : `${pm} add`;
        logger.break();
        logger.info("Install dependencies:");
        logger.log(`  ${installCmd} ${allDeps.join(" ")}`);
      }

      logger.break();
    } catch (error) {
      handleError(error);
    } finally {
      clearCache();
    }
  });
```

### 6.2 Build and test locally

```bash
cd packages/cli
pnpm build
# Test against live registry
node dist/index.js add ai-actions --cwd /tmp/test-project --registry https://mui-treasury.com/r
```

**Expected Result:** Running `mui-treasury add ai-actions --cwd <some-project>` fetches the component, writes files to `src/mui-treasury/components/ai-actions/`, prints dep install command.

---

## Phase 7: Integration Testing [ ]

Test the full flow end-to-end.

### 7.1 Test against local dev server

```bash
# Terminal 1: Start dev server
cd apps/website && pnpm dev

# Terminal 2: Test CLI against local registry
cd packages/cli && pnpm build
mkdir -p /tmp/test-cli && cd /tmp/test-cli && npm init -y
node <path-to-cli>/dist/index.js add ai-actions --registry http://localhost:4418/r
```

Verify:

- [ ] Files written to `src/mui-treasury/components/ai-actions/`
- [ ] `ai-actions.tsx` and `index.ts` created
- [ ] Dependency list printed
- [ ] Running again without `--overwrite` prompts for confirmation
- [ ] `--overwrite` flag skips prompt
- [ ] `--yes` flag skips prompt
- [ ] Multiple items: `add ai-actions ai-message` works
- [ ] Non-existent item shows clear error
- [ ] Missing `package.json` shows clear error

### 7.2 Test `--cwd` for monorepo subfolder

```bash
mkdir -p /tmp/test-monorepo/packages/app && cd /tmp/test-monorepo/packages/app && npm init -y
node <path-to-cli>/dist/index.js add ai-actions --cwd /tmp/test-monorepo/packages/app --registry http://localhost:4418/r
```

Verify files written under `/tmp/test-monorepo/packages/app/src/mui-treasury/...`

**Expected Result:** All integration tests pass manually.

---

## Phase 8: Polish & Publish Prep [ ]

### 8.1 Add README for the CLI package

`packages/cli/README.md` with:

- Installation: `npx mui-treasury add <component>`
- Usage examples
- Available flags

### 8.2 Test npx execution

```bash
cd packages/cli && pnpm build
# Simulate npx by running directly
node dist/index.js add ai-actions --registry https://mui-treasury.com/r --cwd /tmp/test-npx
```

### 8.3 Verify publish config

- `package.json` has `"files": ["dist"]`
- `"bin"` points to `"./dist/index.js"`
- Build output has shebang line (`#!/usr/bin/env node`)
- `pnpm pack` in `packages/cli/` produces correct tarball

**Expected Result:** Package is ready for `npm publish`. `npx mui-treasury add <component>` works.
