"use client";

import SidebarContainer from "../sidebar-container/sidebar-container";
import SidebarGroup from "../sidebar-group/sidebar-group";
import SidebarMenuList from "../sidebar-menu/sidebar-menu-list";
import SidebarMenuItem from "../sidebar-menu-item/sidebar-menu-item";
import SidebarMenuButton from "./sidebar-menu-button";
import SidebarIcon from "../sidebar-icon/sidebar-icon";
import SidebarText from "../sidebar-text/sidebar-text";
import HomeRounded from "@mui/icons-material/HomeRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import SidebarGroupText from "../sidebar-group-text/sidebar-group-text";

export default function SidebarMenuButtonDemo() {
  return (
    <div style={{ width: 240 }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarMenuList>
            <SidebarMenuItem>
              <SidebarMenuButton active>
                <SidebarIcon>
                  <HomeRounded />
                </SidebarIcon>
                <SidebarText>Home (active)</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <SearchRounded />
                </SidebarIcon>
                <SidebarGroupText>
                  <div>
                    <SidebarText>Search</SidebarText>
                    <SidebarText>Find your content</SidebarText>
                  </div>
                </SidebarGroupText>
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
