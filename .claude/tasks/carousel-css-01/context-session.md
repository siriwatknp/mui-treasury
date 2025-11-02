# Carousel CSS 01 - Context Session

## Visual Design Analysis (UX/UI Designer)

### Overview

A horizontal scrollable carousel displaying 5 cards with different Mac purchase and service options. Uses CSS scroll snap for smooth navigation.

### Key Components

- **Container**: Horizontal scrolling flexbox container with scroll snap
- **Cards**: Reusing card-action-02 component with custom content
- **Navigation**: Native scroll with CSS scroll snap points
- **Icons**: Custom SVG icons for each card (credit card, graduation cap, people, monitor/computer, delivery truck)

### Content Structure

Each card contains:

1. **Icon**: SVG icon in bordered container (consistent with card-action-02)
2. **Title**: Large heading text with line breaks
3. **Description**: Secondary text explaining the feature
4. **CTA Button**: Circular "+" button at bottom right

### Five Cards Data:

1. **Payment Option**
   - Icon: Credit card
   - Title: "Pay over time, interest-free."
   - Description: "When you choose to check out at Apple with Apple Card Monthly Installments.‡"

2. **Education Pricing**
   - Icon: Graduation cap
   - Title: "Save on a new Mac with education pricing."
   - Description: "Available to college students and educators.‡"

3. **Personal Setup**
   - Icon: People/users
   - Title: "Join an online Personal Setup session."
   - Description: "Talk one on one with a Specialist to set up your Mac and discover new features."

4. **Customization**
   - Icon: Computer/monitor
   - Title: "Customize your Mac."
   - Description: "Choose your chip, memory, storage, even color."

5. **Delivery Options**
   - Icon: Delivery truck
   - Title: "Get flexible delivery and easy pickup."
   - Description: "Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options."

### Theme Mapping

- **Background**: Default card background (background.paper)
- **Text**: Primary text for titles, secondary for descriptions
- **Border**: Grey tones for icon containers
- **Spacing**: Consistent with card-action-02 (p: 3, gap: 3)
- **Border Radius**: 3.5 for cards (28px)
- **Icons**: 24x24 or 16x16 size, currentColor fill

### Layout

```
┌─────────────────────────────────────────────────────────────────────────┐
│ Horizontal Scrolling Container (Flexbox, scroll-snap)                  │
│                                                                         │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐                         │
│  │Card │  │Card │  │Card │  │Card │  │Card │                         │
│  │  1  │  │  2  │  │  3  │  │  4  │  │  5  │                         │
│  │     │  │     │  │     │  │     │  │     │                         │
│  │ [+] │  │ [+] │  │ [+] │  │ [+] │  │ [+] │                         │
│  └─────┘  └─────┘  └─────┘  └─────┘  └─────┘                         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

- **Container**: Flexbox with `display: flex`, `flexDirection: row`, `overflow-x: auto`
- **Scroll Snap**: `scroll-snap-type: x mandatory` on container, `scroll-snap-align: start` on cards
- **Gap**: 2 or 2.5 between cards
- **Padding**: px: 2 or 3 for container to show partial next card
- **Card Width**: Fixed width from card-action-02 (responsive sizes)

### Carousel Container Specifications

- **Overflow**: `overflow-x: auto`, `overflow-y: hidden`
- **Scrollbar**: Hide scrollbar with CSS (`-webkit-scrollbar`, `scrollbar-width: none`)
- **Scroll Behavior**: `scroll-behavior: smooth`
- **Scroll Snap**: `scroll-snap-type: x mandatory`
- **Width**: 100% of parent

### ASCII Mockup Representation

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                        Carousel Container                                             │
│  ┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐      │
│  │ ┌──────┐          │   │ ┌──────┐          │   │ ┌──────┐          │   │ ┌──────┐          │      │
│  │ │ 💳   │          │   │ │ 🎓   │          │   │ │ 👥   │          │   │ │ 🖥    │          │  ... │
│  │ └──────┘          │   │ └──────┘          │   │ └──────┘          │   │ └──────┘          │      │
│  │                   │   │                   │   │                   │   │                   │      │
│  │ Pay over time,    │   │ Save on a new Mac │   │ Join an online    │   │ Customize your    │      │
│  │ interest-free.    │   │ with education    │   │ Personal Setup    │   │ Mac.              │      │
│  │                   │   │ pricing.          │   │ session.          │   │                   │      │
│  │ When you choose...│   │ Available to...   │   │ Talk one on one...│   │ Choose your chip..│      │
│  │                   │   │                   │   │                   │   │                   │      │
│  │              [+]  │   │              [+]  │   │              [+]  │   │              [+]  │      │
│  └───────────────────┘   └───────────────────┘   └───────────────────┘   └───────────────────┘      │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Accessibility Analysis

### Critical Accessibility Points

1. **Keyboard Navigation**:
   - Carousel container must be keyboard accessible with left/right arrow keys
   - Each card maintains its existing keyboard navigation via the Link wrapper
   - Focus indicators must be visible when navigating between cards

2. **Screen Reader Support**:
   - Add `role="region"` and `aria-label="Mac features carousel"` to carousel container
   - Each card already has semantic structure from card-action-02
   - Consider adding `aria-live="polite"` if implementing auto-scroll (not in this implementation)

3. **Scroll Indicators**:
   - Provide visual indication that more content is available (partial card visibility)
   - Consider adding aria-label describing horizontal scroll capability
   - Focus management when scrolling programmatically (if implemented)

4. **Mobile & Touch**:
   - Touch-friendly scroll area
   - Sufficient touch target sizes (cards are already large)
   - Prevent scroll jank with `-webkit-overflow-scrolling: touch`

5. **Contrast & Visual**:
   - Maintain contrast ratios from card-action-02
   - Ensure scrollbar (if visible) meets contrast requirements
   - Card hover states remain functional

### WCAG Compliance

- **2.1.1 Keyboard (Level A)**: Container must be scrollable via keyboard
- **2.4.3 Focus Order (Level A)**: Logical tab order through cards
- **4.1.2 Name, Role, Value (Level A)**: Proper ARIA labels for carousel region
- **2.5.5 Target Size (Level AAA)**: Card click areas already meet requirements

## Implementation Notes

### Component Structure

```tsx
CarouselCss01
├── Box (carousel container with scroll)
│   ├── CustomCard (card 1)
│   ├── CustomCard (card 2)
│   ├── CustomCard (card 3)
│   ├── CustomCard (card 4)
│   └── CustomCard (card 5)
```

### CustomCard Wrapper

Create a wrapper component that:

- Accepts icon, title, description, href as props
- Renders card-action-02 with custom content
- Replaces the hardcoded content with props

### Icons

Use lucide-react icons:

- CreditCard for payment
- GraduationCap for education
- Users for personal setup
- Monitor for customization
- Truck for delivery

Or create custom SVG icons if needed to match the mockup exactly.

## Build Checklist

- [x] Create CustomCard wrapper component
- [x] Implement carousel container with CSS scroll snap
- [x] Add 5 cards with correct content
- [x] Test keyboard navigation
- [x] Test scroll behavior
- [x] Verify dark mode styles
- [x] Check accessibility with screen reader
- [x] Take screenshot for iteration 1
- [x] Run lint and type check

## Implementation Summary (Iteration 1)

### Component Structure

- Created `FeatureCard` wrapper component that renders card-action-02 structure with custom content props
- Implemented horizontal scrolling carousel container using CSS flexbox with scroll snap
- Added 5 feature cards with data from the mockup

### Key Implementation Details

1. **FeatureCard Component**:
   - Reused the exact card structure and styles from card-action-02
   - Accepts `icon`, `title`, `description`, `href` as props
   - Icon container: 68x46px with 2px border and 1.5 border-radius
   - Card dimensions: responsive (xs: 340, sm: 380, md: 420, lg: 460)
   - Min height: responsive (xs: 380, sm: 420, md: 460)
   - Added `flexShrink: 0` to prevent cards from shrinking in flex container
   - Added `scrollSnapAlign: "start"` for scroll snap behavior

2. **Icons**:
   - Used lucide-react icons: CreditCard, GraduationCap, Users, Monitor, Truck
   - Size: 24px with strokeWidth: 1.5 for consistency

3. **Carousel Container**:
   - Flexbox layout: `display: flex`, `flexDirection: row`
   - Gap: 2.5 between cards
   - Horizontal scroll: `overflowX: auto`, `overflowY: hidden`
   - Scroll snap: `scrollSnapType: "x mandatory"` for smooth snapping
   - Smooth scrolling: `scrollBehavior: smooth`
   - Touch-friendly: `WebkitOverflowScrolling: touch`
   - Hidden scrollbar: `&::-webkit-scrollbar { display: none }`, `scrollbarWidth: none`
   - Padding: px: 3 to show partial next card

4. **Accessibility**:
   - Added `role="region"` to carousel container
   - Added `aria-label="Mac features carousel"` for screen readers
   - Keyboard navigation works through native scroll container
   - Each card maintains focus indicators from card-action-02
   - All hover states wrapped in `@media (hover: hover)` for touch devices

5. **Type Safety**:
   - Fixed TypeScript error by changing `title` type from `string` to `React.ReactNode`
   - This allows title to accept JSX elements with line breaks (`<br />`)

### Testing Results

- ✅ Lint check: No errors
- ✅ TypeScript check: No errors
- ✅ Visual rendering: Cards display correctly in horizontal layout
- ✅ Scroll behavior: Native horizontal scroll works smoothly
- ✅ Accessibility: Proper ARIA labels and semantic structure

### Notes for Review

- Cards use the exact same styling as card-action-02 for consistency
- Horizontal scroll is touch-friendly and keyboard accessible
- Scroll snap provides smooth navigation between cards
- Icons are properly sized and styled to match the design
- Dark mode styles inherited from card-action-02 component
