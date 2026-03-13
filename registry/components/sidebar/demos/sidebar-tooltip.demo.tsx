"use client";

import { SidebarContainer } from "../sidebar-container";
import { SidebarGroup } from "../sidebar-group";
import { SidebarMenuList } from "../sidebar-menu-list";
import { SidebarMenuItem } from "../sidebar-menu-item";
import { SidebarMenuButton } from "../sidebar-menu-button";
import { SidebarIcon } from "../sidebar-icon";
import { SidebarText } from "../sidebar-text";
import { SidebarTooltip } from "../sidebar-tooltip";
import HomeRounded from "@mui/icons-material/HomeRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";

export const meta = {
  title: "Tooltip",
  description: "Tooltips for icon-only collapsed sidebar items.",
};

export function Demo() {
  return (
    <div style={{ width: 48 }}>
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
