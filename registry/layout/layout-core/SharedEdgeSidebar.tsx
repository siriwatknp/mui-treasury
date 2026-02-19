"use client";
import { Breakpoint } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

export type TemporaryConfig = {
  width?: string;
};
export type PersistentConfig = {
  /**
   * @default "fit"
   */
  persistentBehavior?: "fit" | "none";
  width?: string;
};
export type PermanentConfig = {
  width?: string;
  autoCollapse?: Breakpoint;
  collapsedWidth?: string;
  expandOnHover?:
    | true
    | {
        delay?: string;
        shadow?: string;
      };
};

export type EdgeSidebarVariant =
  | ["temporary", TemporaryConfig?]
  | ["persistent", PersistentConfig?]
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
      sidebar.removeAttribute("data-edge-uncollapsed");
      if (!autoCollapse || inAutoCollapse) {
        sidebar.setAttribute("data-edge-collapsed", "");
      }
    } else {
      sidebar.removeAttribute("data-edge-collapsed");
      if (!inAutoCollapse) {
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
    const currentOpen = sidebar.getAttribute("data-drawer-open") !== null;
    const nextOpen = state === undefined ? !currentOpen : state;
    if (nextOpen) {
      sidebar.setAttribute("data-drawer-open", "");
      sidebar.style.setProperty("--jun-ES-drawerOpen", "1");
      function handleOutsideClick(event: MouseEvent) {
        if (event.target === sidebar) {
          internalToggleSidebar({
            ...options,
            state: false,
          });
          doc.removeEventListener?.("click", handleOutsideClick);
        }
      }
      setTimeout(() => {
        doc.addEventListener?.("click", handleOutsideClick);
      }, 0);
    } else {
      sidebar.removeAttribute("data-drawer-open");
      sidebar.setAttribute("data-mobile-closing", "");
      setTimeout(() => {
        sidebar.removeAttribute("data-mobile-closing");
      }, 300);
      sidebar.style.setProperty("--jun-ES-drawerOpen", "");
    }
  }
}

export const EdgeSidebarRoot = styled("div")({
  "--anchorLeft": "var(--jun-ES-anchor,)",
  "--anchorRight": "var(--jun-ES-anchor,)",
  "--drawer-h": "var(--jun-h)",
  transition: "width 0.3s",
  display: "flex",
  flexDirection: "column",
  position: "var(--_permanent, sticky)" as never,
  top: "var(--_permanent, var(--jun-H-clip-h, 0px))",
  height: "var(--_permanent, calc(var(--jun-h) - var(--jun-H-clip-h, 0px)))",
  "&::before": {
    position: "absolute",
    content: '""',
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.48)",
    backdropFilter: "blur(4px)",
    zIndex: 1,
    transition: "opacity 0.4s, visibility 0.4s",
    visibility: "hidden",
    opacity: "var(--jun-ES-drawerOpen, 0)",
  },
  "&[data-drawer-open]": {
    "&::before": {
      visibility: "visible",
    },
  },
  "html:has(&[data-drawer-open])": {
    overflow: "hidden",
  },
  "&::after": {
    position: "absolute",
    content: '""',
    display: "block",
    width: "var(--_permanent, var(--jun-EC-width))",
    height: "var(--jun-H-clip-h)",
    top: "calc(-1 * var(--jun-H-clip-h))",
  },
});
