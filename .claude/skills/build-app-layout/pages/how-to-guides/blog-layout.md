# How to Build a Blog/Content Layout

A simple layout with an inset sidebar for table of contents or related content.

```tsx
import {
  Content,
  Footer,
  Header,
  InsetContent,
  InsetSidebar,
  Root,
} from "@/mui-treasury/layout/layout-core";

<Root>
  <Header height="64px">
    <Box sx={{ px: 2, display: "flex", alignItems: "center" }}>
      <Typography variant="h6">Blog</Typography>
    </Box>
  </Header>

  <Content>
    <Box sx={{ p: 3, maxWidth: 720 }}>…article content…</Box>
    <InsetSidebar width={{ md: "200px", lg: "260px" }}>
      <InsetContent>…table of contents…</InsetContent>
    </InsetSidebar>
  </Content>

  <Footer>
    <Box sx={{ p: 2 }}>…footer…</Box>
  </Footer>
</Root>;
```

**Key points:**

- No EdgeSidebar — uses only `InsetSidebar` inside `Content`
- `InsetSidebar` default position is `"sticky"`, sticks under header on scroll
- Responsive width via breakpoint object
