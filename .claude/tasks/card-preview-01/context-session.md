# Card Preview 01 - Context Session

## Mockup Analysis

### UX/UI Designer Analysis

#### Visual Design Analysis

**Component Purpose**: A preview card component that shows a popover with expanded content when hovering over a link, similar to Wikipedia-style link previews.

#### Key Components

- **Trigger**: Text link with underline - uses blue color (`info` palette)
- **Preview Card**: Floating card with image and text content
  - Card variant: `outlined` with subtle shadow
  - Image: 16:9 aspect ratio photo at the top
  - Typography: Bold heading + body text
  - Colors: Black text on white background (monochromatic theme)

#### Theme Mapping

- **Palette**:
  - Link color: `info.main` (blue)
  - Card background: `background.paper` (white in light, dark in dark mode)
  - Text: `text.primary` for heading, `text.primary` for body
  - Border: `divider` color with subtle shadow

- **Typography**:
  - Link: body1 size (16px)
  - Card heading: h4 or subtitle1 (bold)
  - Card body: body2 (14px)

- **Spacing**:
  - Card padding: 2 (16px)
  - Gap between image and text: 2 (16px)
  - Gap between heading and body: 1 (8px)

- **Border/Shadow**:
  - Card border radius: 2 (16px) - using theme default borderRadius \* 2
  - Shadow: elevation 8 for floating effect

#### Layout

```
┌─────────────────────────────────────────┐
│ "The principles of good typography      │
│  remain into [preview trigger link]"   │
│                                         │
│  ┌───────────────────────────────┐    │
│  │                               │    │
│  │  [Image: Station Hopplein]    │    │
│  │  (16:9 aspect ratio)          │    │
│  │                               │    │
│  ├───────────────────────────────┤    │
│  │ Typography is the art and     │    │
│  │ science of arranging type to  │    │
│  │ make written language clear,  │    │
│  │ visually appealing, and       │    │
│  │ effective in communication.   │    │
│  └───────────────────────────────┘    │
└─────────────────────────────────────────┘
```

**Structure**:

- Container: Text with inline trigger link
- Preview Card (appears on hover):
  - Image section (top)
  - Content section (bottom)
    - Heading (Typography variant subtitle1, bold)
    - Body text (Typography variant body2)

#### Ascii Mockup Representation

```
Text content with [trigger link]
                      ↓ (on hover)
              ┌─────────────────┐
              │                 │
              │  [Image]        │
              │  16:9 ratio     │
              │                 │
              ├─────────────────┤
              │ Typography      │
              │                 │
              │ Typography is   │
              │ the art and     │
              │ science of...   │
              └─────────────────┘
```

### Accessibility Expert Analysis

#### Critical Accessibility Points

1. **Keyboard Navigation**:
   - Preview card must be accessible via keyboard (Tab key)
   - Focus indicator must be visible on trigger link
   - Card should show on both hover AND focus
   - Escape key should close the preview

2. **Screen Reader Support**:
   - Trigger link needs proper aria-label or aria-describedby
   - Preview card content should be announced when opened
   - Use aria-haspopup="dialog" on trigger
   - Image needs descriptive alt text

3. **Focus Management**:
   - Focus should remain on trigger when card opens
   - Focus trap not needed (non-modal preview)
   - Clear focus indicator on trigger link

4. **Semantic Structure**:
   - Use proper heading hierarchy (h1-h4) for card title
   - Image wrapped in figure element if needed
   - Link should have meaningful text (not just "click here")

5. **WCAG Compliance**:
   - Link color contrast: info.main should meet 4.5:1 ratio
   - Text contrast: Ensure text on card meets contrast requirements
   - Focus indicator: 3:1 contrast ratio
   - No reliance on hover alone (keyboard access required)

6. **MUI-Specific**:
   - Base UI PreviewCard provides built-in keyboard/focus management
   - Verify ARIA attributes are properly configured
   - Check if additional aria-label needed for trigger

## Implementation Notes

- Use Base UI `PreviewCard` component with MUI styling
- Minimal custom styles - rely on theme tokens
- Ensure both hover and focus trigger the preview
- Keep card compact with proper spacing ratios
- Use theme palette for all colors
- Implement proper accessibility attributes

## Build Summary

### Iteration 1 - Initial Implementation

**Completed Tasks:**

- ✅ Created `registry/components/card-preview-01/card-preview-01.tsx` using Base UI PreviewCard
- ✅ Created preview page at `app/card-preview-01/page.tsx`
- ✅ Tested component in browser - preview card appears on hover
- ✅ Screenshot saved to `.claude/tasks/card-preview-01/card-preview-01-1.png`
- ✅ Passed lint and type checks

**Implementation Details:**

- Used Base UI `PreviewCard.Root`, `PreviewCard.Trigger`, `PreviewCard.Portal`, `PreviewCard.Positioner`, `PreviewCard.Popup`
- Minimal custom styling - relied on MUI Card, CardMedia, CardContent components
- Applied theme tokens: `info.main` for link color, `background.paper` for card, proper spacing (p: 2)
- Card specs: 320px max-width, borderRadius: 2, 16:9 image aspect ratio
- Typography: subtitle1 (bold) for heading, body2 for description
- Dark mode support via `theme.applyStyles('dark', { bgcolor: 'grey.900' })`
- Default delays: 600ms open, 300ms close
- Accessibility: aria-haspopup="dialog" on trigger, keyboard accessible via Base UI defaults

**Notable Decisions:**

- ~~Defined own props interface instead of extending BasePreviewCard.Root.Props to avoid type complexity~~ **FIXED**: Now properly extends `BasePreviewCard.Root.Props`
- ~~Manually copied relevant props (delay, closeDelay, defaultOpen, open, onOpenChange) for better type safety~~ **FIXED**: Removed duplication, props spread via `...props`
- Used inline styles for trigger link color to avoid extra sx prop complexity
- Set `sideOffset={8}` for proper spacing from trigger

### Iteration 2 - Fixed Props Interface & Added Demo

**Changes:**

- ✅ Fixed props interface to extend `BasePreviewCard.Root.Props` instead of duplicating props
- ✅ Created `card-preview-01.demo.tsx` with 3 usage examples
- ✅ Updated Base UI skill documentation with TypeScript props best practices
- ✅ Type check passed

**Skill Documentation Update:**
Added new section "TypeScript Props Interface" to `.claude/skills/using-base-ui-with-material-ui/SKILL.md`:

- Explains why extending Base UI props is better than duplication
- Shows correct vs incorrect patterns
- Lists key benefits: type safety, future-proof, no duplication, better DX
