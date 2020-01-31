import { ComponentType } from 'react';
import { SharedSidebarTriggerIconProps } from './internal/SharedSidebarTriggerIcon';

export interface SidebarTriggerIconProps extends Omit<SharedSidebarTriggerIconProps, 'useSidebarConfig'> {
}

declare const SidebarTriggerIcon: ComponentType<SidebarTriggerIconProps>;

export default SidebarTriggerIcon;
