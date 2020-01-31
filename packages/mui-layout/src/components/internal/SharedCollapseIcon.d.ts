import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { ComponentType } from 'react';
import useSidebarConfig from '../../hooks/useSidebarConfig';

export interface SharedCollapseIconProps extends SvgIconProps {
  useSidebarConfig: typeof useSidebarConfig;
}

declare const SharedCollapseIcon: ComponentType<SharedCollapseIconProps>;

export default SharedCollapseIcon;
