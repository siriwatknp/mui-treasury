import { ComponentType } from 'react';
import { SharedInsetSidebarProps } from './internal/SharedInsetSidebar';

export interface InsetSidebarProps extends Omit<SharedInsetSidebarProps, 'useSidebarConfig'> {
}

declare const InsetSidebar: ComponentType<InsetSidebarProps>;

export default InsetSidebar;
