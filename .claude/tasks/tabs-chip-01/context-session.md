# Tabs Chip 01 - Context Session

## Visual Design Analysis (UX/UI Designer)

### Overview

A horizontal tab navigation styled as chip-like buttons. The selected tab has high contrast (dark background, light text) while unselected tabs have subtle gray backgrounds.

### Key Components

- **Primary Component**: Material UI Tabs with custom styling to look like chips
- **Tab Items**: Individual Tab components styled as pills/chips
- **Variants**: Selected tab uses dark background (primary color), unselected tabs use subtle gray background
- **Visual Style**: Pill-shaped (fully rounded corners) with minimal spacing between tabs

### Theme Mapping

- **Selected Tab**:
  - Background: `primary.main` (black in light mode)
  - Text color: `primary.contrastText` (white)
  - Border radius: Fully rounded (pill shape)
- **Unselected Tabs**:
  - Background: `grey.100` (light gray)
  - Text color: `text.secondary` (gray text)
  - Border radius: Fully rounded (pill shape)
- **Typography**: Medium font weight for better readability
- **Spacing**: Minimal gap between tabs (0.5-1)

### Layout

- **Container**: Horizontal flexbox layout
- **Tab Group**: Inline tabs with rounded pill shapes
- **Alignment**: Left-aligned by default
- **Sizing**: Tabs auto-size based on content with horizontal padding

### ASCII Mockup Representation

```
┌─────────────────────────────────────────────────┐
│ [All chips] [M4 Pro] [M4 Max]                   │
│   (dark)     (light)  (light)                   │
└─────────────────────────────────────────────────┘
```

**Structure**:

- Dark rounded pill: "All chips" (selected/active)
- Light rounded pill: "M4 Pro" (unselected)
- Light rounded pill: "M4 Max" (unselected)

## Accessibility Considerations (Accessibility Expert)

### MUI Accessibility Baseline

- Tabs component includes built-in ARIA attributes (`role="tablist"`, `role="tab"`, `aria-selected`)
- Keyboard navigation (Arrow keys for tab navigation, Tab key for moving to content)
- Focus management automatically handled by MUI

### Additional Considerations

1. **Visual Indicators**:
   - Selected state clearly distinguished by background color (not just color alone)
   - Sufficient contrast ratio between background and text (WCAG AA: 4.5:1)
   - Focus indicators visible and meet 3:1 contrast requirement

2. **Keyboard Navigation**:
   - Left/Right arrow keys navigate between tabs
   - Tab key moves focus to tab panel content
   - Home/End keys jump to first/last tab

3. **Screen Reader Support**:
   - Proper ARIA attributes provided by MUI Tabs
   - Tab labels are descriptive and concise
   - Selected state announced to screen readers

### WCAG Compliance

- **2.1.1 Keyboard** (Level A): All tab functionality available via keyboard ✓
- **2.4.7 Focus Visible** (Level AA): Focus indicators clearly visible ✓
- **1.4.3 Contrast** (Level AA): Text contrast meets 4.5:1 minimum ✓
- **4.1.2 Name, Role, Value** (Level A): Proper ARIA attributes ✓

## Implementation Notes

- Use MUI Tabs and Tab components
- Style tabs to look like chips using `sx` prop
- Ensure proper state management with controlled component
- No TabIndicator needed (chip style doesn't require underline)

## Implementation Summary

### Component Built

- **File**: `registry/components/tabs-chip-01/tabs-chip-01.tsx`
- **Preview**: `app/tabs-chip-01/page.tsx`

### Key Implementation Details

1. **Tabs Container Styling**:
   - Removed default tab indicator with `display: none`
   - Added 0.5 spacing between tabs via flexContainer gap
   - Set minHeight to auto for compact appearance

2. **Individual Tab Styling**:
   - Fully rounded corners (`borderRadius: 99`) for pill/chip appearance
   - Horizontal padding: 3, Vertical padding: 1
   - Font weight: 500 for medium emphasis
   - Text transform: none (preserved original casing)

3. **Color Implementation**:
   - **Unselected state**: `grey[100]` background with `text.secondary` color
   - **Selected state**: `primary.main` background with `primary.contrastText` text
   - **Hover states**: Darker shades for both selected and unselected states
   - Dark mode support via `theme.applyStyles('dark', {...})`

4. **State Management**:
   - Controlled component with React.useState
   - onChange handler updates selected tab value
   - Proper typing with React.SyntheticEvent

5. **Accessibility**:
   - MUI Tabs provides built-in ARIA attributes
   - Keyboard navigation supported (arrow keys, home/end)
   - Focus indicators visible
   - Screen reader support via proper semantic HTML

### Testing Results

- ✅ Lint check passed (no ESLint warnings or errors)
- ✅ TypeScript check passed (no type errors)
- ✅ Visual appearance matches mockup
- ✅ Screenshot captured: `tabs-chip-01-1.png`

### Notes for Review

- Component uses repetitive styling across tabs - could be refactored to use theme overrides if this pattern is used frequently
- Dark mode styling matches light mode structure with appropriate color palette adjustments
- Hover states added for better UX (not shown in mockup but follows Material Design principles)
