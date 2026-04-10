# Explanation

Background context and design decisions behind the layout system.

## Architecture: CSS Grid + CSS Variables

The layout system is built entirely on CSS Grid and CSS custom properties — no React state for sidebar open/collapse. This means:

- **No re-renders** when toggling sidebar state — it's pure CSS
- **Transitions are smooth** because CSS handles them natively
- **Server-side rendering** works out of the box — no hydration mismatch

`Root` defines a 3-column, 3-row grid:

```
"EdgeSidebar  Header           EdgeSidebarRight"
"EdgeSidebar  Content          EdgeSidebarRight"
"EdgeSidebar  Footer           EdgeSidebarRight"
```

Columns use `max-content` for sidebars and `minmax(0, 1fr)` for content.

## How Sidebar Collapse Works

The collapse mechanism uses CSS custom properties as state flags:

1. `EdgeSidebar` sets `--_collapsed` and `--_uncollapsed` variables based on its state
2. `SidebarContainer` uses **CSS container queries** (`container-type: inline-size`) to detect width
3. When the container shrinks below the `shrink` threshold, `--_collapsed` activates
4. All child components (`SidebarText`, `SidebarGroupLabel`, `SidebarTooltip`, etc.) read these variables to show/hide/resize

This is why sidebar primitives work without any props or context — they inherit the CSS variables from their nearest `SidebarContainer` ancestor.

## EdgeSidebar vs InsetSidebar

Two different sidebar strategies for different use cases:

**EdgeSidebar** occupies its own grid column in the Root. It pushes the Content area and can be a drawer (overlay) or permanent (inline). Use for primary navigation.

**InsetSidebar** lives _inside_ the Content area. It doesn't affect the grid layout. Use for secondary content like table of contents, filters, or detail panels.

They can coexist: a dashboard might have an EdgeSidebar for navigation and an InsetSidebar for a detail panel.

## Why `standalone` Exists

By default, `Root` fills the viewport and the browser scrollbar handles overflow. `standalone` changes this:

- Content gets its own scrollbar (contained scrolling)
- Drawer sidebars use `position: absolute` instead of `fixed` (stays within Root)
- Useful for: chat apps, POS systems, embedded layouts, constrained demos

Without `standalone`, a drawer would cover the entire viewport even if the layout only occupies a small card on the page.

## Why Padding Goes on Children

Layout components use CSS Grid areas and sticky positioning internally. Adding padding to `Header`, `Content`, or `Footer` directly shifts their internal grid alignment and can break sticky behavior. Padding on children is safe because it doesn't affect the grid mechanics.

## Term Mappings

Users describe layout behavior in many ways. Here are common requests mapped to props:

| User says                              | Maps to                                                  |
| -------------------------------------- | -------------------------------------------------------- |
| "Make the sidebar full height"         | `<Header clip="left">`                                   |
| "Header should span full width"        | `<Header clip="left">` (or `clip={true}` for both sides) |
| "Sidebar should be a drawer on mobile" | `variant={{ xs: ["drawer"], lg: ["permanent", …] }}`     |
| "Sidebar should collapse on hover"     | `hoverUncollapse: true` in PermanentConfig               |
| "Auto-collapse below a breakpoint"     | `permanentAutoCollapse="lg"`                             |
