# Context Session: Preference Settings

## Visual Design Analysis

### Container Structure

The mockup shows a settings/preferences panel with multiple configuration options. The layout is clean and follows a list-based structure.

### Sections Breakdown (Top to Bottom)

#### Section 1: Default Home View Setting

```
┌─────────────────────────────────────────────────────────────────────┐
│ Default home view                                 Active issues ▼  │
│ Which view is opened when you open up Linear                       │
└─────────────────────────────────────────────────────────────────────┘
```

- **Primary Action**: Select default view from dropdown
- **Components**:
  - Typography (title and description)
  - Select/Dropdown component with "Active issues" as current value
- **Theme Mapping**:
  - Title: body1 or subtitle1 weight
  - Description: body2, text.secondary color
  - Select: outlined variant, right-aligned
- **Layout**: Flexbox row with space-between alignment

#### Section 2: Display Full Names Toggle

```
┌─────────────────────────────────────────────────────────────────────┐
│ Display full names                                        [○——]    │
│ Show full names of users instead of shorter usernames              │
└─────────────────────────────────────────────────────────────────────┘
```

- **Primary Action**: Toggle display preference
- **Components**:
  - Typography (title and description)
  - Switch component (currently off)
- **Theme Mapping**:
  - Title: body1 or subtitle1 weight
  - Description: body2, text.secondary color
  - Switch: default MUI switch, right-aligned
- **Layout**: Flexbox row with space-between alignment

#### Section 3: First Day of Week Setting

```
┌─────────────────────────────────────────────────────────────────────┐
│ First day of the week                                Sunday ▼      │
│ Used for date pickers                                              │
└─────────────────────────────────────────────────────────────────────┘
```

- **Primary Action**: Select first day of week from dropdown
- **Components**:
  - Typography (title and description)
  - Select/Dropdown component with "Sunday" as current value
- **Theme Mapping**:
  - Title: body1 or subtitle1 weight
  - Description: body2, text.secondary color
  - Select: outlined variant, right-aligned
- **Layout**: Flexbox row with space-between alignment

#### Section 4: Text Emoticons Toggle

```
┌─────────────────────────────────────────────────────────────────────┐
│ Convert text emoticons into emojis                       [●———]    │
│ Strings like :) will be converted to 😊                            │
└─────────────────────────────────────────────────────────────────────┘
```

- **Primary Action**: Toggle emoticon conversion
- **Components**:
  - Typography (title and description with emoji example)
  - Switch component (currently on, shown in primary color)
- **Theme Mapping**:
  - Title: body1 or subtitle1 weight
  - Description: body2, text.secondary color
  - Switch: primary color when on, right-aligned
- **Layout**: Flexbox row with space-between alignment

### Overall Layout Pattern

- Each setting row follows consistent structure
- Left side: Title and description stacked vertically
- Right side: Control element (Select or Switch)
- Horizontal dividers between sections (subtle)
- Consistent padding and spacing throughout

## Accessibility Attention Points

### Form Controls

- **Labels**: Each control must be properly associated with its title text
- **ARIA**: Select components need proper aria-label and aria-describedby
- **Switch**: Needs clear on/off state announcement for screen readers

### Keyboard Navigation

- Tab order should flow naturally through all controls
- Select dropdowns must be keyboard accessible
- Switch components need Enter/Space key support

### Visual Indicators

- Focus indicators on all interactive elements
- Sufficient contrast for descriptions (text.secondary)
- Clear visual state changes for switches

### Semantic Structure

- Use semantic HTML with proper heading hierarchy
- Group related settings logically
- Provide descriptive text for all controls

## Implementation Notes

- Will be built at `registry/blocks/preference-settings/preference-settings.tsx`
- Preview at `app/preference-settings/page.tsx`
- Use controlled components with state management
- Implement real functionality for demonstration

## Implementation Summary

- Created reusable `SettingRow` component for consistent layout across all settings
- Implemented four preference settings matching the mockup:
  - Default home view with Select dropdown (Active issues as default)
  - Display full names toggle with Switch (off by default)
  - First day of week with Select dropdown (Sunday as default)
  - Convert emoticons toggle with Switch (on by default, using primary color)
- Used controlled components with React state for all form elements
- Applied proper ARIA labels and describedby attributes for accessibility
- Used Stack with Divider for automatic section separation
- Typography variants: body1 for titles, body2 with text.secondary for descriptions
- Select components styled with size="small" and minWidth for consistent sizing
- Switch components properly colored (default for off state, primary for on state)
- All interactive elements have proper keyboard support and focus indicators
- No TypeScript or linting errors
- Component successfully renders and functions as expected
