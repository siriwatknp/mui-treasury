'use client';
import React from 'react';

import ArticleRounded from '@mui/icons-material/ArticleRounded';
import BarChartRounded from '@mui/icons-material/BarChartRounded';
import ChevronLeftRounded from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import CodeRounded from '@mui/icons-material/CodeRounded';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import FolderRounded from '@mui/icons-material/FolderRounded';
import HomeRounded from '@mui/icons-material/HomeRounded';
import LanguageRounded from '@mui/icons-material/LanguageRounded';
import MenuRounded from '@mui/icons-material/MenuRounded';
import NotificationsRounded from '@mui/icons-material/NotificationsRounded';
import PeopleRounded from '@mui/icons-material/PeopleRounded';
import Search from '@mui/icons-material/Search';
import SecurityRounded from '@mui/icons-material/SecurityRounded';
import SettingsRounded from '@mui/icons-material/SettingsRounded';
import StorageRounded from '@mui/icons-material/StorageRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

import { CollapsibleContent } from '@/registry/components/collapsible/collapsible-content';
import { CollapsibleIcon } from '@/registry/components/collapsible/collapsible-icon';
import { CollapsibleTrigger } from '@/registry/components/collapsible/collapsible-trigger';
import {
  SidebarContainer,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarIcon,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuList,
  SidebarRail,
  SidebarText,
} from '@/registry/components/sidebar';
import {
  PopupMenuContent,
  PopupMenuItem,
  PopupMenuLink,
  PopupMenuList,
} from '@/registry/components/sidebar';
import { SidebarTooltip } from '@/registry/components/sidebar';
import { EdgeDrawerClose } from '@/registry/layout/layout-core';
import Content from '@/registry/layout/layout-core/Content';
import EdgeSidebar, {
  triggerEdgeCollapse,
  triggerEdgeDrawer,
} from '@/registry/layout/layout-core/EdgeSidebar';
import EdgeSidebarContent from '@/registry/layout/layout-core/EdgeSidebarContent';
import Footer from '@/registry/layout/layout-core/Footer';
import Header from '@/registry/layout/layout-core/Header';
import Root from '@/registry/layout/layout-core/Root';
import { layoutClasses } from '@/registry/layout/layout-core/layoutClasses';
import { layoutVisibility } from '@/registry/layout/layout-core/layoutVisibility';

const SIDEBAR_ID = 'app-dashboard-sidebar';

const nestedMenus = [
  {
    title: 'Projects',
    icon: FolderRounded,
    children: [
      { title: 'Design System' },
      { title: 'Landing Page' },
      { title: 'API Gateway' },
    ],
  },
  {
    title: 'Documentation',
    icon: ArticleRounded,
    children: [
      { title: 'Getting Started' },
      { title: 'Components' },
      { title: 'API Reference' },
    ],
  },
  {
    title: 'Team',
    icon: PeopleRounded,
    children: [{ title: 'Members' }, { title: 'Permissions' }],
  },
];

const menus = [
  { title: 'Account Home', icon: HomeRounded },
  { title: 'Discover', icon: Search },
  { title: 'Domain Registration', icon: LanguageRounded },
  { title: 'Analytics & Logs', icon: BarChartRounded },
  { title: 'Security Center', icon: SecurityRounded },
  { title: 'Workers & Pages', icon: CodeRounded },
  { title: 'Storage & Databases', icon: StorageRounded },
  { title: 'Manage Account', icon: SettingsRounded },
  { title: 'Notifications', icon: NotificationsRounded },
];

export default function AppDashboardPage() {
  return (
    <Root>
      <Header height={{ xs: '48px', md: '64px' }} clip>
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
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            ml: 1
          }}>
          Dashboard
        </Typography>
      </Header>
      <EdgeSidebar
        id={SIDEBAR_ID}
        permanentAutoCollapse="lg"
        variant={{
          xs: ['drawer', { width: '260px', showHeader: true }],
          md: [
            'permanent',
            {
              width: '260px',
              collapsedWidth: '52px',
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
                      <SidebarMenuButton active={item.title === 'Account Home'}>
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
                      <PopupMenuItem
                        tooltip={item.title}
                        render={
                          <SidebarMenuButton hideWhen="uncollapsed">
                            <SidebarIcon shrinkSize="20px">
                              <Icon />
                            </SidebarIcon>
                          </SidebarMenuButton>
                        }
                      >
                        <PopupMenuContent render={<SidebarMenuList />}>
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

                      <SidebarMenuItem>
                        <CollapsibleTrigger
                          defaultChecked={item.title === 'Projects'}
                          render={
                            <SidebarMenuButton hideWhen="collapsed">
                              <SidebarIcon shrinkSize="20px">
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
                                          <SidebarText>Nested Menu</SidebarText>
                                        </SidebarMenuButton>
                                      </SidebarMenuItem>
                                      <SidebarMenuItem>
                                        <SidebarMenuButton>
                                          <SidebarText>Nested Menu</SidebarText>
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
                    </React.Fragment>
                  );
                })}
              </PopupMenuList>
            </SidebarGroup>
          </SidebarContainer>
          <Box sx={{ mt: 'auto', borderTop: 1, borderColor: 'divider' }}>
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
                        className={
                          layoutVisibility.visibleOnEdgePermanentUncollapsed
                        }
                      />
                      <ChevronRightRounded
                        className={
                          layoutVisibility.visibleOnEdgePermanentCollapsed
                        }
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
        <Box sx={{ maxWidth: 960, mx: 'auto' }}>
          <Typography variant="h4" gutterBottom sx={{
            fontWeight: "bold"
          }}>
            Boost your site&apos;s speed and security
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              mb: 4
            }}>
            Connect your domain to start sending web traffic through the
            platform.
          </Typography>
          <Box
            sx={{
              p: 3,
              border: 1,
              borderColor: 'divider',
              borderRadius: 2,
              mb: 3,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: "medium",
                mb: 1
              }}>
              Enter an existing domain
            </Typography>
            <Box
              component="input"
              placeholder="example.com"
              sx={(theme) => ({
                width: '100%',
                maxWidth: 400,
                px: 1.5,
                py: 1,
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                fontSize: 14,
                outline: 'none',
                fontFamily: 'inherit',
                bgcolor: 'transparent',
                color: 'text.primary',
                '&:focus': {
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
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Typography variant="caption" sx={{
          color: "text.secondary"
        }}>
          Support
        </Typography>
        <Typography variant="caption" sx={{
          color: "text.secondary"
        }}>
          System Status
        </Typography>
        <Typography variant="caption" sx={{
          color: "text.secondary"
        }}>
          Privacy Policy
        </Typography>
        <Typography variant="caption" sx={{
          color: "text.secondary"
        }}>
          © 2025 Company, Inc.
        </Typography>
      </Footer>
    </Root>
  );
}
