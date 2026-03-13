"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SidebarContainer from "../sidebar-container/sidebar-container";
import SidebarGroup from "../sidebar-group/sidebar-group";
import SidebarMenu from "../sidebar-menu/sidebar-menu";
import SidebarMenuItem from "../sidebar-menu-item/sidebar-menu-item";
import SidebarMenuButton from "../sidebar-menu-button/sidebar-menu-button";
import SidebarMenuAction from "../sidebar-menu-action/sidebar-menu-action";
import SidebarIcon from "../sidebar-icon/sidebar-icon";
import SidebarText from "../sidebar-text/sidebar-text";
import CollapsibleTrigger from "../collapsible-trigger/collapsible-trigger";
import CollapsibleContent from "./collapsible-content";
import CollapsibleIcon from "../collapsible-icon/collapsible-icon";
import HomeRounded from "@mui/icons-material/HomeRounded";
import PeopleRounded from "@mui/icons-material/PeopleRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import MoreVertRounded from "@mui/icons-material/MoreVertRounded";

export default function CollapsibleContentDemo() {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <div style={{ width: 240 }}>
        <Typography variant="caption" sx={{ px: 1, color: "text.secondary" }}>
          Trigger on button
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
                    <HomeRounded />
                  </SidebarIcon>
                  <SidebarText>Home</SidebarText>
                  <CollapsibleIcon>
                    <ExpandMoreRounded />
                  </CollapsibleIcon>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div>
                    <SidebarMenu nested>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SidebarIcon>
                            <PeopleRounded />
                          </SidebarIcon>
                          <SidebarText>Users</SidebarText>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SidebarIcon>
                            <DescriptionRounded />
                          </SidebarIcon>
                          <SidebarText>Documents</SidebarText>
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
          Trigger on action
        </Typography>
        <SidebarContainer>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SidebarIcon>
                    <HomeRounded />
                  </SidebarIcon>
                  <SidebarText>Home</SidebarText>
                </SidebarMenuButton>
                <CollapsibleTrigger
                  defaultChecked
                  component={SidebarMenuAction}
                >
                  <CollapsibleIcon>
                    <ExpandMoreRounded />
                  </CollapsibleIcon>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div>
                    <SidebarMenu nested>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SidebarIcon>
                            <PeopleRounded />
                          </SidebarIcon>
                          <SidebarText>Users</SidebarText>
                        </SidebarMenuButton>
                        <SidebarMenuAction hoverAppear>
                          <MoreVertRounded />
                        </SidebarMenuAction>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SidebarIcon>
                            <DescriptionRounded />
                          </SidebarIcon>
                          <SidebarText>Documents</SidebarText>
                        </SidebarMenuButton>
                        <SidebarMenuAction hoverAppear>
                          <MoreVertRounded />
                        </SidebarMenuAction>
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
