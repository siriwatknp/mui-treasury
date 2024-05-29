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
import {
  Content,
  EdgeDrawerClose,
  EdgeSidebar,
  Footer,
  Header,
  InsetAvoidingView,
  InsetContainer,
  InsetSidebar,
  Root,
  SidebarContent,
  toggleEdgeSidebarDrawer,
} from "../layout-v6-ditto";

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
            [theme.breakpoints.up("md")]: {
              transform: "scale(0)",
            },
          })}
        >
          <CreditCard />
        </Fab>
        <StyledHeader
          sx={{
            position: "relative",
            height: 64,
            ".JunRoot:has(&)": {
              "--Header-height": "64px",
            },
          }}
        >
          <Container>
            <DailyHeader />
          </Container>
        </StyledHeader>
        <EdgeSidebar
          id="right-drawer"
          anchor="right"
          sx={{
            "--JunSidebar-variant": "var(--drawer)",
          }}
        >
          <SidebarContent
            sx={{
              padding: "0.5rem",
              bgcolor: "initial",
              "--JunSidebar-drawerWidth": "min(400px, 100vw)",
            }}
          >
            <DailyCheckout />
          </SidebarContent>
        </EdgeSidebar>
        <Content>
          <InsetContainer
            rightSidebar={
              <InsetSidebar
                position="absolute"
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                  width: "max(25cqw, 256px)",
                  ".JunRoot:has(&)": {
                    "--InsetSidebarR-width": {
                      md: "max(25cqw, 256px)",
                    },
                  },
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
