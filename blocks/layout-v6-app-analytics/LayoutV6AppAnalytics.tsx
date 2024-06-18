import React from "react";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Content from "../layout-v6-ditto/Content";
import EdgeDrawerClose from "../layout-v6-ditto/EdgeDrawerClose";
import EdgePermanentCollapse from "../layout-v6-ditto/EdgePermanentCollapse";
import EdgeSidebar, {
  toggleEdgeSidebarDrawer,
} from "../layout-v6-ditto/EdgeSidebar";
import Header from "../layout-v6-ditto/Header";
import Root from "../layout-v6-ditto/Root";
import SidebarContent from "../layout-v6-ditto/SidebarContent";
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
    <Root sx={{ containerType: "inline-size", containerName: "page" }}>
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
          <IconButton
            className="EdgeSidebar-trigger"
            onClick={() => toggleEdgeSidebarDrawer()}
          >
            <MenuRounded />
          </IconButton>
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
          [`@container page (max-width: ${theme.breakpoints.values.md - 1}px)`]:
            {
              "--JunSidebar-variant": "var(--drawer)",
              ".JunRoot:has(&) .EdgeSidebar-trigger": {
                display: "inline-flex",
              },
            },
          [`@container page (max-width: ${theme.breakpoints.values.lg - 1}px)`]:
            {
              "--JunSidebar-collapsible": "var(--collapsed)",
            },
        })}
      >
        <EdgeDrawerClose />

        <SidebarContent
          sx={(theme) => ({
            borderRight: "1px solid",
            borderColor: "divider",
            // TODO: move snippet below to utils
            [`@container page (max-width: ${theme.breakpoints.values.lg - 1}px)`]:
              {
                "&:hover": {
                  "--SidebarContent-width": "256px",
                  "--SidebarContent-transitionDelay": "0.3s",
                  boxShadow:
                    "var(--collapsed, 0 0 10px rgba(0,0,0,0.1)) var(--uncollapsed, none)",
                },
              },
          })}
        >
          <EdgePermanentCollapse />

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
        <Box sx={{ position: "absolute", top: 0, left: "100%" }}>Test</Box>
      </EdgeSidebar>
      <Content>
        <Box
          sx={{
            height: "16vh",
            minHeight: 240,
            borderRadius: 2,
            bgcolor: "background.paper",
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
  );
}
