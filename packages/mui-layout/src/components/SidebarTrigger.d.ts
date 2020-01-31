import { ComponentType } from 'react';
import { SharedSidebarTriggerProps } from './internal/SharedSidebarTrigger';

export interface SidebarTriggerProps extends Omit<SharedSidebarTriggerProps, 'useSidebarConfig'> {
}

declare const SidebarTrigger: ComponentType<SidebarTriggerProps>;

export default SidebarTrigger;
