import React from "react";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import IconButton from "@material-ui/core/IconButton";

import Menu from "@material-ui/icons/Menu";

import AppHeader from "./gmail-mockup/AppHeader";
import AppSidebar from "./gmail-mockup/AppSidebar";
import AppContent from "./gmail-mockup/AppContent";
import AppSubSidebar from "./gmail-mockup/AppSubSidebar";
import CustomTrigger from "./gmail-mockup/CustomTrigger";

import {
  Root,
  Header,
  EdgeSidebar,
  EdgeTrigger,
  Content,
} from "@mui-treasury/layout";

const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});

const useDrawerStyles = makeStyles(() => ({
  paper: {
    border: "none",
    overflow: "visible",
  },
}));

const Gmail = () => {
  const drawerStyles = useDrawerStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Root
        initialState={{
          leftEdgeSidebar: { collapsed: true },
          rightEdgeSidebar: { open: true },
        }}
        scheme={{
          header: {
            config: {
              xs: {
                position: "fixed",
                clipped: true,
                height: 64,
              },
            },
          },
          leftEdgeSidebar: {
            config: {
              xs: {
                variant: "permanent",
                width: 256,
                collapsible: true,
                collapsedWidth: 72,
                uncollapsedOnHover: true,
              },
            },
          },
          rightEdgeSidebar: {
            config: {
              sm: {
                variant: "persistent",
                width: 56,
                persistentBehavior: "fit",
              },
            },
          },
        }}
      >
        <Header>
          <AppHeader
            collapse={
              <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>
                {(collapsed, setCollapsed) => (
                  <IconButton onClick={() => setCollapsed(!collapsed)}>
                    <Menu />
                  </IconButton>
                )}
              </EdgeTrigger>
            }
          />
        </Header>
        <EdgeSidebar anchor="left" classes={drawerStyles}>
          <AppSidebar />
        </EdgeSidebar>
        <EdgeSidebar anchor="right">
          <AppSubSidebar />
        </EdgeSidebar>
        <Content>
          <AppContent onTabIndexChange={() => {}} />
        </Content>
        <CustomTrigger />
      </Root>
    </ThemeProvider>
  );
};

export default Gmail;
