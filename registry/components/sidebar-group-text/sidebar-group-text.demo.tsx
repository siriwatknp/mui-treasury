"use client";

import SidebarContainer from "../sidebar-container/SidebarContainer";
import SidebarGroup from "../sidebar-group/SidebarGroup";
import SidebarMenu from "../sidebar-menu/SidebarMenu";
import SidebarMenuItem from "../sidebar-menu-item/SidebarMenuItem";
import SidebarMenuButton from "../sidebar-menu-button/SidebarMenuButton";
import SidebarIcon from "../sidebar-icon/SidebarIcon";
import SidebarText from "../sidebar-text/SidebarText";
import SidebarGroupText from "./SidebarGroupText";
import InboxRounded from "@mui/icons-material/InboxRounded";
import PersonRounded from "@mui/icons-material/PersonRounded";

export default function SidebarGroupTextDemo() {
  return (
    <div style={{ width: 240 }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <InboxRounded />
                </SidebarIcon>
                <SidebarGroupText>
                  <div>
                    <SidebarText>Inbox</SidebarText>
                    <SidebarText>12 unread messages</SidebarText>
                  </div>
                </SidebarGroupText>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <PersonRounded />
                </SidebarIcon>
                <SidebarGroupText>
                  <div>
                    <SidebarText>John Doe</SidebarText>
                    <SidebarText>john@example.com</SidebarText>
                  </div>
                </SidebarGroupText>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContainer>
    </div>
  );
}
