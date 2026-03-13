"use client";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import FolderRounded from "@mui/icons-material/FolderRounded";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import {
  SidebarContainer,
  SidebarMenuList,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarIcon,
  SidebarText,
} from "..";
import {
  PopupMenuList,
  PopupMenuItem,
  PopupMenuLink,
  PopupMenuContent,
} from "../popup-menu";

export const meta = {
  title: "Popup Menu",
  description: "Menu items that open a popup submenu on hover or click.",
};

export function Demo() {
  return (
    <div style={{ width: 36 }}>
      <SidebarContainer>
        <PopupMenuList>
          {/* 1 nested level */}
          <PopupMenuItem
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
            <PopupMenuContent>
              <SidebarMenuList>
                <SidebarMenuItem>
                  <PopupMenuLink href="#">Design System</PopupMenuLink>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <PopupMenuLink href="#">Landing Page</PopupMenuLink>
                </SidebarMenuItem>
              </SidebarMenuList>
            </PopupMenuContent>
          </PopupMenuItem>

          {/* 2 nested levels */}
          <PopupMenuItem
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
            <PopupMenuContent>
              <SidebarMenuList>
                <PopupMenuList>
                  <PopupMenuItem
                    render={
                      <SidebarMenuButton>
                        <SidebarText>Reports</SidebarText>
                        <SidebarIcon>
                          <ChevronRightRounded />
                        </SidebarIcon>
                      </SidebarMenuButton>
                    }
                  >
                    <PopupMenuContent>
                      <SidebarMenuList>
                        <SidebarMenuItem>
                          <PopupMenuLink href="#">Overview</PopupMenuLink>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <PopupMenuLink href="#">Details</PopupMenuLink>
                        </SidebarMenuItem>
                      </SidebarMenuList>
                    </PopupMenuContent>
                  </PopupMenuItem>
                </PopupMenuList>
                <SidebarMenuItem>
                  <PopupMenuLink href="#">Dashboard</PopupMenuLink>
                </SidebarMenuItem>
              </SidebarMenuList>
            </PopupMenuContent>
          </PopupMenuItem>
        </PopupMenuList>
      </SidebarContainer>
    </div>
  );
}
