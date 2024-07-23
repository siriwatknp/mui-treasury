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
      ".EdgeSidebar-trigger": {
        display: "none",
      },
      ".EdgeSidebar-collapser": {
        "--_sidebarCollapsed": "var(--collapsed, 1)",
        display: "var(--display, inline-flex)",
        ".Icon-collapse": {
          display: "var(--collapsed, none) var(--uncollapsed, inline-block)",
        },
        ".Icon-uncollapse": {
          display: "var(--collapsed, inline-block) var(--uncollapsed, none)",
        },
      },
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
    "--SidebarContent-width": "var(--_permanentWidth, 0px)",
    ".Root:has(&)": {
      "--EdgeSidebar-variant": "var(--permanent)",
      ...(width && {
        "--EdgeSidebar-permanentWidth": width,
      }),
      ...(collapsedWidth && {
        "--EdgeSidebar-collapsedWidth": collapsedWidth,
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
      }),
      ".EdgeSidebar-trigger": {
        display: "none",
      },
    },
    ...(collapsedWidth && {
      ".Root:has(&[data-edge-collapsed])": {
        "--EdgeSidebar-collapsible": "var(--collapsed)",
      },
    }),
    ...(expandConfig && {
      "& .SidebarContent:hover": {
        "--SidebarContent-width": "var(--EdgeSidebar-permanentWidth)",
        "--SidebarContent-transitionDelay": expandConfig.delay,
        boxShadow: `var(--collapsed, ${expandConfig.shadow}) var(--uncollapsed, none)`,
      },
    }),
  };
}

export function applyEdgeSidebarStyles(
  theme: Theme,
  params: {
    config: Partial<
      Record<Breakpoint, TemporaryConfig | PersistentConfig | PermanentConfig>
    >;
  },
) {
  const { config } = params;
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
            const nextBreakpoint =
              theme.breakpoints.keys[
                theme.breakpoints.keys.indexOf(variantConfig.autoCollapse) + 1
              ];
            if (!nextBreakpoint) {
              console.warn(
                "MUI Treasury Layout: `autoCollapse` cannot be the largest breakpoint.",
              );
            } else {
              autoCollapseStyles = {
                ".Root:has(&)": {
                  "--EdgeSidebar-collapsible": {
                    [variantConfig.autoCollapse]: "var(--collapsed)",
                    [nextBreakpoint]: "var(--uncollapsed)",
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
        responsive[theme.breakpoints.up(breakpoint)] = variantStyles;
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
    /** default settings */
    "--EdgeSidebar-variant": "var(--permanent)",
    "--EdgeSidebar-permanentWidth": "256px",
    "--EdgeSidebar-collapsible": "var(--uncollapsed)",

    /** DO NOT OVERRIDE, internal variables */
    "--temporary": "var(--EdgeSidebar-variant,)",
    "--permanent": "var(--EdgeSidebar-variant,)",
    "--_permanentWidth": `var(--uncollapsed, var(--EdgeSidebar-permanentWidth))
                        var(--collapsed, var(--EdgeSidebar-collapsedWidth, 0px))`,
    "--collapsed": "var(--EdgeSidebar-collapsible,)",
    "--uncollapsed": "var(--EdgeSidebar-collapsible,)",
  },
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
  "&::before": {
    display: `var(--temporary, block)
              var(--permanent, none)`,
  },
  "&::after": {
    border: "inherit",
  },
  "&:not([data-temporary-open], [data-mobile-closing])": {
    overflow: "var(--temporary, hidden)",
  },
});

const EdgeSidebar = React.forwardRef<HTMLDivElement, BoxProps>(
  function EdgeSidebar({ className, ...props }, ref) {
    return (
      <StyledEdgeSidebarLeft
        // @ts-ignore
        ref={ref}
        {...props}
        className={`EdgeSidebar ${className || ""}`}
      />
    );
  },
);

export default EdgeSidebar;
