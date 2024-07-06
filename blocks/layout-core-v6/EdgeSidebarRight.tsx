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

export function applyTemporaryRightStyles(
  params: Omit<TemporaryConfig, "variant">,
) {
  const { width } = params || {};
  return {
    ".Root:has(&)": {
      "--EdgeSidebar-R-variant": "var(--temporary-R)",
      ".EdgeSidebar-R-collapser": {
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

export function applyPersistentRightStyles(
  params: Omit<PersistentConfig, "variant">,
) {
  const { width, persistentBehavior = "fit" } = params || {};
  return {
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
      ".EdgeSidebar-R-trigger": {
        display: "none",
      },
      ".EdgeSidebar-R-collapser": {
        display: "var(--display, inline-flex)",
        "--_sidebarCollapsed": "var(--collapsed-R, 1)",
        ".Icon-collapse": {
          display:
            "var(--collapsed-R, none) var(--uncollapsed-R, inline-block)",
        },
        ".Icon-uncollapse": {
          display:
            "var(--collapsed-R, inline-block) var(--uncollapsed-R, none)",
        },
      },
    },
    ...(persistentBehavior === "none" && {
      "--SidebarContent-width": `var(--collapsed-R, var(--_permanentWidth-R, 0px)) var(--uncollapsed-R, ${width || "256px"})`,
      "--EdgeSidebar-permanentSlide":
        "var(--uncollapsed-R, -100%) var(--collapsed-R, 0)",
    }),
  };
}

export function applyPermanentRightStyles(
  params: Omit<PermanentConfig, "variant">,
) {
  if ("autoCollapse" in params && !!params.collapsedWidth) {
    console.warn(
      "MUI Treasury Layout: `collapsedWidth` is required when `autoCollapse` is enabled.",
    );
  }
  const { width } = params;
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
    "--SidebarContent-width": "var(--_permanentWidth-R, 0px)",
    ".Root:has(&)": {
      "--EdgeSidebar-R-variant": "var(--permanent-R)",
      ...(width && {
        "--EdgeSidebar-R-permanentWidth": width,
      }),
      ...("collapsedWidth" in params &&
        !!params.collapsedWidth && {
          "--EdgeSidebar-R-collapsedWidth": params.collapsedWidth,
        }),
      ".EdgeSidebar-R-trigger": {
        display: "none",
      },
      ".EdgeSidebar-R-collapser": {
        display: "var(--display, inline-flex)",
        "--_sidebarCollapsed": "var(--collapsed-R, 1)",
        ".Icon-collapse": {
          display:
            "var(--collapsed-R, none) var(--uncollapsed-R, inline-block)",
        },
        ".Icon-uncollapse": {
          display:
            "var(--collapsed-R, inline-block) var(--uncollapsed-R, none)",
        },
      },
    },
    ...(expandConfig && {
      "& .SidebarContent:hover": {
        "--SidebarContent-width": "var(--EdgeSidebar-R-permanentWidth)",
        "--SidebarContent-transitionDelay": expandConfig.delay,
        boxShadow: `var(--collapsed-R, ${expandConfig.shadow}) var(--uncollapsed-R, none)`,
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

export function applyEdgeSidebarRightStyles(
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
                  "--EdgeSidebar-R-collapsible": {
                    [theme.breakpoints.keys[0]]: "var(--collapsed-R)",
                    [nextBreakpoint]: "var(--uncollapsed-R)",
                  },
                  ".EdgeSidebar-R-collapser": {
                    display: {
                      [nextBreakpoint]: "none",
                    },
                  },
                },
                '.Root:has(&[data-collapsible="collapsed"])': {
                  "--EdgeSidebar-R-collapsible": {
                    [nextBreakpoint]: "var(--uncollapsed-R)",
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
        responsive[theme.breakpoints.up(breakpoint)] = variantStyles;
      }
    });
  return {
    ...responsive,
    ...autoCollapseStyles,
  };
}

const StyledEdgeSidebarRight = styled(EdgeSidebarRoot)({
  ".Root:has(&)": {
    /** default settings */
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
  },
  ".Root:has(&[data-collapsible='collapsed'])": {
    "--EdgeSidebar-R-collapsible": "var(--collapsed-R)",
  },
  ".Root:has(&[data-collapsible='uncollapsed'])": {
    "--EdgeSidebar-R-collapsible": "var(--uncollapsed-R)",
  },
  "--EdgeSidebar-anchor": "var(--anchorRight)",
  "--SidebarContent-width": "var(--_permanentWidth-R, 0px)",
  "--_temporary": "var(--temporary-R)",
  "--_permanent": "var(--permanent-R)",
  gridArea: "EdgeSidebar-R",
  width: `var(--temporary-R, 0)
          var(--permanent-R, var(--_permanentWidth-R))`,
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
        // @ts-ignore
        ref={ref}
        {...props}
        className={`EdgeSidebar-R ${className || ""}`}
      />
    );
  },
);

export default EdgeSidebarRight;
