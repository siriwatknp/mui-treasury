import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { ComponentType } from 'react';
import useSidebarConfig from '../../hooks/useSidebarConfig';

export interface SharedSidebarTriggerIconProps extends SvgIconProps {
  useSidebarConfig: typeof useSidebarConfig;
}

declare const SharedSidebarTriggerIcon: ComponentType<SharedSidebarTriggerIconProps>;

export default SharedSidebarTriggerIcon;

