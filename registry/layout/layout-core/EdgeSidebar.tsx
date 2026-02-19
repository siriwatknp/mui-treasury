"use client";
import React, { useMemo } from "react";
import type {
  EdgeSidebarVariant,
  EdgeSidebarVariantInput,
  DrawerConfig,
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

function applyDrawerStyles(params: DrawerConfig) {
  const { width = "300px", showHeader, withoutOverlay } = params || {};
  return {
    "--jun-ES-drawerWidth": "0px",
    ...(showHeader && {
      "--drawer-h": "calc(var(--jun-h) - var(--jun-H-h))",
      "&::before": {
        top: "var(--jun-H-h)",
      },
    }),
    ...(withoutOverlay && {
      "--drawer-h": "calc(var(--jun-h) - var(--jun-H-clip-h))",
      "&::before": {
        display: "none",
      },
    }),
    ".Root:has(&)": {
      "--jun-ES-variant": "var(--drawer)",
      ".EdgeSidebar-collapser": {
        display: "none",
      },
    },
    ".Root:has(&[data-drawer-open])": {
      ".EdgeDrawerTrigger [data-edge-drawer-closed-visible]": {
        display: "none",
      },
    },
    ".Root:has(&:not([data-drawer-open]))": {
      ".EdgeDrawerTrigger [data-edge-drawer-open-visible]": {
        display: "none",
      },
    },
    "&[data-drawer-open], &[data-mobile-closing]": {
      "--jun-ES-drawerWidth": width,
    },
  };
}

function applyPermanentStyles(params: PermanentConfig) {
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
    "--jun-EC-width": "var(--_permanentWidth, 0px)",
    ".Root:has(&)": {
      "--jun-ES-variant": "var(--permanent)",
      ...(width && {
        "--jun-ES-permanentWidth": width,
      }),
      ...(collapsedWidth && {
        "--jun-ES-collapsedWidth": collapsedWidth,
        ".EdgeSidebar-collapser": {
          display: "var(--display, inline-flex)",
          "--_sidebarCollapsed": "var(--collapsed, 1)",
          ".EdgeCollapsedVisible": {
            display: "var(--collapsed, inline-flex) var(--uncollapsed, none)",
          },
          ".EdgeUncollapsedVisible": {
            display: "var(--collapsed, none) var(--uncollapsed, inline-flex)",
          },
        },
      }),
      ".EdgeDrawerTrigger": {
        display: "none",
      },
    },
    ...(collapsedWidth && {
      ".Root:has(&[data-edge-collapsed])": {
        "--jun-ES-collapsible": "var(--collapsed)",
      },
    }),
    ...(expandConfig && {
      "& .EdgeSidebarContent:hover": {
        "--jun-EC-width": "var(--jun-ES-permanentWidth)",
        "--jun-EC-delay": expandConfig.delay,
        boxShadow: `var(--collapsed, ${expandConfig.shadow}) var(--uncollapsed, none)`,
      },
    }),
  };
}

export function triggerEdgeCollapse(options: {
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

export function triggerEdgeDrawer(options?: {
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

interface EdgeSidebarOwnerState {
  variant?: Partial<Record<Breakpoint, EdgeSidebarVariant>>;
  permanentAutoCollapse?: Breakpoint;
}

interface EdgeSidebarProps {
  variant?: EdgeSidebarVariantInput;
  permanentAutoCollapse?: Breakpoint;
}

const StyledEdgeSidebar = styled(EdgeSidebarRoot, {
  name: "LayoutEdgeSidebar",
  slot: "root",
})<{
  ownerState: EdgeSidebarOwnerState;
}>(
  memoTheme(({ theme }) => ({
    ".Root:has(&)": {
      "--jun-ES-variant": "var(--permanent)",
      "--jun-ES-permanentWidth": "256px",
      "--jun-ES-collapsible": "var(--uncollapsed)",

      "--drawer": "var(--jun-ES-variant,)",
      "--permanent": "var(--jun-ES-variant,)",
      "--_permanentWidth": `var(--uncollapsed, var(--jun-ES-permanentWidth))
                        var(--collapsed, var(--jun-ES-collapsedWidth, 0px))`,
      "--collapsed": "var(--jun-ES-collapsible,)",
      "--uncollapsed": "var(--jun-ES-collapsible,)",
    },
    ".Root:has(&:empty), .Root:has(& .EdgeSidebarContent:empty)": {
      "--jun-ES-permanentWidth": "0px",
    },
    "--jun-ES-anchor": "var(--anchorLeft)",
    "--jun-EC-width": "var(--_permanentWidth, 0px)",
    "--_drawer": "var(--drawer)",
    "--_permanent": "var(--permanent)",
    gridArea: "EdgeSidebar",
    width: `var(--drawer, 0)
          var(--permanent, var(--_permanentWidth))`,
    borderRight:
      "var(--permanent, min(var(--jun-ES-line-w), 1 * var(--jun-EC-width)) solid)",
    borderColor: "var(--jun-ES-line-color)",
    "&::after": {
      border: "inherit",
    },
    "&::before": {
      display: `var(--drawer, block)
              var(--permanent, none)`,
    },
    "&:not([data-drawer-open], [data-mobile-closing])": {
      overflow: "var(--drawer, hidden)",
    },
    variants: [
      {
        props: ({ variant }: EdgeSidebarOwnerState) => !!variant,
        style: ({ variant }: Required<EdgeSidebarOwnerState>) => {
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
                const variantStyles = {
                  drawer: applyDrawerStyles,
                  permanent: applyPermanentStyles,
                }[variantName](params as never);
                responsive[theme.breakpoints.up(breakpoint)] = variantStyles;
              }
            });
          return responsive;
        },
      },
      {
        props: ({ permanentAutoCollapse }: EdgeSidebarOwnerState) =>
          !!permanentAutoCollapse,
        style: ({
          permanentAutoCollapse,
        }: Required<EdgeSidebarOwnerState>) => ({
          ".Root:has(&) .EdgeSidebar-collapser": {
            "--_autoCollapse": "1",
          },
          [theme.breakpoints.down(permanentAutoCollapse)]: {
            ".Root:has(&)": {
              "--jun-ES-collapsible": "var(--collapsed)",
            },
          },
          [theme.breakpoints.up(permanentAutoCollapse)]: {
            ".Root:has(&)": {
              "--jun-ES-collapsible": "var(--uncollapsed)",
            },
            ".Root:has(&) .EdgeSidebar-collapser": {
              "--_in-autoCollapse": "1",
            },
          },
        }),
      },
    ],
  })),
);

const defaultVariant: EdgeSidebarVariant = ["permanent", { width: "256px" }];

const EdgeSidebar = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof StyledEdgeSidebar>, "ownerState"> &
    EdgeSidebarProps
>(function EdgeSidebar(
  { className, variant = defaultVariant, permanentAutoCollapse, ...props },
  ref,
) {
  const normalizedVariant = useMemo(
    () => (Array.isArray(variant) ? { xs: variant } : variant),
    [variant],
  );
  const ownerState = useMemo(
    () => ({
      variant: normalizedVariant,
      permanentAutoCollapse,
    }),
    [normalizedVariant, permanentAutoCollapse],
  );
  const hasWithoutOverlay = Object.values(normalizedVariant).some(
    (v) => v?.[0] === "drawer" && (v[1] as DrawerConfig)?.withoutOverlay,
  );
  return (
    <StyledEdgeSidebar
      ref={ref}
      className={`EdgeSidebar ${className || ""}`}
      ownerState={ownerState}
      {...(hasWithoutOverlay && { "data-without-overlay": "" })}
      {...props}
    />
  );
});

export default EdgeSidebar;
