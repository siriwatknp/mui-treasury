# Reference Guides

Complete API reference for all layout-core components and sidebar primitives.

## Layout Core Components

All components are imported from `@/mui-treasury/layout/layout-core/`.

Available exports: `Root`, `Header`, `Content`, `Footer`, `EdgeSidebar`, `EdgeSidebarContent`, `EdgeSidebarCollapser`, `EdgeSidebarRight`, `EdgeDrawerTrigger`, `EdgeDrawerTriggerRight`, `EdgeDrawerClose`, `EdgeCollapsedVisible`, `EdgeUncollapsedVisible`, `InsetSidebar`, `InsetContent`, `InsetAvoidingView`.

### Padding Rule

**Apply padding to children of layout components, not the layout components themselves.** Adding padding directly to `Header`, `Content`, or `Footer` breaks their internal grid/sticky behavior.

```tsx
// ✅ Correct — padding on children
<Header>
  <Box sx={{ px: 2 }}>…</Box>
</Header>

// ❌ Incorrect — padding on layout component
<Header sx={{ px: 2 }}>…</Header>
```

### Root

| Prop                | Type                                   | Default    | Description                                                                                             |
| ------------------- | -------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------- |
| `height`            | `string \| Record<Breakpoint, string>` | `"100svh"` | Layout height                                                                                           |
| `standalone`        | `boolean`                              | `false`    | Fits layout to height with scrollable Content; makes drawer EdgeSidebar absolute-positioned within Root |
| `disableTransition` | `boolean`                              | `false`    | Disables grid column transitions                                                                        |

### Header

| Prop     | Type                                                                 | Default  | Description                                        |
| -------- | -------------------------------------------------------------------- | -------- | -------------------------------------------------- |
| `height` | `string \| Partial<Record<Breakpoint, string>>`                      | `"3rem"` | Header height, sets `--jun-H-h` CSS variable       |
| `clip`   | `"left" \| "right" \| true \| Partial<Record<Breakpoint, ClipSide>>` | —        | Controls whether Header spans over the EdgeSidebar |

### Content

Standard HTML `<main>` element props. No custom props.

### Footer

Standard HTML `<footer>` element props. No custom props. Has a top border line by default.

### EdgeSidebar

| Prop                    | Type                      | Default                             | Description                                     |
| ----------------------- | ------------------------- | ----------------------------------- | ----------------------------------------------- |
| `id`                    | `string`                  | —                                   | **Always set.** Unique ID for trigger functions |
| `variant`               | `EdgeSidebarVariantInput` | `["permanent", { width: "256px" }]` | Sidebar mode and config (see below)             |
| `permanentAutoCollapse` | `Breakpoint`              | —                                   | Auto-collapse below this breakpoint             |

#### Variant: Drawer

Slides over content as an overlay.

```tsx
variant={["drawer", { width: "300px" }]}
```

| Config           | Type      | Default   | Description              |
| ---------------- | --------- | --------- | ------------------------ |
| `width`          | `string`  | `"300px"` | Drawer width             |
| `showHeader`     | `boolean` | `false`   | Show drawer below header |
| `withoutOverlay` | `boolean` | `false`   | Remove backdrop overlay  |

#### Variant: Permanent

Always visible, optionally collapsible.

```tsx
variant={["permanent", { width: "256px", collapsedWidth: "64px" }]}
```

| Config            | Type                                             | Default     | Description                        |
| ----------------- | ------------------------------------------------ | ----------- | ---------------------------------- |
| `width`           | `string`                                         | `"256px"`   | Expanded width                     |
| `collapsedWidth`  | `string`                                         | —           | Collapsed width (enables collapse) |
| `visibility`      | `"hidden" \| "visible"`                          | `"visible"` | Control visibility                 |
| `hoverUncollapse` | `boolean \| { delay?: string; shadow?: string }` | —           | Expand on hover when collapsed     |

#### Responsive Variants

Different modes per breakpoint:

```tsx
variant={{
  xs: ["drawer"],
  lg: ["permanent", { width: "280px", collapsedWidth: "64px" }],
}}
```

### EdgeSidebarRight

Same props as `EdgeSidebar`. Positioned on the right side. Uses `EdgeDrawerTriggerRight` for its drawer trigger and `triggerEdgeCollapseRight()` / `triggerEdgeDrawerRight()` for programmatic control.

### EdgeSidebarContent

Standard `<div>` props. Scrollable container inside `EdgeSidebar`. Always wrap sidebar content with this.

### EdgeDrawerTrigger

| Prop        | Type                 | Description                   |
| ----------- | -------------------- | ----------------------------- |
| `render`    | `React.ReactElement` | Button element to render      |
| `sidebarId` | `string`             | Optional sidebar ID to target |

Auto-hides when sidebar is in permanent mode.

### EdgeDrawerTriggerRight

Same as `EdgeDrawerTrigger` but targets `EdgeSidebarRight`.

### EdgeDrawerClose

Standard `<button>` props. Renders a close button inside the drawer. Appears automatically when drawer opens, hidden in permanent mode.

### EdgeSidebarCollapser

| Prop     | Type                 | Description                          |
| -------- | -------------------- | ------------------------------------ |
| `render` | `React.ReactElement` | Button element to render             |
| `state`  | `boolean`            | Optional state override for collapse |

Auto-hides when sidebar is in drawer mode. Automatically finds the closest sidebar.

### EdgeCollapsedVisible

| Prop     | Type                 | Description                               |
| -------- | -------------------- | ----------------------------------------- |
| `render` | `React.ReactElement` | Element to show when sidebar is collapsed |

### EdgeUncollapsedVisible

| Prop     | Type                 | Description                              |
| -------- | -------------------- | ---------------------------------------- |
| `render` | `React.ReactElement` | Element to show when sidebar is expanded |

### InsetSidebar

| Prop       | Type                                            | Default    | Description      |
| ---------- | ----------------------------------------------- | ---------- | ---------------- |
| `width`    | `string \| Partial<Record<Breakpoint, string>>` | `"200px"`  | Sidebar width    |
| `position` | `"sticky" \| "fixed" \| "absolute"`             | `"sticky"` | Positioning mode |

- **sticky**: sticks under header on scroll until content ends
- **absolute**: spans from header to bottom, use with `standalone` Root and `InsetAvoidingView` in Footer

Placed inside `Content` as first or last child.

### InsetContent

Standard `<div>` props. Container for content inside `InsetSidebar`.

### InsetAvoidingView

Standard `<div>` props. Adds margins to avoid overlapping with `InsetSidebar` when `position="absolute"`. Use in `Footer`.

### Trigger Functions

Exported from `@/mui-treasury/layout/layout-core`:

| Function                            | Description                         |
| ----------------------------------- | ----------------------------------- |
| `triggerEdgeDrawer(options?)`       | Open/close left drawer sidebar      |
| `triggerEdgeDrawerRight(options?)`  | Open/close right drawer sidebar     |
| `triggerEdgeCollapse(options)`      | Toggle left sidebar collapse state  |
| `triggerEdgeCollapseRight(options)` | Toggle right sidebar collapse state |

---

## Sidebar Primitives

All sidebar UI components are imported from `@/mui-treasury/components/sidebar/`. They automatically adapt to the collapsed/uncollapsed state of the `EdgeSidebar` via CSS container queries — no JavaScript state needed.

### SidebarContainer

Root wrapper that sets up container queries for collapse detection.

| Prop        | Type                | Default   | Description                                             |
| ----------- | ------------------- | --------- | ------------------------------------------------------- |
| `shrink`    | `string`            | `"100px"` | Container query width breakpoint for collapse detection |
| `component` | `React.ElementType` | `"div"`   | Root element type                                       |

### SidebarGroup

Groups sidebar items with padding. Flex column layout.

| Prop        | Type                | Default | Description       |
| ----------- | ------------------- | ------- | ----------------- |
| `component` | `React.ElementType` | `"div"` | Root element type |

### SidebarGroupLabel

Section label that auto-hides when sidebar is collapsed.

| Prop        | Type                | Default | Description       |
| ----------- | ------------------- | ------- | ----------------- |
| `component` | `React.ElementType` | `"div"` | Root element type |

### SidebarGroupText

Text container with grid-based collapse/expand animation. Used for multi-line text in groups.

### SidebarMenuList

Container for menu items.

| Prop        | Type                | Default | Description                                            |
| ----------- | ------------------- | ------- | ------------------------------------------------------ |
| `relaxed`   | `boolean`           | `false` | Increases spacing and sizes (2.5rem height, 1rem font) |
| `nested`    | `boolean`           | `false` | Adds left border indent for sub-menus                  |
| `noLine`    | `boolean`           | `false` | Removes the border line when `nested` is true          |
| `component` | `React.ElementType` | `"div"` | Root element type                                      |

### SidebarMenuItem

Wrapper for a single menu item. Flex column layout.

| Prop        | Type                | Default | Description       |
| ----------- | ------------------- | ------- | ----------------- |
| `component` | `React.ElementType` | —       | Root element type |

### SidebarMenuButton

Interactive button for menu items. Extends MUI `ButtonBase`.

| Prop        | Type                           | Default | Description                                          |
| ----------- | ------------------------------ | ------- | ---------------------------------------------------- |
| `active`    | `boolean`                      | `false` | Highlights the button with background and text color |
| `hideWhen`  | `"collapsed" \| "uncollapsed"` | —       | Conditionally hide based on sidebar state            |
| `component` | `React.ElementType`            | —       | Polymorphic component (e.g., `"a"`, `Link`)          |

### SidebarMenuAction

Action button positioned on the right side of a menu item.

| Prop          | Type                | Default | Description                                 |
| ------------- | ------------------- | ------- | ------------------------------------------- |
| `hoverAppear` | `boolean`           | `false` | Shows only on hover of the parent menu item |
| `component`   | `React.ElementType` | —       | Root element type                           |

### SidebarIcon

Icon wrapper with responsive sizing.

| Prop         | Type                                            | Default  | Description                                                                   |
| ------------ | ----------------------------------------------- | -------- | ----------------------------------------------------------------------------- |
| `size`       | `string \| Partial<Record<Breakpoint, string>>` | `"1rem"` | Icon dimensions                                                               |
| `shrinkSize` | `string \| Partial<Record<Breakpoint, string>>` | —        | Icon size when sidebar is collapsed (use to center icon in collapsed sidebar) |

### SidebarText

Text label that auto-hides when sidebar is collapsed via opacity transition. Handles text overflow with ellipsis.

### SidebarTooltip

Tooltip that shows only when sidebar is collapsed.

| Prop        | Type                        | Default   | Description      |
| ----------- | --------------------------- | --------- | ---------------- |
| `title`     | `React.ReactNode`           | —         | Tooltip content  |
| `placement` | `TooltipProps["placement"]` | `"right"` | Tooltip position |

### SidebarRail

Draggable resize handle at the edge of the sidebar. Acts as a collapse trigger — cursor changes based on collapse state (`e-resize` when collapsed, `w-resize` when uncollapsed).

| Prop        | Type                | Default | Description       |
| ----------- | ------------------- | ------- | ----------------- |
| `component` | `React.ElementType` | —       | Root element type |

---

## Popup Menu Components

Imported from `@/mui-treasury/components/sidebar/popup-menu`. Built on Base UI's `NavigationMenu`. Used to show flyout menus when sidebar is collapsed.

### PopupMenuList

Root wrapper for popup menu items. Manages the navigation menu structure and portal positioning.

| Prop          | Type                | Default  | Description                                           |
| ------------- | ------------------- | -------- | ----------------------------------------------------- |
| `sidebarSide` | `"left" \| "right"` | `"left"` | Which side the sidebar is on (popup appears opposite) |

Also accepts all `NavigationMenu.Root` props.

### PopupMenuItem

Individual menu item that triggers a popup on hover/click.

| Prop       | Type              | Description                                                        |
| ---------- | ----------------- | ------------------------------------------------------------------ |
| `render`   | `React.ReactNode` | Element to render as the trigger (typically `SidebarMenuButton`)   |
| `tooltip`  | `React.ReactNode` | Tooltip shown when collapsed and no children (non-expandable item) |
| `children` | `React.ReactNode` | Popup content (use `PopupMenuContent`)                             |

### PopupMenuContent

Container for popup content inside `PopupMenuItem`.

Accepts all `NavigationMenu.Content` props.

### PopupMenuLink

Styled link for items inside a popup. Renders as `SidebarMenuButton` by default.

| Prop        | Type                | Default | Description                                  |
| ----------- | ------------------- | ------- | -------------------------------------------- |
| `component` | `React.ElementType` | —       | Override link element (e.g., Next.js `Link`) |
| `children`  | `React.ReactNode`   | —       | Link text                                    |

Also accepts all `NavigationMenu.Link` props.

---

## Collapsible Components

Imported from `@/mui-treasury/components/collapsible`. Install via `npx mui-treasury@latest add collapsible`. Used for expandable/collapsible menu sections.

### CollapsibleTrigger

Wraps a button element and injects a hidden checkbox for CSS-only toggle — no React state needed.

| Prop             | Type              | Default | Description                  |
| ---------------- | ----------------- | ------- | ---------------------------- |
| `render`         | `React.ReactNode` | —       | Element to render as trigger |
| `defaultChecked` | `boolean`         | `false` | Whether section starts open  |

### CollapsibleContent

Animated container that expands/collapses. **Requires a single direct `<div>` child** for the CSS Grid animation to work.

| Prop        | Type                | Default | Description       |
| ----------- | ------------------- | ------- | ----------------- |
| `component` | `React.ElementType` | —       | Root element type |

### CollapsibleIcon

Icon that rotates when the collapsible is toggled. Placed inside the trigger button.

| Prop     | Type     | Default    | Description     |
| -------- | -------- | ---------- | --------------- |
| `rotate` | `string` | `"180deg"` | Rotation amount |
