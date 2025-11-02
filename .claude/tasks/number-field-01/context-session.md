# Number Field 01 - Context Session

## Visual Design Analysis

### Key Components

**Purpose**: Input control for numeric values with increment/decrement buttons

**MUI Components Mapping**:

- Label: Typography (variant: body1, fontWeight: 600)
- Container: Box with horizontal flexbox
- Decrement button: Button variant="outlined" with minus icon
- Input field: TextField variant="outlined"
- Increment button: Button variant="outlined" with plus icon

**Icons**: Add (+) and Remove (-) icons from @mui/icons-material

**Theme Mapping**:

- Single color palette: primary (monochromatic)
- Text size: body1 for label, input text matches default TextField
- Spacing: 0.5-1 between buttons and input
- Border radius: default theme (8px)
- No explicit shadow
- Border: subtle outline on buttons and input

### Layout Structure

Container uses horizontal flexbox with equal-width segments:

```
┌─────────────────────────────────────┐
│ Amount                              │
├───────┬──────────────────┬──────────┤
│   -   │       100        │    +     │
└───────┴──────────────────┴──────────┘
```

**Row breakdown**:

- Label row: Typography aligned left
- Input row: 3 equal segments
  - Left: Decrement button (-)
  - Center: Numeric input (100)
  - Right: Increment button (+)

**Layout details**:

- Display: flex, flexDirection: row
- All 3 segments equal width (flex: 1)
- No gap between segments (visually merged borders)
- Buttons and input aligned at same height
- Input text centered

### Accessibility Attention Points

1. **Keyboard Navigation**:
   - Arrow up/down should increment/decrement
   - Tab order: decrement button → input → increment button
   - Enter on buttons triggers action

2. **Screen Reader Support**:
   - Label properly associated with input (via aria-labelledby or native label)
   - Buttons have clear aria-label ("Decrease" / "Increase")
   - Current value announced on change
   - Min/max boundaries announced when reached

3. **Visual Accessibility**:
   - Sufficient contrast for text (WCAG AA: 4.5:1)
   - Focus indicators on all interactive elements
   - Button hit targets minimum 44x44px
   - Disabled states clearly distinguishable

4. **Input Constraints**:
   - Proper inputMode="numeric" for mobile keyboards
   - Min/max value validation
   - Step value for increment/decrement
   - Error state for invalid input

## Build Summary

- Built `number-field-01` component using Base UI NumberField as foundation
- Integrated MUI Box, Button, Typography, AddIcon, RemoveIcon
- Used render prop pattern: NumberField.Root → Box for sx support
- Group container: Box with flex, borderRadius 1, divider borders
- Buttons: variant="text", flex 1, borderRadius 0, minHeight 56, hover states with @media
- Input: Box component="input", flex 1, textAlign center, fontSize 24, fontWeight 500, focus bgcolor action.hover
- Props: label (optional Typography), sx (BoxProps["sx"]), extends NumberField.Root.Props
- Screenshot saved to context folder & public/screenshots
- Lint & type check passed
- Registry json generated with category "primitive"
