import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Container, { ContainerProps } from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const PART = {
  HEADER: "JunHeader",
  SIDEBAR: "JunSidebar",
  SIDEBAR_R: "JunSidebarRight",
  INSET_SIDEBAR: "JunInsetSidebar",
  MAIN: "JunMain",
  FOOTER: "JunFooter",
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

export function EdgeDrawerClose({ sidebarId }: { sidebarId?: string }) {
  return (
    <Box
      component="button"
      sx={{
        display: "none",
        position: "fixed",
        top: "0.875rem",
        right: "var(--anchorLeft, 0.875rem)",
        left: "var(--anchorRight, 0.875rem)",
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
          sidebarId,
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

export function Root({ className, sx, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      className={`JunRoot ${className}`}
      sx={[
        {
          // overflow: "hidden auto",
          bgcolor: "background.paper",
          minHeight: "100lvh",
          display: "grid",
          position: "relative",
          transition: "grid-template-columns 0.3s",
          gridTemplateAreas: `
          "${PART.HEADER}"
          "${PART.MAIN}"
          "${PART.FOOTER}"
          `,
          gridTemplateRows: "auto 1fr",

          [`&:has(.${PART.SIDEBAR})`]: {
            gridTemplateAreas: `
              "${PART.SIDEBAR} ${PART.HEADER}"
              "${PART.SIDEBAR} ${PART.MAIN}"
              "${PART.SIDEBAR} ${PART.FOOTER}"
            `,
            gridTemplateColumns: "max-content 1fr",
            "--JunSidebar-drawerOpen": "0",
          },
          [`&:has(.${PART.SIDEBAR_R})`]: {
            gridTemplateAreas: `
              "${PART.HEADER} ${PART.SIDEBAR_R}"
              "${PART.MAIN} ${PART.SIDEBAR_R}"
              "${PART.FOOTER} ${PART.SIDEBAR_R}"
            `,
            gridTemplateColumns: "1fr max-content",
            "--JunSidebar-drawerOpen": "0",
          },
          // TODO: find a better way to support both L & R
          [`&:has(.${PART.SIDEBAR}):has(.${PART.SIDEBAR_R})`]: {
            gridTemplateAreas: `
              "${PART.SIDEBAR} ${PART.HEADER} ${PART.SIDEBAR_R}"
              "${PART.SIDEBAR} ${PART.MAIN} ${PART.SIDEBAR_R}"
              "${PART.SIDEBAR} ${PART.FOOTER} ${PART.SIDEBAR_R}"
            `,
            gridTemplateColumns: "max-content 1fr max-content",
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
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
});
export function Content({ className, ...props }: BoxProps) {
  return <ContentRoot className={`${PART.MAIN} ${className}`} {...props} />;
}

const SidebarContentRoot = styled("div")(({ theme }) => ({
  "--SidebarContent-width": "var(--_permanentWidth, 0px)",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  display: "flex",
  flexDirection: "column",
  opacity: `var(--drawer, var(--JunSidebar-drawerOpen))
            var(--permanent, 1)`,
  visibility: `var(--drawer, hidden)
               var(--permanent, visible)` as any,
  overflowX: "auto", // prevent horizontal content overflow
  flex: 1,
  position: "var(--drawer, fixed) var(--permanent, relative)" as any,
  zIndex: 2,
  width: "var(--SidebarContent-width)",
  height: "var(--drawer, 100vh)",
  overflowY: "var(--drawer, auto)" as any,
  transition: `var(--drawer, opacity 0.3s, transform 0.3s)
               var(--permanent, opacity 0.7s, width 0.3s var(--SidebarContent-transitionDelay, 0s), box-shadow 0.3s var(--SidebarContent-transitionDelay, 0s))`,
  transform: `var(--drawer, var(--anchorLeft, translateX(calc((1 - var(--JunSidebar-drawerOpen)) * -100%))) var(--anchorRight, translateX(calc(var(--JunSidebar-drawerOpen) * -100%))))
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
}));
export function SidebarContent({ className = "", ...props }: BoxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    // @ts-ignore
    <SidebarContentRoot
      ref={ref}
      {...props}
      className={`SidebarContent ${className}`}
    />
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
  "--JunSidebar-anchor": "var(--anchorLeft)",
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
  gridArea: `var(--anchorLeft, ${PART.SIDEBAR}) var(--anchorRight, ${PART.SIDEBAR_R})`,
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
export function EdgeSidebar({
  anchor = "left",
  className = "",
  ...props
}: BoxProps & { anchor?: "left" | "right" }) {
  return (
    // @ts-ignore
    <EdgeSidebarRoot
      {...props}
      className={`${anchor === "right" ? PART.SIDEBAR_R : PART.SIDEBAR} ${className}`}
      style={{
        ...(anchor === "right" && {
          "--JunSidebar-anchor": "var(--anchorRight)",
        }),
        ...props.style,
      }}
    />
  );
}

const InsetContainerRoot = styled(Container)({
  display: "flex",
  flexFlow: "row nowrap",
  flexGrow: 1,
  [`& > *:not([class*="${PART.INSET_SIDEBAR}"])`]: {
    flexGrow: 1,
    overflow: "auto",
  },
});
export function InsetContainer({
  leftSidebar,
  rightSidebar,
  children,
  ...props
}: ContainerProps & {
  leftSidebar?: React.ReactElement;
  rightSidebar?: React.ReactElement;
}) {
  return (
    <InsetContainerRoot {...props}>
      {leftSidebar && React.cloneElement(leftSidebar, { anchor: "left" })}
      {children}
      {rightSidebar && React.cloneElement(rightSidebar, { anchor: "right" })}
    </InsetContainerRoot>
  );
}

export function InsetAvoidingView(props: BoxProps) {
  return (
    <Box
      className="InsetAvoidingView"
      {...props}
      sx={{
        transition: "all 225ms",
        marginRight: "var(--InsetSidebarR-width)",
        marginLeft: "var(--InsetSidebarL-width)",
      }}
    />
  );
}

const InsetSidebarRoot = styled("aside")({
  "--InsetSidebar-position": "var(--sticky)",
  "--InsetSidebar-anchor": "var(--anchor-right)",
  /** DO NOT OVERRIDE, internal variables */
  "--sticky": "var(--InsetSidebar-position,)",
  "--fixed": "var(--InsetSidebar-position,)",
  "--absolute": "var(--InsetSidebar-position,)",
  "--anchor-right": "var(--InsetSidebar-anchor,)",
  "--anchor-left": "var(--InsetSidebar-anchor,)",
  position: "relative",
  flexShrink: 0,
});
const InsetSidebarBody = styled("div")(({ theme }) => ({
  boxSizing: "content-box",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "inherit",
  overflow: "auto",
  borderColor: theme.palette.divider,
  position:
    "var(--sticky, sticky) var(--fixed, fixed) var(--absolute, absolute)" as any,
  height:
    "var(--sticky, initial) var(--fixed, calc(100% - var(--Header-height, 0px))) var(--absolute, calc(100vh - var(--Header-height, 0px)))",
  width: "inherit",
  top: 0,
  borderRight: "var(--anchor-left, 1px solid transparent)",
  borderLeft: "var(--anchor-right, 1px solid transparent)",
  marginLeft:
    "var(--fixed, var(--anchor-left, -9999px)) var(--absolute, initial) var(--sticky, initial)",
  paddingLeft:
    "var(--fixed, var(--anchor-left, 9999px)) var(--absolute, initial) var(--sticky, initial)",
  marginRight:
    "var(--fixed, var(--anchor-right, -9999px)) var(--absolute, initial) var(--sticky, initial)",
  paddingRight:
    "var(--fixed, var(--anchor-right, 9999px)) var(--absolute, initial) var(--sticky, initial)",
  paddingTop: "var(--fixed, var(--Header-height))",
}));
export function InsetSidebar({
  position = "sticky",
  anchor = "right",
  children,
  ...props
}: {
  anchor?: "left" | "right";
  position?: "fixed" | "absolute" | "sticky";
} & React.PropsWithChildren<React.DetailsHTMLAttributes<HTMLDivElement>>) {
  return (
    <InsetSidebarRoot
      className={PART.INSET_SIDEBAR}
      {...props}
      style={{
        ...(anchor !== "right" && {
          "--InsetSidebar-anchor": `var(--anchor-${anchor})`,
        }),
        ...(position !== "sticky" && {
          "--InsetSidebar-position": `var(--${position})`,
        }),
      }}
    >
      <InsetSidebarBody>{children}</InsetSidebarBody>
    </InsetSidebarRoot>
  );
}

export function Footer(props: BoxProps) {
  return (
    <Box
      component="footer"
      {...props}
      sx={{
        transition: "all 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, color 0s",
      }}
    />
  );
}
