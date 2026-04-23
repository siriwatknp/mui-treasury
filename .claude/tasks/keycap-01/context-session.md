# keycap-01 — Context Session

## Brief

Mechanical keycap-style button. Category `primitive`, subcategory `button`. Wraps MUI `ButtonBase` with `disableRipple`. Supports text or icon children. Pressed state (translateY, shadow reduction) on `:active`, no transition. Works in light + dark.

## Visual Analysis (UX/UI Designer)

### Source mockup (dark)

Three keycaps "C", "S", "S" on near-black backdrop. Each key:

- Square-ish, slightly taller than wide feel due to bottom "lip"
- Large rounded corners (~16–18px on ~90px key ≈ 18–20%)
- Top face: subtle vertical gradient (top ~#2d2d2d → bottom ~#1a1a1a)
- Bottom lip (darker seam) visible below top face — depth illusion
- Ambient drop shadow under the key
- Inner top highlight (very faint white glaze) on upper edge
- Letter: small (body2/caption), top-left corner, pale gray/white, sans-serif

### ASCII mockup

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ C           │  │ S           │  │ S           │
│             │  │             │  │             │
│             │  │             │  │             │
│             │  │             │  │             │
╰─────────────╯  ╰─────────────╯  ╰─────────────╯
  ░░░░░░░░░░       ░░░░░░░░░░       ░░░░░░░░░░     (drop shadow)
```

### Theme mapping

- Shape: `borderRadius` ≈ 2.5 (20px on default 8px base)
- Size: min 64×64 (fixed minimum so 1-char content still feels key-sized)
- Padding: `1.25` (10px) — top-left offset for letter
- Typography: body2 weight 500, `text.primary`
- Palette: grey scale + alpha shadows (hex hardcoded for shadow layers because gradient/shadow alpha values don't map cleanly to alias tokens — bgcolor stays on grey tokens where possible)

### Layout

- `display: inline-flex`, `alignItems: flex-start`, `justifyContent: flex-start`
- Letter/icon anchored top-left via padding

### 3D effect technique

Single `ButtonBase` element with layered `box-shadow`:

- Inner top highlight: `inset 0 1px 0 rgba(255,255,255,0.x)` — glossy cap edge
- Inner bottom lip: `inset 0 -3px 0 rgba(0,0,0,0.x)` — visible "side wall"
- Outer drop: `0 2px 4px rgba(0,0,0,0.x)` — ambient elevation
- Plus a linear-gradient background for top-to-bottom face shading

Pressed (`:active`):

- `transform: translateY(2px)` — key sinks
- Reduce inner bottom lip and outer drop (key flush with surface)
- No `transition` (per requirements)

## Accessibility Notes

- `ButtonBase` gives semantic `<button>` role + keyboard activation (Enter/Space). Focus is handled by browser/MUI (`.Mui-focusVisible`).
- `disableRipple` does NOT remove focus indicator — ensure focus ring remains visible; rely on default focus-visible outline. Do not suppress outline.
- Icon-only content: caller must pass `aria-label` (document in demo).
- Color contrast: letter on keycap top face must meet ≥4.5:1. Using `text.primary` on grey gradient; verify.
- Don't rely on pressed visual alone — `:active` is fleeting; aria state is handled by ButtonBase.

## API

```tsx
export interface Keycap01Props extends Omit<ButtonBaseProps, 'disableRipple'> {}
```

Accepts any `ButtonBase` prop. Renders `children` in top-left.

## File Plan

- `apps/website/registry/components/keycap-01/keycap-01.tsx` ✅ Done
- `apps/website/registry/components/keycap-01/keycap-01.demo.tsx` ✅ Done
- `apps/website/app/keycap-01/page.tsx` ✅ Done
- `apps/website/registry/components/keycap-01/keycap-01.meta.json` ✅ Done (category `primitive`, subcategory `button`)

## Result

- Component matches mockup: dark key with gradient top face, inset bottom lip, ambient drop shadow, letter top-left.
- Light mode: pale gradient + soft shadows, same layout.
- Pressed `:active` → translateY(2px) + reduced shadows, no transition.
- Demo: C, S, ⌘, ⇧ (ArrowBigUp), ⌥ — mix of text + icons.
- Lint + tsc clean. Visual baselines + OG generated.
