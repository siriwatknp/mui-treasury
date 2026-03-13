"use client";

import { SidebarContainer } from "../sidebar-container";
import { SidebarGroup } from "../sidebar-group";
import { SidebarMenuList } from "../sidebar-menu-list";
import { SidebarMenuItem } from "../sidebar-menu-item";
import { SidebarMenuButton } from "../sidebar-menu-button";
import { SidebarIcon } from "../sidebar-icon";
import { SidebarText } from "../sidebar-text";
import { SidebarGroupText } from "../sidebar-group-text";
import InboxRounded from "@mui/icons-material/InboxRounded";
import PersonRounded from "@mui/icons-material/PersonRounded";

export function Demo() {
  return (
    <div style={{ width: 240 }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarMenuList>
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
          </SidebarMenuList>
        </SidebarGroup>
      </SidebarContainer>
    </div>
  );
}
