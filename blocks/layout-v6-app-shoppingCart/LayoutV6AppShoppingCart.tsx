import React from "react";
import CreditCard from "@mui/icons-material/CreditCard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import { styled, ThemeProvider } from "@mui/material/styles";
import {
  applyEdgeSidebarRightStyles,
  applyHeaderStyles,
  applyInsetSidebarStyles,
  applyRootStyles,
  Content,
  EdgeSidebarContent,
  EdgeSidebarRight,
  Footer,
  Header,
  InsetAvoidingView,
  InsetSidebar,
  InsetSidebarContent,
  Root,
  toggleTemporaryEdgeSidebarRight,
} from "../layout-core-v6";
import {
  DailyCart,
  DailyCheckout,
  DailyHeader,
  dailyShoppingTheme,
  DailySummary,
  // @ts-ignore
} from "../layout-v5-app-shoppingCart/components";

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
  }),
);

export function LayoutV6AppShoppingCart() {
  return (
    <ThemeProvider theme={dailyShoppingTheme}>
      <Root sx={{ ...applyRootStyles({ fixedHeight: true }) }}>
        <CssBaseline />
        <Fab
          color={"primary"}
          onClick={() => toggleTemporaryEdgeSidebarRight()}
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
            [theme.breakpoints.up("lg")]: {
              transform: "scale(0)",
            },
          })}
        >
          <CreditCard />
        </Fab>
        <StyledHeader
          sx={{
            position: "relative",
            ...applyHeaderStyles({
              height: "64px",
            }),
          }}
        >
          <Container maxWidth="xl">
            <DailyHeader />
          </Container>
        </StyledHeader>
        <EdgeSidebarRight
          sx={(theme) => ({
            ...applyEdgeSidebarRightStyles({
              theme,
              config: {
                xs: {
                  variant: "temporary",
                  width: "min(400px, 100vw)",
                },
              },
            }),
          })}
        >
          <EdgeSidebarContent
            sx={{
              padding: "0.5rem",
              bgcolor: "initial",
            }}
          >
            <DailyCheckout />
          </EdgeSidebarContent>
        </EdgeSidebarRight>
        <Content>
          <Container maxWidth="xl" sx={{ height: "100%" }}>
            <DailyCart />
            <InsetSidebar
              sx={{
                ...applyInsetSidebarStyles({
                  position: "absolute",
                  width: {
                    lg: "max(25cqw, 360px)",
                  },
                }),
                "& > div": {
                  border: "none",
                  py: "1rem",
                },
              }}
            >
              <InsetSidebarContent>
                <DailyCheckout />
              </InsetSidebarContent>
            </InsetSidebar>
          </Container>
        </Content>
        <Footer>
          <Container maxWidth="xl">
            <InsetAvoidingViewFooter>
              <Box pb={3}>
                <DailySummary />
              </Box>
            </InsetAvoidingViewFooter>
          </Container>
        </Footer>
      </Root>
    </ThemeProvider>
  );
}
