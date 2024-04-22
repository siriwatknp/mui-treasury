import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Content,
  EdgeSidebar,
  Header,
  Page,
  SidebarContent,
  SidebarMobileCloser,
  SidebarMobileMenu,
} from "../layout-v6-ditto";
import {
  IconNavMockup,
  LinkNavMockup,
  SideNavUserInfoMockup,
  StatCardMockup,
  TopUsersCardMockup,
  UserActiveCardMockup,
} from "../mockup-dashboard";

export function LayoutV6AppAnalytics() {
  return (
    <Page>
      <Header
        sx={{
          height: { xs: 48, sm: 64, md: 72 },
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
          <SidebarMobileMenu />
          {/* <EdgeTrigger target={{ anchor: "left", field: "open" }}>
            {(open, setOpen) => (
              <IconButton onClick={() => setOpen(!open)}>
                <MenuRounded />
              </IconButton>
            )}
          </EdgeTrigger> */}
          <Typography
            variant="h6"
            sx={{ fontSize: "clamp(18px, 1vw + 1rem, 24px)" }}
          >
            <b>Analytics</b>
          </Typography>
        </Box>
      </Header>
      <EdgeSidebar
        sx={(theme) => ({
          [`@container page (min-width: ${theme.breakpoints.values.md}px)`]: {
            "--JunSidebar-variant": "var(--permanent)",
            "--JunSidebar-width": "72px",
            "--JunSidebar-hidden": "0",
          },
          [`@container page (min-width: ${theme.breakpoints.values.lg}px)`]: {
            "--JunSidebar-width": "256px",
          },
        })}
      >
        <SidebarMobileCloser />
        <SidebarContent
          sx={(theme) => ({
            backgroundColor: "#fff",
            [`@container page (min-width: ${theme.breakpoints.values.md}px)`]: {
              overflow: "auto",
              "&:hover": {
                width: "256px",
              },
            },
          })}
        >
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
    </Page>
  );
}
