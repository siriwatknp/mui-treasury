---
title: preview-og-visual-regression (Phase 1 — light)
date: 15-04-2026
reference: ./tech-analysis.md
---

# Phase 1 Plan — Light-Theme Visual Regression + OG Cards

Locked decisions: no Docker, light-only, opt-out via `meta.visualRegression: false`, baselines on Mac, **determinism via source-fix (no runtime RNG/Date stubbing)**.

---

## [ ] Phase 0 — Setup

**Scope:** verify env; no code changes.

Tasks:

- Confirm `apps/e2e` has `@playwright/test` installed. If browsers missing: `pnpm --filter e2e exec playwright install chromium`.
- Note Playwright version.
- Run `pnpm --filter e2e exec playwright test` once → existing `control-heights.spec.ts` passes.

**Expected result:** existing e2e suite green.

---

## [ ] Phase 1 — Preview route: animation kill-switch + chart skipAnimation

**Scope:** make `/preview/[name]` route-level deterministic for animations only. No query params, no RNG/Date stubbing.

Files:

- `apps/website/app/preview/[name]/page.tsx`
- `apps/website/app/preview/[name]/preview-static.tsx` (new client component)

Server component — CSS kill-switch only. Playwright's `animations: 'disabled'` + `toHaveScreenshot` stability polling handle the rest. If pilots show flake, add targeted `waitForFunction` in the spec, not theme overrides.

```tsx
"use client";
import { useMemo } from "react";

import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";

export function PreviewStatic({ children }: { children: React.ReactNode }) {
  const base = useTheme();
  const theme = useMemo(
    () =>
      createTheme(base, {
        components: {
          MuiChartsAxis: { defaultProps: { skipAnimation: true } },
          // Add further MUI X chart slots as needed after Phase 3 audit
        },
      }),
    [base],
  );
  return (
    <ThemeProvider theme={theme}>
      <style>{`*, *::before, *::after {
        transition: none !important;
        animation: none !important;
        caret-color: transparent !important;
      }`}</style>
      {children}
    </ThemeProvider>
  );
}
```

Wire into `page.tsx`:

```tsx
<div className="min-h-screen bg-background">
  <PreviewStatic>
    <PreviewComponent>
      <DynamicComponentLoader ... />
    </PreviewComponent>
  </PreviewStatic>
</div>
```

**Expected result:** `/preview/<any>` renders without CSS transitions or chart animations. Direct user access still works normally (no behavior the user actively misses).

---

## [ ] Phase 2 — Audit & source-fix non-deterministic components

**Scope:** remove `Math.random()`, `new Date()`, `Date.now()` from registry components/blocks by replacing with deterministic values baked into the source.

Audit target list (from tech-analysis §5 + Explore report):

- `registry/blocks/database-metrics-card/database-metrics-card.tsx` — chart data from `Math.random`
- `registry/blocks/portfolio-value-chart/portfolio-value-chart.tsx` — random spikes
- `registry/blocks/call-volume-trends/call-volume-trends.tsx`
- `registry/blocks/members-metric/members-metric.tsx`
- `registry/blocks/payment-history-chart/payment-history-chart.tsx`
- `registry/blocks/payment-overview-card/payment-overview-card.tsx`
- `registry/components/card-team/card-team.tsx` (if exists — confirm)
- `registry/components/ai-reasoning/*.tsx` — `Date.now()` for duration → hardcode "3.2s"
- `registry/blocks/transaction-history-list/*.tsx` — any `new Date()` → ISO string literals
- Any remaining `new Date(` / `Math.random(` hits in `registry/blocks` and `registry/components`

Conversion pattern per file:

```tsx
// Before
const data = Array.from({ length: 30 }, () => Math.random() * 100);

// After — baked static array
const data = [
  48, 62, 55, 71, 83, 66, 59, 47, 52, 68, 74, 81, 69, 58, 63, 77, 85, 72, 64, 55,
  61, 73, 79, 86, 70, 62, 54, 67, 75, 82,
];
```

```tsx
// Before
const now = new Date();
const label = now.toLocaleDateString();

// After
const label = "Jan 15, 2026";
```

For items that genuinely need variation at demo time (rare), use a seeded PRNG helper committed in the file:

```tsx
function seeded(n: number) {
  let s = 0xc0ffee;
  return Array.from({ length: n }, () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  });
}
const data = seeded(30).map((r) => 40 + r * 60);
```

Process:

1. `rg -l "Math\.random\(|new Date\(|Date\.now\(" apps/website/registry/{blocks,components}` → canonical list.
2. Fix each file; commit in small batches grouped by category (chart blocks together, timestamp components together).
3. Verify each component still renders on its existing page route.

**Expected result:** `rg "Math\.random\(|new Date\(|Date\.now\(" apps/website/registry/{blocks,components}` returns zero hits. Every `/preview/<name>` page renders pixel-identical content on back-to-back loads.

---

## [ ] Phase 3 — `generateMetadata` + `public/og/` bootstrap

**Scope:** emit per-item OG tags. Create dir so route doesn't 404 before baselines.

Files:

- `apps/website/app/preview/[name]/page.tsx`
- `apps/website/public/og/.gitkeep` (new)

```ts
export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return {
    openGraph: { images: [`/og/${name}.png`] },
    twitter: { card: "summary_large_image", images: [`/og/${name}.png`] },
  };
}
```

**Expected result:** `curl http://localhost:4418/preview/login-form` HTML contains `<meta property="og:image" content="/og/login-form.png">`.

---

## [ ] Phase 4 — Playwright `visual` project

**Scope:** add new project in `apps/e2e/playwright.config.ts`. Existing project untouched.

```ts
projects: [
  // ...existing
  {
    name: "visual",
    use: {
      ...devices["Desktop Chrome"],
      viewport: { width: 1200, height: 630 },
    },
  },
],
expect: {
  toHaveScreenshot: {
    maxDiffPixelRatio: 0.01,
    animations: "disabled",
    caret: "hide",
  },
},
```

**Expected result:** `pnpm --filter e2e exec playwright test --project=visual` runs clean (no tests yet → OK).

---

## [ ] Phase 5 — Pilot spec on 3 items

**Scope:** validate determinism on representative items before generalizing.

Proposed pilots:

- Static: `login-form`
- Chart (post-Phase-2 fix): `portfolio-value-chart`
- Iframe: `project-invite-modal`

File: `apps/e2e/tests/visual.spec.ts`

```ts
import { expect, test } from "@playwright/test";

const pilots = [
  { name: "login-form", url: "/preview/login-form" },
  { name: "portfolio-value-chart", url: "/preview/portfolio-value-chart" },
  {
    name: "project-invite-modal",
    url: "/preview/demo/blocks/project-invite-modal/project-invite-modal.demo",
  },
];

for (const p of pilots) {
  test(`visual: ${p.name}`, async ({ page }) => {
    await page.goto(p.url);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveScreenshot(`${p.name}.png`);
  });
}
```

Run:

```
pnpm --filter e2e exec playwright test --project=visual --update-snapshots
pnpm --filter e2e exec playwright test --project=visual   # 5× consecutively
```

**Expected result:** 5 consecutive runs all green. Any flake → back to Phase 2 for the offending component.

---

## [ ] Phase 6 — Generalize spec to full registry

**Scope:** replace pilots with filtered enumeration.

```ts
import { getRegistryItems } from "../../apps/website/lib/registry";

// verify path

const items = getRegistryItems().filter(
  (i) =>
    i.type === "registry:item" &&
    (i.meta.category === "component" || i.meta.category === "block") &&
    i.meta.visualRegression !== false,
);

for (const item of items) {
  test(`visual: ${item.name}`, async ({ page }) => {
    const url =
      item.meta.previewMode === "iframe" && item.meta.previewPath
        ? item.meta.previewPath
        : `/preview/${item.name}`;
    await page.goto(url);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveScreenshot(`${item.name}.png`);
  });
}
```

If `getRegistryItems` isn't reachable from `apps/e2e`, add a small helper reading `.meta.json` via glob.

**Expected result:** baseline PNGs generated for ~116 items (97 components + 19 blocks − opt-outs). Second run: all green. Flaky items → opt out via `meta.visualRegression: false` with reason in commit message.

---

## [ ] Phase 7 — `sync-og.mjs` + root `pnpm test:visual`

**Scope:** copy snapshots → `public/og/`; unify command surface.

Files:

- `scripts/sync-og.mjs` (repo root)
- root `package.json`

```js
import { glob } from "glob";
import fs from "node:fs/promises";
import path from "node:path";

const SNAP = "apps/e2e/tests/__snapshots__/visual.spec.ts";
const DEST = "apps/website/public/og";

await fs.mkdir(DEST, { recursive: true });
const files = await glob(`${SNAP}/*.png`);
for (const src of files) {
  await fs.copyFile(src, path.join(DEST, path.basename(src)));
}
console.log(`Synced ${files.length} OG images.`);
```

Root script:

```json
"test:visual": "pnpm --filter e2e exec playwright test --project=visual && node scripts/sync-og.mjs"
```

Usage:

- `pnpm test:visual` — full run + sync
- `pnpm test:visual -- -g login-form` — single
- `pnpm test:visual -- --update-snapshots` — regenerate

**Expected result:** after `pnpm test:visual -- --update-snapshots`, `apps/website/public/og/<name>.png` exists for every non-opt-out item.

---

## [ ] Phase 8 — Migrate `meta.screenshot` paths

**Scope:** repoint ~28 meta files from `/screenshots/<name>.png` → `/og/<name>.png`.

Tasks:

- `rg -l '"screenshot":\s*"/screenshots/' --glob '**/*.meta.json'` → list.
- Script or manual sed to rewrite path segment.
- `rg "/screenshots/" apps/website` → confirm no other consumers.
- `pnpm registry:build` → succeeds.

**Expected result:** all `meta.screenshot` values point to `/og/`. Registry listing renders correctly.

---

## [ ] Phase 9 — Retire legacy screenshot pipeline

**Scope:** delete dead code after Phase 8.

- Delete `apps/website/scripts/screenshot-demos.ts`.
- Remove `"dev:screenshot"` from `apps/website/package.json:7`.
- Delete `apps/website/public/screenshots/`.
- Audit `apps/website/scripts/lib/registry-processor.ts` + test for `public/screenshots` hardcoding.

**Expected result:** `rg "screenshot-demos|public/screenshots|dev:screenshot" apps/` returns nothing. `pnpm --filter registry build` succeeds.

---

## [ ] Phase 10 — Docs

**Scope:** update CLAUDE.md.

- Line 85: replace `pnpm dev:screenshot ...` with `pnpm test:visual # Visual regression + OG image generation`.
- Line 143 post-task step: replace `public/screenshots/{name}.png` instructions with `pnpm test:visual -- -g <name> --update-snapshots`.
- Add short note: "Registry demos MUST be deterministic — no `Math.random()`, `new Date()`, `Date.now()`."

**Expected result:** CLAUDE.md reflects new workflow and determinism rule.

---

## [ ] Phase 11 — Final validation

**Scope:** confirm end-to-end stability.

- Fresh checkout → `pnpm install` → dev server background → `pnpm test:visual`. All green.
- Run 5× consecutively. No diffs.
- `curl -s localhost:4418/preview/<name> | grep og:image` → correct path.
- Open OG URL in browser, confirm image.
- Commit in logical PRs: (1) phases 1-2 infra + determinism, (2) phases 3-7 pipeline, (3) phases 8-10 cleanup.

**Expected result:** deterministic, reproducible pipeline. Ready for Phase 2 (dark).

---

## Out of Scope (Phase 2 of overall project)

- `?theme=dark` handling + `ForceTheme` client component.
- Dark baselines `<name>-dark.png`.
- CI wiring + Linux re-baseline.
- `generateMetadata` branching for dark.
