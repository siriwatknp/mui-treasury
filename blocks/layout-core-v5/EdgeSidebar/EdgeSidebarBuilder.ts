import { CSSProperties } from "react";
import { Breakpoint } from "@mui/system";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { ResponsiveBuilder } from "../shared/ResponsiveBuilder";
import { combineBreakpoints } from "../utils/combineBreakpoints";
import {
  LEFT_EDGE_SIDEBAR_ID,
  RIGHT_EDGE_SIDEBAR_ID,
  DEFAULT_THEME,
  HEADER_ID,
  CONTENT_ID,
  FOOTER_ID,
} from "../utils/constant";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { Responsive } from "../utils/types";

export type PersistentBehavior = "fit" | "flexible" | "none";

export type DrawerAnchor = "left" | "right";
export type DrawerVariant = "temporary" | "persistent" | "permanent";

export type EdgeSidebarConfig =
  | PersistentSidebarConfig
  | PermanentSidebarConfig
  | TemporarySidebarConfig;

export interface CollapsibleSidebarConfig {
  /**
   * If `true`, this sidebar can be collapsed
   */
  collapsible?: boolean;
  /**
   * If `collapsible: true`, when sidebar collapsed will have this width (support all CSS units)
   */
  collapsedWidth?: number | string;
  /**
   * If `collapsible: true`, when hover on collapsed sidebar it will expand to specified `width` without affecting other components.
   */
  uncollapsedOnHover?: boolean;
  /**
   * @deprecated autoExpanded will be remove in the next major version, use 'uncollapsedOnHover' instead
   */
  autoExpanded?: boolean;
  /**
   * sidebar's width (support all CSS units)
   */
  width: number | string;
  /**
   * If header with `position: relative` clip this sidebar, when scroll the page will cause this sidebar to stick with header
   */
  headerMagnetEnabled?: boolean;
}

export interface PermanentSidebarConfig extends CollapsibleSidebarConfig {
  /**
   * Material UI Drawer : permanent
   * https://material-ui.com/components/drawers/#permanent-drawer
   */
  variant: "permanent";
}

export interface PersistentSidebarConfig extends CollapsibleSidebarConfig {
  /**
   * Effect to other components when this sidebar open. Possible values are 'fit' | 'flexible' | 'none'
   */
  persistentBehavior:
    | PersistentBehavior
    | Partial<Record<HEADER_ID | CONTENT_ID | FOOTER_ID, PersistentBehavior>>;
  /**
   * Material UI Drawer : persistent
   * https://material-ui.com/components/drawers/#persistent-drawer
   */
  variant: "persistent";
}

export interface TemporarySidebarConfig {
  /**
   * sidebar's width (support all CSS units)
   */
  width: number | string;
  /**
   * Material UI Drawer : persistent
   * https://material-ui.com/components/drawers/#temporary-drawer
   */
  variant: "temporary";
}

export type EdgeSidebarSetupParams = {
  config: Responsive<EdgeSidebarConfig>;
  hidden?: boolean | Breakpoint[];
  autoCollapse?: Breakpoint;
};

export type SidebarState = {
  collapsed?: boolean;
  open?: boolean;
};
export class EdgeSidebarBuilder extends ResponsiveBuilder<EdgeSidebarConfig> {
  id?: LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID;
  readonly autoCollapse: EdgeSidebarSetupParams["autoCollapse"];
  state?: SidebarState;
  effectedBy: {
    header?: HeaderBuilder;
  } = {};

  constructor(params: EdgeSidebarSetupParams) {
    super(params);
    this.autoCollapse = params.autoCollapse;
  }

  setState(state: SidebarState) {
    this.state = state;
  }

  isFlexiblePersistent(
    breakpoint: Breakpoint,
    id?: HEADER_ID | CONTENT_ID | FOOTER_ID
  ) {
    const config = pickNearestBreakpoint(this.config, breakpoint);
    return EdgeSidebarBuilder.isFlexiblePersistentConfig(config, id);
  }

  getOccupiedSpace(id?: HEADER_ID | CONTENT_ID | FOOTER_ID) {
    return this.generateSxWithHidden<string | number>({
      hiddenValue: 0,
      assignValue: (breakpointConfig, _, lastResultVal) => {
        if (EdgeSidebarBuilder.isTemporaryConfig(breakpointConfig)) {
          if (lastResultVal !== undefined) {
            return 0;
          }
          return undefined;
          // do nothing for xs because temporary variant will be modal
        }
        if (EdgeSidebarBuilder.isPersistentConfig(breakpointConfig)) {
          if (
            this.state?.open &&
            !EdgeSidebarBuilder.isNonePersistentConfig(breakpointConfig, id)
          ) {
            return this.getFinalWidth(breakpointConfig);
          } else {
            return 0;
          }
        }
        if (EdgeSidebarBuilder.isPermanentConfig(breakpointConfig)) {
          return this.getFinalWidth(breakpointConfig);
        }
      },
    });
  }

  getZIndex(theme = DEFAULT_THEME) {
    const result: Responsive<number> = {};
    if (!this.effectedBy.header) return {};
    const breakpoints = combineBreakpoints(
      this.effectedBy.header.config,
      this.config
    );
    for (const key of breakpoints) {
      const bp = key as Breakpoint;
      if (this.id) {
        const isClipped = this.effectedBy.header.isClipped(this.id, bp);
        const isAboveSomeEdgeSidebar =
          this.effectedBy.header.isAboveSomeEdgeSidebar(bp);
        result[bp] =
          theme.zIndex.drawer + (isAboveSomeEdgeSidebar && !isClipped ? 20 : 0);
      } else {
        console.warn(
          "Cannot find EdgeSidebar id. This might be an internal bug, please open an issue in github."
        );
      }
    }
    return result;
  }

  getWidth() {
    return this.generateSx((breakpointConfig, bp) =>
      EdgeSidebarBuilder.isTemporaryConfig(breakpointConfig)
        ? this.config[bp]?.width
        : this.getFinalWidth(breakpointConfig)
    );
  }

  getDrawerVariant() {
    return this.generateSx((config) => config.variant);
  }

  getSxProps(theme = DEFAULT_THEME) {
    const sxDisplay = this.getSxDisplay("flex");
    const displayKeys = Object.keys(sxDisplay);
    const shouldAttachDisplay =
      displayKeys.length > 1 ||
      (displayKeys.length === 1 && displayKeys[0] !== "xs");
    return {
      width: this.getWidth(),
      zIndex: this.getZIndex(theme),
      ...(shouldAttachDisplay && { display: sxDisplay }),
    };
  }

  getFinalWidth = (config: CollapsibleSidebarConfig | undefined) => {
    return config?.collapsible && this.state?.collapsed
      ? config.collapsedWidth ?? config.width
      : config?.width;
  };

  getEdgeTriggerSxDisplay(options: {
    field: "open" | "collapsed";
    display?: CSSProperties["display"];
  }) {
    const { field, display = "inline-flex" } = options;
    return this.generateSxWithHidden({
      strict: true,
      hiddenValue: "none",
      assignValue: (config) => {
        if (field === "open") {
          if (EdgeSidebarBuilder.isPermanentConfig(config)) {
            return "none";
          } else {
            return display;
          }
        }
        if (field === "collapsed") {
          if (EdgeSidebarBuilder.isCollapsibleConfig(config)) {
            return display;
          } else {
            return "none";
          }
        }
      },
    });
  }

  static isPersistentConfig = (
    config?: EdgeSidebarConfig
  ): config is PersistentSidebarConfig => {
    return config?.variant === "persistent";
  };

  static isNonePersistentConfig = (
    config?: EdgeSidebarConfig,
    id?: HEADER_ID | CONTENT_ID | FOOTER_ID
  ) => {
    return (
      !!config &&
      !!EdgeSidebarBuilder.isPersistentConfig(config) &&
      ((typeof config.persistentBehavior === "string" &&
        config.persistentBehavior === "none") ||
        (typeof config.persistentBehavior === "object" &&
          !!id &&
          config.persistentBehavior[id] === "none"))
    );
  };

  static isFlexiblePersistentConfig = (
    config?: EdgeSidebarConfig,
    id?: HEADER_ID | CONTENT_ID | FOOTER_ID
  ) => {
    return (
      !!config &&
      !!EdgeSidebarBuilder.isPersistentConfig(config) &&
      ((typeof config.persistentBehavior === "string" &&
        config.persistentBehavior === "flexible") ||
        (typeof config.persistentBehavior === "object" &&
          !!id &&
          config.persistentBehavior[id] === "flexible"))
    );
  };

  static isCollapsibleConfig = (
    config?: EdgeSidebarConfig
  ): config is PersistentSidebarConfig | PermanentSidebarConfig => {
    return (
      (EdgeSidebarBuilder.isPermanentConfig(config) ||
        EdgeSidebarBuilder.isPersistentConfig(config)) &&
      !!config?.collapsible
    );
  };

  static isPermanentConfig = (
    config?: EdgeSidebarConfig
  ): config is PermanentSidebarConfig => {
    return config?.variant === "permanent";
  };

  static isTemporaryConfig = (
    config?: EdgeSidebarConfig
  ): config is TemporarySidebarConfig => {
    return config?.variant === "temporary";
  };
}
