---
name: ui-engineer
description: MUI component styling and implementation rules — sx prop patterns, theme usage, dark mode, spacing, accessibility, form best practices, chart config, and component-specific gotchas. Use whenever building or modifying MUI components, reviewing MUI code, or implementing designs with Material UI. Triggers on any task involving MUI component creation, styling, theming, or mockup implementation.
---

## Role

Staff Design Engineer with comprehensive MUI expertise and pixel-perfect implementation skills.

## Core Principles

1. **Minimal sx props** — layout structure only, not decoration
2. **Theme-first** — theme variables over hardcoded values
3. **Alias tokens only** — never direct static tokens
4. **Dark mode**: `theme.applyStyles('dark', styles)` exclusively
5. **TypeScript**: no type errors on changed files
6. **Lean API**: no redundant props (e.g., no `onClear` when `onChange(null)` suffices)

## Spacing

- 0.5 step increments only (0.5, 1, 1.5, 2...). Never arbitrary decimals like 1.2
- Text/icon spacing: 0.5–1.5 based on font size
- Component spacing: 1–2 based on component size
- Flexbox containers: `gap` at least `1` unless design explicitly says otherwise

## Images & Media

- Use `<Box component="img" />` with empty `src` and proper `alt`, style via `sx` with proper `aspectRatio`
- Never use fake divs to simulate images
- Placeholders when no real image: `https://placehold.co/600x400` (no query params). Use correct aspect ratio (e.g., 3:4 → `https://placehold.co/600x400`, square → `https://placehold.co/400`)
- For components filling a layout (cards, buttons, inputs): don't set `maxWidth`/`width` — let them flow naturally; control width from the preview page

## Colors

- Semantic text (`error`, `success`, `info`, `warning`): use `<palette>.text` token for better contrast

  ```tsx
  <Typography sx={{ color: "error.text" }}>Error</Typography>

  <Box sx={theme => ({
    color: (theme.vars || theme).palette.success.text,
  })}>
  ```

## Button vs IconButton

- High contrast background → `Button` with custom `borderRadius` (IconButton doesn't support variant)

  ```jsx
  <Button variant="contained" sx={{ borderRadius: 99 }}>
    <AddIcon />
  </Button>
  ```

- `IconButton` only for secondary actions or lists of same-size icon-only buttons
- No `textTransform: "none"` needed — built-in theme already handles it
- Don't customize buttons with `grey` tokens — use `primary` color

## Charts

Always start with zero margin/axis, then adjust:

```tsx
import { BarChart } from "@mui/x-charts/BarChart";

<BarChart
  margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
  xAxis={[{ height: 0, position: "none" }]} // min 28 to display label
  yAxis={[{ width: 0, position: "none" }]} // min 28 to display label
/>;
```

### PieChart

- Hide legend: `slotProps.legend.sx.display = "none"`
- Format values: `valueFormatter: (params) => \`${params.value}%\``
- Arc colors: `colors` prop with string array
- Remove spacing: same `margin` pattern as above

## Component-Specific Rules

### Chip

- Subtle background → `<Chip variant="filled" color="success|error|info|warning|secondary">`

### Icon

- First: `@mui/icons-material`. Fallback: `lucide-react`
- Last resort: `<Box sx={{ display: 'inline-block', width: size, height: size, bgcolor: 'text.icon', borderRadius: '50%' }} />`

### ListItem

- Use `sx={{ alignItems: 'flex-start' }}` — NOT the `alignItems` prop
  - Add margin-top to `ListItemAvatar` for alignment (unless `ListItemText` is not used)
- Don't use `disablePadding` when `secondaryAction` is present (removes padding-right)
- With `secondaryAction`: ensure padding-right accommodates the action content

### ListItemText

- Set `slotProps.secondary.component` to `"div"` if `secondary` is a React element (avoids `<p>` nesting)

### Typography

- No `h5`/`h6` variants — lowest heading is `h4`

### TextField & Forms

1. **Always** use built-in `label` prop — not separate Typography
2. Use `slotProps` — not deprecated `InputProps`/`InputLabelProps`
   - `slotProps.input`, `slotProps.inputLabel`, `slotProps.htmlInput`
3. Include `required`, `error`, `helperText` for validation and a11y
4. Controlled components with proper state handling
5. Clear errors on user interaction

```tsx
// ✅ CORRECT
<TextField
  fullWidth
  required
  label="Card Number"
  placeholder="1234 5678 9012 3456"
  variant="outlined"
  value={formData.cardNumber}
  onChange={handleInputChange("cardNumber")}
  error={!!errors.cardNumber}
  helperText={errors.cardNumber || "Enter 16-digit card number"}
/>

// ❌ INCORRECT
<Box>
  <Typography variant="body2">CARD NUMBER</Typography>
  <TextField
    fullWidth
    placeholder="1234..."
    InputProps={{ /* deprecated */ }}
  />
</Box>
```

## `sx` Prop Rules

- Minimize usage — layout structure, not decoration
- No hardcoded colors/spacing — use theme variables
- No explicit `height` — let padding/line-height determine it
- Use alias tokens:

```diff
- sx={theme => ({ borderRadius: (theme.vars || theme).shape.borderRadius * 3 })}
+ sx={{ borderRadius: 3 }}

- sx={theme => ({ color: (theme.vars || theme).palette.primary.main })}
+ sx={{ color: "primary.main" }}
```

### Theme access — MANDATORY

Use callback as value or array item. **NEVER** spread callback in object:

```js
// ✅ Callback as value
sx={theme => ({
  color: (theme.vars || theme).palette.primary.main,
})}

// ✅ Callback as array item
sx={[
  { borderRadius: 2 },
  theme => ({
    color: (theme.vars || theme).palette.primary.main,
  })
]}

// ❌ NEVER — callback spread in object
sx={{
  borderRadius: 2,
  ...theme => ({
    color: (theme.vars || theme).palette.primary.main,
  })
}}
```

### Merging `sx` props

Always use array syntax:

```tsx
function MyButton({ sx, ...props }: MyButtonProps) {
  return (
    <IconButton
      sx={[
        { color: "text.secondary", "&:hover": { color: "text.primary" } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
}
```

### Hover on focusable elements

Wrap in `@media (hover: hover)`:

```tsx
sx={theme => ({
  bgcolor: "background.paper",
  "@media (hover: hover)": {
    "&:hover": { bgcolor: "action.hover" },
  },
})}
```

### Responsive design

- Single field: `sx={{ width: { xs: "100%", md: "50%" } }}`
- Multiple fields: `theme.breakpoints.up("md")`

```tsx
sx={theme => ({
  width: "100%",
  [theme.breakpoints.up("md")]: { width: "50%" },
})}
```

### Container queries

```tsx
sx={theme => ({
  [theme.containerQueries?.up("sm") || "@container (min-width: 600px)"]: {
    gridColumn: "span 6",
  },
  [theme.containerQueries?.up("md") || "@container (min-width: 900px)"]: {
    gridColumn: "span 7",
  },
})}
```

Both container + media queries with class selectors:

```tsx
sx={theme => ({
  [theme.containerQueries?.up("md") || "@container (min-width: 900px)"]: {
    width: "50%",
  },
  ".responsive-media &": {
    [theme.breakpoints.up("md")]: { width: "50%" },
  },
})}
```

## Theme Usage

- `(theme.vars || theme).palette.*` for palette/shape access
- `theme.typography` directly (NOT `theme.vars.typography`)
- No type errors after theme changes

```tsx
// ✅ CORRECT
sx={{
  borderRadius: 3,
  color: "primary.main",
  p: 2,
  ...theme.applyStyles('dark', { bgcolor: "grey.900" })
}}

// ❌ INCORRECT
sx={{
  borderRadius: "12px",
  color: "#1976d2",
  padding: "16px",
  bgcolor: isDarkMode ? "grey.900" : "white"
}}
```

## Dark Mode

- Build as light mode even if mockup shows dark
- **Never** use `useTheme()` + `isDarkMode` pattern
- Use `theme.applyStyles('dark', styles)`:

```js
// ✅ Correct
sx={theme => ({
  bgcolor: "background.paper",
  ...theme.applyStyles('dark', { bgcolor: "grey.900" }),
})}

// ❌ Incorrect — callback spread in object
sx={{
  bgcolor: "background.paper",
  ...theme => theme.applyStyles('dark', { bgcolor: "grey.900" }),
}}
```

## Accessibility

### MUI Accessibility Baseline

- MUI components include built-in keyboard navigation, focus management, and ARIA attributes
- Check MUI built-in a11y before adding custom ARIA — MUI follows WAI-ARIA practices by default
- Identify when additional ARIA is needed (`aria-describedby` for forms, `aria-live` for dynamic content)
- Common gotchas: `IconButton` needs `aria-label`, don't wrap disabled buttons in `Tooltip`

### Semantic Structure

- Card selections: RadioGroup/Radio (single), Checkbox/FormGroup (multi)
- Clickable cards: primary action on title with CSS `::after` for click area extension
- Navigation: use appropriate landmarks (AppBar, Drawer)

### Keyboard & Screen Reader

- Logical tab order and focus indicators
- Focus trapping for modals/overlays
- Meaningful labels and heading hierarchy
- Live regions for dynamic content (`aria-live`)

### Visual Accessibility

- WCAG contrast: 4.5:1 normal text, 3:1 large text
- Don't rely solely on color for information
- Focus indicators meet contrast requirements

### Response Format

- Reference specific WCAG criteria
- Provide implementable MUI solutions
- Prioritize by impact (critical vs nice-to-have)
