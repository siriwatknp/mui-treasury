"use client";

import Box from "@mui/material/Box";
import SidebarContainer from "../sidebar-container/SidebarContainer";
import SidebarGroup from "../sidebar-group/SidebarGroup";
import SidebarMenu from "../sidebar-menu/SidebarMenu";
import SidebarMenuItem from "../sidebar-menu-item/SidebarMenuItem";
import SidebarMenuButton from "../sidebar-menu-button/SidebarMenuButton";
import SidebarIcon from "../sidebar-icon/SidebarIcon";
import SidebarText from "../sidebar-text/SidebarText";
import SidebarRail from "./SidebarRail";
import HomeRounded from "@mui/icons-material/HomeRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";

export default function SidebarRailDemo() {
  return (
    <Box
      sx={{
        width: 240,
        position: "relative",
        border: 1,
        borderColor: "divider",
        borderRadius: 1,
      }}
    >
      <SidebarContainer>
        <SidebarGroup>
          <SidebarMenu>
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
                  <SearchRounded />
                </SidebarIcon>
                <SidebarText>Search</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContainer>
      <SidebarRail />
    </Box>
  );
}
