"use client";

import Box from "@mui/material/Box";
import { SidebarContainer } from "../sidebar-container";
import { SidebarGroup } from "../sidebar-group";
import { SidebarMenuList } from "../sidebar-menu-list";
import { SidebarMenuItem } from "../sidebar-menu-item";
import { SidebarMenuButton } from "../sidebar-menu-button";
import { SidebarIcon } from "../sidebar-icon";
import { SidebarText } from "../sidebar-text";
import { SidebarRail } from "../sidebar-rail";
import HomeRounded from "@mui/icons-material/HomeRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";

export function Demo() {
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
                  <SearchRounded />
                </SidebarIcon>
                <SidebarText>Search</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenuList>
        </SidebarGroup>
      </SidebarContainer>
      <SidebarRail />
    </Box>
  );
}
