import React from "react";
import { ThemeProvider, styled } from "@mui/material/styles";
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
} from "./shoppingCart-mockup";
import DailySummary from "./shoppingCart-mockup/DailySummary";

const StyledHeader = styled(Header)(() => ({
  backgroundColor: "#ffffff",
}));

const InsetAvoidingViewFooter = styled(InsetAvoidingView)(
  ({ theme: { breakpoints } }) => ({
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
  })
);

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
                color={"primary"}
                onClick={toggleRightSidebarOpen}
                sx={(theme) => ({
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
                  [theme.breakpoints.up("sm")]: {
                    bottom: 40,
                  },
                  [theme.breakpoints.up("md")]: {
                    transform: "scale(0)",
                  },
                  ...(rightEdgeSidebar?.open && {
                    top: 8,
                    right: 8,
                    width: 48,
                    height: 48,
                  }),
                })}
              >
                {rightEdgeSidebar?.open ? <Close /> : <CreditCard />}
              </Fab>
              <StyledHeader>
                <Container>
                  <DailyHeader />
                </Container>
              </StyledHeader>
              <EdgeSidebar anchor="right">
                <DailyCheckout />
              </EdgeSidebar>
              <Content>
                <InsetContainer
                  rightSidebar={
                    <InsetSidebar
                      sx={{ border: "none", py: "1rem", pl: "1rem" }}
                    >
                      <DailyCheckout />
                    </InsetSidebar>
                  }
                >
                  <DailyCart />
                </InsetContainer>
              </Content>
              <Footer>
                <Container>
                  <InsetAvoidingViewFooter>
                    <Box pb={3}>
                      <DailySummary />
                    </Box>
                  </InsetAvoidingViewFooter>
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
