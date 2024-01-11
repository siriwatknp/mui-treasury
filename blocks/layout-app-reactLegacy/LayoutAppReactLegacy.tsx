import React from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import UnfoldMore from "@mui/icons-material/UnfoldMore";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import {
  createTheme,
  responsiveFontSizes,
  styled,
  ThemeProvider,
} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Content,
  EdgeSidebar,
  Footer,
  Header,
  InsetAvoidingView,
  InsetContainer,
  InsetSidebar,
  Root,
} from "../layout-core";
// @ts-ignore
import { ReactContent, ReactHeader, ReactNextArticle } from "./components";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#20232a",
      },
      secondary: {
        main: "#61dafb",
      },
    },
    typography: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body1: {
        fontSize: "1.065rem",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "strong, b": {
            fontWeight: "bold",
          },
        },
      },
    },
  })
);
// @ts-ignore
theme.vars = null;

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

// @ts-ignore
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

export const LayoutAppReactLegacy = () => {
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
    <ThemeProvider theme={theme}>
      <Root
        scheme={{
          header: {
            config: {
              xs: {
                position: "fixed",
                height: 60,
              },
            },
          },
          rightEdgeSidebar: {
            config: {
              xs: {
                variant: "temporary",
                width: 256,
              },
            },
          },
          rightInsetSidebar: {
            config: {
              sm: {
                position: "fixed",
                width: 200,
              },
              md: {
                position: "fixed",
                width: 256,
              },
            },
          },
        }}
      >
        {({ setOpen }) => (
          <>
            <CssBaseline />
            <StyledFab
              color={"primary"}
              onClick={() => setOpen("rightEdgeSidebar", true)}
            >
              <UnfoldMore />
            </StyledFab>
            <Header color={"primary"}>
              <Container>
                <StyledToolbar disableGutters>
                  <ReactHeader concise />
                </StyledToolbar>
              </Container>
            </Header>
            <EdgeSidebar anchor="right">{sidebarContent}</EdgeSidebar>
            <Content>
              <InsetContainer
                rightSidebar={
                  <InsetSidebar
                    sx={{
                      borderLeft: "1px solid #ececec",
                      backgroundColor: "rgb(247, 247, 247)",
                    }}
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
          </>
        )}
      </Root>
    </ThemeProvider>
  );
};

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
