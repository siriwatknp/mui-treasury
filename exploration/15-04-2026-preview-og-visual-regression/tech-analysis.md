# Tech Analysis — Preview Route as OG + Visual Regression Source

Date: 2026-04-15
Scope: `registry/components` + `registry/blocks`

## 1. Goal

One screenshot per registry item at 1200×630 serves:

- OG social card (`apps/website/public/og/<name>.png`).
- Playwright visual-regression baseline.

**Phase 1: light theme only.** Dark follows as a second PR once light pipeline is stable → adds `<name>-dark.png` alongside.

## 2. Current State (file refs)

- Preview route exists: `apps/website/app/preview/[name]/page.tsx:10` uses `getRegistryByName`, `DynamicComponentLoader` (`components/dynamic-component-loader.tsx:10` — `next/dynamic` with `ssr:false`).
- Wrapper: `components/preview-page.tsx:10` — plain `<div data-preview>`, no theme handling.
- Theme: `app/layout.tsx:39` — `InitColorSchemeScript attribute="class"` (expects `<html class="...">`). Tailwind dark variant: `app/globals.css:9` `@custom-variant dark (&:is(.dark *))`.
- Fonts: `Geist` + `Geist_Mono` via `next/font` in `app/layout.tsx:10-18` → CSS vars `--font-primary`, `--font-mono`. Bundled (good for Mac↔Linux parity).
- Playwright: `apps/e2e/playwright.config.ts:11` baseURL `http://localhost:4418`; `:31` webServer `pnpm --filter registry dev`; no snapshot config.
- Registry loader: `apps/website/lib/registry.ts:199` `getRegistryItems()`, `:315` `getRegistryByName`. Items carry `meta.category` ("block"/"component"/…), `meta.previewMode` ("normal"|"iframe"), `meta.exportName`, `meta.previewPath`.
- Existing `scripts/screenshot-demos.ts` (wired via `dev:screenshot` in `apps/website/package.json:7`) — legacy card-thumbnail pipeline writing to `public/screenshots/<name>.png`. Consumed by ~28 `meta.screenshot` fields across registry meta files. To be retired (see §10).
- No `generateMetadata` / OG anywhere today.

## 3. Feasibility

**Feasible, moderate complexity.** Primary risks are flake, not plumbing.

## 4. Design

### 4.1 Route changes — `app/preview/[name]/page.tsx`

- Add `generateMetadata({ params })` → `openGraph.images: ['/og/<name>.png']`.
- Wrap children in new `PreviewStatic` component that injects a CSS kill-switch (`* { transition: none; animation: none }`). Playwright's `animations: 'disabled'` + `toHaveScreenshot` stability polling handle anything CSS can't reach. Applied unconditionally on `/preview/[name]`.
- **No query params.** Determinism comes from the component source (see §5), not route-level RNG/Date stubs.
- **Phase 2 (dark):** add `ForceTheme` client component reading `?theme=dark` → sets `document.documentElement.classList.add("dark")` + `useColorScheme().setMode("dark")`. `InitColorSchemeScript` uses `attribute="class"` already.

### 4.2 Iframe items (`meta.previewMode === "iframe"`)

Known iframe items: `project-invite-modal`, `command-search-ui`, plus several `layout/*` (out of scope). Recommendation: `/preview/[name]` checks `meta.previewPath` (custom URL) or falls back to `/preview/demo/<path>` — Playwright navigates to that URL directly, bypassing any wrapper chrome. No iframe rendering at screenshot time.

### 4.3 Enumeration for test generator

`registry.ts:199 getRegistryItems()` returns all. Filter:

```ts
items.filter(
  (i) =>
    i.type === 'registry:item' &&
    (i.meta.category === 'component' || i.meta.category === 'block'),
);
```

### 4.4 Playwright — `apps/e2e`

- New spec `tests/visual.spec.ts`. At load time, import registry filter and iterate items. Phase 1: light only. Phase 2: × [light, dark].
- Config changes (`playwright.config.ts`):
  - New project `visual` with `use.viewport: { width: 1200, height: 630 }` (existing projects intact).
  - `expect.toHaveScreenshot: { maxDiffPixelRatio: 0.01, animations: 'disabled', caret: 'hide' }`.
- Per test: `await page.goto('/preview/<name>')` → `await page.evaluate(() => document.fonts.ready)` → `await page.waitForLoadState('networkidle')` → `await expect(page).toHaveScreenshot('<name>.png')`. (Phase 2: add `?theme=dark`, filename `<name>-dark.png`.)
- **Baselines generated on Mac.** When CI (Linux) lands later, expect a one-time re-baseline pass inside CI.

### 4.5 Commands (root `package.json`)

- `pnpm test:visual` → `pnpm --filter e2e exec playwright test --project=visual`.
- `pnpm test:visual <name>` → forwards via `-g "<name>"`.
- `pnpm test:visual --update` → appends `--update-snapshots`.
- Post step (same script): `node scripts/sync-og.mjs` copies `apps/e2e/tests/__snapshots__/visual.spec.ts/<name>.png` → `apps/website/public/og/<name>.png` (Phase 2: also `-dark.png`). Items with `meta.visualRegression === false` are skipped.

### 4.6 generateMetadata

```ts
export async function generateMetadata({ params }) {
  const { name } = await params;
  return {
    openGraph: { images: [`/og/${name}.png`] },
    twitter: { card: 'summary_large_image', images: [`/og/${name}.png`] },
  };
}
```

Phase 2: swap to `-dark.png` when `?theme=dark`.

Note: URL fragments (`#name`) are client-only — scrapers drop them. Real path `/preview/<name>` is required; fragments can't drive per-item OG.

## 5. Flake Mitigation — Source-Fix First

**Principle:** determinism belongs in the component source, not route-level runtime stubs. Registry items are distributed via shadcn; a chart that re-randomizes on every render is a shipped-product UX bug, not just a screenshot problem. Fixing the source improves both.

**Rejected approach (earlier draft):** `?seed=1` query param that overrides `Math.random` + `globalThis.Date`. Problems:

- Overriding `Date` globally breaks ISO/timezone/locale code in subtle ways.
- `Math.random` stub only covers one-time reads; render-body calls still differ.
- Magic contract every new item must remember.

| Source                                    | Mitigation                                                                                                                                                                                     |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Math.random()` in demos (charts, data)   | **Source-fix:** replace with baked static arrays, or in-file seeded PRNG (e.g. LCG) wrapped in `useMemo`. ~15 files to audit.                                                                  |
| `new Date()` / `Date.now()`               | **Source-fix:** hardcode ISO strings / fixed display values (e.g. `ai-reasoning` duration → "3.2s").                                                                                           |
| `useId()`                                 | `DynamicComponentLoader` uses `ssr:false` → IDs stable when React tree is stable.                                                                                                              |
| `@mui/x-charts` animations                | `skipAnimation: true` via MUI theme override inside `PreviewStatic` wrapper (preview-only; shipped components keep animations).                                                                |
| Transitions (`Fade`, `Collapse`, dialogs) | Global `* { transition: none; animation: none }` `<style>` inside `PreviewStatic`. MUI `<Dialog>` JS transitions: `MuiDialog.defaultProps.TransitionProps.timeout = 0` in same theme override. |
| Font AA                                   | Bundled Geist; `await document.fonts.ready` before snapshot.                                                                                                                                   |
| Network/image loading                     | `waitForLoadState('networkidle')` + await `img.complete`.                                                                                                                                      |
| Mac vs Linux renderer                     | Accept one-time re-baseline when CI lands. No Docker for Phase 1.                                                                                                                              |

Opt-out for irreducible flake: `meta.visualRegression: false` → skip in test generator + sync-og.

## 6. Shared-Code Blast Radius

- `app/preview/[name]/page.tsx` — only consumer is direct URL access. Adding `searchParams` + metadata is backward compatible.
- `components/preview-page.tsx` / `DynamicComponentLoader` — also used by `app/preview/demo/[...path]/page.tsx`. Keep wrapper unchanged; add a new `<ForceTheme>` sibling rather than modifying shared parts.
- `lib/registry.ts` — read-only usage from new code. No modification.
- `playwright.config.ts` — add a new `project` for `visual`; existing `control-heights.spec.ts` project keeps its viewport.
- `scripts/screenshot-demos.ts` + `dev:screenshot` npm script — retired (see §8).

## 7. Directory / Artifact Layout

```
apps/e2e/
  tests/
    visual.spec.ts
    __snapshots__/visual.spec.ts/
      <name>.png           (Phase 2: + <name>-dark.png)
  playwright.config.ts     (+ visual project)

apps/website/
  app/preview/[name]/
    page.tsx               (+ generateMetadata)
    preview-static.tsx     (new client component: animation kill-switch + x-charts skipAnimation theme override)
    force-theme.tsx        (Phase 2 only)
  public/og/
    <name>.png             (copied from snapshot; Phase 2: + <name>-dark.png)

scripts/
  sync-og.mjs              (copy snapshots → public/og; honors meta.visualRegression=false)
```

## 8. Cleanup — Retire `dev:screenshot`

New `/og/<name>.png` output supersedes the legacy `public/screenshots/<name>.png` pipeline (same purpose: visual snapshot for listing cards + social previews). Retirement steps:

1. Point `meta.screenshot` consumers at new path. Two options:
   - **A (preferred):** migrate all `*.meta.json` `meta.screenshot` fields from `/screenshots/<name>.png` → `/og/<name>.png`. Grep confirms ~28 files.
   - **B:** keep the field name, have `sync-og.mjs` also write to `public/screenshots/` for zero meta churn. Simpler, but two copies of every image in `public/`.
2. Delete `apps/website/scripts/screenshot-demos.ts`.
3. Remove `dev:screenshot` from `apps/website/package.json:7`.
4. Drop the `public/screenshots/` directory once consumers migrated.
5. Update `CLAUDE.md:85` reference + post-task instructions at `CLAUDE.md:143` (currently tells authors to copy to `public/screenshots/`).
6. Audit `apps/website/scripts/lib/registry-processor.ts` and its test for any `public/screenshots` hardcoding.

Recommend **A** — single source of truth. Images are identical; path difference is cosmetic.

## 9. Decisions

1. **Docker: no.** Baselines generated on Mac. Accept one-time re-baseline when CI (Linux) lands.
2. **Opt-out: yes.** Add `meta.visualRegression: false` → test generator skips, `sync-og` skips. Use sparingly.
3. **Determinism via source-fix**, not runtime stubs. Audit + refactor ~15 components using `Math.random` / `new Date` to use baked static data or in-file seeded PRNG. No `?seed=1` query param.
4. **Ship light first.** Dark follows in a second PR once light pipeline is stable.
5. **Root `pnpm test:visual`** → `pnpm --filter e2e exec playwright test --project=visual`. Supports `<name>` via `-g` and `--update` via `--update-snapshots`.

## 10. Recommended Next Steps

See `plan.md` for Phase 1 task breakdown (11 phases: setup, `PreviewStatic` wrapper, component source-fix audit, `generateMetadata`, Playwright project, pilot spec, generalize, sync-og + root script, meta migration, legacy retirement, docs, final validation).

**Phase 2 (dark) — out of scope here:** `ForceTheme` + `?theme=dark`, regenerate `-dark.png`, wire CI (expect one-time Linux re-baseline).
