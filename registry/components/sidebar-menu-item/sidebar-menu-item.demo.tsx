"use client";

import SidebarContainer from "../sidebar-container/SidebarContainer";
import SidebarGroup from "../sidebar-group/SidebarGroup";
import SidebarMenu from "../sidebar-menu/SidebarMenu";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarMenuButton from "../sidebar-menu-button/SidebarMenuButton";
import SidebarMenuAction from "../sidebar-menu-action/SidebarMenuAction";
import SidebarIcon from "../sidebar-icon/SidebarIcon";
import SidebarText from "../sidebar-text/SidebarText";
import InboxRounded from "@mui/icons-material/InboxRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";
import MoreHorizRounded from "@mui/icons-material/MoreHorizRounded";

export default function SidebarMenuItemDemo() {
  return (
    <div style={{ width: 240 }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarMenu>
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
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContainer>
    </div>
  );
}
