"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SidebarContainer from "../sidebar-container/SidebarContainer";
import SidebarGroup from "../sidebar-group/SidebarGroup";
import SidebarMenu from "../sidebar-menu/SidebarMenu";
import SidebarMenuItem from "../sidebar-menu-item/SidebarMenuItem";
import SidebarMenuButton from "../sidebar-menu-button/SidebarMenuButton";
import SidebarIcon from "../sidebar-icon/SidebarIcon";
import SidebarText from "../sidebar-text/SidebarText";
import CollapsibleTrigger from "../collapsible-trigger/CollapsibleTrigger";
import CollapsibleContent from "../collapsible-content/CollapsibleContent";
import CollapsibleIcon from "./CollapsibleIcon";
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
                  component={SidebarMenuButton}
                >
                  <SidebarIcon>
                    <FolderRounded />
                  </SidebarIcon>
                  <SidebarText>Documents</SidebarText>
                  <CollapsibleIcon>
                    <ExpandMoreRounded />
                  </CollapsibleIcon>
                </CollapsibleTrigger>
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
                  component={SidebarMenuButton}
                >
                  <SidebarIcon>
                    <FolderRounded />
                  </SidebarIcon>
                  <SidebarText>Workspace</SidebarText>
                  <CollapsibleIcon rotate="45deg">
                    <AddRounded />
                  </CollapsibleIcon>
                </CollapsibleTrigger>
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
