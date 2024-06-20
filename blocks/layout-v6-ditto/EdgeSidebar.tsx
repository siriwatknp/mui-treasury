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

export function applyTemporaryStyles(
  params?: Omit<TemporaryConfig, "variant">,
) {
  const { width } = params || {};
  return {
    ".Root:has(&)": {
      "--EdgeSidebar-variant": "var(--temporary)",
      ".EdgeSidebar-collapser": {
        display: "none",
      },
    },
    ...(width && {
      "& .SidebarContent": {
        "--EdgeSidebar-temporaryWidth": width,
      },
    }),
  };
}

export function applyPersistentStyles(
  params?: Omit<PersistentConfig, "variant">,
) {
  const { width, persistenBehavior = "fit" } = params || {};
  return {
    ...(persistenBehavior === "none" && {
      "--SidebarContent-width": `var(--collapsed, var(--_permanentWidth, 0px)) var(--uncollapsed, ${width || "256px"})`,
    }),
    ".Root:has(&)": {
      "--EdgeSidebar-variant": "var(--permanent)",
      "--EdgeSidebar-collapsedWidth": "0px",
      ...(persistenBehavior === "none"
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
        display: "var(--display, inline-flex)",
        ".Icon-collapse": {
          display: "var(--collapsed, none) var(--uncollapsed, inline-block)",
        },
        ".Icon-uncollapse": {
          display: "var(--collapsed, inline-block) var(--uncollapsed, none)",
        },
      },
      ".EdgeSidebar-collapser, .CollapseTrigger": {
        "--_sidebarCollapsed": "var(--collapsed, 1)",
      },
    },
  };
}

export function applyPermanentStyles(
  params?: Omit<PermanentConfig, "variant">,
) {
  const { width, collapsedWidth, expandOnHover } = params || {};
  const defaultExpandConfig = {
    delay: "0.3s",
    shadow: "0 0 10px rgba(0,0,0,0.1)",
  };
  const expandConfig =
    expandOnHover === true ? defaultExpandConfig : expandOnHover;
  return {
    "--SidebarContent-width": "var(--_permanentWidth, 0px)",
    ".Root:has(&)": {
      "--EdgeSidebar-variant": "var(--permanent)",
      ...(width && {
        "--EdgeSidebar-permanentWidth": width,
      }),
      ...(collapsedWidth && {
        "--EdgeSidebar-collapsedWidth": collapsedWidth,
      }),
      ".EdgeSidebar-trigger": {
        display: "none",
      },
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
    ...(expandOnHover && {
      "& .SidebarContent:hover": {
        "--SidebarContent-width": "var(--EdgeSidebar-permanentWidth)",
        "--SidebarContent-transitionDelay":
          expandConfig?.delay || defaultExpandConfig.delay,
        boxShadow: `var(--collapsed, ${expandConfig?.shadow || defaultExpandConfig.shadow}) var(--uncollapsed, none)`,
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
          const { smallestBreakpoint = "xs", autoCollapse } = variantConfig;
          if (autoCollapse) {
            autoCollapseStyles = {
              ".Root:has(&)": {
                "--EdgeSidebar-collapsible": {
                  [smallestBreakpoint]: "var(--collapsed)",
                  [autoCollapse]: "var(--uncollapsed)",
                },
                ".EdgeSidebar-collapser": {
                  display: {
                    [autoCollapse]: "none",
                  },
                },
              },
              '.Root:has(&[data-collapsible="collapsed"])': {
                "--EdgeSidebar-collapsible": {
                  [autoCollapse]: "var(--uncollapsed)",
                },
              },
            };
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
  ".Root:has(&[data-collapsible='collapsed'])": {
    "--EdgeSidebar-collapsible": "var(--collapsed)",
  },
  ".Root:has(&[data-collapsible='uncollapsed'])": {
    "--EdgeSidebar-collapsible": "var(--uncollapsed)",
  },
  "--EdgeSidebar-anchor": "var(--anchorLeft)",
  "--SidebarContent-width": "var(--_permanentWidth, 0px)",
  "--_temporary": "var(--temporary)",
  "--_permanent": "var(--permanent)",
  gridArea: "EdgeSidebar",
  width: `var(--temporary, 0)
          var(--permanent, var(--_permanentWidth))`,
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
        // @ts-ignore
        ref={ref}
        {...props}
        className={`EdgeSidebar ${className || ""}`}
      />
    );
  },
);

export default EdgeSidebar;
