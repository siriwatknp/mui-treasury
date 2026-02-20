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
import { layoutAttrs } from "./layoutAttrs";
import { layoutClasses } from "./layoutClasses";

function applyDrawerRightStyles(params: DrawerConfig) {
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
    [`.${layoutClasses.Root}:has(&)`]: {
      "--jun-ESR-variant": "var(--drawer-R)",
      [`.${layoutClasses.EdgeSidebarRightCollapser}`]: {
        display: "none",
      },
    },
    [`.${layoutClasses.Root}:has(&[${layoutAttrs.isDrawerOpen}])`]: {
      [`.${layoutClasses.EdgeDrawerTriggerRight} .${layoutClasses.EdgeDrawerClosedVisible}`]:
        {
          display: "none",
        },
    },
    [`.${layoutClasses.Root}:has(&:not([${layoutAttrs.isDrawerOpen}]))`]: {
      [`.${layoutClasses.EdgeDrawerTriggerRight} .${layoutClasses.EdgeDrawerOpenVisible}`]:
        {
          display: "none",
        },
    },
    [`&[${layoutAttrs.isDrawerOpen}], &[${layoutAttrs.isDrawerClosing}]`]: {
      "--jun-ES-drawerWidth": width,
    },
  };
}

function applyPermanentRightStyles(params: PermanentConfig) {
  const { width, collapsedWidth, visibility } = params;
  const defaultExpandConfig = {
    delay: "0.3s",
    shadow: "0 0 10px rgba(0,0,0,0.1)",
  };
  let expandConfig: undefined | typeof defaultExpandConfig;
  if ("hoverUncollapse" in params) {
    if (params.hoverUncollapse === true) {
      expandConfig = defaultExpandConfig;
    } else {
      expandConfig = params.hoverUncollapse as typeof defaultExpandConfig;
    }
  }
  return {
    "--jun-EC-shadow": "none",
    "--jun-EC-width": "var(--_permanentWidth-R, 0px)",
    "--_collapsed": "var(--collapsed-R)",
    "--_uncollapsed": "var(--uncollapsed-R)",
    [`.${layoutClasses.Root}:has(&)`]: {
      "--jun-ESR-variant": "var(--permanent-R)",
      ...(width && {
        "--jun-ESR-permanentWidth": width,
      }),
      ...(collapsedWidth && {
        "--jun-ESR-collapsedWidth": collapsedWidth,
        [`.${layoutClasses.EdgeSidebarRightCollapser}`]: {
          display: "var(--display, inline-flex)",
          "--_sidebarCollapsed": "var(--collapsed-R, 1)",
          [`.${layoutClasses.EdgeCollapsedVisible}`]: {
            display:
              "var(--collapsed-R, inline-flex) var(--uncollapsed-R, none)",
          },
          [`.${layoutClasses.EdgeUncollapsedVisible}`]: {
            display:
              "var(--collapsed-R, none) var(--uncollapsed-R, inline-flex)",
          },
        },
      }),
      [`.${layoutClasses.EdgeDrawerTriggerRight}`]: {
        display: "none",
      },
    },
    ...(collapsedWidth && {
      /** Collapsible feature */
      [`.${layoutClasses.Root}:has(&[${layoutAttrs.isEdgeSidebarCollapsed}])`]:
        {
          "--jun-ESR-collapsible": "var(--collapsed-R)",
        },
      [`.${layoutClasses.Root}:has(&[${layoutAttrs.isEdgeSidebarUncollapsed}])`]:
        {
          "--jun-ESR-collapsible": "var(--uncollapsed-R)",
        },
    }),
    ...(visibility === "hidden" && {
      [`.${layoutClasses.Root}:has(>&)`]: {
        "--_permanentWidth-R": "0px",
      },
      [`& .${layoutClasses.EdgeSidebarContent}`]: {
        visibility: "hidden",
      },
    }),
    ...(visibility === "visible" && {
      [`.${layoutClasses.Root}:has(>&)`]: {
        "--_permanentWidth-R": `var(--uncollapsed-R, var(--jun-ESR-permanentWidth))
                                var(--collapsed-R, var(--jun-ESR-collapsedWidth, 0px))`,
      },
      [`& .${layoutClasses.EdgeSidebarContent}`]: {
        visibility:
          "var(--_drawer, hidden) var(--_permanent, visible)" as never,
      },
    }),
    ...(expandConfig && {
      [`&:has(.${layoutClasses.EdgeSidebarContent}:hover)`]: {
        "--_collapsed": "",
        "--_uncollapsed": "var(--_)",
      },
      [`& .${layoutClasses.EdgeSidebarContent}:hover`]: {
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
  let selector = `.${layoutClasses.EdgeSidebarRight}`;
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
  let selector = `.${layoutClasses.EdgeSidebarRight}`;
  if (sidebarId) {
    selector = `#${sidebarId}`;
  }
  internalToggleSidebar({ ...options, selector });
}

interface EdgeSidebarRightOwnerState {
  variant?: Partial<Record<Breakpoint, EdgeSidebarVariant>>;
  permanentAutoCollapse?: Breakpoint;
}

interface EdgeSidebarRightProps {
  variant?: EdgeSidebarVariantInput;
  permanentAutoCollapse?: Breakpoint;
}

const StyledEdgeSidebarRight = styled(EdgeSidebarRoot, {
  name: "LayoutEdgeSidebarRight",
  slot: "root",
})<{
  ownerState: EdgeSidebarRightOwnerState;
}>(
  memoTheme(({ theme }) => ({
    [`.${layoutClasses.Root}:has(&)`]: {
      /** Root default settings */
      "--jun-ESR-variant": "var(--permanent-R)",
      "--jun-ESR-permanentWidth": "256px",
      "--jun-ESR-collapsible": "var(--uncollapsed-R)",
      "--jun-ESR-collapsedWidth": "0px",

      /** DO NOT OVERRIDE, internal variables */
      "--drawer-R": "var(--jun-ESR-variant,)",
      "--permanent-R": "var(--jun-ESR-variant,)",
      "--_permanentWidth-R": `var(--uncollapsed-R, var(--jun-ESR-permanentWidth))
                            var(--collapsed-R, var(--jun-ESR-collapsedWidth, 0px))`,
      "--collapsed-R": "var(--jun-ESR-collapsible,)",
      "--uncollapsed-R": "var(--jun-ESR-collapsible,)",
    },
    /** EdgeSidebar default settings */
    "--jun-ES-anchor": "var(--anchorRight)",
    "--jun-EC-width": "var(--_permanentWidth-R, 0px)",
    "--_drawer": "var(--drawer-R)",
    "--_permanent": "var(--permanent-R)",
    "--_collapsed": "var(--collapsed-R)",
    "--_uncollapsed": "var(--uncollapsed-R)",
    gridArea: layoutClasses.EdgeSidebarRight,
    width: `var(--drawer-R, 0)
              var(--permanent-R, var(--_permanentWidth-R))`,
    boxShadow: "calc(-1 * var(--jun-ES-line-w)) 0px var(--jun-ES-line-color)",
    [`&:not([${layoutAttrs.isDrawerOpen}], [${layoutAttrs.isDrawerClosing}])`]:
      {
        overflow: "var(--drawer-R, hidden)",
      },
    variants: [
      {
        props: ({ variant }: EdgeSidebarRightOwnerState) => !!variant,
        style: ({ variant }: Required<EdgeSidebarRightOwnerState>) => {
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
                  drawer: applyDrawerRightStyles,
                  permanent: applyPermanentRightStyles,
                }[variantName](params as never);
                if (breakpoint === "xs") {
                  Object.assign(responsive, variantStyles);
                } else {
                  responsive[theme.breakpoints.up(breakpoint)] = variantStyles;
                }
              }
            });
          return responsive;
        },
      },
      {
        props: ({ permanentAutoCollapse }: EdgeSidebarRightOwnerState) =>
          !!permanentAutoCollapse,
        style: ({
          permanentAutoCollapse,
        }: Required<EdgeSidebarRightOwnerState>) => ({
          [`.${layoutClasses.Root}:has(&) .${layoutClasses.EdgeSidebarRightCollapser}`]:
            {
              "--_autoCollapse": "1",
            },
          [theme.breakpoints.down(permanentAutoCollapse)]: {
            [`.${layoutClasses.Root}:has(&)`]: {
              "--jun-ESR-collapsible": "var(--collapsed-R)",
            },
          },
          [theme.breakpoints.up(permanentAutoCollapse)]: {
            [`.${layoutClasses.Root}:has(&)`]: {
              "--jun-ESR-collapsible": "var(--uncollapsed-R)",
            },
            [`.${layoutClasses.Root}:has(&) .${layoutClasses.EdgeSidebarRightCollapser}`]:
              {
                "--_in-autoCollapse": "1",
              },
          },
        }),
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
>(function EdgeSidebarRight(
  { className, variant, permanentAutoCollapse, ...props },
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
  const hasWithoutOverlay =
    normalizedVariant &&
    Object.values(normalizedVariant).some(
      (v) => v?.[0] === "drawer" && (v[1] as DrawerConfig)?.withoutOverlay,
    );
  return (
    <StyledEdgeSidebarRight
      ref={ref}
      className={`${layoutClasses.EdgeSidebarRight} ${className || ""}`}
      ownerState={ownerState}
      {...(hasWithoutOverlay && { "data-without-overlay": "" })}
      {...props}
    />
  );
});

export default EdgeSidebarRight;
