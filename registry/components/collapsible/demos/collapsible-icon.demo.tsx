"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SidebarContainer } from "../../sidebar-container/sidebar-container";
import { SidebarGroup } from "../../sidebar-group/sidebar-group";
import { SidebarMenuList } from "../../sidebar-menu/sidebar-menu-list";
import { SidebarMenuItem } from "../../sidebar-menu-item/sidebar-menu-item";
import { SidebarMenuButton } from "../../sidebar-menu-button/sidebar-menu-button";
import { SidebarIcon } from "../../sidebar-icon/sidebar-icon";
import { SidebarText } from "../../sidebar-text/sidebar-text";
import { CollapsibleTrigger } from "../collapsible-trigger";
import { CollapsibleContent } from "../collapsible-content";
import { CollapsibleIcon } from "../collapsible-icon";
import FolderRounded from "@mui/icons-material/FolderRounded";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import AddRounded from "@mui/icons-material/AddRounded";

export function Demo() {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          rotate 180deg (default)
        </Typography>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarMenuList>
              <SidebarMenuItem>
                <CollapsibleTrigger
                  defaultChecked
                  render={
                    <SidebarMenuButton>
                      <SidebarIcon>
                        <FolderRounded />
                      </SidebarIcon>
                      <SidebarText>Documents</SidebarText>
                      <CollapsibleIcon>
                        <ExpandMoreRounded />
                      </CollapsibleIcon>
                    </SidebarMenuButton>
                  }
                />
                <CollapsibleContent>
                  <div>
                    <SidebarMenuList nested>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SidebarText>File A</SidebarText>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SidebarText>File B</SidebarText>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenuList>
                  </div>
                </CollapsibleContent>
              </SidebarMenuItem>
            </SidebarMenuList>
          </SidebarGroup>
        </SidebarContainer>
      </div>
      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          rotate 45deg
        </Typography>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarMenuList>
              <SidebarMenuItem>
                <CollapsibleTrigger
                  defaultChecked
                  render={
                    <SidebarMenuButton>
                      <SidebarIcon>
                        <FolderRounded />
                      </SidebarIcon>
                      <SidebarText>Workspace</SidebarText>
                      <CollapsibleIcon rotate="45deg">
                        <AddRounded />
                      </CollapsibleIcon>
                    </SidebarMenuButton>
                  }
                />
                <CollapsibleContent>
                  <div>
                    <SidebarMenuList nested>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SidebarText>Project X</SidebarText>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SidebarText>Project Y</SidebarText>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenuList>
                  </div>
                </CollapsibleContent>
              </SidebarMenuItem>
            </SidebarMenuList>
          </SidebarGroup>
        </SidebarContainer>
      </div>
    </Box>
  );
}
