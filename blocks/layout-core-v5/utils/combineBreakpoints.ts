import { Breakpoint } from "@mui/system";
import { BREAKPOINT_KEYS } from "./muiBreakpoints";
import { Responsive } from "./types";

export const sortBreakpoints = (breakpoints: Breakpoint[]): Breakpoint[] =>
  breakpoints.sort(
    (a, b) => BREAKPOINT_KEYS.indexOf(a) - BREAKPOINT_KEYS.indexOf(b)
  );

export const combineBreakpoints = (
  ...args: (Responsive<any> | Breakpoint[])[]
): Breakpoint[] => {
  let result: Breakpoint[] = [];
  args.forEach((item) => {
    const breakpoints = Array.isArray(item)
      ? item
      : (Object.keys(item) as Breakpoint[]);
    breakpoints.forEach((k) => {
      if (!result.includes(k)) {
        result.push(k);
      }
    });
  });
  return sortBreakpoints(result);
};
