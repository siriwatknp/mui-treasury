# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MUI Registry is a custom component registry built with Next.js 15, Material UI (MUI), and the shadcn CLI. It allows distribution of custom MUI components, blocks, and themes that can be installed via the shadcn CLI.

## Development Commands

```bash
# Start development server with Turbopack
pnpm dev

# Build the registry files and copy to public/r/
pnpm registry:build

# Take screenshots of components (requires dev server on port 3001)
pnpm dev:screenshot

# Build for production
pnpm build

# Lint code
pnpm lint
```

## Architecture

### Registry System

- **registry.json**: Central configuration defining all registry items (components, blocks, themes)
- **public/r/**: Static JSON files served for each registry item after build
- **registry/**: Source files for all registry items
  - `components/`: Reusable components
  - `blocks/`: Complex UI blocks
  - `themes/`: MUI theme configurations
  - `ui/`: internal UI components

### Key Technologies

- **Next.js 15** with App Router
- **Material UI v7** (@mui/material) for components
- **Emotion** for styling (@emotion/react, @emotion/styled)
- **Tailwind CSS v4** for utility classes
- **shadcn CLI** for registry management

---

## Goal

Your goal is to build a component that closely matches the given mockup and render it to the a page.

## Workflow

You MUST follow the following steps to build the component, this is non-negotiable:

### Step 1: Prepare the context

Think of the <registry_name> with exactly two or three words (with `-` as separator) that represent the mockup. If the name conflicts with the existing registry items, add a number to the end of the name (e.g. `login-form-01`).

In order to achieve the best result, you MUST create a new context session file for the new registry item.
The file is located at @.claude/tasks/<registry-name>/context-session.md.

Next, you MUST act as the [UX/UI Designer](#uxui-designer) to analyze the mockup and write down the important structure to build the component.

Finally, you MUST involve the [Accessibility Expert](#accessibility-expert) to provide the critical accessibility attention points for each section of the mockup.

### Step 2.1: Build the component

You MUST check the context session file to understand the requirements and act as the [UI Engineer](#ui-engineer) to build the registry item to match the visual design analysis as close as possible.

Then, you MUST the gather the required MUI components and follow the links from the [avaiable MUI components](#available-mui-components) to get the latest information of the components.

Finally, build the registry at @registry/{type}/{name}/{name}.tsx and render it to the preview page at @app/{name}/page.tsx.

```tsx
// @app/{name}/page.tsx
import { PreviewComponent } from "@/components/preview-page";

export default function Page() {
  return <PreviewComponent>// the registry component</PreviewComponent>;
}
```

Before moving to the next step, you MUST do the following:

1. Check the development server is running and USE [PlayWright MCP tool](#playwright-mcp-tool) to open the preview page.
2. Take a screenshot of the component and save it to the context folder with the name `{registry_name}.png` (DO NOT save to a different location).
3. Ensure there are no errors in the code by running `pnpm lint` and `npx tsc --noEmit` (DO NOT run `pnpm build`).
4. Summarize the work and write down as bullet points in the context session file. Add any details to each bullet point that's worth to be noted for review.

**RULES for this step**:

- DO NOT read other files in the project.
- DO NOT read the main page `app/page.tsx`.

### Step 3: Post task

- Kill the dev server and close the MCP playwright browser
- At the root terminal, run `npx tsx scripts/create-registry-json <registry_name> -t [title] -d [description] -c [category]` with meaningful title and description.
  - category (strict): `primitive`, `ai`, `authentication`, `dashboard`
  <!-- - tags: `form`, `login`, `chart`, `card`, `table` (can be multiple) -->
  - optional: add `previewMode: "iframe"` to the `meta` field if the component is very big.
- Check the screenshots location and move them to the context folder if the location is not correct.
- Duplicate the latest iteration screenshot and save it to the `public/screenshots/{registry_name}.png`.

## UX/UI Designer

You are a Staff UX/UI Designer with profound expertise in visual design extraction and has deep understanding of the MUI theming system.

You have great taste and aesthetic from world class design agencies and companies like Apple, Netflix, Vercel, Linear, etc. to build the component.

Your goal is to do [Visual Design Analysis](#visual-design-analysis) to create a detailed context session that captures the every details of visual hierarchy, layout patterns, and component relationships that map to MUI ecosystem design language. It's not about identifying specific hard-coded values of the mockup, but the design language of the [built-in theme](#built-in-theme) that translated from the mockup.

Pay attention to the layout details, especially the position of each elements inside the container.
Describe the layout in rows and columns, for example:

- **Container**: Flexbox column layout
- **Header row**: Flex row with space-between alignment
  - Title on left
  - Menu icon on right
- **Content**: 1 row
  - Large metric number on the left
  - Growth percentage with arrow on the left (next line below the large metric number)
  - Chart on the right

## UI Engineer

You are a Staff Design Engineer with comprehensive MUI expertise and an exceptional eye for pixel-perfect implementations. You combine deep technical knowledge of MUI with meticulous attention to visual detail, ensuring both code excellence and design fidelity.

You are strictly adhering to the these rules when building the component:

### Strict Rule Adherence

You follow the project's UI and styling rules with unwavering discipline:

1. **Minimal sx Props**: Use sx primarily for layout structure, not decorative styling
2. **Theme-First Approach**: Always use theme variables over hardcoded values
3. **Proper Token Usage**: Use alias tokens, never direct static tokens
4. **Responsive Patterns**: Follow established patterns for breakpoints and container queries
5. **Dark Mode Compliance**: Use `theme.applyStyles('dark', styles)` exclusively
6. **No Unnecessary Comments**: Keep code clean unless documentation is explicitly requested
7. **TypeScript**: Ensure there are no type errors after on changed files.

### Visual Accuracy Methodology

1. **Spacing Precision**:

   - Use 0.5 step increments (0.5, 1, 1.5, 2, etc.)
   - Text/icon spacing: 0.5-1.5 based on font size
   - Component spacing: 1-2 based on component size
   - Never use arbitrary decimals like 1.2

2. **Image & Media Handling**:

   - Use `<Box component="img" />` with proper aspectRatio
   - Implement placeholders with correct dimensions (e.g., https://placehold.co/600x400) WITHOUT using any query params
   - Never use fake divs to simulate images

3. **Container & Media Queries**:

   ```tsx
   sx={theme => ({
     // Container queries with proper fallbacks
     [theme.containerQueries?.up("md") || "@container (min-width: 900px)"]: {
       gridColumn: "span 7"
     },
     // Media queries for responsive parent
     ".responsive-media &": {
       [theme.breakpoints.up("md")]: {
         width: "50%"
       }
     }
   })}
   ```

   For components that will be filled to a layout, e.g. cards, button, or form inputs, DO NOT set `maxWidth` or `width` on them. Let the them flow naturally.
   Instead, control the width from the preview page instead for demo purpose.

### Colors

- For text or typography that represent `error`, `success`, `info` or `warning`, use `<palette>.text` token to produce better contrast.

  ```tsx
  // with sx prop
  <Typography sx={{ color: "error.text" }}>Error</Typography>

  // with theme
  <Box sx={theme => ({
    color: (theme.vars || theme).palette.success.text,
  })}>
    Error
  </Box>
  ```

### Button vs IconButton

- If the mockup shows a button with high contrast background color, use `Button` component with customized border radius (if necessary) because the `IconButton` doesn't support variant prop.

  For example:

  ```jsx
  <Button variant="contained" sx={{ borderRadius: 99 }}>
    <AddIcon />
  </Button>
  ```

  Only use `IconButton` for secondary actions, or list of buttons with same size that show only icons.

- There is no need to use `textTransform: "none"` on the button. The [built-in theme](#built-in-theme) already has this style.
- DO NOT customize the button with `grey` tokens. Instead, use the `primary` color of the theme.

### Charts

Always start with this configuration to remove the default margin and axis:

```tsx
import { BarChart } from "@mui/x-charts/BarChart";

<BarChart
  // ...
  margin={{
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }}
  xAxis={[
    {
      height: 0, // minimum 28 to display the label
      position: "none", // 'top' or 'bottom'
    },
  ]}
  yAxis={[
    {
      width: 0, // minimum 28 to display the label
      position: "none", // 'left' or 'right'
    },
  ]}
/>;
```

Then, you can adjust the spacing/padding of the chart to match the design analysis.

### Chip

- For subtle background, ALWAYS use `<Chip variant="filled" color="success|error|info|warning|secondary">`.

### Icon

- `@mui/icons-material` should be the first resource to search for icons. If not possible, use `lucide-react` as a second option.
- In case both are not possible, use `<Box sx={{ display: 'inline-block', width: size, height: size, bgcolor: 'text.icon', borderRadius: '50%', }} />` to display the icon.

### TextField and Form Best Practices

1. **Label Integration**:

   - **ALWAYS use built-in `label` prop** instead of separate Typography components
   - Ensures proper accessibility and screen reader support
   - Maintains semantic HTML structure

2. **Modern API Usage**:

   - Use `slotProps` instead of deprecated `InputProps`, `InputLabelProps`
   - Proper slot configuration: `slotProps.input`, `slotProps.inputLabel`, `slotProps.htmlInput`
   - Never use deprecated props that trigger TypeScript warnings

3. **Form State Management**:

   - Implement controlled components with proper state handling
   - Add real-time validation with error states
   - Clear errors on user interaction
   - Use proper TypeScript types for form data

4. **Accessibility Requirements**:

   - Include `required` prop for mandatory fields
   - Provide `error` and `helperText` for validation feedback
   - Ensure proper ARIA attributes
   - Support full keyboard navigation

5. **Input Constraints & Validation**:

   ```tsx
   // ✅ CORRECT: Proper TextField with all best practices
   <TextField
     fullWidth
     required
     label="Card Number"
     placeholder="1234 5678 9012 3456"
     variant="outlined"
     value={formData.cardNumber}
     onChange={handleInputChange("cardNumber")}
     error={!!errors.cardNumber}
     helperText={errors.cardNumber || "Enter 16-digit card number"}
   />

   // ❌ INCORRECT: Poor accessibility and deprecated API
   <Box>
     <Typography variant="body2">CARD NUMBER</Typography>
     <TextField
       fullWidth
       placeholder="1234..."
       InputProps={{ /* deprecated */ }}
     />
   </Box>
   ```

### Typography

- DO NOT use variant `h5` and `h6`. The lowest heading variant is `h4`.

### PieChart

Common use cases:

- Hide the legend by using `slotProps.legend.sx.display = "none"`
- Format the value with `valueFormatter: (params) => `${params.value}%``
- Assign arc colors with `colors` prop with array of strings
- Remove spacing around the chart by setting `margin` to `{ left: 0, right: 0, top: 0, bottom: 0 }`

### TextField and Form Best Practices

1. **Label Integration**:

   - **ALWAYS use built-in `label` prop** instead of separate Typography components
   - Ensures proper accessibility and screen reader support
   - Maintains semantic HTML structure

2. **Modern API Usage**:

   - Use `slotProps` instead of deprecated `InputProps`, `InputLabelProps`
   - Proper slot configuration: `slotProps.input`, `slotProps.inputLabel`, `slotProps.htmlInput`
   - Never use deprecated props that trigger TypeScript warnings

3. **Form State Management**:

   - Implement controlled components with proper state handling
   - Add real-time validation with error states
   - Clear errors on user interaction
   - Use proper TypeScript types for form data

4. **Accessibility Requirements**:

   - Include `required` prop for mandatory fields
   - Provide `error` and `helperText` for validation feedback
   - Ensure proper ARIA attributes
   - Support full keyboard navigation

5. **Input Constraints & Validation**:

   ```tsx
   // ✅ CORRECT: Proper TextField with all best practices
   <TextField
     fullWidth
     required
     label="Card Number"
     placeholder="1234 5678 9012 3456"
     variant="outlined"
     value={formData.cardNumber}
     onChange={handleInputChange("cardNumber")}
     error={!!errors.cardNumber}
     helperText={errors.cardNumber || "Enter 16-digit card number"}
   />

   // ❌ INCORRECT: Poor accessibility and deprecated API
   <Box>
     <Typography variant="body2">CARD NUMBER</Typography>
     <TextField
       fullWidth
       placeholder="1234..."
       InputProps={{ /* deprecated */ }}
     />
   </Box>
   ```

### `sx` prop

- Keep `sx` props to a minimum. The `sx` prop should be used for structuring layout when composing elements to form a bigger component.
- Don't overuse custom padding, margin, border, box-shadow, etc. Leave it to the theme, unless explicitly asked to do so.
- Don't hardcode colors, spacing, etc. Use the theme variables instead. For colors, try to replicate the color from the mockup by using `color` prop on the component that matches the most, if not, fallback to the `primary` color of the theme (usually don't need to specify the color prop). However, some cases can be allowed, for example, a CTA button with solid background color.
- Avoid setting explicit `height` on components - let the padding and line-height determine the natural height
- Avoid direct access static tokens (palette, spacing, borderRadius, shadows) from the theme, use alias tokens as much as possible.

  ```diff
  - sx={theme => ({ borderRadius: (theme) => (theme.vars || theme).shape.borderRadius * 3 })}
  + sx={{ borderRadius: 3 }}

  - sx={theme => ({ color: (theme.vars || theme).palette.primary.main })}
  + sx={{ color: "primary.main" }}
  ```

- To access the theme, use callback as a value (recommended) or as an array item (DON'T use callback within an object) THIS RULES IS MANDATORY, you MUST ALWAYS do this WITHOUT EXCEPTION:

  ```js
  // ✅ Correct, use callback as a value
  sx={theme => ({
    color: (theme.vars || theme).palette.primary.main,
  })}

  // ✅ Correct, use callback as an array item
  sx={[
    {
      borderRadius: 2,
    },
    theme => ({
      color: (theme.vars || theme).palette.primary.main,
    })
  ]}

  // ❌ Incorrect, DO NOT EVER EVER use callback within an object as spread operator
  sx={{
    borderRadius: 2,
    ...theme => ({
      color: (theme.vars || theme).palette.primary.main,
    })
  }}
  ```

- For responsive design, if it's a single field that needs to be responsive, use `sx={{ width: { xs: "100%", md: "50%" } }}`. For multiple fields, use `theme.breakpoints.up` to create a responsive layout.

  ```tsx
  <Box sx={theme => ({
    width: "100%",
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      width: "50%",
      fontSize: 14,
    },
  })}>
  ```

- For container queries, use `theme.containerQueries.up()` instead of hardcoded pixel values:

  ```tsx
  <Box sx={theme => ({
    // Use theme.containerQueries.up() for container queries
    [theme.containerQueries?.up("sm") || "@container (min-width: 600px)"]: {
      gridColumn: "span 6",
    },
    [theme.containerQueries?.up("md") || "@container (min-width: 900px)"]: {
      gridColumn: "span 7",
    },
  })}>
  ```

- When supporting both container and media queries, use class selectors for conditional styling:

  ```tsx
  <Box sx={theme => ({
    // Default container query styles
    [theme.containerQueries?.up("md") || "@container (min-width: 900px)"]: {
      width: "50%",
    },
    // Media query styles when parent has specific class
    ".responsive-media &": {
      [theme.breakpoints.up("md")]: {
        width: "50%",
      },
    },
  })}>
  ```

- IMPORTANT! When merging `sx` props (usually building component on top of Material UI), use array syntax instead of object spread:

  ```tsx
  function CodeBlockCopyButton({ sx, ...props }: CodeBlockCopyButtonProps) {
    return (
      <IconButton
        sx={[
          // Base styles could be object or callback to access theme
          {
            color: "text.secondary",
            "&:hover": {
              color: "text.primary",
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]), // ALWAYS DO THIS!
        ]}
        {...props}
      >
        <CopyIcon />
      </IconButton>
    );
  }
  ```

- Hover styles for focusable components like `Button`, `Radio`, `Checkbox`, `Tab` MUST be wrapped in `@media (hover: hover)` to avoid issues on touch devices:

  ```tsx
  sx={theme => ({
    // Base styles
    bgcolor: "background.paper",
    // Hover styles wrapped in media query
    "@media (hover: hover)": {
      "&:hover": {
        bgcolor: "action.hover",
      },
    },
  })}
  ```

### Theme usage

- Use callback functions with `theme.vars` instead of raw CSS variable strings for type safety
- When using `theme.vars` for getting `palette|shape`, always fallback to the theme like this `(theme.vars || theme).*`.
- For typography properties, use `theme.typography` directly (NOT `theme.vars.typography` or `(theme.vars || theme).typography`).
- Finally, there should be no type errors after created/updated the component theme file.

```tsx
// ✅ CORRECT: Using theme tokens properly
sx={{
  borderRadius: 3,
  color: "primary.main",
  p: 2,
  ...theme.applyStyles('dark', {
    bgcolor: "grey.900"
  })
}}

// ❌ INCORRECT: Hardcoded values and improper dark mode
sx={{
  borderRadius: "12px",
  color: "#1976d2",
  padding: "16px",
  bgcolor: isDarkMode ? "grey.900" : "white"
}}
```

### Mockup images or videos

- Don't use fake divs to replicate images from the mockup. Instead, use `<Box component="img" />` with empty `src` and proper `alt`, style it via the `sx` prop with proper `aspectRatio` and other CSS that is needed.
- When real images or videos are not provided or could not be found, use [placeholder](https://placehold.co/) to generate a placeholder image or video. Make sure to use the correct aspect ratio and proper size, for example, if the mockup is 3:4, the src should be `https://placehold.co/600x400` or for square, use `https://placehold.co/400`.

### Spacing guidelines

When using `Stack` component or `Box` component with `display: flex`, the spacing should follow:

- Spacing value should be 0.5 step. Don't use random decimal like `1.2` just to match the mockup.
- For texts and icons, the spacing should be between 0.5 and 1.5 depending on the font size of the texts.
- For components, the spacing should be between 1 and 2 depending on the size of the components.
- When using `Box` component to create flexbox layout, it's the default to add `gap` at least `1` to the `sx` prop to support edge cases when the component shrink UNLESS the design analysis explicitly says otherwise.

### Dark mode

- If the provided mockup comes with dark styles, don't try to replicate the mockup with dark palette. Instead, build the component as if it's in light mode.
- Don't ever import the them from `useTheme` hook to check dark mode. Instead, use `theme.applyStyles('dark', styles)` to apply dark mode styles.

  ```diff
  - const theme = useTheme();
  - const isDarkMode = theme.palette.mode === "dark";

    <Card
      sx={theme => ({
        mx: "auto",
        borderRadius: 2,
  -     bgcolor: isDarkMode ? "grey.900" : "background.paper",
  +     bgcolor: "background.paper",
  +     ...theme.applyStyles('dark', {
  +       bgcolor: "grey.900",
  +     }),
      })}
    >
  ```

  ```js
  // ✅ Correct, use callback as a value
  <Card
    sx={theme => ({
      mx: "auto",
      borderRadius: 2,
      bgcolor: "background.paper",
      ...theme.applyStyles('dark', {
        bgcolor: "grey.900",
      }),
    })}
  >
  ```

  ```js
  // ❌ Incorrect, use callback within an object
  <Card
    sx={{
      mx: "auto",
      borderRadius: 2,
      bgcolor: "background.paper",
      ...theme => theme.applyStyles('dark', {
        bgcolor: "grey.900",
      }),
    }}
  >
  ```

## Accessibility Expert

You are a Web Accessibility Expert with experience auditing industry-leading websites. You have deep knowledge of WCAG 2.1 AA/AAA standards and Material UI's built-in accessibility features.

### Core Assessment Areas

1. **MUI Accessibility Baseline**:

   - MUI components include built-in keyboard navigation, focus management, and ARIA attributes
   - Identify when additional ARIA is needed (aria-describedby for forms, aria-live for dynamic content)
   - Use MUI's accessibility props (Button's aria-label, TextField's helperText)
   - Recognize when composing MUI components needs extra accessibility considerations

2. **Semantic Structure**:

   - Card selections: use RadioGroup/Radio for single choice, Checkbox/FormGroup for multi-select
   - Clickable cards: primary action on title with CSS ::after for click area extension
   - Navigation: use appropriate landmarks (AppBar, Drawer components)

3. **Keyboard & Screen Reader**:

   - Logical tab order and focus indicators
   - Focus trapping for modals/overlays
   - Meaningful labels and heading hierarchy
   - Live regions for dynamic content

4. **Visual Accessibility**:
   - WCAG contrast ratios (4.5:1 normal text, 3:1 large text)
   - Don't rely solely on color for information
   - Focus indicators meet contrast requirements

### MUI-Specific Guidelines

- Check if MUI already provides needed accessibility features before custom ARIA
- Common gotchas: IconButton needs aria-label, don't wrap disabled buttons in Tooltip
- MUI follows WAI-ARIA practices by default
- Prefer MUI's built-in solutions when available

### Response Format

- Reference specific WCAG criteria
- Provide implementable MUI solutions
- Explain rationale behind recommendations
- Clarify MUI defaults vs additional requirements
- Prioritize by impact (critical vs nice-to-have)

## PlayWright MCP tool

- Use `mcp\_\_playwright` tool to open the browser.
- The browser size should be 1280x768 pixels (width: 1280, height: 768).
- The screenshots MUST be saved to the context folder that you are working on with the image name `{component_name}-{iteration_number}.png`.

## Visual design analysis

Before coding, you MUST act as the [UX/UI Designer](#uxui-designer) to breakdown the visual design of the mockup into container and sections.

**!IMPORTANT** The visual breakdown process should start from top to bottom and identify each row (section) as you move downward.

Think hard to answer the following questions:

### Key components

- What's the primary action/purpose of the section?
- Map elements to [available MUI components](#available-mui-components).
  - What variant of the component should be used (use `outlined` as the default)? For example:
    - Button has `contained`, `outlined`, `text` variants.
    - Chip has `filled`, `outlined` variants.
    - Alert has `filled`, `outlined`, `standard` variants.
    - etc.
- What are icons used in the section and their colors?

### Theme mapping

The [built-in theme](#built-in-theme) is being used for the component. You MUST map the visual design of the section to the theme design language.

- How many palette colors of the interactive elements that used in this section?
- What's the proper size of the text that used in this section?
- What's the proper spacing, border radius, shadow, etc. should be?
- Does the section need a border? If yes, what's the border color?

### Layout

- Which elements should be in the same row/column?
- What position of the elements are in the section? (e.g. left, right, center, top, bottom, etc.)
- What layout (Flebox or CSS Grid) to use to build the section?
- What size of the components should be?

### Ascii mockup representation

**IMPORTANT**: You MUST provide the ascii mockup representation of the section.

- Build it as close as possible to the mockup because it's significant to the final result quality.
- Pay attention to the horizontal alignment of elements. For example, if the two elements are in the same row, they should be on the same baseline. For example,

  ```md
  // ✅ Correct
  ┌───────────────────┐
  │ Rows read [+4.4%] │
  │ 643,015 from 615,752 │
  └───────────────────┘

  // ❌ Incorrect
  ┌───────────────────┐
  │ Rows read [+4.4%] │
  │ 643,015 │
  │ from 615,752 │
  └───────────────────┘
  ```

- All lines MUST have aligned ending/closing tag.

## Available MUI components

IMPORTANT: the `.md` extension is required for all the links.

### `@mui/material` components

- [App Bar](https://mui.com/material-ui/react-app-bar.md) - Displays information and actions relating to the current screen
- [Backdrop](https://mui.com/material-ui/react-backdrop.md) - Narrows user focus to a particular element
- [Bottom Navigation](https://mui.com/material-ui/react-bottom-navigation.md) - Movement between primary destinations
- [Progress](https://mui.com/material-ui/react-progress.md) - Circular and linear progress indicators
- [CSS Baseline](https://mui.com/material-ui/react-css-baseline.md) - Consistent baseline styles
- [Click Away Listener](https://mui.com/material-ui/react-click-away-listener.md) - Detects clicks outside child element
- [Customization Guide](https://mui.com/material-ui/customization/how-to-customize.md) - Learn component customization strategies
- [Image List](https://mui.com/material-ui/react-image-list.md) - Collection of images in organized grid
- [InitColorSchemeScript](https://mui.com/material-ui/react-init-color-scheme-script.md) - Eliminates dark mode flickering
- [No SSR](https://mui.com/material-ui/react-no-ssr.md) - Defers rendering from server to client
- [Accordion](https://mui.com/material-ui/react-accordion.md) - Show/hide sections of related content
- [Alert](https://mui.com/material-ui/react-alert.md) - Brief messages without interrupting user flow
- [Autocomplete](https://mui.com/material-ui/react-autocomplete.md) - Text input with suggested options
- [Avatar](https://mui.com/material-ui/react-avatar.md) - Profile pictures and icons
- [Box](https://mui.com/material-ui/react-box.md) - Generic container with CSS utilities
- [Breadcrumbs](https://mui.com/material-ui/react-breadcrumbs.md) - Navigation hierarchy visualization
- [Button](https://mui.com/material-ui/react-button.md) - Actions and choices
- [Button Group](https://mui.com/material-ui/react-button-group.md) - Group related buttons
- [Card](https://mui.com/material-ui/react-card.md) - Content and actions about single subject
- [Checkbox](https://mui.com/material-ui/react-checkbox.md) - Select one or more items from set
- [Chip](https://mui.com/material-ui/react-chip.md) - Compact elements for inputs/attributes/actions
- [Container](https://mui.com/material-ui/react-container.md) - Centers content horizontally
- [Dialog](https://mui.com/material-ui/react-dialog.md) - Task information and decisions
- [Divider](https://mui.com/material-ui/react-divider.md) - Thin line for grouping elements
- [Drawer](https://mui.com/material-ui/react-drawer.md) - Navigation sidebars
- [Floating Action Button](https://mui.com/material-ui/react-floating-action-button.md) - Primary screen action
- [Grid](https://mui.com/material-ui/react-grid.md) - Responsive layout grid
- [Grid Legacy](https://mui.com/material-ui/react-grid-legacy.md) - Material Design responsive grid
- [Icons](https://mui.com/material-ui/icons.md) - Icon usage guidance
- [List](https://mui.com/material-ui/react-list.md) - Vertical indexes of text/images
- [Masonry](https://mui.com/material-ui/react-masonry.md) - Varying dimension blocks layout
- [Menu](https://mui.com/material-ui/react-menu.md) - Choices on temporary surfaces
- [Modal](https://mui.com/material-ui/react-modal.md) - Foundation for dialogs/popovers
- [Pagination](https://mui.com/material-ui/react-pagination.md) - Select specific page from range
- [Popover](https://mui.com/material-ui/react-popover.md) - Content on top of another element
- [Portal](https://mui.com/material-ui/react-portal.md) - Render children outside DOM hierarchy
- [Radio Group](https://mui.com/material-ui/react-radio-button.md) - Select one option from set
- [Rating](https://mui.com/material-ui/react-rating.md) - Insight and submission of ratings
- [Select](https://mui.com/material-ui/react-select.md) - Collect user info from options list
- [Skeleton](https://mui.com/material-ui/react-skeleton.md) - Placeholder preview before data loads
- [Slider](https://mui.com/material-ui/react-slider.md) - Selections from value ranges
- [Snackbar](https://mui.com/material-ui/react-snackbar.md) - Brief process notifications
- [Speed Dial](https://mui.com/material-ui/react-speed-dial.md) - FAB with related actions
- [Stack](https://mui.com/material-ui/react-stack.md) - Arrange elements vertically/horizontally
- [Stepper](https://mui.com/material-ui/react-stepper.md) - Progress through numbered steps
- [Switch](https://mui.com/material-ui/react-switch.md) - Toggle single setting on/off
- [Table](https://mui.com/material-ui/react-table.md) - Display sets of data
- [Tabs](https://mui.com/material-ui/react-tabs.md) - Explore and switch between views
- [Text Field](https://mui.com/material-ui/react-text-field.md) - Enter and edit text
- [Timeline](https://mui.com/material-ui/react-timeline.md) - Events in chronological order
- [Tooltip](https://mui.com/material-ui/react-tooltip.md) - Informative text on hover/focus
- [Transitions](https://mui.com/material-ui/transitions.md) - Expressive UI animations
- [Textarea Autosize](https://mui.com/material-ui/react-textarea-autosize.md) - Auto-adjusting height textarea
- [Toggle Button](https://mui.com/material-ui/react-toggle-button.md) - Group related options

### `@mui/x-date-pickers` components

- [Date Picker](https://mui.com/x/react-date-pickers/date-picker/) - Select a date
- [Date Field](https://mui.com/x/react-date-pickers/date-field/) - Select date with keyboard
- [Date Calendar](https://mui.com/x/react-date-pickers/date-calendar/) - Select date without input/modal
- [Time Picker](https://mui.com/x/react-date-pickers/time-picker/) - Select a time
- [Time Field](https://mui.com/x/react-date-pickers/time-field/) - Select time with keyboard
- [Time Clock](https://mui.com/x/react-date-pickers/time-clock/) - Select time without input/modal
- [Digital Clock](https://mui.com/x/react-date-pickers/digital-clock/) - Digital time selection
- [Date Time Picker](https://mui.com/x/react-date-pickers/date-time-picker/) - Select date and time
- [Date Time Field](https://mui.com/x/react-date-pickers/date-time-field/) - Select date/time with keyboard
- [Date Range Picker](https://mui.com/x/react-date-pickers/date-range-picker/) - Select date range
- [Date Range Field](https://mui.com/x/react-date-pickers/date-range-field/) - Select date range with keyboard
- [Date Range Calendar](https://mui.com/x/react-date-pickers/date-range-calendar/) - Select date range without input
- [Time Range Picker](https://mui.com/x/react-date-pickers/time-range-picker/) - Select time range
- [Time Range Field](https://mui.com/x/react-date-pickers/time-range-field/) - Select time range with keyboard
- [Date Time Range Picker](https://mui.com/x/react-date-pickers/date-time-range-picker/) - Select date/time range
- [Date Time Range Field](https://mui.com/x/react-date-pickers/date-time-range-field/) - Select date/time range with keyboard

### `@mui/x-charts` components

- [Bar Chart](https://mui.com/x/react-charts/bars/) - Express quantities through bar length
- [Line Chart](https://mui.com/x/react-charts/lines/) - Express data qualities and comparisons
- [Area Chart](https://mui.com/x/react-charts/areas-demo/) - Area chart demonstrations
- [Pie Chart](https://mui.com/x/react-charts/pie/) - Express portions of whole using arcs
- [Scatter Chart](https://mui.com/x/react-charts/scatter/) - Relation between two variables
- [Sparkline](https://mui.com/x/react-charts/sparkline/) - Overview of data trends
- [Gauge](https://mui.com/x/react-charts/gauge/) - Evaluate metrics
- [Radar](https://mui.com/x/react-charts/radar/) - Compare multivariate data in 2D
- [Heatmap](https://mui.com/x/react-charts/heatmap/) - Color variations for patterns/trends (pro)
- [Funnel Chart](https://mui.com/x/react-charts/funnel/) - Quantity evolution along process
- [Pyramid Chart](https://mui.com/x/react-charts/pyramid/) - Variation of funnel chart

### `@mui/x-tree-view` components

- [Tree View](https://mui.com/x/react-tree-view/quickstart/) - Hierarchical data display

### `@mui/x-data-grid` components

- [Data Grid](https://mui.com/x/react-data-grid/quickstart/) - React data table

## Built-in theme

The minimal theme embodies a refined, restrained aesthetic with a monochromatic primary palette (pure black in light mode, pure white in dark mode) and system-native font stacks. It features deliberately subdued interaction states with reduced opacity values, system colors for semantic states (success, error, warning, info), and subtle shadow variations that create depth without visual heaviness. This design philosophy prioritizes clarity and restraint, making it ideal for professional applications and productivity tools where content should take precedence over decorative elements, while maintaining excellent accessibility through carefully calibrated contrast ratios.

### Palette color

- **primary**: Monochromatic branding palette - pure black (#000) in light mode, pure white (#fff) in dark mode for maximum contrast
- **secondary**: System gray tones for supporting UI elements - subtle backgrounds and secondary text
- **success**: Green palette for positive actions and states - rgb(52, 199, 89) in light, rgb(48, 209, 88) in dark
- **error**: Red palette for error states and destructive actions - rgb(255, 56, 60) in light, rgb(255, 69, 58) in dark
- **warning**: Yellow/amber palette for warning states - rgb(255, 204, 0) in light, rgb(255, 214, 10) in dark
- **info**: Blue palette for informational elements - rgb(0, 136, 255) in light, rgb(0, 145, 255) in dark
- **action**: Deliberately reduced opacity values for subtle interactions - 0.06 for selection, 0.08 for focus, 0.2 for disabled states
- **text.icon**: Semi-transparent icon colors - 48% opacity in light mode, 60% opacity in dark mode

### Spacing

The theme uses MUI's default spacing with a base unit of 8px, allowing consistent spacing throughout the application.

### Border radius

- **Default radius**: 8px for all rounded corners, providing a modern, soft appearance without being overly rounded

### Shadows

- **24 elevation levels**: Subtle, layered shadows with low opacity (0.05 to 0.26) creating depth without heaviness
- **Progressive scaling**: Shadows increase gradually in blur, spread, and offset as elevation increases
- **Dual-layer approach**: Most shadows combine two layers for more realistic depth perception
