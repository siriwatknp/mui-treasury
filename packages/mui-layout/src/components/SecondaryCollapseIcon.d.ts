import { ComponentType } from 'react';
import { SharedCollapseIconProps } from './internal/SharedCollapseIcon';

export interface SecondaryCollapseIconProps extends Omit<SharedCollapseIconProps, 'useSidebarConfig'> {
}

declare const SecondaryCollapseIcon: ComponentType<SecondaryCollapseIconProps>;

export default SecondaryCollapseIcon;
