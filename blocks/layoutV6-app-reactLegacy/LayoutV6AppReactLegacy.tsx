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
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  EdgeSidebar,
  Header,
  Root,
  SidebarContent,
  toggleEdgeSidebarDrawer,
} from "../layout-v6-ditto";

const StyledToolbar = styled(Toolbar)(({ theme: { breakpoints } }) => ({
  minHeight: 60,

  [breakpoints.up("md")]: {
    minHeight: 60,
  },
}));
const StyledFab = styled(Fab)(() => ({
  position: "fixed",
  bottom: 32,
  right: 16,
  color: "#61dafb",

  "& svg": {
    fontSize: 32,
  },
}));

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
        color={"primary"}
        onClick={() =>
          toggleEdgeSidebarDrawer({
            sidebarId: "right-drawer",
          })
        }
      >
        <UnfoldMore />
      </StyledFab>
      <Header sx={{ position: "fixed", height: 60 }}>
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
        }}
      >
        <SidebarContent>{sidebarContent}</SidebarContent>
      </EdgeSidebar>
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
