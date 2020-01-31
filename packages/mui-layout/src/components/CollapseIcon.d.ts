import { ComponentType } from 'react';
import { SharedCollapseIconProps } from './internal/SharedCollapseIcon';

export interface CollapseIconProps extends Omit<SharedCollapseIconProps, 'useSidebarConfig'> {
}

declare const CollapseIcon: ComponentType<CollapseIconProps>;

export default CollapseIcon;
