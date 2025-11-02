# card-action-02 Context Session

## Visual Design Analysis

### Mockup Overview

Apple Card installment feature card with clean layout, monochromatic icon, large typography, and floating action button.

### Key Components

1. **Card Container** (MUI `Card`)
   - variant: `outlined` (default)
   - Light gray background (grey.100 in light mode, grey.900 in dark mode)
   - Rounded corners (borderRadius: 3.5 for softer appearance)
   - Padding: 3 (24px)

2. **Icon** (Top left)
   - Apple Card icon representation using Box with border
   - Dark border in light mode, light in dark mode
   - Size: approximately 88x56px with rounded corners
   - Position: Top of card

3. **Typography**
   - Main heading: Large, bold text "Pay over time, interest-free."
     - fontSize: { xs: "28px", md: "32px", lg: "40px" }
     - fontWeight: 600
     - textWrap: "pretty"
   - Body text: Regular text describing the feature
     - fontSize: { xs: "17px", md: "19px" }
     - color: text.secondary
     - textWrap: "pretty"

4. **Action Button** (Bottom right)
   - Circular dark button (contained variant)
   - Plus icon
   - Size: 56x56px
   - Position: absolute bottom right with 20px offset
   - bgcolor: grey.800 in light, lighter in dark

### Theme Mapping

- **Palette colors**:
  - Background: grey.100/grey.900
  - Button: grey.800 with white icon
  - Text: default text color for heading, text.secondary for body

- **Text sizes**:
  - Heading: Large display text (28-40px responsive)
  - Body: Medium readable size (17-19px)

- **Spacing**:
  - Card padding: 3
  - Gap between icon and heading: 3
  - Gap between heading and body: 1.5
  - Button offset from edges: 20px

- **Border radius**:
  - Card: 3.5 (28px)
  - Icon: 1.5 (12px)
  - Button: 50% (circular)

### Layout

The card uses a flexbox column layout:

```
┌─────────────────────────────────────────┐
│  ┌──────┐                               │
│  │ Card │                               │
│  └──────┘                               │
│                                         │
│  Pay over time,                         │
│  interest-free.                         │
│                                         │
│  When you choose to check out           │
│  at Apple with Apple Card               │
│  Monthly Installments.                  │
│                                         │
│                                   ┌───┐ │
│                                   │ + │ │
│                                   └───┘ │
└─────────────────────────────────────────┘
```

### ASCII Mockup Representation

```
┌───────────────────────────────────────────────────┐
│ ┌─────────┐                                       │
│ │  Apple  │                                       │
│ │   Card  │                                       │
│ └─────────┘                                       │
│                                                   │
│ Pay over time,                                    │
│ interest-free.                                    │
│                                                   │
│ When you choose to check out at Apple             │
│ with Apple Card Monthly Installments.             │
│                                                   │
│                                                   │
│                                                   │
│                                             ┌───┐ │
│                                             │ + │ │
│                                             └───┘ │
└───────────────────────────────────────────────────┘
```

### Accessibility Considerations

1. **Semantic Structure**:
   - Use proper heading hierarchy (h3 for card title)
   - Link wrapper for entire card with descriptive text
   - Button with proper aria-label

2. **Keyboard Navigation**:
   - Card is fully keyboard accessible via Link wrapper
   - Focus indicator on card (:focus-visible outline)
   - Button is within link's click area

3. **Screen Reader Support**:
   - Icon has decorative role (empty alt)
   - Meaningful heading text
   - Action button has aria-label="Add"

4. **Visual Accessibility**:
   - Sufficient contrast for text on background
   - Large touch target for button (56x56px exceeds 44x44 minimum)
   - Clear hover state with scale transform

## Implementation Notes

### Differences from card-action-01:

- Icon positioned at top (not as background image)
- Smaller, more compact card dimensions
- Single column text layout (no background image layering)
- Simpler z-index structure (no background image overlay)

### Component Structure:

```tsx
<Card> (relative positioning)
  <Box> (Icon representation)
  <Box> (Text container)
    <Typography> (Heading)
    <Typography> (Body text)
  </Box>
  <Link> (Full card clickable area)
    <Button> (Circular add button)
  </Link>
</Card>
```

## Implementation Summary

### Completed Tasks:

- ✅ Created visual design analysis with ASCII mockup representation
- ✅ Built card-action-02 component at `registry/components/card-action-02/card-action-02.tsx`
- ✅ Created preview page at `app/card-action-02/page.tsx`
- ✅ Implemented responsive card with proper sizing (340-460px width)
- ✅ Added Apple logo icon using inline SVG in bordered box (88x56px)
- ✅ Implemented large responsive heading (28-40px)
- ✅ Added body text with proper secondary color
- ✅ Created circular action button (56x56px) with contained variant
- ✅ Implemented hover effect with scale transform (1.023)
- ✅ Added dark mode support with proper theme.applyStyles
- ✅ Ensured keyboard accessibility with focus-visible outline
- ✅ Passed all linting checks
- ✅ Passed all TypeScript type checks
- ✅ Captured screenshot for review

### Key Implementation Details:

- **Icon Design**: Bordered box (2px solid) with inline Apple logo SVG, dark border in light mode, light in dark
- **Typography Scale**: Responsive from 28px (mobile) to 40px (desktop) for heading, 17-19px for body
- **Spacing**: Card padding of 3 (24px), gap of 3 between icon and text, gap of 1.5 between heading and body
- **Button Styling**: Used Button component with contained variant instead of IconButton for better background control
- **Accessibility**: Full keyboard navigation, focus-visible outline, aria-label on button, Link wrapper for entire card
- **Dark Mode**: Button uses grey.300 background with grey.900 text in dark mode for proper contrast
