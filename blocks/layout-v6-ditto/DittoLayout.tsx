import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

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

export function toggleSidebarHidden(options?: {
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

export function toggleMobileSidebar(options?: {
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

export function SidebarMobileCloser() {
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

export function SidebarMobileMenu() {
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

export function Page({ className, ...props }: BoxProps) {
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

const HeaderRoot = styled("header")({
  gridArea: PART.HEADER,
  height: 48,
  alignContent: "center",
  display: "flex",
  alignItems: "center",
});

export const Header = ({ className = "", ...props }: BoxProps<"header">) => {
  // @ts-ignore
  return <HeaderRoot className={`${PART.HEADER} ${className}`} {...props} />;
};

const ContentRoot = styled("main")({
  gridArea: PART.MAIN,
  bgcolor: "#fff",
  borderTopLeftRadius: 20,
  p: 2,
});
export function Content({ className, ...props }: BoxProps) {
  // @ts-ignore
  return <ContentRoot className={`${PART.MAIN} ${className}`} {...props} />;
}

const SidebarContentRoot = styled("div")({
  containerType: "inline-size",
  opacity: `var(--temporary, var(--JunSidebar-mobileOpen))
            var(--permanent, 1)`,
  visibility: `var(--temporary, hidden)
               var(--permanent, visible)` as any,
  backgroundColor: "background.paper",
  flex: 1,
  position: "relative",
  zIndex: 2,
  width: "var(--JunSidebar-width, 0px)",
  transition: `var(--temporary, opacity 0.3s, transform 0.3s, width 0.3s)
               var(--permanent, opacity 0.7s, width 0.3s)`,
  transform: `var(--temporary, translateX(calc((1 - var(--JunSidebar-mobileOpen)) * -100%)))
              var(--permanent, translateX(calc(var(--JunSidebar-hidden) * -100%)))`,
  // [`@container page (min-width: ${BP.sm})`]: {
  //   backgroundColor: "initial",
  //   transform: "translateX(calc(var(--JunSidebar-hidden) * -100%))",
  //   transition: "opacity 0.7s, width 0.3s",
  //   width: "var(--JunSidebar-width)",
  //   visibility: "visible",
  //   opacity: 1,
  // },
  "[data-sidebar-hidden] &": {
    visibility: "hidden",
    opacity: 0,
  },
  "[data-mobile-open] &, [data-mobile-closing] &": {
    visibility: "visible",
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

const EdgeSidebarRoot = styled("div")({
  "--JunSidebar-hidden": "1",
  "--JunSidebar-variant": "var(--temporary)",
  "--temporary": "var(--JunSidebar-variant,)",
  "--permanent": "var(--JunSidebar-variant,)",
  gridArea: PART.SIDEBAR,
  width: "calc((1 - var(--JunSidebar-hidden)) * var(--JunSidebar-width, 0px))",
  transition: "width 0.3s",
  display: "flex",
  flexDirection: "column",
  "&::before": {
    position: "fixed",
    content: '""',
    display: `var(--temporary, block)
              var(--permanent, none)`,
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.12)",
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
  // [`@container page (min-width: ${BP.sm})`]: {
  //   "--JunSidebar-width": "80px",
  //   "--JunSidebar-hidden": "0",
  //   "&[data-sidebar-hidden]": {
  //     "--JunSidebar-hidden": "1",
  //   },
  //   "&::before": {
  //     display: "none",
  //   },
  // },
  // "@container page (min-width: 768px)": {
  //   "--JunSidebar-width": "256px",
  // },
});
export function EdgeSidebar({ className = "", ...props }: BoxProps) {
  return (
    // @ts-ignore
    <EdgeSidebarRoot {...props} className={`${PART.SIDEBAR} ${className}`} />
  );
}
/**
 * Page handles slots when components are inserted.
 *
 * However, to adjust width and height of components, control each component directly.
 */
// export function DittoLayout() {
//   function getDocument() {
//     return (
//       document.getElementById(
//         "storybook-preview-iframe"
//       ) as null | HTMLIFrameElement
//     )?.contentDocument;
//   }
//   return (
//     <Page>
//       <Header>
//         <SidebarMobileMenu />
//         <HeaderMockup />
//       </Header>
//       <Sidebar>
//         <SidebarMobileCloser />
//         <SidebarContent>
//           <NavSidebarMockup />
//         </SidebarContent>
//       </Sidebar>
//       <Main>
//         Main
//         <Button
//           onClick={() => toggleSidebarHidden({ document: getDocument() })}
//           sx={{
//             display: "none",
//             [`@container page (min-width: ${BP.sm})`]: {
//               display: "inline-flex",
//             },
//           }}
//         >
//           Hide/Show
//         </Button>
//       </Main>
//     </Page>
//   );
// }
