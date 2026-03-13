"use client";

import { SidebarContainer } from "../sidebar-container";
import { SidebarGroup } from "../sidebar-group";
import { SidebarMenuList } from "../sidebar-menu-list";
import { SidebarMenuItem } from "../sidebar-menu-item";
import { SidebarMenuButton } from "../sidebar-menu-button";
import { SidebarMenuAction } from "../sidebar-menu-action";
import { SidebarIcon } from "../sidebar-icon";
import { SidebarText } from "../sidebar-text";
import InboxRounded from "@mui/icons-material/InboxRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";
import MoreHorizRounded from "@mui/icons-material/MoreHorizRounded";

export function Demo() {
  return (
    <div style={{ width: 240 }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarMenuList>
            <SidebarMenuItem>
              <SidebarMenuButton active>
                <SidebarIcon>
                  <InboxRounded />
                </SidebarIcon>
                <SidebarText>Inbox</SidebarText>
              </SidebarMenuButton>
              <SidebarMenuAction>
                <MoreHorizRounded />
              </SidebarMenuAction>
            </SidebarMenuItem>
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
          </SidebarMenuList>
        </SidebarGroup>
      </SidebarContainer>
    </div>
  );
}
