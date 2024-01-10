import { Breakpoint } from "@mui/system";
import { BREAKPOINT_KEYS } from "./muiBreakpoints";

export const pickNearestBreakpoint = <T>(
  value?: Partial<Record<Breakpoint, T>>,
  currentBreakpoint?: Breakpoint
): T | undefined => {
  if (!value || !currentBreakpoint) return undefined;
  const breakpointIndex = BREAKPOINT_KEYS.indexOf(currentBreakpoint);
  if (breakpointIndex === -1) {
    throw new Error(
      `Breakpoint: "${currentBreakpoint}" does not exist in [${BREAKPOINT_KEYS.join(
        ","
      )}]`
    );
  }

  // [breakpoint, ..., 'xs']
  const possibleBreakpoints = BREAKPOINT_KEYS.slice(
    0,
    BREAKPOINT_KEYS.indexOf(currentBreakpoint) + 1
  ).reverse();

  let result = value[currentBreakpoint];
  if (result) return result;

  // return the first valid value
  for (const bp of possibleBreakpoints) {
    if (result !== undefined) return result;
    result = value[bp];
  }
  return result;
};
