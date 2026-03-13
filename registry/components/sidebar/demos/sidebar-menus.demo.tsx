"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HomeRounded from "@mui/icons-material/HomeRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import InboxRounded from "@mui/icons-material/InboxRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import MoreHorizRounded from "@mui/icons-material/MoreHorizRounded";
import AddRounded from "@mui/icons-material/AddRounded";

import { SidebarContainer } from "@/registry/components/sidebar/sidebar-container";
import { SidebarGroup } from "@/registry/components/sidebar/sidebar-group";
import { SidebarMenuList } from "@/registry/components/sidebar/sidebar-menu-list";
import { SidebarMenuItem } from "@/registry/components/sidebar/sidebar-menu-item";
import { SidebarMenuButton } from "@/registry/components/sidebar/sidebar-menu-button";
import { SidebarMenuAction } from "@/registry/components/sidebar/sidebar-menu-action";
import { SidebarIcon } from "@/registry/components/sidebar/sidebar-icon";
import { SidebarText } from "@/registry/components/sidebar/sidebar-text";
import { SidebarGroupText } from "@/registry/components/sidebar/sidebar-group-text";

export const meta = {
  title: "Menus",
  description: "Flat, nested, and action menu patterns with active states.",
};

export function Demo() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          Menu button
        </Typography>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarMenuList>
              <SidebarMenuItem>
                <SidebarMenuButton active>
                  <SidebarIcon>
                    <HomeRounded />
                  </SidebarIcon>
                  <SidebarText>Home (active)</SidebarText>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <SearchRounded />
                  </SidebarIcon>
                  <SidebarGroupText>
                    <div>
                      <SidebarText>Search</SidebarText>
                      <SidebarText>Find your content</SidebarText>
                    </div>
                  </SidebarGroupText>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <BarChartRounded />
                  </SidebarIcon>
                  <SidebarText>Analytics</SidebarText>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <SettingsRounded />
                  </SidebarIcon>
                  <SidebarText>Settings</SidebarText>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenuList>
          </SidebarGroup>
        </SidebarContainer>
      </div>

      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          Menu item with action
        </Typography>
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

      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          Hover appear action
        </Typography>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarMenuList>
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
            </SidebarMenuList>
          </SidebarGroup>
        </SidebarContainer>
      </div>

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
