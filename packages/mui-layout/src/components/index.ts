import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Button, { ButtonProps } from '@material-ui/core/Button';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from '@material-ui/core/SwipeableDrawer';
import Root from './Root';
import FullScreen from './FullScreen';
import InsetContainer from './InsetContainer';
import SidebarContent from './SidebarContent';
import { generateStyledProxyCreator } from './Shared/StyledProxy';
import { createHeader } from './Header/Header';
import { createContent } from './Content/Content';
import { createCollapseBtn } from './CTA/CollapseBtn';
import { createSidebarTrigger } from './CTA/SidebarTrigger';
import { createDrawerSidebar } from './DrawerSidebar/DrawerSidebar';
import { CLS } from './Shared/SharedSidebar';
import { createFooter } from './Footer/Footer';
import { createInsetAvoidingView } from './InsetAvoidingView';
import { createInsetFooter } from './InsetFooter/InsetFooter';
import { createInsetHeaderOffset } from './InsetHeaderOffset/InsetHeaderOffset';
import { createInsetSidebar } from './InsetSidebar/InsetSidebar';
import { createSwipeableSidebar } from './SwipeableSidebar/SwipeableSidebar';

export const getLayoutComponents = (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');
  const Header = createHeader(styledProxy<AppBarProps>(AppBar));
  const Content = createContent(styledProxy('main'));
  const CollapseBtn = createCollapseBtn(styledProxy<ButtonProps>(Button));
  const SidebarTrigger = createSidebarTrigger(
    styledProxy<IconButtonProps>(IconButton)
  );
  const DrawerSidebar = createDrawerSidebar(
    styledProxy<DrawerProps>(Drawer, CLS),
    Div
  );
  const Footer = createFooter(styledProxy('footer'));
  const InsetAvoidingView = createInsetAvoidingView(Div);
  const InsetFooter = createInsetFooter(Div);
  const InsetHeaderOffset = createInsetHeaderOffset(Div);
  const InsetSidebar = createInsetSidebar(Div);
  const SwipeableSidebar = createSwipeableSidebar(
    styledProxy<SwipeableDrawerProps>(SwipeableDrawer, CLS),
    Div
  );
  return {
    Header,
    Content,
    CollapseBtn,
    SidebarTrigger,
    DrawerSidebar,
    Footer,
    FullScreen,
    InsetAvoidingView,
    InsetContainer,
    InsetFooter,
    InsetHeaderOffset,
    InsetSidebar,
    Root,
    SidebarContent,
    SwipeableSidebar,
  };
};

export { default as Root } from './Root';
export { default as InsetContainer } from './InsetContainer';
export { default as FullScreen } from './FullScreen';
export { default as SidebarContent } from './SidebarContent';
