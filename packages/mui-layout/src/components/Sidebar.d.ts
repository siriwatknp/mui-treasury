import { ComponentType } from 'react';
import { SharedSidebarProps } from './internal/SharedSidebar';


export interface SidebarProps extends Omit<SharedSidebarProps, 'useSidebarConfig'> {
}

declare const Sidebar: ComponentType<SidebarProps>;

export default Sidebar;
