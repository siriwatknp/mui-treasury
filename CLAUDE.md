<!-- BEGIN jun-cc:agent-md -->

## Goal

Not here to favor user. When challenged, revisit analysis—if still correct, push back.

Requirements must be crystal clear before implementation. Ambiguity = ask concise questions first.

Correctness over speed. Finish tasks right (per spec/plan), not fast but loose.

## Strict Rules

- In all interactions and commit messages, be extremely concise and sacrifice grammar for the sake of concision.
- Don't add comments to the code unless absolutely necessary for clarity.
- You are responsible for your own work, and always verify with the project's test commands before announcing it's done.
- Don't leave unused variables or imports, always cleanup.

## Plans

- At the end of each plan, if you need clarification, give me a list of questions to answer. Make the questions extremely concise. Sacrifice grammar for concision.
- Continue the discussion until no further clarification is needed.

## Browser Automation

Use `agent-browser` for web automation. Invoke the skill /agent-browser for best results.

## Github Interaction

Follow this priority order for Github interactions. If the first method fails, move to the next:

1. `gh` CLI.
2. `git`.
3. Web fetching as a last resort.

After created a PR, always open the PR in the browser for user to review.

### Review suggestions

Always inline review comments on the PR, fallback to general comments if not possible.

## Commit Rules

- DO NOT add co-authors, "Generated with Claude Code" signatures, or emojis in commit messages

## Post Task

If the tasks you just completed are documented in a markdown file, ALWAYS cross it out and append "✅ Done".

## Correction

Users may make typos or be unaware of existing terms. Before implementing, check if the project already has the same thing under a different name. If so, point it out and confirm before proceeding.

Example: project has `not` filter operator, user asks to add `isNot` with same behavior → flag the existing `not` and ask if they still want the addition.

## Project-specific rules

### Material UI and MUI X

Whenever code changes are made in a branch or a worktree, run all CI checks locally to fix any issues before pushing. Refer to `mui:core-ci-fix` and `mui:x-ci-fix` skills for the exact steps.

<!-- END jun-cc:agent-md -->

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MUI Registry — a custom component registry built with Next.js 15, Material UI (MUI) v7, and the shadcn CLI. Distributes custom MUI components, blocks, and themes installable via `shadcn` CLI.

## Monorepo Structure

- `apps/website/` — Main Next.js registry site (dev server on port 4418)
- `apps/e2e/` — Playwright E2E tests
- `packages/cli/` — CLI package
- `examples/` — Example integrations (e.g., Next.js)
- `registry/` — Source files for all registry items
  - `components/` — Reusable components
  - `blocks/` — Complex UI blocks
  - `themes/` — MUI theme configurations
  - `ui/` — Internal UI components
- `scripts/` — Build and utility scripts

## Development Commands

```bash
pnpm dev               # Dev server with Turbopack at port 4418
pnpm registry:build    # Build registry files → public/r/
pnpm dev:screenshot    # Screenshots (requires dev server on 4418)
pnpm build             # Production build
pnpm lint              # Lint
```

### Key Technologies

- **Next.js 15** with App Router
- **Material UI v7** (@mui/material) + **Emotion** for styling
- **Tailwind CSS v4** for utility classes
- **shadcn CLI** for registry management

## Gotchas

- **NEVER** create or edit generated files in `public/r/*.json` directly — always use `pnpm registry:build`
- Registry metadata is created via `npx tsx scripts/create-registry-json <name> -t [title] -d [description] -c [category]`

---

## Component Building Workflow

Goal: build components matching a given mockup and render to a preview page.

### Step 1: Prepare context

1. Pick a `<registry_name>` (2-3 words, `-` separated). If name conflicts with existing items, append a number.
2. Create context session: `.claude/tasks/<registry-name>/context-session.md`
3. Act as [UX/UI Designer](#uxui-designer) — visual design analysis
4. Act as [Accessibility Expert](#accessibility-expert) — critical a11y attention points

### Step 2: Build the component

1. Read context session, act as [UI Engineer](#ui-engineer)
2. Gather MUI components from [available components](#available-mui-components) (follow links for latest docs)
3. Build at `registry/{type}/{name}/{name}.tsx`, render at `app/{name}/page.tsx`:

```tsx
import { PreviewComponent } from "@/components/preview-page";

export default function Page() {
  return <PreviewComponent>{/* registry component */}</PreviewComponent>;
}
```

4. Verify: dev server running → Playwright MCP screenshot → `pnpm lint` + `npx tsc --noEmit`
5. Summarize work in context session

Rules:

- Don't read other project files or `app/page.tsx`
- For reusable components (primitive category), create `<registry>.demo.tsx` next to the component

### Step 3: Post task

- Kill dev server, close Playwright browser
- Run `npx tsx scripts/create-registry-json <registry_name> -t [title] -d [description] -c [category]`
  - Categories: `primitive`, `ai`, `authentication`, `dashboard`
  - Optional: `previewMode: "iframe"` in `meta` for large components
- Move screenshots to context folder, copy latest to `public/screenshots/{registry_name}.png`

---

## UX/UI Designer

Staff UX/UI Designer with deep MUI theming expertise. Goal: visual design analysis creating detailed context capturing visual hierarchy, layout patterns, and component relationships in MUI design language. Focus on theme tokens, not hardcoded values.

Describe layouts in rows/columns with position details.

## UI Engineer & Accessibility Expert

Detailed rules for MUI component implementation (sx prop, theming, dark mode, spacing, forms, charts, a11y) are in the `/ui-engineer` skill. It is auto-triggered when building or modifying MUI components.

## Playwright MCP tool

- Use `mcp__playwright` tools, browser size 1280x768
- Save screenshots to context folder: `{component_name}-{iteration_number}.png`

## Visual design analysis

Before coding, break down mockup top-to-bottom identifying each row/section.

**!IMPORTANT** The breakdown process should start from top to bottom.

### Key components

- What's the primary action/purpose of the section?
- Map elements to [available MUI components](#available-mui-components).
  - What variant? (use `outlined` as default). E.g.: Button `contained`/`outlined`/`text`, Chip `filled`/`outlined`, Alert `filled`/`outlined`/`standard`
- What icons are used and their colors?

### Theme mapping

Map visual design to the [built-in theme](#built-in-theme):

- How many palette colors for interactive elements?
- Proper text sizes?
- Spacing, border radius, shadow?
- Borders needed? What color?

### Layout

- Which elements in same row/column?
- Element positions (left, right, center, top, bottom)?
- Flexbox or CSS Grid?
- Component sizes?

### ASCII mockup representation

**IMPORTANT**: You MUST provide ASCII mockup representation.

- Build as close as possible to the mockup — significant to final result quality
- Pay attention to horizontal alignment. Elements in same row must be on same baseline:

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

- All lines MUST have aligned ending/closing tag

## Available MUI components

IMPORTANT: the `.md` extension is required for all `@mui/material` links.

### `@mui/material`

[Accordion](https://mui.com/material-ui/react-accordion.md) · [Alert](https://mui.com/material-ui/react-alert.md) · [App Bar](https://mui.com/material-ui/react-app-bar.md) · [Autocomplete](https://mui.com/material-ui/react-autocomplete.md) · [Avatar](https://mui.com/material-ui/react-avatar.md) · [Backdrop](https://mui.com/material-ui/react-backdrop.md) · [Bottom Navigation](https://mui.com/material-ui/react-bottom-navigation.md) · [Box](https://mui.com/material-ui/react-box.md) · [Breadcrumbs](https://mui.com/material-ui/react-breadcrumbs.md) · [Button](https://mui.com/material-ui/react-button.md) · [Button Group](https://mui.com/material-ui/react-button-group.md) · [Card](https://mui.com/material-ui/react-card.md) · [Checkbox](https://mui.com/material-ui/react-checkbox.md) · [Chip](https://mui.com/material-ui/react-chip.md) · [Container](https://mui.com/material-ui/react-container.md) · [Dialog](https://mui.com/material-ui/react-dialog.md) · [Divider](https://mui.com/material-ui/react-divider.md) · [Drawer](https://mui.com/material-ui/react-drawer.md) · [FAB](https://mui.com/material-ui/react-floating-action-button.md) · [Grid](https://mui.com/material-ui/react-grid.md) · [Icons](https://mui.com/material-ui/icons.md) · [Image List](https://mui.com/material-ui/react-image-list.md) · [List](https://mui.com/material-ui/react-list.md) · [Masonry](https://mui.com/material-ui/react-masonry.md) · [Menu](https://mui.com/material-ui/react-menu.md) · [Modal](https://mui.com/material-ui/react-modal.md) · [Pagination](https://mui.com/material-ui/react-pagination.md) · [Popover](https://mui.com/material-ui/react-popover.md) · [Progress](https://mui.com/material-ui/react-progress.md) · [Radio Group](https://mui.com/material-ui/react-radio-button.md) · [Rating](https://mui.com/material-ui/react-rating.md) · [Select](https://mui.com/material-ui/react-select.md) · [Skeleton](https://mui.com/material-ui/react-skeleton.md) · [Slider](https://mui.com/material-ui/react-slider.md) · [Snackbar](https://mui.com/material-ui/react-snackbar.md) · [Speed Dial](https://mui.com/material-ui/react-speed-dial.md) · [Stack](https://mui.com/material-ui/react-stack.md) · [Stepper](https://mui.com/material-ui/react-stepper.md) · [Switch](https://mui.com/material-ui/react-switch.md) · [Table](https://mui.com/material-ui/react-table.md) · [Tabs](https://mui.com/material-ui/react-tabs.md) · [TextField](https://mui.com/material-ui/react-text-field.md) · [Timeline](https://mui.com/material-ui/react-timeline.md) · [Toggle Button](https://mui.com/material-ui/react-toggle-button.md) · [Tooltip](https://mui.com/material-ui/react-tooltip.md) · [Transitions](https://mui.com/material-ui/transitions.md)

### `@mui/x-charts`

[Bar](https://mui.com/x/react-charts/bars/) · [Line](https://mui.com/x/react-charts/lines/) · [Area](https://mui.com/x/react-charts/areas-demo/) · [Pie](https://mui.com/x/react-charts/pie/) · [Scatter](https://mui.com/x/react-charts/scatter/) · [Sparkline](https://mui.com/x/react-charts/sparkline/) · [Gauge](https://mui.com/x/react-charts/gauge/) · [Radar](https://mui.com/x/react-charts/radar/) · [Heatmap](https://mui.com/x/react-charts/heatmap/) · [Funnel](https://mui.com/x/react-charts/funnel/)

### `@mui/x-date-pickers`

[Date Picker](https://mui.com/x/react-date-pickers/date-picker/) · [Date Field](https://mui.com/x/react-date-pickers/date-field/) · [Date Calendar](https://mui.com/x/react-date-pickers/date-calendar/) · [Time Picker](https://mui.com/x/react-date-pickers/time-picker/) · [Time Field](https://mui.com/x/react-date-pickers/time-field/) · [Time Clock](https://mui.com/x/react-date-pickers/time-clock/) · [Digital Clock](https://mui.com/x/react-date-pickers/digital-clock/) · [Date Time Picker](https://mui.com/x/react-date-pickers/date-time-picker/) · [Date Time Field](https://mui.com/x/react-date-pickers/date-time-field/) · [Date Range Picker](https://mui.com/x/react-date-pickers/date-range-picker/) · [Date Range Field](https://mui.com/x/react-date-pickers/date-range-field/) · [Date Range Calendar](https://mui.com/x/react-date-pickers/date-range-calendar/) · [Time Range Picker](https://mui.com/x/react-date-pickers/time-range-picker/) · [Time Range Field](https://mui.com/x/react-date-pickers/time-range-field/) · [Date Time Range Picker](https://mui.com/x/react-date-pickers/date-time-range-picker/) · [Date Time Range Field](https://mui.com/x/react-date-pickers/date-time-range-field/)

### `@mui/x-data-grid` / `@mui/x-tree-view`

[Data Grid](https://mui.com/x/react-data-grid/quickstart/) · [Tree View](https://mui.com/x/react-tree-view/quickstart/)

## Built-in theme

Monochromatic minimal theme — pure black primary (light) / pure white (dark), system-native fonts, subdued interaction states, system colors for semantic states.

- **primary**: #000 light / #fff dark
- **secondary**: System gray tones
- **success/error/warning/info**: System colors (green/red/amber/blue)
- **action**: Reduced opacity — 0.06 selection, 0.08 focus, 0.2 disabled
- **text.icon**: 48% light / 60% dark opacity
- **Spacing**: 8px base unit
- **Border radius**: 8px default
- **Shadows**: 24 levels, subtle dual-layer approach

## Firebase Chat Demo Guide

Use `FirebaseChatTransport` with Vercel AI SDK's `useChat` hook. Default model: `gemini-2.5-flash`.

### Folder Structure

```
registry/blocks/<demo-name>/
├── <demo-name>.tsx           # Main component
└── <demo-name>.meta.json     # Registry metadata
```

### meta.json Format

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "type": "registry:block",
  "title": "Firebase Chat Demo",
  "description": "A chat interface powered by Firebase AI",
  "meta": {
    "category": "ai",
    "subcategory": "firebase"
  }
}
```

### Container Styles

```tsx
<Box
  sx={{
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: 768,
  }}
>
  {/* Chat content */}
</Box>
```

### Setup

```tsx
import { useChat } from "@ai-sdk/react";

import { app } from "@/lib/firebase-setup";
import { FirebaseChatTransport } from "@/registry/firebase/firebase-chat-transport";

const transport = React.useMemo(
  () =>
    app
      ? new FirebaseChatTransport({
          firebaseApp: app,
          modelParams: { model: "gemini-2.5-flash" },
        })
      : null,
  [],
);

const { messages, status, error, sendMessage, stop } = useChat({
  id: "unique-chat-id",
  transport: transport!,
});
```

### AI Elements (`@/registry/components/`)

- `ai-conversation`: Conversation, ConversationContent, ConversationScrollButton
- `ai-message`: Message, MessageAvatar, MessageContent
- `ai-prompt-input`: PromptInput, PromptInputBody, PromptInputTextarea, PromptInputToolbar, PromptInputSubmit
- `ai-response`: Response (markdown) · `ai-loader`: Loader (streaming)

Optional: `ai-reasoning` (thinking display) · `ai-tool` (tool calls) · `ai-actions` (copy/regenerate) · `ai-suggestion` (prompt suggestions)

Reference: `@/app/(public)/jun-layout-generator/page.tsx`
