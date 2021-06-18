import React from "react";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import {
  styled,
  Theme,
  unstable_useThemeProps as useThemeProps,
} from "@material-ui/core/styles";
import { SxProps } from "@material-ui/system";

import { useLayoutCtx, PropsWithFunctionChildren } from "../Root/Root";
import { CSS_TRANSITION } from "../utils/constant";

type DivProps = JSX.IntrinsicElements["div"];

const OffsetRoot = styled("div")({ flexShrink: 0 });
const Offset = ({
  element,
}: {
  element: "header" | "topHeader" | "subheader";
}) => {
  const { builder } = useLayoutCtx();
  return (
    <OffsetRoot
      className="HeaderOffset"
      sx={{ height: builder[element]?.getOffsetHeight() }}
    />
  );
};

export interface TopHeaderProps extends DivProps {
  sx?: SxProps<Theme>;
}
export type TopHeaderClassKey = "root";
const TopHeaderRoot = styled("div", {
  name: "AppTopHeader",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  zIndex: 1,
  transition: CSS_TRANSITION,
});
export const TopHeader = ({
  children,
  ...inProps
}: PropsWithFunctionChildren<TopHeaderProps>) => {
  const props = useThemeProps<Theme, TopHeaderProps, "AppTopHeader">({
    props: inProps,
    name: "AppTopHeader",
  });
  const ctx = useLayoutCtx();
  const { builder } = ctx;
  return (
    <>
      <TopHeaderRoot
        {...props}
        sx={{
          ...props.sx,
          ...builder.topHeader?.getSxProps(),
        }}
      >
        {typeof children === "function" ? children(ctx) : children}
      </TopHeaderRoot>
      <Offset element="topHeader" />
    </>
  );
};

export interface SubheaderProps extends DivProps {
  sx?: SxProps<Theme>;
}
export type SubheaderClassKey = "root";
const SubheaderRoot = styled("div", {
  name: "AppSubheader",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  zIndex: 1,
  transition: CSS_TRANSITION,
});
export const Subheader = ({
  children,
  ...inProps
}: PropsWithFunctionChildren<SubheaderProps>) => {
  const props = useThemeProps<Theme, SubheaderProps, "AppSubheader">({
    props: inProps,
    name: "AppSubheader",
  });
  const ctx = useLayoutCtx();
  const { builder } = ctx;
  return (
    <>
      <SubheaderRoot
        {...props}
        sx={{
          ...props.sx,
          ...builder.subheader?.getSxProps(),
        }}
      >
        {typeof children === "function" ? children(ctx) : children}
      </SubheaderRoot>
      <Offset element="subheader" />
    </>
  );
};

export interface HeaderProps extends AppBarProps {}
export type HeaderClassKey = "root";
const HeaderRoot = styled(AppBar, {
  name: "AppHeader",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({ transition: CSS_TRANSITION });
export const Header = ({
  children,
  ...inProps
}: PropsWithFunctionChildren<HeaderProps>) => {
  const props = useThemeProps<Theme, HeaderProps, "AppHeader">({
    props: inProps,
    name: "AppHeader",
  });
  const ctx = useLayoutCtx();
  const { builder } = ctx;
  return (
    <>
      <HeaderRoot
        color="default"
        elevation={0}
        {...props}
        sx={{
          ...props.sx,
          ...builder.header?.getSxProps(),
        }}
      >
        {typeof children === "function" ? children(ctx) : children}
      </HeaderRoot>
      <Offset element="header" />
    </>
  );
};
