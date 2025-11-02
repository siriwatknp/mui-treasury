# Migration Guide: info-\* Registry Components

This guide documents the migration process for updating the `info-*` registry components from the old Storybook-based structure to the new shadcn-compatible registry format.

## Overview

The migration involved updating 9 info components (info-basic, info-apex, info-beats, info-blog, info-chatz, info-n01-n04) to follow the project's registry conventions and modern MUI theming patterns.

## Step-by-Step Migration Process

### 1. Remove Deprecated Files

Remove files that are no longer needed in the new structure:

```bash
# Remove index.ts, usage.mdx, and .stories.tsx files
rm registry/components/{component-name}/index.ts
rm registry/components/{component-name}/usage.mdx
rm registry/components/{component-name}/*.stories.tsx
```

### 2. Rename Files to Kebab-Case

Convert all PascalCase file names to kebab-case:

```bash
# Example conversions:
# InfoApex.tsx → info-apex.tsx
# InfoApex.styles.ts → info-apex.styles.ts
# InfoTitle.tsx → info-title.tsx
```

**Pattern**: `ComponentName.tsx` → `component-name.tsx`

### 3. Update TypeScript Types

Replace `JSX` namespace with `React.JSX`:

```typescript
// ❌ Before
} & Omit<JSX.IntrinsicElements["div"], "ref">;

// ✅ After
} & Omit<React.JSX.IntrinsicElements["div"], "ref">;
```

### 4. Fix Import Statements

Update all import paths to use kebab-case file names:

```typescript
// ❌ Before
import { Info } from "./Info";
import { InfoTitle } from "./InfoTitle";

// ✅ After
import { Info } from "./info";
import { InfoTitle } from "./info-title";
```

For components importing from `info-basic`, use explicit file paths:

```typescript
// ❌ Before
import { Info, InfoTitle, InfoSubtitle } from "../info-basic";

// ✅ After
import { Info } from "../info-basic/info";
import { InfoTitle } from "../info-basic/info-title";
import { InfoSubtitle } from "../info-basic/info-subtitle";
```

### 5. Update CSSObject Import

Move `CSSObject` import from `@mui/system` to `@mui/material/styles`:

```typescript
// ❌ Before
import { styled, SxProps, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";

// ✅ After
import { styled, SxProps, Theme } from "@mui/material/styles";
import type { CSSObject } from "@mui/material/styles";
```

Combine theme imports when possible:

```typescript
// ✅ Best practice
import type { CSSObject, Theme } from "@mui/material/styles";
```

### 6. Create Demo Files or Default Exports

**Option A: Simple components** - Convert to default export (no separate demo file):

```typescript
// ❌ Before
export function InfoApex() {
  return <Info>...</Info>;
}

// ✅ After
export default function InfoApex() {
  return <Info>...</Info>;
}
```

**Option B: Composable components** - Keep demo file to show composition:

```typescript
// info-basic.demo.tsx
"use client";

import { Info } from "./info";
import { InfoTitle } from "./info-title";
// ... other imports

export default function InfoBasicDemo() {
  return (
    <Info>
      <InfoEyebrow>Material Blog</InfoEyebrow>
      <InfoTitle>Unveiling Material You</InfoTitle>
      <InfoSubtitle>The next stage for Material Design</InfoSubtitle>
      <InfoCaption>10 FEB 2021</InfoCaption>
    </Info>
  );
}
```

### 7. Refactor Styles Files

#### A. Update Theme Access

Change from destructured palette to full theme access:

```typescript
// ❌ Before
const { palette } = "theme" in arg ? arg.theme : arg;

// ✅ After
const theme = "theme" in arg ? arg.theme : arg;
```

#### B. Replace Ternary with applyStyles

Convert conditional styling to use `theme.applyStyles()`:

```typescript
// ❌ Before
color: palette.mode === "dark" ? "#b5b1d8" : "#4d4b5f"

// ✅ After
color: "#4d4b5f",
...theme.applyStyles("dark", {
  color: "#b5b1d8",
})
```

#### C. Use CSS Variables

Add CSS variable support for theme palette access:

```typescript
// ❌ Before
color: palette.grey[600];

// ✅ After
color: (theme.vars || theme).palette.grey[600];
```

**Complete example:**

```typescript
// ❌ Before
export const getInfoApexStyles = (
  arg: Theme | { theme: Theme },
): CSSObject & Partial<InfoSlotStyles> => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    title: {
      color: palette.mode === "dark" ? "#b5b1d8" : "#4d4b5f",
      fontSize: "0.875rem",
    },
    subtitle: {
      color: palette.mode === "dark" ? palette.grey[500] : palette.grey[600],
    },
  };
};

// ✅ After
export const getInfoApexStyles = (
  arg: Theme | { theme: Theme },
): CSSObject & Partial<InfoSlotStyles> => {
  const theme = "theme" in arg ? arg.theme : arg;
  return {
    title: {
      color: "#4d4b5f",
      fontSize: "0.875rem",
      ...theme.applyStyles("dark", {
        color: "#b5b1d8",
      }),
    },
    subtitle: {
      color: (theme.vars || theme).palette.grey[600],
      ...theme.applyStyles("dark", {
        color: (theme.vars || theme).palette.grey[500],
      }),
    },
  };
};
```

### 8. Create Meta Files

Create a `<registry-item-name>.meta.json` file for each component:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "type": "registry:item",
  "title": "Info Apex",
  "description": "Info variant with bold Ubuntu typography and custom purple/gray color scheme",
  "meta": {
    "category": "primitive",
    "previewClassName": "bg-white dark:bg-neutral-950"
  }
}
```

**Required fields:**

- `$schema`: Registry schema URL
- `type`: Always `"registry:item"`
- `name`: Registry item name (matches component folder name)
- `title`: Display name
- `description`: Component description to summarize the details of the registry item. Be extremely concise and sacrifice grammar for brevity.
- `meta.category`: Component category (e.g., "primitive", "ai", "authentication")

### 9. Verification

Run the following commands to ensure everything works:

```bash
# Check linting
pnpm lint

# Check TypeScript types
npx tsc --noEmit

# Build the registry
pnpm registry:build
```

All checks should pass with no errors.

## Quick Reference Checklist

For each component:

- [ ] Remove `index.ts`, `usage.mdx`, and `.stories.tsx`
- [ ] Rename all files to kebab-case
- [ ] Replace `JSX` with `React.JSX`
- [ ] Update all import paths to kebab-case
- [ ] Move `CSSObject` import to `@mui/material/styles`
- [ ] Create demo file OR convert to default export
- [ ] Refactor styles:
  - [ ] Change `const { palette }` to `const theme`
  - [ ] Replace ternaries with `theme.applyStyles('dark', {...})`
  - [ ] Use `(theme.vars || theme).palette.*`
- [ ] Create `.meta.json` with proper metadata
- [ ] Run verification commands

## Common Patterns

### Accessing Palette Colors

```typescript
// ✅ Correct
color: (theme.vars || theme).palette.grey[600];
color: (theme.vars || theme).palette.text.secondary;
color: (theme.vars || theme).palette.primary.main;
```

### Dark Mode Styling

invoke `using-mui-components` skill with extra details below.

**Principle**: Dark mode support should be minimal and not alter existing component behavior. Only add dark mode overrides where absolutely necessary for visual clarity.

```typescript
// ✅ Minimal dark mode - only override what's needed
{
  background: (theme.vars || theme).palette.background.paper,
  // ... other styles remain unchanged
  ...theme.applyStyles("dark", {
    boxShadow: "0px 14px 80px rgba(0, 0, 0, 0.5)", // Only adjust shadow
  }),
}
```

**What to override in dark mode:**

- Hardcoded light backgrounds → Use `palette.background.paper` or `palette.background.default`
- Hardcoded `#fff` or `#ffffff` → Use `palette.common.white` (with dark mode override if needed)
- Box shadows that don't show in dark mode → Adjust shadow color/opacity
- Gradient overlays that are too dim → Increase opacity slightly

**What NOT to override:**

- Custom brand colors (keep as-is)
- Spacing, sizing, layout
- Typography styles (unless specifically color-related)
- Component structure

```typescript
// ❌ Too many changes - alters behavior
...theme.applyStyles("dark", {
  padding: theme.spacing(3), // Don't change spacing
  fontSize: 18, // Don't change sizing
  fontWeight: 600, // Don't change typography
})

// ✅ Minimal - only visual adjustments
...theme.applyStyles("dark", {
  backgroundColor: (theme.vars || theme).palette.grey[900],
  "&:after": {
    opacity: 0.7, // Slightly increase gradient visibility
  },
})
```

### Import Type Declarations

```typescript
// ✅ Use type imports for type-only imports
import type { CSSObject, Theme } from "@mui/material/styles";
import type { InfoSlotStyles } from "../info-basic/info";
```

## Notes

- **info-basic** is the base component that other info variants extend
- Components without palette conditionals (like info-beats, info-blog) only need palette access updates
- Always use `(theme.vars || theme).palette.*` for CSS variable support
- Light mode values should be the default, dark mode applied via `theme.applyStyles('dark', {...})`
