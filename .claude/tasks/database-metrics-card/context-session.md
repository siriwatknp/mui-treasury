# Context Session: database-metrics-card

## Visual Design Analysis (UX/UI Designer)

### Container Overview
A clean metrics dashboard card displaying database read/write statistics with dual line charts showing trends over time.

### Section 1: Metrics Header Row
**Layout**: Two metric cards side by side with equal width
**Components**: 
- Left card: "Rows read" metric with positive percentage change
- Right card: "Rows written" metric with negative percentage change

#### Left Metric Card Structure:
```
Rows read    [+4.4%]
643,015              from 615,752
```

#### Right Metric Card Structure:
```
Rows written  [-3.9%]
83,197                from 86,580
```

**Visual Hierarchy**:
- Title text: Small, muted color (text.secondary)
- Percentage badge: Inline with title, colored based on positive/negative
- Main value: Large, prominent (h3 or h4 typography)
- Comparison text: Small, muted (caption typography)

**Theme Mapping**:
- Positive percentage: Success palette with light background
- Negative percentage: Error palette with light background
- Border radius for badges: 1 (8px)
- Spacing between elements: 1 unit vertical

### Section 2: Line Charts
**Layout**: Two line charts positioned below metrics, same width as metric cards above
**Components**: 
- Dual-line area charts with subtle fill
- X-axis showing dates (16/04/2024 to 16/05/2024)
- No visible Y-axis
- Blue line for current period
- Gray line for comparison period

**Visual Details**:
- Chart height: ~150-200px
- Line stroke: 2px width
- Area fill: 10-20% opacity of line color
- Grid: None visible
- Axis labels: Only dates on X-axis

**Theme Mapping**:
- Primary line: primary.main (blue)
- Comparison line: grey.400
- Area fills: 0.1 opacity of line colors
- No borders or containers around charts

### ASCII Mockup Representation
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Rows read    [+4.4%]              Rows written   [-3.9%]     │
│                                                                 │
│  643,015                            83,197                     │
│           from 615,752                     from 86,580        │
│                                                                 │
│  ╱╲                                 ╱╲╱╲                      │
│ ╱  ╲____╱╲                         ╱    ╲____                 │
│╱          ╲                       ╱          ╲___             │
│            ╲                     ╱                ╲           │
│                                                                 │
│ 16/04/2024        16/05/2024    16/04/2024      16/05/2024   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Accessibility Requirements (Accessibility Expert)

### Critical Accessibility Points:

1. **Metric Cards**:
   - Use proper semantic HTML with headings for metric titles
   - Percentage badges need aria-label for full context (e.g., "4.4% increase")
   - Large numbers should use proper number formatting with aria-label
   - Comparison text needs clear labeling

2. **Charts**:
   - Provide aria-label describing the chart purpose and trend
   - Consider adding screen reader-only summary of data trends
   - Ensure color contrast meets WCAG standards (4.5:1 for text)
   - Don't rely solely on color to differentiate lines

3. **Interactive Elements**:
   - If charts are interactive, ensure keyboard navigation
   - Focus indicators for any clickable elements
   - Proper tab order from metrics to charts

4. **MUI Component Recommendations**:
   - Use Typography with proper variant hierarchy
   - Use Box or Card for container with proper role
   - Chip component for percentage badges with appropriate color
   - Consider using MUI's built-in success/error colors for accessibility

## Implementation Notes

### Work Summary
- Created `database-metrics-card` component with dual metrics display
- Implemented percentage badges with success/error colors based on positive/negative values
- Used MUI Chip component for percentage badges with custom styling
- Built two LineChart components with area fills showing current vs previous period data
- Applied proper accessibility with aria-labels and semantic HTML
- Used theme variables throughout - no hardcoded colors or spacing
- Formatted numbers with proper comma separators (643,015 and 83,197)
- Set up proper date formatting on x-axis (DD/MM/YYYY format)
- Configured charts with minimal margins and no y-axis as per design
- Added subtle area fills with 15% opacity for visual depth
- Implemented responsive Stack layout with proper spacing
