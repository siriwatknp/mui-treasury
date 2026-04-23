# Registry Patterns

Registry items live in `apps/website/registry/`. Each item = one `*.meta.json` + (usually) source files. `pnpm registry:build` compiles them into `apps/website/public/r/<name>.json` consumed by the shadcn CLI.

Related docs: `development.md` (demo file rules), `visual-regression.md` (baselines + OG pipeline).

## 1. `type` field — pick one

| Type             | When                                                                   | Count | Notes                                                                                                                |
| ---------------- | ---------------------------------------------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------- |
| `registry:item`  | Default. Everything that isn't explicitly a hook or Firebase AI block. | 132   | Components, blocks, layouts, themes, shared types, collections.                                                      |
| `registry:block` | Firebase AI chat/demo blocks (self-contained AI showcases).            | 6     | Currently exclusive to `registry/firebase/*`. Don't use for generic page sections — those are still `registry:item`. |
| `registry:hook`  | Pure React hooks (no JSX).                                             | 1     | Only `use-number-input` today.                                                                                       |

Category `"block"` (26 items) is independent of type — those are still `registry:item`.

## 2. Folder location — pick by item kind

| Folder                        | When                                                                      | Examples                                                     |
| ----------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `registry/components/<name>/` | Reusable UI primitive or widget — imported into pages, not a page itself. | `card-social`, `ai-actions`, `sidebar`                       |
| `registry/blocks/<name>/`     | Page-level section or full feature UI (copy-paste-ready).                 | `app-footer-01`, `dashboard-sidebar`, `project-invite-modal` |
| `registry/layout/<name>/`     | App shell / grid / layout primitives (Root, Header, EdgeSidebar, etc.).   | `layout-core`, `app-analytics`                               |
| `registry/firebase/<name>/`   | Firebase AI + `useChat` demo blocks.                                      | `firebase-tool-calling`                                      |
| `registry/hooks/<name>/`      | Pure TS/JS hooks.                                                         | `use-number-input`                                           |
| `registry/themes/<name>/`     | MUI theme packages (palette + typography + shadows).                      | `mui-treasury`                                               |
| `registry/types/<name>/`      | Shared TS types referenced across items.                                  | `shared`                                                     |

Component vs block gut check: if you'd import it inside another component, → `components/`. If it's a finished page section, → `blocks/`.

## 3. `meta.category` — semantic bucket (separate from folder)

| Category     | When                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------- |
| `primitive`  | Building-block widgets (card, tabs, radio, text-field, button-group, info).                       |
| `block`      | Page-level feature sections (dashboard cards, auth modals, footer, ecommerce).                    |
| `ai`         | AI/LLM components — both UI elements (`subcategory: "elements"`) and integrations (`"firebase"`). |
| `layout`     | Layout system parts (Root, Header, sidebars, Content, Footer).                                    |
| `themes`     | Theme packages.                                                                                   |
| `react-hook` | Hooks.                                                                                            |

`subcategory` is free-form; reuse an existing one (`card`, `tabs`, `radio`, `dashboard`, `authentication`, `elements`, `firebase`, etc.) before inventing a new one.

## 4. File structure — pick by demo count

```
# Simple: component + one demo
<name>/
  <name>.meta.json
  <name>.tsx
  <name>.demo.tsx          # optional

# Multi-file component: many files, one index
<name>/
  <name>.meta.json
  index.ts
  <part-a>.tsx
  <part-b>.tsx
  <name>.demo.tsx

# Primitive with many demos: use demos/ subfolder
<name>/
  <name>.meta.json
  <name>.tsx
  <name>.demo.tsx          # main/default demo
  demos/
    <variant-a>.demo.tsx
    <variant-b>.demo.tsx

# Collection: no tsx, just registryDependencies
<name>/
  <name>.meta.json          # only file
```

Rules:

- 1–2 demos → keep beside the component as `<name>.demo.tsx`.
- 3+ demos or showcasing variants → `demos/` subfolder. Each `*.demo.tsx` becomes its own preview route `/preview/demo/<path>`.
- Demo file contract: `export function Demo()` (named, not default) + optional `export const meta = { title, description }`. See `development.md`.

## 5. Collection items (no `.tsx`)

A `.meta.json` with only `registryDependencies` and no source files. Installs a bundle of other items.

Only one exists today: `ai-elements` — installs all 20 AI elements.

Create one when users should install a family together, not as a naming convenience.

## 6. Themed primitive references — `{subcategory}-mui-treasury`

Canonical "here's the primitive styled by the MUI Treasury theme" card pinned to the top of each `/primitive/<subcategory>` page. Demonstrates the theme's effect and bundles the theme install.

Rules:

- Name: `{subcategory}-mui-treasury` (one per subcategory, matches the `/primitive/<sub>` path).
- Location: `registry/components/{subcategory}-mui-treasury/`.
- Files: single showcase `.tsx` (default + selected + disabled + error + label variants) + `meta.json`. Not a collection — it renders.
- `meta.category: "primitive"`, `meta.subcategory: "<sub>"`, `meta.exportName: "<Sub>MuiTreasury"`.
- `registryDependencies: ["mui-treasury"]` — cascades the theme install via shadcn CLI.
- Title: `"<Primitive> (MUI Treasury)"`. Description: short, mentions the theme.
- Pin to top of page: add entry in `apps/website/lib/registry-order.ts` → `registryOrder['primitive/<sub>'] = ['<sub>-mui-treasury', ...]`. Manual opt-in, no magic.
- Opt-in only — create when the subcategory maps cleanly to a MUI primitive (radio, select, button, text-field, tabs, etc.). Skip for conceptual subcategories (info, meter, dropzone).

## 7. `meta.json` optional fields — when to set

Required: `$schema`, `type`, `title`, `description`, `meta.category`. Generated by `npx tsx scripts/create-registry-json <name> -t <title> -d <desc> -c <category>`.

| Field                          | When to set                                                                                                                                                                                    |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta.subcategory`             | When 3+ items share the same grouping within a category.                                                                                                                                       |
| `meta.exportName`              | Named export in the component file the preview should render when there's no `.demo.tsx`. Required whenever the component has no default export. Common for blocks and themed primitive refs.  |
| `meta.screenshot`              | Rarely set by hand — OG images are generated by the visual-regression pipeline into `/og/<name>.png`. Only set manually for `app-*` full-page layouts that point to `/public/screenshots/...`. |
| `meta.previewMode: "iframe"`   | Item needs a fixed viewport (layouts, Firebase chats, large modals). Default is inline.                                                                                                        |
| `meta.previewClassName`        | Container sizing for the preview page. Two common values: `"h-[600px!important]"` (firebase + large blocks, 7 items) and `"bg-white dark:bg-neutral-950"` (force solid bg, 14 items).          |
| `meta.previewPath`             | Full-page `app-*` layouts preview at a custom route (e.g. `/app-layout/app-analytics`) instead of `/preview/<name>`.                                                                           |
| `meta.visualRegression: false` | Opt out of visual regression. See `visual-regression.md`.                                                                                                                                      |
| `registryDependencies`         | Auto-detected from imports of `@/registry/*`. Set manually for collections and themed primitive refs (§6).                                                                                     |

## 8. Preview routes

- `/preview/<name>` — main preview. Resolution order: `<name>.demo.tsx` (exports `Demo` or `default`) → component's `meta.exportName` → component's `default` → "Preview unavailable".
- `/preview/demo/<path>` — individual demo from `demos/` subfolder. Path = file path from `registry/` root without `.demo.tsx`.
- Custom `meta.previewPath` → arbitrary route (full-page `app-*` items).

Demos are resolved via the committed static map at `apps/website/lib/registry-demos.generated.ts` (emitted by `scripts/generate-demo-map.ts` during `pnpm registry:build`). New demo files need a rebuild; edits to existing demos hot-reload.

## 9. Decision cheat sheet

```
New item?
├─ Pure hook, no JSX?            → registry/hooks/   + type: registry:hook   + category: react-hook
├─ Firebase AI chat/demo?        → registry/firebase/ + type: registry:block + category: ai, subcategory: firebase
├─ MUI theme package?            → registry/themes/  + category: themes
├─ App shell / grid layout?      → registry/layout/  + category: layout
├─ Full page section / modal?    → registry/blocks/  + category: block  (+ exportName, likely previewMode: iframe)
├─ Reusable widget / primitive?  → registry/components/ + category: primitive (or ai for AI elements)
├─ Themed primitive reference?   → registry/components/{sub}-mui-treasury/ + registryDependencies: ["mui-treasury"] — see §6
└─ Bundles other items only?     → registry/components/ + registryDependencies + no tsx
```
