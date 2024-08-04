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

export const edgeSidebarRightClasses = {
  collapser: "EdgeSidebar-R-collapser",
  trigger: "EdgeSidebar-R-trigger",
  triggerIconCollapse: "Icon-collapse",
  triggerIconUncollapse: "Icon-uncollapse",
};

export function applyTemporaryRightStyles(
  params: Omit<TemporaryConfig, "variant">,
) {
  const { width = "300px" } = params || {};
  return {
    "--EdgeSidebar-temporaryWidth": "0px",
    ".Root:has(&)": {
      "--EdgeSidebar-R-variant": "var(--temporary-R)",
      ".EdgeSidebar-R-collapser": {
        display: "none",
      },
    },
    "&[data-temporary-open], &[data-mobile-closing]": {
      "--EdgeSidebar-temporaryWidth": width,
    },
  };
}

export function applyPersistentRightStyles(
  params: Omit<PersistentConfig, "variant">,
) {
  const { width = "256px", persistentBehavior = "fit" } = params || {};
  return {
    ...(persistentBehavior === "none" && {
      zIndex: 2,
      "--SidebarContent-width": `var(--collapsed-R, var(--_permanentWidth-R, 0px)) var(--uncollapsed-R, ${width})`,
      "--EdgeSidebar-permanentSlide":
        "var(--uncollapsed-R, -100%) var(--collapsed-R, 0)",
      "--SidebarContent-shadow":
        "0 0 10px rgba(0,0,0,0.1), calc(-1 * var(--EdgeSidebar-sidelineWidth)) 0 var(--EdgeSidebar-sidelineColor)",
      "&:not([data-edge-uncollapsed])": {
        "--SidebarContent-shadow": "none",
      },
    }),
    ".Root:has(&)": {
      "--EdgeSidebar-R-variant": "var(--permanent-R)",
      "--EdgeSidebar-R-collapsedWidth": "0px",
      ...(persistentBehavior === "none"
        ? {
            "--EdgeSidebar-R-permanentWidth": "0px",
          }
        : {
            ...(width && {
              "--EdgeSidebar-R-permanentWidth": width,
            }),
          }),
      "--EdgeSidebar-R-collapsible": "var(--collapsed-R)",
      ".EdgeSidebar-R-collapser": {
        display: "var(--display, inline-flex)",
      },
      ".EdgeSidebar-R-trigger": {
        display: "none",
      },
    },
    /** Collapsible feature */
    ".Root:has(&[data-edge-uncollapsed])": {
      "--EdgeSidebar-R-collapsible": "var(--uncollapsed-R)",
    },
    ".Root:has(&[data-edge-collapsed])": {
      "--EdgeSidebar-R-collapsible": "var(--collapsed-R)",
    },
  };
}

export function applyPermanentRightStyles(
  params: Omit<PermanentConfig, "variant">,
) {
  if ("autoCollapse" in params && !params.collapsedWidth) {
    console.warn(
      "MUI Treasury Layout: `collapsedWidth` is required when `autoCollapse` is enabled.",
    );
  }
  const { width, collapsedWidth } = params;
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
    "--EdgeSidebar-permanentSlide": "0", // to override persistent styles
    "--SidebarContent-shadow": "none",
    "--SidebarContent-width": "var(--_permanentWidth-R, 0px)",
    ".Root:has(&)": {
      "--EdgeSidebar-R-variant": "var(--permanent-R)",
      ...(width && {
        "--EdgeSidebar-R-permanentWidth": width,
      }),
      ...(collapsedWidth && {
        "--EdgeSidebar-R-collapsedWidth": collapsedWidth,
      }),
      ".EdgeSidebar-R-collapser": {
        display: "var(--display, inline-flex)",
      },
      ".EdgeSidebar-R-trigger": {
        display: "none",
      },
    },
    /** Collapsible feature */
    ".Root:has(&[data-edge-collapsed])": {
      "--EdgeSidebar-R-collapsible": "var(--collapsed-R)",
    },
    ...(expandConfig && {
      "& .EdgeSidebarContent:hover": {
        "--SidebarContent-width": "var(--EdgeSidebar-R-permanentWidth)",
        "--SidebarContent-transitionDelay": expandConfig.delay,
        "--SidebarContent-shadow": `var(--collapsed-R, ${expandConfig.shadow}, calc(-1 * var(--EdgeSidebar-sidelineWidth)) 0 var(--EdgeSidebar-sidelineColor))`,
        "--EdgeSidebar-permanentSlide":
          "var(--collapsed-R, calc(var(--EdgeSidebar-R-collapsedWidth) - var(--SidebarContent-width))) var(--uncollapsed-R, 0)",
      },
    }),
  };
}

export function toggleEdgeSidebarRightCollapse(options: {
  event: React.MouseEvent;
  sidebarId?: string;
  state?: boolean;
  document?: Document | null;
}) {
  const { sidebarId } = options || {};
  let selector = ".EdgeSidebar-R";
  if (sidebarId) {
    selector = `#${sidebarId}`;
  }
  internalCollapseSidebar({ ...options, selector });
}

export function toggleTemporaryEdgeSidebarRight(options?: {
  sidebarId?: string;
  state?: boolean;
  document?: Document | null;
}) {
  const { sidebarId } = options || {};
  let selector = ".EdgeSidebar-R";
  if (sidebarId) {
    selector = `#${sidebarId}`;
  }
  internalToggleSidebar({ ...options, selector });
}

export function applyEdgeSidebarRightStyles(params: {
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
                    "--EdgeSidebar-R-collapsible": "var(--collapsed-R)",
                  },
                  [theme.breakpoints.up(nextBreakpoint)]: {
                    "--EdgeSidebar-R-collapsible": "var(--uncollapsed-R)",
                  },
                },
                [theme.breakpoints.between(
                  variantConfig.autoCollapse,
                  nextBreakpoint,
                )]: {
                  ".Root:has(&[data-auto-collapse-off])": {
                    "--EdgeSidebar-R-collapsible": "var(--uncollapsed-R)",
                  },
                  ".Root:has(&) .EdgeSidebar-R-collapser": {
                    "--_autoCollapse": "1",
                  },
                },
              };
            }
          }
        }
        const variantStyles = {
          temporary: applyTemporaryRightStyles,
          persistent: applyPersistentRightStyles,
          permanent: applyPermanentRightStyles,
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

const StyledEdgeSidebarRight = styled(EdgeSidebarRoot)({
  ".Root:has(&)": {
    /** Root default settings */
    "--EdgeSidebar-R-variant": "var(--permanent-R)",
    "--EdgeSidebar-R-permanentWidth": "256px",
    "--EdgeSidebar-R-collapsible": "var(--uncollapsed-R)",

    /** DO NOT OVERRIDE, internal variables */
    "--temporary-R": "var(--EdgeSidebar-R-variant,)",
    "--permanent-R": "var(--EdgeSidebar-R-variant,)",
    "--_permanentWidth-R": `var(--uncollapsed-R, var(--EdgeSidebar-R-permanentWidth))
                        var(--collapsed-R, var(--EdgeSidebar-R-collapsedWidth, 0px))`,
    "--collapsed-R": "var(--EdgeSidebar-R-collapsible,)",
    "--uncollapsed-R": "var(--EdgeSidebar-R-collapsible,)",

    /** Collapsible feature */
    ".EdgeSidebar-R-collapser": {
      display: "var(--display, inline-flex)",
      "--_sidebarCollapsed": "var(--collapsed-R, 1)",
      ".Icon-collapse": {
        display: "var(--collapsed-R, none) var(--uncollapsed-R, inline-block)",
      },
      ".Icon-uncollapse": {
        display: "var(--collapsed-R, inline-block) var(--uncollapsed-R, none)",
      },
    },
  },

  /** EdgeSidebar default settings */
  "--EdgeSidebar-anchor": "var(--anchorRight)",
  "--SidebarContent-width": "var(--_permanentWidth-R, 0px)",
  "--_temporary": "var(--temporary-R)",
  "--_permanent": "var(--permanent-R)",
  gridArea: "EdgeSidebar-R",
  width: `var(--temporary-R, 0)
          var(--permanent-R, var(--_permanentWidth-R))`,
  borderLeft:
    "var(--permanent, min(var(--EdgeSidebar-sidelineWidth), 1 * var(--SidebarContent-width)) solid)",
  borderColor: "var(--EdgeSidebar-sidelineColor)",
  "&::after": {
    border: "inherit",
    right: 0, // prevent Root overflow
  },
  "&::before": {
    display: `var(--temporary-R, block)
              var(--permanent-R, none)`,
  },
  "&:not([data-temporary-open], [data-mobile-closing])": {
    overflow: "var(--temporary-R, hidden)",
  },
});

const EdgeSidebarRight = React.forwardRef<HTMLDivElement, BoxProps>(
  function EdgeSidebar({ className, ...props }, ref) {
    return (
      <StyledEdgeSidebarRight
        // @ts-expect-error Material UI issue
        ref={ref}
        {...props}
        className={`EdgeSidebar-R ${className || ""}`}
      />
    );
  },
);

export default EdgeSidebarRight;
