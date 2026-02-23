"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SidebarContainer from "../sidebar-container/SidebarContainer";
import SidebarGroup from "../sidebar-group/SidebarGroup";
import SidebarMenu from "../sidebar-menu/SidebarMenu";
import SidebarMenuItem from "../sidebar-menu-item/SidebarMenuItem";
import SidebarMenuButton from "../sidebar-menu-button/SidebarMenuButton";
import SidebarMenuAction from "./SidebarMenuAction";
import SidebarIcon from "../sidebar-icon/SidebarIcon";
import SidebarText from "../sidebar-text/SidebarText";
import FolderRounded from "@mui/icons-material/FolderRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import MoreHorizRounded from "@mui/icons-material/MoreHorizRounded";
import AddRounded from "@mui/icons-material/AddRounded";

export default function SidebarMenuActionDemo() {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          Always visible
        </Typography>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarMenu>
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
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContainer>
      </div>
      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          Hover appear
        </Typography>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarMenu>
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
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContainer>
      </div>
    </Box>
  );
}
