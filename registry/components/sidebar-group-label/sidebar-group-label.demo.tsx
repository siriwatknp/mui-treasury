"use client";

import SidebarContainer from "../sidebar-container/SidebarContainer";
import SidebarGroup from "../sidebar-group/SidebarGroup";
import SidebarGroupLabel from "./SidebarGroupLabel";
import SidebarMenu from "../sidebar-menu/SidebarMenu";
import SidebarMenuItem from "../sidebar-menu-item/SidebarMenuItem";
import SidebarMenuButton from "../sidebar-menu-button/SidebarMenuButton";
import SidebarIcon from "../sidebar-icon/SidebarIcon";
import SidebarText from "../sidebar-text/SidebarText";
import SidebarMenuAction from "../sidebar-menu-action/SidebarMenuAction";
import HomeRounded from "@mui/icons-material/HomeRounded";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import AddRounded from "@mui/icons-material/AddRounded";

export default function SidebarGroupLabelDemo() {
  return (
    <div style={{ width: 240 }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarGroupLabel>
            Application
            <SidebarMenuAction hoverAppear>
              <AddRounded />
            </SidebarMenuAction>
          </SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <HomeRounded />
                </SidebarIcon>
                <SidebarText>Overview</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <BarChartRounded />
                </SidebarIcon>
                <SidebarText>Reports</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContainer>
    </div>
  );
}
