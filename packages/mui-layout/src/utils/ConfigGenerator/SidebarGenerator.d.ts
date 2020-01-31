import { DrawerProps } from '@material-ui/core/Drawer';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { CSSProperties } from 'react';
import { ConfigSetter } from '../createSet';

export interface SidebarConfig {
  anchor: DrawerProps['anchor'];
  variant: DrawerProps['variant'];
  width: number;
  collapsible: boolean;
  collapsedWidth: number;
  hidden: boolean;
  inset: boolean;
  insetProps: {
    position: CSSProperties['position'];
    top: number;
    drawerAnchor: DrawerProps['anchor'];
    hiddenBreakpoint?: Breakpoint;
  },
}

export interface Sidebar {
  get: () => SidebarConfig;
  initSecondary(): this;
  setAnchor: ConfigSetter<SidebarConfig, 'anchor', this>;
  setWidth: ConfigSetter<SidebarConfig, 'width', this>;
  setVariant: ConfigSetter<SidebarConfig, 'variant', this>;
  setCollapsible: ConfigSetter<SidebarConfig, 'collapsible', this>;
  setCollapsedWidth: ConfigSetter<SidebarConfig, 'collapsedWidth', this>;
  setHidden: ConfigSetter<SidebarConfig, 'hidden', this>;
  setInset: ConfigSetter<SidebarConfig, 'inset', this>;
  setInsetProps: ConfigSetter<SidebarConfig, 'insetProps', this>;
  set(value: SidebarConfig): this;
}

declare const SidebarGenerator: () => Sidebar;

export default SidebarGenerator;
