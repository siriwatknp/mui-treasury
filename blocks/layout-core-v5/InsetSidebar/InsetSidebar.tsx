import React from "react";
import { styled, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import cx from "clsx";
import { PropsWithFunctionChildren, useLayoutCtx } from "../Root/Root";
import { InsetOffset } from "./InsetOffset";
import { DrawerAnchor } from "./InsetSidebarBuilder";

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
})<{ ownerState: { anchor?: "left" | "right" } }>(({ theme, ownerState }) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  ...(ownerState.anchor === "left" && {
    borderRight: "1px solid",
  }),
  ...(ownerState.anchor === "right" && {
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
        ownerState={{ anchor }}
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
