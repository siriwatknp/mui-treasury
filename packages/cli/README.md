# mui-treasury

CLI for adding [MUI Treasury](https://mui-treasury.com) components to your project.

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

| Option | Description | Default |
|---|---|---|
| `-c, --cwd <path>` | Target directory | `.` |
| `-r, --registry <url>` | Registry base URL | `https://mui-treasury.com/r` |
| `-o, --overwrite` | Overwrite existing files | `false` |
| `-y, --yes` | Skip confirmation prompts | `false` |

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
cd apps/website && pnpm dev

# In another terminal — build and run the CLI
cd packages/cli
pnpm dev:cli -- add ai-actions --cwd /tmp/test-project --registry http://localhost:4418/r
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
