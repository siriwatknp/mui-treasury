# Context Session: Members Metric Card

## Visual Design Analysis

### Container Structure

- **Card Container**: Rounded corners with subtle border/shadow
- **Header Row**: Flexbox row with space-between alignment
  - Title "Members" on the left
  - Three-dot menu icon on the right
- **Content Area**: Vertical stack
  - Large metric number "1,210"
  - Comparison text with down arrow icon and percentage "10% vs last month"
  - Line chart visualization on the right side

### Key Components

- **Card**: Main container with elevated appearance
- **Typography**:
  - Title: Body/subtitle text for "Members"
  - Metric: Large display number (h2 or h3 variant)
  - Comparison: Body2 text with inline icon
- **IconButton**: Three-dot menu (MoreVert icon)
- **LineChart**: Sparkline-style chart showing trend
- **Icon**: Down arrow for negative trend

### Theme Mapping

- **Palette**:
  - Primary text for title and metric
  - Error color for down arrow and percentage (negative trend)
  - Chart uses error color for the line
- **Spacing**: Standard padding (2-3 units)
- **Border Radius**: Default theme radius (8px)
- **Shadows**: Subtle elevation (1-2)

### Layout Details

- **Grid Structure**:
  - Header: Flex row with space-between
  - Content: Flex row with metric info on left, chart on right
- **Positioning**:
  - Title and menu icon aligned at top
  - Metric number prominent on left
  - Comparison text below metric with arrow
  - Chart takes remaining space on right

### ASCII Mockup Representation

```
┌─────────────────────────────────────┐
│ Members                         ⋮   │
│                                     │
│ 1,210                    ╱\╱\_      │
│ ↓ 10% vs last month     /    \     │
│                                     │
└─────────────────────────────────────┘
```

## Accessibility Attention Points

### Interactive Elements

- **Menu Button**: Needs aria-label="More options for members metric"
- **Card**: Should not be interactive unless it's clickable for details

### Content Structure

- **Semantic HTML**: Use appropriate heading levels for metric title
- **Live Region**: Consider aria-live for dynamic metric updates
- **Text Alternatives**: Chart should have aria-label describing the trend

### Visual Accessibility

- **Color Contrast**: Ensure error color meets WCAG standards against background
- **Focus Indicators**: Menu button needs visible focus state
- **Information Redundancy**: Trend is shown both with color and arrow icon

## Implementation Notes

- Use MUI Card with standard elevation
- Implement responsive layout with container queries
- Chart should be minimal without axes or labels
- Arrow icon should be inline with text

## Work Summary

- Created members metric card component at `registry/components/members-metric/members-metric.tsx`
- Implemented Card with proper header layout (title + menu icon)
- Added large metric display (1,210) with Typography variant h3
- Included trend indicator with TrendingDownIcon and error color for negative trend
- Integrated LineChart from @mui/x-charts with minimal configuration
- Configured chart to hide axes, labels, tooltips, and legend for clean sparkline style
- Created preview page at `app/members-metric/page.tsx`
- Verified no TypeScript or linting errors
- Component successfully renders matching the mockup design
