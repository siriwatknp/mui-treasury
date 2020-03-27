import { ComponentType } from 'react';
import { SharedSidebarTriggerProps } from './internal/SharedSidebarTrigger';

export interface SecondarySidebarTriggerProps extends Omit<SharedSidebarTriggerProps, 'useSidebarConfig'> {
}

declare const SecondarySidebarTrigger: ComponentType<SecondarySidebarTriggerProps>;

export default SecondarySidebarTrigger;
