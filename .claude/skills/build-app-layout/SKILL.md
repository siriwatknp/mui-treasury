---
name: build-app-layout
description: Always use this skill when building an app layout using the layout core components in the registry. The app layout usually consists of a header, content area, and footer, and may also include a sidebar or navigation menu.
---

## Installation

Components are installed via the `mui-treasury` CLI into `src/mui-treasury/`:

```bash
# Layout core (Root, Header, Content, Footer, EdgeSidebar, InsetSidebar, etc.)
npx mui-treasury@latest add layout-core

# Sidebar primitives (SidebarContainer, SidebarMenuButton, SidebarIcon, etc.)
npx mui-treasury@latest add sidebar
```

After installation, import from:

- `@/mui-treasury/layout/layout-core` — layout components
- `@/mui-treasury/components/sidebar` — sidebar primitives

## Recommended Defaults

Use these as starting values unless the user specifies otherwise.

### Collapsible EdgeSidebar

- `collapsedWidth: "52px"`
- `SidebarIcon shrinkSize="20px"` to center icons in the collapsed sidebar
- `permanentAutoCollapse="lg"` to auto-collapse below the `lg` breakpoint
- `SidebarRail` as a drag-to-collapse trigger
- Use sidebar primitives for sidebar content — they auto-adapt to collapsed state
- left/right arrow icons for `EdgeSidebarCollapser`
- down arrow icon for `CollapsibleIcon`

### SidebarMenuButton

- should use the `component` prop for polymorphism, e.g. `<SidebarMenuButton component="a" href="/dashboard">` or `<SidebarMenuButton component={Link} to="/dashboard">`

## Documentation

Read the relevant page based on your needs:

- [Tutorials](pages/tutorials.md) — Step-by-step lessons to build your first layout. Start here if unfamiliar with the layout system.
- [Reference Guides](pages/reference-guides.md) — Complete API for all layout-core components and sidebar primitives with props tables.
- [Explanation](pages/explanation.md) — Architecture decisions: CSS Grid + CSS variables, how collapse works, EdgeSidebar vs InsetSidebar, term mappings.

### How-to Guides

Integration:

- [Next.js Integration](pages/how-to-guides/nextjs-integration.md) — Set up layout in App Router with layout.tsx/page.tsx split, MUI Treasury theme

Layout patterns:

- [Dashboard Layout](pages/how-to-guides/dashboard-layout.md) — Collapsible left sidebar, drawer on mobile, permanent on desktop
- [Chat/Messenger Layout](pages/how-to-guides/chat-layout.md) — Permanent sidebar for conversation list, standalone scrollable content, InsetSidebar for details
- [Blog/Content Layout](pages/how-to-guides/blog-layout.md) — Sticky InsetSidebar for table of contents, no EdgeSidebar
- [Shopping Cart / Right Sidebar](pages/how-to-guides/shopping-cart-layout.md) — Right-side drawer for cart/checkout panel

Sidebar features:

- [Header Clipping](pages/how-to-guides/header-clipping.md) — Make the header span over the sidebar for full-height sidebar
- [Nested Popup Menus (3 Levels)](pages/how-to-guides/nested-popup-menus.md) — Multi-level flyout menus when sidebar is collapsed, with collapsible fallback when uncollapsed

Demos:

- [Iframe Preview for Responsive Demos](pages/how-to-guides/iframe-preview.md) — Configure demos that showcase responsive behavior
