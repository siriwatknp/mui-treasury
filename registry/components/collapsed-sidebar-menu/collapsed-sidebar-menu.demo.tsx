"use client";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import SidebarContainer from "../sidebar-container/sidebar-container";
import SidebarMenuList from "../sidebar-menu/sidebar-menu-list";
import SidebarMenuItem from "../sidebar-menu-item/sidebar-menu-item";
import SidebarMenuButton from "../sidebar-menu-button/sidebar-menu-button";
import SidebarIcon from "../sidebar-icon/sidebar-icon";
import SidebarText from "../sidebar-text/sidebar-text";
import {
  CollapsedSidebarMenuList,
  CollapsedSidebarMenuItem,
  CollapsedSidebarMenuLink,
  CollapsedSidebarPopupContent,
} from "./collapsed-sidebar-menu";

export default function CollapsedSidebarMenuDemo() {
  return (
    <div style={{ width: 36 }}>
      <SidebarContainer>
        <CollapsedSidebarMenuList>
          {/* 1 nested level */}
          <CollapsedSidebarMenuItem
            tooltip="Projects"
            render={
              <SidebarMenuButton>
                <SidebarIcon shrinkSize="1.25rem">
                  <FolderRounded />
                </SidebarIcon>
                <SidebarText>Projects</SidebarText>
              </SidebarMenuButton>
            }
          >
            <CollapsedSidebarPopupContent>
              <SidebarMenuList>
                <SidebarMenuItem>
                  <CollapsedSidebarMenuLink href="#">
                    Design System
                  </CollapsedSidebarMenuLink>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <CollapsedSidebarMenuLink href="#">
                    Landing Page
                  </CollapsedSidebarMenuLink>
                </SidebarMenuItem>
              </SidebarMenuList>
            </CollapsedSidebarPopupContent>
          </CollapsedSidebarMenuItem>

          {/* 2 nested levels */}
          <CollapsedSidebarMenuItem
            tooltip="Analytics"
            render={
              <SidebarMenuButton>
                <SidebarIcon shrinkSize="1.25rem">
                  <BarChartRounded />
                </SidebarIcon>
                <SidebarText>Analytics</SidebarText>
              </SidebarMenuButton>
            }
          >
            <CollapsedSidebarPopupContent>
              <SidebarMenuList>
                <CollapsedSidebarMenuList>
                  <CollapsedSidebarMenuItem
                    render={
                      <SidebarMenuButton>
                        <SidebarText>Reports</SidebarText>
                        <SidebarIcon>
                          <ChevronRightRounded />
                        </SidebarIcon>
                      </SidebarMenuButton>
                    }
                  >
                    <CollapsedSidebarPopupContent>
                      <SidebarMenuList>
                        <SidebarMenuItem>
                          <CollapsedSidebarMenuLink href="#">
                            Overview
                          </CollapsedSidebarMenuLink>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <CollapsedSidebarMenuLink href="#">
                            Details
                          </CollapsedSidebarMenuLink>
                        </SidebarMenuItem>
                      </SidebarMenuList>
                    </CollapsedSidebarPopupContent>
                  </CollapsedSidebarMenuItem>
                </CollapsedSidebarMenuList>
                <SidebarMenuItem>
                  <CollapsedSidebarMenuLink href="#">
                    Dashboard
                  </CollapsedSidebarMenuLink>
                </SidebarMenuItem>
              </SidebarMenuList>
            </CollapsedSidebarPopupContent>
          </CollapsedSidebarMenuItem>
        </CollapsedSidebarMenuList>
      </SidebarContainer>
    </div>
  );
}
