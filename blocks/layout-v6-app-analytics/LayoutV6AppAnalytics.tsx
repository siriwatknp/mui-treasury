import React from "react";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Content from "../layout-core-v6/Content";
import EdgeSidebar, {
  applyEdgeSidebarStyles,
  toggleEdgeSidebarCollapse,
  toggleTemporaryEdgeSidebar,
} from "../layout-core-v6/EdgeSidebar";
import EdgeSidebarContent from "../layout-core-v6/EdgeSidebarContent";
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
import { UnderlineTabs } from "../mockup-tabs";
import { Word } from "../mockup-typography";

export function LayoutV6AppAnalytics() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  });
  return (
    <Root>
      <Header
        sx={{
          height: { xs: 48, sm: 64, md: 72 },
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
          <IconButton
            className="EdgeSidebar-trigger"
            onClick={() => toggleTemporaryEdgeSidebar()}
          >
            <MenuRounded />
          </IconButton>

          <IconButton
            className="EdgeSidebar-collapser"
            onClick={(event) => toggleEdgeSidebarCollapse({ event })}
            sx={{
              marginLeft:
                "var(--uncollapsed, max(0px, (1px - var(--EdgeSidebar-permanentWidth)) * 240))",
              transition: "margin-left 0.3s",
            }}
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
        </Box>
      </Header>
      <EdgeSidebar
        sx={(theme) => ({
          ...applyEdgeSidebarStyles({
            theme,
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

        <EdgeSidebarContent>
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
        </EdgeSidebarContent>
      </EdgeSidebar>
      <Content>
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
        <Box
          sx={{
            height: "16vh",
            minHeight: 240,
            borderRadius: 2,
            bgcolor: "rgba(0 0 0 / 0.12)",
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
