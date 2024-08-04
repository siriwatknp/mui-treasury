import React from "react";
import type {
  PermanentConfig,
  PersistentConfig,
  TemporaryConfig,
} from "./SharedEdgeSidebar";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint, Theme } from "@mui/material/styles";
import {
  EdgeSidebarRoot,
  internalCollapseSidebar,
  internalToggleSidebar,
} from "./SharedEdgeSidebar";
import { styled } from "./zero-styled";

export const edgeSidebarClasses = {
  collapser: "EdgeSidebar-collapser",
  trigger: "EdgeSidebar-trigger",
  triggerIconCollapse: "Icon-collapse",
  triggerIconUncollapse: "Icon-uncollapse",
};

function applyTemporaryStyles(params: Omit<TemporaryConfig, "variant">) {
  const { width = "300px" } = params || {};
  return {
    "--EdgeSidebar-temporaryWidth": "0px",
    ".Root:has(&)": {
      "--EdgeSidebar-variant": "var(--temporary)",
      ".EdgeSidebar-collapser": {
        display: "none",
      },
    },
    "&[data-temporary-open], &[data-mobile-closing]": {
      "--EdgeSidebar-temporaryWidth": width,
    },
  };
}

function applyPersistentStyles(params: Omit<PersistentConfig, "variant">) {
  const { width = "256px", persistentBehavior = "fit" } = params || {};
  return {
    ...(persistentBehavior === "none" && {
      zIndex: 2,
      "--SidebarContent-width": `var(--collapsed, var(--_permanentWidth, 0px)) var(--uncollapsed, ${width})`,
      "--SidebarContent-shadow":
        "0 0 10px rgba(0,0,0,0.1), var(--EdgeSidebar-sidelineWidth) 0 var(--EdgeSidebar-sidelineColor)",
      "&:not([data-edge-uncollapsed])": {
        "--SidebarContent-shadow": "none",
      },
    }),
    ".Root:has(&)": {
      "--EdgeSidebar-variant": "var(--permanent)",
      "--EdgeSidebar-collapsedWidth": "0px",
      ...(persistentBehavior === "none"
        ? {
            "--EdgeSidebar-permanentWidth": "0px",
          }
        : {
            ...(width && {
              "--EdgeSidebar-permanentWidth": width,
            }),
          }),
      "--EdgeSidebar-collapsible": "var(--collapsed)",
      ".EdgeSidebar-collapser": {
        display: "var(--display, inline-flex)",
      },
      ".EdgeSidebar-trigger": {
        display: "none",
      },
    },
    /** Collapsible feature */
    ".Root:has(&[data-edge-collapsed])": {
      "--EdgeSidebar-collapsible": "var(--collapsed)",
    },
    ".Root:has(&[data-edge-uncollapsed])": {
      "--EdgeSidebar-collapsible": "var(--uncollapsed)",
    },
  };
}

function applyPermanentStyles(params: Omit<PermanentConfig, "variant">) {
  if ("autoCollapse" in params && !params.collapsedWidth) {
    console.warn(
      "MUI Treasury Layout: `collapsedWidth` is required when `autoCollapse` is enabled.",
    );
  }
  const { width, collapsedWidth } = params || {};
  const defaultExpandConfig = {
    delay: "0.3s",
    shadow: "0 0 10px rgba(0,0,0,0.1)",
  };
  let expandConfig: undefined | typeof defaultExpandConfig;
  if ("expandOnHover" in params) {
    if (params.expandOnHover === true) {
      expandConfig = defaultExpandConfig;
    } else {
      expandConfig = params.expandOnHover as typeof defaultExpandConfig;
    }
  }
  return {
    "--SidebarContent-shadow": "none",
    "--SidebarContent-width": "var(--_permanentWidth, 0px)",
    ".Root:has(&)": {
      "--EdgeSidebar-variant": "var(--permanent)",
      ...(width && {
        "--EdgeSidebar-permanentWidth": width,
      }),
      ...(collapsedWidth && {
        "--EdgeSidebar-collapsedWidth": collapsedWidth,
      }),
      ".EdgeSidebar-collapser": {
        display: "var(--display, inline-flex)",
      },
      ".EdgeSidebar-trigger": {
        display: "none",
      },
    },
    /** Collapsible feature */
    ".Root:has(&[data-edge-collapsed])": {
      "--EdgeSidebar-collapsible": "var(--collapsed)",
    },
    ...(expandConfig && {
      "& .EdgeSidebarContent:hover": {
        "--SidebarContent-width": "var(--EdgeSidebar-permanentWidth)",
        "--SidebarContent-transitionDelay": expandConfig.delay,
        "--SidebarContent-shadow": `var(--collapsed, ${expandConfig.shadow}, var(--EdgeSidebar-sidelineWidth) 0 var(--EdgeSidebar-sidelineColor))`,
      },
    }),
  };
}

export function applyEdgeSidebarStyles(params: {
  theme: Theme;
  config: Partial<
    Record<Breakpoint, TemporaryConfig | PersistentConfig | PermanentConfig>
  >;
}) {
  const { config, theme } = params;
  let autoCollapseStyles = {};
  let responsive: any = {};
  (Object.keys(config) as Array<Breakpoint>)
    .sort((a, b) => theme.breakpoints.values[a] - theme.breakpoints.values[b])
    .forEach((breakpoint) => {
      const variantConfig = config[breakpoint];
      if (variantConfig) {
        const { variant, ...params } = variantConfig;
        if (variant === "permanent") {
          if ("autoCollapse" in variantConfig && variantConfig.autoCollapse) {
            let nextBreakpoint;
            if (typeof variantConfig.autoCollapse === "number") {
              nextBreakpoint = variantConfig.autoCollapse + 0.01;
            } else if (
              theme.breakpoints.keys.includes(variantConfig.autoCollapse)
            ) {
              nextBreakpoint =
                theme.breakpoints.keys[
                  theme.breakpoints.keys.indexOf(
                    variantConfig.autoCollapse as Breakpoint,
                  ) + 1
                ];
            }
            if (!nextBreakpoint) {
              console.warn(
                "MUI Treasury Layout: `autoCollapse` cannot be the largest breakpoint.",
              );
            } else {
              autoCollapseStyles = {
                ".Root:has(&)": {
                  [theme.breakpoints.between(breakpoint, nextBreakpoint)]: {
                    "--EdgeSidebar-collapsible": "var(--collapsed)",
                  },
                  [theme.breakpoints.up(nextBreakpoint)]: {
                    "--EdgeSidebar-collapsible": "var(--uncollapsed)",
                  },
                },
                [theme.breakpoints.between(
                  variantConfig.autoCollapse,
                  nextBreakpoint,
                )]: {
                  ".Root:has(&[data-auto-collapse-off])": {
                    "--EdgeSidebar-collapsible": "var(--uncollapsed)",
                  },
                  ".Root:has(&) .EdgeSidebar-collapser": {
                    "--_autoCollapse": "1",
                  },
                },
              };
            }
          }
        }
        const variantStyles = {
          temporary: applyTemporaryStyles,
          persistent: applyPersistentStyles,
          permanent: applyPermanentStyles,
        }[variant](params);
        if (theme.breakpoints.keys.includes(breakpoint)) {
          responsive[theme.breakpoints.up(breakpoint)] = variantStyles;
        } else {
          responsive[breakpoint] = variantStyles;
        }
      }
    });
  return {
    ...responsive,
    ...autoCollapseStyles,
  };
}

export function toggleEdgeSidebarCollapse(options: {
  event: React.MouseEvent;
  sidebarId?: string;
  state?: boolean;
  document?: Document | null;
}) {
  const { sidebarId } = options || {};
  let selector = ".EdgeSidebar";
  if (sidebarId) {
    selector = `#${sidebarId}`;
  }
  internalCollapseSidebar({ ...options, selector });
}

export function toggleTemporaryEdgeSidebar(options?: {
  sidebarId?: string;
  state?: boolean;
  document?: Document | null;
}) {
  const { sidebarId } = options || {};
  let selector = ".EdgeSidebar";
  if (sidebarId) {
    selector = `#${sidebarId}`;
  }
  internalToggleSidebar({ ...options, selector });
}

const StyledEdgeSidebarLeft = styled(EdgeSidebarRoot)({
  ".Root:has(&)": {
    /** Root default settings */
    "--EdgeSidebar-variant": "var(--permanent)",
    "--EdgeSidebar-permanentWidth": "256px",
    "--EdgeSidebar-collapsible": "var(--uncollapsed)",
    "--EdgeSidebar-collapsedWidth": "80px",

    /** DO NOT OVERRIDE, internal variables */
    "--temporary": "var(--EdgeSidebar-variant,)",
    "--permanent": "var(--EdgeSidebar-variant,)",
    "--_permanentWidth": `var(--uncollapsed, var(--EdgeSidebar-permanentWidth))
                        var(--collapsed, var(--EdgeSidebar-collapsedWidth, 0px))`,
    "--collapsed": "var(--EdgeSidebar-collapsible,)",
    "--uncollapsed": "var(--EdgeSidebar-collapsible,)",

    /** Collapsible feature */
    ".EdgeSidebar-collapser": {
      display: "var(--display, inline-flex)",
      "--_sidebarCollapsed": "var(--collapsed, 1)",
      ".Icon-collapse": {
        display: "var(--collapsed, none) var(--uncollapsed, inline-block)",
      },
      ".Icon-uncollapse": {
        display: "var(--collapsed, inline-block) var(--uncollapsed, none)",
      },
    },
  },

  /** EdgeSidebar default settings */
  "--EdgeSidebar-anchor": "var(--anchorLeft)",
  "--SidebarContent-width": "var(--_permanentWidth, 0px)",
  "--_temporary": "var(--temporary)",
  "--_permanent": "var(--permanent)",
  gridArea: "EdgeSidebar",
  width: `var(--temporary, 0)
          var(--permanent, var(--_permanentWidth))`,
  borderRight:
    "var(--permanent, min(var(--EdgeSidebar-sidelineWidth), 1 * var(--SidebarContent-width)) solid)",
  borderColor: "var(--EdgeSidebar-sidelineColor)",
  "&::after": {
    border: "inherit",
    left: 0,
  },
  "&::before": {
    display: `var(--temporary, block)
              var(--permanent, none)`,
  },
  "&:not([data-temporary-open], [data-mobile-closing])": {
    overflow: "var(--temporary, hidden)",
  },
});

const EdgeSidebar = React.forwardRef<HTMLDivElement, BoxProps>(
  function EdgeSidebar({ className, ...props }, ref) {
    return (
      <StyledEdgeSidebarLeft
        // @ts-expect-error Material UI issue
        ref={ref}
        {...props}
        className={`EdgeSidebar ${className || ""}`}
      />
    );
  },
);

export default EdgeSidebar;
