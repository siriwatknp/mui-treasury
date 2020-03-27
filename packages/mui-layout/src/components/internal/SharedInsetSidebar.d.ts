import { DrawerProps } from '@material-ui/core/Drawer';
import { ComponentType, HTMLAttributes } from 'react';
import useSidebarConfig from '../../hooks/useSidebarConfig';

export interface SharedInsetSidebarProps extends HTMLAttributes<HTMLDivElement> {
  useSidebarConfig: typeof useSidebarConfig;
  BodyProps?: HTMLAttributes<HTMLDivElement>;
  PaperProps?: DrawerProps['PaperProps'];
  ModalProps?: DrawerProps['ModalProps'];
}

declare const SharedInsetSidebar: ComponentType<SharedInsetSidebarProps>;

export default SharedInsetSidebar;
