import React from "react";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Content from "../layout-core-v6/Content";
import EdgeSidebar, {
  applyEdgeSidebarStyles,
  toggleEdgeSidebarCollapse,
  toggleTemporaryEdgeSidebar,
} from "../layout-core-v6/EdgeSidebar";
import SidebarContent from "../layout-core-v6/EdgeSidebarContent";
import EdgeSidebarRight, {
  applyEdgeSidebarRightStyles,
  toggleEdgeSidebarRightCollapse,
  toggleTemporaryEdgeSidebarRight,
} from "../layout-core-v6/EdgeSidebarRight";
import EdgeTemporaryClose from "../layout-core-v6/EdgeTemporaryClose";
import Header from "../layout-core-v6/Header";
import Root from "../layout-core-v6/Root";
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
    <Root>
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
            onClick={() => toggleTemporaryEdgeSidebar()}
          >
            <MenuRounded />
          </IconButton>

          <IconButton
            className="EdgeSidebar-collapser"
            onClick={(event) => toggleEdgeSidebarCollapse({ event })}
          >
            <MenuRounded className="Icon-uncollapse" />
            <ChevronLeftRounded className="Icon-collapse" />
          </IconButton>

          <Typography
            variant="h6"
            sx={{ fontSize: "clamp(18px, 1vw + 1rem, 24px)" }}
          >
            <b>Analytics</b>
          </Typography>

          {/* <IconButton
            className="EdgeSidebar-R-collapser"
            onClick={(event) => toggleEdgeSidebarRightCollapse({ event })}
          >
            <MenuRounded className="Icon-uncollapse" />
            <ChevronLeftRounded className="Icon-collapse" />
          </IconButton> */}

          {/* <IconButton
            className="EdgeSidebar-R-trigger"
            onClick={() => toggleTemporaryEdgeSidebarRight()}
          >
            <MenuRounded />
          </IconButton> */}
        </Box>
      </Header>
      {/* <EdgeSidebarRight
        sx={(theme) => ({
          ...applyEdgeSidebarRightStyles(theme, {
            config: {
              xs: {
                variant: "temporary",
              },
              md: {
                variant: "persistent",
                persistentBehavior: "none",
              },
              lg: {
                variant: "permanent",
                width: "300px",
                autoCollapse: "md",
                collapsedWidth: "80px",
                expandOnHover: true,
              },
            },
          }),
        })}
      >
        <SidebarContent>Hello</SidebarContent>
      </EdgeSidebarRight> */}
      <EdgeSidebar
        sx={(theme) => ({
          ...applyEdgeSidebarStyles(theme, {
            config: {
              xs: {
                variant: "temporary",
              },
              md: {
                variant: "persistent",
                persistentBehavior: "none",
              },
              lg: {
                autoCollapse: "xl",
                variant: "permanent",
                width: "300px",
                collapsedWidth: "80px",
                expandOnHover: true,
              },
            },
          }),
        })}
      >
        <EdgeTemporaryClose />

        <SidebarContent
          sx={{
            borderRight: "1px solid",
            borderColor: "divider",
          }}
        >
          {/* <IconButton
            className="EdgeSidebar-collapser"
            onClick={(event) => toggleEdgeSidebarCollapse({ event })}
          >
            <MenuRounded className="Icon-uncollapse" />
            <ChevronLeftRounded className="Icon-collapse" />
          </IconButton> */}
          <SideNavUserInfoMockup />
          {/* <button
            className="EdgeSidebar-collapser"
            onClick={(event) => toggleEdgeSidebarCollapse({ event })}
          >
            Close
          </button> */}
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
