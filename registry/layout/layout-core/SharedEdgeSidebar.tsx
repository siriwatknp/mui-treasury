"use client";
import { Breakpoint } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { layoutAttrs } from "./layoutAttrs";
import { layoutClasses } from "./layoutClasses";

export type DrawerConfig = {
  width?: string;
  showHeader?: boolean;
  withoutOverlay?: boolean;
};
export type PermanentConfig = {
  width?: string;
  collapsedWidth?: string;
  visibility?: "hidden" | "visible";
  hoverUncollapse?:
    | true
    | {
        delay?: string;
        shadow?: string;
      };
};

export type EdgeSidebarVariant =
  | ["drawer", DrawerConfig?]
  | ["permanent", PermanentConfig?];

export type EdgeSidebarVariantInput =
  | EdgeSidebarVariant
  | Partial<Record<Breakpoint, EdgeSidebarVariant>>;

export function internalCollapseSidebar(options: {
  event: React.MouseEvent;
  selector: string;
  state?: boolean;
  document?: Document | null;
}) {
  const { state, document: d, selector, event } = options || {};
  const doc = d ?? document;
  const sidebar = doc.querySelector(selector) as HTMLElement;
  if (sidebar) {
    const currentCollapsed =
      window
        .getComputedStyle(event.target as Element)
        .getPropertyValue("--_sidebarCollapsed") === "1";
    const nextCollapsed = state === undefined ? !currentCollapsed : state;
    const autoCollapse =
      window
        .getComputedStyle(event.target as Element)
        .getPropertyValue("--_autoCollapse") === "1";
    const inAutoCollapse =
      window
        .getComputedStyle(event.target as Element)
        .getPropertyValue("--_in-autoCollapse") === "1";

    if (nextCollapsed) {
      sidebar.removeAttribute(layoutAttrs.isEdgeSidebarUncollapsed);
      if (!autoCollapse || inAutoCollapse) {
        sidebar.setAttribute(layoutAttrs.isEdgeSidebarCollapsed, "");
      }
    } else {
      sidebar.removeAttribute(layoutAttrs.isEdgeSidebarCollapsed);
      if (!inAutoCollapse) {
        sidebar.setAttribute(layoutAttrs.isEdgeSidebarUncollapsed, "");
      }
    }
  }
}

export function internalToggleSidebar(options: {
  selector: string;
  state?: boolean;
  document?: Document | null;
}) {
  const { state, document: d, selector } = options || {};
  const doc = d ?? document;
  const sidebar = doc.querySelector(selector) as HTMLDivElement | null;
  if (sidebar) {
    const currentOpen = sidebar.getAttribute(layoutAttrs.isDrawerOpen) !== null;
    const nextOpen = state === undefined ? !currentOpen : state;
    if (nextOpen) {
      sidebar.setAttribute(layoutAttrs.isDrawerOpen, "");
      sidebar.style.setProperty("--jun-ES-drawerOpen", "1");
      function handleOutsideClick(event: MouseEvent) {
        const closer = doc.querySelector(
          `.${layoutClasses.EdgeDrawerClose}`,
        ) as HTMLButtonElement;
        if (
          // clicking on the backdrop (psuedo element of sidebar) will close the sidebar
          event.target === sidebar ||
          // clicking on the closer button will close the sidebar
          (closer && closer.contains(event.target as Node))
        ) {
          internalToggleSidebar({
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
      sidebar.removeAttribute(layoutAttrs.isDrawerOpen);
      sidebar.setAttribute(layoutAttrs.isDrawerClosing, "");
      setTimeout(() => {
        sidebar.removeAttribute(layoutAttrs.isDrawerClosing);
      }, 300);
      sidebar.style.setProperty("--jun-ES-drawerOpen", "");
    }
  }
}

export const EdgeSidebarRoot = styled("div")({
  "--anchorLeft": "var(--jun-ES-anchor,)",
  "--anchorRight": "var(--jun-ES-anchor,)",
  "--drawer-h": "var(--jun-h)",
  transition: "var(--tsn, width 0.3s)",
  display: "flex",
  flexDirection: "column",
  padding: "0px", // prevent user from customizing it
  margin: "0px", // prevent user from customizing it
  // ==============================
  // To keep the EdgeSidebar fixed when the Content is scrollable
  position: "var(--_permanent, sticky)" as never,
  top: "var(--_permanent, var(--jun-H-clip-h))",
  zIndex: "var(--_drawer, 2) var(--_permanent, 1)" as never,
  height: "var(--_permanent, calc(var(--jun-h) - var(--jun-H-clip-h)))",
  // ==============================
  "&::before": {
    display: `var(--_drawer, block)
                var(--_permanent, none)`,
    position: "absolute",
    content: '""',
    inset: "0",
    backgroundColor: "rgba(0, 0, 0, 0.48)",
    backdropFilter: "blur(4px)",
    zIndex: "1",
    transition: "var(--tsn, opacity 0.4s, visibility 0.4s)",
    visibility: "hidden",
    opacity: "var(--jun-ES-drawerOpen, 0)",
  },
  [`&[${layoutAttrs.isDrawerOpen}]`]: {
    "&::before": {
      visibility: "visible",
    },
  },
  [`html:has([${layoutAttrs.isDrawerOpen}]:not(.${layoutClasses.DrawerWithoutOverlay}):not(.${layoutClasses.Content} &))`]:
    {
      overflow: "hidden",
    },
  "&::after": {
    position: "absolute",
    content: '""',
    display: "block",
    width: "var(--_permanent, var(--jun-EC-width))",
    height: "var(--jun-H-clip-h)",
    top: "calc(-1 * var(--jun-H-clip-h))",
    left: "var(--anchorLeft, 0px) var(--anchorRight, unset)",
    right: "var(--anchorLeft, unset) var(--anchorRight, 0px)",
    border: "inherit",
  },
});
