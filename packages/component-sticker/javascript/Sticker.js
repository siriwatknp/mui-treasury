import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/base";
import { capitalize } from "@mui/material/utils";
import { getStickerUtilityClass } from "./stickerClasses";
const useUtilityClasses = (ownerState) => {
  const { variant, round, palette, hasText, classes } = ownerState;
  const slots = {
    root: [
      "root",
      round && "round",
      hasText && "hasText",
      variant,
      palette && `color${capitalize(palette)}`,
    ],
  };
  return composeClasses(slots, getStickerUtilityClass, classes);
};
const StickerRoot = styled("div", {
  name: "JunSticker",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.root,
      styles[ownerState.variant],
      styles[ownerState[`color${capitalize(ownerState.palette)}`]],
      ownerState.hasText && styles.hasText,
      ownerState.round && styles.round,
    ];
  },
})(({ theme: { treasury, ...theme }, ownerState }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: 24,
  minHeight: 24,
  gap: 2,
  verticalAlign: "middle",
  flexShrink: 0,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  ...(ownerState.round && {
    borderRadius: 100,
  }),
  ...(ownerState.hasText && {
    padding: "0 0.5rem",
  }),
  color: treasury.getColor(ownerState.palette, "500"),
  ...(ownerState.variant === "outlined" && {
    "&:before": {
      display: "block",
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: theme.shape.borderRadius,
      boxShadow: `inset 0 0 0 1px`,
      ...(ownerState.round && {
        borderRadius: 100,
      }),
    },
  }),
  ...(ownerState.variant === "solid" && {
    color: "#fff",
    backgroundColor: treasury.getColor(ownerState.palette, "500"),
  }),
  ...(ownerState.variant === "soft" && {
    color: treasury.getColor(ownerState.palette, "500"),
    backgroundColor: treasury.getColor(ownerState.palette ?? "grey", "100"),
  }),
}));
export const Sticker = React.forwardRef(function Sticker(
  { children, component, ...inProps },
  ref
) {
  const props = useThemeProps({
    props: inProps,
    name: "JunSticker",
  });
  const {
    variant = "none",
    palette,
    round = false,
    hasText = false,
    ...other
  } = props;
  const ownerState = {
    variant,
    round,
    hasText,
    ...props,
  };
  const classes = useUtilityClasses(ownerState);
  return (
    <StickerRoot
      ref={ref}
      as={component}
      {...other}
      ownerState={ownerState}
      className={cx(classes.root, props.className)}
    >
      {children}
    </StickerRoot>
  );
});
