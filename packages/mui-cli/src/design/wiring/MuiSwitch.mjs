/**
 * @file Switch wiring — how an authored (component-slot × state) maps to the MUI
 * slot + selector it actually lands on. The author writes clean `track`/`thumb`
 * slots; the compiler routes cross-slot where MUI needs it (the `checked`/`disabled`/
 * `focusVisible` CLASS lives on `switchBase`, but styles the sibling `.MuiSwitch-track`).
 * Verified against @mui/material Switch.js. Slots with no entry fall back to the
 * generic route (the authored slot, `&.Mui-<state>`).

 */
export const wiring = {
  track: {
    default: { slot: 'track' },
    checked: { slot: 'switchBase', selector: '&.Mui-checked + .MuiSwitch-track' },
    disabled: { slot: 'switchBase', selector: '&.Mui-disabled + .MuiSwitch-track' },
    // focus ring shows on the track, but the class is on switchBase
    focusVisible: { slot: 'switchBase', selector: '&.Mui-focusVisible + .MuiSwitch-track' },
  },
  thumb: {
    default: { slot: 'thumb' },
  },
};

/**
 * Unconditional normalization (a "reset") the cascade ALWAYS emits for the component,
 * independent of the DESIGN.md — to neutralize a MUI default that fights the design.
 * MUI ships the track translucent (base + checked `opacity` ~0.38/0.5), washing out
 * solid track colours; reset it to 1 so authored colours render solid. Disabled is left
 * alone (MUI's dimming = the intended faded disabled look). The cascade's own writes
 * merge ON TOP of this (so a checked track = our colour + opacity:1).
 */
export const reset = {
  track: { opacity: 1 },
  switchBase: { '&.Mui-checked + .MuiSwitch-track': { opacity: 1 } },
};
