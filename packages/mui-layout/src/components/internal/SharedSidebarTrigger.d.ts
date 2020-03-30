
import { IconButtonProps } from '@material-ui/core/IconButton';
import { ComponentType } from 'react';
import useSidebarConfig from '../../hooks/useSidebarConfig';

export interface SharedSidebarTriggerProps extends IconButtonProps {
  useSidebarConfig: typeof useSidebarConfig;
}

declare const SharedSidebarTrigger: ComponentType<SharedSidebarTriggerProps>;

export default SharedSidebarTrigger;

