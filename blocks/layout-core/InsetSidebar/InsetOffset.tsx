import React, { CSSProperties } from "react";
import { styled } from "@mui/material/styles";
import { useLayoutCtx } from "../Root/Root";
import { InsetSidebarBuilder } from "./InsetSidebarBuilder";
import { useScrollY } from "../hooks/useScrollY";
import { useScreen } from "../hooks/useScreen";
import { HeadersCompiler } from "../MultiHeaders/HeadersCompiler";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";

const OffsetRoot = styled("div", { name: "InsetSidebarOffset", slot: "Root" })(
  ({ theme }) => ({
    transition: theme.transitions.create(["all"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    }),
  })
);

export const InsetOffset = ({
  sidebar,
}: {
  sidebar: InsetSidebarBuilder | undefined;
}) => {
  const { builder } = useLayoutCtx();
  const screen = useScreen();
  const insetConfig = pickNearestBreakpoint(sidebar?.config, screen);
  // @ts-ignore
  const { headerMagnetEnabled } = insetConfig ?? {};

  // dont't calculate scrollY if not magnet for performance
  const scrollY = useScrollY(!headerMagnetEnabled);

  const { totalHeight, diffHeight } = HeadersCompiler([
    builder.header,
    builder.topHeader,
    builder.subheader,
  ]).getAllHeight();

  // header magnet feature
  const style: CSSProperties = {};
  if (headerMagnetEnabled) {
    const maxOffset =
      diffHeight && screen ? pickNearestBreakpoint(diffHeight, screen) : 0;
    style.marginTop = `max(-${scrollY ?? 0}px, calc(-1 * ${maxOffset}))`;
  }

  if (insetConfig?.position !== "fixed") {
    return null;
  }

  return (
    <OffsetRoot
      sx={{
        display: sidebar?.getSxDisplay("initial"),
        height: totalHeight,
      }}
      style={style}
    />
  );
};
