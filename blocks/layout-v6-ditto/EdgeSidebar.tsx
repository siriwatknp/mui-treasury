import React from "react";
import { BoxProps } from "@mui/material/Box";
import { Breakpoint } from "@mui/material/styles";
import { styled } from "./zero-styled";

export function applyDrawerStyles(params?: { width?: string }) {
  const { width } = params || {};
  return {
    "--JunSidebar-variant": "var(--drawer)",
    ...(width && {
      "--SidebarContent-width": width,
    }),
    ".JunRoot:has(&) .EdgeSidebar-trigger": {
      display: "inline-flex",
    },
  };
}

export function applyPermanentStyles(params?: {
  width?: string;
  autoCollapse?: Breakpoint;
  collapsedWidth?: string;
  smallestBreakpoint?: string;
}) {
  const { width, autoCollapse, smallestBreakpoint = "xs" } = params || {};
  return {
    ...(width && {
      "--JunSidebar-permanentWidth": width,
    }),
    ...(autoCollapse && {
      "--JunSidebar-collapsible": {
        [smallestBreakpoint]: "var(--collapsed)",
        [autoCollapse]: "var(--uncollapsed)",
      },
      '&[data-collapsible="collapsed"]': {
        "--JunSidebar-collapsible": {
          [autoCollapse]: "var(--uncollapsed)",
        },
      },
      "& .EdgeSidebar-collapser": {
        display: {
          [autoCollapse]: "none",
        },
      },
    }),
  };
}

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

export function toggleEdgeSidebarDrawer(options?: {
  sidebarId?: string;
  state?: boolean;
  document?: Document | null;
}) {
  const { state, document: d, sidebarId } = options || {};
  const doc = d ?? document;
  const sidebar = doc.querySelector(
    sidebarId ? `#${sidebarId}` : ".EdgeSidebar-L",
  );
  const page = doc.querySelector(".JunRoot") as HTMLDivElement | null;
  if (sidebar && page) {
    const currentOpen = sidebar.getAttribute("data-drawer-open") !== null;
    const nextOpen = state === undefined ? !currentOpen : state;
    if (nextOpen) {
      sidebar.setAttribute("data-drawer-open", "");
      page.style.setProperty("--JunSidebar-drawerOpen", "1");
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
      page.style.setProperty("--JunSidebar-drawerOpen", "");
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
const StyledEdgeSidebar = styled("div")({
  /** default settings */
  "--JunSidebar-variant": "var(--permanent)",
  "--JunSidebar-permanentWidth": "256px",
  "--JunSidebar-collapsible": "var(--uncollapsed)",
  "--JunSidebar-permanentCollapsedWidth": "72px",
  "--JunSidebar-anchor": "var(--anchorLeft)",
  "--SidebarContent-width": "var(--_permanentWidth, 0px)",
  /** DO NOT OVERRIDE, internal variables */
  "--drawer": "var(--JunSidebar-variant,)",
  "--permanent": "var(--JunSidebar-variant,)",
  "--_permanentWidth": `var(--uncollapsed, var(--JunSidebar-permanentWidth))
                        var(--collapsed, var(--JunSidebar-permanentCollapsedWidth))`,
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
  ".JunRoot:has(&) .EdgeSidebar-trigger": {
    display: "none",
  },
  ".JunRoot:has(&) .EdgeSidebarR-trigger": {
    display: "none",
  },
});

const EdgeSidebar = React.forwardRef<
  HTMLDivElement,
  BoxProps & { anchor?: "left" | "right" }
>(function EdgeSidebar({ className, anchor = "left", ...props }, ref) {
  return (
    <StyledEdgeSidebar
      // @ts-ignore
      ref={ref}
      {...props}
      className={`EdgeSidebar-${anchor === "right" ? "R" : "L"} ${className || ""}`}
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
