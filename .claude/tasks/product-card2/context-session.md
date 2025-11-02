# Product Card 2 Component Context Session

## Registry Name

`product-card2`

## Component Purpose

Create a mobile-first product card component that displays a sneaker product with navigation controls, product image, title, color variants, size selection, pricing, and add to cart functionality.

## Visual Design Analysis

### Key Components Analysis

**Primary Action**: Add product to cart with size and color selection
**Secondary Actions**: Navigation (back button), favoriting (heart icon), size selection

**MUI Component Mapping**:

- Back button: IconButton with ArrowBackIcon
- Heart/favorite: IconButton with FavoriteIcon (outlined/filled states)
- Product image: Box component="img" with proper aspectRatio
- Product title: Typography variant="h4"
- Color variants: IconButton with custom styling (circular color indicators)
- Size selection: ToggleButtonGroup with ToggleButton components
- Price: Typography variant="h5"
- Add to cart: Button variant="contained" with custom green styling

### Theme Mapping

**Colors Used**:

- Primary action (Add to cart): Custom lime green (#84cc16 / rgb(132, 204, 22))
- Selected state: Same lime green for size selection
- Navigation icons: Black/white monochromatic (primary.main)
- Product text: Default text colors
- Background: Light cream/off-white tint for product display area
- Card background: Pure white with subtle shadow

**Text Sizes**:

- Product title: Large heading (h4 variant)
- Size label: Body text (body1 variant)
- Price: Medium heading (h5 variant)

**Spacing & Layout**:

- Card padding: 2-3 units
- Component spacing: 1.5-2 units between major sections
- Size buttons: 1 unit gap
- Border radius: Default theme (8px)

### Layout Structure

**Container**: Single column mobile card layout with rounded corners and shadow
**Header row**: Flex row with space-between alignment

- Back arrow button (top-left)
- Heart/favorite button (top-right)
  **Product section**: Centered product image with light background
  **Title section**: Product name and model (two lines)
  **Color variants section**: Row of circular color indicators with selection state
  **Size selection section**:
- "Size" label
- Horizontal row of size toggle buttons (9, 9.5, 10, 10.5, 11)
  **Footer section**: Flex row with space-between
- Price display with label (left)
- Add to cart button (right)

### ASCII Mockup Representation

```
┌─────────────────────────────────────┐
│ ←                               ♡   │
│                                     │
│    ┌─────────────────────────┐      │
│    │                         │      │
│    │    [Running Shoe]       │      │
│    │                         │      │
│    └─────────────────────────┘      │
│                                     │
│ React Running                       │
│ Shoe 2                             │
│                                     │
│ ●● ○                               │
│                                     │
│ Size                               │
│ [9] [9.5] [10] [10.5] [11]        │
│                                     │
│ Price              [Add to cart]    │
│ $120                               │
└─────────────────────────────────────┘
```

## Accessibility Expert Analysis

### Critical Accessibility Points

**Navigation & Actions**:

- Back button needs aria-label="Go back"
- Favorite button needs aria-label="Add to favorites" with pressed state
- Add to cart button should announce selected size when clicked

**Product Information**:

- Product image needs descriptive alt text
- Price should be announced with currency
- Size selection should use ToggleButtonGroup with proper labeling

**Color Variants**:

- Color indicators need accessible labels (not just visual color)
- Should use aria-label like "Black colorway" for each variant
- Selection state must be clearly indicated

**Size Selection**:

- Current selection must be clearly announced
- Should use proper group labeling with ToggleButtonGroup
- Selected state needs sufficient contrast

**Form & Interaction**:

- Size must be selected before allowing add to cart
- Error states should be announced if no size selected
- Loading states for cart action should be announced

**WCAG Considerations**:

- All interactive elements meet 44px minimum touch target
- Color variants don't rely solely on color (need labels)
- Sufficient contrast ratios for all text and buttons
- Proper heading hierarchy (h4 for product title)

## Implementation Summary

### Component Built: `product-card2`

- **Location**: `registry/components/product-card2/product-card2.tsx`
- **Preview Page**: `app/product-card2/page.tsx`
- **Screenshots**: `product-card2-1.png`

### Key Features Implemented

- **Mobile-First Card Design**: Card component with rounded corners, shadow, and mobile-optimized layout
- **Interactive Navigation**: Back button and favorite toggle with proper ARIA labels and state management
- **Product Display**: Centered product image with light background area
- **Color Variants**: Interactive circular color indicators with selection states and hover effects
- **Size Selection**: ToggleButtonGroup with custom lime green styling for selected states
- **Form Validation**: Add to cart button disabled until size is selected
- **Loading States**: Button shows "Adding..." state during cart operations
- **Dark Mode Support**: Applied dark mode styles using theme.applyStyles()
- **TypeScript**: Full TypeScript support with proper interface definitions

### Accessibility Features

- Back button has aria-label="Go back"
- Favorite button has dynamic aria-label based on state
- Color variants have descriptive aria-labels (not just visual colors)
- Size selection uses proper ToggleButtonGroup with aria-label
- Product image has descriptive alt text
- Proper heading hierarchy with h4 for product title
- All interactive elements meet 44px minimum touch target
- Screen reader friendly price structure
- Keyboard navigation support throughout

### Code Quality

- ✅ No ESLint errors
- ✅ No TypeScript errors
- ✅ Follows MUI best practices with theme tokens
- ✅ Uses controlled state with proper event handlers
- ✅ Implements proper error boundaries and loading states
- ✅ Mobile-responsive design with proper spacing
- ✅ Custom lime green (#84cc16) branding while respecting theme structure

### Visual Design Achievement

- ✅ Matches original mockup layout and spacing
- ✅ Proper card elevation and rounded corners
- ✅ Correct typography hierarchy and sizing
- ✅ Interactive states for size selection and color variants
- ✅ Disabled state handling for add to cart button
- ✅ Clean mobile-first design approach
