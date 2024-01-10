import { Breakpoints, Breakpoint } from "@mui/system";
import { BREAKPOINT_KEYS } from "./muiBreakpoints";

export const mapWidthToScreen = (
  width: number | undefined,
  breakpoints: Breakpoints
) => {
  if (!width) return undefined;
  let screen = "";
  let found = false;
  const newKeys = [...BREAKPOINT_KEYS];
  newKeys.reverse().forEach((breakpoint) => {
    if (width >= breakpoints.values[breakpoint] && !found) {
      screen = breakpoint;
      found = true;
    }
  });
  return screen as Breakpoint;
};
