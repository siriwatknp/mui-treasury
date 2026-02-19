# Layout-Core: MUI → Tailwind Parity Migration

IMPORTANT: before starting, understand the Tailwind CSS layout implementation at @/Users/siriwatknp/Personal-Repos/tailwindcss-jun-layout/packages/tailwindcss-jun-layout/index.ts first.

> Scope: layout infrastructure only (Root, Header, Content, Footer, EdgeSidebar, InsetSidebar).
> Sidebar menu system, Collapsible, Dock — out of scope (separate components).

## Status Legend

- [ ] Todo
- [x] Done

---

## Phase 1: Trivial (variable defaults, no logic change)

### 1.1 Add `--jun-ES-collapsedWidth` default to Root-level

Tailwind sets `--jun-ES-collapsedWidth: 0px` at Root level. MUI only sets it inside variant styles.

**File:** `EdgeSidebar.tsx` (`.Root:has(&)` block)

```diff
  "--jun-ES-permanentWidth": "256px",
  "--jun-ES-collapsible": "var(--uncollapsed)",
+ "--jun-ES-collapsedWidth": "0px",
```

Same for `EdgeSidebarRight.tsx`:

```diff
  "--jun-ESR-permanentWidth": "256px",
  "--jun-ESR-collapsible": "var(--uncollapsed-R)",
+ "--jun-ESR-collapsedWidth": "0px",
```

### 1.2 Add `--jun-EC-delay` default to EdgeSidebarContent

Tailwind initializes `--jun-EC-delay: 0s` on EdgeSidebarContent. MUI only uses it in `var()` fallbacks.

**File:** `EdgeSidebarContent.tsx`

```diff
  const StyledEdgeSidebarContent = styled("div", {
    ...
  })({
+   "--jun-EC-delay": "0s",
    display: "flex",
```

### 1.3 Add `--jun-EC-shadow` variable

Tailwind uses `--jun-EC-shadow` on EdgeSidebarContent for `boxShadow`. MUI doesn't have it.

**File:** `EdgeSidebarContent.tsx`

```diff
+   boxShadow: "var(--jun-EC-shadow)",
    display: "flex",
```

**File:** `EdgeSidebar.tsx` — in `applyPermanentStyles`:

```diff
  return {
+   "--jun-EC-shadow": "none",
    "--jun-EC-width": "var(--_permanentWidth, 0px)",
```

And in `expandOnHover` block:

```diff
  "& .EdgeSidebarContent:hover": {
    "--jun-EC-width": "var(--jun-ES-permanentWidth)",
    "--jun-EC-delay": expandConfig.delay,
-   boxShadow: `var(--collapsed, ${expandConfig.shadow}) var(--uncollapsed, none)`,
+   "--jun-EC-shadow": `var(--collapsed, ${expandConfig.shadow}) var(--uncollapsed, none)`,
  },
```

Same pattern for `EdgeSidebarRight.tsx`.

### 1.4 Use `box-shadow` instead of `border` for sideline

Tailwind uses `box-shadow` for the sideline instead of `border`. This avoids layout shift.

**File:** `EdgeSidebar.tsx`

```diff
- borderRight:
-   "var(--permanent, min(var(--jun-ES-line-w), 1 * var(--jun-EC-width)) solid)",
- borderColor: "var(--jun-ES-line-color)",
- "&::after": {
-   border: "inherit",
- },
```

Instead, apply via theme:

```js
// in the memoTheme callback, outside variants:
boxShadow: "var(--jun-ES-line-w) 0px var(--jun-ES-line-color)",
```

**File:** `EdgeSidebarRight.tsx`

```diff
- borderLeft: ...
+ boxShadow: "calc(-1 * var(--jun-ES-line-w)) 0px var(--jun-ES-line-color)",
```

Also remove the `&::after { border: "inherit" }` from `SharedEdgeSidebar.tsx` `EdgeSidebarRoot`.

---

## Phase 2: Small (CSS property alignment)

### 2.1 Root height: `100lvh` → `calc(100svh - env(safe-area-inset-bottom))`

Tailwind accounts for safe-area-inset. MUI uses `100lvh`.

**File:** `Root.tsx`

```diff
- "--jun-h": "100lvh",
+ "--jun-h": "calc(100svh - env(safe-area-inset-bottom))",
```

### 2.2 Nested Root support: `--jun-h: 100%` for nested layouts

Tailwind sets `--jun-h: 100%` when a Root is inside another Root.

**File:** `Root.tsx`

```diff
+ ":where(.Root) &": {
+   "--jun-h": "100%",
+ },
```

### 2.3 EdgeSidebar z-index alignment

Tailwind sets `zIndex: "var(--_drawer, 2) var(--_permanent, 1)"` on EdgeSidebarRoot. MUI doesn't set z-index on the sidebar root.

**File:** `SharedEdgeSidebar.tsx` `EdgeSidebarRoot`

```diff
+ zIndex: "var(--_drawer, 2) var(--_permanent, 1)" as never,
```

### 2.4 EdgeSidebarContent `top` for drawer mode

Tailwind sets `top: "var(--_drawer, calc(var(--jun-h) - var(--drawer-h)))"` for drawer positioning. MUI doesn't set `top`.

This depends on `--drawer-h` (Phase 3). Skip until then or add simplified version:

```diff
+ top: "var(--_drawer, 0)",
```

### 2.5 Transition wrapping with `--tsn` variable

Tailwind wraps all transitions in `var(--tsn, ...)` to allow disabling via `--tsn: none`. MUI hardcodes transitions.

**Impact:** All files with `transition` properties.

This is a cross-cutting concern. Could be done in one pass:

- `SharedEdgeSidebar.tsx`: `transition: "var(--tsn, width 0.3s)"`
- `EdgeSidebarContent.tsx`: wrap both drawer/permanent transitions
- `Root.tsx`: `transition: "var(--tsn, grid-template-columns 0.3s)"`
- `EdgeDrawerClose.tsx`: `transition: "var(--tsn, 0.3s)"`

### 2.6 Empty sidebar auto-hide

Tailwind hides sidebar when empty:

```css
.Root:has(> &:empty),
.Root:has(> & .EdgeSidebarContent:empty) {
  --jun-ES-permanentWidth: 0px;
}
```

**File:** `EdgeSidebar.tsx` (in default Root styles)

```diff
+ ".Root:has(&:empty), .Root:has(& .EdgeSidebarContent:empty)": {
+   "--jun-ES-permanentWidth": "0px",
+ },
```

Same for Right sidebar with `--jun-ESR-permanentWidth`.

---

## Phase 3: Medium (new CSS variables / drawer features)

### 3.1 Add `--drawer-pos`, `--drawer-z`, `--drawer-h` variables

Tailwind uses these for standalone mode (absolute positioning instead of fixed).

**Default values:**

- `--drawer-pos: fixed`
- `--drawer-z: 999`
- `--drawer-h: var(--jun-h)`

**File:** `SharedEdgeSidebar.tsx` `EdgeSidebarRoot`

```diff
+ "--drawer-pos": "fixed",
+ "--drawer-z": "999",
+ "--drawer-h": "var(--jun-h)",
```

Then update EdgeSidebarContent to use them:

```diff
- position: "var(--_drawer, fixed) var(--_permanent, relative)",
+ position: "var(--_drawer, var(--drawer-pos)) var(--_permanent, relative)",
```

```diff
- height: "var(--_drawer, 100%)",
+ height: "var(--_drawer, var(--drawer-h))",
```

### 3.2 `Header-clip` left/right/both modes

MUI only supports `fullWidth` as boolean or single breakpoint. Tailwind supports `left`, `right`, `both` — each clips only the specified sidebar.

**File:** `Header.tsx`

Current `fullWidth` prop → expand to accept `"left" | "right" | "both" | boolean | Breakpoint`.

Grid template areas per mode:

```
both:   "Header Header Header" (current behavior)
left:   "Header Header EdgeSidebar-R"
right:  "EdgeSidebar Header Header"
```

For `left`/`right`, `--jun-H-clip-h` should be scoped to the relevant EdgeSidebar, not Root.

### 3.3 Drawer-without-overlay mode

Tailwind has `jun-edgeSidebar-drawer-withoutOverlay` that removes the backdrop overlay.

**Implementation:** Add a `DrawerWithoutOverlay` class concept. When present:

- `--drawer-h: calc(var(--jun-h) - var(--jun-H-clip-h))`
- `&::before { display: none }` (removes overlay)
- `html:has(...)` overflow:hidden selector excludes this class

### 3.4 Drawer show-header mode

Tailwind: `jun-edgeSidebar-drawer-showHeader` adjusts drawer to not cover the header:

- `--drawer-h: calc(var(--jun-h) - var(--jun-H-h))`
- `&::before { top: var(--jun-H-h) }`

### 3.5 Standalone Root mode

Tailwind: `jun-Root-standalone` for embedded layouts:

- `--drawer-pos: absolute`
- `--drawer-z: 5`
- `--content-overflow: auto`
- `maxHeight: var(--jun-h)`

**File:** `Root.tsx` — add a `standalone` prop or similar.

### 3.6 Content overflow control

Tailwind sets overflow on Content based on `--content-overflow`:

```css
--_overflow: var(--content-overflow);
overflow: var(--_overflow);
```

MUI Content has no overflow handling.

**File:** `Content.tsx`

---

## Phase 4: Complex (behavioral / drawer-close alignment)

### 4.1 `internalToggleSidebar` — close button handling

Tailwind's drawer close handler also checks for clicks on `DrawerEdgeSidebarClose`:

```js
// Tailwind
function handleClick(event) {
  const closeBtn = doc.querySelector(".jun-edgeDrawerClose");
  if (
    event.target === sidebar ||
    (closeBtn && closeBtn.contains(event.target))
  ) {
    close();
  }
}
```

MUI only checks `event.target === sidebar` (overlay). The close button has its own `onClick`.

**Decision needed:** Align to Tailwind (single handler) or keep MUI's approach (separate handlers)? Tailwind's approach is more robust if close button is used outside the component tree.

### 4.2 Persistent sidebar `permanentSlide` for Right sidebar

MUI Right persistent sidebar uses `--jun-ES-permanentSlide` for slide animation. Need to verify the slide calculation matches Tailwind's behavior.

### 4.3 `data-state` and `data-collapsible` attribute support

Tailwind supports shadcn-ui sidebar `data-state="collapsed"` and `data-collapsible="icon"|"offcanvas"`:

```css
.Root:has(> & [data-state="collapsed"]) {
  --jun-ES-collapsible: var(--collapsed);
}
.Root:has(> & [data-collapsible="icon"]) {
  --jun-ES-collapsedWidth: var(--sidebar-width-icon);
}
.Root:has(> & [data-collapsible="offcanvas"]) {
  --jun-ES-collapsedWidth: 0px;
}
```

This enables interop with shadcn Sidebar component. Low priority unless shadcn interop is needed.

---

## Phase 5: Out of scope (new component systems)

These are entirely new component systems in Tailwind, not renames or alignment:

- **SidebarContainer** / **SidebarGroup** / **SidebarMenu** / **SidebarMenuItem** / **SidebarMenuButton** / **SidebarMenuAction** / **SidebarText** / **SidebarIcon** / **SidebarTooltip** / **SidebarRail**
- **Collapsible** (CollapsibleTrigger / CollapsibleContent / CollapsibleIcon)
- **Dock** (Dock / DockMenu / DockMenuItem / DockMenuButton / DockIndicator / DockTooltip)

These should be separate registry items, not part of layout-core migration.

---

## Execution checklist

### Done

- [x] Phase 1.1 — `--jun-ES-collapsedWidth` default ✅ Done
- [x] Phase 1.2 — `--jun-EC-delay` default ✅ Done
- [x] Phase 1.3 — `--jun-EC-shadow` variable ✅ Done
- [x] Phase 1.4 — `box-shadow` sideline ✅ Done
- [x] Rename `TemporaryConfig` → `DrawerConfig`, `"temporary"` → `"drawer"` variant ✅ Done

### Dashboard-critical (blocks `app-dashboard` parity)

- [x] Phase 3.2 — Header-clip left/right/both modes (dashboard uses `clip-left`) ✅ Done
- [x] Phase 3.1 — `--drawer-pos/z/h` (prerequisite for 3.4) ✅ Done
- [x] Phase 3.4 — Drawer show-header (dashboard uses `drawer-showHeader`) ✅ Done
- [x] Phase 2.3 — EdgeSidebar z-index ✅ Done
- [ ] Phase 2.4 — EdgeSidebarContent top
- [ ] Phase 2.5 — `--tsn` transition variable
- [x] Phase 2.7 — Drawer open/closed visibility (`data-edge-drawer-open-visible`, `data-edge-drawer-closed-visible`) ✅ Done

### Dashboard-supportive (general parity, not blocking)

- [ ] Phase 2.1 — Root height safe-area
- [ ] Phase 2.6 — Empty sidebar auto-hide
- [x] Phase 3.6 — Content overflow ✅ Done

### Non-dashboard (other features)

- [ ] Phase 2.2 — Nested Root
- [x] Phase 3.3 — Drawer without overlay ✅ Done
- [x] Phase 3.5 — Standalone Root (removed `fixedHeight`, migrated consumers) ✅ Done
- [ ] Phase 4.1 — Close button handler
- [ ] Phase 4.2 — Persistent slide verify
- [ ] Phase 4.3 — data-state/data-collapsible
