# Layout variables

## How to Customize CSS Based on Sidebar Collapsed State

When using non-mui-treasury components inside a collapsible `EdgeSidebar`, elements may get clipped or misaligned when the sidebar collapses. Use the `--_collapsed` and `--_uncollapsed` CSS variables to apply conditional styles.

### How It Works

Inside a `SidebarContainer`, two CSS custom properties act as state flags:

- `var(--_collapsed, <value>)` — the value applies **only when collapsed**
- `var(--_uncollapsed, <value>)` — the value applies **only when uncollapsed**

Stack them in a single CSS property to define both states:

```css
property: var(--_collapsed, <collapsed-value>)
  var(--_uncollapsed, <uncollapsed-value>);
```

Only one variable resolves at a time — the other becomes an empty string — so the final computed value is always just one of them.

### Example: Fix Clipped Avatar in Collapsed Sidebar

A non-mui-treasury `Avatar` (e.g. 40px) gets cut off when the sidebar collapses to `52px` because of its padding. Apply a negative margin only when collapsed:

```tsx
<Avatar
  sx={{
    marginLeft: "var(--_collapsed, -8px) var(--_uncollapsed, 0px)",
  }}
/>
```

- **Collapsed**: `margin-left: -8px` — shifts avatar left so it stays visible
- **Uncollapsed**: `margin-left: 0px` — normal positioning

### Common Use Cases

#### Hide/show elements

```tsx
// Hide text when collapsed
<Typography
  sx={{ display: "var(--_collapsed, none) var(--_uncollapsed, block)" }}
>
  Label
</Typography>
```

#### Resize elements

```tsx
// Shrink an icon when collapsed
<Box
  sx={{
    width: "var(--_collapsed, 20px) var(--_uncollapsed, 32px)",
    height: "var(--_collapsed, 20px) var(--_uncollapsed, 32px)",
  }}
/>
```

#### Adjust spacing

```tsx
// Remove gap when collapsed
<Stack sx={{ gap: "var(--_collapsed, 0px) var(--_uncollapsed, 8px)" }}>
  ...
</Stack>
```

### Important Notes

- These variables only work inside a `SidebarContainer` (which is rendered by `EdgeSidebar`)
- Prefer using sidebar primitives (`SidebarMenuButton`, `SidebarIcon`, `SidebarText`, etc.) — they handle collapse states automatically
- Use this technique only for custom/non-mui-treasury elements that need collapse-aware styling

## How to customize/remove transitions from all layout and sidebar components

Set `--tsn: none` on the Root to disable all transitions:

```tsx
<Root sx={{ "--tsn": "none" }}>...</Root>
```
