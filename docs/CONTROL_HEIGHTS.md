# CONTROL_HEIGHTS Padding Reference

Use `CONTROL_HEIGHTS` from `../scales` to calculate padding values for consistent control sizing.

```ts
// registry/themes/mui-treasury/scales.ts
export const CONTROL_HEIGHTS = {
  sm: 32,
  md: 36,
  lg: 42,
};

export const CONTROL_TOUCH_HEIGHTS = {
  sm: 34,
  md: 40,
  lg: 48,
};

export const TOUCH_MEDIA_QUERY = "@media (max-width: 768px)";
```

## Touch Device Support

Touch heights provide larger touch targets for mobile/touch devices:
- sm: 32 → 34 (+2px)
- md: 36 → 40 (+4px)
- lg: 42 → 48 (+6px)

### Media Query Decision

We chose `@media (max-width: 768px)` (breakpoint-only) over:
- `(pointer: coarse)` - targets touch input regardless of screen size
- `(pointer: coarse) and (max-width: 768px)` - hybrid approach

**Reasoning:** Breakpoint-only is easier to test during development (just resize browser) and follows industry standard (Bootstrap, Tailwind, MUI default).

The query is configurable in `scales.ts` - change in one place to switch approaches.

### Conditional Pattern

Touch styles are conditionally applied only when values differ:

```ts
...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
  [TOUCH_MEDIA_QUERY]: {
    paddingBlock: CONTROL_TOUCH_HEIGHTS.sm / 2 - 10,
  },
}),
```

This pattern:
- Self-documents which values need touch overrides
- Automatically excludes styles if values become identical
- Requires removing `as const` from scales for TypeScript compatibility

## Formula Pattern

For a target padding value, derive the formula: `CONTROL_HEIGHTS.{size} / 2 - offset`

**Example:** target `paddingBlock: 8px` for medium size

- `36 / 2 - offset = 8` → offset = 10
- Result: `paddingBlock: CONTROL_HEIGHTS.md / 2 - 10`

## Quick Reference Table

| Target (px) | sm (32) formula | md (36) formula | lg (42) formula |
| ----------- | --------------- | --------------- | --------------- |
| 4           | sm/2 - 12       | md/2 - 14       | lg/2 - 17       |
| 5           | sm/2 - 11       | md/2 - 13       | lg/2 - 16       |
| 6           | sm/2 - 10       | md/2 - 12       | lg/2 - 15       |
| 7           | sm/2 - 9        | md/2 - 11       | lg/2 - 14       |
| 8           | sm/2 - 8        | md/2 - 10       | lg/2 - 13       |
| 9           | sm/2 - 7        | md/2 - 9        | lg/2 - 12       |
| 10          | sm/2 - 6        | md/2 - 8        | lg/2 - 11       |

For positive offset (padding > half height):
| Target (px) | sm (32) formula | md (36) formula | lg (42) formula |
|-------------|-----------------|-----------------|-----------------|
| 20          | sm/2 + 4        | md/2 + 2        | lg/2 - 1        |
| 22          | sm/2 + 6        | md/2 + 4        | lg/2 + 1        |
| 23          | sm/2 + 7        | md/2 + 5        | lg/2 + 2        |

## Usage by Variant

### Symmetric padding (paddingBlock + paddingInline)

```ts
// Default (md)
paddingBlock: CONTROL_HEIGHTS.md / 2 - 10,   // 8px
paddingInline: 16,

// Small
paddingBlock: CONTROL_HEIGHTS.sm / 2 - 10,   // 6px
paddingInline: 12,
```

### Asymmetric padding (paddingTop + paddingInline + paddingBottom)

Used for filled variant with floating label:

```ts
// Default (md) - FilledInput
paddingTop: CONTROL_HEIGHTS.md / 2 + 5,      // 23px
paddingInline: 12,
paddingBottom: CONTROL_HEIGHTS.md / 2 - 12,  // 6px

// Small - FilledInput
paddingTop: CONTROL_HEIGHTS.sm / 2 + 4,      // 20px
paddingInline: 10,
paddingBottom: CONTROL_HEIGHTS.sm / 2 - 13,  // 3px
```

## Components Using CONTROL_HEIGHTS

- `text-field.ts` - MuiInputBase, MuiOutlinedInput, MuiFilledInput
- `date-picker.ts` - MuiPickersTextField
- `select.ts` - MuiSelect
- `autocomplete.ts` - MuiAutocomplete
- `button.ts` - MuiButton, MuiToggleButton
- `controls.tsx` - MuiSwitch (uses SWITCH_SIZES/SWITCH_TOUCH_SIZES)
