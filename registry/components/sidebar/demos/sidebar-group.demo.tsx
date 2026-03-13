"use client";

import { SidebarContainer } from "../sidebar-container";
import { SidebarGroup } from "../sidebar-group";
import { SidebarGroupLabel } from "../sidebar-group-label";
import { SidebarMenuList } from "../sidebar-menu-list";
import { SidebarMenuItem } from "../sidebar-menu-item";
import { SidebarMenuButton } from "../sidebar-menu-button";
import { SidebarIcon } from "../sidebar-icon";
import { SidebarText } from "../sidebar-text";
import { SidebarMenuAction } from "../sidebar-menu-action";
import AddRounded from "@mui/icons-material/AddRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import PeopleRounded from "@mui/icons-material/PeopleRounded";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";

export function Demo() {
  return (
    <div style={{ width: 240 }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarGroupLabel>
            Main
            <SidebarMenuAction>
              <AddRounded />
            </SidebarMenuAction>
          </SidebarGroupLabel>
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
          <SidebarGroupLabel>
            Analytics{" "}
            <SidebarMenuAction>
              <AddRounded />
            </SidebarMenuAction>
          </SidebarGroupLabel>
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
