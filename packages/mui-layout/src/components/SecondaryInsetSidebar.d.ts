import { ComponentType } from 'react';
import { SharedInsetSidebarProps } from './internal/SharedInsetSidebar';

export interface SecondaryInsetSidebarProps extends Omit<SharedInsetSidebarProps, 'useSidebarConfig'> {
}

declare const SecondaryInsetSidebar: ComponentType<SecondaryInsetSidebarProps>;

export default SecondaryInsetSidebar;
