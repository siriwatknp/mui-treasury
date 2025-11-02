# radios-segment-01

## Component Overview

A segmented control component built with Material UI RadioGroup for selecting between two size options (14-inch and 16-inch) with pricing information.

## Visual Design Analysis

### Key Components

- **RadioGroup**: Container for radio buttons with horizontal layout
- **Radio**: Hidden native radio inputs (we'll customize the visual presentation)
- **Card/Box**: Custom radio button styled as card segments
- **Typography**: Display size options and pricing

### Component Variants

- Radio buttons will be visually hidden
- Custom styled cards/boxes to represent segments
- Selected state: blue border (`primary.main`)
- Unselected state: gray border

### Layout Structure

```
┌──────────────────────────────────────────────────┐
│ ┌──────────────────┬──────────────────────────┐ │
│ │     14-inch      │       16-inch          │ │
│ │  From $1599      │    From $2499        │ │
│ └──────────────────┴──────────────────────────┘ │
└──────────────────────────────────────────────────┘
```

**Container**: Horizontal flexbox/RadioGroup

- **Row 1**: Two equal-width segments side by side
  - Left segment: "14-inch" title + "From $1599" subtitle (unselected - gray border)
  - Right segment: "16-inch" title + "From $2499" subtitle (selected - blue border)

### Theme Mapping

**Palette Colors**:

- Selected border: `primary.main` (blue)
- Unselected border: `grey.300` or default border color
- Background: `background.paper` for both states
- Text: `text.primary` for titles, `text.secondary` for pricing

**Typography**:

- Title (14-inch, 16-inch): `h5` or `h6` variant, bold weight
- Price (From $1599, From $2499): `body1` or `body2`, regular weight

**Spacing**:

- Between segments: 0 (connected segments)
- Internal padding: 2-3 (16-24px) for comfortable touch target
- Gap between title and price: 0.5

**Border**:

- Border width: 2px for selected state for emphasis
- Border radius: 2 (16px) for outer corners only
- Border color: See palette colors above

**Layout Details**:

- Equal width segments (50% each or flex: 1)
- Centered text alignment within each segment
- Minimum height for comfortable interaction (touch target ~44px)

### Ascii Mockup Representation

```
┌────────────────────────────────────────────────────────┐
│  ┌─────────────────────┬────────────────────────────┐  │
│  │                     │                            │  │
│  │      14-inch        │        16-inch             │  │
│  │   From $1599        │      From $2499            │  │
│  │                     │                            │  │
│  └─────────────────────┴────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
    (gray border)           (blue border - selected)
```

## Accessibility Analysis

### Critical Attention Points

**1. RadioGroup Semantics**:

- Use `<RadioGroup>` component for proper ARIA role
- Each segment must contain a `<Radio>` component for semantic correctness
- Provide meaningful `name` prop to group radio buttons
- Each radio needs unique `value` prop

**2. Keyboard Navigation**:

- Arrow keys should navigate between options (built-in with MUI RadioGroup)
- Tab key should focus the entire RadioGroup (first radio or selected radio)
- Space key should select focused option
- Ensure custom styling doesn't break focus indicators

**3. Screen Reader Support**:

- Use proper label association with each radio
- Consider using `aria-label` or `aria-labelledby` for each option
- Price information should be included in the accessible name or description
- Example: "14-inch, From $1599"

**4. Visual Accessibility**:

- Selected state must have sufficient color contrast (blue border should meet 3:1 contrast ratio)
- Focus indicator must be visible and meet contrast requirements
- Don't rely solely on color - border width difference helps
- Text contrast: Ensure titles and prices meet 4.5:1 ratio

**5. Touch Target Size**:

- Each segment should be at least 44x44px for touch accessibility
- Entire card area should be clickable, not just the hidden radio

**Implementation Recommendations**:

1. Wrap each Radio in a FormControlLabel with the card content as label
2. Use `sx` to visually hide the radio but keep it accessible
3. Style the label (card) to show selected/unselected states
4. Ensure the entire card area is clickable
5. Maintain focus visibility with custom focus styles

## Build Notes

### Implementation Summary

**Component Structure**:

- Used `RadioGroup` with `row` prop for horizontal layout
- Two `FormControlLabel` components wrapping `Radio` inputs
- Radio inputs visually hidden with `position: absolute, opacity: 0, width: 0, height: 0`
- Custom labels built with `Stack` containing title (h4) and price text (body1)

**Styling Approach**:

- Applied styles to `FormControlLabel` instead of individual cards
- Used `flex: 1` for equal-width segments
- Border styling: 1px default, 2px when checked (`:has(:checked)`)
- Border radius applied only to outer corners (left segment: top/bottom left, right segment: top/bottom right)
- Removed border-right from left segment to create seamless connection
- Used `zIndex: 1` on selected state to prevent border overlap issues

**Accessibility Features**:

- Native Radio inputs maintain keyboard navigation (arrow keys, space)
- Focus indicators added with `:has(:focus-visible)` selector
- 2px outline with `primary.main` color on focus
- Entire card area clickable via FormControlLabel label prop
- Radio labels include both size and price information for screen readers

**Theme Usage**:

- Typography: `h4` for size, `body1` for price with `text.secondary`
- Colors: `primary.main` for selected border, `divider` for unselected
- Spacing: `py: 3, px: 4` for internal padding, `spacing={0.5}` between text elements
- Border radius: `borderRadius: 2` (16px) on outer corners only

**Props Interface**:

- `defaultValue`: Sets initially selected option (defaults to "16-inch")
- `value`: Controlled component value
- `onChange`: Callback for value changes
- Fully controllable or uncontrolled component

**Quality Checks**:

- ✅ ESLint: No warnings or errors
- ✅ TypeScript: No type errors
- ✅ Dev server: Compiled successfully
- ✅ Visual: Matches mockup design with proper border emphasis on selected state

**Notes**:

- Screenshot saved to `.claude/tasks/radios-segment-01/radios-segment-01-1.png`
- Component renders with 16-inch selected by default
- Hover state added with `borderColor: action.hover` for better UX
