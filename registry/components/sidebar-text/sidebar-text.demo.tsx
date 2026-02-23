"use client";

import SidebarContainer from "../sidebar-container/SidebarContainer";
import SidebarGroup from "../sidebar-group/SidebarGroup";
import SidebarMenu from "../sidebar-menu/SidebarMenu";
import SidebarMenuItem from "../sidebar-menu-item/SidebarMenuItem";
import SidebarMenuButton from "../sidebar-menu-button/SidebarMenuButton";
import SidebarIcon from "../sidebar-icon/SidebarIcon";
import SidebarText from "./SidebarText";
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
