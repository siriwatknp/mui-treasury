import React from 'react';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from '@material-ui/core/SwipeableDrawer';
import { SidebarVariant } from '../../types';
import { upperFirst } from '../../utils';
import createHiddenProxyComponent, { HiddenProxyProps } from './StyledProxy';

export const CLS = 'MuiTreasury-paper';

export const StyledProxyDrawer = createHiddenProxyComponent<DrawerProps>(Drawer, CLS);
export const StyledProxySwipeableDrawer = createHiddenProxyComponent<
  SwipeableDrawerProps
>(SwipeableDrawer, CLS);

export type StyledProxyDrawerProps = DrawerProps & HiddenProxyProps;
export type StyledProxySwipeableDrawerProps = SwipeableDrawerProps &
  HiddenProxyProps;

export const createDrawerVariant = (
  variant: SidebarVariant,
  StyledComponent = StyledProxyDrawer
) => {
  const Sidebar: React.FC<StyledProxyDrawerProps> = ({
    PaperProps = {},
    ...props
  }) => (
    <StyledComponent
      {...props}
      PaperProps={{
        ...PaperProps,
        className: `${CLS} ${PaperProps.className}`,
      }}
      variant={variant}
    />
  );

  Sidebar.displayName = `${upperFirst(variant)}DrawerSidebar`;
  return Sidebar;
};

export const createSwipeableVariant = (
  variant: SidebarVariant,
  StyledComponent = StyledProxySwipeableDrawer
) => {
  const Sidebar: React.FC<StyledProxySwipeableDrawerProps> = ({
    PaperProps = {},
    ...props
  }) => (
    <StyledComponent
      {...props}
      PaperProps={{
        ...PaperProps,
        className: `${CLS} ${PaperProps.className}`,
      }}
      variant={variant}
    />
  );

  Sidebar.displayName = `${upperFirst(variant)}SwipeableSidebar`;
  return Sidebar;
};
