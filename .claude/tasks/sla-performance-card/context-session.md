# SLA Performance Card Context Session

## Visual Design Analysis

### Overview
A clean performance metric card displaying SLA (Service Level Agreement) compliance data with a circular progress chart and percentage indicators.

### Key Components
- **Container**: Card with rounded corners and subtle shadow
- **Title**: "SLA Performance" header text
- **Legend Items**: Two metric rows with color indicators and percentages
  - Within SLA: Blue indicator with 83.3% value
  - SLA Breached: Red indicator with 16.7% value
- **Circular Chart**: Donut/ring chart visualization on the right side showing the 83.3% vs 16.7% split

### Theme Mapping
- **Palette Colors**:
  - Primary blue for "Within SLA" metric and chart segment
  - Error red for "SLA Breached" metric and chart segment
  - Neutral gray for chart background/track
- **Typography**:
  - Title: body1 or subtitle1 weight for "SLA Performance"
  - Metric labels: body2 for "Within SLA" and "SLA Breached"
  - Values: h4 or h5 for the percentage values (83.3%, 16.7%)
- **Spacing**:
  - Container padding: 2-3 units
  - Gap between legend items: 2 units
  - Gap between legend and chart: 3-4 units
- **Border & Shadow**:
  - Card border: None or very subtle
  - Shadow: elevation 1 or 2 for subtle depth

### Layout
- **Structure**: Horizontal flexbox layout
  - Left side: Title and legend items stacked vertically
  - Right side: Circular progress chart
- **Positioning**:
  - Title: Top left
  - Legend items: Below title, left-aligned
  - Chart: Right side, vertically centered
- **Layout Type**: Flexbox with space-between
- **Component Sizes**:
  - Card: Full width (controlled by parent)
  - Chart: ~120-140px diameter
  - Legend indicators: Small squares ~12-16px

### ASCII Mockup Representation
```
┌─────────────────────────────────────────────────┐
│ SLA Performance                                 │
│                                                  │
│ ■ Within SLA                     ╭────╮         │
│   83.3%                          │    │         │
│                                  │  ◜ │         │
│ ■ SLA Breached                   │    │         │
│   16.7%                          ╰────╯         │
└─────────────────────────────────────────────────┘
```

## Accessibility Considerations

### Critical Accessibility Points

1. **Chart Accessibility**:
   - The circular chart needs proper ARIA labels to convey the data to screen readers
   - Consider adding aria-label with full context: "SLA Performance: 83.3% within SLA, 16.7% breached"
   - Chart should have role="img" with descriptive aria-label

2. **Color Accessibility**:
   - Ensure the blue and red colors meet WCAG contrast ratios against white background
   - Don't rely solely on color - include text labels for all metrics
   - Legend squares should be decorative (aria-hidden) since information is conveyed through text

3. **Semantic Structure**:
   - Use appropriate heading level for "SLA Performance" title
   - Group related content with proper semantic HTML
   - Consider using a description list (dl/dt/dd) for the metrics

4. **Screen Reader Experience**:
   - Ensure percentages are read correctly with proper number formatting
   - Group the legend and chart logically so they're understood as related
   - Consider adding visually hidden text to provide context if needed

5. **Keyboard Navigation**:
   - If the card is interactive (clickable), ensure proper focus indicators
   - If not interactive, ensure it doesn't receive keyboard focus unnecessarily

## Implementation Notes
- Will use MUI's PieChart from @mui/x-charts for the circular visualization
- Card component for the container
- Typography components for all text elements
- Box components for layout and spacing

## Work Summary
- Created SLA Performance Card component at registry/new-york/blocks/sla-performance-card/sla-performance-card.tsx
- Used MUI Card with CardContent for the container with subtle shadow elevation
- Implemented horizontal flexbox layout with legend on left and chart on right
- Created custom legend with color indicators (blue for Within SLA, red for SLA Breached)
- Used PieChart from @mui/x-charts with donut style (innerRadius: 40, outerRadius: 60)
- Applied theme colors using theme.vars pattern for primary and error palettes
- Added proper accessibility with aria-label on chart container
- Hidden default chart legend and arc labels for cleaner appearance
- Used Typography variants (subtitle1 for title, body2 for labels, h5 for percentages)
- Fixed all TypeScript errors related to chart configuration
- Created preview page at app/sla-performance-card/page.tsx