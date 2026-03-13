"use client";

import { SidebarContainer } from "../sidebar-container/sidebar-container";
import { SidebarGroup } from "./sidebar-group";
import { SidebarGroupLabel } from "../sidebar-group-label/sidebar-group-label";
import { SidebarMenuList } from "../sidebar-menu/sidebar-menu-list";
import { SidebarMenuItem } from "../sidebar-menu-item/sidebar-menu-item";
import { SidebarMenuButton } from "../sidebar-menu-button/sidebar-menu-button";
import { SidebarIcon } from "../sidebar-icon/sidebar-icon";
import { SidebarText } from "../sidebar-text/sidebar-text";
import HomeRounded from "@mui/icons-material/HomeRounded";
import PeopleRounded from "@mui/icons-material/PeopleRounded";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";

export function Demo() {
  return (
    <div style={{ width: 240 }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarMenuList>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <HomeRounded />
                </SidebarIcon>
                <SidebarText>Home</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <PeopleRounded />
                </SidebarIcon>
                <SidebarText>Users</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenuList>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
          <SidebarMenuList>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <BarChartRounded />
                </SidebarIcon>
                <SidebarText>Reports</SidebarText>
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
    </div>
  );
}
