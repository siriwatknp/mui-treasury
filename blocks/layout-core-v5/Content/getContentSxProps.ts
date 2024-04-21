import { Breakpoint } from "@mui/system";
import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { createWidthInterface } from "../Width/WidthModel";
import { combineBreakpoints } from "../utils/combineBreakpoints";
import { CONTENT_ID, FOOTER_ID } from "../utils/constant";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { toValidCssValue } from "../utils/toValidCssValue";
import { Responsive } from "../utils/types";

export const getContentSxProps = (
  modules: {
    leftEdgeSidebar?: EdgeSidebarBuilder;
    rightEdgeSidebar?: EdgeSidebarBuilder;
  },
  id?: CONTENT_ID | FOOTER_ID
) => {
  const result: {
    width: Responsive<number | string>;
    marginLeft: Responsive<string>;
    marginRight: Responsive<string>;
  } = { width: {}, marginLeft: {}, marginRight: {} };
  const { leftEdgeSidebar, rightEdgeSidebar } = modules;

  const leftOccupiedSpace = leftEdgeSidebar?.getOccupiedSpace() ?? {};
  const rightOccupiedSpace = rightEdgeSidebar?.getOccupiedSpace() ?? {};

  const breakpoints = combineBreakpoints(leftOccupiedSpace, rightOccupiedSpace);
  for (const key of breakpoints) {
    const bp = key as Breakpoint;
    let effectLeft = createWidthInterface(0);
    if (leftEdgeSidebar) {
      effectLeft = createWidthInterface(
        leftEdgeSidebar.isFlexiblePersistent(bp, id)
          ? 0
          : pickNearestBreakpoint(leftOccupiedSpace, bp)
      );

      const occupiedSpace = leftOccupiedSpace[bp];
      if (occupiedSpace) {
        result.marginLeft[bp] = toValidCssValue(occupiedSpace);
      }
    }

    let effectRight = createWidthInterface(0);
    if (rightEdgeSidebar) {
      effectRight = createWidthInterface(
        rightEdgeSidebar.isFlexiblePersistent(bp, id)
          ? 0
          : pickNearestBreakpoint(rightOccupiedSpace, bp)
      );

      const occupiedSpace = rightOccupiedSpace[bp];
      if (occupiedSpace) {
        result.marginRight[bp] = toValidCssValue(occupiedSpace);
      }
    }

    result.width[bp] = effectLeft.combine(effectRight).getStyle().width;
  }
  return result;
};
