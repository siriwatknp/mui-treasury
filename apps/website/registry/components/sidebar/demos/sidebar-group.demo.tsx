'use client';

import AddRounded from '@mui/icons-material/AddRounded';
import BarChartRounded from '@mui/icons-material/BarChartRounded';
import HomeRounded from '@mui/icons-material/HomeRounded';
import PeopleRounded from '@mui/icons-material/PeopleRounded';
import SettingsRounded from '@mui/icons-material/SettingsRounded';

import { SidebarContainer } from '@/registry/components/sidebar/sidebar-container';
import { SidebarGroup } from '@/registry/components/sidebar/sidebar-group';
import { SidebarGroupLabel } from '@/registry/components/sidebar/sidebar-group-label';
import { SidebarIcon } from '@/registry/components/sidebar/sidebar-icon';
import { SidebarMenuAction } from '@/registry/components/sidebar/sidebar-menu-action';
import { SidebarMenuButton } from '@/registry/components/sidebar/sidebar-menu-button';
import { SidebarMenuItem } from '@/registry/components/sidebar/sidebar-menu-item';
import { SidebarMenuList } from '@/registry/components/sidebar/sidebar-menu-list';
import { SidebarText } from '@/registry/components/sidebar/sidebar-text';

export const meta = {
  title: 'Group',
  description:
    'Organize menu items into labeled sections with optional actions.',
};

export function Demo() {
  return (
    <div style={{ width: 240 }}>
      <SidebarContainer>
        <SidebarGroup>
          <SidebarGroupLabel>
            Main
            <SidebarMenuAction>
              <AddRounded />
            </SidebarMenuAction>
          </SidebarGroupLabel>
          <SidebarMenuList>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <HomeRounded />
                </SidebarIcon>
                <SidebarText>Home</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <PeopleRounded />
                </SidebarIcon>
                <SidebarText>Users</SidebarText>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenuList>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>
            Analytics{' '}
            <SidebarMenuAction>
              <AddRounded />
            </SidebarMenuAction>
          </SidebarGroupLabel>
          <SidebarMenuList>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SidebarIcon>
                  <BarChartRounded />
                </SidebarIcon>
                <SidebarText>Reports</SidebarText>
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
          </SidebarMenuList>
        </SidebarGroup>
      </SidebarContainer>
    </div>
  );
}
