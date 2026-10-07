/**
 * @file Wiring registry. Most components use the GENERIC route (the authored slot,
 * `&.Mui-<state>`) and need no entry; register only components whose states route to
 * a different slot/selector. Add a component: create `Mui<X>.mjs` + one line here.
 */
import { wiring as switchWiring, reset as switchReset } from './MuiSwitch.mjs';

// slot × state routing
export const WIRING = { MuiSwitch: switchWiring };
// unconditional per-component normalization (opacity resets, etc.)
export const RESET = { MuiSwitch: switchReset };
