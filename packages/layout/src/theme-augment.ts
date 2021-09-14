import { CSSInterpolation } from "@mui/system";
import { ContainerClassKey, ContainerProps } from "@mui/material/Container";
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

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/components" {
  interface Components {
    AppHeader?: {
      defaultProps?: Partial<HeaderProps>;
      styleOverrides?: Partial<OverridesStyleRules<HeaderClassKey>>;
    };
    AppTopHeader?: {
      defaultProps?: Partial<TopHeaderProps>;
      styleOverrides?: Partial<OverridesStyleRules<TopHeaderClassKey>>;
    };
    AppSubheader?: {
      defaultProps?: Partial<SubheaderProps>;
      styleOverrides?: Partial<OverridesStyleRules<SubheaderClassKey>>;
    };
    AppEdgeSidebar?: {
      defaultProps?: Partial<EdgeSidebarProps>;
      styleOverrides?: Partial<OverridesStyleRules<EdgeSidebarClassKey>>;
    };
    AppContent?: {
      defaultProps?: Partial<ContentProps>;
      styleOverrides?: Partial<OverridesStyleRules<ContentClassKey>>;
    };
    AppInsetSidebar?: {
      defaultProps?: Partial<InsetSidebarProps>;
      styleOverrides?: Partial<OverridesStyleRules<InsetSidebarClassKey>>;
    };
    AppInsetContainer?: {
      defaultProps?: Partial<ContainerProps>;
      styleOverrides?: Partial<OverridesStyleRules<ContainerClassKey>>;
    };
    AppFooter?: {
      defaultProps?: Partial<FooterProps>;
      styleOverrides?: Partial<OverridesStyleRules<FooterClassKey>>;
    };
    AppSidebarContent?: {
      defaultProps?: Partial<SidebarContentProps>;
      styleOverrides?: Partial<OverridesStyleRules<SidebarContentClassKey>>;
    };
  }
}
