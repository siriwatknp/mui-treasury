import React from "react";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { alpha, createTheme, ThemeProvider } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {
  Content,
  EdgeSidebar,
  EdgeTrigger,
  Header,
  Root,
  SidebarContent,
  Subheader,
} from "../layout-core-v5";
import {
  IconNavMockup,
  LinkNavMockup,
  SideNavUserInfoMockup,
  StatCardMockup,
  TopUsersCardMockup,
  UserActiveCardMockup,
} from "../mockup-dashboard";
import { UnderlineTabs } from "../mockup-tabs";
import { Word } from "../mockup-typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0064FE",
    },
    error: {
      main: "#FD3E5B",
    },
    grey: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
  },
});

export const LayoutAppAnalytics = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  });
  return (
    <ThemeProvider theme={theme}>
      <Root
        scheme={{
          header: {
            config: {
              xs: {
                position: "sticky",
                height: 48,
              },
              sm: {
                position: "sticky",
                height: 64,
              },
              md: {
                position: "sticky",
                height: 72,
              },
            },
          },
          subheader: {
            config: {
              xs: {
                position: "sticky",
                height: 44,
              },
              sm: {
                position: "sticky",
                height: 44,
              },
              md: {
                position: "sticky",
                height: 48,
              },
            },
          },
          leftEdgeSidebar: {
            autoCollapse: "md",
            config: {
              xs: {
                variant: "temporary",
                width: "100vw",
              },
              md: {
                variant: "permanent",
                width: 256,
                collapsible: true,
                collapsedWidth: 72,
                uncollapsedOnHover: true,
              },
            },
          },
        }}
      >
        <CssBaseline />
        <Header
          sx={{
            bgcolor: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(12px)",
            ...(trigger && {
              transition: "0.2s",
              boxShadow: "0 0 4px 0 #e2e8f0",
              "&:before": {
                content: '""',
                position: "absolute",
                display: "block",
                width: "100%",
                height: "1px",
                bgcolor: "grey.200",
                bottom: 0,
              },
            }),
          }}
        >
          <Box
            sx={{
              px: { xs: 1, md: 2.5 },
              display: "flex",
              alignItems: "center",
              gap: 1,
              height: { xs: 52, sm: 64, md: 72 },
            }}
          >
            <EdgeTrigger target={{ anchor: "left", field: "open" }}>
              {(open, setOpen) => (
                <IconButton onClick={() => setOpen(!open)}>
                  <MenuRounded />
                </IconButton>
              )}
            </EdgeTrigger>
            <Typography
              variant="h6"
              sx={{ fontSize: "clamp(18px, 1vw + 1rem, 24px)" }}
            >
              <b>Analytics</b>
            </Typography>
          </Box>
        </Header>
        <Subheader>
          <UnderlineTabs
            value={tabIndex}
            onChange={(event, index) => setTabIndex(index)}
            sx={{
              minHeight: { xs: 44, md: 48 },
              px: 2,
              "& .MuiTab-root": {
                minHeight: { xs: 44, md: 48 },
                minWidth: 0,
                fontSize: { md: 16 },
              },
            }}
          >
            <Tab label={<Word cached />} disableTouchRipple />
            <Tab label={<Word cached />} disableTouchRipple />
            <Tab label={<Word cached />} disableTouchRipple />
          </UnderlineTabs>
        </Subheader>
        <EdgeSidebar
          anchor="left"
          PaperProps={{
            sx: {
              overflow: "visible",
              maxWidth: 375,
              "&.AppEdgeSidebar-paperExpanded": {
                boxShadow: `0 0 12px 0 ${alpha("#64748b", 0.2)}`,
              },
            },
          }}
        >
          <EdgeTrigger
            target={{ anchor: "left", field: "open" }}
            sx={{
              position: "absolute",
              top: 48,
              right: { xs: 8, sm: -24 },
              zIndex: 1,
            }}
          >
            {(open, setOpen) => (
              <IconButton
                onClick={() => setOpen(!open)}
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "grey.200",
                  boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
                  "&:hover": {
                    bgcolor: "#f5f5f5",
                  },
                }}
              >
                <KeyboardArrowLeftRounded />
              </IconButton>
            )}
          </EdgeTrigger>
          <SidebarContent>
            <SideNavUserInfoMockup />
            <Box
              sx={{
                borderTop: "1px solid",
                borderColor: "grey.200",
                display: "flex",
                height: "100%",
              }}
            >
              <IconNavMockup size="small" />
              <LinkNavMockup />
            </Box>
          </SidebarContent>
          <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>
            {(collapsed, setCollapsed) => (
              <ButtonBase
                onClick={() => setCollapsed(!collapsed)}
                sx={{
                  height: 48,
                  width: "100%",
                  borderTop: "1px solid",
                  borderColor: "grey.200",
                }}
              >
                {collapsed ? (
                  <KeyboardArrowRightRounded />
                ) : (
                  <KeyboardArrowLeftRounded />
                )}
              </ButtonBase>
            )}
          </EdgeTrigger>
        </EdgeSidebar>
        <Content>
          <Box
            sx={{
              height: "16vh",
              minHeight: 240,
              borderRadius: 2,
              bgcolor: "#eaeff7",
              m: 2,
            }}
          />
          <Box sx={{ px: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={8} container spacing={2}>
                <Grid item xs={6}>
                  <StatCardMockup />
                </Grid>
                <Grid item xs={6}>
                  <StatCardMockup />
                </Grid>
                <Grid item xs={6}>
                  <StatCardMockup />
                </Grid>
                <Grid item xs={6}>
                  <StatCardMockup />
                </Grid>
                <Grid item xs={12} md={6}>
                  <UserActiveCardMockup />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TopUsersCardMockup sx={{ height: "100%" }} />
              </Grid>
            </Grid>
          </Box>
          <br />
          <br />
          <br />
        </Content>
      </Root>
    </ThemeProvider>
  );
};
