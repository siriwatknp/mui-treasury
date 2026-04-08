# mui-treasury

CLI for adding [MUI Treasury](https://mui-treasury.com) components to your project. Inspired by [shadcn/ui](https://ui.shadcn.com).

## Usage

```bash
npx mui-treasury add <component...>
```

Components are written to `src/mui-treasury/` in your project. No config file required.

## Commands

### `add`

```bash
mui-treasury add <component...> [options]
```

Fetches components from the registry and writes them to your project.

| Option                 | Description               | Default                      |
| ---------------------- | ------------------------- | ---------------------------- |
| `-c, --cwd <path>`     | Target directory          | `.`                          |
| `-r, --registry <url>` | Registry base URL         | `https://mui-treasury.com/r` |
| `-o, --overwrite`      | Overwrite existing files  | `false`                      |
| `-y, --yes`            | Skip confirmation prompts | `false`                      |

**Examples:**

```bash
# Add a single component
npx mui-treasury add ai-actions

# Add multiple components
npx mui-treasury add ai-message ai-loader ai-actions

# Target a subfolder in a monorepo
npx mui-treasury add ai-actions --cwd packages/app

# Overwrite existing files without prompting
npx mui-treasury add ai-actions --overwrite
```

Dependencies are not installed automatically. After adding components, the CLI prints the install command:

```
Install dependencies:
  pnpm add @mui/material @emotion/react @emotion/styled
```

## How it differs from shadcn CLI

This CLI is a simplified fork of [shadcn/ui CLI](https://github.com/shadcn-ui/ui/tree/main/packages/shadcn) with these design decisions:

- **No config file** — no `components.json` needed. Just run `add` and it works.
- **No auto dependency install** — prints the install command instead. You decide when and how to install.
- **No AST transforms** — files are written as-is from the registry. No import rewriting, no RSC transforms, no Tailwind config merging.
- **TypeScript only** — no TSX-to-JSX conversion.
- **Registry URL as a flag** — pass `--registry` instead of storing it in a config file.
- **Fixed output path** — components always go to `src/mui-treasury/` relative to `--cwd`.

## Development

### Prerequisites

- Node.js >= 18
- pnpm

### Setup

```bash
# From the monorepo root
pnpm install
```

### Build

```bash
cd packages/cli
pnpm build
```

### Test locally

```bash
# Start the website dev server (serves the registry at localhost:4418)
pnpm dev --filter registry

# In another terminal — build and run the CLI from the root
pnpm dev:cli add ai-actions --cwd /tmp/test-project --registry http://localhost:4418/r
```

### Watch mode

```bash
cd packages/cli
pnpm dev  # rebuilds on file changes
```

## Release

Releases use [changesets](https://github.com/changesets/changesets).

### 1. Create a changeset (after making changes)

```bash
pnpm changeset
```

Commit the generated `.changeset/*.md` file with your code changes.

### 2. Publish

```bash
pnpm release
```

This runs: version bump → changelog update → build → commit → tag → npm publish → git push.
