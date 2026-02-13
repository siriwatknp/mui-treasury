~~# App Analytics Extraction~~ ✅ Done

## Context

Read `README.md` in this folder first for branch info and project context.

## Source branch

`origin/ditto-layout` — read files via `git show origin/ditto-layout:<path>`.

## Source

- `git show origin/ditto-layout:blocks/layoutV6-app-analytics/LayoutV6AppAnalytics.tsx`

## Target

- `registry/layout/app-analytics/app-analytics.tsx`

## Prerequisites

- `registry/layout/core/` ✅ Done
- `registry/layout/mockups/` (see `00-shared-mockups.md`) — must be completed first

## Steps

### Step 1: Ensure mockups are extracted

Verify `registry/layout/mockups/index.ts` exists. If not, complete `00-shared-mockups.md` first.

### Step 2: Create `registry/layout/app-analytics/app-analytics.tsx`

Source: `git show origin/ditto-layout:blocks/layoutV6-app-analytics/LayoutV6AppAnalytics.tsx`

Apply import path replacements:

```
../layout-core-v6/Content            → ../core/Content
../layout-core-v6/EdgeSidebar        → ../core/EdgeSidebar
../layout-core-v6/EdgeSidebarContent → ../core/EdgeSidebarContent
../layout-core-v6/EdgeTemporaryClose → ../core/EdgeTemporaryClose
../layout-core-v6/Header             → ../core/Header
../layout-core-v6/Root               → ../core/Root
../mockup-dashboard                  → ../mockups/dashboard
../mockup-tabs                       → ../mockups/tabs
../mockup-typography                 → ../mockups/typography
```

### Step 3: Validate

```bash
npx tsc --noEmit 2>&1 | grep "registry/layout/app-analytics"
npx eslint registry/layout/app-analytics/
```

Both must pass with zero errors.

## Dependencies

### Layout core (already extracted at `registry/layout/core/`)

Imports from core (individual file imports, NOT barrel):

- `Content` from `../core/Content`
- `EdgeSidebar`, `applyEdgeSidebarStyles`, `toggleEdgeSidebarCollapse`, `toggleTemporaryEdgeSidebar` from `../core/EdgeSidebar`
- `EdgeSidebarContent` from `../core/EdgeSidebarContent`
- `EdgeTemporaryClose` from `../core/EdgeTemporaryClose`
- `Header` from `../core/Header`
- `Root` from `../core/Root`

### Mockups (must be at `registry/layout/mockups/`)

- `IconNavMockup`, `LinkNavMockup`, `SideNavUserInfoMockup`, `StatCardMockup`, `TopUsersCardMockup`, `UserActiveCardMockup` from `../mockups/dashboard`
- `UnderlineTabs` from `../mockups/tabs`
- `Word` from `../mockups/typography`

### MUI packages (already installed in project)

- `@mui/icons-material`: `ChevronLeftRounded`, `MenuRounded`
- `@mui/material`: `Box`, `Grid`, `IconButton`, `Tab`, `Typography`, `useScrollTrigger`

## Component details

- Single named export: `LayoutV6AppAnalytics`
- Uses `React.useState` for tab index
- Uses `useScrollTrigger` for header shadow on scroll
- EdgeSidebar config: temporary (xs), persistent/none (md), permanent with autoCollapse/expandOnHover (lg)
- Header: semi-transparent with backdrop blur, scroll-triggered shadow
- Content: `UnderlineTabs` with 3 tabs, placeholder chart area, grid of `StatCardMockup`/`UserActiveCardMockup`/`TopUsersCardMockup`

## Lint concerns

- `Grid` usage: uses legacy `item`/`container`/`spacing` API — check MUI v7 Grid compatibility
- `useScrollTrigger` used without a `target` — default is `window`, fine for standalone
