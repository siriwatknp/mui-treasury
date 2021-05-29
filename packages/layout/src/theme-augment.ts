import { StyleRules } from "@material-ui/core/styles";
import { ContainerClassKey, ContainerProps } from "@material-ui/core/Container";
import {
  HeaderProps,
  HeaderClassKey,
  SubheaderProps,
  SubheaderClassKey,
  TopHeaderProps,
  TopHeaderClassKey,
} from "./Header/Header";
import {
  EdgeSidebarProps,
  EdgeSidebarClassKey,
} from "./EdgeSidebar/EdgeSidebar";
import { ContentProps, ContentClassKey } from "./Content/Content";
import {
  InsetSidebarProps,
  InsetSidebarClassKey,
} from "./InsetSidebar/InsetSidebar";
import { FooterProps, FooterClassKey } from "./Footer/Footer";
import {
  SidebarContentProps,
  SidebarContentClassKey,
} from "./Content/SidebarContent";

declare module "@material-ui/core/styles/components" {
  interface Components {
    AppHeader?: {
      defaultProps?: Partial<HeaderProps>;
      styleOverrides?: Partial<StyleRules<HeaderClassKey>>;
    };
    AppTopHeader?: {
      defaultProps?: Partial<TopHeaderProps>;
      styleOverrides?: Partial<StyleRules<TopHeaderClassKey>>;
    };
    AppSubheader?: {
      defaultProps?: Partial<SubheaderProps>;
      styleOverrides?: Partial<StyleRules<SubheaderClassKey>>;
    };
    AppEdgeSidebar?: {
      defaultProps?: Partial<EdgeSidebarProps>;
      styleOverrides?: Partial<StyleRules<EdgeSidebarClassKey>>;
    };
    AppContent?: {
      defaultProps?: Partial<ContentProps>;
      styleOverrides?: Partial<StyleRules<ContentClassKey>>;
    };
    AppInsetSidebar?: {
      defaultProps?: Partial<InsetSidebarProps>;
      styleOverrides?: Partial<StyleRules<InsetSidebarClassKey>>;
    };
    AppInsetContainer?: {
      defaultProps?: Partial<ContainerProps>;
      styleOverrides?: Partial<StyleRules<ContainerClassKey>>;
    };
    AppFooter?: {
      defaultProps?: Partial<FooterProps>;
      styleOverrides?: Partial<StyleRules<FooterClassKey>>;
    };
    AppSidebarContent?: {
      defaultProps?: Partial<SidebarContentProps>;
      styleOverrides?: Partial<StyleRules<SidebarContentClassKey>>;
    };
  }
}
