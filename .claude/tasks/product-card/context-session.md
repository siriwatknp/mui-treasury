# Product Card Registry Component

## Registry Name: `product-card`

## Visual Design Analysis

### Key Components

- **Card Container**: Rounded card with gradient background and white content area
- **Heart Icon**: Favorite/wishlist toggle button in top-right corner
- **Product Image**: Black Nike running shoe centered in gradient area
- **Product Info Section**: White background with product details
- **Title**: Large heading "Nike Running Shoe"
- **Attribute Chips**: Size (EU38) and color (BLACK/WHITE) as outlined chips
- **Description**: Multi-line text describing product features
- **Price Section**: Price display and CTA button

### Theme Mapping

- **Colors**:
  - Primary gradient background (purple gradient)
  - White content area with clean separation
  - Heart icon with subtle background
  - Chips with outlined variant in secondary color
  - CTA button uses primary contained variant
- **Typography**:
  - Product title: h5 variant
  - Attribute chips: small size
  - Description: body2 variant
  - Price: h4 variant for emphasis
- **Spacing**: Consistent 2-unit spacing between sections
- **Border Radius**: Default 2 (16px) for card, button uses default radius

### Layout Structure

- **Container**: Card component with vertical flex layout
- **Header Row**: Gradient background section with heart icon positioned absolute top-right
  - Product image centered
- **Content Section**: White background with padding
  - Product title
  - Attribute chips in horizontal row
  - Product description
  - Price and button section in horizontal row with space-between

### ASCII Mockup Representation

```
┌─────────────────────────────────────┐
│  ╭─────────────────────────────╮ ♡   │
│  │                             │     │
│  │         [SHOE IMAGE]        │     │
│  │                             │     │
│  ╰─────────────────────────────╯     │
├─────────────────────────────────────┤
│ Nike Running Shoe                   │
│                                     │
│ [EU38] [BLACK/WHITE]               │
│                                     │
│ Crossing hardwood comfort with      │
│ off-court flair. '80s-inspired     │
│ construction, bold details and      │
│ nothin'-but-net style.             │
│                                     │
│ PRICE                [Add to cart]  │
│ $69.99                              │
└─────────────────────────────────────┘
```

## Accessibility Considerations

### Critical Accessibility Points

1. **Heart Icon Button**:
   - Must have proper aria-label (e.g., "Add to favorites" or "Remove from favorites")
   - Should indicate current state for screen readers
   - Adequate touch target size (44px minimum)

2. **Product Image**:
   - Meaningful alt text describing the product
   - Consider using role="img" for decorative placeholder if needed

3. **Attribute Chips**:
   - Should be marked as informational, not interactive unless they serve as filters
   - Use appropriate ARIA labels if they represent selectable options

4. **Add to Cart Button**:
   - Clear, descriptive label
   - Should indicate loading state when pressed
   - Adequate color contrast for text on purple background

5. **Price Information**:
   - Should be properly marked up for screen readers
   - Consider using semantic markup for currency

6. **Card Interaction**:
   - If entire card is clickable, ensure proper focus management
   - Use appropriate ARIA roles and properties

### MUI Accessibility Features

- Card component provides proper semantic structure
- IconButton includes built-in keyboard navigation and focus management
- Button component has proper ARIA attributes and keyboard support
- Typography components maintain proper heading hierarchy

### WCAG Compliance Notes

- Ensure 4.5:1 contrast ratio for text on backgrounds
- Heart icon needs sufficient contrast against gradient
- Focus indicators should be clearly visible
- Interactive elements should be keyboard accessible

## Implementation Summary

### Component Built: `product-card`

- **Location**: `registry/components/product-card/product-card.tsx`
- **Preview Page**: `app/product-card/page.tsx`
- **Screenshots**: `product-card-1.png`

### Key Features Implemented

- **Card Structure**: Card with purple gradient background and white content section
- **Interactive Heart Button**: Toggle favorite state with proper ARIA labels
- **Product Image**: Placeholder image with proper aspect ratio
- **Attribute Chips**: Outlined chips for size and color attributes
- **Responsive Layout**: Stack-based layout with proper spacing
- **CTA Button**: Gradient purple "Add to cart" button with hover states
- **Dark Mode Support**: Applied dark mode styles using theme.applyStyles()
- **TypeScript**: Full TypeScript support with proper interface definitions

### Accessibility Features

- Heart button has dynamic aria-label based on state
- Proper heading hierarchy with h6 for product title
- Screen reader friendly price structure
- Keyboard navigation support
- Color contrast compliance

### Code Quality

- ✅ No ESLint errors
- ✅ No TypeScript errors
- ✅ Follows MUI best practices
- ✅ Uses theme tokens and responsive design
- ✅ Proper component interface with optional props
