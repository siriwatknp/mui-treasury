# Menubar Component Context Session

## Component Name

`menubar-01`

## Mockup Analysis

### Visual Design Analysis (UX/UI Designer)

#### Key Components

- **Menubar**: Horizontal navigation with 4 menu triggers (File, Edit, View, Help)
- **Menu Trigger Buttons**: Text-based buttons with subtle hover states
- **Dropdown Menus**: Contain menu items with different types:
  - Regular items (New, Open, Save, Print)
  - Nested submenu (Export with arrow indicator)
  - Submenu items (PDF, PNG, SVG)
- **Active/Selected State**: PNG option shows dark background indicating selection/hover

#### Theme Mapping

- **Colors**:
  - Menu triggers: Default text color with subtle hover background
  - Menu items: Black text on white background (light mode)
  - Selected/hover: Dark background (#000 or very dark) with white text
  - Disabled: "Help" appears grayed out with reduced opacity
- **Typography**:
  - Menu triggers: ~16px regular weight
  - Menu items: ~15px regular weight
- **Spacing**:
  - Menu triggers: Horizontal padding ~16px, vertical padding ~8px
  - Menu items: Padding ~12px horizontal, ~8px vertical
  - Menu container: ~8px vertical padding top/bottom
- **Border Radius**: ~8px for menu container and menu trigger group
- **Shadows**: Subtle elevation shadow on dropdown menus

#### Layout Structure

**Menubar Container**: Horizontal flex layout

```
┌─────────────────────────────────────────────┐
│ [File] [Edit] [View] [Help]                │
└─────────────────────────────────────────────┘
```

**File Menu Dropdown**:

```
┌─────────────┐
│ New         │
│ Open        │
│ Save        │
│ Export    › │──┐
│             │  │
│ Print       │  │
└─────────────┘  │
                 │
        ┌────────┴───┐
        │ PDF        │
        │ PNG ■      │ ← Selected/hover state
        │ SVG        │
        └────────────┘
```

#### ASCII Mockup Representation

```
┌───────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────┐          │
│ │ File   Edit   View   Help           │          │
│ └─────────────────────────────────────┘          │
│                                                    │
│ ┌─────────────┐                                  │
│ │ New         │                                  │
│ │ Open        │                                  │
│ │ Save        │                                  │
│ │ Export    › │─────┐                           │
│ │             │     │                           │
│ │ Print       │     │                           │
│ └─────────────┘     │                           │
│                     │                           │
│              ┌──────┴──────┐                    │
│              │ PDF         │                    │
│              │ PNG    ████ │ (dark bg)         │
│              │ SVG         │                    │
│              └─────────────┘                    │
└───────────────────────────────────────────────────┘
```

### Accessibility Requirements (Accessibility Expert)

#### WCAG Compliance & Best Practices

**1. Keyboard Navigation (WCAG 2.1.1 - Level A)**

- **Arrow Keys**: Left/Right to navigate between menu triggers, Up/Down within menus
- **Enter/Space**: Activate menu triggers and menu items
- **Escape**: Close current menu and return focus to trigger
- **Tab**: Should move focus out of menubar to next focusable element
- **Right Arrow on submenu**: Should open nested menu and focus first item
- **Left Arrow in submenu**: Should close submenu and return to parent

**2. Focus Management (WCAG 2.4.7 - Level AA)**

- Visible focus indicators on all interactive elements (menu triggers, menu items)
- Focus should be trapped within open menu until closed
- Focus should return to trigger when menu closes
- Focus should move logically through nested menus

**3. ARIA Attributes (WCAG 4.1.2 - Level A)**
Base UI Menubar provides:

- `role="menubar"` on the root container
- `role="menu"` on dropdown menus
- `role="menuitem"` on menu items
- `aria-haspopup="menu"` on triggers with dropdowns
- `aria-expanded` state on menu triggers
- `aria-disabled` on disabled items (Help menu)

Additional requirements:

- Submenu items need `aria-haspopup="menu"` to indicate nested content
- Menu items should have accessible names from text content
- Icon indicators (›) should be decorative only

**4. Visual Accessibility (WCAG 1.4.3, 1.4.11 - Level AA)**

- Text contrast: Minimum 4.5:1 for normal text
- Selected/hover state: Ensure white text on dark background meets contrast
- Focus indicators: Minimum 3:1 contrast against background
- Don't rely solely on color - use background change for selection

**5. Semantic Structure**

- Use Base UI Menubar components (already semantic)
- Disabled state on "Help" should use `aria-disabled` and visual styling
- Submenu indicator (›) should be CSS-only or decorative icon

**6. Screen Reader Announcements**

- Menu state changes should be announced (expanded/collapsed)
- Current menu item should be announced during navigation
- Submenu presence should be announced ("has submenu")

#### Critical Attention Points

1. **Disabled Menu Trigger**: "Help" should have `aria-disabled="true"` and visual opacity reduction
2. **Submenu Indicator**: Right arrow (›) should be presentational, use `aria-hidden="true"`
3. **Selected State**: While PNG shows selection, ensure it's the hover state (not persistent selection)
4. **Focus Restoration**: When closing Export submenu, focus should return to Export item

## Implementation Notes

### Base UI Components to Use

- `Menubar.Root` - Container for the menubar
- `Menubar.Trigger` - Menu trigger buttons (File, Edit, View, Help)
- `Menubar.Portal` - Portal for dropdown positioning
- `Menubar.Positioner` - Positions the dropdown menu
- `Menubar.Menu` - Dropdown menu container
- `Menubar.MenuItem` - Individual menu items
- `Menubar.SubmenuTrigger` - Trigger for nested submenu (Export)

### Material UI Integration

- Use MUI theme for colors, spacing, typography
- Style with `sx` prop for consistency
- Use `Paper` styles for menu elevation
- Use theme transitions for hover/focus states

## Development Progress

### Iteration 1

- [x] Initial component structure with Base UI Menubar and Menu components
- [x] Material UI styling via `sx` prop with theme tokens
- [x] Implemented all menu states (hover, focus, disabled, expanded)
- [x] Added submenu support with Menu.SubmenuRoot wrapper
- [x] Screenshots captured (closed state and open submenu with hover)
- [x] Lint and type checks passed

#### Key Implementation Details

- Used Base UI `Menubar` as root with `Menu.Root` for each top-level menu
- Wrapped submenu trigger in `Menu.SubmenuRoot` for proper hierarchy
- Applied MUI theme tokens: `action.hover`, `action.selected`, `text.primary`, etc.
- Submenu items use inverted colors (dark bg/white text) on hover for visual distinction
- Disabled "Help" menu uses `disabled` prop with reduced opacity
- ChevronRightIcon for submenu indicator with `aria-hidden="true"`
- All positioning props corrected: `align` (not `alignment`), `alignOffset` (not `alignmentOffset`)
- Focus states use `outline` for menu triggers and `bgcolor` changes for menu items
- Hover states wrapped in `@media (hover: hover)` for touch device support

### Iteration 2 - Refactoring with MUI Components

- [x] Refactored to use proper MUI components as render elements
- [x] Replaced custom Box buttons with `Button` component for menu triggers
- [x] Replaced custom Box divs with `MenuItem` component for menu items
- [x] Replaced custom Box with `Paper` component for menu popups
- [x] Minimal `sx` prop customization - leveraging MUI defaults
- [x] Screenshots updated with refactored version
- [x] Lint and type checks passed

#### Refactoring Details

- **Menu Triggers**: Use `Button` component with minimal sx (only `borderRadius: 1.5` and `data-popup-open` state)
- **Menu Items**: Use `MenuItem` component with no sx for regular items
- **Submenu Items**: Use `MenuItem` with custom hover/focus colors (inverted black/white)
- **Submenu Trigger**: Use `MenuItem` with `justifyContent: space-between` for icon alignment
- **Menu Popups**: Use `Paper` component (automatically includes elevation, bgcolor, borderRadius)
- **Benefits**: Cleaner code, better maintainability, automatic MUI theme integration, reduced custom styling
