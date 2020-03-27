import { ComponentType } from 'react';
import { SharedSidebarTriggerIconProps } from './internal/SharedSidebarTriggerIcon';

export interface SecondarySidebarTriggerIconProps extends Omit<SharedSidebarTriggerIconProps, 'useSidebarConfig'> {
}

declare const SecondarySidebarTriggerIcon: ComponentType<SecondarySidebarTriggerIconProps>;

export default SecondarySidebarTriggerIcon;
