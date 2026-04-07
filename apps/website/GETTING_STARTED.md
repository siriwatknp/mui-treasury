# Getting Started

MUI Treasury is a component registry for Material UI (MUI) that provides beautifully crafted components and blocks built on top of a hand-crafted theme.

It aims to be goto solution for building your next MUI project.

## Quick Start

```bash
npx create-next-app@latest mui-treasury-starter \
  -e https://github.com/siriwatknp/mui-treasury/tree/master/examples/nextjs
```

> Replace `mui-treasury-starter` with your project name.

### Stack Overview

The starter includes:

- **Next.js 15** with App Router and Turbopack
- **Material UI v7** with Emotion for styling
- **Tailwind CSS v4** for utility classes
- **TypeScript** for type safety
- **shadcn CLI** ready for component installation

## MUI Treasury Theme

The MUI Treasury theme offers a refined, minimalist design system that moves beyond Material Design:

### Key Features

- **Monochromatic palette** - Pure black/white primary colors for maximum contrast (replace them with your brand colors)
- **System colors** - Native OS colors for semantic states (success, error, warning, info)
- **Subtle interactions** - Reduced opacity values for understated hover/focus states
- **Native typography** - System font stacks for optimal performance
- **Refined shadows** - 24 elevation levels with subtle depth

### Installation

To add the MUI Treasury theme to your project:

```bash
npx shadcn@latest add https://mui-treasury.com/r/mui-treasury.json
```

### Usage

```diff
// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
+ import { ThemeProvider } from "@/mui-treasury/theme";
import { AppTheme } from "./theme";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider
          options={{
            enableCssLayer: true,
          }}
        >
+         <ThemeProvider>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
```

The theme is available in the `src/mui-treasury/theme` directory.
You can modify them as you want.

## Components and Blocks

MUI Treasury provides a growing collection of components and blocks that you can add to your project.

- [Primitives](/primitive) - Extended building blocks on top of MUI components
- [AI Elements](/ai) - Components that integrate with AI models and tools

Add components directly to your project by clicking the "npx shadcn" button from the preview and pasting the command in your terminal.

```bash
npx shadcn@latest add https://mui-treasury.com/r/ai-elements.json
```

Components will be installed to `src/mui-treasury/` directory by default.

## MCP Setup

Follow [Shadcn MCP Setup](https://ui.shadcn.com/docs/registry/mcp) with the following registry configuration:

```json
{
  "registries": {
    "@mui-treasury": "https://mui-treasury.com/r/{name}.json"
  }
}
```

## Next Steps

1. **Explore components** at [mui-treasury.com](https://mui-treasury.com)
2. **Customize the theme** by modifying `src/mui-treasury/theme/`
3. **Add your first component** using the shadcn CLI
4. **Join the community** on [GitHub](https://github.com/siriwatknp/mui-treasury)

## Support

- **Documentation**: [mui-treasury.com](https://mui-treasury.com)
- **GitHub Issues**: [github.com/siriwatknp/mui-treasury/issues](https://github.com/siriwatknp/mui-treasury/issues)
- **Author**: [@siriwatknp](https://github.com/siriwatknp)
