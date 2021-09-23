import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
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

const useStyles = makeStyles(() => ({
  header: {
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .10)",
    backgroundColor: "#ffffff",
  },
  insetsubtitle: {
    borderLeft: "1px solid rgba(0, 0, 0, 0.08)",
    overflowY: "auto",
    backgroundColor: "#fff",
  },
  edit: {
    backgroundColor: "rgba(0,0,0,0.04)",
  },
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
  const styles = useStyles();
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
              <Header className={styles.header}>
                <Toolbar disableGutters>
                  <ConversationHead />
                </Toolbar>
              </Header>
              <EdgeSidebar anchor="left">
                {leftEdgeSidebar?.collapsed ? (
                  <Box textAlign={"center"} my={1}>
                    <IconButton className={styles.edit}>
                      <Edit />
                    </IconButton>
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
                    <InsetSidebar classes={{ paper: styles.insetBody }}>
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
