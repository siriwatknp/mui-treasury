# Layout Docs Parity Plan

Create `layout-docs-*` registry items to match tailwindcss-jun-layout documentation.

## Existing

- `layout-docs-header/` — demos: `layout-header-height`, `layout-header-clip`

## To Create

### 1. `layout-docs-root/`

Source: `layout.mdx` | Props: `height`, `standalone`, `disableTransition`
**meta.json**: category `layout`, subcategory `root`

- [x] `layout-root-height.demo.tsx` — custom height via `height` prop (fixed + responsive record) ✅ Done
  ```tsx
  <Root height="500px">...</Root>
  <Root height={{ xs: "400px", md: "600px" }}>...</Root>
  ```
- [x] `layout-root-standalone.demo.tsx` — `standalone` mode, layout fits to screen (POS/chat style) ✅ Done
  ```tsx
  <Root standalone>...</Root>
  ```
- [x] `layout-root-disable-transition.demo.tsx` — `disableTransition` removes sidebar transition animation ✅ Done
  ```tsx
  <Root disableTransition>...</Root>
  ```

---

### 2. `layout-docs-content/`

Source: `content.mdx` | Component: `Content`
**meta.json**: category `layout`, subcategory `content`

- ~~`layout-content-basic.demo.tsx` — basic content area with max-width container~~ (skipped)
  ```tsx
  <Root>
    <Header>...</Header>
    <Content sx={{ maxWidth: 900, mx: "auto" }}>...</Content>
    <Footer>...</Footer>
  </Root>
  ```
- ~~`layout-content-inset-sidebar.demo.tsx` — content with `InsetSidebar` as first/last child~~ (skipped)
  ```tsx
  <Root>
    <Header>...</Header>
    <Content>
      <InsetSidebar width="200px">
        <InsetContent>...</InsetContent>
      </InsetSidebar>
      <div>...</div>
    </Content>
    <Footer>...</Footer>
  </Root>
  ```

---

### 3. `layout-docs-footer/`

Source: `footer.mdx` | Component: `Footer`
**meta.json**: category `layout`, subcategory `footer`

- [x] `layout-footer-basic.demo.tsx` — basic footer with container content ✅ Done
  ```tsx
  <Root>
    <Header>...</Header>
    <Content>...</Content>
    <Footer>...</Footer>
  </Root>
  ```
- [x] `layout-footer-inset-avoiding.demo.tsx` — footer with `InsetAvoidingView` to avoid overlap from absolute inset sidebar ✅ Done
  ```tsx
  <Root standalone>
    <Header>...</Header>
    <Content>
      <div>...</div>
      <InsetSidebar position="absolute">
        <InsetContent>...</InsetContent>
      </InsetSidebar>
    </Content>
    <Footer>
      <InsetAvoidingView>...</InsetAvoidingView>
    </Footer>
  </Root>
  ```

---

### 4. `layout-docs-edge-sidebar/`

Source: `edge-sidebar.mdx` | Components: `EdgeSidebar`, `EdgeSidebarRight`, `EdgeSidebarContent`
**meta.json**: category `layout`, subcategory `edge-sidebar`

- [x] `layout-edge-sidebar-width.demo.tsx` — custom width via variant config ✅ Done
  ```tsx
  <Root>
    <EdgeSidebar variant={["permanent", { width: "200px" }]}>
      <EdgeSidebarContent>...</EdgeSidebarContent>
    </EdgeSidebar>
    <Content>...</Content>
  </Root>
  ```
- [x] `layout-edge-sidebar-visibility.demo.tsx` — permanent hidden/visible per breakpoint ✅ Done
  ```tsx
  <Root>
    <EdgeSidebar
      variant={{
        xs: ["permanent", { width: "256px", visibility: "hidden" }],
        md: ["permanent", { width: "256px", visibility: "visible" }],
      }}
    >
      <EdgeSidebarContent>...</EdgeSidebarContent>
    </EdgeSidebar>
    <Content>...</Content>
  </Root>
  ```
- [x] `layout-edge-sidebar-collapse.demo.tsx` — collapsible with `collapsedWidth` + `triggerEdgeCollapse` ✅ Done
  ```tsx
  <Root>
    <EdgeSidebar
      variant={["permanent", { width: "256px", collapsedWidth: "64px" }]}
    >
      <EdgeSidebarContent>
        <button onClick={(event) => triggerEdgeCollapse({ event })}>...</button>
      </EdgeSidebarContent>
    </EdgeSidebar>
    <Content>...</Content>
  </Root>
  ```
- [x] `layout-edge-sidebar-hover-uncollapse.demo.tsx` — collapsed sidebar expands on hover ✅ Done
  ```tsx
  <Root>
    <EdgeSidebar
      variant={[
        "permanent",
        { width: "256px", collapsedWidth: "64px", hoverUncollapse: true },
      ]}
    >
      <EdgeSidebarContent>...</EdgeSidebarContent>
    </EdgeSidebar>
    <Content>...</Content>
  </Root>
  ```
- [x] `layout-edge-sidebar-auto-collapse.demo.tsx` — auto collapse below breakpoint ✅ Done
  ```tsx
  <Root>
    <EdgeSidebar
      variant={["permanent", { width: "256px", collapsedWidth: "64px" }]}
      permanentAutoCollapse="lg"
    >
      <EdgeSidebarContent>...</EdgeSidebarContent>
    </EdgeSidebar>
    <Content>...</Content>
  </Root>
  ```
- [x] `layout-edge-sidebar-drawer.demo.tsx` — drawer mode + `triggerEdgeDrawer` ✅ Done
  ```tsx
  <Root>
    <Header>
      <button onClick={() => triggerEdgeDrawer()}>...</button>
    </Header>
    <EdgeSidebar variant={["drawer", { width: "300px" }]}>
      <EdgeSidebarContent>...</EdgeSidebarContent>
    </EdgeSidebar>
    <Content>...</Content>
  </Root>
  ```
- [x] `layout-edge-sidebar-drawer-without-overlay.demo.tsx` — drawer without overlay ✅ Done
  ```tsx
  <Root>
    <Header>
      <button onClick={() => triggerEdgeDrawer()}>...</button>
    </Header>
    <EdgeSidebar variant={["drawer", { width: "300px", withoutOverlay: true }]}>
      <EdgeSidebarContent>...</EdgeSidebarContent>
    </EdgeSidebar>
    <Content>...</Content>
  </Root>
  ```
- [x] `layout-edge-sidebar-responsive.demo.tsx` — drawer on mobile, permanent on desktop ✅ Done
  ```tsx
  <Root>
    <Header>
      <button onClick={() => triggerEdgeDrawer()}>...</button>
    </Header>
    <EdgeSidebar
      variant={{
        xs: ["drawer", { width: "300px" }],
        md: ["permanent", { width: "256px" }],
      }}
    >
      <EdgeSidebarContent>...</EdgeSidebarContent>
    </EdgeSidebar>
    <Content>...</Content>
  </Root>
  ```
- [x] `layout-edge-sidebar-right.demo.tsx` — `EdgeSidebarRight` component usage ✅ Done
  ```tsx
  <Root>
    <Content>...</Content>
    <EdgeSidebarRight variant={["permanent", { width: "200px" }]}>
      <EdgeSidebarContent>...</EdgeSidebarContent>
    </EdgeSidebarRight>
  </Root>
  ```

---

### 5. `layout-docs-inset-sidebar/`

Source: `inset-sidebar.mdx` | Components: `InsetSidebar`, `InsetContent`, `InsetAvoidingView`
**meta.json**: category `layout`, subcategory `inset-sidebar`

- [x] `layout-inset-sidebar-width.demo.tsx` — custom width via `width` prop (fixed + responsive) ✅ Done
  ```tsx
  <Root>
    <Header>...</Header>
    <Content>
      <div>...</div>
      <InsetSidebar width="220px">
        <InsetContent>...</InsetContent>
      </InsetSidebar>
    </Content>
    <Footer>...</Footer>
  </Root>
  ```
- [x] `layout-inset-sidebar-sticky.demo.tsx` — default sticky behavior, sticks under header on scroll ✅ Done
  ```tsx
  <Root>
    <Header>...</Header>
    <Content>
      <div>...long content...</div>
      <InsetSidebar>
        <InsetContent>...</InsetContent>
      </InsetSidebar>
    </Content>
    <Footer>...</Footer>
  </Root>
  ```
- [x] `layout-inset-sidebar-absolute.demo.tsx` — `position="absolute"` for standalone apps ✅ Done
  ```tsx
  <Root standalone>
    <Header>...</Header>
    <Content>
      <div>...</div>
      <InsetSidebar position="absolute">
        <InsetContent>...</InsetContent>
      </InsetSidebar>
    </Content>
    <Footer>
      <InsetAvoidingView>...</InsetAvoidingView>
    </Footer>
  </Root>
  ```

---

## File structure per item

```
registry/layout/layout-docs-{feature}/
├── layout-docs-{feature}.meta.json
└── demos/
    └── layout-{feature}-{aspect}.demo.tsx
```

## Demo file template

```tsx
import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Content from "@/registry/layout/layout-core/Content";
import Footer from "@/registry/layout/layout-core/Footer";
import Header from "@/registry/layout/layout-core/Header";
import Root from "@/registry/layout/layout-core/Root";

export const meta = {
  title: "...",
  description: "...",
};

export function Demo() {
  return (
    <Root sx={{ minHeight: 300, flex: 1, minWidth: 200 }}>
      <Header sx={{ px: 2 }}>
        <Typography variant="caption" fontWeight="bold">
          Header
        </Typography>
      </Header>
      <Content sx={{ p: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Content
        </Typography>
      </Content>
      <Footer sx={{ p: 2 }}>
        <Typography variant="caption" color="text.secondary">
          Footer
        </Typography>
      </Footer>
    </Root>
  );
}
```

## Total: 5 registry items, 19 demos
