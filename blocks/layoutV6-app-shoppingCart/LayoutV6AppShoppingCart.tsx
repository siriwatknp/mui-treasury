import React from "react";
import Close from "@mui/icons-material/Close";
import CreditCard from "@mui/icons-material/CreditCard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import { styled, ThemeProvider } from "@mui/material/styles";
import {
  DailyCart,
  DailyCheckout,
  DailyHeader,
  dailyShoppingTheme,
  DailySummary,
  // @ts-ignore
} from "../layout-app-shoppingCart/components";
import Content from "../layout-v6-ditto/Content";
import EdgeSidebar, {
  applyDrawerStyles,
  toggleEdgeSidebarDrawer,
} from "../layout-v6-ditto/EdgeSidebar";
import Footer from "../layout-v6-ditto/Footer";
import Header, { applyHeaderStyles } from "../layout-v6-ditto/Header";
import InsetAvoidingView from "../layout-v6-ditto/InsetAvoidingView";
import InsetContainer from "../layout-v6-ditto/InsetContainer";
import InsetSidebar, {
  applyInsetSidebarStyles,
} from "../layout-v6-ditto/InsetSidebar";
import Root from "../layout-v6-ditto/Root";
import SidebarContent, {
  applySidebarContentStyles,
} from "../layout-v6-ditto/SidebarContent";

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
      <Root>
        <CssBaseline />
        <Fab
          color={"primary"}
          onClick={() =>
            toggleEdgeSidebarDrawer({
              sidebarId: "right-drawer",
            })
          }
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
        <EdgeSidebar
          id="right-drawer"
          anchor="right"
          sx={{ ...applyDrawerStyles() }}
        >
          <SidebarContent
            sx={{
              padding: "0.5rem",
              bgcolor: "initial",
              ...applySidebarContentStyles({
                width: "min(400px, 100vw)",
              }),
            }}
          >
            <DailyCheckout />
          </SidebarContent>
        </EdgeSidebar>
        <Content>
          <Container maxWidth="xl">
            <InsetContainer
              rightSidebar={
                <InsetSidebar
                  position="absolute"
                  sx={{
                    ...applyInsetSidebarStyles({
                      anchor: "right",
                      width: {
                        lg: "max(25cqw, 360px)",
                      },
                    }),
                    "& > div": {
                      border: "none",
                      py: "1rem",
                      pl: "1rem",
                    },
                  }}
                >
                  <DailyCheckout />
                </InsetSidebar>
              }
            >
              <DailyCart />
            </InsetContainer>
          </Container>
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
      </Root>
    </ThemeProvider>
  );
}
