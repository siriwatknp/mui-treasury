"use client";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import SidebarContainer from "../sidebar-container/sidebar-container";
import SidebarMenu from "../sidebar-menu/sidebar-menu";
import SidebarMenuItem from "../sidebar-menu-item/sidebar-menu-item";
import SidebarMenuButton from "../sidebar-menu-button/sidebar-menu-button";
import SidebarIcon from "../sidebar-icon/sidebar-icon";
import SidebarText from "../sidebar-text/sidebar-text";
import {
  CollapsedSidebarMenuRoot,
  CollapsedSidebarMenuItem,
  CollapsedSidebarMenuLink,
  CollapsedSidebarPopupContent,
} from "./collapsed-sidebar-menu";

export default function CollapsedSidebarMenuDemo() {
  return (
    <div style={{ width: 36 }}>
      <SidebarContainer>
        <CollapsedSidebarMenuRoot>
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
              <SidebarMenu>
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
              </SidebarMenu>
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
              <SidebarMenu>
                <CollapsedSidebarMenuRoot>
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
                      <SidebarMenu>
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
                      </SidebarMenu>
                    </CollapsedSidebarPopupContent>
                  </CollapsedSidebarMenuItem>
                </CollapsedSidebarMenuRoot>
                <SidebarMenuItem>
                  <CollapsedSidebarMenuLink href="#">
                    Dashboard
                  </CollapsedSidebarMenuLink>
                </SidebarMenuItem>
              </SidebarMenu>
            </CollapsedSidebarPopupContent>
          </CollapsedSidebarMenuItem>
        </CollapsedSidebarMenuRoot>
      </SidebarContainer>
    </div>
  );
}
