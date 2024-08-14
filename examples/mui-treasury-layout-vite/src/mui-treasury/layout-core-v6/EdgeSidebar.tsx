import React from "react";
import type {
  PermanentConfig,
  PersistentConfig,
  TemporaryConfig,
} from "./SharedEdgeSidebar";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint, Theme } from "@mui/material/styles";
import { layoutAttrs, layoutClasses } from "./layoutClasses";
import {
  EdgeSidebarRoot,
  internalCollapseSidebar,
  internalToggleSidebar,
} from "./SharedEdgeSidebar";
import { styled } from "./zero-styled";

function applyTemporaryStyles(params: Omit<TemporaryConfig, "variant">) {
  const { width = "300px", fullHeight } = params || {};
  return {
    "--EdgeSidebar-temporaryWidth": "0px",
    [`.${layoutClasses.Root}:has(&)`]: {
      "--EdgeSidebar-variant": "var(--temporary)",
      [`.${layoutClasses.EdgeSidebarCollapser}`]: {
        display: "none",
      },
    },
    [`&[${layoutAttrs.isTemporaryEdgeSidebarOpen}], &[${layoutAttrs.isTemporaryEdgeSidebarClosing}]`]:
      {
        "--EdgeSidebar-temporaryWidth": width,
      },
    ...(fullHeight
      ? { zIndex: 5 }
      : { "--SidebarContent-offset": "var(--Header-height)" }),
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
      [`&:not([${layoutAttrs.isEdgeSidebarUncollapsed}])`]: {
        "--SidebarContent-shadow": "none",
      },
    }),
    [`.${layoutClasses.Root}:has(&)`]: {
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
      [`.${layoutClasses.EdgeSidebarCollapser}`]: {
        display: "var(--display, inline-flex)",
      },
      [`.${layoutClasses.TemporaryEdgeSidebarTrigger}`]: {
        display: "none",
      },
    },
    [`.${layoutClasses.Root}:has(&[${layoutAttrs.isEdgeSidebarUncollapsed}])`]:
      {
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
    [`.${layoutClasses.Root}:has(&)`]: {
      "--EdgeSidebar-variant": "var(--permanent)",
      ...(width && {
        "--EdgeSidebar-permanentWidth": width,
      }),
      ...(collapsedWidth && {
        "--EdgeSidebar-collapsedWidth": collapsedWidth,
      }),
      [`.${layoutClasses.EdgeSidebarCollapser}`]: {
        display: "var(--display, inline-flex)",
      },
      [`.${layoutClasses.TemporaryEdgeSidebarTrigger}`]: {
        display: "none",
      },
    },
    ...(expandConfig && {
      [`& .${layoutClasses.EdgeSidebarContent}:hover`]: {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const responsive: any = {};
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
              const minBreakpoint = theme.breakpoints.values[breakpoint]
                ? breakpoint
                : ((breakpoint.match(/\d+/g)?.[0] || 0) as number);
              autoCollapseStyles = {
                [`.${layoutClasses.Root}:has(&)`]: {
                  [theme.breakpoints.between(minBreakpoint, nextBreakpoint)]: {
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
                  [`.${layoutClasses.Root}:has(&[${layoutAttrs.isAutoCollapseOff}])`]:
                    {
                      "--EdgeSidebar-collapsible": "var(--uncollapsed)",
                    },
                  [`.${layoutClasses.Root}:has(&) .${layoutClasses.EdgeSidebarCollapser}`]:
                    {
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
  [`.${layoutClasses.Root}:has(&)`]: {
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
    [`.${layoutClasses.EdgeSidebarCollapser}`]: {
      display: "var(--display, inline-flex)",
      "--_sidebarCollapsed": "var(--collapsed, 1)",
      [`.${layoutClasses.EdgeSidebarUncollapsedVisible}`]: {
        display: "var(--collapsed, none) var(--uncollapsed, inline-block)",
      },
      [`.${layoutClasses.EdgeSidebarCollapsedVisible}`]: {
        display: "var(--collapsed, inline-block) var(--uncollapsed, none)",
      },
    },
  },

  /** Collapsible feature */
  [`.${layoutClasses.Root}:has(&[${layoutAttrs.isEdgeSidebarCollapsed}])`]: {
    "--EdgeSidebar-collapsible": "var(--collapsed)",
  },

  /** EdgeSidebar default settings */
  "--EdgeSidebar-anchor": "var(--anchorLeft)",
  "--SidebarContent-width": "var(--_permanentWidth, 0px)",
  "--_temporary": "var(--temporary)",
  "--_permanent": "var(--permanent)",
  gridArea: layoutClasses.EdgeSidebar,
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
  [`&:not([${layoutAttrs.isTemporaryEdgeSidebarOpen}], [${layoutAttrs.isTemporaryEdgeSidebarClosing}])`]:
    {
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
        className={`${layoutClasses.EdgeSidebar} ${className || ""}`}
      />
    );
  },
);

export default EdgeSidebar;
