import { Breakpoint } from "@mui/material/styles";
import { EdgeSidebarBuilder } from "./EdgeSidebarBuilder";
import { Responsive } from "../utils/types";
import { combineBreakpoints } from "../utils/combineBreakpoints";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";

export const getEdgeOffsetSxProps = (
  edgeSidebar: EdgeSidebarBuilder | undefined,
  sxClippedHeight: Responsive<string | number>
) => {
  const result: Responsive<number | string> = {};
  if (edgeSidebar && edgeSidebar.id) {
    const breakpoints = combineBreakpoints(edgeSidebar.config, sxClippedHeight);
    for (const key of breakpoints) {
      const bp = key as Breakpoint;
      result[bp] = pickNearestBreakpoint(sxClippedHeight, bp) ?? 0;
    }
  }
  return {
    ...(Object.keys(result).length > 0 && { height: result }),
  };
};
