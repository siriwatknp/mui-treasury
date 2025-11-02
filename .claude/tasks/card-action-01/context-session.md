# card-action-01 - Context Session

## Mockup Analysis (UX/UI Designer)

### Visual Design Breakdown

#### Key Components

- **Card Container**: Material UI Card component with rounded corners
- **Title Text**: Small typography (body2 or caption style) - "macOS and Apple Intelligence"
- **Headline Text**: Large, bold typography (h3 variant) - "Easy to use. Easy to love."
- **Background Image**: Full-bleed image covering entire card
- **Action Button**: Floating Action Button with plus icon, bottom-right corner

#### Theme Mapping

- **Colors**:
  - Text uses primary text color for both title and headline
  - FAB uses solid dark background (contained variant)
  - Card background: light grey/neutral tone
- **Typography**:
  - Title: body2 or caption variant
  - Headline: h3 variant with bold weight
- **Spacing**:
  - Card padding: 2-3 units (16-24px)
  - Gap between title and headline: 1-1.5 units (8-12px)
  - FAB margin from edges: 2 units (16px)
- **Border Radius**: Default 8px (theme standard)

#### Layout Structure

- **Container**: Card with relative positioning for FAB overlay
- **Content Flow**: Vertical stack (flexbox column)
  - Title at top
  - Headline below title with small gap
- **Background**: Image positioned to fill card with object-fit cover
- **FAB**: Absolutely positioned at bottom-right corner

#### ASCII Mockup

```
┌─────────────────────────────────────┐
│ macOS and Apple Intelligence        │
│                                     │
│ Easy to use. Easy to love.         │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                  [+]│
└─────────────────────────────────────┘
```

## Accessibility Considerations (Accessibility Expert)

### Critical Attention Points

1. **Interactive Card Pattern**:
   - The entire card should be clickable/tappable
   - Use proper button/link semantics for the action
   - Ensure keyboard navigation works (Enter/Space to activate)
   - Provide descriptive aria-label on the action button

2. **Text Hierarchy**:
   - Title should have proper heading level or semantic role
   - Ensure text has sufficient contrast against background image
   - Consider text overlay/scrim if image affects readability

3. **FAB Accessibility**:
   - Must have accessible name (aria-label="Add" or similar)
   - Sufficient size for touch targets (minimum 44x44px)
   - Clear focus indicator
   - Proper color contrast for icon

4. **Image Accessibility**:
   - Background image should be decorative (role="presentation" or empty alt)
   - Don't rely solely on image to convey information
   - Ensure text remains readable over image

5. **Focus Management**:
   - Single tab stop for entire card (if whole card is clickable)
   - Or separate tab stops for card and FAB (if they have different actions)
   - Clear focus outline that works on image background

## Implementation Notes

- Use Card component from MUI
- Typography with h3 variant for headline
- Fab component for action button
- Box component for image container with img element
- Position FAB with absolute positioning
- Ensure responsive sizing for different viewports

## Implementation Summary (Iteration 1)

### Component Structure

- **Card** component with relative positioning and flexbox column layout
  - Padding: 3 units (24px)
  - Min-height: 400px for demonstration
  - Overflow: hidden to contain background image
- **Background Image** (Box component with img)
  - Positioned absolutely to fill entire card
  - Object-fit: cover for proper image scaling
  - Z-index: 0 to stay behind content
  - Empty alt attribute (decorative image)
  - Placeholder: https://placehold.co/800x1600 (portrait aspect ratio)
- **Content Box** with relative positioning and z-index: 1
  - Typography variant="body2" for title with gutterBottom
  - Typography variant="h3" for headline
- **Fab** component
  - Positioned absolutely at bottom-right (16px from edges)
  - aria-label="Add" for accessibility
  - Contains AddIcon from @mui/icons-material
  - Z-index: 1 to stay above background

### Files Created

- `/registry/components/card-action-01/card-action-01.tsx` - Main component
- `/app/card-action-01/page.tsx` - Preview page with maxWidth 405px constraint

### Technical Details

- All spacing uses theme units (no hardcoded pixels in main styles)
- Proper z-index layering for background/content/FAB
- Accessible FAB with aria-label
- TypeScript type safety maintained
- Passes ESLint and TypeScript checks

### Screenshot

- Saved to: `.claude/tasks/card-action-01/card-action-01-1.png`
- Shows component rendering with placeholder image and proper layout
