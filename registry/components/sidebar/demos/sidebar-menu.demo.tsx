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
import HomeRounded from "@mui/icons-material/HomeRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";

export function Demo() {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          Flat menu
        </Typography>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarMenuList>
              <SidebarMenuItem>
                <SidebarMenuButton active>
                  <SidebarIcon>
                    <HomeRounded />
                  </SidebarIcon>
                  <SidebarText>Home</SidebarText>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <FolderRounded />
                  </SidebarIcon>
                  <SidebarText>Documents</SidebarText>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenuList>
          </SidebarGroup>
        </SidebarContainer>
      </div>
      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          Nested menu
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
                <SidebarGroupText>
                  <div>
                    <SidebarMenuList nested>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SidebarText>Website</SidebarText>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SidebarText>Mobile App</SidebarText>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenuList>
                  </div>
                </SidebarGroupText>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <DescriptionRounded />
                  </SidebarIcon>
                  <SidebarText>Reports</SidebarText>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenuList>
          </SidebarGroup>
        </SidebarContainer>
      </div>
    </Box>
  );
}
