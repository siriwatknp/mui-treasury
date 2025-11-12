# list-item-02 Context Session

## Mockup Overview

LinkedIn-style notification list items showing post reactions with rich content previews.

## UX/UI Designer Analysis

### Visual Structure (Top to Bottom)

#### Notification Item 1

```
┌─────────────────────────────────────────────────────────────┐
│ [Avatar]  Amy Diehl and 96 others reacted...        7h  ⋮  │
│           ┌──────────────────────────────────────┐          │
│           │ Analysis of Variants and the Anova   │          │
│           │ Plugin Generating component data...  │          │
│           └──────────────────────────────────────┘          │
│           97 reactions • 5 comments                         │
└─────────────────────────────────────────────────────────────┘
```

#### Notification Item 2

```
┌─────────────────────────────────────────────────────────────┐
│ [Avatar]  Jules Forrest and 28 others reacted...    7h  ⋮  │
│           ┌─────────────────────────────────────────┐       │
│           │[IMG] "How many variants does this       │       │
│           │      component even have... and why?"   │       │
│           └─────────────────────────────────────────┘       │
│           97 reactions • 5 comments                         │
└─────────────────────────────────────────────────────────────┘
```

### Key Components

**Container:** `List` + `ListItem` from MUI

- Each item uses `ListItem` with `alignItems="flex-start"`

**Avatar:**

- `Avatar` component, positioned top-left
- Standard size (40px)

**Content Area (Primary):**

1. **Header Text:**
   - Typography variant: `body1`
   - Pattern: "[Name] and [N] others reacted to your post."
   - Bold names using `<strong>` tags

2. **Content Preview Card:**
   - Variant 1: Text-only dark card
     - `Card` with dark background
     - Typography for title/description
   - Variant 2: Image + text card
     - Horizontal layout with thumbnail
     - Image on left (aspect ratio ~4:3)
     - Text on right

3. **Engagement Stats:**
   - Typography variant: `body2`
   - Color: `text.secondary`
   - Pattern: "N reactions • N comments"
   - Bullet separator with proper spacing

**Right Metadata:**

- **Timestamp:**
  - Typography variant: `body2`
  - Color: `text.secondary`
  - Position: top-right

- **Menu Icon:**
  - `IconButton` with `MoreVert` icon
  - Size: small
  - Position: aligned with content card

### Theme Mapping

**Colors:**

- Primary text: `text.primary` (white in dark, black in light)
- Secondary text: `text.secondary` (gray tones)
- Content card background (dark variant): `grey.900` (light mode) / `grey.800` (dark mode)
- Content card background (light variant): `background.paper`
- Borders: `divider`

**Typography:**

- Header: `body1` (default 16px)
- Content preview: `body1` for titles
- Engagement stats: `body2` (14px)
- Timestamp: `body2`

**Spacing:**

- Avatar to content: 2 (16px)
- Header to preview card: 1.5 (12px)
- Preview card to stats: 1.5 (12px)
- Between list items: divider or 2 (16px) gap

**Border Radius:**

- Content preview cards: 2 (16px)
- Avatar: circular (50%)

### Layout Details

**Horizontal Structure:**

```
[Avatar (40px)] --16px gap-- [Content (flex-grow)] --16px gap-- [Metadata (auto)]
```

**Content Column:**

1. Header row: Text (flex-grow) + Timestamp + Menu icon
2. Preview card
3. Engagement stats

**Preview Card Variants:**

_Text-only:_

- Padding: 2 (16px)
- Dark background
- Text color: white (dark theme) / primary (light theme)

_Image + text:_

- Horizontal layout (Grid or Flex)
- Image: 120px width, aspect ratio 4:3
- Text: flex-grow with padding 2
- Gap: 0 (no gap between image and text section)

### ASCII Mockup - Complete Item

```
┌────────────────────────────────────────────────────────────────┐
│  ┌──┐  Amy Diehl and 96 others reacted to your post.    7h  ⋮ │
│  │  │                                                            │
│  │  │  ┌───────────────────────────────────────────────────┐   │
│  └──┘  │ Analysis of Variants and the Anova Plugin         │   │
│        │ Generating component data that design systems...   │   │
│        └───────────────────────────────────────────────────┘   │
│        97 reactions • 5 comments                               │
└────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────┐
│  ┌──┐  Jules Forrest and 28 others reacted to your post. 7h  ⋮│
│  │  │                                                            │
│  │  │  ┌────────────────────────────────────────────────┐      │
│  └──┘  │[IMG]│ "How many variants does this component  │      │
│        │     │  even have... and why?" Nathan Curtis   │      │
│        └────────────────────────────────────────────────┘      │
│        97 reactions • 5 comments                               │
└────────────────────────────────────────────────────────────────┘
```

## Accessibility Expert Analysis

### Critical Accessibility Points

#### 1. Semantic Structure

- **List semantics:** Use `List` and `ListItem` to maintain proper navigation structure
- **Heading hierarchy:** Header text should use semantic markup but maintain visual style
- **Link accessibility:** Content preview cards should be clickable with proper aria-labels

#### 2. Interactive Elements

- **Menu button:**
  - Must have `aria-label="More actions"` or similar
  - Keyboard accessible
  - Focus indicators visible

- **Content preview card:**
  - If clickable, needs `role="link"` or wrap in `<a>` tag
  - `aria-label` describing the full post content
  - Keyboard accessible (Enter key)

#### 3. Screen Reader Experience

- **Header text pattern:**
  - Should read: "Amy Diehl and 96 others reacted to your post"
  - Use `<span>` with sr-only for better context if needed

- **Engagement stats:**
  - Use aria-label for clarity: "97 reactions, 5 comments"
  - Visual bullet separator should be aria-hidden

- **Timestamp:**
  - Consider using `<time>` element with datetime attribute
  - Should read clearly: "7 hours ago"

#### 4. Focus Management

- **Tab order:**
  1. Content preview card (if clickable)
  2. Menu button
- Avoid focus on non-interactive text elements

#### 5. Visual Accessibility

- **Contrast ratios:**
  - Text on dark card background must meet WCAG AA (4.5:1)
  - Secondary text meets contrast requirements
  - Icon buttons have sufficient contrast and size (24px minimum)

- **Focus indicators:**
  - Visible focus rings on IconButton
  - Card focus indicator when keyboard navigating

#### 6. Touch Targets

- Menu IconButton: minimum 44x44px touch target (MUI default 48px)
- Clickable card area: minimum 44px height

#### 7. Alternative Text

- Avatar images need alt text: "Amy Diehl's profile picture"
- Content preview images need descriptive alt text

### Implementation Notes

- MUI List/ListItem provide baseline keyboard navigation
- IconButton has built-in focus management
- Add explicit `aria-label` props where needed
- Use semantic HTML within Typography components
- Ensure clickable areas use `ButtonBase` or proper link elements

## Implementation Summary

### Files Created

- `registry/components/list-item-02/list-item-02.tsx` - Main component
- `registry/components/list-item-02/list-item-02.meta.json` - Registry metadata
- `app/list-item-02/page.tsx` - Preview page
- `public/r/list-item-02.json` - Public registry file
- `public/r/list-item-02.v0.json` - v0 format file

### Component Architecture

- **NotificationItem component** - Reusable item accepting props for customization
- **Two content variants implemented:**
  1. Text-only dark card with `grey.900` background
  2. Image + text card with 120px image, 4:3 aspect ratio
- **Layout approach:** Custom Stack-based layout instead of ListItemText for flexibility
- **Responsive design:** Timestamp and menu icon positioned using flexbox

### Key Implementation Details

- `ListItem` with `alignItems="flex-start"` for top-aligned avatar
- `secondaryAction` prop used for menu IconButton positioning
- `aria-label` on IconButton: "More actions"
- `aria-label` on engagement stats for screen reader clarity
- Dark mode support using `theme.applyStyles('dark', {...})`
- Placeholder avatar images (empty src) ready for real data
- Placeholder content image from placehold.co

### Accessibility Features Implemented

- Avatar alt text with name reference
- Menu button with aria-label
- Engagement stats with descriptive aria-label
- Bullet separator marked aria-hidden
- Semantic HTML with strong tags for names
- Proper focus order (menu button is keyboard accessible)

### Type Safety

- TypeScript interface `NotificationItemProps` for component props
- All MUI components properly typed
- Zero type errors confirmed with `npx tsc --noEmit`
- Zero IDE diagnostics

### Registry Configuration

- **Category:** primitive
- **Title:** Notification List Item
- **Description:** LinkedIn-style notification list item with avatar, content preview, and engagement stats
- **Dependencies:** @mui/material, @mui/icons-material, @emotion/react, @emotion/styled

### Notes

- Playwright MCP unavailable during implementation - manual screenshot needed
- Dev server confirmed running on port 3001
- Component ready for visual review at http://localhost:3001/list-item-02
