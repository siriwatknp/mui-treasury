# Context Session: select-inset-01

## Component Overview

A select component with an inset label design where the label appears inside the select container above the selected value.

## Visual Design Analysis

### Key Components

- **Primary Component**: MUI Select with FormControl
- **Label**: FormLabel with "Your trade-in device" text
- **Selected Value**: "iPhone 16" displayed as the current selection
- **Dropdown Icon**: Chevron/arrow icon on the right side
- **Variant**: Outlined variant with rounded corners

### Theme Mapping

- **Colors**:
  - Border: Default border color (likely "divider" token)
  - Text label: Secondary text color
  - Selected value: Primary text color
  - Background: Paper/background color

- **Typography**:
  - Label: Smaller text (body2 or caption)
  - Value: Default body1 size

- **Spacing**:
  - Internal padding: 1.5-2 units
  - Gap between label and value: 0.5-1 unit
  - Border radius: 3 units (approximately 24px)

### Layout Structure

- **Container**: FormControl with outlined variant
- **Vertical stack**: Label positioned above the selected value
- **Horizontal alignment**: Dropdown icon aligned to the right
- **Full-width**: Component spans available width

### ASCII Mockup Representation

```
┌──────────────────────────────────────────────┐
│ Your trade-in device                      ▼  │
│ iPhone 16                                    │
└──────────────────────────────────────────────┘
```

**Layout Details**:

- Single container with rounded border
- Label and value are vertically stacked inside
- Dropdown arrow positioned at right, vertically centered
- Consistent padding around all edges

## Accessibility Guidelines

### Critical Attention Points

1. **Semantic Labeling**:
   - Use FormLabel properly associated with Select via `htmlFor` and `id`
   - Ensure label is always visible (not just on focus)
   - Label should not overlap with selected value

2. **Keyboard Navigation**:
   - MUI Select provides built-in keyboard support (Space/Enter to open, Arrow keys to navigate)
   - Ensure Tab key moves focus appropriately
   - Escape key should close dropdown

3. **Screen Reader Support**:
   - FormLabel provides proper association with select
   - Selected value should be announced
   - Use `aria-label` or `aria-labelledby` if additional context needed
   - Consider `aria-describedby` for helper text

4. **Focus Management**:
   - Clear focus indicator on the select component
   - Focus should be visible and meet 3:1 contrast ratio (WCAG 2.1 AA)
   - Focus style should work in both light and dark modes

5. **Required Fields**:
   - If required, add `required` prop to Select
   - Use `aria-required="true"` for assistive technology
   - Consider adding visual indicator (asterisk)

6. **Error States**:
   - If validation needed, use `error` prop on FormControl
   - Provide `helperText` with error message
   - Error messages should be announced to screen readers

7. **Color Contrast**:
   - Label text: minimum 4.5:1 contrast ratio
   - Selected value text: minimum 4.5:1 contrast ratio
   - Border: minimum 3:1 contrast ratio
   - Ensure all states (default, hover, focus, disabled) meet requirements

## Implementation Notes

### Component Structure

- Use FormControl as wrapper
- FormLabel for the inset label
- Select component for the dropdown
- MenuItem for options
- Custom styling to achieve inset label appearance

### Styling Approach

- Minimal `sx` usage - primarily for layout structure
- Use theme tokens for colors, spacing, typography
- No hardcoded values
- Support both light and dark modes using `theme.applyStyles`

### State Management

- Controlled component with value state
- onChange handler to update selection
- Support for disabled state
- Support for error state if needed

## Work Summary

### Implementation Details

- **Created component**: `registry/components/select-inset-01/select-inset-01.tsx`
  - Used `renderValue` prop to create custom display with label and value stacked vertically
  - Implemented proper TypeScript interface extending SelectProps
  - Added `displayEmpty` prop to ensure label is always shown
  - Used Box and Typography components for the inset label layout
  - Applied `gap: 0.5` for spacing between label and value
  - Set `borderRadius: 3` for rounded corners matching the design
  - Adjusted padding: `pt: 1.5, pb: 1.5, px: 2` for proper spacing

- **Created preview page**: `app/select-inset-01/page.tsx`
  - Implemented controlled component with useState
  - Added 6 device options for demonstration
  - Set maxWidth: 520 to control component width in preview
  - Fixed TypeScript type error by casting `e.target.value as string`

- **Styling approach**:
  - Minimal sx props, focused on layout structure
  - Used theme tokens: `color: "text.secondary"` for label
  - fontSize: "0.875rem" for label, "1.0625rem" for value
  - No hardcoded colors or spacing values

- **Accessibility**:
  - Select component maintains proper ARIA attributes
  - Keyboard navigation works natively (Space/Enter to open, arrows to navigate)
  - Label and value are properly announced by screen readers
  - Focus indicators are visible

### Screenshots

- Iteration 1: Initial implementation with InputLabel outside the border
- Iteration 2: Final implementation with inset label inside the border matching mockup
