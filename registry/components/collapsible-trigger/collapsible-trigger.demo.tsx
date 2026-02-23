"use client";

import SidebarContainer from "../sidebar-container/SidebarContainer";
import SidebarGroup from "../sidebar-group/SidebarGroup";
import SidebarMenu from "../sidebar-menu/SidebarMenu";
import SidebarMenuItem from "../sidebar-menu-item/SidebarMenuItem";
import SidebarMenuButton from "../sidebar-menu-button/SidebarMenuButton";
import SidebarIcon from "../sidebar-icon/SidebarIcon";
import SidebarText from "../sidebar-text/SidebarText";
import CollapsibleTrigger from "./CollapsibleTrigger";
import CollapsibleContent from "../collapsible-content/CollapsibleContent";
import CollapsibleIcon from "../collapsible-icon/CollapsibleIcon";
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
              <CollapsibleTrigger defaultChecked component={SidebarMenuButton}>
                <SidebarIcon>
                  <FolderRounded />
                </SidebarIcon>
                <SidebarText>Projects</SidebarText>
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
              <CollapsibleTrigger component={SidebarMenuButton}>
                <SidebarIcon>
                  <FolderRounded />
                </SidebarIcon>
                <SidebarText>Archive</SidebarText>
                <CollapsibleIcon>
                  <ExpandMoreRounded />
                </CollapsibleIcon>
              </CollapsibleTrigger>
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
