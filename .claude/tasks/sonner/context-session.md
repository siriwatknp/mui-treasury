# Toast-01 Context Session

## Overview

Primitive toast component using Sonner with MUI GlobalStyles customization.

## Research Summary

### Sonner API

- `Toaster` component: renders toast container
- `toast()` function: triggers toasts
- Key props: `position`, `duration`, `closeButton`, `richColors`
- Styling via `toastOptions.classNames` or `toastOptions.style`
- Types: `toast()`, `toast.success()`, `toast.error()`, `toast.warning()`, `toast.info()`, `toast.loading()`

### Customization Strategy

Use `GlobalStyles` from MUI to override Sonner's default CSS variables and classes.

## Design Analysis

### Component Structure

- `Toast01` - Wrapper that renders `<Toaster />` + `<GlobalStyles />`
- Export `toast` from sonner for triggering

### Theme Mapping

- Background: `palette.background.paper`
- Text: `palette.text.primary` / `palette.text.secondary`
- Border: `palette.divider`
- Success: `palette.success.main`
- Error: `palette.error.main`
- Warning: `palette.warning.main`
- Info: `palette.info.main`
- Border radius: theme shape
- Shadow: theme shadows

### Minimal API

```tsx
// Usage
import { Toast01, toast } from "@/registry/components/toast-01/toast-01";

// In layout/provider
<Toast01 />;

// Trigger
toast("Message");
toast.success("Success!");
toast.error("Error!");
```

## Implementation Notes

- Keep minimal: only GlobalStyles for theming
- No custom components, leverage Sonner's built-in UI
- Dark mode support via `theme.applyStyles`

## Summary

### Files Created

- `registry/components/toast-01/toast-01.tsx` - Main component with GlobalStyles + Toaster
- `registry/components/toast-01/toast-01.demo.tsx` - Demo with all toast types
- `app/toast-01/page.tsx` - Preview page

### Key Implementation Details

- Uses Sonner's CSS variable system for theming
- Targets `[data-sonner-toaster]` and `[data-sonner-toast]` selectors
- Maps MUI theme tokens to Sonner CSS variables:
  - `--normal-bg/border/text` for default toasts
  - `--success/error/warning/info-bg/border/text` for typed toasts
  - `--border-radius` for shape
  - Shadow applied via `[data-sonner-toast]` selector
- Exports `toast` from sonner for triggering toasts
- Props: `position`, `duration`, `closeButton`
