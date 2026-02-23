"use client";

import SidebarContainer from "../sidebar-container/sidebar-container";
import SidebarGroup from "../sidebar-group/sidebar-group";
import SidebarMenu from "../sidebar-menu/sidebar-menu";
import SidebarMenuItem from "../sidebar-menu-item/sidebar-menu-item";
import SidebarMenuButton from "../sidebar-menu-button/sidebar-menu-button";
import SidebarIcon from "../sidebar-icon/sidebar-icon";
import SidebarText from "./sidebar-text";
import StarRounded from "@mui/icons-material/StarRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";

export default function SidebarTextDemo() {
  return (
    <div style={{ width: 200 }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarMenu>
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
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContainer>
    </div>
  );
}
