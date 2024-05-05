import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const PART = {
  HEADER: "JunHeader",
  SIDEBAR: "JunSidebar",
  MAIN: "JunMain",
};

export function collapseEdgeSidebar(options?: {
  sidebarId?: string;
  document?: Document | null;
}) {
  const { document: d, sidebarId } = options || {};
  const doc = d ?? document;
  const sidebar = doc.querySelector(
    sidebarId ? `#${sidebarId}` : ".JunSidebar",
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
    sidebarId ? `#${sidebarId}` : ".JunSidebar",
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
    sidebarId ? `#${sidebarId}` : ".JunSidebar",
  );
  const page = doc.querySelector(".JunPage") as HTMLDivElement | null;
  if (sidebar && page) {
    const currentOpen = sidebar.getAttribute("data-drawer-open") !== null;
    const nextOpen = state === undefined ? !currentOpen : state;
    if (nextOpen) {
      sidebar.setAttribute("data-drawer-open", "");
      page.style.setProperty("--JunSidebar-drawerOpen", "1");
    } else {
      sidebar.removeAttribute("data-drawer-open");
      sidebar.setAttribute("data-mobile-closing", "");
      setTimeout(() => {
        sidebar.removeAttribute("data-mobile-closing");
      }, 300);
      page.style.setProperty("--JunSidebar-drawerOpen", "");
    }
  }
}

export function EdgeDrawerClose() {
  return (
    <Box
      component="button"
      sx={{
        display: "none",
        position: "fixed",
        top: "0.875rem",
        right: "0.875rem",
        zIndex: 2,
        width: 40,
        height: 40,
        color: "white",
        backgroundColor: "#999",
        borderRadius: "50%",
        "& svg": {
          width: "1.5em",
          height: "1.5em",
        },
        "[data-drawer-open] &": {
          display: "var(--drawer, flex) var(--permanent, none)",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
      onClick={() =>
        toggleEdgeSidebarDrawer({
          state: false,
          document: (
            document.getElementById(
              "storybook-preview-iframe",
            ) as null | HTMLIFrameElement
          )?.contentDocument,
        })
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </Box>
  );
}

const EdgeTriggerRoot = styled("div", { name: "EdgeTrigger" })({});

export type EdgeTriggerProps = Omit<
  Parameters<typeof EdgeTriggerRoot>[0],
  "children"
> & {
  target: {
    anchor?: "left" | "right";
    field: "open" | "collapsed";
  };
  children?: (setState: (newState?: boolean) => void) => React.ReactNode;
};

export function EdgePermanentCollapse() {
  return (
    <React.Fragment>
      <Box
        component="button"
        sx={{
          display:
            "var(--drawer, none) var(--permanent, var(--collapsed, none) var(--uncollapsed, flex))",
          alignItems: "center",
          justifyContent: "center",
          "& svg": {
            width: "1.5em",
            height: "1.5em",
          },
        }}
        onClick={() =>
          collapseEdgeSidebar({
            document: (
              document.getElementById(
                "storybook-preview-iframe",
              ) as null | HTMLIFrameElement
            )?.contentDocument,
          })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </Box>
      <Box
        component="button"
        sx={{
          display:
            "var(--drawer, none) var(--permanent, var(--collapsed, flex) var(--uncollapsed, none))",
          alignItems: "center",
          justifyContent: "center",
          "& svg": {
            width: "1.5em",
            height: "1.5em",
          },
        }}
        onClick={() =>
          uncollapseEdgeSidebar({
            document: (
              document.getElementById(
                "storybook-preview-iframe",
              ) as null | HTMLIFrameElement
            )?.contentDocument,
          })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </Box>
    </React.Fragment>
  );
}

export function Page({ className, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      className={`JunPage ${className}`}
      sx={{
        bgcolor: "grey.100",
        minHeight: "100lvh",
        display: "grid",
        position: "relative",
        containerType: "size",
        containerName: "page",
        transition: "grid-template-columns 0.3s",
        gridTemplateAreas: `
        "${PART.HEADER}"
        "${PART.MAIN}"
        `,
        gridTemplateRows: "auto 1fr",

        [`&:has(.${PART.SIDEBAR})`]: {
          gridTemplateAreas: `
            "${PART.SIDEBAR} ${PART.HEADER}"
            "${PART.SIDEBAR} ${PART.MAIN}"
          `,
          gridTemplateColumns: "max-content 1fr",
          "--JunSidebar-drawerOpen": "0",
        },
      }}
    />
  );
}

const HeaderRoot = styled("header")({
  gridArea: PART.HEADER,
  height: 48,
  alignContent: "center",
  display: "flex",
  alignItems: "center",
});

export const Header = ({ className = "", ...props }: BoxProps<"header">) => {
  return <HeaderRoot className={`${PART.HEADER} ${className}`} {...props} />;
};

const ContentRoot = styled("main")({
  gridArea: PART.MAIN,
  bgcolor: "#fff",
  borderTopLeftRadius: 20,
  p: 2,
});
export function Content({ className, ...props }: BoxProps) {
  return <ContentRoot className={`${PART.MAIN} ${className}`} {...props} />;
}

const SidebarContentRoot = styled("div")({
  "--SidebarContent-width": "var(--_permanentWidth, 0px)",
  display: "flex",
  flexDirection: "column",
  opacity: `var(--drawer, var(--JunSidebar-drawerOpen))
            var(--permanent, 1)`,
  visibility: `var(--drawer, hidden)
               var(--permanent, visible)` as any,
  overflowX: "auto", // prevent horizontal content overflow
  backgroundColor: "background.paper",
  flex: 1,
  position: "relative",
  zIndex: 2,
  width: "var(--SidebarContent-width)",
  transition: `var(--drawer, opacity 0.3s, transform 0.3s)
               var(--permanent, opacity 0.7s, width 0.3s var(--SidebarContent-transitionDelay, 0s), box-shadow 0.3s var(--SidebarContent-transitionDelay, 0s))`,
  transform: `var(--drawer, translateX(calc((1 - var(--JunSidebar-drawerOpen)) * -100%)))
              var(--permanent, translateX(calc(var(--JunSidebar-permanentHidden) * -100%)))`,
  "[data-sidebar-hidden] &": {
    visibility: "hidden",
    opacity: 0,
  },
  "[data-drawer-open] &, [data-mobile-closing] &": {
    visibility: "visible",
    width: `var(--drawer, var(--JunSidebar-drawerWidth, 300px))
            var(--permanent, var(--SidebarContent-width))`,
  },
  "[data-mobile-closing] &": {
    transition: "transform 0.3s, visibility 0.3s, opacity 0.3s",
  },
});
export function SidebarContent({ className = "", ...props }: BoxProps) {
  return (
    // @ts-ignore
    <SidebarContentRoot {...props} className={`SidebarContent ${className}`} />
  );
}

/**
 * EdgeSidebar has 2 variants:
 * - `permanent` (default) is a sidebar that is visible on the screen but can be set to hidden.
 *    - The width (256px by default) is controlled by `--JunSidebar-permanentWidth` variable.
 *    - It will be hidden by setting `--JunSidebar-permanentHidden: 1`.
 * - `drawer` is a sidebar that is hidden by default and can be opened by `SidebarMobileMenu` component.
 */
const EdgeSidebarRoot = styled("div")({
  /** default settings */
  "--JunSidebar-variant": "var(--permanent)",
  "--JunSidebar-permanentWidth": "256px",
  "--JunSidebar-collapsible": "var(--uncollapsed)",
  "--JunSidebar-permanentCollapsedWidth": "72px",
  /** DO NOT OVERRIDE, internal variables */
  "--drawer": "var(--JunSidebar-variant,)",
  "--permanent": "var(--JunSidebar-variant,)",
  "--_permanentWidth": `var(--uncollapsed, var(--JunSidebar-permanentWidth))
                        var(--collapsed, var(--JunSidebar-permanentCollapsedWidth))`,
  "--collapsed": "var(--JunSidebar-collapsible,)",
  "--uncollapsed": "var(--JunSidebar-collapsible,)",
  /** ------------------------------------ */
  gridArea: PART.SIDEBAR,
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
export function EdgeSidebar({ className = "", ...props }: BoxProps) {
  return (
    // @ts-ignore
    <EdgeSidebarRoot {...props} className={`${PART.SIDEBAR} ${className}`} />
  );
}
