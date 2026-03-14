---
name: build-app-layout
description: Always use this skill when building an app layout using the layout core components in the registry. The app layout usually consists of a header, content area, and footer, and may also include a sidebar or navigation menu.
---

**Announce on start**: You must announce "Using build-app-layout skill" when this skill is invoked.

## Layout Core Components

All components are imported from `@/registry/layout/layout-core/`.

### Basic Structure

The minimal layout uses `Root`, `Header`, `Content`, and `Footer`:

```tsx
import Content from "@/registry/layout/layout-core/Content";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import Root from "@/registry/layout/layout-core/Root";

<Root>
  <Header>…</Header>
  <Content>…</Content>
  <Footer>…</Footer>
</Root>;
```

- `Root` uses CSS Grid with `gridTemplateRows: "auto 1fr auto"` — Header and Footer take natural height, Content fills remaining space.
- `Root` fills the viewport height by default (`min-height: 100svh`). Override with `height` prop or `sx={{ minHeight: 400 }}` for constrained demos.
- `Header` is `position: sticky` at top with a bottom border line by default.
- `Footer` has a top border line by default.
- `Content` is rendered as `<main>`.

### Padding Rule

**Apply padding to the children of layout components, not the layout components themselves.** Layout components (`Header`, `Content`, `Footer`, `InsetAvoidingView`) manage internal structure (grid areas, sticky positioning, flex layout). Adding padding directly can break their behavior.

```tsx
// ✅ Correct — padding on children
<Header>
  <Box sx={{ px: 2 }}>…</Box>
</Header>
<Footer>
  <InsetAvoidingView sx={{ p: 2 }}>…</InsetAvoidingView>
</Footer>

// ❌ Incorrect — padding on layout component
<Header sx={{ px: 2 }}>…</Header>
<Footer sx={{ p: 2 }}>…</Footer>
```

### Root Props

- `height`: override the layout height, accepts string or responsive object
  ```tsx
  <Root height="500px">…</Root>
  <Root height={{ xs: "300px", md: "400px" }}>…</Root>
  ```
- `standalone`: fits the layout to its height with scrollable Content area (useful for POS, chat apps)
  ```tsx
  <Root standalone height="350px">
    <Header>…</Header>
    <Content>…scrollable content…</Content>
    <Footer>…</Footer>
  </Root>
  ```
- `disableTransition`: disables grid column transitions (sidebar collapse is instant)
  ```tsx
  <Root disableTransition>…</Root>
  ```

### Header Props

- `height`: fixed value (`"48px"`) or responsive object (`{ xs: "48px", md: "64px" }`). Sets the CSS variable `--jun-H-h` on the Root.
- `clip`: controls whether the Header spans over the EdgeSidebar. Accepts `"left"`, `"right"`, `true` (both), or responsive object.
  ```tsx
  <Root>
    <Header clip="left">…</Header>
    <EdgeSidebar variant={["permanent", { width: "200px" }]}>…</EdgeSidebar>
    <Content>…</Content>
  </Root>
  ```

### EdgeSidebar Collapse Components

Components for sidebar collapse UI, imported from `@/registry/layout/layout-core/`.

- `EdgeSidebarCollapser`: wraps a button to toggle sidebar collapse. Automatically finds the closest sidebar.

  ```tsx
  import EdgeSidebarCollapser from "@/registry/layout/layout-core/EdgeSidebarCollapser";

  <EdgeSidebarCollapser render={<Button>Toggle</Button>} />;
  ```

- `EdgeCollapsedVisible`: shows its child only when sidebar is collapsed.
- `EdgeUncollapsedVisible`: shows its child only when sidebar is expanded.

  ```tsx
  import EdgeCollapsedVisible from "@/registry/layout/layout-core/EdgeCollapsedVisible";
  import EdgeUncollapsedVisible from "@/registry/layout/layout-core/EdgeUncollapsedVisible";

  <EdgeSidebarCollapser
    render={
      <Button>
        <EdgeCollapsedVisible render={<ChevronRightIcon />} />
        <EdgeUncollapsedVisible render={<ChevronLeftIcon />} />
      </Button>
    }
  />;
  ```
