# Navigation Menu 01 - Context Session

## Visual Design Analysis

### Overview

Building a horizontal navigation menu inspired by Stripe's design with dropdown menus. Simplified version with 4 links in popup for showcase purposes.

### Key Components Mapping

**Navigation Bar:**

- Base UI NavigationMenu.Root (horizontal orientation)
- MUI Stack/Box for layout
- Base UI NavigationMenu.List for nav items
- Base UI NavigationMenu.Item for each nav item

**Dropdown Trigger:**

- Base UI NavigationMenu.Trigger (button)
- MUI Typography for label text
- Base UI NavigationMenu.Icon with chevron (ExpandMoreIcon from MUI)
- Variant: text-style button

**Popup Menu:**

- Base UI NavigationMenu.Portal for DOM portal
- Base UI NavigationMenu.Positioner for positioning
- Base UI NavigationMenu.Popup as container
- Base UI NavigationMenu.Viewport for content clipping
- Base UI NavigationMenu.Content for actual links

**Menu Links:**

- Base UI NavigationMenu.Link wrapper
- MUI Stack for icon + text layout
- Icon from @mui/icons-material
- MUI Typography for title and description

### Theme Mapping

**Palette:**

- Primary text: default text color (near black)
- Secondary text: text.secondary for descriptions
- Background: background.paper for popup
- Hover: action.hover for interactive states
- Border: divider for subtle separation

**Typography:**

- Nav items: body1 (medium weight)
- Link titles: subtitle2 (semi-bold)
- Descriptions: body2 (secondary color)

**Spacing:**

- Nav items horizontal: 2-3 units between items
- Popup padding: 3-4 units
- Link grid gap: 2 units
- Icon to text: 1.5 units

**Border Radius:**

- Popup: 2 (16px)
- Hover states: 1 (8px)

**Shadows:**

- Popup: elevation 8-12 for floating effect

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│ [Logo]  [Products ▼] [Solutions ▼] [Developers ▼]     │
│         [Resources ▼] [Pricing]    [Log in] [Sign up]  │
│                                    [Contact sales →]    │
└─────────────────────────────────────────────────────────┘
                    ↓ (hover Products)
            ┌───────────────────────┐
            │ ┌───────┐  ┌───────┐ │
            │ │ 📄 Support │ 📚 Blog │ │
            │ │ center     │        │ │
            │ └───────┘  └───────┘ │
            │ ┌───────┐  ┌───────┐ │
            │ │ 🏷️ Support │ 📅 Sessions│
            │ │ plans      │        │ │
            │ └───────┘  └───────┘ │
            └───────────────────────┘
```

**Popup Layout:**

- CSS Grid: 2 columns for links
- Each link cell contains icon + text stack
- Vertical stack for icon (top) and text (bottom) OR horizontal for icon (left) and text (right)

### Accessibility Considerations

**Semantic Structure:**

- Use nav element (Base UI provides this)
- Proper button roles for triggers (Base UI provides)
- Link roles for navigation items (Base UI provides)

**Keyboard Navigation:**

- Tab through nav items
- Arrow keys to move between menu items (Base UI handles)
- Enter/Space to activate
- Escape to close dropdown (Base UI handles)

**Screen Reader:**

- Meaningful labels for all buttons and links
- ARIA attributes handled by Base UI
- Clear focus indicators on all interactive elements

**Visual Accessibility:**

- High contrast text colors (WCAG AA minimum 4.5:1)
- Focus indicators visible and high contrast
- Sufficient spacing for touch targets (minimum 44x44px)
- Icon + text provides redundant information

**Critical Points:**

1. Ensure chevron icon has proper aria-hidden since it's decorative
2. Each NavigationMenu.Link should have descriptive text
3. Focus trap within open dropdown
4. Clear visual indication of which menu is open (data-popup-open attribute)
5. Hover and focus states must be equivalent for keyboard users

## Implementation Notes

### Base UI Integration with MUI

- Base UI provides behavior/structure, MUI provides styling
- Use Base UI's className prop with MUI's sx-like styling via CSS-in-JS
- Leverage Base UI's data attributes for state-based styling
- MUI icons and typography within Base UI components

### Simplified Showcase Version

- 2-3 navigation items with dropdowns
- 4 links per dropdown (2x2 grid)
- Focus on demonstrating the pattern, not full navigation

### State Management

- Base UI handles open/close state internally
- Use data-popup-open for styling open state
- Hover delay: 50ms default (Base UI)
- Close delay: 50ms default (Base UI)
