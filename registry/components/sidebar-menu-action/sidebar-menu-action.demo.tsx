"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SidebarContainer } from "../sidebar-container/sidebar-container";
import { SidebarGroup } from "../sidebar-group/sidebar-group";
import { SidebarMenuList } from "../sidebar-menu/sidebar-menu-list";
import { SidebarMenuItem } from "../sidebar-menu-item/sidebar-menu-item";
import { SidebarMenuButton } from "../sidebar-menu-button/sidebar-menu-button";
import { SidebarMenuAction } from "./sidebar-menu-action";
import { SidebarIcon } from "../sidebar-icon/sidebar-icon";
import { SidebarText } from "../sidebar-text/sidebar-text";
import FolderRounded from "@mui/icons-material/FolderRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import MoreHorizRounded from "@mui/icons-material/MoreHorizRounded";
import AddRounded from "@mui/icons-material/AddRounded";

export function Demo() {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          Always visible
        </Typography>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarMenuList>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <FolderRounded />
                  </SidebarIcon>
                  <SidebarText>Projects</SidebarText>
                </SidebarMenuButton>
                <SidebarMenuAction>
                  <MoreHorizRounded />
                </SidebarMenuAction>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <DescriptionRounded />
                  </SidebarIcon>
                  <SidebarText>Documents</SidebarText>
                </SidebarMenuButton>
                <SidebarMenuAction>
                  <MoreHorizRounded />
                </SidebarMenuAction>
              </SidebarMenuItem>
            </SidebarMenuList>
          </SidebarGroup>
        </SidebarContainer>
      </div>
      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          Hover appear
        </Typography>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarMenuList>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <FolderRounded />
                  </SidebarIcon>
                  <SidebarText>Workspace</SidebarText>
                </SidebarMenuButton>
                <SidebarMenuAction hoverAppear>
                  <AddRounded />
                </SidebarMenuAction>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <DescriptionRounded />
                  </SidebarIcon>
                  <SidebarText>Notes</SidebarText>
                </SidebarMenuButton>
                <SidebarMenuAction hoverAppear>
                  <AddRounded />
                </SidebarMenuAction>
              </SidebarMenuItem>
            </SidebarMenuList>
          </SidebarGroup>
        </SidebarContainer>
      </div>
    </Box>
  );
}
