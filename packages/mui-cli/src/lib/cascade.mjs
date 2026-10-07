/**
 * @file State-cascade compiler — DESIGN.md `components.<Seam>.cascade` → the
 * component's `styleOverrides.root.variants[]`, the color/state axis. A variant is a `props`
 * matcher, a STATE is a nested selector (`&:hover`, `&.Mui-focusVisible`, …), a
 * SLOT is a cssProp. The compiler emits every state in a FIXED priority order so
 * MUI's palette-derived defaults never win the cascade — declared states use the
 * author's slots; an omitted state is DERIVED (never left to MUI). Pure data in,
 * plain style object out; `@mui/material/styles` (createTheme/alpha/darken) is
 * injected so color roles resolve to real hex.
 */
import { unflattenColors, parsePx } from './globals.mjs';
import { WIRING, RESET } from '../design/wiring/index.mjs';

/** Recursive merge (geometry from the seam catalog + the color cascade share slots). */
function deepMerge(target, source) {
  for (const [k, v] of Object.entries(source)) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      target[k] = target[k] && typeof target[k] === 'object' && !Array.isArray(target[k]) ? target[k] : {};
      deepMerge(target[k], v);
    } else {
      target[k] = v;
    }
  }
}

// State → nested selector, emitted in this order. Equal CSS specificity, so
// source order IS the cascade: default < hover < focus-visible < active <
// disabled. active AFTER focus-visible → a pressed-while-focused button shows
// the pressed treatment, not the resting one. disabled terminal.
// State → class selector (generic). Combos join with '+': `checked+disabled` →
// `&.Mui-checked.Mui-disabled`.
const STATE_CLASS = { hover: '&:hover', active: '&:active', focusVisible: '&.Mui-focusVisible', checked: '&.Mui-checked', disabled: '&.Mui-disabled' };
const STATE_NAMES = new Set(['default', ...Object.keys(STATE_CLASS)]);
const isState = (k) => k.split('+').every((s) => STATE_NAMES.has(s));
const stateSelector = (state) =>
  !state || state === 'default'
    ? ''
    : state
        .split('+')
        .map((s, i) => {
          const sel = STATE_CLASS[s] ?? `&.Mui-${s}`;
          return i === 0 ? sel : sel.replace(/^&/, '');
        })
        .join('');
// (component-slot × state) → where it lands: generically the authored slot at
// `&.Mui-<state>`, or a per-component cross-slot route (data/wiring/).
const resolveWiring = (component, slot, state) => {
  const w = WIRING[component]?.[slot]?.[state];
  return w ? { slot: w.slot ?? slot, selector: w.selector ?? '' } : { slot, selector: stateSelector(state) };
};
const place = (so, slot, selector, style) => {
  so[slot] = so[slot] ?? {};
  if (selector) {
    so[slot][selector] = { ...so[slot][selector], ...style };
  } else {
    Object.assign(so[slot], style);
  }
};
// interactive states derived-by-default in VARIANT mode (Button); slot-mode
// components (Switch) author their states explicitly.
const INTERACTIVE = ['hover', 'focusVisible', 'active', 'disabled'];

// Slot vocab → CSS prop (color slots; shadow/transform/outline are special).
const COLOR_SLOT = { background: 'backgroundColor', foreground: 'color', border: 'borderColor' };

// a gradient is a color-aspect background value that can't be a backgroundColor /
// the color-typed `--variant-*` var — it emits as backgroundImage instead.
const isGradient = (v) =>
  typeof v === 'string' && /^(repeating-)?(linear|radial|conic)-gradient\(/.test(v.trim());

// Ride Button's own var system: a cascade override of a color slot on a built-in
// variant emits the `--variant-*` VAR Button consumes (rest/hover/active/focus)
// instead of a raw prop — same vocabulary, no parallel schema. DISABLED is excluded
// on purpose (Button sets disabled colors DIRECTLY, so a var reset would lose); a
// component/variant with no entry falls back to the direct prop. This mirrors
// @mui/material Button.js's fixed `--variant-*` contract (7 names); the neobrutalism/
// radix example renders + the G4 cascade tests flag any drift.
const VARIANT_VAR = {
  MuiButton: {
    'contained|background': '--variant-containedBg',
    'contained|foreground': '--variant-containedColor',
    'text|background': '--variant-textBg',
    'text|foreground': '--variant-textColor',
    'outlined|background': '--variant-outlinedBg',
    'outlined|foreground': '--variant-outlinedColor',
    'outlined|border': '--variant-outlinedBorder',
  },
};

// Conditional re-assert (retired cascadeGuards, now inlined — it's cascade-only): a
// customized disabled foreground clobbers MUI's loading-center label-hide at equal
// specificity → re-assert transparent at the higher-specificity compound selector.
const COLOR_REASSERTS = {
  MuiButton: [
    {
      when: { nested: '&.Mui-disabled', prop: 'color' },
      add: { '&.Mui-disabled.MuiButton-loadingPositionCenter': { color: 'transparent' } },
    },
  ],
};

/** A resolution theme (real hex, NO cssVariables) for role → color lookups. */
export function resolutionTheme(front, muiStyles) {
  const theme = muiStyles.createTheme({ palette: unflattenColors(front.colors ?? {}) });
  return theme;
}

/** `primary` → primary.main · `primary-dark` → primary.dark · `ink` → ink · `grey-200` → grey[200]. */
function paletteAt(theme, role) {
  const parts = role.split('-');
  let node = theme.palette;
  if (parts.length === 1) {
    const n = node[parts[0]];
    return typeof n === 'string' ? n : n?.main;
  }
  for (const p of parts) {
    node = node?.[p];
  }
  return typeof node === 'string' ? node : undefined;
}

/** A color value → hex/rgba. `<role>` · `<role> <pct>%` (alpha) · raw `#|rgb|hsl` · `none`/`transparent` pass through. */
export function resolveColor(value, theme, muiStyles) {
  if (value == null) {
    return undefined;
  }
  const v = String(value).trim();
  if (!v || v === 'none' || v === 'transparent' || v === 'currentColor') {
    return v || undefined;
  }
  if (/^(#|rgb|hsl)/.test(v)) {
    return v;
  }
  const [role, pct] = v.split(/\s+/);
  const hex = paletteAt(theme, role);
  if (hex == null) {
    return v; // unknown role → pass through raw
  }
  const m = pct != null && /^(\d*\.?\d+)%$/.exec(pct);
  return m ? muiStyles.alpha(hex, Number(m[1]) / 100) : hex;
}

/** Navigate `theme.vars.palette` by a dash-role → its `var(--mui-palette-*, fallback)` string (family single-seg → its `.main`). */
function varAt(vp, role) {
  const parts = role.split('-');
  if (parts.length === 1) {
    const n = vp[parts[0]];
    return typeof n === 'string' ? n : n?.main;
  }
  let node = vp;
  for (const p of parts) {
    node = node?.[p];
  }
  return typeof node === 'string' ? node : undefined;
}

/**
 * A color value → a SCHEME-FLIPPING CSS-var ref (via `theme.vars.palette`, which
 * carries a light-hex fallback). `<role>` → `var(--mui-palette-<role>, hex)`;
 * `<role> <pct>%` → native-color alpha (`theme.alpha` → an `oklch(from var(…))`
 * relative color — NO `*Channel` token, per the native-color migration); raw
 * `#|rgb|hsl` and `none`/`transparent` pass through; unknown role → raw. One
 * emission, correct under BOTH light and dark — the dark palette redefines the
 * same vars. `theme` is a `cssVariables.nativeColor` theme (carries `.alpha`).
 */
export function resolveRef(value, theme) {
  if (value == null) {
    return undefined;
  }
  const v = String(value).trim();
  if (!v || v === 'none' || v === 'transparent' || v === 'currentColor') {
    return v || undefined;
  }
  if (/^(#|rgb|hsl)/.test(v)) {
    return v;
  }
  const [role, a] = v.split(/\s+/);
  const base = varAt(theme.vars.palette, role);
  if (base == null) {
    return v; // unknown role → raw
  }
  // `<role> <pct>%` — pct is a percentage of full opacity (oklch alpha), e.g. `ink 20%`.
  const m = a != null && /^(\d*\.?\d+)%$/.exec(a);
  return m ? theme.alpha(base, Number(m[1]) / 100) : base;
}

/**
 * `"4 4 0 ink"` → `4px 4px 0px <ref>` (offsets/blur[/spread] then a color role).
 * A bare token that names a `shadows:` entry → that entry's raw CSS (multi-layer
 * / `inset` box-shadows that can't fit a terse triple live there). `none` → none.
 */
function resolveShadow(value, ref, shadows) {
  const v = String(value).trim();
  if (v === 'none') {
    return 'none';
  }
  if (shadows && Object.prototype.hasOwnProperty.call(shadows, v)) {
    return String(shadows[v]);
  }
  const toks = v.split(/\s+/);
  const nums = [];
  while (toks.length && /^-?\d+(?:\.\d+)?$/.test(toks[0])) {
    nums.push(toks.shift());
  }
  const color = ref(toks.join(' ')) ?? '#000000';
  const [x = 0, y = 0, blur = 0, spread] = nums;
  const geo = spread != null ? `${x}px ${y}px ${blur}px ${spread}px` : `${x}px ${y}px ${blur}px`;
  return `${geo} ${color}`;
}

/** `"-2 -2"` → `translate(-2px, -2px)`. `none` → none. */
// motion aspect: `scale <n>` / `rotate <deg>` / `[translate] x y` (bare = translate,
// px). Single transform per value (compose later if a real case needs it).
function resolveTransform(value) {
  const v = String(value).trim();
  if (v === 'none') {
    return 'none';
  }
  const parts = v.split(/\s+/);
  if (parts[0] === 'scale') {
    return `scale(${parts.slice(1).join(', ') || '1'})`;
  }
  if (parts[0] === 'rotate') {
    const a = parts[1] ?? '0';
    return `rotate(${/(deg|rad|turn|grad)$/.test(a) ? a : `${a}deg`})`;
  }
  if (parts[0] === 'translate') {
    parts.shift(); // explicit `translate x y`
  }
  const [x = 0, y = 0] = parts;
  return `translate(${x}px, ${y}px)`;
}

/** `"3 ring"` → `{ outline: '3px solid <ref>', outlineOffset: '2px' }` (optional 3rd = offset). `none` → outline none. */
function resolveOutline(value, ref) {
  const v = String(value).trim();
  if (v === 'none') {
    return { outline: 'none' };
  }
  const [w, role, offset] = v.split(/\s+/);
  return { outline: `${parsePx(w) ?? 3}px solid ${ref(role)}`, outlineOffset: `${parsePx(offset) ?? 2}px` };
}

/**
 * One state's declared slots → a CSS style object (colors via `ref` → var-refs).
 * A color slot rides the catalog: if `varMap` has a `--variant-*` for this
 * (variant, slot) AND the state isn't disabled, emit the VAR; else the direct prop.
 */
function slotStyle(slots, ref, shadows, varMap, variant, state) {
  const style = {};
  const useVar = (slot) => (state !== 'disabled' ? varMap?.[`${variant}|${slot}`] : undefined);
  for (const [slot, raw] of Object.entries(slots)) {
    if (raw == null) {
      continue;
    }
    if (slot === 'outline') {
      Object.assign(style, resolveOutline(raw, ref));
    } else if (slot === 'shadow') {
      style.boxShadow = resolveShadow(raw, ref, shadows);
    } else if (slot === 'transform') {
      style.transform = resolveTransform(raw);
    } else if (slot === 'border') {
      // border color; `none` → transparent (keeps the structural border-width so
      // layout doesn't shift between variants).
      const c = ref(raw);
      const val = c === 'none' ? 'transparent' : c;
      style[useVar('border') || 'borderColor'] = val;
    } else if (COLOR_SLOT[slot]) {
      const val = ref(raw);
      if (slot === 'background' && isGradient(val)) {
        // renders over the fill; a gradient can't ride the color-typed var
        style.backgroundImage = val;
      } else {
        style[useVar(slot) || COLOR_SLOT[slot]] = val;
      }
    }
  }
  return style;
}

/**
 * Derive an OMITTED interactive state so the seam is always emitted (MUI's
 * default never leaks through a gap). Fully scheme-correct: hover/active darken
 * via `theme.darken` (native-color `color-mix` on the var — flips per scheme),
 * focus ring + disabled via `theme.vars` roles.
 */
function deriveState(state, defaultSlots, theme, ref, varMap, variant) {
  const bg = ref(defaultSlots.background);
  const tintable =
    typeof bg === 'string' && bg !== 'none' && bg !== 'transparent' && !isGradient(bg);
  // hover/active are not disabled → ride the background var when the catalog has one.
  const bgSlot = (val) => ({ [varMap?.[`${variant}|background`] || 'backgroundColor']: val });
  if (state === 'hover') {
    return tintable ? bgSlot(theme.darken(bg, 0.12)) : {};
  }
  if (state === 'active') {
    return tintable ? bgSlot(theme.darken(bg, 0.24)) : {};
  }
  const vp = theme.vars.palette;
  if (state === 'focusVisible') {
    return vp.ring ? { outline: `3px solid ${vp.ring}`, outlineOffset: '2px' } : {};
  }
  // disabled — the MUI-standard treatment via action vars (scheme-correct)
  return { color: vp.action.disabled, backgroundColor: vp.action.disabledBackground, boxShadow: 'none' };
}

const TRANSITION = 'transform 80ms ease, box-shadow 80ms ease, background-color 80ms ease';

/**
 * `front` → `{ <Seam>: { styleOverrides: { root: { …structure, variants[] } } } }`
 * for every `components.<Seam>` that carries a `cascade`. `muiStyles` is the
 * injected `@mui/material/styles` namespace.
 */
export function buildCascade(front, muiStyles) {
  const out = {};
  const comps = front?.components ?? {};
  const palette = unflattenColors(front.colors ?? {});
  // nativeColor theme: `.vars.palette` gives scheme-flipping var-refs (light-hex
  // fallback), `.alpha`/`.darken` emit oklch/color-mix on those vars — no Channel.
  const theme = muiStyles.createTheme({ cssVariables: { nativeColor: true }, colorSchemes: { light: { palette } } });
  const ref = (v) => resolveRef(v, theme);
  const shadows = front.shadows ?? {}; // named multi-layer box-shadow tokens
  for (const [seam, spec] of Object.entries(comps)) {
    if (!spec || typeof spec !== 'object' || !spec.cascade) {
      continue;
    }
    const varMap = VARIANT_VAR[seam] ?? {};
    const so = {}; // styleOverrides, keyed by TARGET slot

    // structure = the sizing/shape aspect (border-width, radius) on `root`. Type
    // character is GLOBAL typography (DESIGN.md `typography:`), not per-component.
    const structure = spec.structure ?? {};
    const rootScalars = { transition: TRANSITION };
    if (structure.border) {
      const [w, bs = 'solid'] = String(structure.border).split(/\s+/);
      rootScalars.borderWidth = parsePx(w) ?? w;
      rootScalars.borderStyle = bs;
    }
    const radius = parsePx(structure.radius);
    if (radius != null) {
      rootScalars.borderRadius = radius;
    }
    so.root = rootScalars;

    // Unconditional per-component reset (e.g. Switch track opacity:1) — applied FIRST
    // so the design's cascade writes merge on top.
    for (const [slot, styles] of Object.entries(RESET[seam] ?? {})) {
      for (const [k, v] of Object.entries(styles)) {
        place(so, slot, k.startsWith('&') ? k : '', k.startsWith('&') ? v : { [k]: v });
      }
    }

    // cascade is keyed by COMPONENT-SLOT (root | track | thumb | …). A slot's children
    // are either VARIANTS (Button: props-matched, on that slot) or STATES directly
    // (Switch: wiring-routed to their real MUI slot/selector).
    for (const [slotKey, slotSpec] of Object.entries(spec.cascade)) {
      const hasVariants = Object.keys(slotSpec).some((k) => !isState(k));
      if (hasVariants) {
        const variants = so[slotKey]?.variants ?? [];
        for (const [variant, states] of Object.entries(slotSpec)) {
          const baseSlots = states.default ?? {};
          const style = { ...slotStyle(baseSlots, ref, shadows, varMap, variant, 'default') };
          const stateKeys = [
            ...new Set([...INTERACTIVE, ...Object.keys(states).filter(isState)]),
          ].filter((s) => s !== 'default');
          for (const state of stateKeys) {
            const st =
              state in states
                ? slotStyle(states[state], ref, shadows, varMap, variant, state)
                : INTERACTIVE.includes(state)
                  ? deriveState(state, baseSlots, theme, ref, varMap, variant)
                  : {};
            if (Object.keys(st).length) {
              style[resolveWiring(seam, slotKey, state).selector] = st;
            }
          }
          variants.push({ props: { variant }, style });
        }
        so[slotKey] = { ...so[slotKey], variants };
      } else {
        for (const [state, aspects] of Object.entries(slotSpec)) {
          const st = slotStyle(aspects, ref, shadows, varMap, undefined, state);
          if (!Object.keys(st).length) {
            continue;
          }
          const { slot: target, selector } = resolveWiring(seam, slotKey, state);
          place(so, target, selector, st);
        }
      }
    }

    // Re-assert a MUI base-state style the compiled cascade would clobber (loading-
    // center). Trigger reads the OUTPUT on `root` (base + variants).
    const wrote = (node, when) => node?.[when.nested]?.[when.prop] != null;
    for (const reassert of COLOR_REASSERTS[seam] ?? []) {
      const rv = so.root?.variants ?? [];
      if (wrote(so.root, reassert.when) || rv.some((v) => wrote(v.style, reassert.when))) {
        so.root = { ...so.root, ...reassert.add };
      }
    }
    out[seam] = { styleOverrides: so };
  }
  return out;
}
