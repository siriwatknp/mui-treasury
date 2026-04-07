/**
 * Used by: text-field, date-picker, select, autocomplete, button
 */
export const CONTROL_HEIGHTS = {
  sm: 32,
  md: 36,
  lg: 42,
};

/**
 * Touch device heights (+ for better touch targets)
 */
export const CONTROL_TOUCH_HEIGHTS = {
  sm: 34,
  md: 40,
  lg: 48,
};

/**
 * Media query for touch device sizing.
 * Default: touch input + mobile viewport (hybrid approach)
 * Alternatives:
 * - "(pointer: coarse)" - all touch devices regardless of screen size
 * - "(max-width: 768px)" - breakpoint only
 */
export const TOUCH_MEDIA_QUERY = "@media (max-width: 768px)";

/**
 * Used by: controls (MuiSwitch)
 * inset: space between track edge and thumb
 */
export const SWITCH_SIZES = {
  sm: { height: 22, width: 36, inset: 2 },
  md: { height: 28, width: 44, inset: 2 },
  lg: { height: 32, width: 52, inset: 3 },
};

export const SWITCH_TOUCH_SIZES = {
  sm: { height: 28, width: 44, inset: 2 },
  md: { height: 34, width: 56, inset: 3 },
  lg: { height: 40, width: 64, inset: 4 },
};
