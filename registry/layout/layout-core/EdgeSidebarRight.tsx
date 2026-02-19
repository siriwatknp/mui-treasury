"use client";
import React, { useMemo } from "react";
import type {
  EdgeSidebarVariant,
  EdgeSidebarVariantInput,
  TemporaryConfig,
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

function applyTemporaryRightStyles(params: TemporaryConfig) {
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

function applyPersistentRightStyles(params: PersistentConfig) {
  const { width = "256px", persistentBehavior = "fit" } = params || {};
  return {
    ".Root:has(&)": {
      "--EdgeSidebar-R-variant": "var(--permanent-R)",
      "--EdgeSidebar-R-collapsedWidth": "0px",
      ...(persistentBehavior === "none"
        ? {
            zIndex: 2,
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
        "--_sidebarCollapsed": "var(--collapsed-R, 1)",
        display: "var(--display, inline-flex)",
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
      "--SidebarContent-width": `var(--collapsed-R, var(--_permanentWidth-R, 0px)) var(--uncollapsed-R, ${width})`,
      "--EdgeSidebar-permanentSlide":
        "var(--uncollapsed-R, -100%) var(--collapsed-R, 0)",
    }),
    ".Root:has(&[data-edge-uncollapsed])": {
      "--EdgeSidebar-R-collapsible": "var(--uncollapsed-R)",
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
    "--EdgeSidebar-permanentSlide": "0",
    "--SidebarContent-width": "var(--_permanentWidth-R, 0px)",
    ".Root:has(&)": {
      "--EdgeSidebar-R-variant": "var(--permanent-R)",
      ...(width && {
        "--EdgeSidebar-R-permanentWidth": width,
      }),
      ...(collapsedWidth && {
        "--EdgeSidebar-R-collapsedWidth": collapsedWidth,
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
      }),
      ".EdgeSidebar-R-trigger": {
        display: "none",
      },
    },
    ...(collapsedWidth && {
      ".Root:has(&[data-edge-collapsed])": {
        "--EdgeSidebar-R-collapsible": "var(--collapsed-R)",
      },
    }),
    ...(expandConfig && {
      "& .EdgeSidebarContent:hover": {
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
      "--EdgeSidebar-R-variant": "var(--permanent-R)",
      "--EdgeSidebar-R-permanentWidth": "256px",
      "--EdgeSidebar-R-collapsible": "var(--uncollapsed-R)",

      "--temporary-R": "var(--EdgeSidebar-R-variant,)",
      "--permanent-R": "var(--EdgeSidebar-R-variant,)",
      "--_permanentWidth-R": `var(--uncollapsed-R, var(--EdgeSidebar-R-permanentWidth))
                        var(--collapsed-R, var(--EdgeSidebar-R-collapsedWidth, 0px))`,
      "--collapsed-R": "var(--EdgeSidebar-R-collapsible,)",
      "--uncollapsed-R": "var(--EdgeSidebar-R-collapsible,)",
    },
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
    },
    "&::before": {
      display: `var(--temporary-R, block)
              var(--permanent-R, none)`,
    },
    "&:not([data-temporary-open], [data-mobile-closing])": {
      overflow: "var(--temporary-R, hidden)",
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
                        ".Root:has(&)": {
                          "--EdgeSidebar-R-collapsible": {
                            [permanentParams.autoCollapse]:
                              "var(--collapsed-R)",
                            [nextBreakpoint]: "var(--uncollapsed-R)",
                          },
                        },
                        [theme.breakpoints.between(
                          permanentParams.autoCollapse,
                          nextBreakpoint,
                        )]: {
                          ".Root:has(&[data-auto-collapse-off])": {
                            "--EdgeSidebar-R-collapsible":
                              "var(--uncollapsed-R)",
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
