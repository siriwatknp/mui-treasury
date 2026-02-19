"use client";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import SecurityRounded from "@mui/icons-material/SecurityRounded";
import LanguageRounded from "@mui/icons-material/LanguageRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import StorageRounded from "@mui/icons-material/StorageRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import NotificationsRounded from "@mui/icons-material/NotificationsRounded";
import Root from "@/registry/layout/layout-core/Root";
import Header from "@/registry/layout/layout-core/Header";
import Content from "@/registry/layout/layout-core/Content";
import Footer from "@/registry/layout/layout-core/Footer";
import EdgeSidebar, {
  triggerEdgeCollapse,
  triggerEdgeDrawer,
} from "@/registry/layout/layout-core/EdgeSidebar";
import EdgeSidebarContent from "@/registry/layout/layout-core/EdgeSidebarContent";

const SIDEBAR_ID = "app-dashboard-sidebar";

const menus = [
  { title: "Account Home", icon: HomeRounded },
  { title: "Discover", icon: HomeRounded },
  { title: "Domain Registration", icon: LanguageRounded },
  { title: "Analytics & Logs", icon: BarChartRounded },
  { title: "Security Center", icon: SecurityRounded },
  { title: "Workers & Pages", icon: CodeRounded },
  { title: "Storage & Databases", icon: StorageRounded },
  { title: "Manage Account", icon: SettingsRounded },
  { title: "Notifications", icon: NotificationsRounded },
];

export default function AppDashboardPage() {
  return (
    <Root>
      <Header height="64px" clip="left">
        <IconButton
          className="EdgeDrawerTrigger"
          onClick={() => triggerEdgeDrawer({ sidebarId: SIDEBAR_ID })}
          sx={{ ml: 1 }}
        >
          <MenuRounded data-edge-drawer-closed-visible="" />
          <CloseRounded data-edge-drawer-open-visible="" />
        </IconButton>
        <IconButton
          className="EdgeSidebar-collapser"
          onClick={(event) =>
            triggerEdgeCollapse({ event, sidebarId: SIDEBAR_ID })
          }
          sx={{ ml: 1 }}
        >
          <MenuRounded />
        </IconButton>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ ml: 1 }}>
          Dashboard
        </Typography>
      </Header>

      <EdgeSidebar
        id={SIDEBAR_ID}
        permanentAutoCollapse="lg"
        variant={{
          xs: ["drawer", { width: "260px" }],
          md: [
            "permanent",
            {
              width: "260px",
              collapsedWidth: "55px",
              expandOnHover: true,
            },
          ],
        }}
      >
        <EdgeSidebarContent>
          <Box
            sx={{
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Typography variant="subtitle2" fontWeight="bold">
              App
            </Typography>
          </Box>

          <List sx={{ flex: 1, overflow: "auto" }}>
            {menus.map((item) => {
              const Icon = item.icon;
              return (
                <ListItem key={item.title} disablePadding>
                  <ListItemButton sx={{ minHeight: 40, px: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      slotProps={{
                        primary: { variant: "body2", noWrap: true },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Box sx={{ borderTop: 1, borderColor: "divider" }}>
            <ListItemButton
              className="EdgeSidebar-collapser"
              onClick={(event) =>
                triggerEdgeCollapse({ event, sidebarId: SIDEBAR_ID })
              }
              sx={{ minHeight: 60, px: 1.5 }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <ChevronLeftRounded
                  fontSize="small"
                  className="EdgeUncollapsedVisible"
                />
                <ChevronRightRounded
                  fontSize="small"
                  className="EdgeCollapsedVisible"
                />
              </ListItemIcon>
              <ListItemText
                primary="Collapse"
                slotProps={{ primary: { variant: "body2", noWrap: true } }}
              />
            </ListItemButton>
          </Box>
        </EdgeSidebarContent>
      </EdgeSidebar>

      <Content sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ maxWidth: 960, mx: "auto" }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Boost your site&apos;s speed and security
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Connect your domain to start sending web traffic through the
            platform.
          </Typography>
          <Box
            sx={{
              p: 3,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              mb: 3,
            }}
          >
            <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
              Enter an existing domain
            </Typography>
            <Box
              component="input"
              placeholder="example.com"
              sx={(theme) => ({
                width: "100%",
                maxWidth: 400,
                px: 1.5,
                py: 1,
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
                fontSize: 14,
                outline: "none",
                fontFamily: "inherit",
                bgcolor: "transparent",
                color: "text.primary",
                "&:focus": {
                  borderColor: (theme.vars || theme).palette.primary.main,
                },
              })}
            />
          </Box>
        </Box>
      </Content>

      <Footer
        sx={{
          py: 2,
          px: 3,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography variant="caption" color="text.secondary">
          Support
        </Typography>
        <Typography variant="caption" color="text.secondary">
          System Status
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Privacy Policy
        </Typography>
        <Typography variant="caption" color="text.secondary">
          © 2025 Company, Inc.
        </Typography>
      </Footer>
    </Root>
  );
}
