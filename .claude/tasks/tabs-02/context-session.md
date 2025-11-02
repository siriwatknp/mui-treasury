# Tabs-02 Registry Item - Context Session

## Visual Design Analysis

### Overview

A horizontal tab navigation component with a distinctive visual effect where the indicator serves as the active tab's background, using `mix-blend-mode: difference` to create an inverted text effect.

### Key Components

- **Tabs Component**: MUI Tabs with custom indicator styling
- **Tab Components**: MUI Tab items with text labels
- **Visual Effect**: mix-blend-mode: difference for text inversion when indicator overlays

### Theme Mapping

**Colors:**

- Container background: light gray/purple tint (similar to `grey.100` or custom light background)
- Active tab indicator: solid dark background (black or `primary.main`)
- Tab text: primary text color
- Active tab text: inverted via mix-blend-mode (white when on black background)

**Typography:**

- Tab labels: body1 or similar, medium weight
- Consistent sizing across all tabs

**Spacing:**

- Container padding: 1-1.5 units (8-12px)
- Tab spacing: handled by Tabs component with centered/flexible layout
- Indicator border-radius: matches container radius (large, pill-shaped)

**Border Radius:**

- Container: very large radius (99px or 99 for pill shape)
- Indicator: very large radius (99px or 99 for pill shape)

### Layout

**Container Structure:**

- Horizontal flexbox layout
- Pills/rounded container background
- Centered tabs within container

**Tab Items:**

- Equal spacing between tabs
- Flexible width based on content
- Text centered within each tab

**Indicator:**

- Full height of tab
- Rounded pill shape
- Positioned behind/overlay the active tab
- Smooth transition between tabs

### ASCII Mockup Representation

```
┌─────────────────────────────────────────────────────────────────┐
│  All products    Laptops    ██ Desktops ██    Displays          │
└─────────────────────────────────────────────────────────────────┘

Legend:
- Outer box: light gray container with pill shape
- ██ Desktops ██: Active tab with dark indicator background
- Mix-blend-mode inverts the "Desktops" text to white
```

### Implementation Details

**MUI Components:**

- Tabs: Container with custom indicator styling
- Tab: Individual tab items

**Key Styling:**

- `TabIndicatorProps`: Style the indicator as full-height background
- Tab text with `mix-blend-mode: difference` for inversion effect
- Container with light background and pill border-radius
- Smooth transition animation for indicator movement

## Accessibility Considerations

### WCAG Compliance

- **Color Contrast**: Ensure 4.5:1 contrast ratio between:
  - Inactive tab text and container background
  - Active tab text (inverted) and indicator background
- **Keyboard Navigation**: MUI Tabs includes built-in keyboard support (Arrow keys, Home, End)
- **Focus Indicators**: Ensure visible focus state distinct from active state

### MUI Built-in Features

- Automatic ARIA attributes (role="tablist", role="tab", aria-selected)
- Keyboard navigation support
- Focus management

### Additional Requirements

- **aria-label** on Tabs component for screen reader context
- Meaningful tab labels (avoid icon-only tabs without labels)
- Ensure focus indicator is visible with sufficient contrast

### Critical Attention Points

1. **Text Contrast with mix-blend-mode**: Test that inverted text maintains readability
2. **Focus State**: Focus ring should be visible regardless of indicator position
3. **Screen Reader Testing**: Verify tab navigation announces correctly
4. **Motion**: Indicator transition should respect `prefers-reduced-motion`

## Development Notes

- Verify mix-blend-mode works correctly in both light and dark modes
- Test indicator transition smoothness
- Ensure responsive behavior on smaller screens

## Implementation Summary

### Component Created

- **File**: `registry/components/tabs-02/tabs-02.tsx`
- **Preview Page**: `app/tabs-02/page.tsx`

### Key Implementation Details

1. **Container Box**:
   - Light gray background (`grey.100`) with dark mode support (`grey.800`)
   - Pill-shaped with `borderRadius: 99`
   - Padding of `1` unit around tabs
   - Uses `inline-flex` to fit content width

2. **Tabs Component**:
   - Custom indicator via `slotProps.indicator`
   - Indicator styled as full-height background (`height: "100%"`)
   - Black indicator (`common.black`) with white for dark mode
   - Smooth transition using theme transitions
   - Gap of `1` between tabs in flex container
   - `aria-label` for accessibility

3. **Tab Components**:
   - Minimal height styling (`minHeight: "auto"`)
   - Padding: `py: 1, px: 2`
   - **Critical**: `mixBlendMode: "difference"` for text inversion effect
   - All tabs use `common.black` color (inverts to white over black indicator)
   - `textTransform: "none"` to preserve capitalization
   - Font size: `0.9375rem` (15px)
   - Font weight: `500` (medium)
   - `zIndex: 1` to ensure text appears above indicator

4. **Visual Effect**:
   - The `mix-blend-mode: difference` creates automatic text color inversion
   - When black indicator slides under black text, text becomes white
   - Creates seamless visual effect without JavaScript color switching

### Technical Notes

- Used new `slotProps.indicator` API instead of deprecated `TabIndicatorProps`
- Transition timing uses theme's standard duration and easing
- Dark mode properly handled via `theme.applyStyles('dark', {...})`
- All spacing uses theme units for consistency
- No type errors or lint errors

### Screenshots

- `tabs-02-1.png`: Initial state with "Desktops" tab selected
- `tabs-02-2.png`: After clicking "All products" tab
