import {
  ReactContent,
  ReactHeader,
  ReactNextArticle,
  // @ts-ignore
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
  applyTemporaryStyles,
  toggleTemporaryEdgeSidebar,
} from "../layout-v6-ditto/EdgeSidebar";
import Footer from "../layout-v6-ditto/Footer";
import Header, { applyHeaderStyles } from "../layout-v6-ditto/Header";
import InsetAvoidingView from "../layout-v6-ditto/InsetAvoidingView";
import InsetContainer from "../layout-v6-ditto/InsetContainer";
import InsetSidebar, {
  applyInsetSidebarStyles,
} from "../layout-v6-ditto/InsetSidebar";
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
const FooterMenu = ({ isHeader, ...props }: any) => {
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
          toggleTemporaryEdgeSidebar({
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
          bgcolor: "#232323",
          zIndex: 1,
          ...applyHeaderStyles({
            height: "60px",
          }),
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
        sx={{ ...applyTemporaryStyles() }}
      >
        <EdgeDrawerClose sidebarId="right-drawer" />
        <SidebarContent>{sidebarContent}</SidebarContent>
      </EdgeSidebar>
      <Content>
        <Container>
          <InsetContainer
            rightSidebar={
              <InsetSidebar
                position="fixed"
                sx={{
                  borderLeft: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.paper",
                  ...applyInsetSidebarStyles({
                    anchor: "right",
                    width: {
                      md: "256px",
                    },
                  }),
                }}
              >
                {sidebarContent}
              </InsetSidebar>
            }
          >
            <ReactContent />
          </InsetContainer>
        </Container>
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
