import { ComponentType } from 'react';
import { SharedSidebarProps } from './internal/SharedSidebar';

export interface SecondarySidebarProps extends Omit<SharedSidebarProps, 'useSidebarConfig'> {
}

declare const SecondarySidebar: ComponentType<SecondarySidebarProps>;

export default SecondarySidebar;
