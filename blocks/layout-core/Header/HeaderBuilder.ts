import { Breakpoint } from "@mui/system";
import {
  DEFAULT_THEME,
  LEFT_EDGE_SIDEBAR_ID,
  RIGHT_EDGE_SIDEBAR_ID,
} from "../utils/constant";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { Responsive } from "../utils/types";
import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { combineBreakpoints } from "../utils/combineBreakpoints";
import { createWidthInterface } from "../Width/WidthModel";
import { toValidCssValue } from "../utils/toValidCssValue";
import { ResponsiveBuilder } from "../shared/ResponsiveBuilder";

export type ClippableElement = LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID;

export type HeaderConfig = {
  /**
   * css position. For calculating offset in other components.
   */
  position: "relative" | "sticky" | "fixed";
  /**
   * css height, support all unit that works in CSS. For calculating offset in other components.
   */
  height: number | string;
  /**
   * css top, support all unit that works in CSS.
   */
  top?: number | string;
  /**
   * to identify which Header stay on top of other (the larger number).
   */
  layer?: number;
  /**
   * If `true`, stay on top of EdgeSidebar and EdgeSidebar's width have no effect on Header.
   */
  clipped?: boolean | Partial<Record<ClippableElement, boolean>>;
};
export type HeaderSetupParams = {
  config: Responsive<HeaderConfig>;
  hidden?: boolean | Breakpoint[];
};

export class HeaderBuilder extends ResponsiveBuilder<HeaderConfig> {
  effectedBy: {
    leftEdgeSidebar?: EdgeSidebarBuilder;
    rightEdgeSidebar?: EdgeSidebarBuilder;
  } = {};

  constructor(params: HeaderSetupParams) {
    super(params);
  }

  isClipped(clippableId: ClippableElement, breakpoint: Breakpoint) {
    const headerBreakpointConfig = pickNearestBreakpoint(
      this.config,
      breakpoint
    );
    if (
      typeof headerBreakpointConfig?.clipped === "boolean" &&
      headerBreakpointConfig.clipped
    ) {
      return true;
    }
    return (
      typeof headerBreakpointConfig?.clipped === "object" &&
      headerBreakpointConfig?.clipped[clippableId]
    );
  }

  isAboveSomeEdgeSidebar(breakpoint: Breakpoint) {
    const headerBreakpointConfig = pickNearestBreakpoint(
      this.config,
      breakpoint
    );
    if (!headerBreakpointConfig) return false;
    const { clipped } = headerBreakpointConfig;
    if (typeof clipped === "boolean") {
      return clipped;
    }
    return !!clipped?.leftEdgeSidebar || !!clipped?.rightEdgeSidebar;
  }

  getOffsetHeight() {
    return this.generateSxWithHidden({
      // https://github.com/mui-org/material-ui/blob/next/packages/material-ui-system/src/sizing.js#L5
      hiddenValue: "0px", // don't use 0 as number because it will become 0%
      assignValue: (breakpointConfig) =>
        breakpointConfig.position === "fixed" ? breakpointConfig.height : "0px",
    });
  }

  getSxHeight() {
    const result = this.generateSxWithHidden({
      assignValue: (breakpointConfig) => breakpointConfig.height,
      // https://github.com/mui-org/material-ui/blob/next/packages/material-ui-system/src/sizing.js#L5
      hiddenValue: "0px", // don't use 0 as number because it will become 0%
    });
    return {
      ...(Object.keys(result).length && { height: result }),
    };
  }

  getSxMarginHorizontal() {
    const marginLeft: Responsive<number | string> = {};
    const { leftEdgeSidebar, rightEdgeSidebar } = this.effectedBy;
    if (leftEdgeSidebar) {
      const occupiedSpace = leftEdgeSidebar?.getOccupiedSpace();
      const breakpoints = this.mergeBreakpoints(occupiedSpace);
      for (const bp of breakpoints) {
        marginLeft[bp] = this.isClipped(LEFT_EDGE_SIDEBAR_ID, bp)
          ? "0px"
          : toValidCssValue(pickNearestBreakpoint(occupiedSpace, bp)!);
      }
    }
    const marginRight: Responsive<number | string> = {};
    if (rightEdgeSidebar) {
      const occupiedSpace = rightEdgeSidebar?.getOccupiedSpace();
      const breakpoints = this.mergeBreakpoints(occupiedSpace);
      for (const bp of breakpoints) {
        marginRight[bp] = this.isClipped(RIGHT_EDGE_SIDEBAR_ID, bp)
          ? "0px"
          : toValidCssValue(pickNearestBreakpoint(occupiedSpace, bp)!);
      }
    }
    return {
      ...(Object.keys(marginLeft).length && { marginLeft }),
      ...(Object.keys(marginRight).length && { marginRight }),
    };
  }

  getSxWidth() {
    const result: Responsive<number | string> = {};
    const { leftEdgeSidebar, rightEdgeSidebar } = this.effectedBy;
    const leftOccupiedSpace = leftEdgeSidebar?.getOccupiedSpace() ?? {};
    const rightOccupiedSpace = rightEdgeSidebar?.getOccupiedSpace() ?? {};
    const breakpoints = this.mergeBreakpoints(
      combineBreakpoints(leftOccupiedSpace, rightOccupiedSpace)
    );
    for (const key of breakpoints) {
      const bp = key as Breakpoint;
      let effectLeft = createWidthInterface(0);
      if (leftEdgeSidebar) {
        if (!this.isClipped(LEFT_EDGE_SIDEBAR_ID, bp)) {
          effectLeft = createWidthInterface(
            leftEdgeSidebar.isFlexiblePersistent(bp, "header")
              ? 0
              : pickNearestBreakpoint(leftOccupiedSpace, bp)
          );
        }
      }

      let effectRight = createWidthInterface(0);
      if (rightEdgeSidebar) {
        if (!this.isClipped(RIGHT_EDGE_SIDEBAR_ID, bp)) {
          effectRight = createWidthInterface(
            rightEdgeSidebar.isFlexiblePersistent(bp, "header")
              ? 0
              : pickNearestBreakpoint(rightOccupiedSpace, bp)
          );
        }
      }

      result[bp] = effectLeft.combine(effectRight).getStyle().width;
    }
    return {
      ...(Object.keys(result).length && { width: result }),
    };
  }

  getSxZIndex(theme = DEFAULT_THEME) {
    const result = this.generateSx((config, bp) => {
      return this.isAboveSomeEdgeSidebar(bp)
        ? theme.zIndex.drawer + 10 + (config.layer ?? 0)
        : theme.zIndex.appBar;
    }, theme.zIndex.appBar);
    return {
      ...(Object.keys(result).length && { zIndex: result }),
    };
  }

  getSxProps(theme = DEFAULT_THEME): object {
    const sxTop = this.generateSx((config) => config.top, 0);
    const sxDisplay = this.getSxDisplay("flex");
    const displayKeys = Object.keys(sxDisplay);
    const shouldAttachDisplay =
      displayKeys.length > 1 ||
      (displayKeys.length === 1 && displayKeys[0] !== "xs");
    return {
      position: this.generateSx((config) => config.position),
      ...(Object.keys(sxTop).length && { top: sxTop }),
      ...(shouldAttachDisplay && { display: sxDisplay }),
      ...this.getSxHeight(),
      ...this.getSxWidth(),
      ...this.getSxMarginHorizontal(),
      ...this.getSxZIndex(theme),
    };
  }
}
