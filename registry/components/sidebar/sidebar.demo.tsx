"use client";

import { SidebarContainer } from "./sidebar-container";
import { SidebarGroup } from "./sidebar-group";
import { SidebarGroupLabel } from "./sidebar-group-label";
import { SidebarMenuList } from "./sidebar-menu-list";
import { SidebarMenuItem } from "./sidebar-menu-item";
import { SidebarMenuButton } from "./sidebar-menu-button";
import { SidebarIcon } from "./sidebar-icon";
import { SidebarText } from "./sidebar-text";
import HomeRounded from "@mui/icons-material/HomeRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import PeopleRounded from "@mui/icons-material/PeopleRounded";
import Box from "@mui/material/Box";
import { SidebarTooltip } from "./sidebar-tooltip";

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
