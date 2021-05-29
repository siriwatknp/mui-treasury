import React from "react";
import cx from "clsx";
import {
  experimentalStyled,
  Theme,
  unstable_useThemeProps as useThemeProps,
} from "@material-ui/core/styles";
import { SxProps } from "@material-ui/system";
import { useLayoutCtx, PropsWithFunctionChildren } from "../Root/Root";
import { getContentSxProps } from "./getContentSxProps";
import { CONTENT_ID, CSS_TRANSITION } from "../utils/constant";
import { useFullscreenCtx } from "../Fullscreen/FullscreenContext";

type MainProps = JSX.IntrinsicElements["main"];

export type ContentClassKey = "root";
export interface ContentProps extends MainProps {
  sx?: SxProps<Theme>;
}

const ContentRoot = experimentalStyled(
  "main",
  {},
  {
    name: "AppContent",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
  }
)<{ styleProps: { isFullscreen: boolean } }>(({ styleProps }) => ({
  transition: CSS_TRANSITION,
  ...(styleProps.isFullscreen && {
    flexGrow: 1,
    minHeight: "0px",
    display: "flex",
  }),
}));

export const Content = ({
  children,
  ...inProps
}: PropsWithFunctionChildren<ContentProps>) => {
  const props = useThemeProps<Theme, ContentProps, "AppContent">({
    props: inProps,
    name: "AppContent",
  });
  const ctx = useLayoutCtx();
  const { builder } = ctx;
  const sxProps = getContentSxProps(builder, CONTENT_ID);
  const isFullscreen = useFullscreenCtx();
  return (
    <ContentRoot
      {...props}
      className={cx("Content", props.className)}
      sx={{
        ...(isFullscreen && { flexGrow: 1, minHeight: 0, display: "flex" }),
        ...props.sx,
        ...sxProps,
      }}
      styleProps={{ isFullscreen }}
    >
      {typeof children === "function" ? children(ctx) : children}
    </ContentRoot>
  );
};
