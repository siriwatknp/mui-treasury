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
import HomeRounded from "@mui/icons-material/HomeRounded";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import AddRounded from "@mui/icons-material/AddRounded";

export function Demo() {
  return (
    <div style={{ width: 240 }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarGroupLabel>
            Application
            <SidebarMenuAction hoverAppear>
              <AddRounded />
            </SidebarMenuAction>
          </SidebarGroupLabel>
          <SidebarMenuList>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <HomeRounded />
                </SidebarIcon>
                <SidebarText>Overview</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <BarChartRounded />
                </SidebarIcon>
                <SidebarText>Reports</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenuList>
        </SidebarGroup>
      </SidebarContainer>
    </div>
  );
}
