import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
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
import {
  applyEdgeSidebarStyles,
  applyHeaderStyles,
  applyInsetContainerStyles,
  applyInsetSidebarStyles,
  applyRootStyles,
  Content,
  EdgeSidebar,
  EdgeSidebarContent,
  Footer,
  Header,
  InsetAvoidingView,
  InsetSidebar,
  InsetSidebarContent,
  Root,
} from "../layout-core-v6";

const StyledHeader = styled(Header)(() => ({
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .10)",
  backgroundColor: "#ffffff",
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
      <Root sx={{ ...applyRootStyles({ fixedHeight: true }) }}>
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
          <EdgeSidebarContent
            sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.12)" }}
          >
            <ChatsHeader />
            <Box p={"4px 16px 12px"}>
              <MessengerSearch />
            </Box>
            <ChatList />
          </EdgeSidebarContent>
        </EdgeSidebar>
        <Content sx={{ ...applyInsetContainerStyles() }}>
          <ChatDialog />
          <InsetSidebar
            position="absolute"
            sx={{
              borderColor: "divider",
              ...applyInsetSidebarStyles({
                width: "25cqw",
              }),
            }}
          >
            <InsetSidebarContent>
              <ChatSettings />
            </InsetSidebarContent>
          </InsetSidebar>
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
