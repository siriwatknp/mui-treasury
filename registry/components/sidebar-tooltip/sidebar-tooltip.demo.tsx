"use client";

import SidebarContainer from "../sidebar-container/sidebar-container";
import SidebarGroup from "../sidebar-group/sidebar-group";
import SidebarMenuList from "../sidebar-menu/sidebar-menu-list";
import SidebarMenuItem from "../sidebar-menu-item/sidebar-menu-item";
import SidebarMenuButton from "../sidebar-menu-button/sidebar-menu-button";
import SidebarIcon from "../sidebar-icon/sidebar-icon";
import SidebarText from "../sidebar-text/sidebar-text";
import SidebarTooltip from "./sidebar-tooltip";
import HomeRounded from "@mui/icons-material/HomeRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";

export default function SidebarTooltipDemo() {
  return (
    <div style={{ width: 60, border: "1px solid" }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarMenuList>
            <SidebarMenuItem>
              <SidebarTooltip title="Home">
                <SidebarMenuButton>
                  <SidebarIcon>
                    <HomeRounded />
                  </SidebarIcon>
                  <SidebarText>Home</SidebarText>
                </SidebarMenuButton>
              </SidebarTooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarTooltip title="Search">
                <SidebarMenuButton>
                  <SidebarIcon>
                    <SearchRounded />
                  </SidebarIcon>
                  <SidebarText>Search</SidebarText>
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
    </div>
  );
}
