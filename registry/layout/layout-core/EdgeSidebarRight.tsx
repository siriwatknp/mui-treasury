"use client";
import React, { useMemo } from "react";
import type {
  EdgeSidebarVariant,
  EdgeSidebarVariantInput,
  DrawerConfig,
  PersistentConfig,
  PermanentConfig,
} from "./SharedEdgeSidebar";
import { Breakpoint } from "@mui/material/styles";
import { unstable_memoTheme as memoTheme } from "@mui/material/utils";
import { styled } from "@mui/material/styles";
import {
  EdgeSidebarRoot,
  internalCollapseSidebar,
  internalToggleSidebar,
} from "./SharedEdgeSidebar";

function applyDrawerRightStyles(params: DrawerConfig) {
  const { width = "300px", showHeader } = params || {};
  return {
    "--jun-ES-drawerWidth": "0px",
    ...(showHeader && {
      "--drawer-h": "calc(var(--jun-h) - var(--jun-H-h))",
      "&::before": {
        top: "var(--jun-H-h)",
      },
    }),
    ".Root:has(&)": {
      "--jun-ESR-variant": "var(--drawer-R)",
      ".EdgeSidebar-R-collapser": {
        display: "none",
      },
    },
    ".Root:has(&[data-drawer-open])": {
      ".EdgeDrawerTrigger-R [data-edge-drawer-closed-visible]": {
        display: "none",
      },
    },
    ".Root:has(&:not([data-drawer-open]))": {
      ".EdgeDrawerTrigger-R [data-edge-drawer-open-visible]": {
        display: "none",
      },
    },
    "&[data-drawer-open], &[data-mobile-closing]": {
      "--jun-ES-drawerWidth": width,
    },
  };
}

function applyPersistentRightStyles(params: PersistentConfig) {
  const { width = "256px", persistentBehavior = "fit" } = params || {};
  return {
    ".Root:has(&)": {
      "--jun-ESR-variant": "var(--permanent-R)",
      "--jun-ESR-collapsedWidth": "0px",
      ...(persistentBehavior === "none"
        ? {
            zIndex: 2,
            "--jun-ESR-permanentWidth": "0px",
          }
        : {
            ...(width && {
              "--jun-ESR-permanentWidth": width,
            }),
          }),
      "--jun-ESR-collapsible": "var(--collapsed-R)",
      ".EdgeDrawerTrigger-R": {
        display: "none",
      },
      ".EdgeSidebar-R-collapser": {
        "--_sidebarCollapsed": "var(--collapsed-R, 1)",
        display: "var(--display, inline-flex)",
        ".EdgeCollapsedVisible": {
          display:
            "var(--collapsed-R, none) var(--uncollapsed-R, inline-block)",
        },
        ".EdgeUncollapsedVisible": {
          display:
            "var(--collapsed-R, inline-block) var(--uncollapsed-R, none)",
        },
      },
    },
    ...(persistentBehavior === "none" && {
      "--jun-EC-width": `var(--collapsed-R, var(--_permanentWidth-R, 0px)) var(--uncollapsed-R, ${width})`,
      "--jun-ES-permanentSlide":
        "var(--uncollapsed-R, -100%) var(--collapsed-R, 0)",
    }),
    ".Root:has(&[data-edge-uncollapsed])": {
      "--jun-ESR-collapsible": "var(--uncollapsed-R)",
    },
  };
}

function applyPermanentRightStyles(params: PermanentConfig) {
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
    "--jun-ES-permanentSlide": "0",
    "--jun-EC-width": "var(--_permanentWidth-R, 0px)",
    ".Root:has(&)": {
      "--jun-ESR-variant": "var(--permanent-R)",
      ...(width && {
        "--jun-ESR-permanentWidth": width,
      }),
      ...(collapsedWidth && {
        "--jun-ESR-collapsedWidth": collapsedWidth,
        ".EdgeSidebar-R-collapser": {
          display: "var(--display, inline-flex)",
          "--_sidebarCollapsed": "var(--collapsed-R, 1)",
          ".EdgeCollapsedVisible": {
            display:
              "var(--collapsed-R, none) var(--uncollapsed-R, inline-block)",
          },
          ".EdgeUncollapsedVisible": {
            display:
              "var(--collapsed-R, inline-block) var(--uncollapsed-R, none)",
          },
        },
      }),
      ".EdgeDrawerTrigger-R": {
        display: "none",
      },
    },
    ...(collapsedWidth && {
      ".Root:has(&[data-edge-collapsed])": {
        "--jun-ESR-collapsible": "var(--collapsed-R)",
      },
    }),
    ...(expandConfig && {
      "& .EdgeSidebarContent:hover": {
        "--jun-EC-width": "var(--jun-ESR-permanentWidth)",
        "--jun-EC-delay": expandConfig.delay,
        boxShadow: `var(--collapsed-R, ${expandConfig.shadow}) var(--uncollapsed-R, none)`,
        "--jun-ES-permanentSlide":
          "var(--collapsed-R, calc(var(--jun-ESR-collapsedWidth) - var(--jun-EC-width))) var(--uncollapsed-R, 0)",
      },
    }),
  };
}

export function triggerEdgeCollapseRight(options: {
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

export function triggerEdgeDrawerRight(options?: {
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

interface EdgeSidebarRightOwnerState {
  variant?: Partial<Record<Breakpoint, EdgeSidebarVariant>>;
}

interface EdgeSidebarRightProps {
  variant?: EdgeSidebarVariantInput;
}

const StyledEdgeSidebarRight = styled(EdgeSidebarRoot, {
  name: "LayoutEdgeSidebarRight",
  slot: "root",
})<{
  ownerState: EdgeSidebarRightOwnerState;
}>(
  memoTheme(({ theme }) => ({
    ".Root:has(&)": {
      "--jun-ESR-variant": "var(--permanent-R)",
      "--jun-ESR-permanentWidth": "256px",
      "--jun-ESR-collapsible": "var(--uncollapsed-R)",

      "--drawer-R": "var(--jun-ESR-variant,)",
      "--permanent-R": "var(--jun-ESR-variant,)",
      "--_permanentWidth-R": `var(--uncollapsed-R, var(--jun-ESR-permanentWidth))
                        var(--collapsed-R, var(--jun-ESR-collapsedWidth, 0px))`,
      "--collapsed-R": "var(--jun-ESR-collapsible,)",
      "--uncollapsed-R": "var(--jun-ESR-collapsible,)",
    },
    "--jun-ES-anchor": "var(--anchorRight)",
    "--jun-EC-width": "var(--_permanentWidth-R, 0px)",
    "--_drawer": "var(--drawer-R)",
    "--_permanent": "var(--permanent-R)",
    gridArea: "EdgeSidebar-R",
    width: `var(--drawer-R, 0)
          var(--permanent-R, var(--_permanentWidth-R))`,
    borderLeft:
      "var(--permanent, min(var(--jun-ES-line-w), 1 * var(--jun-EC-width)) solid)",
    borderColor: "var(--jun-ES-line-color)",
    "&::after": {
      border: "inherit",
    },
    "&::before": {
      display: `var(--drawer-R, block)
              var(--permanent-R, none)`,
    },
    "&:not([data-drawer-open], [data-mobile-closing])": {
      overflow: "var(--drawer-R, hidden)",
    },
    variants: [
      {
        props: ({ variant }: EdgeSidebarRightOwnerState) => !!variant,
        style: ({ variant }: Required<EdgeSidebarRightOwnerState>) => {
          let autoCollapseStyles = {};
          const responsive: Record<string, unknown> = {};
          (Object.keys(variant) as Array<Breakpoint>)
            .sort(
              (a, b) =>
                theme.breakpoints.values[a] - theme.breakpoints.values[b],
            )
            .forEach((breakpoint) => {
              const variantTuple = variant[breakpoint];
              if (variantTuple) {
                const [variantName, params = {}] = variantTuple;
                if (variantName === "permanent") {
                  const permanentParams = params as PermanentConfig;
                  if (permanentParams.autoCollapse) {
                    const nextBreakpoint =
                      theme.breakpoints.keys[
                        theme.breakpoints.keys.indexOf(
                          permanentParams.autoCollapse,
                        ) + 1
                      ];
                    if (!nextBreakpoint) {
                      console.warn(
                        "MUI Treasury Layout: `autoCollapse` cannot be the largest breakpoint.",
                      );
                    } else {
                      autoCollapseStyles = {
                        ".Root:has(&) .EdgeSidebar-R-collapser": {
                          "--_autoCollapse": "1",
                        },
                        ".Root:has(&)": {
                          "--jun-ESR-collapsible": {
                            [permanentParams.autoCollapse]:
                              "var(--collapsed-R)",
                            [nextBreakpoint]: "var(--uncollapsed-R)",
                          },
                        },
                        [theme.breakpoints.up(nextBreakpoint)]: {
                          ".Root:has(&) .EdgeSidebar-R-collapser": {
                            "--_in-autoCollapse": "1",
                          },
                        },
                      };
                    }
                  }
                }
                const variantStyles = {
                  drawer: applyDrawerRightStyles,
                  persistent: applyPersistentRightStyles,
                  permanent: applyPermanentRightStyles,
                }[variantName](params as never);
                responsive[theme.breakpoints.up(breakpoint)] = variantStyles;
              }
            });
          return {
            ...responsive,
            ...autoCollapseStyles,
          };
        },
      },
    ],
  })),
);

const EdgeSidebarRight = React.forwardRef<
  HTMLDivElement,
  Omit<
    React.ComponentPropsWithoutRef<typeof StyledEdgeSidebarRight>,
    "ownerState"
  > &
    EdgeSidebarRightProps
>(function EdgeSidebarRight({ className, variant, ...props }, ref) {
  const ownerState = useMemo(
    () => ({
      variant: Array.isArray(variant) ? { xs: variant } : variant,
    }),
    [variant],
  );
  return (
    <StyledEdgeSidebarRight
      ref={ref}
      className={`EdgeSidebar-R ${className || ""}`}
      ownerState={ownerState}
      {...props}
    />
  );
});

export default EdgeSidebarRight;
