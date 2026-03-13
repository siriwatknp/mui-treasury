"use client";

import HomeRounded from "@mui/icons-material/HomeRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";

import { SidebarContainer } from "@/registry/components/sidebar/sidebar-container";
import { SidebarGroup } from "@/registry/components/sidebar/sidebar-group";
import { SidebarMenuList } from "@/registry/components/sidebar/sidebar-menu-list";
import { SidebarMenuItem } from "@/registry/components/sidebar/sidebar-menu-item";
import { SidebarMenuButton } from "@/registry/components/sidebar/sidebar-menu-button";
import { SidebarIcon } from "@/registry/components/sidebar/sidebar-icon";
import { SidebarText } from "@/registry/components/sidebar/sidebar-text";
import { SidebarTooltip } from "@/registry/components/sidebar/sidebar-tooltip";

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
