# list-item-01 Context Session

## Visual Design Analysis (UX/UI Designer)

### Overview

LinkedIn-style feed list items with avatar, content, and actions. Dark theme with subtle separators.

### Component Breakdown

#### Structure

Each list item follows horizontal layout:

```
┌────────────────────────────────────────────────────────┐
│ [Avatar] [Name + Badge]              [Actions]         │
│          [Title/Description]         [Menu] [Close]    │
│          [Optional Link]                                │
│          [Timestamp]                                    │
└────────────────────────────────────────────────────────┘
```

#### Key Variations

**Type 1: Promoted/Company**

```
┌────────────────────────────────────────────────────────┐
│ [Logo] Directed Edges                        [...] │
│        2,222 followers                                  │
│        Promoted                                         │
└────────────────────────────────────────────────────────┘
```

**Type 2: Person with Link**

```
┌────────────────────────────────────────────────────────┐
│ [Avatar] Sil Bormüller                   [...] [X] │
│          Founder @ Into Design Systems                  │
│          Visit my website                               │
│          3h                                             │
└────────────────────────────────────────────────────────┘
```

**Type 3: Connection Request**

```
┌────────────────────────────────────────────────────────┐
│ [Avatar] Ben Callahan                    [+ Connect]   │
│          Founder of Redwoods DS Community               │
│          1h                                             │
└────────────────────────────────────────────────────────┘
```

**Type 4: Follow Suggestion**

```
┌────────────────────────────────────────────────────────┐
│ [Avatar] Curious Squid                   [+ Follow]    │
│          88,888 followers                               │
│          2hr                                            │
└────────────────────────────────────────────────────────┘
```

**Type 5: With Badge & Connection Level**

```
┌────────────────────────────────────────────────────────┐
│ [Avatar] Brad Frost 🔒 • 1st              [...] [X] │
│          Enthusiasm Enthusiast at Brad Frost Web        │
│          7h                                             │
└────────────────────────────────────────────────────────┘
```

### MUI Components Mapping

- **List, ListItem, ListItemAvatar, ListItemText, ListItemButton** - list structure
- **Avatar** - profile pictures/logos
- **Typography** - name (body1 bold), title (body2), timestamp (caption)
- **Button** - Connect/Follow buttons (variant="contained", size="small")
- **IconButton** - menu (MoreHoriz), close (Close) actions
- **Link** - optional website/booking links
- **Badge** or **Icon** - verification badges, emojis

### Theme Mapping

**Colors:**

- Primary: Used for action buttons (Connect, Follow) - info.main color
- Text hierarchy:
  - Name: text.primary (high contrast)
  - Title/Description: text.secondary
  - Timestamp: text.disabled
  - Links: info.main
  - "Promoted" label: text.disabled

**Spacing:**

- Avatar to content: 1.5
- Content lines: 0.5
- Item padding: 1.5-2
- Button spacing: 0.5-1

**Sizes:**

- Avatar: 56px (large)
- Action buttons: size="small"
- Icons: default size

**Other:**

- Border radius: default (circular avatars)
- Dividers: 1px subtle lines between items

### Layout

**Flexbox structure:**

```
ListItem (horizontal flex)
├─ ListItemAvatar (fixed width)
├─ ListItemText (flex-grow)
│  ├─ Primary: Name + badges/connection level (flex row)
│  └─ Secondary: Title + link + timestamp (flex column)
└─ Actions (fixed, flex row, align-end)
   ├─ Primary action (Connect/Follow button)
   └─ Secondary actions (Menu + Close icons)
```

**Alignment:**

- Avatar: aligned to top
- Content: fills available space
- Actions: aligned to top-right
- All elements in row have consistent top padding

### Ascii Mockup

```
┌─────────────────────────────────────────────────────────┐
│ ╭───╮  Directed Edges                           ⋯       │
│ │ 📐│  2,222 followers                                   │
│ ╰───╯  Promoted                                          │
├─────────────────────────────────────────────────────────┤
│ ╭───╮  Sil Bormüller                        ⋯    ✕      │
│ │👤 │  Founder @ Into Design Systems                     │
│ ╰───╯  Visit my website                                 │
│        3h                                                │
├─────────────────────────────────────────────────────────┤
│ ╭───╮  Ben Callahan                      [+ Connect]    │
│ │👤 │  Founder of Redwoods DS Community                  │
│ ╰───╯  1h                                                │
├─────────────────────────────────────────────────────────┤
│ ╭───╮  Curious Squid                     [+ Follow]     │
│ │🦑 │  88,888 followers                                  │
│ ╰───╯  2hr                                               │
├─────────────────────────────────────────────────────────┤
│ ╭───╮  Brad Frost 🔒 • 1st                 ⋯    ✕       │
│ │👤 │  Enthusiasm Enthusiast at Brad Frost Web           │
│ ╰───╯  7h                                                │
├─────────────────────────────────────────────────────────┤
│ ╭───╮  ✨ James Melzer ✓ • 1st             ⋯    ✕       │
│ │👤 │  Information Architect at UX Bearings              │
│ ╰───╯  Book an appointment                               │
│        7h                                                │
└─────────────────────────────────────────────────────────┘
```

## Accessibility Analysis (Accessibility Expert)

### WCAG Compliance Requirements

#### Semantic Structure (WCAG 1.3.1 Info and Relationships)

**Use proper list semantics:**

- ✅ MUI's `List` provides `<ul>` automatically
- ✅ `ListItem` provides `<li>`
- ⚠️ When items are interactive, use `ListItemButton` for keyboard support

**Heading hierarchy:**

- User names should NOT be headings (they're list item content)
- Use `<Typography variant="body1">` for names

#### Keyboard Navigation (WCAG 2.1.1 Keyboard)

**Interactive elements must be keyboard accessible:**

- ✅ `ListItemButton` - provides tab navigation and click on Enter/Space
- ✅ `IconButton` - requires `aria-label` for menu/close actions
- ✅ `Button` (Connect/Follow) - accessible by default
- ⚠️ Links must be real `<Link>` elements, not styled Typography

**Tab order:**

- Primary action (Connect/Follow) should be before secondary actions (menu/close)
- Each list item should be one tab stop if using ListItemButton
- Additional actions within item should be separate tab stops

#### Screen Reader Support (WCAG 4.1.2 Name, Role, Value)

**Required ARIA labels:**

```tsx
<IconButton aria-label="More options">
  <MoreHorizIcon />
</IconButton>

<IconButton aria-label="Dismiss">
  <CloseIcon />
</IconButton>

<Button startIcon={<AddIcon />} aria-label="Connect with Ben Callahan">
  Connect
</Button>
```

**ListItemText structure:**

- Primary text (name) should include badges/connection level in accessible way
- Secondary text should group title + timestamp logically
- Links should have descriptive text (avoid "click here")

#### Visual Accessibility (WCAG 1.4.3 Contrast, 1.4.11 Non-text Contrast)

**Contrast requirements:**

- ✅ Name (text.primary): meets 4.5:1 on dark background
- ✅ Title (text.secondary): meets 4.5:1
- ⚠️ Timestamp (text.disabled): check contrast ratio
- ✅ Action buttons: info.main meets contrast requirements
- ✅ Icons: must meet 3:1 contrast for UI components

**Don't rely on color alone:**

- Connection badges use icon + text ("1st")
- Action buttons have icon + text label
- "Promoted" label uses text, not just color

#### Focus Indicators (WCAG 2.4.7 Focus Visible)

**Required focus styles:**

- ✅ MUI provides default focus indicators
- ⚠️ Ensure focus outline meets 3:1 contrast ratio
- ✅ Focus should be visible on all interactive elements

### Implementation Checklist

- [ ] Use `ListItemButton` for clickable items (navigates to profile)
- [ ] Add `aria-label` to all IconButtons
- [ ] Use real `Link` component for website/booking links
- [ ] Include descriptive text in action buttons
- [ ] Test keyboard navigation: Tab, Enter, Space
- [ ] Verify focus indicators are visible
- [ ] Check color contrast ratios for all text
- [ ] Ensure screen reader announces content logically
- [ ] Support both list item click AND individual action clicks
- [ ] Add dividers between items for visual separation (assistive tech ignores)

### Critical Attention Points

1. **Interactive patterns:**
   - Entire item might be clickable (goes to profile)
   - Individual actions (connect, menu, close) need separate handling
   - Use `ListItemButton` with nested `IconButton`s with `onClick` stop propagation

2. **Connection level badges:**
   - Don't use emoji for important info (verification)
   - Use `<Icon>` with proper aria-label
   - "1st" connection indicator should be in accessible name

3. **Action button context:**
   - "Connect" alone insufficient for screen readers
   - Include name: "Connect with Ben Callahan"
   - Use `aria-label` or visually hidden text

4. **Link accessibility:**
   - "Visit my website" - good descriptive text ✅
   - "Book an appointment" - good descriptive text ✅
   - Links should be distinguishable from plain text (color + underline)

5. **Timestamp semantics:**
   - Use `<time>` element with `datetime` attribute
   - "3h" should expand to "3 hours ago" for screen readers

## Build Notes

- Use `List` with `disablePadding` for tight spacing
- `ListItem` with `divider` prop for separators
- `ListItemButton` for interactive items
- `alignItems="flex-start"` to align avatar at top
- Action buttons in separate box at end
- Support multiple variants through props

## Implementation Summary

### Component Built

- **File**: `registry/components/list-item-01/list-item-01.tsx`
- **Preview**: `app/list-item-01/page.tsx`

### Key Features Implemented

- Six list item variations matching mockup (promoted, person w/ link, connect, follow, badges w/ connection level)
- Used MUI List, ListItem, ListItemButton, ListItemAvatar, ListItemText components
- Avatar size: 56px (circular)
- Text hierarchy: name (fontWeight 600), description (text.secondary), timestamp (text.disabled)
- Action types: connect button, follow button, menu icon, menu+close icons
- Support for:
  - Optional name prefix (emoji/icons)
  - Optional badges (verification)
  - Optional connection level ("1st", "2nd", etc.)
  - Optional links with proper Link component
  - Optional "Promoted" label
  - Timestamps with `<time>` element
- Event handlers: onItemClick, onActionClick, onMenuClick, onCloseClick with stopPropagation
- Proper aria-labels on all IconButtons for accessibility

### Accessibility Implemented

- ✅ Semantic list structure (ul/li)
- ✅ ListItemButton for keyboard navigation
- ✅ aria-label on all IconButtons
- ✅ Real Link component for website/booking links
- ✅ time element for timestamps
- ✅ Event propagation handling for nested interactive elements
- ✅ Descriptive action button labels

### Layout Structure

- ListItem with alignItems="flex-start" for multi-line content
- ListItemAvatar → Avatar (56x56)
- ListItemText with custom primary (name + badges) and secondary (description + link + timestamp)
- secondaryAction for action buttons (positioned right)
- Optional ListItemButton wrapper for clickable items
- Spacing: py: 1.5, px: 2, gap: 1.5

### Type Check

- ✅ No TypeScript errors (npx tsc --noEmit passed)

### Notes

- Used placeholder images (https://placehold.co/112) for avatars
- maxWidth: 600 on List for demo purposes
- bgcolor: "background.paper" for container
- divider prop on ListItem for separators
