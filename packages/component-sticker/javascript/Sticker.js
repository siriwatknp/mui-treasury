import React from "react";
import cx from "clsx";
import { styled } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/core";
import useThemeProps from "@mui/material/styles/useThemeProps";
import { getStickerUtilityClass } from "./stickerClasses";
const overridesResolver = (props, styles) => {
  const { styleProps } = props;
  return {
    ...styles.root,
    ...styles[styleProps.variant],
    ...(styleProps.hasText && styles.hasText),
    ...(styleProps.round && styles.round),
  };
};
const useUtilityClasses = (styleProps) => {
  const { variant, round, palette, hasText, classes } = styleProps;
  const slots = {
    root: ["root", round && "round", hasText && "hasText", variant, palette],
  };
  return composeClasses(slots, getStickerUtilityClass, classes);
};
const StickerRoot = styled(
  "div",
  {},
  {
    name: "JunSticker",
    slot: "Root",
    overridesResolver,
  }
)(({ theme: { treasury, ...theme }, styleProps }) => ({
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
  ...(styleProps.round && {
    borderRadius: 100,
  }),
  ...(styleProps.hasText && {
    padding: "0 0.5rem",
  }),
  color: treasury.getColor(styleProps.palette, "500"),
  ...(styleProps.variant === "outlined" && {
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
      ...(styleProps.round && {
        borderRadius: 100,
      }),
    },
  }),
  ...(styleProps.variant === "solid" && {
    color: "#fff",
    backgroundColor: treasury.getColor(styleProps.palette, "500"),
  }),
  ...(styleProps.variant === "soft" && {
    color: treasury.getColor(styleProps.palette, "500"),
    backgroundColor: treasury.getColor(styleProps.palette ?? "grey", "100"),
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
  const styleProps = {
    variant,
    round,
    hasText,
    ...props,
  };
  const classes = useUtilityClasses(styleProps);
  return (
    <StickerRoot
      ref={ref}
      as={component}
      {...other}
      styleProps={styleProps}
      className={cx(classes.root, props.className)}
    >
      {children}
    </StickerRoot>
  );
});
