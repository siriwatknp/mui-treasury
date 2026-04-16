# Tech Analysis: `mui-treasury` CLI (v0.4.0)

## 1. Scope

Create a `mui-treasury` CLI package in a new Turborepo monorepo. The CLI provides an `add` command that fetches registry items from `mui-treasury.com/r/` and writes them to a target project — no config file, no auto dependency installation.

---

## 2. Monorepo Restructure

### Current State

- Single Next.js app at project root
- No workspace config (no turbo.json, no pnpm-workspace.yaml)
- `package.json` name is `registry`, private

### Target Structure

```
mui-treasury/
├── apps/
│   └── website/              ← move ALL current files here
│       ├── app/
│       ├── components/
│       ├── registry/
│       ├── scripts/
│       ├── lib/
│       ├── public/
│       ├── package.json      ← current root package.json (adjusted)
│       ├── next.config.ts
│       └── tsconfig.json
├── packages/
│   └── cli/
│       ├── src/
│       │   ├── index.ts      ← entry point (#!/usr/bin/env node)
│       │   └── commands/
│       │       └── add.ts
│       ├── package.json      ← name: "mui-treasury", version: "0.4.0"
│       ├── tsup.config.ts
│       └── tsconfig.json
├── turbo.json
├── pnpm-workspace.yaml
├── package.json              ← root workspace package.json
├── .gitignore
└── CLAUDE.md
```

### Key Concerns

1. **Path aliases** — current `@/*` maps to root. After move, website's tsconfig paths still point to `@/*: ["./*"]` which resolves relative to `apps/website/`. No change needed in tsconfig, but all import paths stay the same.

2. **Scripts** — `scripts/` dir uses `process.cwd()` and `path.join(process.cwd(), "registry")`. After move, these scripts run from `apps/website/`, so `cwd` is still correct as long as `pnpm dev` runs from there.

3. **`.gitignore`** — `public/r/` is gitignored. Keep that in `apps/website/.gitignore` or root.

4. **Root config files** — `.env`, `eslint.config.mjs`, `vitest.config.ts`, `playwright.config.ts` need to move to `apps/website/` or stay at root with adjusted paths.

5. **CLAUDE.md** — stays at root (project-level instructions).

### Complexity: Low-Medium

Moving files is straightforward. Main risk is broken paths in scripts and config files. Needs careful verification that `pnpm dev`, `pnpm build`, `pnpm lint`, and `pnpm test` all work after the move.

---

## 3. CLI Package Architecture

### Technology Stack (mirrors shadcn)

- **commander** v14 — CLI framework (already a dep)
- **zod** — option validation
- **prompts** — interactive prompts (file overwrite confirmation)
- **kleur** — colored terminal output
- **ora** — spinners
- **node-fetch** or native `fetch` — registry HTTP calls
- **tsup** — bundling
- **TypeScript** — source language

### Entry Point (`src/index.ts`)

```
#!/usr/bin/env node
import { Command } from "commander"
import { add } from "./commands/add"

new Command()
  .name("mui-treasury")
  .version("0.4.0")
  .addCommand(add)
  .parse()
```

### `add` Command Flow

```
mui-treasury add <items...> [--cwd] [--registry] [--overwrite] [--yes]
│
├── 1. Validate options (zod)
├── 2. Resolve cwd (default: process.cwd())
├── 3. Check cwd exists + has package.json
│
├── 4. Fetch registry items
│   ├── GET {registry}/{name}.json for each item
│   ├── Parse response, validate schema
│   └── Cache fetched items (in-memory Map)
│
├── 5. Resolve registry dependencies (recursive)
│   ├── Collect registryDependencies from each item
│   ├── Fetch transitive deps (skip already visited)
│   ├── Topological sort for correct write order
│   └── Deduplicate files by target path
│
├── 6. Check file conflicts
│   ├── For each file, check if target exists
│   ├── If exists and not --overwrite: prompt user
│   ├── If --yes: auto-confirm
│   └── Collect skip/overwrite decisions
│
├── 7. Write files
│   ├── mkdir -p for each target directory
│   ├── Write file content to target path
│   └── Track created/updated/skipped
│
├── 8. Collect all npm dependencies
│   ├── Merge dependencies from all resolved items
│   ├── Deduplicate
│   └── Print install command suggestion
│
└── 9. Summary output
    ├── Files created/updated/skipped
    └── "Run: pnpm add <deps>" suggestion
```

---

## 4. Registry JSON Format (existing)

The CLI consumes the already-built JSON files from `public/r/`. Format:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "ai-conversation",
  "type": "registry:item",
  "title": "Ai Conversation",
  "description": "...",
  "dependencies": [
    "@mui/material",
    "lucide-react",
    "@emotion/react",
    "@emotion/styled"
  ],
  "registryDependencies": [],
  "files": [
    {
      "path": "components/ai-conversation/ai-conversation.tsx",
      "target": "src/mui-treasury/components/ai-conversation/ai-conversation.tsx",
      "content": "\"use client\";\n...",
      "type": "registry:item"
    },
    {
      "path": "components/ai-conversation/index.ts",
      "target": "src/mui-treasury/components/ai-conversation/index.ts",
      "content": "export * from './ai-conversation';\n",
      "type": "registry:item"
    }
  ],
  "meta": { "category": "ai", "subcategory": "elements" }
}
```

### Important Notes

- `registryDependencies` are currently **all empty** across 353 items. The build system supports them (extracts from `@/registry/` imports), but in practice items are self-contained.
- `registryDependencies` are stored as **full URLs** (e.g., `https://mui-treasury.com/r/ai-actions.json`), not bare names. The CLI must handle this — extract the name or fetch the URL directly.
- `target` is always `src/mui-treasury/{type}/{name}/{file}`.
- `content` is embedded as a string (not a URL reference).

---

## 5. Key Differences from shadcn CLI

| Feature              | shadcn                                             | mui-treasury                                     |
| -------------------- | -------------------------------------------------- | ------------------------------------------------ |
| Config file          | `components.json` required                         | None                                             |
| Dependency install   | Auto via package manager                           | Print list only                                  |
| Registry URL         | Stored in config + built-in                        | CLI flag (default: prod URL)                     |
| File path resolution | Complex (aliases, framework detection, src dir)    | Simple: `target` field as-is relative to `--cwd` |
| Transformers         | 12+ AST transforms (imports, RSC, CSS vars, icons) | None — files written as-is                       |
| TSX → JSX            | Supported                                          | Not needed (TS only)                             |
| Tailwind config      | Auto-merge                                         | Not needed                                       |
| CSS variables        | Auto-update globals.css                            | Not needed                                       |
| Init command         | Full project scaffolding                           | Not needed                                       |

This means the CLI is **dramatically simpler** than shadcn. No config loading, no AST transforms, no framework detection, no Tailwind integration.

---

## 6. Dependency Resolution Design

### From shadcn (simplified for our needs)

```typescript
async function resolveRegistryTree(
  names: string[],
  registryUrl: string,
  cache: Map<string, RegistryItem>,
): Promise<RegistryItem[]> {
  const visited = new Set<string>();
  const result: RegistryItem[] = [];

  async function resolve(name: string) {
    if (visited.has(name)) return;
    visited.add(name);

    const item = await fetchItem(name, registryUrl, cache);

    // Resolve transitive deps
    for (const dep of item.registryDependencies) {
      const depName = extractNameFromUrl(dep); // handle full URL or bare name
      await resolve(depName);
    }

    result.push(item);
  }

  for (const name of names) await resolve(name);
  return result; // dependencies come before dependents (natural DFS order)
}
```

DFS post-order gives us a natural topological sort (deps before dependents). No need for Kahn's algorithm given the simpler requirements.

### URL Handling for registryDependencies

Registry deps are stored as full URLs like `https://mui-treasury.com/r/ai-actions.json`. The CLI should:

1. If dep starts with `http`: fetch directly
2. Otherwise: treat as bare name, construct URL from `--registry` flag

---

## 7. File Writing Design

Simplified from shadcn — no transforms needed:

```typescript
async function writeFiles(
  items: RegistryItem[],
  cwd: string,
  options: { overwrite: boolean; yes: boolean }
): Promise<{ created: string[]; updated: string[]; skipped: string[] }> {
  const results = { created: [], updated: [], skipped: [] }

  for (const item of items) {
    for (const file of item.files) {
      const targetPath = path.resolve(cwd, file.target)

      if (fs.existsSync(targetPath)) {
        if (!options.overwrite && !options.yes) {
          const { confirm } = await prompts(...)
          if (!confirm) { results.skipped.push(targetPath); continue }
        }
        results.updated.push(targetPath)
      } else {
        results.created.push(targetPath)
      }

      await fs.mkdir(path.dirname(targetPath), { recursive: true })
      await fs.writeFile(targetPath, file.content, "utf-8")
    }
  }
  return results
}
```

---

## 8. Package Configuration

### `packages/cli/package.json`

```json
{
  "name": "mui-treasury",
  "version": "0.4.0",
  "type": "module",
  "bin": {
    "mui-treasury": "./dist/index.js"
  },
  "main": "./dist/index.js",
  "files": ["dist"],
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
    "@types/prompts": "^2.4.9"
  }
}
```

### `packages/cli/tsup.config.ts`

```typescript
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  clean: true,
  dts: true,
  minify: true,
  target: 'esnext',
  treeshake: true,
  outDir: 'dist',
  banner: { js: '#!/usr/bin/env node' },
});
```

### Fetch Strategy

Node 18+ has native `fetch` — no need for `node-fetch`. Set `engines: { node: ">=18" }`.

---

## 9. Turbo Configuration

### `turbo.json`

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

### `pnpm-workspace.yaml`

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

---

## 10. Risk Assessment

| Risk                                                                 | Impact | Mitigation                                                                                |
| -------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| Monorepo move breaks imports/scripts                                 | High   | Run full test suite after move; verify dev/build/lint                                     |
| `registryDependencies` as full URLs may break with `--registry` flag | Medium | Normalize URLs: if dep URL domain differs from `--registry`, rewrite to `--registry` base |
| No config file means no path customization                           | Low    | Acceptable for v1; users get `src/mui-treasury/` path                                     |
| Registry down = CLI unusable                                         | Low    | Expected trade-off; no offline mode planned                                               |

---

## 11. Implementation Complexity

**Monorepo restructure**: ~Medium (file moves + config adjustments + verification)  
**CLI package**: ~Low-Medium (simple fetch → write flow, no transforms)  
**Total estimated files to create**: ~8-10 new files for CLI package  
**Total estimated files to move/modify**: All current files move to `apps/website/`, new root configs

---

## 12. Suggested Implementation Order

1. **Monorepo restructure** — move files, add turbo/workspace config, verify everything works
2. **CLI scaffold** — package.json, tsup, tsconfig, entry point
3. **Registry fetching** — fetch items by name, validate schema, cache
4. **Dependency resolution** — recursive fetch of registryDependencies
5. **File writing** — conflict detection, prompts, write to disk
6. **Dependency reporting** — collect and print npm deps
7. **Polish** — error messages, spinner, colored output
8. **Testing** — unit tests for fetch/resolve/write, integration test against local registry
