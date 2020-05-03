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

export const getLayoutComponents = (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);

  // StyledComponent
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

  const Header = createHeader(StyledAppBar);
  const Content = createContent(Main, Div);
  const CollapseBtn = createCollapseBtn(StyledButton);
  const SidebarTrigger = createSidebarTrigger(StyledIconBtn);
  const DrawerSidebar = createDrawerSidebar(StyledDrawer, Div);
  const Footer = createFooter(StyledFooter);
  const InsetAvoidingView = createInsetAvoidingView(Div);
  const InsetFooter = createInsetFooter(Div, StyledFooter);
  const InsetSidebar = createInsetSidebar(Div);
  const SwipeableSidebar = createSwipeableSidebar(StyledSwipeableDrawer, Div);
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
