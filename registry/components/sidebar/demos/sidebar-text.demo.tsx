"use client";

import { SidebarContainer } from "../sidebar-container";
import { SidebarGroup } from "../sidebar-group";
import { SidebarMenuList } from "../sidebar-menu-list";
import { SidebarMenuItem } from "../sidebar-menu-item";
import { SidebarMenuButton } from "../sidebar-menu-button";
import { SidebarIcon } from "../sidebar-icon";
import { SidebarText } from "../sidebar-text";
import StarRounded from "@mui/icons-material/StarRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";

export function Demo() {
  return (
    <div style={{ width: 200 }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarMenuList>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <StarRounded />
                </SidebarIcon>
                <SidebarText>Short label</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <FolderRounded />
                </SidebarIcon>
                <SidebarText>
                  This is a long label that truncates with ellipsis
                </SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenuList>
        </SidebarGroup>
      </SidebarContainer>
    </div>
  );
}
