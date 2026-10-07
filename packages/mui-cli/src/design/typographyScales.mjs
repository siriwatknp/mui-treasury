/**
 * @file Three app-scale typography ramps — replacing MUI's marketing-scale
 * defaults (h1 96px / weight 300) — chosen by the base font size. Every
 * line-height is an INTEGER px (mostly on a 4px baseline grid); headings are
 * 600–700, not thin. Sizes in px; body1 = the base font size (14 / 16 / 17).
 * `compile-theme` applies the ramp and lets any explicit DESIGN.md variant win.
 * Researched against Material 3, Tailwind, Apple HIG, IBM Carbon.
 */

/** variant spec: px size, weight, px line-height (integer), optional letter-spacing. */
const v = (size, weight, line, letterSpacing) => ({
  fontSize: `${size}px`,
  fontWeight: weight,
  lineHeight: `${line}px`,
  ...(letterSpacing ? { letterSpacing } : {}),
});

export const typographyScales = {
  // dense · analytical / admin / enterprise
  compact: {
    h1: v(30, 700, 36, '-0.5px'),
    h2: v(26, 700, 32, '-0.25px'),
    h3: v(22, 600, 28),
    h4: v(20, 600, 28),
    h5: v(18, 600, 24),
    h6: v(16, 600, 24),
    subtitle1: v(14, 600, 20),
    subtitle2: v(13, 600, 20),
    body1: v(14, 400, 20),
    body2: v(13, 400, 20),
    button: v(13, 600, 20),
    caption: v(12, 400, 16),
    overline: v(11, 600, 16, '0.5px'),
  },
  // standard apps · the default
  comfortable: {
    h1: v(40, 700, 48, '-0.5px'),
    h2: v(32, 700, 40, '-0.25px'),
    h3: v(28, 600, 36),
    h4: v(24, 600, 32),
    h5: v(20, 600, 28),
    h6: v(18, 600, 24),
    subtitle1: v(16, 600, 24),
    subtitle2: v(14, 600, 20),
    body1: v(16, 400, 24),
    body2: v(14, 400, 20),
    button: v(14, 600, 20),
    caption: v(12, 400, 16),
    overline: v(12, 600, 16, '0.5px'),
  },
  // consumer · content-forward / iOS-style
  spacious: {
    h1: v(48, 700, 56, '-0.5px'),
    h2: v(40, 700, 48, '-0.25px'),
    h3: v(34, 600, 40),
    h4: v(28, 600, 36),
    h5: v(24, 600, 32),
    h6: v(20, 600, 28),
    subtitle1: v(18, 600, 28),
    subtitle2: v(16, 600, 24),
    body1: v(17, 400, 26),
    body2: v(15, 400, 24),
    button: v(16, 600, 24),
    caption: v(13, 400, 20),
    overline: v(12, 600, 16, '0.5px'),
  },
};

/**
 * Pick a scale from the base font px (else control-height px, else comfortable).
 * @param {{ baseFontPx?: number|null, controlHeightPx?: number|null }} [opts]
 */
export function pickScale({ baseFontPx } = {}) {
  if (baseFontPx != null) {
    return baseFontPx <= 14 ? 'compact' : baseFontPx >= 17 ? 'spacious' : 'comfortable';
  }
  return 'comfortable';
}
