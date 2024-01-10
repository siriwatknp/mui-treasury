import { Breakpoint } from "@mui/material";
import { BREAKPOINT_KEYS } from "./muiBreakpoints";
import { Responsive } from "./types";

type Result = any;

/**
 *
 *
 * @param getValue the value the result object (undefined will be remove from result)
 * @param options
 *  - breakpoints: list of Breakpoints to be iterate
 *  - initialValue: if provided, will be used to compare if the value from getValue should be added or not
 * @returns object that can be passed to <MuiComponent sx={...} />
 */
export const createSxResult = <T extends Result = Result>(
  getValue: (bp: Breakpoint, lastValue: T | undefined) => T | undefined,
  options?: { breakpoints?: Breakpoint[]; initialValue?: T }
) => {
  const { breakpoints = BREAKPOINT_KEYS, initialValue } = options ?? {};
  const result: Responsive<T> = {};
  let lastValue: T | undefined = undefined;
  for (const bp of breakpoints) {
    const value = getValue(bp, lastValue);
    if (value !== undefined) {
      // only assign value if not undefined

      if (lastValue === undefined) {
        // 1st valid value
        result[bp] = value;
        lastValue = value;

        if (initialValue !== undefined && initialValue === value) {
          // if same as initial, deleted from object
          delete result[bp];
        }
      } else {
        if (lastValue !== value) {
          // next valid value that is not the same as lastValue and so on
          result[bp] = value;

          lastValue = value;
        }
      }
    }
  }
  return result as Responsive<NonNullable<T>>;
};
