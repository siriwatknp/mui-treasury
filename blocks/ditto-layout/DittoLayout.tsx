import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const PART = {
  HEADER: "JunHeader",
  SIDEBAR: "JunSidebar",
  MAIN: "JunMain",
};

/**
 * Page handles slots when components are inserted.
 *
 * However, to adjust width and height of components, control each component directly.
 */
export function DittoLayout() {
  const [isSideNavHidden, setIsSideNavHidden] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (
    <Box
      className="JunPage"
      sx={{
        bgcolor: "grey.100",
        minHeight: "100lvh",
        display: "grid",
        containerType: "size",
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
        },
      }}
    >
      <Box
        component="header"
        className={PART.HEADER}
        sx={{ gridArea: PART.HEADER, height: 48 }}
      >
        Header
      </Box>
      <Box
        className={`${PART.SIDEBAR}`}
        {...(mobileOpen && { "data-mobile-open": true })}
        {...(isSideNavHidden && { "data-hidden": true })}
        sx={{
          "--JunSidebar-hidden": "1",
          "--JunSidebar-mobileOpen": "0",
          "&[data-mobile-open]": {
            "--JunSidebar-mobileOpen": "1",
            "&::before": {
              visibility: "visible",
              transition: "opacity 0.3s, visibility 0.3s",
            },
          },
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
            zIndex: 1,
            transition: "opacity 0.4s, visibility 0.4s",
            opacity: "var(--JunSidebar-mobileOpen, 0)",
            visibility: "hidden",
          },
          "@container (min-width: 500px)": {
            "--JunSidebar-width": "80px",
            "--JunSidebar-hidden": "0",
            "&[data-hidden]": {
              "--JunSidebar-hidden": "1",
            },
            "&::before": {
              display: "none",
            },
          },
          "@container (min-width: 768px)": {
            "--JunSidebar-width": "256px",
          },
        }}
      >
        <Box
          component="nav"
          {...(mobileOpen && { "data-mobile-open": true })}
          sx={{
            "&[data-mobile-open]": {
              visibility: "visible",
            },
            opacity: "var(--JunSidebar-mobileOpen)",
            visibility: "hidden",
            backgroundColor: "background.paper",
            flex: 1,
            width: "256px",
            position: "relative",
            zIndex: 2,
            transition: "opacity 0.3s",
            "@container (min-width: 500px)": {
              backgroundColor: "initial",
              transform: "translateX(calc(var(--JunSidebar-hidden) * -100%))",
              transition: "transform 0.3s, visibility 0.3s, opacity 0.3s",
              width: "var(--JunSidebar-width)",
              visibility: "visible",
              opacity: 1,
            },
          }}
        >
          Nav Long text
        </Box>
        <Button
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{
            display: { xs: mobileOpen ? "inline-flex" : "none", sm: "none" },
            position: "fixed",
            top: "1rem",
            right: "1rem",
            zIndex: 2,
          }}
        >
          {mobileOpen ? "Close" : "Open"}
        </Button>
      </Box>
      <Box
        component="main"
        className={PART.MAIN}
        sx={{
          gridArea: PART.MAIN,
          bgcolor: "#fff",
          borderTopLeftRadius: 20,
          p: 2,
        }}
      >
        Main
        <Button
          onClick={() => setIsSideNavHidden(!isSideNavHidden)}
          sx={{ display: { xs: "none", sm: "inline-flex" } }}
        >
          {isSideNavHidden ? "Show" : "Hide"}
        </Button>
        <Button
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{ display: { sm: "none" } }}
        >
          {mobileOpen ? "Close" : "Open"}
        </Button>
      </Box>
    </Box>
  );
}
