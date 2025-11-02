# Radio Card Component - radio-card-01

## Visual Design Analysis (UX/UI Designer)

### Mockup Overview

Radio card selection component showing two iPhone models with pricing information. Features clean card-based selection with visual feedback through border styling.

### Key Components

1. **RadioGroup Container**
   - Vertical stack of radio cards
   - Gap between cards: 1.5-2

2. **Radio Cards** (FormControlLabel with Radio)
   - Custom card-like appearance with border
   - Interactive hover/focus states
   - Selected state indicated by primary color border
   - MUI Components: Radio, FormControlLabel, Box/Card wrapper

3. **Card Content Layout**
   - Left section: Product information (column layout)
   - Right section: Price information (column layout, right-aligned)
   - Flexbox row with space-between alignment

4. **Typography Elements**
   - Product name: variant="h6" or custom with larger font size
   - Display info: variant="body2", color="text.secondary"
   - Price main: variant="body1", weight 600
   - Price details: variant="body2", color="text.secondary"

5. **Icons/Radio Indicator**
   - Standard MUI Radio component
   - Hidden visually but functional for accessibility
   - Selection indicated by card border color instead

### Theme Mapping

**Colors:**

- Primary palette: Selected card border (blue/primary.main)
- Grey palette: Unselected card border (grey.300 light mode, grey.700 dark mode)
- Text colors: text.primary for headings, text.secondary for supporting info
- Background: background.paper for cards

**Spacing:**

- Card padding: 2-3 (16-24px)
- Gap between cards: 1.5-2 (12-16px)
- Internal spacing between product name and subtitle: 0.5 (4px)
- Internal spacing between price elements: 0.5 (4px)

**Border:**

- Radius: 2 (16px) for modern, soft appearance
- Width: 2px for selected state visibility
- Style: solid

**Typography Sizes:**

- Product name: ~20-24px (h6 or custom)
- Display info: ~14px (body2)
- Price main: ~16px (body1)
- Price details: ~14px (body2)

### Layout Structure

```
RadioGroup (Stack direction="column" gap={2})
├── FormControlLabel (full width)
│   ├── Radio (visually hidden, positioned absolute)
│   └── Box/Card (styled as card, flex row)
│       ├── Left Column (product info)
│       │   ├── Product Name (Typography h6)
│       │   └── Display Info (Typography body2)
│       └── Right Column (price info, text-align right)
│           ├── From Price (Typography body1)
│           ├── Monthly Price (Typography body2)
│           └── Duration (Typography body2)
│
└── FormControlLabel (full width)
    └── [Same structure as above]
```

### ASCII Mockup Representation

```
┌───────────────────────────────────────────────────────────┐
│ ○  iPhone 17 Pro                    From $1099           │
│    6.3-inch display²                or $45.79/mo.        │
│                                     for 24 mo.*          │
└───────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────┐ ← Blue border (selected)
│ ●  iPhone 17 Pro Max                From $1199           │
│    6.9-inch display²                or $49.95/mo.        │
│                                     for 24 mo.*          │
└───────────────────────────────────────────────────────────┘
```

## Accessibility Attention Points (Accessibility Expert)

### WCAG Compliance Areas

1. **Semantic Radio Structure** ✓
   - Use proper RadioGroup with name attribute for form association
   - Each Radio must have unique value prop
   - FormControlLabel provides proper labeling automatically

2. **Keyboard Navigation** ✓
   - Tab key moves focus to radio group
   - Arrow keys navigate between options (MUI default)
   - Space key selects focused option (MUI default)
   - Focus indicator must be visible (ensure outline/ring on focus)

3. **Screen Reader Support**
   - Radio checked state announced automatically by MUI
   - Ensure all text content is within proper semantic elements
   - Consider aria-describedby for price information if needed
   - Product name should be the primary label

4. **Visual Accessibility**
   - Selected state: Ensure 3:1 contrast ratio for border color (WCAG AA)
   - Text contrast: 4.5:1 for body text, 3:1 for large text (WCAG AA)
   - Focus indicator: Visible and meets 3:1 contrast ratio
   - Don't rely solely on color - border width/style can also indicate selection

5. **Interactive States**
   - Hover: Subtle background or border color change
   - Focus: Clear focus ring/outline
   - Active/Selected: Primary color border
   - Disabled: Reduced opacity, not interactive

### MUI-Specific Considerations

- Radio component has built-in ARIA attributes
- FormControlLabel automatically associates label with radio
- RadioGroup manages keyboard navigation and ARIA roles
- Focus management handled by MUI automatically

### Implementation Recommendations

1. **Required Attributes:**

   ```tsx
   <RadioGroup name="iphone-model" value={value} onChange={handleChange}>
     <FormControlLabel value="pro" control={<Radio />} label={...} />
   </RadioGroup>
   ```

2. **Enhanced Accessibility:**
   - Use descriptive values ("iphone-17-pro" not "1")
   - Ensure focus visible on card wrapper
   - Maintain consistent interaction patterns
   - Test with keyboard only and screen reader

3. **Visual Feedback Priorities:**
   - High: Border color change for selection (primary indicator)
   - Medium: Background subtle change on hover
   - Low: Icon/radio indicator (can be visually hidden)

## Implementation Notes

### Key Technical Decisions

1. **Styling Approach**
   - Apply styles to RadioGroup via `slotProps` or `sx` on wrapper
   - Use FormControlLabel's `sx` for card styling
   - Avoid duplicate styles on individual Radio components

2. **State Management**
   - Controlled component with value/onChange props
   - Local state for demo, can be lifted up for real usage

3. **Responsive Behavior**
   - Stack vertically on all screen sizes
   - Price information remains right-aligned on mobile
   - Minimum touch target size: 44x44px (WCAG 2.5.5)

4. **Dark Mode**
   - Use theme.applyStyles('dark', {...}) for dark-specific styles
   - Adjust border colors: grey.300 → grey.700
   - Ensure contrast maintained in both modes

---

## Implementation Summary

### Component Structure

- Created `radio-card-01.tsx` component with RadioGroup container
- Applied all styles via RadioGroup `sx` prop using array syntax (object + theme callback)
- Used CSS selectors to target FormControlLabel and Radio elements, avoiding duplicate styles

### Key Implementation Details

1. **Radio Visibility Handling**
   - Radio inputs visually hidden using sr-only pattern (position absolute, clip, overflow)
   - Maintains accessibility while hiding visual radio button
   - Selection state indicated via card border color

2. **Card Styling via RadioGroup**
   - Border: 2px solid grey.300 (light), grey.700 (dark)
   - Border radius: 2 (16px)
   - Padding: 2 (16px)
   - Gap between cards: 2 (16px)
   - Selected state: borderColor primary.main using `:has(.Mui-checked)` selector

3. **Interaction States**
   - Hover: border color changes to grey.400/grey.600
   - Focus: outline with primary color using `:has(.Mui-focusVisible)`
   - Cursor: pointer on card
   - Transition: border-color 0.2s

4. **Layout Implementation**
   - FormControlLabel label set to full width
   - Content Box: flexbox row with space-between
   - Left: Product info Stack with spacing 0.5
   - Right: Price info Stack with spacing 0.5, right-aligned
   - Gap: 2 between left and right sections

5. **Typography Usage**
   - Product name: variant="h6"
   - Display/price details: variant="body2" with color="text.secondary"
   - Main price: variant="body1" with fontWeight 600

### Files Created

- `/registry/components/radio-card-01/radio-card-01.tsx` - Component implementation
- `/app/radio-card-01/page.tsx` - Preview page
- `.claude/tasks/radio-card-01/radio-card-01-01.png` - Initial screenshot
- `.claude/tasks/radio-card-01/radio-card-01-02.png` - Final screenshot after fixes

### Notable Decisions

- Used array syntax in `sx` prop to properly merge base styles with theme callback
- Applied sr-only pattern instead of opacity:0 for better accessibility
- Ensured FormControlLabel label takes full width for proper layout
- Added cursor pointer to improve UX clarity
