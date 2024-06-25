import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import {
  createTheme,
  responsiveFontSizes,
  styled,
  ThemeProvider,
} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import {
  ChatBar,
  ChatDialog,
  ChatList,
  ChatSettings,
  ChatsHeader,
  ConversationHead,
  MessengerSearch,
  // @ts-ignore
} from "../layout-app-messenger/components";
import Content from "../layout-core-v6/Content";
import EdgeSidebar, {
  applyEdgeSidebarStyles,
} from "../layout-core-v6/EdgeSidebar";
import SidebarContent from "../layout-core-v6/EdgeSidebarContent";
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
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .10)",
  backgroundColor: "#ffffff",
}));

const IconButtonEdit = styled(IconButton)(() => ({
  backgroundColor: "rgba(0,0,0,0.04)",
}));

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "rgb(0, 153, 255)",
      },
      background: {
        default: "#fff",
      },
    },
    typography: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body1: {
        fontSize: `${15 / 16}rem`,
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
  }),
);
// @ts-ignore
theme.vars = null;

export function LayoutV6AppMessenger() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Root>
        <StyledHeader
          position="relative"
          sx={{ ...applyHeaderStyles({ height: "64px" }) }}
        >
          <Toolbar disableGutters sx={{ flex: "auto" }}>
            <ConversationHead />
          </Toolbar>
        </StyledHeader>
        <EdgeSidebar
          sx={(theme) => ({
            ...applyEdgeSidebarStyles(theme, {
              config: {
                xs: {
                  variant: "permanent",
                  width: "25cqw",
                  autoCollapse: "md",
                  collapsedWidth: "80px",
                },
              },
            }),
          })}
        >
          <SidebarContent sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.12)" }}>
            <ChatsHeader />
            <Box p={"4px 16px 12px"}>
              <MessengerSearch />
            </Box>
            <ChatList />
          </SidebarContent>
        </EdgeSidebar>
        <Content>
          <InsetContainer
            rightSidebar={
              <InsetSidebar
                position="absolute"
                sx={{
                  borderColor: "divider",
                  ...applyInsetSidebarStyles({
                    anchor: "right",
                    width: "25cqw",
                  }),
                }}
              >
                <InsetSidebarContent>
                  <ChatSettings />
                </InsetSidebarContent>
              </InsetSidebar>
            }
          >
            <ChatDialog />
          </InsetContainer>
        </Content>
        <Footer>
          <Container disableGutters>
            <InsetAvoidingView>
              <Box display={"flex"} alignItems={"center"} p={1}>
                <ChatBar />
              </Box>
            </InsetAvoidingView>
          </Container>
        </Footer>
      </Root>
    </ThemeProvider>
  );
}
