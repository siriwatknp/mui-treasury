# Development Rules

## `'use client'` directive

Any registry component authored under `apps/website/registry/` MUST start with `'use client';` when it uses any of:

- `sx` with a theme callback (e.g. `sx={[(theme) => ({...})]}` or `sx={(theme) => ({...})}`)
- React hooks (`useState`, `useEffect`, `useRef`, etc.)
- Event handlers that capture component state
- Browser-only APIs (`window`, `document`, `localStorage`)

**Why:** pages under `apps/website/app/*` are server components by default. They render registry components via `<PreviewComponent>` or `<RegistryDemoPreview>`. If a registry component passes a function (like the `sx` theme callback) into a client component (e.g. MUI's `ButtonBase`, any `@mui/material/*`), Next.js throws at prerender:

```
Error: Functions cannot be passed directly to Client Components
```

**How to apply:** when creating a new component, look at the first import. If it touches `@mui/material/*` and uses `sx` with a function, add `'use client';` at the top. If it's a pure presentational component with only static `sx` objects and no hooks, it can stay a server component.

```tsx
// ✅ Correct — theme callback needs client boundary
'use client';

import ButtonBase from '@mui/material/ButtonBase';

export function Foo({ sx }) {
  return <ButtonBase sx={[(theme) => ({ ... })]} />;
}

// ✅ Also fine — static sx, no function, can stay server
import Box from '@mui/material/Box';

export function Bar() {
  return <Box sx={{ p: 2, color: 'primary.main' }} />;
}
```

## Demo Files (`*.demo.tsx`)

### Imports

- Use absolute imports `@/registry/*` for all registry imports, never relative `./` or `../`.
- Library imports (`react`, `@mui/*`, `lucide-react`, etc.) MUST come before registry imports, separated by a blank line.

```tsx
// ✅ Correct
import React from "react";
import Box from "@mui/material/Box";

import { Foo } from "@/registry/components/foo/foo";

// ❌ Wrong - relative import
import { Foo } from "./foo";

// ❌ Wrong - no blank line between library and registry imports
import Box from "@mui/material/Box";
import { Foo } from "@/registry/components/foo/foo";
```

### Exports

- Export a named `Demo` function (not default export).
- Export `meta` with `title` and `description` for demo discovery in the sidebar.

```tsx
// optional
export const meta = {
  title: 'Popup Menu',
  description: 'Menu items that open a popup submenu on hover or click.',
};

// required
export function Demo() {
  return <Foo />;
}
```
