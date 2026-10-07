/**
 * @file Globals mapping — DESIGN.md front-matter (getdesign.md MUI dialect) →
 * `createTheme` options. The deterministic inverse of `mui:generate-design-md`'s
 * forward pass: dash-flattened `colors` un-nest into `palette`, the numeric
 * `rounded`/`spacing` scales collapse back to their base (`shape.borderRadius`,
 * `theme.spacing`), and `typography` variants pass through. Agent judgment never
 * enters here — every field maps by rule. Consumed by `mui compile-theme`.
 */

/** '8px' → 8 · '0.5rem' → 8 · 8 → 8 · null on anything else. */
export function parsePx(value) {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : null;
  }
  if (typeof value !== 'string') {
    return null;
  }
  const px = value.match(/^(-?\d+(?:\.\d+)?)px$/);
  if (px) {
    return parseFloat(px[1]);
  }
  const rem = value.match(/^(-?\d+(?:\.\d+)?)rem$/);
  if (rem) {
    return parseFloat(rem[1]) * 16;
  }
  const bare = value.match(/^-?\d+(?:\.\d+)?$/);
  return bare ? parseFloat(value) : null;
}

/**
 * Un-flatten dash-separated `colors` back into a nested `palette`.
 * `primary-main` → palette.primary.main · `grey-500` → palette.grey['500'] ·
 * `background-paper` → palette.background.paper · single-segment reals
 * (`divider`) stay top-level. Bare `primary`/`secondary` linter aliases (a
 * `<key>-main` sibling exists) are dropped — they re-derive from `.main`.
 */
export function unflattenColors(colors) {
  if (!colors || typeof colors !== 'object') {
    return {};
  }
  const palette = {};
  for (const [key, value] of Object.entries(colors)) {
    const segments = key.split('-');
    if (segments.length === 1 && `${key}-main` in colors) {
      continue; // alias of <key>-main
    }
    let node = palette;
    for (let i = 0; i < segments.length - 1; i += 1) {
      const seg = segments[i];
      if (typeof node[seg] !== 'object' || node[seg] === null) {
        node[seg] = {};
      }
      node = node[seg];
    }
    node[segments[segments.length - 1]] = value;
  }
  return palette;
}

/** `rounded` scale → base `shape.borderRadius` (its `1` step, px). */
export function borderRadiusFrom(rounded) {
  if (!rounded || typeof rounded !== 'object') {
    return null;
  }
  return parsePx(rounded['1'] ?? rounded.DEFAULT ?? rounded.unit);
}

/** `spacing` scale → base `theme.spacing` unit (its `1` step, px). */
export function spacingBaseFrom(spacing) {
  if (!spacing || typeof spacing !== 'object') {
    return null;
  }
  return parsePx(spacing['1'] ?? spacing.unit);
}

/**
 * Pass typography through: variant objects keep their fields (all-digit
 * `fontWeight` → number, MUI's idiom); root-level scalar meta (`fontFamily`,
 * `htmlFontSize`, …) passes through as-is — `fontFamily` is how you rebrand ALL
 * text, applied by createTheme to every variant.
 */
export function mapTypography(typography) {
  if (!typography || typeof typography !== 'object') {
    return {};
  }
  const out = {};
  for (const [key, spec] of Object.entries(typography)) {
    if (typeof spec === 'string' || typeof spec === 'number') {
      // root meta — fontFamily passes through; the base fontSize/htmlFontSize
      // are px NUMBERS in MUI, so coerce a rem/px value (e.g. '0.875rem' → 14)
      out[key] = key === 'fontSize' || key === 'htmlFontSize' ? (parsePx(spec) ?? spec) : spec;
      continue;
    }
    if (!spec || typeof spec !== 'object') {
      continue;
    }
    const entry = { ...spec };
    if (typeof entry.fontWeight === 'string' && /^\d+$/.test(entry.fontWeight)) {
      entry.fontWeight = Number(entry.fontWeight);
    }
    out[key] = entry;
  }
  return out;
}

/**
 * DESIGN.md front-matter → `createTheme` options fragment. Only sections
 * present in the source are emitted (no empty `palette:` etc.), so the caller
 * can spread it straight into the theme options object.
 */
export function mapGlobals(front) {
  const out = {};
  if (front?.colors) {
    const palette = unflattenColors(front.colors);
    if (Object.keys(palette).length) {
      out.palette = palette;
    }
  }
  if (front?.typography) {
    const typography = mapTypography(front.typography);
    if (Object.keys(typography).length) {
      out.typography = typography;
    }
  }
  const borderRadius = borderRadiusFrom(front?.rounded);
  if (borderRadius != null) {
    out.shape = { borderRadius };
  }
  const spacing = spacingBaseFrom(front?.spacing);
  if (spacing != null) {
    out.spacing = spacing;
  }
  return out;
}
