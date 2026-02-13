~~# Shared Mockups Extraction~~ ✅ Done

Shared mockup deps used by app-analytics (and potentially others). Must extract before app-analytics.

## Context

Read `README.md` in this folder first for branch info and project context.

## Source branch

`origin/ditto-layout` — read files via `git show origin/ditto-layout:<path>`.

## Target: `registry/layout/mockups/`

## Steps

### Step 1: Create `registry/layout/mockups/utils.ts`

Source: `git show origin/ditto-layout:blocks/mockup-utils/index.ts`

Copy as-is. Already TypeScript. No import changes needed.

Exports:

- `getBaseGrey(theme)` → `grey.300` / dark: `rgba(255,255,255,0.12)`
- `getLightGrey(theme)` → `grey.200` / dark: `rgba(255,255,255,0.09)`
- `getLightestGrey(theme)` → `grey.50` / dark: `rgba(255,255,255,0.07)`
- `randomBetween(min, max, unit?)` → random number with optional unit string

No external deps. Standalone.

### Step 2: Create `registry/layout/mockups/shapes.tsx`

Merge 3 source files into one:

- `git show origin/ditto-layout:blocks/mockup-shape/Circle.tsx`
- `git show origin/ditto-layout:blocks/mockup-shape/Pill.tsx`
- `git show origin/ditto-layout:blocks/mockup-shape/Square.tsx`

All 3 components: simple `Box` with `BoxProps`, use `getBaseGrey` from utils.

Import replace:

```
../mockup-utils → ./utils
```

Combine all imports and all 3 exports into a single file.

### Step 3: Create `registry/layout/mockups/typography.tsx`

Source: `git show origin/ditto-layout:blocks/mockup-typography/MockupTypography.tsx`

Exports: `H1`, `Text`, `Word` — factory-created Box components with random widths.

Import replace:

```
../mockup-utils → ./utils
```

### Step 4: Create `registry/layout/mockups/dashboard.tsx`

Merge 6 source files into one:

- `git show origin/ditto-layout:blocks/mockup-dashboard/IconNav.tsx`
- `git show origin/ditto-layout:blocks/mockup-dashboard/LinkNav.tsx`
- `git show origin/ditto-layout:blocks/mockup-dashboard/SideNavUserInfo.tsx`
- `git show origin/ditto-layout:blocks/mockup-dashboard/StatCard.tsx`
- `git show origin/ditto-layout:blocks/mockup-dashboard/TopUsersCard.tsx`
- `git show origin/ditto-layout:blocks/mockup-dashboard/UserActiveCard.tsx`

Import replace:

```
../mockup-utils       → ./utils
../mockup-shape       → ./shapes
../mockup-typography  → ./typography
```

Combine all imports (dedupe MUI imports), combine all 6 named exports:

- `IconNavMockup` — uses `@mui/icons-material` (6 icons: AppRegistrationRounded, EventNoteRounded, ForumRounded, HomeRounded, SearchRounded, SettingsRounded), `alpha` from styles, `getLightestGrey`
- `LinkNavMockup` — uses `List`, `ListItem`, `Word`, `alpha`
- `SideNavUserInfoMockup` — uses `Circle`, `Word`, `getLightestGrey`, `getLightGrey`
- `StatCardMockup` — uses `Square`, `Word`, `getLightGrey`
- `TopUsersCardMockup` — uses `Avatar`, `Divider`, `List`, `ListItem`, `ListItemAvatar`, `Circle`, `Word`, `getLightGrey`
- `UserActiveCardMockup` — uses `LinearProgress`, `Typography`, `Circle`, `Square`, `Word`, `getLightGrey`

### Step 5: Create `registry/layout/mockups/tabs.tsx`

Source: `git show origin/ditto-layout:blocks/mockup-tabs/MockupTabs.tsx`

Single export: `UnderlineTabs` — `styled(Tabs)` with underline indicator styling.

No import changes needed. Only uses `@mui/material/styles` and `@mui/material/Tabs`.

### Step 6: Create `registry/layout/mockups/index.ts`

```ts
export * from "./utils";
export * from "./shapes";
export * from "./typography";
export * from "./dashboard";
export * from "./tabs";
```

### Step 7: Validate

```bash
npx tsc --noEmit 2>&1 | grep "registry/layout/mockups"
npx eslint registry/layout/mockups/
```

Both must pass with zero errors.

## Dependency graph

```
utils  (standalone)
  ↑
shapes  (depends on utils)
  ↑
typography  (depends on utils)
  ↑
dashboard  (depends on utils, shapes, typography)

tabs  (standalone)
```

## Lint concerns

- `LinkNavMockup`: uses `ListItem` with `button` prop — may be deprecated in MUI v7, check if `ListItemButton` needed
- `IconNavMockup`: uses array `.map` with index as key — acceptable for mockup
- Source files are already TypeScript so no JS→TSX conversion needed
