"use client";

import Tooltip from "@mui/material/Tooltip";
import SidebarContainer from "../sidebar-container/SidebarContainer";
import SidebarGroup from "../sidebar-group/SidebarGroup";
import SidebarMenu from "../sidebar-menu/SidebarMenu";
import SidebarMenuItem from "../sidebar-menu-item/SidebarMenuItem";
import SidebarMenuButton from "../sidebar-menu-button/SidebarMenuButton";
import SidebarIcon from "../sidebar-icon/SidebarIcon";
import SidebarText from "../sidebar-text/SidebarText";
import SidebarTooltip from "./SidebarTooltip";
import HomeRounded from "@mui/icons-material/HomeRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";

export default function SidebarTooltipDemo() {
  return (
    <div style={{ width: 60, border: "1px solid" }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <Tooltip
                title={<SidebarTooltip>Home</SidebarTooltip>}
                placement="right"
              >
                <SidebarMenuButton>
                  <SidebarIcon>
                    <HomeRounded />
                  </SidebarIcon>
                  <SidebarText>Home</SidebarText>
                </SidebarMenuButton>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip
                title={<SidebarTooltip>Search</SidebarTooltip>}
                placement="right"
              >
                <SidebarMenuButton>
                  <SidebarIcon>
                    <SearchRounded />
                  </SidebarIcon>
                  <SidebarText>Search</SidebarText>
                </SidebarMenuButton>
              </Tooltip>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Tooltip
                title={<SidebarTooltip>Settings</SidebarTooltip>}
                placement="right"
              >
                <SidebarMenuButton>
                  <SidebarIcon>
                    <SettingsRounded />
                  </SidebarIcon>
                  <SidebarText>Settings</SidebarText>
                </SidebarMenuButton>
              </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContainer>
    </div>
  );
}
