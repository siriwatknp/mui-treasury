"use client";
import { ReactContent, ReactHeader, ReactNextArticle } from "./components";
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
import Content from "../layout-core/Content";
import SidebarContent from "../layout-core/EdgeSidebarContent";
import EdgeSidebarRight, {
  toggleTemporaryEdgeSidebarRight,
} from "../layout-core/EdgeSidebarRight";
import EdgeTemporaryClose from "../layout-core/EdgeTemporaryClose";
import Footer from "../layout-core/Footer";
import Header from "../layout-core/Header";
import InsetAvoidingView from "../layout-core/InsetAvoidingView";
import InsetContainer from "../layout-core/InsetContainer";
import InsetSidebar from "../layout-core/InsetSidebar";
import InsetSidebarContent from "../layout-core/InsetSidebarContent";
import Root from "../layout-core/Root";

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
const FooterMenu = ({
  isHeader,
  ...props
}: { isHeader?: boolean } & React.ComponentPropsWithoutRef<
  typeof Typography
>) => {
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
        className="EdgeSidebar-R-trigger"
        color={"primary"}
        onClick={() => {
          toggleTemporaryEdgeSidebarRight();
        }}
      >
        <UnfoldMore />
      </StyledFab>
      <Header
        height="60px"
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: "#232323",
          zIndex: 1,
        }}
      >
        <Container>
          <StyledToolbar disableGutters>
            <ReactHeader concise />
          </StyledToolbar>
        </Container>
      </Header>
      <EdgeSidebarRight
        variant={{
          xs: ["temporary"],
          md: ["persistent", { persistentBehavior: "none" }],
        }}
      >
        <EdgeTemporaryClose />
        <SidebarContent>{sidebarContent}</SidebarContent>
      </EdgeSidebarRight>
      <Content>
        <InsetContainer>
          <ReactContent />
          <InsetSidebar position="fixed" width={{ md: "256px" }}>
            <InsetSidebarContent>{sidebarContent}</InsetSidebarContent>
          </InsetSidebar>
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
              <Box pr={{ xs: 0, md: 5 }} pb={5}>
                <Grid container>
                  <Grid size={{ lg: 4 }}>
                    <Typography sx={{ mt: "56px", color: "#888" }}>
                      Copyright © 2022
                    </Typography>
                  </Grid>
                  <Grid size={{ lg: 8 }} container>
                    {getData().map((category, i) => (
                      <Grid key={i} size={{ xs: 6 }}>
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
