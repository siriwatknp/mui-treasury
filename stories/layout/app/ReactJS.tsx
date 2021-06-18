import React from "react";
import cx from "clsx";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import {
  Root,
  Header,
  Content,
  EdgeSidebar,
  InsetContainer,
  InsetSidebar,
  InsetAvoidingView,
  Footer,
} from "@mui-treasury/layout";
import { ReactHeader, ReactNextArticle, ReactContent } from "./reactjs-mockup";

const useStyles = makeStyles(({ breakpoints }) => ({
  toolbar: {
    minHeight: 60,
    [breakpoints.up("md")]: {
      minHeight: 60,
    },
  },
  insetSidebar: {
    borderLeft: "1px solid #ececec",
    backgroundColor: "rgb(247, 247, 247)",
  },
  footer: {
    border: "none",
  },
  footerMenu: {
    color: "#fff",
    lineHeight: 2,
  },
  footerHeader: {
    opacity: 0.6,
    lineHeight: 3,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: 14,
    fontWeight: "bold",
  },
  arrow: {
    marginTop: -2,
    verticalAlign: "middle",
  },
  activeMenu: {
    opacity: 1,
  },
  fab: {
    position: "fixed",
    bottom: 32,
    right: 16,
    color: "#61dafb",
    "& svg": {
      fontSize: 32,
    },
  },
}));

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

function withThemeProvider(Component: React.ElementType) {
  return function ThemeProviderHOC() {
    return (
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    );
  };
}

// @ts-ignore
const FooterMenu = ({ isHeader, ...props }) => {
  const styles = useStyles();
  return (
    <>
      {isHeader && <Box mt={5} />}
      <Typography
        className={cx(styles.footerMenu, isHeader && styles.footerHeader)}
        {...props}
      />
    </>
  );
};

const ReactJs = () => {
  const styles = useStyles();
  const sidebarContent = (
    <Box mt={7.5} ml={3}>
      {getData()[0].map((label, i) => (
        <Typography
          key={i}
          className={cx(styles.footerHeader, i === 0 && styles.activeMenu)}
        >
          {label}{" "}
          <KeyboardArrowDown color={"inherit"} className={styles.arrow} />
        </Typography>
      ))}
    </Box>
  );
  return (
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
          <Fab
            className={styles.fab}
            color={"primary"}
            onClick={() => setOpen("rightEdgeSidebar", true)}
          >
            <UnfoldMore />
          </Fab>
          <Header color={"primary"}>
            <Container>
              <Toolbar disableGutters className={styles.toolbar}>
                <ReactHeader concise />
              </Toolbar>
            </Container>
          </Header>
          <EdgeSidebar anchor="right">{sidebarContent}</EdgeSidebar>
          <Content>
            <InsetContainer
              rightSidebar={
                <InsetSidebar classes={{ paper: styles.insetSidebar }}>
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
                      <Grid item lg={4} />
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
  );
};

export default withThemeProvider(ReactJs);

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
