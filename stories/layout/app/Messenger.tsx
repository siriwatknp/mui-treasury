import React from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  styled,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

import Edit from "@mui/icons-material/Edit";

import {
  MessengerSearch,
  ChatsHeader,
  ChatList,
  ConversationHead,
  ChatSettings,
  ChatBar,
  ChatDialog,
} from "./messenger-mockup";
import {
  Fullscreen,
  Root,
  Header,
  EdgeSidebar,
  Content,
  InsetContainer,
  InsetSidebar,
  InsetAvoidingView,
  Footer,
} from "@mui-treasury/layout";

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
  })
);

const Messenger = () => {
  return (
    <ThemeProvider theme={theme}>
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
            leftEdgeSidebar: {
              config: {
                xs: {
                  variant: "permanent",
                  width: "25%",
                  collapsible: true,
                  collapsedWidth: 80,
                },
              },
              autoCollapse: "sm",
            },
            rightInsetSidebar: {
              config: {
                xs: {
                  position: "absolute",
                  width: "33%",
                },
              },
            },
          }}
        >
          {({ state: { leftEdgeSidebar } }) => (
            <>
              <CssBaseline />
              <StyledHeader>
                <Toolbar disableGutters>
                  <ConversationHead />
                </Toolbar>
              </StyledHeader>
              <EdgeSidebar anchor="left">
                {leftEdgeSidebar?.collapsed ? (
                  <Box textAlign={"center"} my={1}>
                    <IconButtonEdit>
                      <Edit />
                    </IconButtonEdit>
                  </Box>
                ) : (
                  <>
                    <ChatsHeader />
                    <Box p={"4px 16px 12px"}>
                      <MessengerSearch />
                    </Box>
                  </>
                )}
                <ChatList concise={leftEdgeSidebar?.collapsed} />
              </EdgeSidebar>
              <Content>
                <InsetContainer
                  disableGutters
                  rightSidebar={
                    <InsetSidebar>
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
                      <ChatBar concise={leftEdgeSidebar?.collapsed} />
                    </Box>
                  </InsetAvoidingView>
                </Container>
              </Footer>
            </>
          )}
        </Root>
      </Fullscreen>
    </ThemeProvider>
  );
};

export default Messenger;
