"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SidebarContainer from "../sidebar-container/sidebar-container";
import SidebarGroup from "../sidebar-group/sidebar-group";
import SidebarMenu from "../sidebar-menu/sidebar-menu";
import SidebarMenuItem from "../sidebar-menu-item/sidebar-menu-item";
import SidebarMenuButton from "../sidebar-menu-button/sidebar-menu-button";
import SidebarIcon from "../sidebar-icon/sidebar-icon";
import SidebarText from "../sidebar-text/sidebar-text";
import CollapsibleTrigger from "../collapsible-trigger/collapsible-trigger";
import CollapsibleContent from "../collapsible-content/collapsible-content";
import CollapsibleIcon from "./collapsible-icon";
import FolderRounded from "@mui/icons-material/FolderRounded";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import AddRounded from "@mui/icons-material/AddRounded";

export default function CollapsibleIconDemo() {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          rotate 180deg (default)
        </Typography>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarMenu>
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
                    <SidebarMenu nested>
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
                    </SidebarMenu>
                  </div>
                </CollapsibleContent>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContainer>
      </div>
      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          rotate 45deg
        </Typography>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarMenu>
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
                    <SidebarMenu nested>
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
                    </SidebarMenu>
                  </div>
                </CollapsibleContent>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContainer>
      </div>
    </Box>
  );
}
