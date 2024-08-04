import { Breakpoint } from "@mui/material/styles";
import { styled } from "./zero-styled";

export type TemporaryConfig = {
  variant: "temporary";
  width?: string;
};
export type PersistentConfig = {
  variant: "persistent";
  /**
   * @default "fit"
   */
  persistentBehavior?: "fit" | "none";
  width?: string;
};
export type PermanentConfig = {
  variant: "permanent";
  width?: string;
  /**
   * When the viewport shrink to the provided breakpoint, the EdgeSidebar will collapse automatically.
   * Must set `collapsedWidth` to specify the width of the collapsed sidebar
   */
  autoCollapse?: Breakpoint | number;
  /**
   * Required `autoCollapse`, the width of the sidebar after collapsed.
   */
  collapsedWidth?: string;
  /**
   * Required `autoCollapse`, if set the sidebar content will expand on hover.
   */
  expandOnHover?:
    | true
    | {
        delay?: string;
        shadow?: string;
      };
};

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
    if (autoCollapse) {
      // toggle within autoCollapse breakpoint
      if (nextCollapsed) {
        sidebar.removeAttribute("data-auto-collapse-off");
        sidebar.removeAttribute("data-edge-uncollapsed");
      } else {
        sidebar.setAttribute("data-auto-collapse-off", "");
        sidebar.removeAttribute("data-edge-collapsed");
      }
    } else {
      if (nextCollapsed) {
        sidebar.setAttribute("data-edge-collapsed", "");
        sidebar.removeAttribute("data-edge-uncollapsed");
        sidebar.removeAttribute("data-auto-collapse-off");
      } else {
        sidebar.removeAttribute("data-edge-collapsed");
        sidebar.setAttribute("data-edge-uncollapsed", "");
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
    const currentOpen = sidebar.getAttribute("data-temporary-open") !== null;
    const nextOpen = state === undefined ? !currentOpen : state;
    if (nextOpen) {
      sidebar.setAttribute("data-temporary-open", "");
      sidebar.style.setProperty("--EdgeSidebar-temporaryOpen", "1");
      // @ts-expect-error Material UI issue
      function handleOutsideClick(event: MouseEvent) {
        const closer = doc.querySelector(
          ".EdgeTemporaryClose",
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
      sidebar.removeAttribute("data-temporary-open");
      sidebar.setAttribute("data-mobile-closing", "");
      setTimeout(() => {
        sidebar.removeAttribute("data-mobile-closing");
      }, 300);
      sidebar.style.setProperty("--EdgeSidebar-temporaryOpen", "");
    }
  }
}

export const EdgeSidebarRoot = styled("div")({
  "--anchorLeft": "var(--EdgeSidebar-anchor,)",
  "--anchorRight": "var(--EdgeSidebar-anchor,)",
  transition: "width 0.3s",
  display: "flex",
  flexDirection: "column",
  // ==============================
  // To keep the EdgeSidebar fixed when the Content is scrollable
  position: "var(--_permanent, sticky)" as any,
  top: "var(--_permanent, var(--Header-clipHeight, 0px))",
  zIndex: "var(--_temporary, 2) var(--_permanent, 1)",
  height:
    "var(--_permanent, calc(var(--Root-height) - var(--Header-clipHeight, 0px)))",
  // ==============================
  "&::before": {
    position: "absolute",
    content: '""',
    inset: 0,
    backgroundColor: "var(--EdgeSidebar-overlay)",
    backdropFilter: "blur(4px)",
    zIndex: 1,
    transition: "opacity 0.4s, visibility 0.4s",
    visibility: "hidden",
    opacity: "var(--EdgeSidebar-temporaryOpen, 0)",
  },
  "&[data-temporary-open]": {
    "&::before": {
      visibility: "visible",
    },
  },
  "html:has(&[data-temporary-open])": {
    overflow: "hidden",
  },
  "&::after": {
    position: "absolute",
    content: '""',
    display: "block",
    width: "var(--_permanent, var(--SidebarContent-width))",
    height: "var(--Header-clipHeight)",
    top: "calc(-1 * var(--Header-clipHeight))",
  },
});
