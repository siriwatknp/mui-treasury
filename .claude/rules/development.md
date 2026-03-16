# Development Rules

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
  title: "Popup Menu",
  description: "Menu items that open a popup submenu on hover or click.",
};

// required
export function Demo() {
  return <Foo />;
}
```
