~~# App React Legacy Extraction~~ ✅ Done

## Context

Read `README.md` in this folder first for branch info and project context.

## Source branch

`origin/ditto-layout` — read files via `git show origin/ditto-layout:<path>`.

## Source files

Main layout:

- `git show origin/ditto-layout:blocks/layoutV6-app-reactLegacy/LayoutV6AppReactLegacy.tsx`

Internal components (all `.js`, need conversion to `.tsx`):

- `git show origin/ditto-layout:blocks/layout-app-reactLegacy/components/index.js`
- `git show origin/ditto-layout:blocks/layout-app-reactLegacy/components/ReactContent.js`
- `git show origin/ditto-layout:blocks/layout-app-reactLegacy/components/ReactHeader.js`
- `git show origin/ditto-layout:blocks/layout-app-reactLegacy/components/ReactNextArticle.js`

## Target files

- `registry/layout/app-react-legacy/app-react-legacy.tsx`
- `registry/layout/app-react-legacy/components/index.ts`
- `registry/layout/app-react-legacy/components/ReactContent.tsx`
- `registry/layout/app-react-legacy/components/ReactHeader.tsx`
- `registry/layout/app-react-legacy/components/ReactNextArticle.tsx`

## Prerequisites

- `registry/layout/core/` ✅ Done
- No mockup deps needed

## Steps

### Step 1: Create directory

```bash
mkdir -p registry/layout/app-react-legacy/components
```

### Step 2: Extract and convert each component file (JS → TSX)

For each of the 3 `.js` files:

1. Read source via `git show origin/ditto-layout:blocks/layout-app-reactLegacy/components/<file>.js`
2. Convert to TypeScript: add prop interfaces, type function params
3. Write to `registry/layout/app-react-legacy/components/<file>.tsx`

No import path changes needed within components — they don't cross-reference each other.

### Step 3: Create `registry/layout/app-react-legacy/components/index.ts`

Convert barrel from `index.js` → `index.ts`. Source re-exports 3 components:

- `ReactHeader`, `ReactNextArticle`, `ReactContent`

### Step 4: Extract main layout file

Source: `git show origin/ditto-layout:blocks/layoutV6-app-reactLegacy/LayoutV6AppReactLegacy.tsx`

Apply import path replacements:

```
../layout-app-reactLegacy/components  → ./components
../layout-core-v6/Content             → ../core/Content
../layout-core-v6/EdgeSidebarContent  → ../core/EdgeSidebarContent
../layout-core-v6/EdgeSidebarRight    → ../core/EdgeSidebarRight
../layout-core-v6/EdgeTemporaryClose  → ../core/EdgeTemporaryClose
../layout-core-v6/Footer              → ../core/Footer
../layout-core-v6/Header              → ../core/Header
../layout-core-v6/InsetAvoidingView   → ../core/InsetAvoidingView
../layout-core-v6/InsetContainer      → ../core/InsetContainer
../layout-core-v6/InsetSidebar        → ../core/InsetSidebar
../layout-core-v6/InsetSidebarContent → ../core/InsetSidebarContent
../layout-core-v6/Root                → ../core/Root
```

Also:

- Remove the `// @ts-ignore` above the component imports (no longer needed after TSX conversion)
- Remove the `// @ts-ignore` above `<Box pr={{ xs: 0, md: 5 }}>` in footer (investigate if still needed)
- Note: `EdgeSidebarContent` is aliased as `SidebarContent` in the import — keep the alias

Write to: `registry/layout/app-react-legacy/app-react-legacy.tsx`

### Step 5: Fix the `FooterMenu` component type

In the main layout file, `FooterMenu` is a local component typed as:

```tsx
const FooterMenu = ({ isHeader, ...props }: any) => { ... }
```

Replace `any` with a proper interface:

```tsx
const FooterMenu = ({ isHeader, ...props }: { isHeader?: boolean } & React.ComponentPropsWithoutRef<typeof Typography>) => { ... }
```

### Step 6: Validate

```bash
npx tsc --noEmit 2>&1 | grep "registry/layout/app-react-legacy"
npx eslint registry/layout/app-react-legacy/
```

Both must pass with zero errors.

## Dependencies

### Layout core (individual file imports from `../core/`)

- `Content` from `../core/Content`
- `EdgeSidebarContent` from `../core/EdgeSidebarContent` (aliased as `SidebarContent`)
- `EdgeSidebarRight`, `applyEdgeSidebarRightStyles`, `toggleTemporaryEdgeSidebarRight` from `../core/EdgeSidebarRight`
- `EdgeTemporaryClose` from `../core/EdgeTemporaryClose`
- `Footer` from `../core/Footer`
- `Header`, `applyHeaderStyles` from `../core/Header`
- `InsetAvoidingView` from `../core/InsetAvoidingView`
- `InsetContainer` from `../core/InsetContainer`
- `InsetSidebar`, `applyInsetSidebarStyles` from `../core/InsetSidebar`
- `InsetSidebarContent` from `../core/InsetSidebarContent`
- `Root` from `../core/Root`

### MUI packages (already installed in project)

- `@mui/icons-material`: `KeyboardArrowDown`, `UnfoldMore`
- `@mui/material`: `Box`, `Container`, `Fab`, `Grid`, `styled`, `Toolbar`, `Typography`

## Component details

- Single named export: `LayoutV6AppReactLegacy`
- Sticky dark header (`#232323`) with `applyHeaderStyles({ height: "60px" })`
- Right edge sidebar: temporary (xs), persistent/none (md)
- InsetSidebar: fixed, 256px on md+, contains navigation links
- Content wrapped in `InsetContainer` with `rightSidebar` prop
- Footer: two sections — "next article" (dark bg `rgb(40, 44, 52)`) and multi-column footer menu (dark bg `#20232a`)
- `StyledFab`: fixed position bottom-right, has `.EdgeSidebar-R-trigger` class to auto-show/hide
- `FooterMenu`: local component — renders `Typography` with conditional header styling
- `getData()`: local function returning 4 arrays of footer link labels

## File conversion details (JS → TSX)

| Source file           | Key concerns                                                                                        |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| `ReactContent.js`     | Simple content, responsive margins `mr={{ sm: 3, md: 10 }}`, headings + paragraphs + bulleted list  |
| `ReactHeader.js`      | Inline base64 SVG React logo, custom local `Menu` component with active color state, `concise` prop |
| `ReactNextArticle.js` | Dark bg section with `fontSize: 30` link, secondary color subtitle                                  |
| `index.js`            | Barrel re-exports of 3 components                                                                   |

No cross-references between component files — each is standalone.

## Lint concerns

- `@ts-ignore` on component imports — remove after TSX conversion
- `FooterMenu` typed as `any` — replace with proper interface (see Step 5)
- `@ts-ignore` on `<Box pr={{ xs: 0, md: 5 }}>` in footer — likely unnecessary, remove and test
- `Grid` uses legacy API (`item`, `container`, `spacing`, `justify` → `justifyContent`)
- `getData()` function at bottom of file — could be a const, but leave as-is
- `StyledToolbar` / `StyledFab`: use `styled` with destructured theme — acceptable pattern
