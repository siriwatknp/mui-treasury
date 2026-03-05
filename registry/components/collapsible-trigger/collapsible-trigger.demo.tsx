"use client";

import SidebarContainer from "../sidebar-container/sidebar-container";
import SidebarGroup from "../sidebar-group/sidebar-group";
import SidebarMenu from "../sidebar-menu/sidebar-menu";
import SidebarMenuItem from "../sidebar-menu-item/sidebar-menu-item";
import SidebarMenuButton from "../sidebar-menu-button/sidebar-menu-button";
import SidebarIcon from "../sidebar-icon/sidebar-icon";
import SidebarText from "../sidebar-text/sidebar-text";
import CollapsibleTrigger from "./collapsible-trigger";
import CollapsibleContent from "../collapsible-content/collapsible-content";
import CollapsibleIcon from "../collapsible-icon/collapsible-icon";
import FolderRounded from "@mui/icons-material/FolderRounded";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";

export default function CollapsibleTriggerDemo() {
  return (
    <div style={{ width: 240 }}>
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
                    <SidebarText>Projects</SidebarText>
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
                        <SidebarIcon>
                          <DescriptionRounded />
                        </SidebarIcon>
                        <SidebarText>Website</SidebarText>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <SidebarIcon>
                          <DescriptionRounded />
                        </SidebarIcon>
                        <SidebarText>Mobile App</SidebarText>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </div>
              </CollapsibleContent>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <CollapsibleTrigger
                render={
                  <SidebarMenuButton>
                    <SidebarIcon>
                      <FolderRounded />
                    </SidebarIcon>
                    <SidebarText>Archive</SidebarText>
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
                        <SidebarText>Old Projects</SidebarText>
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
  );
}
