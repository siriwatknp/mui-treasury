import { DrawerProps } from '@material-ui/core/Drawer';
import { ComponentType, HTMLAttributes, ReactNode } from 'react';
import useSidebarConfig from '../../hooks/useSidebarConfig';

export interface SharedSidebarProps extends HTMLAttributes<HTMLDivElement> {
  PaperProps?: DrawerProps['PaperProps'];
  SlideProps?: DrawerProps['SlideProps'];
  ModalProps?: DrawerProps['ModalProps'];
  useSidebarConfig: typeof useSidebarConfig;
  BodyProps?: HTMLAttributes<HTMLDivElement>;
  children: (ReactNode | ((ctx: ReturnType<typeof useSidebarConfig>) => ReactNode));
}

declare const SharedSidebar: ComponentType<SharedSidebarProps>;

export default SharedSidebar;

