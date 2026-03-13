"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SidebarContainer } from "../sidebar-container";
import { SidebarGroup } from "../sidebar-group";
import { SidebarMenuList } from "../sidebar-menu-list";
import { SidebarMenuItem } from "../sidebar-menu-item";
import { SidebarMenuButton } from "../sidebar-menu-button";
import { SidebarIcon } from "../sidebar-icon";
import { SidebarText } from "../sidebar-text";
import { SidebarGroupText } from "../sidebar-group-text";
import StarRounded from "@mui/icons-material/StarRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";
import InboxRounded from "@mui/icons-material/InboxRounded";
import PersonRounded from "@mui/icons-material/PersonRounded";

export const meta = {
  title: "Text",
  description:
    "Primary and secondary text styles for menu items with truncation support.",
};

export function Demo() {
  return (
    <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
      <div>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          SidebarText
        </Typography>
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
      </div>
      <div>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          SidebarGroupText
        </Typography>
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
      </div>
    </Box>
  );
}
