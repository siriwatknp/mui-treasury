# Radio Color 01 - Context Session

## Visual Design Analysis (UX/UI Designer)

### Overview

A color selection component using Material UI Radio, where each radio button is visually represented as a color swatch. The selected state is indicated by a prominent outline rather than the default radio dot.

### Key Components

**Primary purpose**: Allow users to select a single color option from a predefined palette

**MUI Components**:

- RadioGroup - for managing the radio selection state
- Radio - individual radio inputs (will be visually hidden)
- FormControlLabel - to wrap each color swatch
- Box - for custom color swatch rendering
- Typography - for the label "Color - Silver"

**Visual representation**:

- Each radio is styled as a circular color swatch
- Selected state: Blue outline ring around the swatch
- Unselected state: No outline, just the color circle
- Colors shown: Silver (selected), Orange, Navy blue

### Theme Mapping

**Palette colors**:

- Selection indicator: `primary.main` (blue outline for selected state)
- Color swatches: Custom colors (silver/gray, orange, navy)
- Text: `text.primary` for the label

**Typography**:

- Label: `h6` or `subtitle1` variant for "Color - Silver"

**Spacing**:

- Gap between color swatches: 1.5-2 spacing units
- Padding around label: 2 spacing units

**Border radius**:

- Color swatches: 50% (perfect circles)

**Sizing**:

- Swatch diameter: ~40-48px
- Selected outline: 2-3px with additional spacing

### Layout

**Structure**:

```
┌─────────────────────────┐
│ Color - Silver          │
│                         │
│ ●  ●  ●                 │
│ ^  ^  ^                 │
│ |  |  └─ Navy (unsel.)  │
│ |  └─ Orange (unsel.)   │
│ └─ Silver (selected)    │
└─────────────────────────┘
```

**Layout approach**:

- Vertical stack (column) for label and radio group
- Horizontal row (flexbox) for color swatches
- Spacing between swatches: 1.5-2

**Component composition**:

```
Box (container)
  ├─ Typography (label)
  └─ RadioGroup (horizontal)
      ├─ FormControlLabel (silver)
      │   └─ Radio + Custom color swatch
      ├─ FormControlLabel (orange)
      │   └─ Radio + Custom color swatch
      └─ FormControlLabel (navy)
          └─ Radio + Custom color swatch
```

### Ascii Mockup Representation

```
┌──────────────────────────────────┐
│ Color - Silver                   │
│                                  │
│  ┏━━━┓                           │
│  ┃ ◯ ┃   ●   ●                   │
│  ┗━━━┛                           │
│  Silver Orange Navy              │
│ (selected)                       │
└──────────────────────────────────┘

Legend:
┏━━━┓ = Selected state (blue outline)
  ◯   = Color swatch (silver/gray)
  ●   = Color swatches (orange, navy)
```

### Implementation Notes

**Custom Radio Styling**:

- Use `icon` and `checkedIcon` props on Radio to render custom color swatches
- Icon: Circle with the color fill
- CheckedIcon: Same circle with blue outline ring

**Color Definition**:

```tsx
const colors = [
  { value: "silver", color: "#c0c0c0", label: "Silver" },
  { value: "orange", color: "#ff8c42", label: "Orange" },
  { value: "navy", color: "#3d4d6a", label: "Navy" },
];
```

**Outline styling**:

- Use box-shadow or border for the selection ring
- Ring color: `primary.main`
- Ring offset: 2-3px from swatch

## Accessibility Analysis (Accessibility Expert)

### Critical Accessibility Points

#### 1. Semantic Structure & ARIA

- **RadioGroup with proper labeling**: Use `aria-label` or `aria-labelledby` to associate "Color - Silver" with the RadioGroup
- **Radio semantics**: Material UI Radio components maintain native radio semantics
- **Color names in labels**: Each color swatch must have a text label for screen readers (can be visually hidden)

**Implementation**:

```tsx
<RadioGroup aria-label="Color selection">
  <FormControlLabel
    value="silver"
    control={<Radio />}
    label="Silver" // Visible or sr-only
  />
</RadioGroup>
```

#### 2. Keyboard Navigation

- **Tab order**: Radio group should be a single tab stop
- **Arrow keys**: Navigate between color options using arrow keys (MUI handles this)
- **Focus indicator**: Ensure visible focus ring on keyboard focus (separate from selection state)

**Considerations**:

- Selection outline (blue ring) is different from focus outline
- Focus outline should be visible on keyboard navigation
- Use `:focus-visible` for keyboard-only focus indication

#### 3. Visual Accessibility

**Color Contrast**:

- **Selected indicator**: Blue outline must meet 3:1 contrast ratio against background
- **Color swatches**: Not required to meet contrast (they ARE the color information)
- **Label text**: "Color - Silver" must meet 4.5:1 contrast ratio

**Color Independence**:

- ❌ Cannot rely solely on color to indicate selection
- ✅ Blue outline ring provides shape/border differentiation
- ✅ Screen readers announce "checked" state

#### 4. Screen Reader Experience

**Announcements**:

- Group label: "Color selection"
- Each option: "Silver, radio button, checked" / "Orange, radio button, not checked"
- Dynamic updates: When selection changes, announce new state

**Hidden labels**:
If color names are visually hidden but present for SR:

```tsx
<FormControlLabel
  value="silver"
  control={<Radio />}
  label={<span className="sr-only">Silver</span>}
/>
```

#### 5. Touch Targets

**WCAG 2.5.5 Target Size (Level AAA)**:

- Minimum touch target: 44×44px
- Current swatch size: 40-48px (meets AA, borderline for AAA)
- Ensure adequate spacing between swatches (achieved with gap: 1.5-2)

### MUI-Specific Accessibility Features

**Built-in features**:

- ✅ Radio group keyboard navigation (arrow keys)
- ✅ Focus management
- ✅ ARIA attributes (role, aria-checked)

**Additional requirements**:

- ⚠️ Must add `aria-label` to RadioGroup if visual label isn't programmatically connected
- ⚠️ Ensure FormControlLabel has meaningful label text (even if visually styled)
- ⚠️ Custom icons (color swatches) don't interfere with Radio semantics

### Testing Checklist

- [ ] Keyboard: Tab to radio group, arrow keys to navigate options
- [ ] Screen reader: Announces "Color selection, radio group" and each option with state
- [ ] Focus visible: Clear focus indicator on keyboard navigation
- [ ] Color contrast: Blue outline meets 3:1 ratio
- [ ] Touch targets: Swatches are at least 44×44px or have adequate clickable area

### Priority Recommendations

**Critical (Must Have)**:

1. RadioGroup with `aria-label="Color selection"`
2. FormControlLabel with text labels (visible or sr-only)
3. Maintain native Radio semantics (use icon/checkedIcon props correctly)
4. Visible focus indicator separate from selection state

**Important (Should Have)**:

1. Touch target size at least 44×44px
2. Adequate spacing between swatches
3. Blue outline contrast ratio 3:1

**Nice to Have**:

1. Tooltip on hover showing color name
2. Visual feedback on hover (subtle scale or shadow)

## Summary for UI Engineer

**Component Requirements**:

- Use RadioGroup with horizontal layout
- Custom Radio icons: color circle for unchecked, color circle with blue outline for checked
- Predefined color palette: Silver, Orange, Navy
- Label "Color - Silver" above radio group
- Ensure accessibility: aria-label, text labels, focus states

**Key Implementation Details**:

- Selected state: 2-3px blue outline ring with offset
- Swatch size: 44×44px for accessibility
- Gap between swatches: 1.5-2
- Focus indicator: Separate from selection outline
- Typography: h6 or subtitle1 for label

## Implementation Summary

### Built Component Features

**Core Functionality**:

- ✅ RadioGroup with horizontal layout for color selection
- ✅ Three predefined colors: Silver (#c0c0c0), Orange (#ff8c42), Navy (#3d4d6a)
- ✅ Dynamic label showing "Color - {selected color name}"
- ✅ Custom Radio icons using `icon` and `checkedIcon` props
- ✅ Controlled component with React state management

**Visual Design**:

- ✅ Color swatches as perfect circles (44×44px diameter)
- ✅ Selected state: box-shadow creating blue outline ring (primary.main)
- ✅ Outline effect: 2px background.paper inner ring + 4px primary.main outer ring
- ✅ Gap between swatches: 1.5 spacing units
- ✅ Smooth transition on selection change
- ✅ Typography variant: h6 for label

**Accessibility Implementation**:

- ✅ `aria-label="Color selection"` on RadioGroup
- ✅ `aria-label={label}` on each FormControlLabel for screen reader support
- ✅ Visual labels hidden (label="") but aria-label present
- ✅ Focus indicator with outline on `:focus-within` separate from selection state
- ✅ Native Radio semantics maintained via MUI Radio component
- ✅ Keyboard navigation: Arrow keys to navigate, Space to select (MUI default)

**Technical Details**:

- File location: `registry/components/radio-color-01/radio-color-01.tsx`
- Preview page: `app/radio-color-01/page.tsx`
- Component is client-side ("use client" directive)
- Uses theme tokens: `primary.main`, `background.paper` for selection ring
- Proper TypeScript typing for all props and state

### Testing Results

**Browser Testing (Playwright)**:

- ✅ Component renders correctly on http://localhost:3000/radio-color-01
- ✅ Default state: Silver selected with blue outline visible
- ✅ Click interaction: Successfully changed selection to Orange
- ✅ Label updates dynamically: "Color - Silver" → "Color - Orange"
- ✅ No console errors in browser
- ✅ Screenshots captured in `.claude/tasks/radio-color-01/`

**Visual Verification**:

- Screenshot 01: Initial state with Silver selected
- Screenshot 02: Orange selected after interaction
- Both screenshots show proper outline ring on selected state
- Color swatches render as perfect circles with correct colors
