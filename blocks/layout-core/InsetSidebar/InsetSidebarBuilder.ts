import { Breakpoint } from "@mui/system";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { subtractCalc } from "../utils/calc";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { Responsive } from "../utils/types";
import { ResponsiveBuilder } from "../shared/ResponsiveBuilder";
import { flattenLoose, flattenStrict } from "../utils/flattenResponsive";
import { toValidCssValue } from "../utils/toValidCssValue";

export type DrawerAnchor = "left" | "right";

export type FixedInsetSidebarConfig = {
  /**
   * css position of the root element
   */
  position: "fixed";
  /**
   * width of the sidebar (support all CSS units)
   */
  width: number | string;
  /**
   * css top of the body element
   */
  top?: number | string;
  /**
   * If header has `position: relative`, when scroll the page will cause this sidebar to stick with header
   */
  headerMagnetEnabled?: boolean;
};

export type AbsoluteInsetSidebarConfig = {
  /**
   * css position of the root element
   */
  position: "absolute";
  /**
   * width of the sidebar (support all CSS units)
   */
  width: number | string;
  /**
   * css top of the body element
   */
  top?: number | string;
};

export type StickyInsetSidebarConfig = {
  /**
   * css position of the root element
   */
  position: "sticky";
  /**
   * width of the sidebar (support all CSS units)
   */
  width: number | string;
  /**
   * css top of the body element
   */
  top?: number | string;
};

export type InsetSidebarConfig =
  | FixedInsetSidebarConfig
  | AbsoluteInsetSidebarConfig
  | StickyInsetSidebarConfig;

export type InsetSetupParams = {
  config: Responsive<InsetSidebarConfig>;
  hidden?: Breakpoint[] | boolean;
};

type Result = string | number | undefined;

export class InsetSidebarBuilder extends ResponsiveBuilder<InsetSidebarConfig> {
  anchor?: DrawerAnchor;
  effectedBy: { header?: HeaderBuilder } = {};

  constructor(params: InsetSetupParams) {
    super(params);
  }

  getFixedArea(modifier: number = 1) {
    return flattenLoose(
      this.generateSx((config, bp) =>
        config.position === "fixed"
          ? `${modifier * 9999}px`
          : bp === "xs"
          ? undefined
          : "initial"
      )
    );
  }

  getSxBody() {
    const anchor = this.anchor;
    const height: Responsive<number | string> = {};
    const { header } = this.effectedBy;
    if (header) {
      const { height: responsiveHeight } = header.getSxHeight();
      const breakpoints = this.mergeBreakpoints(responsiveHeight ?? []);
      for (const bp of breakpoints) {
        const insetConfig = pickNearestBreakpoint(this.config, bp);
        if (insetConfig?.position === "absolute") {
          const headerHeight = pickNearestBreakpoint(responsiveHeight, bp);
          height[bp] =
            headerHeight === 0 || headerHeight === "0px"
              ? "100vh"
              : subtractCalc("100vh", headerHeight);
        }
        if (insetConfig?.position === "fixed") height[bp] = "100%";
        if (insetConfig?.position === "sticky") height[bp] = "initial";
      }
    }
    return {
      height: flattenLoose(height),
      width: flattenLoose(
        this.generateSx((config) =>
          config.position === "fixed" ? "initial" : "100%"
        )
      ),
      position: flattenLoose(this.generateSx((config) => config.position)),
      top: flattenLoose(this.generateSx((config) => config.top ?? 0)),
      ...(anchor === "left" && {
        marginLeft: this.getFixedArea(-1),
        paddingLeft: this.getFixedArea(),
      }),
      ...(anchor === "right" && {
        marginRight: this.getFixedArea(-1),
        paddingRight: this.getFixedArea(),
      }),
    };
  }

  getSxRoot() {
    return {
      display: flattenStrict(this.getSxDisplay("block")),
      width: flattenLoose(
        this.generateSx((config) => toValidCssValue(config.width))
      ),
    };
  }

  getOccupiedSpace() {
    return flattenStrict(
      this.generateSxWithHidden({
        assignValue: (config) => toValidCssValue(config.width),
        hiddenValue: "0px",
        strict: true,
      })
    );
  }
}
