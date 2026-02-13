~~# App Shopping Cart Extraction~~ ✅ Done

## Context

Read `README.md` in this folder first for branch info and project context.

## Source branch

`origin/ditto-layout` — read files via `git show origin/ditto-layout:<path>`.

## Source files

Main layout:

- `git show origin/ditto-layout:blocks/layoutV6-app-shoppingCart/LayoutV6AppShoppingCart.tsx`

Internal components (all `.js`, need conversion to `.tsx` / `.ts`):

- `git show origin/ditto-layout:blocks/layout-app-shoppingCart/components/index.js`
- `git show origin/ditto-layout:blocks/layout-app-shoppingCart/components/dailyShoppingTheme.js`
- `git show origin/ditto-layout:blocks/layout-app-shoppingCart/components/DailyCart.js`
- `git show origin/ditto-layout:blocks/layout-app-shoppingCart/components/DailyCheckout.js`
- `git show origin/ditto-layout:blocks/layout-app-shoppingCart/components/DailyHeader.js`
- `git show origin/ditto-layout:blocks/layout-app-shoppingCart/components/DailyInteger.js`
- `git show origin/ditto-layout:blocks/layout-app-shoppingCart/components/DailyLogo.js`
- `git show origin/ditto-layout:blocks/layout-app-shoppingCart/components/DailySearch.js`
- `git show origin/ditto-layout:blocks/layout-app-shoppingCart/components/DailySizeSelector.js`
- `git show origin/ditto-layout:blocks/layout-app-shoppingCart/components/DailySummary.js`

## Target files

- `registry/layout/app-shopping-cart/app-shopping-cart.tsx`
- `registry/layout/app-shopping-cart/components/index.ts`
- `registry/layout/app-shopping-cart/components/dailyShoppingTheme.ts`
- `registry/layout/app-shopping-cart/components/DailyCart.tsx`
- `registry/layout/app-shopping-cart/components/DailyCheckout.tsx`
- `registry/layout/app-shopping-cart/components/DailyHeader.tsx`
- `registry/layout/app-shopping-cart/components/DailyInteger.tsx`
- `registry/layout/app-shopping-cart/components/DailyLogo.tsx`
- `registry/layout/app-shopping-cart/components/DailySearch.tsx`
- `registry/layout/app-shopping-cart/components/DailySizeSelector.tsx`
- `registry/layout/app-shopping-cart/components/DailySummary.tsx`

## Prerequisites

- `registry/layout/core/` ✅ Done
- No mockup deps needed

## Steps

### Step 1: Create directory

```bash
mkdir -p registry/layout/app-shopping-cart/components
```

### Step 2: Extract `dailyShoppingTheme.ts`

Source: `git show origin/ditto-layout:blocks/layout-app-shoppingCart/components/dailyShoppingTheme.js`

Copy as-is, rename `.js` → `.ts`. It's a `createTheme()` call, already type-safe. No import changes.

Content: custom MUI theme with:

- Typography: `Fira Sans` body, `Playfair Display` headings (h1-h6)
- Palette: primary `#3E89EB`, background default `#ffffff`

### Step 3: Extract leaf components (no internal cross-refs)

These components don't import other internal components. Convert JS → TSX, add types.

1. **`DailyLogo.tsx`** — `Typography` with bold uppercase `# Daily.` text. Trivial.
2. **`DailySearch.tsx`** — Responsive search `InputBase` (hidden on xs, shows `IconButton` instead). Uses `@mui/icons-material/Search`.
3. **`DailyInteger.tsx`** — `+/-` counter with `IconButton`s in pill border. Has untyped `children` prop → add `React.PropsWithChildren`.
4. **`DailySizeSelector.tsx`** — Pill-shaped `ButtonBase` with `KeyboardArrowDown` icon. Has untyped `children` prop → add `React.PropsWithChildren`.

### Step 4: Extract components with internal cross-refs

These import other internal components. Convert JS → TSX, add types.

1. **`DailyHeader.tsx`** — Uses `./DailyLogo` + `./DailySearch`. Toolbar with logo, search, basket count, menu icon. Uses `@mui/icons-material` (ClearAll, ShoppingBasket).
2. **`DailyCart.tsx`** — Uses `./DailySizeSelector` + `./DailyInteger`. Table with 4 product rows. Has `createData()` factory function (6 untyped params → add types). Uses `@mui/icons-material/Close`. Product images from external URLs.
3. **`DailyCheckout.tsx`** — No internal deps. Dark gradient form card. **Key fixes needed:**
   - Replace `css={{ flex: "none" }}` (Emotion prop) → `sx={{ flex: "none" }}`
   - Replace deprecated `InputProps` → `slotProps.input`
   - Replace deprecated `InputLabelProps` → `slotProps.inputLabel`
4. **`DailySummary.tsx`** — No internal deps. Subtotal/shipping/total grid + "Continue Shopping" button.
   - Fix: `justify` prop on Grid → `justifyContent`

### Step 5: Create `registry/layout/app-shopping-cart/components/index.ts`

Convert barrel from `index.js` → `index.ts`. Source uses default exports:

```ts
export { default as DailyLogo } from "./DailyLogo";
export { default as dailyShoppingTheme } from "./dailyShoppingTheme";
export { default as DailySearch } from "./DailySearch";
export { default as DailyHeader } from "./DailyHeader";
export { default as DailyCart } from "./DailyCart";
export { default as DailyCheckout } from "./DailyCheckout";
export { default as DailySizeSelector } from "./DailySizeSelector";
export { default as DailyInteger } from "./DailyInteger";
export { default as DailySummary } from "./DailySummary";
```

### Step 6: Extract main layout file

Source: `git show origin/ditto-layout:blocks/layoutV6-app-shoppingCart/LayoutV6AppShoppingCart.tsx`

Apply import path replacements:

```
../layout-app-shoppingCart/components  → ./components
../layout-core-v6                      → ../core
```

Also:

- Remove the `// @ts-ignore` above component imports (no longer needed after TSX conversion)

Write to: `registry/layout/app-shopping-cart/app-shopping-cart.tsx`

### Step 7: Validate

```bash
npx tsc --noEmit 2>&1 | grep "registry/layout/app-shopping-cart"
npx eslint registry/layout/app-shopping-cart/
```

Both must pass with zero errors.

## Dependencies

### Layout core (barrel import from `../core`)

- `applyEdgeSidebarRightStyles`, `applyHeaderStyles`, `applyInsetContainerStyles`, `applyInsetSidebarStyles`, `applyRootStyles`
- `Content`, `EdgeSidebarContent`, `EdgeSidebarRight`, `Footer`, `Header`, `InsetAvoidingView`, `InsetSidebar`, `InsetSidebarContent`, `Root`, `toggleTemporaryEdgeSidebarRight`

### MUI packages (already installed in project)

- `@mui/icons-material`: `CreditCard` (main layout), `Close` (DailyCart), `Add`/`Remove` (DailyInteger), `KeyboardArrowDown` (DailySizeSelector), `ClearAll`/`ShoppingBasket` (DailyHeader), `Search` (DailySearch), `CreditCard` (DailyCheckout), `KeyboardArrowLeft` (DailySummary)
- `@mui/material`: `Box`, `Container`, `CssBaseline`, `Fab`, `styled`, `ThemeProvider`, `Table`, `TableBody`, `TableCell`, `TableContainer`, `TableHead`, `TableRow`, `IconButton`, `Typography`, `TextField`, `Divider`, `Grid`, `Button`, `ButtonBase`, `InputBase`, `InputAdornment`, `Toolbar`

## Component details

- Single named export: `LayoutV6AppShoppingCart`
- Wrapped in `ThemeProvider` with `dailyShoppingTheme`
- `Root` with `applyRootStyles({ fixedHeight: true })` — viewport-height layout
- `StyledHeader`: white bg, `applyHeaderStyles({ height: "64px" })`
- `EdgeSidebarRight`: temporary only (xs), width `min(400px, 100vw)`
- Content: `applyInsetContainerStyles()`, InsetSidebar absolute at lg+ `max(25cqw, 360px)`
- Footer: `InsetAvoidingViewFooter` — custom styled component with gradient fade-out effect at top
- `Fab` with `CreditCard` icon: fixed bottom-right, scales to 0 on lg+ breakpoint
- `DailyCheckout` rendered in BOTH EdgeSidebarRight and InsetSidebar (responsive duplication — mobile gets sidebar drawer, desktop gets inset panel)

## Component internal cross-references

```
DailyHeader → imports ./DailyLogo, ./DailySearch
DailyCart   → imports ./DailySizeSelector, ./DailyInteger
```

All other components are standalone (no internal imports).

## File conversion details (JS → TSX)

| Source file             | Lines | Key concerns                                                               |
| ----------------------- | ----- | -------------------------------------------------------------------------- |
| `dailyShoppingTheme.js` | ~20   | `createTheme` call, rename to `.ts`, no code changes                       |
| `DailyLogo.js`          | ~12   | Typography only, trivial                                                   |
| `DailySearch.js`        | ~30   | Responsive `InputBase` + `IconButton`, no props                            |
| `DailyHeader.js`        | ~40   | Uses `DailyLogo` + `DailySearch`, toolbar layout, no props                 |
| `DailyInteger.js`       | ~25   | `children` prop untyped → `React.PropsWithChildren`                        |
| `DailySizeSelector.js`  | ~30   | `children` prop untyped → `React.PropsWithChildren`, `ButtonBase` wrapper  |
| `DailyCart.js`          | ~100  | `createData()` factory with 6 untyped params, Table, external image URLs   |
| `DailyCheckout.js`      | ~120  | `css` prop → `sx`, deprecated `InputProps`/`InputLabelProps` → `slotProps` |
| `DailySummary.js`       | ~70   | `justify` → `justifyContent` on Grid, `align` prop on Box                  |
| `index.js`              | ~10   | Barrel default exports → `.ts`                                             |

## Lint concerns

- `@ts-ignore` on component imports — remove after TSX conversion
- `DailyCheckout`: uses `css={{ flex: "none" }}` prop (Emotion) → replace with `sx={{ flex: "none" }}`
- `DailyCheckout`: uses deprecated `InputProps` and `InputLabelProps` → migrate to `slotProps`
- `DailyCheckout`: mixes inline `styles` object with `sx` prop — clean up
- `DailySummary`: uses `justify` prop on Grid (deprecated) → `justifyContent`
- `DailySummary`: uses `align` prop on `Box` — not a valid MUI prop, should be `textAlign` in `sx`
- `DailyCart`: `createData` function params untyped — add types
- `DailyCart`: product images from external URLs (zacdn.com, hybridoutfitters.com, zafcdn.com, lnwfile.com) — keep as-is but may break
- `Grid` uses legacy API throughout (`item`, `container`, `spacing`)
- All component files use default exports → barrel re-exports via `index.ts`

## External font dependencies

Theme uses Google Fonts:

- `Playfair Display` (headings)
- `Fira Sans` (body)

These need to be loaded via `<link>` or `next/font` in the preview page when rendering this app. Not needed for extraction itself.
