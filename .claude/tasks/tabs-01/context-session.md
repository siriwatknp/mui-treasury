# Context Session: tabs-01

## Component Type

Tabs component for navigation between content sections

## Registry Name

tabs-01

---

## Visual Design Analysis (UX/UI Designer)

### Overview

This is a sophisticated two-button tabs UI component with AI-related options. The design features a clean, modern aesthetic with two distinct action choices presented as tab buttons.

### Key Components

- **Container**: Rounded card with subtle background
- **Tab buttons**: Two horizontally aligned buttons with icons and text
  - Left tab: "Install with AI" with a sparkle/AI icon
  - Right tab: "Web signup" as plain text
- **Support text**: Right-aligned "Need help? Talk to a human" link with external link icon

### Theme Mapping

- **Palette colors**:
  - Primary color for active/selected tab (black/dark background)
  - Neutral/secondary for inactive tab (transparent or light background)
  - Text uses high contrast (white on dark, dark on light)
- **Typography**:
  - Tab labels: body2 or button size
  - Support link: caption or body2 size with underline
- **Spacing**:
  - Container padding: 2-3 units
  - Gap between tabs: 1 unit
  - Margin between tabs and support text: 2 units
- **Border radius**:
  - Container: borderRadius 2 (16px)
  - Tab buttons: borderRadius 1 or pill-shaped

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────┐  ┌──────────────┐                    │
│  │ ✨ Install with AI │  │ Web signup   │   Need help? Talk │
│  └─────────────────┘  └──────────────┘    to a human ↗    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### ASCII Mockup Representation

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌────────────────────┐  ┌─────────────┐                   │
│  │ ✨ Install with AI │  │ Web signup  │    Need help? Talk │
│  └────────────────────┘  └─────────────┘    to a human ↗   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Component Details

- **Tab Group**: MUI Tabs component with custom styling
- **Tabs**:
  - First tab (active): Contained variant with icon, dark background
  - Second tab (inactive): Text or outlined variant
- **Support Link**: Typography with Link component, includes external icon

---

## Accessibility Requirements (Accessibility Expert)

### Critical Requirements

1. **Semantic Structure**:
   - Use MUI Tabs component with proper ARIA attributes
   - Ensure tablist, tab, and tabpanel roles are properly implemented
   - Each tab must have corresponding tabpanel even if not visible

2. **Keyboard Navigation**:
   - Arrow keys to navigate between tabs
   - Tab key to move focus in/out of tab list
   - Enter/Space to activate selected tab
   - Focus indicators must be visible (WCAG 2.1 SC 2.4.7)

3. **Screen Reader Support**:
   - Descriptive labels for all interactive elements
   - aria-label for icon-only elements if needed
   - Announce active tab state changes
   - Link must indicate it opens in new window/tab

4. **Visual Accessibility**:
   - Contrast ratio 4.5:1 for normal text (WCAG AA)
   - 3:1 for large text and UI components
   - Active tab must be visually distinct from inactive
   - Focus indicators with sufficient contrast

### Implementation Notes

- MUI Tabs handles most ARIA attributes automatically
- Add aria-label to external link icon
- Ensure support link has appropriate rel attributes for security
- Consider adding aria-describedby for help text context

---

## Implementation Summary

### Work completed:

- Created context session file with visual analysis
- Identified MUI Tabs as primary component
- Defined accessibility requirements
- Prepared layout structure for implementation

### Next steps:

- Build tabs-01.tsx component ✓
- Create preview page ✓
- Test and validate implementation ✓

## Implementation Completed

### Work Summary:

- Built tabs-01 component with MUI Tabs
- Implemented two-button tab interface with icon support
- Added "Install with AI" tab with AutoAwesome icon
- Added "Web signup" tab without icon
- Included support link with external icon
- Applied proper dark mode support
- Ensured accessibility with ARIA attributes
- All linting and type checks pass
