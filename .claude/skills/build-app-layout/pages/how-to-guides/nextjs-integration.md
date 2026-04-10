# How to Integrate with Next.js (App Router)

Set up a dashboard layout in a Next.js 15 app with the App Router.

## Install Theme and Components

First, install the MUI Treasury theme — a refined, minimalist design system that the layout components are built for:

```bash
npx mui-treasury@latest add mui-treasury
```

Then wrap your app with the `ThemeProvider` in the root `app/layout.tsx`:

```tsx
// app/layout.tsx
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

import { ThemeProvider } from "@/mui-treasury/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
```

Then install the layout and sidebar components:

```bash
npx mui-treasury@latest add layout-core sidebar collapsible
```

All components install to `src/mui-treasury/`.

## Project Structure

Put layout structure in `layout.tsx` and page content in `page.tsx`:

```
app/
├── layout.tsx    ← Root, Header, EdgeSidebar, Footer (shared shell)
├── page.tsx      ← Content for the dashboard page
├── settings/
│   └── page.tsx  ← Content for settings page
└── globals.css
```

### layout.tsx — Layout Shell

Build the layout shell using the [Tutorials](../tutorials.md) guide. The key difference is wrapping `{children}` inside `Content` so each page provides its own content:

```tsx
<Content>{children}</Content>
```

Mark the layout file `"use client"` since layout components use browser APIs.

### page.tsx — Page Content

Each page provides only its content — the layout shell handles the header, sidebar, and footer.

```tsx
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function DashboardPage() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography color="text.secondary">Welcome to your dashboard.</Typography>
    </Box>
  );
}
```

**Key points:**

- `layout.tsx` owns the layout structure (`Root`, `Header`, `EdgeSidebar`, `Content`, `Footer`) — shared across all pages in that route segment
- `page.tsx` provides content that renders inside `Content` via `{children}`
- Layout components need `"use client"` because they use browser APIs (CSS container queries, DOM refs)
- Page components can be server components if they don't use client-side features
