# How to Clip the Header Over the Sidebar

Use the `clip` prop on `Header` to make it span over the sidebar, giving the sidebar full height.

```tsx
<Root>
  <Header clip="left">…</Header>
  <EdgeSidebar id="sidebar" variant={["permanent", { width: "256px" }]}>
    …
  </EdgeSidebar>
  <Content>…</Content>
</Root>
```

- `clip="left"` — header spans over left sidebar
- `clip="right"` — header spans over right sidebar
- `clip={true}` — header spans over both sidebars
- Responsive: `clip={{ xs: true, md: "left" }}`
