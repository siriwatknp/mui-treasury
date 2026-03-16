"use client";

import BarChartRounded from "@mui/icons-material/BarChartRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import PeopleRounded from "@mui/icons-material/PeopleRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { SidebarContainer } from "@/registry/components/sidebar/sidebar-container";
import { SidebarGroup } from "@/registry/components/sidebar/sidebar-group";
import { SidebarGroupLabel } from "@/registry/components/sidebar/sidebar-group-label";
import { SidebarIcon } from "@/registry/components/sidebar/sidebar-icon";
import { SidebarMenuButton } from "@/registry/components/sidebar/sidebar-menu-button";
import { SidebarMenuItem } from "@/registry/components/sidebar/sidebar-menu-item";
import { SidebarMenuList } from "@/registry/components/sidebar/sidebar-menu-list";
import { SidebarText } from "@/registry/components/sidebar/sidebar-text";
import { SidebarTooltip } from "@/registry/components/sidebar/sidebar-tooltip";

export function Demo() {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <Box sx={{ width: 240 }}>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarMenuList>
              <SidebarMenuItem>
                <SidebarMenuButton active>
                  <SidebarIcon>
                    <HomeRounded />
                  </SidebarIcon>
                  <SidebarText>Home</SidebarText>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <BarChartRounded />
                  </SidebarIcon>
                  <SidebarText>Analytics</SidebarText>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <FolderRounded />
                  </SidebarIcon>
                  <SidebarText>Projects</SidebarText>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenuList>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Management</SidebarGroupLabel>
            <SidebarMenuList>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <PeopleRounded />
                  </SidebarIcon>
                  <SidebarText>Team</SidebarText>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <SettingsRounded />
                  </SidebarIcon>
                  <SidebarText>Settings</SidebarText>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenuList>
          </SidebarGroup>
        </SidebarContainer>
      </Box>

      <Divider orientation="vertical" sx={{ height: "auto" }} />

      {/* When the container's width < 100, it enters collapsed mode */}
      <Box sx={{ width: 48 }}>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarMenuList>
              <SidebarMenuItem>
                <SidebarTooltip title="Home">
                  <SidebarMenuButton active>
                    <SidebarIcon>
                      <HomeRounded />
                    </SidebarIcon>
                    <SidebarText>Home</SidebarText>
                  </SidebarMenuButton>
                </SidebarTooltip>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarTooltip title="Analytics">
                  <SidebarMenuButton>
                    <SidebarIcon>
                      <BarChartRounded />
                    </SidebarIcon>
                    <SidebarText>Analytics</SidebarText>
                  </SidebarMenuButton>
                </SidebarTooltip>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarTooltip title="Projects">
                  <SidebarMenuButton>
                    <SidebarIcon>
                      <FolderRounded />
                    </SidebarIcon>
                    <SidebarText>Projects</SidebarText>
                  </SidebarMenuButton>
                </SidebarTooltip>
              </SidebarMenuItem>
            </SidebarMenuList>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Management</SidebarGroupLabel>
            <SidebarMenuList>
              <SidebarMenuItem>
                <SidebarTooltip title="Team">
                  <SidebarMenuButton>
                    <SidebarIcon>
                      <PeopleRounded />
                    </SidebarIcon>
                    <SidebarText>Team</SidebarText>
                  </SidebarMenuButton>
                </SidebarTooltip>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarTooltip title="Settings">
                  <SidebarMenuButton>
                    <SidebarIcon>
                      <SettingsRounded />
                    </SidebarIcon>
                    <SidebarText>Settings</SidebarText>
                  </SidebarMenuButton>
                </SidebarTooltip>
              </SidebarMenuItem>
            </SidebarMenuList>
          </SidebarGroup>
        </SidebarContainer>
      </Box>
    </Box>
  );
}
