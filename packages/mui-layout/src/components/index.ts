import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Button, { ButtonProps } from '@material-ui/core/Button';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from '@material-ui/core/SwipeableDrawer';
import { generateStyledProxyCreator } from './Shared/StyledProxy';
import { createHeader } from './Header';
import { createContent } from './Content';
import { createCollapseBtn } from './CTA/CollapseBtn';
import { createSidebarTrigger } from './CTA/SidebarTrigger';
import { createDrawerSidebar } from './DrawerSidebar';
import { CLS } from './Shared/SharedSidebar';
import { createFooter } from './Footer';
import { createInsetAvoidingView } from './InsetAvoidingView';
import { createInsetFooter } from './InsetFooter';
import { createInsetSidebar } from './InsetSidebar';
import { createSwipeableSidebar } from './SwipeableSidebar';

export { default as Root } from './Root';
export { default as InsetContainer } from './InsetContainer';
export { default as Fullscreen } from './Fullscreen';
export { default as SidebarContent } from './SidebarContent';

/**
 * export as getter function for tree shakeable
 * @param styled
 */
export const getHeader = (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledAppBar = styledProxy<AppBarProps>(AppBar);
  return createHeader(StyledAppBar);
};

export const getContent = (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');
  const Main = styledProxy('main');
  return createContent(Main, Div);
};

export const getCollapseBtn = (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledButton = styledProxy<ButtonProps>(Button);
  return createCollapseBtn(StyledButton);
};

export const getSidebarTrigger = (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledIconBtn = styledProxy<IconButtonProps>(IconButton);
  return createSidebarTrigger(StyledIconBtn);
}

export const getDrawerSidebar = (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');
  const StyledDrawer = styledProxy<DrawerProps>(Drawer, CLS);
  return createDrawerSidebar(StyledDrawer, Div);
};

export const getFooter = (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledFooter = styledProxy('footer');
  return createFooter(StyledFooter);
};

export const getInsetAvoidingView = (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');
  return createInsetAvoidingView(Div);
};

export const getInsetFooter = (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');
  const StyledFooter = styledProxy('footer');
  return createInsetFooter(Div, StyledFooter);
};

export const getInsetSidebar = (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');
  return createInsetSidebar(Div);
};

export const getSwipeableSidebar = (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledSwipeableDrawer = styledProxy<SwipeableDrawerProps>(
    SwipeableDrawer,
    CLS
  );
  const Div = styledProxy('div');
  return createSwipeableSidebar(StyledSwipeableDrawer, Div);
};
/**
 *  --------------------------------------------------------------
 */