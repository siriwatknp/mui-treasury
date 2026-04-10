# How to Use Iframe Preview for Responsive Demos

When a demo showcases responsive behavior (breakpoint-based, auto-collapse, drawer↔permanent), add `previewMode: "iframe"` to the demo meta and use `height="90vh"` on Root.

```tsx
export const meta = {
  title: "…",
  description: "…",
  previewMode: "iframe" as const,
};

export function Demo() {
  return <Root height="90vh">…</Root>;
}
```
