import styled from 'styled-components';

import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Button, { ButtonProps } from '@material-ui/core/Button';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from '@material-ui/core/SwipeableDrawer';

import { generateStyledProxyCreator } from '../components/Shared/StyledProxy';
import { createHeader } from '../components/Header';
import { createContent } from '../components/Content';
import { createCollapseBtn } from '../components/CTA/CollapseBtn';
import { createSidebarTrigger } from '../components/CTA/SidebarTrigger';
import { createDrawerSidebar } from '../components/DrawerSidebar';
import { CLS } from '../components/Shared/SharedSidebar';
import { createFooter } from '../components/Footer';
import { createInsetAvoidingView } from '../components/InsetAvoidingView';
import { createInsetFooter } from '../components/InsetFooter';
import { createInsetSidebar } from '../components/InsetSidebar';
import { createSwipeableSidebar } from '../components/SwipeableSidebar';

export { default as Root } from '../components/Root';
export { default as InsetContainer } from '../components/InsetContainer';
export { default as Fullscreen } from '../components/Fullscreen';
export { default as SidebarContent } from '../components/SidebarContent';

const styledProxy = generateStyledProxyCreator(styled);

const Div = styledProxy('div');
const Main = styledProxy('main');
const StyledFooter = styledProxy('footer');
const StyledAppBar = styledProxy<AppBarProps>(AppBar);
const StyledButton = styledProxy<ButtonProps>(Button);
const StyledIconBtn = styledProxy<IconButtonProps>(IconButton);
const StyledDrawer = styledProxy<DrawerProps>(Drawer, CLS);
const StyledSwipeableDrawer = styledProxy<SwipeableDrawerProps>(
  SwipeableDrawer,
  CLS
);

export const Header = createHeader(StyledAppBar);
export const Content = createContent(Main, Div);
export const CollapseBtn = createCollapseBtn(StyledButton);
export const SidebarTrigger = createSidebarTrigger(StyledIconBtn);
export const DrawerSidebar = createDrawerSidebar(StyledDrawer, Div);
export const Footer = createFooter(StyledFooter);
export const InsetAvoidingView = createInsetAvoidingView(Div);
export const InsetFooter = createInsetFooter(Div, StyledFooter);
export const InsetSidebar = createInsetSidebar(Div);
export const SwipeableSidebar = createSwipeableSidebar(StyledSwipeableDrawer, Div);
