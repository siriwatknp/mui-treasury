import React from "react";
import cx from "clsx";
import { styled, Theme, useThemeProps } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { useLayoutCtx, PropsWithFunctionChildren } from "../Root/Root";
import { getContentSxProps } from "./getContentSxProps";
import { CONTENT_ID, CSS_TRANSITION } from "../utils/constant";
import { useFullscreenCtx } from "../Fullscreen/FullscreenContext";

type MainProps = JSX.IntrinsicElements["main"];

export type ContentClassKey = "root";
export interface ContentProps extends MainProps {
  sx?: SxProps<Theme>;
}

const ContentRoot = styled("main", {
  name: "AppContent",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: { isFullscreen: boolean } }>(({ ownerState }) => ({
  transition: CSS_TRANSITION,
  ...(ownerState.isFullscreen && {
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
      ownerState={{ isFullscreen }}
    >
      {typeof children === "function" ? children(ctx) : children}
    </ContentRoot>
  );
};
