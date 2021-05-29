import React from "react";
import cx from "clsx";
import { experimentalStyled } from "@material-ui/core/styles";
import FullscreenContext from "./FullscreenContext";

const FullscreenRoot = experimentalStyled(
  "div",
  {},
  { name: "Fullscreen", slot: "Root" }
)({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

export type FullscreenProps = Parameters<typeof FullscreenRoot>[0];

export const Fullscreen = (props: FullscreenProps) => {
  return (
    <FullscreenContext.Provider value={true}>
      <FullscreenRoot
        {...props}
        className={cx("Fullscreen", props.className)}
      />
    </FullscreenContext.Provider>
  );
};
