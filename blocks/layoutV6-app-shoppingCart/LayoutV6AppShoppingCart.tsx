import React from "react";
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
import Content from "../layout-core-v6/Content";
import SidebarContent from "../layout-core-v6/EdgeSidebarContent";
import EdgeSidebarRight, {
  applyEdgeSidebarRightStyles,
  toggleTemporaryEdgeSidebarRight,
} from "../layout-core-v6/EdgeSidebarRight";
import Footer from "../layout-core-v6/Footer";
import Header, { applyHeaderStyles } from "../layout-core-v6/Header";
import InsetAvoidingView from "../layout-core-v6/InsetAvoidingView";
import InsetContainer from "../layout-core-v6/InsetContainer";
import InsetSidebar, {
  applyInsetSidebarStyles,
} from "../layout-core-v6/InsetSidebar";
import InsetSidebarContent from "../layout-core-v6/InsetSidebarContent";
import Root from "../layout-core-v6/Root";

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
            ...applyEdgeSidebarRightStyles(theme, {
              config: {
                xs: {
                  variant: "temporary",
                  width: "min(400px, 100vw)",
                },
              },
            }),
          })}
        >
          <SidebarContent
            sx={{
              padding: "0.5rem",
              bgcolor: "initial",
            }}
          >
            <DailyCheckout />
          </SidebarContent>
        </EdgeSidebarRight>
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
                  <InsetSidebarContent>
                    <DailyCheckout />
                  </InsetSidebarContent>
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
