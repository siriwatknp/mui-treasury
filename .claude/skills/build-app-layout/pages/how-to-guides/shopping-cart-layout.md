# How to Build a Shopping Cart / Right Sidebar Layout

A layout with a right-side drawer for cart/checkout panel.

```tsx
import {
  Content,
  EdgeDrawerTriggerRight,
  EdgeSidebarContent,
  EdgeSidebarRight,
  Footer,
  Header,
  Root,
} from "@/mui-treasury/layout/layout-core";

<Root standalone>
  <Header height="64px">…</Header>

  <EdgeSidebarRight
    id="cart-sidebar"
    variant={{
      xs: ["drawer", { width: "min(400px, 100vw)" }],
    }}
  >
    <EdgeSidebarContent>…cart items…</EdgeSidebarContent>
  </EdgeSidebarRight>

  <Content>
    <Box sx={{ p: 2 }}>…product grid…</Box>
  </Content>

  <Footer>…</Footer>
</Root>;
```

**Key points:**

- `EdgeSidebarRight` with drawer variant for a slide-in panel
- Use `EdgeDrawerTriggerRight` to open the right drawer
- `min(400px, 100vw)` prevents drawer from exceeding viewport on small screens
