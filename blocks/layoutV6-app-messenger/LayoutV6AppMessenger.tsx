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
import Content from "../layout-v6-ditto/Content";
import EdgeSidebar, {
  applyPermanentStyles,
} from "../layout-v6-ditto/EdgeSidebar";
import Footer from "../layout-v6-ditto/Footer";
import Header, { applyHeaderStyles } from "../layout-v6-ditto/Header";
import InsetAvoidingView from "../layout-v6-ditto/InsetAvoidingView";
import InsetContainer from "../layout-v6-ditto/InsetContainer";
import InsetSidebar, {
  applyInsetSidebarStyles,
} from "../layout-v6-ditto/InsetSidebar";
import Root from "../layout-v6-ditto/Root";
import SidebarContent from "../layout-v6-ditto/SidebarContent";

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
          sx={{
            ...applyPermanentStyles({
              width: "25cqw",
              autoCollapse: "md",
            }),
          }}
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
                <ChatSettings />
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
