import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import { HeaderMockup, NavSidebarMockup } from "../mockup-layout";

const BP = {
  xs: "0px", // phone
  sm: "600px", // tablet
  md: "900px", // small laptop
  lg: "1200px", // desktop
  xl: "1536px", // large screen
};

const PART = {
  HEADER: "JunHeader",
  SIDEBAR: "JunSidebar",
  MAIN: "JunMain",
};

function toggleSidebarHidden(options?: {
  state?: boolean;
  document?: Document | null;
}) {
  const { state, document: d } = options || {};
  const doc = d ?? document;
  const sidebar = doc.querySelector(".JunSidebar");
  if (sidebar) {
    const currentHidden = sidebar.getAttribute("data-sidebar-hidden") !== null;
    const nextHidden = state === undefined ? !currentHidden : state;
    if (nextHidden) {
      sidebar.setAttribute("data-sidebar-hidden", "");
    } else {
      sidebar.removeAttribute("data-sidebar-hidden");
    }
  }
}

function toggleMobileSidebar(options?: {
  state?: boolean;
  document?: Document | null;
}) {
  const { state, document: d } = options || {};
  const doc = d ?? document;
  const sidebar = doc.querySelector(".JunSidebar");
  const page = doc.querySelector(".JunPage") as HTMLDivElement | null;
  if (sidebar && page) {
    const currentOpen = sidebar.getAttribute("data-mobile-open") !== null;
    const nextOpen = state === undefined ? !currentOpen : state;
    if (nextOpen) {
      sidebar.setAttribute("data-mobile-open", "");
      page.style.setProperty("--JunSidebar-mobileOpen", "1");
    } else {
      sidebar.removeAttribute("data-mobile-open");
      sidebar.setAttribute("data-mobile-closing", "");
      setTimeout(() => {
        sidebar.removeAttribute("data-mobile-closing");
      }, 300);
      page.style.setProperty("--JunSidebar-mobileOpen", "");
    }
  }
}

function SidebarMobileCloser() {
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
        "[data-mobile-open] &": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
      onClick={() =>
        toggleMobileSidebar({
          state: false,
          document: (
            document.getElementById(
              "storybook-preview-iframe"
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

function SidebarMobileMenu() {
  return (
    <Box
      component="button"
      sx={{
        display: "none",
        width: 40,
        height: 40,
        "& svg": {
          width: "1.5em",
          height: "1.5em",
        },
        [`@container page (max-width: calc(${BP.sm} - 1px))`]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
      onClick={() =>
        toggleMobileSidebar({
          state: true,
          document: (
            document.getElementById(
              "storybook-preview-iframe"
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
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </Box>
  );
}

function Page({ className, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      className={`JunPage ${className}`}
      sx={{
        bgcolor: "grey.100",
        minHeight: "100lvh",
        display: "grid",
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
          "--JunSidebar-mobileOpen": "0",
        },
      }}
    />
  );
}

function Header({ className, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      component="header"
      className={PART.HEADER}
      sx={{
        gridArea: PART.HEADER,
        height: 48,
        alignContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    />
  );
}

function Main({ className, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      component="main"
      className={PART.MAIN}
      sx={{
        gridArea: PART.MAIN,
        bgcolor: "#fff",
        borderTopLeftRadius: 20,
        p: 2,
      }}
    />
  );
}

function SidebarNav({ className, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      className="SidebarNav"
      component="nav"
      sx={{
        containerType: "inline-size",
        opacity: "var(--JunSidebar-mobileOpen)",
        visibility: "hidden",
        backgroundColor: "background.paper",
        flex: 1,
        width: "256px",
        position: "relative",
        zIndex: 2,
        transition: "opacity 0.3s, transform 0.3s, width 0.3s",
        transform:
          "translateX(calc((1 - var(--JunSidebar-mobileOpen)) * -100%))",
        maxWidth: "100%",
        [`@container page (min-width: ${BP.sm})`]: {
          backgroundColor: "initial",
          transform: "translateX(calc(var(--JunSidebar-hidden) * -100%))",
          transition: "opacity 0.7s, width 0.3s",
          width: "var(--JunSidebar-width)",
          visibility: "visible",
          opacity: 1,
        },
        "[data-sidebar-hidden] &": {
          visibility: "hidden",
          opacity: 0,
        },
        "[data-mobile-open] &, [data-mobile-closing] &": {
          visibility: "visible",
          maxWidth: "initial",
        },
      }}
    />
  );
}

function Sidebar({ className, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      className={`${PART.SIDEBAR}`}
      sx={{
        "--JunSidebar-hidden": "1",
        gridArea: PART.SIDEBAR,
        width:
          "calc((1 - var(--JunSidebar-hidden)) * var(--JunSidebar-width, 0px))",
        transition: "width 0.3s",
        display: "flex",
        flexDirection: "column",
        "&::before": {
          position: "fixed",
          content: '""',
          display: "block",
          inset: 0,
          bgcolor: "rgba(0, 0, 0, 0.12)",
          backdropFilter: "blur(4px)",
          zIndex: 1,
          transition: "opacity 0.4s, visibility 0.4s",
          opacity: "var(--JunSidebar-mobileOpen, 0)",
          visibility: "hidden",
        },
        "&[data-mobile-open]": {
          "&::before": {
            visibility: "visible",
          },
        },
        "&[data-mobile-closing]": {
          "& .SidebarNav": {
            transition: "transform 0.3s, visibility 0.3s, opacity 0.3s",
          },
        },
        [`@container page (min-width: ${BP.sm})`]: {
          "--JunSidebar-width": "80px",
          "--JunSidebar-hidden": "0",
          "&[data-sidebar-hidden]": {
            "--JunSidebar-hidden": "1",
          },
          "&::before": {
            display: "none",
          },
        },
        "@container page (min-width: 768px)": {
          "--JunSidebar-width": "256px",
        },
      }}
    />
  );
}
/**
 * Page handles slots when components are inserted.
 *
 * However, to adjust width and height of components, control each component directly.
 */
export function DittoLayout() {
  function getDocument() {
    return (
      document.getElementById(
        "storybook-preview-iframe"
      ) as null | HTMLIFrameElement
    )?.contentDocument;
  }
  return (
    <Page>
      <Header>
        <SidebarMobileMenu />
        <HeaderMockup />
      </Header>
      <Sidebar>
        <SidebarMobileCloser />
        <SidebarNav>
          <NavSidebarMockup />
        </SidebarNav>
      </Sidebar>
      <Main>
        Main
        <Button
          onClick={() => toggleSidebarHidden({ document: getDocument() })}
          sx={{
            display: "none",
            [`@container page (min-width: ${BP.sm})`]: {
              display: "inline-flex",
            },
          }}
        >
          Hide/Show
        </Button>
      </Main>
    </Page>
  );
}
