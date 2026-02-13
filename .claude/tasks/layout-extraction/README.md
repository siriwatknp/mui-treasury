# Layout App Extraction Plan

## Context

This project is MUI Treasury (`/Users/siriwatknp/Personal-Repos/mui-treasury`), a Next.js 15 + MUI component registry. We are extracting layout components from an old branch into the new registry structure.

## Branches

- **Source branch**: `origin/ditto-layout` — contains the original layout v6 code under `blocks/` directory. DO NOT checkout this branch. Read files using `git show origin/ditto-layout:<path>`.
- **Working branch**: `jun-layout` — current branch where extracted files are written. All new files go here.

## How to read source files

```bash
# Read a single file from the source branch
git show origin/ditto-layout:blocks/layout-core-v6/Root.tsx

# List files in a directory on the source branch
git ls-tree --name-only origin/ditto-layout blocks/mockup-dashboard/
```

## What's already done

`registry/layout/core/` — 13 component files + index.ts extracted from `blocks/layout-core-v6/`.

Key changes made during core extraction:

- Replaced `import { styled } from "./zero-styled"` → `import { styled } from "@mui/material/styles"`
- Replaced `// @ts-ignore` → `// @ts-expect-error` before JSX elements spreading `BoxProps`
- Replaced `as any` → `as never` for CSS custom property type overrides
- Fixed `let` → `const`, `JSX.IntrinsicElements` → `React.ComponentPropsWithoutRef`
- Converted SVG attributes to camelCase (`stroke-width` → `strokeWidth`)

Apply the same patterns when extracting new files.

## Target directory structure

```
registry/layout/
├── core/                          ✅ Done (13 files)
│   ├── Content.tsx
│   ├── EdgeSidebar.tsx
│   ├── EdgeSidebarContent.tsx
│   ├── EdgeSidebarRight.tsx
│   ├── EdgeTemporaryClose.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── InsetAvoidingView.tsx
│   ├── InsetContainer.tsx
│   ├── InsetSidebar.tsx
│   ├── InsetSidebarContent.tsx
│   ├── Root.tsx
│   ├── SharedEdgeSidebar.tsx
│   └── index.ts
├── mockups/                        ✅ Done (6 files)
│   ├── utils.ts
│   ├── shapes.tsx
│   ├── typography.tsx
│   ├── dashboard.tsx
│   ├── tabs.tsx
│   └── index.ts
├── app-analytics/                  ✅ Done (1 file)
│   └── app-analytics.tsx
├── app-messenger/                  ✅ Done (11 files)
│   ├── app-messenger.tsx
│   └── components/                 (9 files, JS → TSX)
│       ├── ChatBar.tsx
│       ├── ChatDialog.tsx
│       ├── ChatList.tsx
│       ├── ChatListItem.tsx
│       ├── ChatMsg.tsx
│       ├── ChatSettings.tsx
│       ├── ChatsHeader.tsx
│       ├── ConversationHead.tsx
│       ├── MessengerSearch.tsx
│       └── index.ts
├── app-react-legacy/               ✅ Done (5 files)
│   ├── app-react-legacy.tsx
│   └── components/                 (3 files, JS → TSX)
│       ├── ReactContent.tsx
│       ├── ReactHeader.tsx
│       ├── ReactNextArticle.tsx
│       └── index.ts
└── app-shopping-cart/              ✅ Done (11 files)
    ├── app-shopping-cart.tsx
    └── components/                 (9 files, JS → TSX + 1 TS)
        ├── dailyShoppingTheme.ts
        ├── DailyCart.tsx
        ├── DailyCheckout.tsx
        ├── DailyHeader.tsx
        ├── DailyInteger.tsx
        ├── DailyLogo.tsx
        ├── DailySearch.tsx
        ├── DailySizeSelector.tsx
        ├── DailySummary.tsx
        └── index.ts
```

## Execution order

1. `00-shared-mockups.md` — extract shared mockup utilities (6 files)
2. `01-app-analytics.md` — depends on mockups + core (1 file)
3. `02-app-messenger.md` — depends on core only (10 files, JS → TSX)
4. `03-app-react-legacy.md` — depends on core only (4 files, JS → TSX)
5. `04-app-shopping-cart.md` — depends on core only (10 files, JS → TSX)

Order 2-5 are independent of each other (only #2 depends on #1).

## File counts

| Package           | New files | JS→TSX conversions |
| ----------------- | --------- | ------------------ |
| Shared mockups    | 6         | 0                  |
| App Analytics     | 1         | 0                  |
| App Messenger     | 1         | 9                  |
| App React Legacy  | 1         | 3                  |
| App Shopping Cart | 1         | 9                  |
| **Total**         | **10**    | **21**             |

## Validation after each extraction

Run these after writing files for each package:

```bash
# Type check (filter to only layout files)
npx tsc --noEmit 2>&1 | grep "registry/layout"

# Lint (only extracted files)
npx eslint registry/layout/<package>/
```

Both must pass with zero errors before marking a package done.

## Common concerns across all apps

- **Grid legacy API**: all apps use `Grid` with `item`/`container`/`spacing`/`justify` — may need migration to Grid v2
- **`@ts-ignore` on imports**: all V6 layout files have `// @ts-ignore` on component barrel imports — remove after TSX conversion
- **`ListItem button` prop**: deprecated in MUI v7 → `ListItemButton`
- **Deprecated TextField props**: `InputProps`, `InputLabelProps` → `slotProps`
- **External image URLs**: pravatar.cc (messenger), zacdn/hybridoutfitters/zafcdn (shopping cart) — may break over time
- **Custom themes**: messenger + shopping cart create their own themes via `createTheme` + `ThemeProvider`
