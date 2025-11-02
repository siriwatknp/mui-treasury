# Dashboard Sidebar Context Session

## Visual Design Analysis

### Container Structure

The sidebar is a vertical navigation component with the following sections:

1. **Header Section**: Logo/brand with "OrangeFarm" text
2. **Search Section**: Search input field
3. **Navigation Section**: List of menu items with icons
4. **User Section**: User profile with avatar and admin badge
5. **Footer Section**: Settings and logout actions

### Key Components

#### Header/Brand

- **Primary Purpose**: Brand identity and app recognition
- **MUI Components**:
  - `Box` for container
  - `Typography` for brand text
  - Custom icon/image for orange logo
- **Theme Mapping**:
  - Text: Uses primary text color (black)
  - Font: Bold/medium weight for brand name
  - Size: h5 or h6 variant

#### Search Field

- **Primary Purpose**: Global search functionality
- **MUI Components**:
  - `TextField` with search icon
  - `InputAdornment` for icon placement
- **Theme Mapping**:
  - Background: Light grey/neutral background
  - Border: None (filled variant)
  - Border radius: Full rounded (99px)

#### Navigation Items

- **Primary Purpose**: Main navigation menu
- **MUI Components**:
  - `List` and `ListItem` for structure
  - `ListItemButton` for clickable items
  - `ListItemIcon` and `ListItemText`
  - `Collapse` for expandable sections
- **Icons Used**:
  - Dashboard: Grid/Dashboard icon
  - Customers: People/Group icon (with expand arrow)
  - All reports: Chart/Analytics icon
  - Geography: Globe/Map icon
  - Conversations: Chat/Message icon
  - Deals: Target/Deal icon
  - Export: Upload/Export icon
- **Theme Mapping**:
  - Active state: Orange/primary color highlight
  - Text: Default text color
  - Icons: Text.icon color with proper opacity
  - Hover: Subtle background change

#### User Profile

- **Primary Purpose**: User identification and status
- **MUI Components**:
  - `Avatar` for profile image
  - `Typography` for name
  - `Chip` for admin badge (filled, warning color)
- **Theme Mapping**:
  - Avatar: Standard size (40px)
  - Badge: Warning/orange color
  - Text: Primary text for name

#### Footer Actions

- **Primary Purpose**: Settings and logout
- **MUI Components**:
  - `ListItem` with icons
  - `ListItemButton` for actions
- **Icons**:
  - Settings: Gear/Settings icon
  - Logout: Exit/Logout icon with error color

### Layout

- **Structure**: Vertical flexbox
- **Width**: Fixed width (~280px)
- **Height**: Full viewport height
- **Background**: White/light background
- **Padding**: Consistent spacing (2-3 units)
- **Item spacing**: 0.5-1 unit between items

### ASCII Mockup Representation

```
┌─────────────────────────┐
│ 🍊 OrangeFarm          │
│                         │
│ 🔍 Search              │
│                         │
│ ▣  Dashboard           │
│                         │
│ 👥 Customers         ⌄ │
│                         │
│ 📊 All reports         │
│                         │
│ 🌍 Geography           │
│                         │
│ 💬 Conversations       │
│                         │
│ 🎯 Deals               │
│                         │
│ 📤 Export              │
│                         │
│                         │
│                         │
│                         │
│ ┌──┐                   │
│ │👤│ Gustavo Xavier    │
│ └──┘ [Admin]           │
│                         │
│ ⚙  Settings            │
│                         │
│ ↪  Log out             │
└─────────────────────────┘
```

## Accessibility Attention Points

### Keyboard Navigation

- **Tab Order**: Logo → Search → Navigation items → User profile → Settings → Logout
- **Focus Indicators**: Ensure visible focus rings on all interactive elements
- **Arrow Keys**: Support up/down navigation within the menu list

### Screen Reader Support

- **Landmarks**: Use `<nav>` with aria-label="Main navigation"
- **Search**: Label the search field properly with aria-label
- **Current Page**: Use aria-current="page" for active navigation item
- **Expandable Items**: Use aria-expanded for the Customers dropdown
- **User Section**: Provide context with aria-label for user profile section

### Visual Accessibility

- **Contrast**: Ensure 4.5:1 ratio for all text
- **Icons**: Include text labels, not just icons alone
- **Active State**: Orange highlight must meet contrast requirements
- **Admin Badge**: Warning color must be accessible against background

### Interactive Elements

- **Click Targets**: Minimum 44x44px for all interactive elements
- **Hover States**: Provide visual feedback without relying only on color
- **Expandable Sections**: Clear indication of expandable state
- **Logout Action**: Consider confirmation for destructive action

## Implementation Notes

### Work Summary

- Created dashboard sidebar component at registry/blocks/dashboard-sidebar/dashboard-sidebar.tsx
- Implemented vertical navigation with Material UI List components
- Added search field with rounded design using TextField with InputAdornment
- Created expandable Customers menu item with Collapse component
- Styled active state with warning color (orange/yellow) for Dashboard item
- Added user profile section with Avatar and Admin Chip badge
- Implemented Settings and Logout actions with appropriate icons and colors
- Used proper ARIA labels for accessibility (nav, search, user profile section)
- Applied consistent spacing and border radius throughout
- All icons properly colored with text.icon opacity
- Responsive layout with fixed 280px width
- No TypeScript errors or linting issues
