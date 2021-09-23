import React from "react";
import cx from "clsx";
import { ThemeProvider } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import CreditCard from "@mui/icons-material/CreditCard";
import Close from "@mui/icons-material/Close";
import {
  Root,
  Header,
  Content,
  Fullscreen,
  EdgeSidebar,
  InsetContainer,
  InsetSidebar,
  Footer,
  InsetAvoidingView,
} from "@mui-treasury/layout";
import {
  dailyShoppingTheme,
  DailyHeader,
  DailyCart,
  DailyCheckout,
  DailySummary,
} from "./shoppingCart-mockup";

const useStyles = makeStyles(({ breakpoints }) => ({
  header: {
    backgroundColor: "#ffffff",
  },
  toolbar: {},
  edgeSidebarsubtitle: {
    padding: "24px 0 40px 24px !important",
    background: "none",
    boxShadow: "none",
    right: 24,
  },
  sidebarsubtitle: {
    padding: "24px 0 40px 24px !important",
    background: "none",
    border: "none",
  },
  sidebarPaper: {
    maxWidth: 400,
    padding: 16,
    background: "none",
    boxShadow: "none",
  },
  container: {
    minHeight: 0,
    display: "flex",
  },
  content: {
    overflow: "auto",
  },
  footer: {
    border: "unset",
    position: "relative",
    backgroundColor: "#fff",
    "&:before": {
      content: '" "',
      position: "absolute",
      width: "100%",
      height: 24,
      top: 0,
      left: 0,
      transform: "translateY(-100%)",
      background: "linear-gradient(to top, #ffffff, rgba(255,255,255,0))",
    },
    [breakpoints.only("sm")]: {
      paddingRight: 64,
    },
    [breakpoints.up("md")]: {
      paddingBottom: 40,
    },
  },
  fab: {
    position: "fixed",
    bottom: 16,
    right: 16,
    color: "#2E3B4D",
    "& svg": {
      fontSize: 32,
      color: "#fff",
    },
    zIndex: 1500,
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
    [breakpoints.up("sm")]: {
      bottom: 40,
    },
    [breakpoints.up("md")]: {
      transform: "scale(0)",
    },
  },
  fabClose: {
    top: 8,
    right: 8,
    width: 48,
    height: 48,
  },
}));

function withThemeProvider(Component: React.ElementType) {
  return function ThemeProviderHOC() {
    return (
      <ThemeProvider theme={dailyShoppingTheme}>
        <Component />
      </ThemeProvider>
    );
  };
}

const ShoppingCart = () => {
  const styles = useStyles();
  return (
    <Fullscreen>
      <Root
        scheme={{
          header: {
            config: {
              xs: {
                position: "relative",
                height: 64,
              },
            },
          },
          rightInsetSidebar: {
            config: {
              md: {
                position: "absolute",
                width: "max(33%, 256px)",
              },
            },
          },
          rightEdgeSidebar: {
            config: {
              xs: {
                variant: "temporary",
                width: "88%",
              },
            },
          },
        }}
      >
        {({ toggleRightSidebarOpen, state: { rightEdgeSidebar } }) => {
          return (
            <>
              <CssBaseline />
              <Fab
                className={cx(
                  styles.fab,
                  rightEdgeSidebar?.open && styles.fabClose
                )}
                color={"primary"}
                onClick={toggleRightSidebarOpen}
              >
                {rightEdgeSidebar?.open ? <Close /> : <CreditCard />}
              </Fab>
              <Header className={styles.header}>
                <Container>
                  <DailyHeader />
                </Container>
              </Header>
              <EdgeSidebar
                anchor="right"
                PaperProps={{ className: styles.edgeSidebarBody }}
              >
                <DailyCheckout />
              </EdgeSidebar>
              <Content>
                <InsetContainer
                  rightSidebar={
                    <InsetSidebar classes={{ paper: styles.sidebarBody }}>
                      <DailyCheckout />
                    </InsetSidebar>
                  }
                >
                  <DailyCart />
                </InsetContainer>
              </Content>
              <Footer>
                <Container>
                  <InsetAvoidingView className={styles.footer}>
                    <Box pb={3}>
                      <DailySummary />
                    </Box>
                  </InsetAvoidingView>
                </Container>
              </Footer>
            </>
          );
        }}
      </Root>
    </Fullscreen>
  );
};

export default withThemeProvider(ShoppingCart);
