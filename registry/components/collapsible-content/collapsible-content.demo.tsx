"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SidebarContainer from "../sidebar-container/SidebarContainer";
import SidebarGroup from "../sidebar-group/SidebarGroup";
import SidebarMenu from "../sidebar-menu/SidebarMenu";
import SidebarMenuItem from "../sidebar-menu-item/SidebarMenuItem";
import SidebarMenuButton from "../sidebar-menu-button/SidebarMenuButton";
import SidebarMenuAction from "../sidebar-menu-action/SidebarMenuAction";
import SidebarIcon from "../sidebar-icon/SidebarIcon";
import SidebarText from "../sidebar-text/SidebarText";
import CollapsibleTrigger from "../collapsible-trigger/CollapsibleTrigger";
import CollapsibleContent from "./CollapsibleContent";
import CollapsibleIcon from "../collapsible-icon/CollapsibleIcon";
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
