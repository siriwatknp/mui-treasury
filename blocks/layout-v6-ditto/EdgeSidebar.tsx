import React from "react";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint, Theme } from "@mui/material/styles";
import { styled } from "./zero-styled";

type DrawerConfig = {
  variant: "drawer";
  width?: string;
};
type PersistentConfig = {
  variant: "persistent";
  width?: string;
};
type PermanentConfig = {
  variant: "permanent";
  width?: string;
  /**
   * Required `autoCollapse`, the width of the sidebar after collapsed.
   */
  collapsedWidth?: string;
};

export function applyDrawerStyles(
  params?: Omit<DrawerConfig, "variant"> & { anchorRight?: boolean },
) {
  const { width, anchorRight } = params || {};
  return {
    ".JunRoot:has(&)": {
      ...(anchorRight
        ? {
            "--JunSidebar-R-variant": "var(--drawer-R)",
            ".EdgeSidebar-R-collapser": {
              display: "none",
            },
          }
        : {
            "--JunSidebar-variant": "var(--drawer)",
            ".EdgeSidebar-collapser": {
              display: "none",
            },
          }),
    },
    ...(width && {
      "& .SidebarContent": {
        "--JunSidebar-drawerWidth": width,
      },
    }),
  };
}

export function applyPersistentStyles(
  params?: Omit<PersistentConfig, "variant"> & { anchorRight?: boolean },
) {
  const { width, anchorRight } = params || {};
  return {
    ".JunRoot:has(&)": {
      ...(anchorRight
        ? {
            "--JunSidebar-R-variant": "var(--permanent-R)",
            "--JunSidebar-R-permanentCollapsedWidth": "0px",
            ...(width && {
              "--JunSidebar-R-permanentWidth": width,
            }),
            "--JunSidebar-R-collapsible": "var(--collapsed-R)",
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
          }
        : {
            "--JunSidebar-variant": "var(--permanent)",
            "--JunSidebar-permanentCollapsedWidth": "0px",
            ...(width && {
              "--JunSidebar-permanentWidth": width,
            }),
            "--JunSidebar-collapsible": "var(--collapsed)",
            ".EdgeSidebar-trigger": {
              display: "none",
            },
            ".EdgeSidebar-collapser": {
              display: "var(--display, inline-flex)",
              "--_sidebarCollapsed": "var(--collapsed, 1)",
              ".Icon-collapse": {
                display:
                  "var(--collapsed, none) var(--uncollapsed, inline-block)",
              },
              ".Icon-uncollapse": {
                display:
                  "var(--collapsed, inline-block) var(--uncollapsed, none)",
              },
            },
          }),
    },
  };
}

export function applyPermanentStyles(
  params?: Omit<PermanentConfig, "variant"> & { anchorRight?: boolean },
) {
  const { width, collapsedWidth, anchorRight } = params || {};
  return {
    ".JunRoot:has(&)": {
      ...(anchorRight
        ? {
            "--JunSidebar-R-variant": "var(--permanent-R)",
            ...(width && {
              "--JunSidebar-R-permanentWidth": width,
            }),
            ...(collapsedWidth && {
              "--JunSidebar-R-permanentCollapsedWidth": collapsedWidth,
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
          }
        : {
            "--JunSidebar-variant": "var(--permanent)",
            ...(width && {
              "--JunSidebar-permanentWidth": width,
            }),
            ...(collapsedWidth && {
              "--JunSidebar-permanentCollapsedWidth": collapsedWidth,
            }),
            ".EdgeSidebar-trigger": {
              display: "none",
            },
            ".EdgeSidebar-collapser": {
              display: "var(--display, inline-flex)",
              "--_sidebarCollapsed": "var(--collapsed, 1)",
              ".Icon-collapse": {
                display:
                  "var(--collapsed, none) var(--uncollapsed, inline-block)",
              },
              ".Icon-uncollapse": {
                display:
                  "var(--collapsed, inline-block) var(--uncollapsed, none)",
              },
            },
          }),
    },
  };
}

export function applyEdgeSidebarStyles(
  theme: Theme,
  params: {
    anchorRight?: boolean;
    /**
     * When the viewport shrink to the provided breakpoint, the EdgeSidebar will collapse automatically.
     * Must set `collapsedWidth` to specify the width of the collapsed sidebar
     */
    autoCollapse?: Breakpoint;
    /**
     * The smallest breakpoint for collapsed state.
     *
     * For container queries, required Material UI v6:
     * `smallestBreakpoint: '@'`
     */
    smallestBreakpoint?: string;
    config: Partial<
      Record<Breakpoint, DrawerConfig | PersistentConfig | PermanentConfig>
    >;
  },
) {
  const {
    autoCollapse,
    smallestBreakpoint = "xs",
    config,
    anchorRight,
  } = params;
  let responsive: any = {};
  (Object.keys(config) as Array<Breakpoint>)
    .sort((a, b) => theme.breakpoints.values[a] - theme.breakpoints.values[b])
    .forEach((breakpoint) => {
      const variantConfig = config[breakpoint];
      if (variantConfig) {
        const { variant, ...params } = variantConfig;
        const variantStyles = {
          drawer: applyDrawerStyles,
          persistent: applyPersistentStyles,
          permanent: applyPermanentStyles,
        }[variant]({ ...params, anchorRight });
        responsive[theme.breakpoints.up(breakpoint)] = variantStyles;
      }
    });
  return {
    ...responsive,
    ...(autoCollapse && {
      ".JunRoot:has(&)": {
        ...(anchorRight
          ? {
              "--JunSidebar-R-collapsible": {
                [smallestBreakpoint]: "var(--collapsed-R)",
                [autoCollapse]: "var(--uncollapsed-R)",
              },
              ".EdgeSidebar-R-collapser": {
                display: {
                  [autoCollapse]: "none",
                },
              },
            }
          : {
              "--JunSidebar-collapsible": {
                [smallestBreakpoint]: "var(--collapsed)",
                [autoCollapse]: "var(--uncollapsed)",
              },
              ".EdgeSidebar-collapser": {
                display: {
                  [autoCollapse]: "none",
                },
              },
            }),
      },
      '.JunRoot:has(&[data-collapsible="collapsed"])': {
        ...(anchorRight
          ? {
              "--JunSidebar-R-collapsible": {
                [autoCollapse]: "var(--uncollapsed-R)",
              },
            }
          : {
              "--JunSidebar-collapsible": {
                [autoCollapse]: "var(--uncollapsed)",
              },
            }),
      },
    }),
  };
}

// TODO: remove
export function collapseEdgeSidebar(options?: {
  sidebarId?: string;
  document?: Document | null;
}) {
  const { document: d, sidebarId } = options || {};
  const doc = d ?? document;
  const sidebar = doc.querySelector(
    sidebarId ? `#${sidebarId}` : ".EdgeSidebar-L",
  );
  if (sidebar) {
    sidebar.setAttribute("data-collapsible", "collapsed");
  }
}

// TODO: remove
export function uncollapseEdgeSidebar(options?: {
  sidebarId?: string;
  document?: Document | null;
}) {
  const { document: d, sidebarId } = options || {};
  const doc = d ?? document;
  const sidebar = doc.querySelector(
    sidebarId ? `#${sidebarId}` : ".EdgeSidebar-L",
  );
  if (sidebar) {
    sidebar.setAttribute("data-collapsible", "uncollapsed");
  }
}

export function toggleEdgeSidebarCollapse(options: {
  event: React.MouseEvent;
  anchorRight?: boolean;
  sidebarId?: string;
  state?: boolean;
  document?: Document | null;
}) {
  const { anchorRight, state, document: d, sidebarId, event } = options || {};
  const doc = d ?? document;
  let selector = anchorRight ? ".EdgeSidebar-R" : ".EdgeSidebar-L";
  if (sidebarId) {
    selector = `#${sidebarId}`;
  }
  const sidebar = doc.querySelector(selector) as HTMLElement;
  if (sidebar) {
    const currentCollapsed =
      window
        .getComputedStyle(event.target as Element)
        .getPropertyValue("--_sidebarCollapsed") === "1";
    const nextCollapsed = state === undefined ? !currentCollapsed : state;
    if (nextCollapsed) {
      sidebar.setAttribute("data-collapsible", "collapsed");
    } else {
      sidebar.setAttribute("data-collapsible", "uncollapsed");
    }
  }
}

export function toggleEdgeSidebarDrawer(options?: {
  anchorRight?: boolean;
  sidebarId?: string;
  state?: boolean;
  document?: Document | null;
}) {
  const { anchorRight, state, document: d, sidebarId } = options || {};
  const doc = d ?? document;
  let selector = anchorRight ? ".EdgeSidebar-R" : ".EdgeSidebar-L";
  if (sidebarId) {
    selector = `#${sidebarId}`;
  }
  const sidebar = doc.querySelector(selector) as HTMLDivElement | null;
  if (sidebar) {
    const currentOpen = sidebar.getAttribute("data-drawer-open") !== null;
    const nextOpen = state === undefined ? !currentOpen : state;
    if (nextOpen) {
      sidebar.setAttribute("data-drawer-open", "");
      sidebar.style.setProperty("--JunSidebar-drawerOpen", "1");
      doc.body.style.overflowY = "hidden";
      // @ts-ignore
      function handleOutsideClick(event: MouseEvent) {
        if (event.target === sidebar) {
          // clicking on the backdrop (psuedo element of sidebar) will close the sidebar
          toggleEdgeSidebarDrawer({
            ...options,
            state: false,
          });
          doc.removeEventListener?.("click", handleOutsideClick);
        }
      }
      setTimeout(() => {
        // prevent the `handleOutsideClick` to be called immediately
        doc.addEventListener?.("click", handleOutsideClick);
      }, 0);

      // TODO: add a way to close the sidebar by swiping
      // TODO: add a way to close the sidebar by pressing ESC
    } else {
      sidebar.removeAttribute("data-drawer-open");
      sidebar.setAttribute("data-mobile-closing", "");
      setTimeout(() => {
        sidebar.removeAttribute("data-mobile-closing");
      }, 300);
      doc.body.style.overflowY = "";
      sidebar.style.setProperty("--JunSidebar-drawerOpen", "");
    }
  }
}

/**
 * EdgeSidebar has 2 variants:
 * - `permanent` (default) is a sidebar that is visible on the screen but can be set to hidden.
 *    - The width (256px by default) is controlled by `--JunSidebar-permanentWidth` variable.
 *    - It will be hidden by setting `--JunSidebar-permanentHidden: 1`.
 * - `drawer` is a sidebar that is hidden by default and can be opened by `SidebarMobileMenu` component.
 */
// TODO: remove
const StyledEdgeSidebar = styled("div")({
  /** default settings */
  "--JunSidebar-variant": "var(--permanent)",
  "--JunSidebar-permanentWidth": "256px",
  "--JunSidebar-collapsible": "var(--uncollapsed)",
  "--JunSidebar-anchor": "var(--anchorLeft)",
  "--SidebarContent-width": "var(--_permanentWidth, 0px)",
  /** DO NOT OVERRIDE, internal variables */
  "--drawer": "var(--JunSidebar-variant,)",
  "--permanent": "var(--JunSidebar-variant,)",
  "--_permanentWidth": `var(--uncollapsed, var(--JunSidebar-permanentWidth))
                        var(--collapsed, var(--JunSidebar-permanentCollapsedWidth, 0px))`,
  "--collapsed": "var(--JunSidebar-collapsible,)",
  "--uncollapsed": "var(--JunSidebar-collapsible,)",
  "--anchorLeft": "var(--JunSidebar-anchor,)",
  "--anchorRight": "var(--JunSidebar-anchor,)",
  /** ------------------------------------ */
  gridArea: `var(--anchorLeft, EdgeSidebar-L) var(--anchorRight, EdgeSidebar-R)`,
  width: `var(--drawer, 0)
          var(--permanent, var(--_permanentWidth))`,
  transition: "width 0.3s",
  display: "flex",
  flexDirection: "column",
  "&::before": {
    position: "absolute",
    content: '""',
    display: `var(--drawer, block)
              var(--permanent, none)`,
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    backdropFilter: "blur(4px)",
    zIndex: 1,
    transition: "opacity 0.4s, visibility 0.4s",
    opacity: "var(--JunSidebar-drawerOpen, 0)",
    visibility: "hidden",
  },
  "&:not([data-drawer-open], [data-mobile-closing])": {
    overflow: "var(--drawer, hidden)",
  },
  "&[data-drawer-open]": {
    "&::before": {
      visibility: "visible",
    },
  },
  "&[data-collapsible='collapsed']": {
    "--JunSidebar-collapsible": "var(--collapsed)",
  },
  "&[data-collapsible='uncollapsed']": {
    "--JunSidebar-collapsible": "var(--uncollapsed)",
  },
});

const EdgeSidebarRoot = styled("div")({
  "--anchorLeft": "var(--JunSidebar-anchor,)",
  "--anchorRight": "var(--JunSidebar-anchor,)",
  transition: "width 0.3s",
  display: "flex",
  flexDirection: "column",
  "&::before": {
    position: "absolute",
    content: '""',
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    backdropFilter: "blur(4px)",
    zIndex: 1,
    transition: "opacity 0.4s, visibility 0.4s",
    visibility: "hidden",
    opacity: "var(--JunSidebar-drawerOpen, 0)",
  },
  "&[data-drawer-open]": {
    "&::before": {
      visibility: "visible",
    },
  },
});

const StyledEdgeSidebarLeft = styled(EdgeSidebarRoot)({
  ".JunRoot:has(&)": {
    /** default settings */
    "--JunSidebar-variant": "var(--permanent)",
    "--JunSidebar-permanentWidth": "256px",
    "--JunSidebar-collapsible": "var(--uncollapsed)",

    /** DO NOT OVERRIDE, internal variables */
    "--drawer": "var(--JunSidebar-variant,)",
    "--permanent": "var(--JunSidebar-variant,)",
    "--_permanentWidth": `var(--uncollapsed, var(--JunSidebar-permanentWidth))
                        var(--collapsed, var(--JunSidebar-permanentCollapsedWidth, 0px))`,
    "--collapsed": "var(--JunSidebar-collapsible,)",
    "--uncollapsed": "var(--JunSidebar-collapsible,)",
  },
  ".JunRoot:has(&[data-collapsible='collapsed'])": {
    "--JunSidebar-collapsible": "var(--collapsed)",
  },
  ".JunRoot:has(&[data-collapsible='uncollapsed'])": {
    "--JunSidebar-collapsible": "var(--uncollapsed)",
  },
  "--JunSidebar-anchor": "var(--anchorLeft)",
  "--SidebarContent-width": "var(--_permanentWidth, 0px)",
  "--_drawer": "var(--drawer)",
  "--_permanent": "var(--permanent)",
  gridArea: "EdgeSidebar-L",
  width: `var(--drawer, 0)
          var(--permanent, var(--_permanentWidth))`,
  "&::before": {
    display: `var(--drawer, block)
              var(--permanent, none)`,
  },
  "&:not([data-drawer-open], [data-mobile-closing])": {
    overflow: "var(--drawer, hidden)",
  },
});

export const EdgeSidebarLeft = React.forwardRef<HTMLDivElement, BoxProps>(
  function EdgeSidebar({ className, ...props }, ref) {
    return (
      <StyledEdgeSidebarLeft
        // @ts-ignore
        ref={ref}
        {...props}
        className={`EdgeSidebar-L ${className || ""}`}
      />
    );
  },
);

const StyledEdgeSidebarRight = styled(EdgeSidebarRoot)({
  ".JunRoot:has(&)": {
    /** default settings */
    "--JunSidebar-R-variant": "var(--permanent-R)",
    "--JunSidebar-R-permanentWidth": "256px",
    "--JunSidebar-R-collapsible": "var(--uncollapsed-R)",

    /** DO NOT OVERRIDE, internal variables */
    "--drawer-R": "var(--JunSidebar-R-variant,)",
    "--permanent-R": "var(--JunSidebar-R-variant,)",
    "--_permanentWidth-R": `var(--uncollapsed-R, var(--JunSidebar-R-permanentWidth))
                        var(--collapsed-R, var(--JunSidebar-R-permanentCollapsedWidth, 0px))`,
    "--collapsed-R": "var(--JunSidebar-R-collapsible,)",
    "--uncollapsed-R": "var(--JunSidebar-R-collapsible,)",
  },
  ".JunRoot:has(&[data-collapsible='collapsed'])": {
    "--JunSidebar-R-collapsible": "var(--collapsed-R)",
  },
  ".JunRoot:has(&[data-collapsible='uncollapsed'])": {
    "--JunSidebar-R-collapsible": "var(--uncollapsed-R)",
  },
  "--JunSidebar-anchor": "var(--anchorRight)",
  "--SidebarContent-width": "var(--_permanentWidth-R, 0px)",
  "--_drawer": "var(--drawer-R)",
  "--_permanent": "var(--permanent-R)",
  gridArea: "EdgeSidebar-R",
  width: `var(--drawer-R, 0)
          var(--permanent-R, var(--_permanentWidth-R))`,
  "&::before": {
    display: `var(--drawer-R, block)
              var(--permanent-R, none)`,
  },
  "&:not([data-drawer-open], [data-mobile-closing])": {
    overflow: "var(--drawer-R, hidden)",
  },
});

export const EdgeSidebarRight = React.forwardRef<HTMLDivElement, BoxProps>(
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

const EdgeSidebar = React.forwardRef<
  HTMLDivElement,
  BoxProps & { anchor?: "left" | "right" }
>(function EdgeSidebar({ className, anchor = "left", ...props }, ref) {
  return (
    <StyledEdgeSidebar
      // @ts-ignore
      ref={ref}
      {...props}
      className={`${anchor === "right" ? "EdgeSidebar-R" : "EdgeSidebar-L"} ${className || ""}`}
      style={{
        ...(anchor === "right" && {
          "--JunSidebar-anchor": "var(--anchorRight)",
        }),
        ...props.style,
      }}
    />
  );
});

export default EdgeSidebar;
