"use client";
import React from "react";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Search from "@mui/icons-material/Search";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import SecurityRounded from "@mui/icons-material/SecurityRounded";
import LanguageRounded from "@mui/icons-material/LanguageRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import StorageRounded from "@mui/icons-material/StorageRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import NotificationsRounded from "@mui/icons-material/NotificationsRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";
import ArticleRounded from "@mui/icons-material/ArticleRounded";
import PeopleRounded from "@mui/icons-material/PeopleRounded";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import Root from "@/registry/layout/layout-core/Root";
import Header from "@/registry/layout/layout-core/Header";
import Content from "@/registry/layout/layout-core/Content";
import Footer from "@/registry/layout/layout-core/Footer";
import EdgeSidebar, {
  triggerEdgeCollapse,
  triggerEdgeDrawer,
} from "@/registry/layout/layout-core/EdgeSidebar";
import EdgeSidebarContent from "@/registry/layout/layout-core/EdgeSidebarContent";
import { layoutClasses } from "@/registry/layout/layout-core/layoutClasses";
import { EdgeDrawerClose } from "@/registry/layout/layout-core";
import {
  SidebarContainer,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuList,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarIcon,
  SidebarText,
  SidebarRail,
} from "@/registry/components/sidebar";
import { CollapsibleTrigger } from "@/registry/components/collapsible/collapsible-trigger";
import { CollapsibleContent } from "@/registry/components/collapsible/collapsible-content";
import {
  PopupMenuList,
  PopupMenuItem,
  PopupMenuLink,
  PopupMenuContent,
} from "@/registry/components/sidebar";
import { useCollapsedSidebar } from "@/registry/layout/layout-core/SharedEdgeSidebar";
import { CollapsibleIcon } from "@/registry/components/collapsible/collapsible-icon";
import { SidebarTooltip } from "@/registry/components/sidebar";

const SIDEBAR_ID = "app-dashboard-sidebar";

const nestedMenus = [
  {
    title: "Projects",
    icon: FolderRounded,
    children: [
      { title: "Design System" },
      { title: "Landing Page" },
      { title: "API Gateway" },
    ],
  },
  {
    title: "Documentation",
    icon: ArticleRounded,
    children: [
      { title: "Getting Started" },
      { title: "Components" },
      { title: "API Reference" },
    ],
  },
  {
    title: "Team",
    icon: PeopleRounded,
    children: [{ title: "Members" }, { title: "Permissions" }],
  },
];

const menus = [
  { title: "Account Home", icon: HomeRounded },
  { title: "Discover", icon: Search },
  { title: "Domain Registration", icon: LanguageRounded },
  { title: "Analytics & Logs", icon: BarChartRounded },
  { title: "Security Center", icon: SecurityRounded },
  { title: "Workers & Pages", icon: CodeRounded },
  { title: "Storage & Databases", icon: StorageRounded },
  { title: "Manage Account", icon: SettingsRounded },
  { title: "Notifications", icon: NotificationsRounded },
];

export default function AppDashboardPage() {
  const collapsed = useCollapsedSidebar(SIDEBAR_ID);
  return (
    <Root>
      <Header height={{ xs: "48px", md: "64px" }} clip>
        <IconButton
          className={layoutClasses.EdgeDrawerTrigger}
          onClick={() => triggerEdgeDrawer({ sidebarId: SIDEBAR_ID })}
          sx={{ ml: 1 }}
        >
          <MenuRounded className={layoutClasses.EdgeDrawerClosedVisible} />
          <CloseRounded className={layoutClasses.EdgeDrawerOpenVisible} />
        </IconButton>
        <IconButton
          className={layoutClasses.EdgeSidebarCollapser}
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
          xs: ["drawer", { width: "260px", showHeader: true }],
          md: [
            "permanent",
            {
              width: "260px",
              collapsedWidth: "52px",
              // hoverUncollapse: true,
            },
          ],
        }}
      >
        <EdgeDrawerClose />
        <EdgeSidebarContent>
          <SidebarContainer>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarMenuList>
                {menus.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SidebarTooltip title={item.title} key={item.title}>
                      <SidebarMenuButton active={item.title === "Account Home"}>
                        <SidebarIcon shrinkSize="1.25rem">
                          <Icon />
                        </SidebarIcon>
                        <SidebarText>{item.title}</SidebarText>
                      </SidebarMenuButton>
                    </SidebarTooltip>
                  );
                })}
              </SidebarMenuList>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <PopupMenuList>
                {nestedMenus.map((item) => {
                  const Icon = item.icon;
                  return (
                    <React.Fragment key={item.title}>
                      {/* collapsed sidebar */}
                      {collapsed && (
                        <PopupMenuItem
                          tooltip={item.title}
                          render={
                            <SidebarMenuButton hideWhen="uncollapsed">
                              <SidebarIcon shrinkSize="1.25rem">
                                <Icon />
                              </SidebarIcon>
                            </SidebarMenuButton>
                          }
                        >
                          <PopupMenuContent>
                            <PopupMenuList>
                              <PopupMenuItem
                                render={
                                  <SidebarMenuButton>
                                    <SidebarText>Nested Menu</SidebarText>
                                    <SidebarIcon>
                                      <ChevronRightRounded />
                                    </SidebarIcon>
                                  </SidebarMenuButton>
                                }
                              >
                                <PopupMenuContent>
                                  <SidebarMenuList>
                                    <SidebarMenuItem>
                                      <PopupMenuLink
                                        href="/app-layout/app-analytics"
                                        component={NextLink}
                                      >
                                        Overview
                                      </PopupMenuLink>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                      <PopupMenuLink
                                        href="/app-layout/app-shopping-cart"
                                        component={NextLink}
                                      >
                                        Settings
                                      </PopupMenuLink>
                                    </SidebarMenuItem>
                                  </SidebarMenuList>
                                </PopupMenuContent>
                              </PopupMenuItem>
                            </PopupMenuList>
                            {item.children.map((child) => (
                              <SidebarMenuItem key={child.title}>
                                <PopupMenuLink href="#">
                                  {child.title}
                                </PopupMenuLink>
                              </SidebarMenuItem>
                            ))}
                          </PopupMenuContent>
                        </PopupMenuItem>
                      )}

                      {/* uncollapsed sidebar */}

                      {!collapsed && (
                        <SidebarMenuItem>
                          <CollapsibleTrigger
                            defaultChecked={item.title === "Projects"}
                            render={
                              <SidebarMenuButton>
                                <SidebarIcon shrinkSize="1.25rem">
                                  <Icon />
                                </SidebarIcon>
                                <SidebarText>{item.title}</SidebarText>
                                <CollapsibleIcon>
                                  <ExpandMoreRounded />
                                </CollapsibleIcon>
                              </SidebarMenuButton>
                            }
                          />
                          <CollapsibleContent>
                            <div>
                              <SidebarMenuList nested>
                                <SidebarMenuItem>
                                  <CollapsibleTrigger
                                    render={
                                      <SidebarMenuButton>
                                        <SidebarIcon>
                                          <Icon />
                                        </SidebarIcon>
                                        <SidebarText>Nested Menu</SidebarText>
                                        <CollapsibleIcon>
                                          <ExpandMoreRounded />
                                        </CollapsibleIcon>
                                      </SidebarMenuButton>
                                    }
                                  />
                                  <CollapsibleContent>
                                    <div>
                                      <SidebarMenuList nested>
                                        <SidebarMenuItem>
                                          <SidebarMenuButton>
                                            <SidebarText>
                                              Nested Menu
                                            </SidebarText>
                                          </SidebarMenuButton>
                                        </SidebarMenuItem>
                                        <SidebarMenuItem>
                                          <SidebarMenuButton>
                                            <SidebarText>
                                              Nested Menu
                                            </SidebarText>
                                          </SidebarMenuButton>
                                        </SidebarMenuItem>
                                      </SidebarMenuList>
                                    </div>
                                  </CollapsibleContent>
                                </SidebarMenuItem>
                                {item.children.map((child) => (
                                  <SidebarMenuItem key={child.title}>
                                    <SidebarMenuButton>
                                      <SidebarText>{child.title}</SidebarText>
                                    </SidebarMenuButton>
                                  </SidebarMenuItem>
                                ))}
                              </SidebarMenuList>
                            </div>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      )}
                    </React.Fragment>
                  );
                })}
              </PopupMenuList>
            </SidebarGroup>
          </SidebarContainer>
          <Box sx={{ mt: "auto", borderTop: 1, borderColor: "divider" }}>
            <SidebarGroup>
              <SidebarMenuList>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className={layoutClasses.EdgeSidebarCollapser}
                    onClick={(event) =>
                      triggerEdgeCollapse({ event, sidebarId: SIDEBAR_ID })
                    }
                  >
                    <SidebarIcon>
                      <ChevronLeftRounded
                        className={layoutClasses.EdgeUncollapsedVisible}
                      />
                      <ChevronRightRounded
                        className={layoutClasses.EdgeCollapsedVisible}
                      />
                    </SidebarIcon>
                    <SidebarText>Collapse</SidebarText>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenuList>
            </SidebarGroup>
          </Box>
        </EdgeSidebarContent>
        <SidebarRail
          className={layoutClasses.EdgeSidebarCollapser}
          onClick={(event) =>
            triggerEdgeCollapse({
              event: event as unknown as React.MouseEvent,
              sidebarId: SIDEBAR_ID,
            })
          }
        />
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
