~~# App Messenger Extraction~~ ✅ Done

## Context

Read `README.md` in this folder first for branch info and project context.

## Source branch

`origin/ditto-layout` — read files via `git show origin/ditto-layout:<path>`.

## Source files

Main layout:

- `git show origin/ditto-layout:blocks/layoutV6-app-messenger/LayoutV6AppMessenger.tsx`

Internal components (all `.js`, need conversion to `.tsx`):

- `git show origin/ditto-layout:blocks/layout-app-messenger/components/index.js`
- `git show origin/ditto-layout:blocks/layout-app-messenger/components/ChatBar.js`
- `git show origin/ditto-layout:blocks/layout-app-messenger/components/ChatDialog.js`
- `git show origin/ditto-layout:blocks/layout-app-messenger/components/ChatList.js`
- `git show origin/ditto-layout:blocks/layout-app-messenger/components/ChatListItem.js`
- `git show origin/ditto-layout:blocks/layout-app-messenger/components/ChatMsg.js`
- `git show origin/ditto-layout:blocks/layout-app-messenger/components/ChatSettings.js`
- `git show origin/ditto-layout:blocks/layout-app-messenger/components/ChatsHeader.js`
- `git show origin/ditto-layout:blocks/layout-app-messenger/components/ConversationHead.js`
- `git show origin/ditto-layout:blocks/layout-app-messenger/components/MessengerSearch.js`

## Target files

- `registry/layout/app-messenger/app-messenger.tsx`
- `registry/layout/app-messenger/components/index.ts`
- `registry/layout/app-messenger/components/ChatBar.tsx`
- `registry/layout/app-messenger/components/ChatDialog.tsx`
- `registry/layout/app-messenger/components/ChatList.tsx`
- `registry/layout/app-messenger/components/ChatListItem.tsx`
- `registry/layout/app-messenger/components/ChatMsg.tsx`
- `registry/layout/app-messenger/components/ChatSettings.tsx`
- `registry/layout/app-messenger/components/ChatsHeader.tsx`
- `registry/layout/app-messenger/components/ConversationHead.tsx`
- `registry/layout/app-messenger/components/MessengerSearch.tsx`

## Prerequisites

- `registry/layout/core/` ✅ Done
- No mockup deps needed — messenger components are self-contained

## Steps

### Step 1: Create `registry/layout/app-messenger/components/` directory

```bash
mkdir -p registry/layout/app-messenger/components
```

### Step 2: Extract and convert each component file (JS → TSX)

For each of the 9 `.js` files:

1. Read source via `git show origin/ditto-layout:blocks/layout-app-messenger/components/<file>.js`
2. Convert to TypeScript: add prop interfaces, type function params
3. Write to `registry/layout/app-messenger/components/<file>.tsx`

No import path changes needed within components — they only cross-reference each other with relative `./` imports (e.g., `./ChatListItem`, `./ChatMsg`).

### Step 3: Create `registry/layout/app-messenger/components/index.ts`

Convert the barrel from `index.js` → `index.ts`. Source re-exports 8 components:

- `ChatsHeader`, `MessengerSearch`, `ChatListItem`, `ChatList`, `ConversationHead`, `ChatSettings`, `ChatBar`, `ChatDialog`

### Step 4: Extract main layout file

Source: `git show origin/ditto-layout:blocks/layoutV6-app-messenger/LayoutV6AppMessenger.tsx`

Apply import path replacements:

```
../layout-app-messenger/components  → ./components
../layout-core-v6                   → ../core
```

Also:

- Remove the `// @ts-ignore` comment above the component imports (no longer needed after TSX conversion)
- The `// @ts-ignore` above `theme.vars = null` may still be needed — keep it but change to `// @ts-expect-error`

Write to: `registry/layout/app-messenger/app-messenger.tsx`

### Step 5: Validate

```bash
npx tsc --noEmit 2>&1 | grep "registry/layout/app-messenger"
npx eslint registry/layout/app-messenger/
```

Both must pass with zero errors.

## Dependencies

### Layout core (barrel import from `../core`)

- `applyEdgeSidebarStyles`, `applyHeaderStyles`, `applyInsetContainerStyles`, `applyInsetSidebarStyles`, `applyRootStyles`
- `Content`, `EdgeSidebar`, `EdgeSidebarContent`, `Footer`, `Header`, `InsetAvoidingView`, `InsetSidebar`, `InsetSidebarContent`, `Root`

### MUI packages (already installed in project)

- `@mui/material`: `Box`, `Container`, `CssBaseline`, `Toolbar`, `styled`, `createTheme`, `responsiveFontSizes`, `ThemeProvider`

## Component details

- Creates custom theme: primary `rgb(0, 153, 255)`, system font stack
- Hacks `theme.vars = null` to disable CSS variables — keep this hack for now
- `Root` with `applyRootStyles({ fixedHeight: true })` — viewport-height layout
- EdgeSidebar: permanent, `25cqw` width, autoCollapse at md to 80px
- Content: `applyInsetContainerStyles()` for inset sidebar layout
- InsetSidebar: absolute, `25cqw`, contains `ChatSettings`
- Footer: `ChatBar` inside `InsetAvoidingView`

## File conversion details (JS → TSX)

All 9 component files are `.js` with no types. At minimum add prop interfaces.

| Source file           | Key concerns                                                           |
| --------------------- | ---------------------------------------------------------------------- |
| `ChatBar.js`          | Has `concise` prop (boolean), uses 6 MUI icons                         |
| `ChatDialog.js`       | Renders list of `ChatMsg` components, no props                         |
| `ChatList.js`         | Has `concise` prop, hardcoded avatar URLs from pravatar.cc             |
| `ChatListItem.js`     | Complex hover state, uses `ListItem` with `button` prop (deprecated)   |
| `ChatMsg.js`          | Has `side` (string) + `messages` (array) props, uses `Grid` legacy API |
| `ChatSettings.js`     | Uses `Collapse` with boolean state toggle, 4 collapsible sections      |
| `ChatsHeader.js`      | Simple, 2 icon buttons, minimal typing needed                          |
| `ConversationHead.js` | Simple, hardcoded name "Imaad Casey" and "active 17m ago" status       |
| `MessengerSearch.js`  | Simple `InputBase` wrapper with Search icon                            |

Component internal cross-references:

```
ChatList    → imports ./ChatListItem
ChatDialog  → imports ./ChatMsg
```

## Lint concerns

- `@ts-ignore` on component imports in main file — remove after TSX conversion
- `theme.vars = null` hack — change `@ts-ignore` to `@ts-expect-error`
- `ChatListItem`: uses `ListItem` with `button` prop (deprecated → use `ListItemButton`)
- `ChatMsg`: uses `Grid` legacy API
- All JS files: no TypeScript types, add at minimum prop interfaces
- Avatar URLs from pravatar.cc — external dependency, keep as-is
