---
name: build-app-layout
description: Use this skill for any task involving app layouts — building new layouts, adding sidebars or navigation to existing apps, migrating an existing layout to mui-treasury components, or reviewing/improving layout structure. Trigger whenever the user mentions dashboard layout, sidebar navigation, app shell, header/footer/content structure, collapsible sidebar, drawer navigation, layout with sidebar, or asks to "build a layout", "add a sidebar", "set up the app layout", "review the layout". Also trigger when a mockup or design shows an app with sidebar + header + content regions, even if the user doesn't say "layout" explicitly.
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

### EdgeSidebar Content Structure

Place `SidebarContainer` in the middle of `EdgeSidebarContent` so it grows to fill available space and becomes the scrollable area for menus. Static-height content (sidebar header/footer) should be siblings of `SidebarContainer`:

```
EdgeSidebarContent
├── Sidebar header (static) — e.g. app switcher, logged-in user, logo
├── SidebarContainer (flex: 1, scrollable) — navigation menus
└── Sidebar footer (static) — e.g. user preferences, settings, ads/banner
```

- `EdgeSidebarContent` uses `display: flex; flex-direction: column` by default
- `SidebarContainer` grows via `flex: 1` and handles its own overflow scroll
- Sidebar header/footer keep their natural height and never scroll
- Sidebar primitives (`SidebarMenuButton`, `SidebarIcon`, etc.) still work in the header/footer areas because they are descendants of `EdgeSidebar` — but collapse-aware CSS variables (`--_collapsed`/`--_uncollapsed`) only work inside `SidebarContainer`

### SidebarMenuButton

- should use the `component` prop for polymorphism, e.g. `<SidebarMenuButton component="a" href="/dashboard">` or `<SidebarMenuButton component={Link} to="/dashboard">`
- MUST be a child of `SidebarMenuItem` which is a child of `SidebarMenuList`. Never wrap `SidebarMenuButton` in a plain `div` or `Box` — the list structure (`SidebarMenuList > SidebarMenuItem > SidebarMenuButton`) is required for proper spacing, collapse behavior, and accessibility
- Never use consecutive `SidebarText` siblings inside a `SidebarMenuButton`. For multi-line text, use a single `SidebarText` wrapping the content. For two-line text labels, use `SidebarGroupText`:

  ```tsx
  // ❌ Wrong — consecutive SidebarText
  <SidebarMenuButton>
    <Avatar />
    <SidebarText><Typography>siriwatknp</Typography></SidebarText>
    <SidebarText><Typography>admin@acme.com</Typography></SidebarText>
  </SidebarMenuButton>

  // ✅ Correct — single SidebarText with SidebarGroupText for 2 lines
  <SidebarMenuButton>
    <Avatar />
    <SidebarText>
      <SidebarGroupText>
        <Typography variant="body2">siriwatknp</Typography>
        <Typography variant="caption">admin@acme.com</Typography>
      </SidebarGroupText>
    </SidebarText>
  </SidebarMenuButton>
  ```

- Never place secondary actions (e.g. `IconButton`, `Badge`) inside `SidebarMenuButton`. Use `SidebarMenuAction` as a sibling:

  ```tsx
  // ❌ Wrong — actions inside SidebarMenuButton
  <SidebarMenuItem>
    <SidebarMenuButton>
      <Avatar />
      <SidebarText>siriwatknp</SidebarText>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <IconButton size="small"><MoreHorizRounded /></IconButton>
        <IconButton size="small"><NotificationsRounded /></IconButton>
      </Box>
    </SidebarMenuButton>
  </SidebarMenuItem>

  // ✅ Correct — SidebarMenuAction as sibling
  <SidebarMenuItem>
    <SidebarMenuButton>
      <Avatar />
      <SidebarText>siriwatknp</SidebarText>
    </SidebarMenuButton>
    <SidebarMenuAction>
      <IconButton size="small"><MoreHorizRounded /></IconButton>
      <IconButton size="small"><NotificationsRounded /></IconButton>
    </SidebarMenuAction>
  </SidebarMenuItem>
  ```

- Never make `SidebarMenuButton` non-interactive (e.g. `component="div"` with `cursor: "default"`). If the element is not clickable, use `SidebarMenuItem` directly instead:

  ```tsx
  // ❌ Wrong — non-interactive button
  <SidebarMenuButton component="div" sx={{ cursor: "default", "&:hover": { bgcolor: "transparent" } }}>
    <Avatar />
    <SidebarText>siriwatknp</SidebarText>
  </SidebarMenuButton>

  // ✅ Correct — use SidebarMenuItem for non-interactive content
  <SidebarMenuItem>
    <Avatar />
    <SidebarText>siriwatknp</SidebarText>
  </SidebarMenuItem>
  ```

- `SidebarMenuAction` must only be used alongside a `SidebarMenuButton` sibling. If there is no `SidebarMenuButton`, use a plain `IconButton` instead

## Rules of Thumb

- Don't use `hoverUncollapse` with `EdgeSidebarRail` — they are noy designed to work together and can cause janky behavior
- Don't use `hoverUncollapse` with `SidebarTooltip` — tooltips won't show when the sidebar is collapsed, so the hover state becomes inaccessible
- It's recommended to have only one `SidebarContainer` as a direct child of `EdgeSidebar` — having multiple containers will cause the available space to split evenly, which mostly not the desired behavior.
- Align icons in the center of the collapsed sidebar with proper `shrinkSize` on `SidebarIcon`.
- Align custom elements like avatar in the center of the collapsed sidebar using negative margins with EdgeSidebar variables (see [EdgeSidebar Collapsible Variables](./pages/how-to-guides/layout-css-variables.md#how-to-customize-css-based-on-sidebar-collapsed-state) guide)

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
- [EdgeSidebar Collapsible Variables](pages/how-to-guides/edge-sidebar-collapsible-variables.md) — Use `--_collapsed`/`--_uncollapsed` CSS variables to style non-mui-treasury elements based on sidebar state

Demos:

- [Iframe Preview for Responsive Demos](pages/how-to-guides/iframe-preview.md) — Configure demos that showcase responsive behavior
