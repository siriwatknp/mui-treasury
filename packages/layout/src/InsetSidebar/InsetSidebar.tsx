import React from "react";
import cx from "clsx";
import { styled, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { useLayoutCtx, PropsWithFunctionChildren } from "../Root/Root";
import { DrawerAnchor } from "./InsetSidebarBuilder";
import { InsetOffset } from "./InsetOffset";

const InsetSidebarRoot = styled("div", {
  name: "AppInsetSidebar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  position: "relative",
  flexShrink: 0,
});
const InsetSidebarBody = styled("div", {
  name: "AppInsetSidebar",
  slot: "Body",
  overridesResolver: (props, styles) => styles.body,
})<{ styleProps: { anchor?: "left" | "right" } }>(({ theme, styleProps }) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  ...(styleProps.anchor === "left" && {
    borderRight: "1px solid",
  }),
  ...(styleProps.anchor === "right" && {
    borderLeft: "1px solid",
  }),
  borderColor: theme.palette.divider,
}));

type DivProps = JSX.IntrinsicElements["div"];
export type InsetSidebarClassKey = "root" | "body";
export interface InsetSidebarProps extends DivProps {
  anchor?: DrawerAnchor;
  RootProps?: DivProps;
  rootSx?: SxProps<Theme>;
  classes?: {
    root?: string;
    paper?: string;
  };
  sx?: SxProps<Theme>;
}

export const InsetSidebar = ({
  anchor,
  children,
  classes,
  RootProps,
  rootSx,
  ...props
}: PropsWithFunctionChildren<InsetSidebarProps>) => {
  const ctx = useLayoutCtx();
  const { builder } = ctx;

  // anchor should be injected via InsetContainer
  const sidebar = builder[`${anchor!}InsetSidebar` as const];
  return (
    <InsetSidebarRoot
      {...RootProps}
      className={cx(RootProps?.className, classes?.root)}
      sx={{
        ...sidebar?.getSxRoot(),
        ...rootSx,
      }}
    >
      <InsetSidebarBody
        {...props}
        className={cx(props?.className, classes?.paper)}
        styleProps={{ anchor }}
        sx={{
          ...sidebar?.getSxBody(),
          ...props?.sx,
        }}
      >
        <InsetOffset sidebar={sidebar} />
        {typeof children === "function" ? children(ctx) : children}
      </InsetSidebarBody>
    </InsetSidebarRoot>
  );
};
