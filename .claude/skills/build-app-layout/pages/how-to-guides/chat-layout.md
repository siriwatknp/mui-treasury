# How to Build a Chat/Messenger Layout

A chat layout with a permanent left sidebar for conversation list, main area for messages, and optional right panel for contact details.

```tsx
import {
  Content,
  EdgeSidebar,
  EdgeSidebarContent,
  Footer,
  Header,
  InsetAvoidingView,
  InsetContent,
  InsetSidebar,
  Root,
} from "@/mui-treasury/layout/layout-core";

<Root standalone>
  <Header height="64px">
    <Box sx={{ px: 2, display: "flex", alignItems: "center" }}>
      <Typography variant="h6">Messenger</Typography>
    </Box>
  </Header>

  <EdgeSidebar
    id="chats-sidebar"
    permanentAutoCollapse="md"
    variant={{
      xs: ["permanent", { width: "25cqw", collapsedWidth: "80px" }],
    }}
  >
    <EdgeSidebarContent>…chat list…</EdgeSidebarContent>
  </EdgeSidebar>

  <Content>
    …messages…
    <InsetSidebar position="absolute" width="25cqw">
      <InsetContent>…contact details…</InsetContent>
    </InsetSidebar>
  </Content>

  <Footer>
    <InsetAvoidingView>
      <Box sx={{ p: 1 }}>…message input…</Box>
    </InsetAvoidingView>
  </Footer>
</Root>;
```

**Key points:**

- `standalone` makes Content scrollable within the layout height
- `25cqw` uses container query width for proportional sizing
- `InsetSidebar position="absolute"` + `InsetAvoidingView` in Footer to prevent overlap
