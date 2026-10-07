# CLAUDE.md — mui-cli

Agent-facing CLI for theming Material UI. Major version = Material UI major (CLI 9.x ⇔ Material UI v9 + MUI X v9). Each build records the exact versions its data was generated from in `data/meta.json` (`builtWith`).

## Material UI source

- The source for the pinned versions lives in `vendor/<lib>@<version>/` (sparse, read-only, gitignored). Run `pnpm vendor` if missing.
- Read MUI code ONLY from `vendor/` — never from another checkout. Versions come from `versions.json`; installed `@mui/*` must equal the pins (`pnpm check-pins`).
- Bumping MUI: edit `versions.json` → `pnpm vendor` → update the exact devDependency → `pnpm check-pins` → regenerate data. Old vendor folders stay for side-by-side diffs.

## Verify before claiming done

```bash
pnpm test            # unit
pnpm test:browser    # renders in headless Chrome (needs Google Chrome)
pnpm check-pins
```

Regenerate data after a pin bump: `pnpm sync-demos` / `pnpm sync-demos-x` (Material UI / MUI X docs demos + compose analysis), `pnpm sync-seams` (seams, extracted by running MUI's style code; checks the derived graph against generated renders), then `pnpm sync-renders` (~20 min with `JOBS=6` parallel pages, default 4: confirms every row in a real render — generated `<Component>` renders first, docs demos for the rest — writes `data/material/renders.json`, ships the demos it relies on to `data/material/render-demos/`, records each component's default owner props, sets `verified` in seams.json; exits 1 on any mismatch). Run `sync-renders` after `sync-seams`, which keeps `verified` only for unchanged rows. Nothing renders through hand-written setups: generated renders (`src/lib/renders.mjs`, `ICON_CONTENT` for icon-bodied components) or recorded docs demos, slots found through element tags. `ONLY=MuiChip,MuiTab pnpm sync-renders` for a quick partial run (merges into the existing record). Then `pnpm sync-compositions` (~1 min): per component up to 4 docs demos that render it in context (core packages only, never a demo restyling it), confirmed to render it, plus up to 6 demos from its own docs page (`own`, core-only, not restyling it, confirmed; run by `verify <C> --all` only, not the whole-theme gate), written to `data/material/compositions.json` and shipped to `data/material/composition-demos/` — the cases `verify --all` runs beyond the record's variants; it also records which docs demos render each component directly (`direct`, shown by `mui component` for bases like InputBase). Real-content cases are hand-written, not synced: `data/material/content-cases/<Component>/<Case>.tsx` (a real usage; `export const type`/`typeInto` to type into it like a user; wrap fields that must share one height in `data-same-height="<group>"`, fields whose static labels must keep one gap in `data-same-gap="<group>"`; a case spanning components lives in `content-cases/_shared/` with `export const components = [...]` and runs once) — add files to cover more components; plain MUI must pass every one.

## Performance

Lookups must stay ≤ 40ms (Node alone is ~21ms); commands given a user theme (`--theme`) ≤ 150ms — load `createTheme` directly (`src/lib/userTheme.mjs`), never the `@mui/material/styles` barrel. Do version-fixed work at sync time, not per call: the runtime never loads `typescript` (sync only), and lookup commands never load `@mui/material`, `vite` or `playwright` — `test/module-graph.test.mjs` enforces it. Data is JSON behind `src/lib/data.mjs` / `src/lib/demos.mjs` / `src/lib/seams.mjs`. Renders go through a warm background server (`src/lib/renderServer.mjs` + `renderEngine.mjs`, one per project + CLI version + harness code, so editing the harness starts a fresh one; exits after 5 idle minutes; `mui server stop`). Don't edit harness files while `sync-renders` runs: Vite reloads the page and in-flight checks are lost; `MUI_CLI_NO_SERVER=1` renders in-process — run the browser suite both ways after touching rendering. Commands follow one pattern: `src/commands/<name>.mjs` declares name/description/options only; the implementation lives in `<name>.run.mjs` and is imported when that command runs.

## Rules

- Data access goes through `src/lib/data.mjs` (`loadData(lib, name)`, `builtWith()`), with data under `data/material/` and `data/x/`.
- No local machine paths in shipped code.
- No code comments unless the why is non-obvious.

`mui recommend` reads `data/material/recommendations.json` (hand-written): each entry names the theme options it covers, a `since` taken from MUI's release notes (never guessed), `requires` as web-features ids, and an `adopted`/`default` check on the created theme. `pnpm check-pins` fails when the pinned Material UI declares a theme option that is neither in an entry's `options` nor in `reviewed`, so a pin bump forces a decision on new options. Targets come from `src/lib/targets.mjs` (browserslist config → Electron → Vite build target / Next.js default → assumed `defaults`).
