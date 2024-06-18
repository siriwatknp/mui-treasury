import {
  ReactContent,
  ReactHeader,
  ReactNextArticle,
} from "../layout-app-reactLegacy/components";
import React from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import UnfoldMore from "@mui/icons-material/UnfoldMore";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Content from "../layout-v6-ditto/Content";
import EdgeDrawerClose from "../layout-v6-ditto/EdgeDrawerClose";
import EdgeSidebar, {
  toggleEdgeSidebarDrawer,
} from "../layout-v6-ditto/EdgeSidebar";
import Footer from "../layout-v6-ditto/Footer";
import Header from "../layout-v6-ditto/Header";
import InsetAvoidingView from "../layout-v6-ditto/InsetAvoidingView";
import InsetContainer from "../layout-v6-ditto/InsetContainer";
import InsetSidebar from "../layout-v6-ditto/InsetSidebar";
import Root from "../layout-v6-ditto/Root";
import SidebarContent from "../layout-v6-ditto/SidebarContent";

const StyledToolbar = styled(Toolbar)(({ theme: { breakpoints } }) => ({
  minHeight: 60,

  [breakpoints.up("md")]: {
    minHeight: 60,
  },
}));
const StyledFab = styled(Fab)({
  position: "fixed",
  bottom: 32,
  right: 16,
  color: "#61dafb",

  "& svg": {
    fontSize: 32,
  },
});
const FooterMenu = ({ isHeader, ...props }) => {
  return (
    <>
      {isHeader && <Box mt={5} />}
      <Typography
        sx={{
          color: "#fff",
          lineHeight: 2,
          ...(isHeader && {
            opacity: 0.6,
            lineHeight: 3,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontSize: 14,
            fontWeight: "bold",
          }),
        }}
        {...props}
      />
    </>
  );
};

export function LayoutV6AppReactLegacy() {
  const sidebarContent = (
    <Box mt={7.5} ml={3}>
      {getData()[0].map((label, i) => (
        <Typography
          key={i}
          sx={{
            lineHeight: 3,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          {label}{" "}
          <KeyboardArrowDown
            color={"inherit"}
            sx={{
              marginTop: "-2px",
              verticalAlign: "middle",
            }}
          />
        </Typography>
      ))}
    </Box>
  );
  return (
    <Root>
      <StyledFab
        className="EdgeSidebarR-trigger"
        color={"primary"}
        onClick={() => {
          // toggleEdgeSidebarDrawer();
          toggleEdgeSidebarDrawer({
            sidebarId: "right-drawer",
          });
        }}
      >
        <UnfoldMore />
      </StyledFab>
      <Header
        sx={{
          position: "sticky",
          top: 0,
          height: 60,
          bgcolor: "#232323",
          zIndex: 1,
          ".JunRoot:has(&)": {
            "--Header-height": "60px",
          },
        }}
      >
        <Container>
          <StyledToolbar disableGutters>
            <ReactHeader concise />
          </StyledToolbar>
        </Container>
      </Header>
      <EdgeSidebar
        id="right-drawer"
        anchor="right"
        sx={{
          "--JunSidebar-variant": "var(--drawer)",
          ".JunRoot:has(&) .EdgeSidebarR-trigger": {
            display: { xs: "inline-flex", md: "none" },
          },
        }}
      >
        <EdgeDrawerClose sidebarId="right-drawer" />
        <SidebarContent>{sidebarContent}</SidebarContent>
      </EdgeSidebar>
      <Content>
        <InsetContainer
          as={Container}
          rightSidebar={
            <InsetSidebar
              position="fixed"
              sx={(theme) => ({
                width: { sm: 200, md: 256 },
                borderLeft: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
                display: {
                  xs: "none",
                  md: "block",
                },
                ".JunRoot:has(&)": {
                  [theme.breakpoints.up("sm")]: {
                    "--InsetSidebarR-width": "200px",
                  },
                  [theme.breakpoints.up("md")]: {
                    "--InsetSidebarR-width": "256px",
                  },
                },
              })}
            >
              {sidebarContent}
            </InsetSidebar>
          }
        >
          <ReactContent />
        </InsetContainer>
      </Content>
      <Footer>
        <Box bgcolor={"rgb(40, 44, 52)"}>
          <Container>
            <InsetAvoidingView>
              <ReactNextArticle />
            </InsetAvoidingView>
          </Container>
        </Box>
        <Box bgcolor={"#20232a"}>
          <Container>
            <InsetAvoidingView>
              {/* @ts-ignore */}
              <Box pr={{ xs: 0, md: 5 }} pb={5}>
                <Grid container>
                  <Grid item lg={4}>
                    <Typography sx={{ mt: "56px", color: "#888" }}>
                      Copyright © 2022
                    </Typography>
                  </Grid>
                  <Grid item lg={8} container>
                    {getData().map((category, i) => (
                      <Grid key={i} item xs={6}>
                        {category.map((label, j) => (
                          <FooterMenu key={j} isHeader={j === 0}>
                            {label}
                          </FooterMenu>
                        ))}
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </InsetAvoidingView>
          </Container>
        </Box>
      </Footer>
    </Root>
  );
}

const getData = () => [
  [
    "Docs",
    "Installation",
    "Main Concepts",
    "Advanced Guides",
    "API Reference",
    "Hooks",
    "Testing",
    "Concurrent Mode",
    "Contributing",
  ],
  [
    "Channels",
    "Github",
    "Stack Overflow",
    "Discussion Forums",
    "Reactiflux Chat",
    "DEV Community",
    "Facebook",
    "Twitter",
  ],
  ["Community", "Code of Conduct", "Community Resources"],
  ["More", "Tutorial", "Blog", "Acknowledgements", "React Native"],
];
