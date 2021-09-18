import React from "react";
import cx from "clsx";
import { styled } from "@mui/material/styles";
import { infoClasses } from "./infoClasses";
import { useStylesCtx } from "./Info";
const InfoEyebrowRoot = styled("div", {
  name: "JunInfo",
  slot: "Eyebrow",
  overridesResolver: (props, styles) => styles.eyebrow,
})(({ theme, ownerState }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
  marginBottom: "0.25rem",
  lineHeight: "1.25rem",
  textTransform: "uppercase",
  ...ownerState.useStyles(theme).eyebrow,
}));
export const InfoEyebrow = React.forwardRef(function InfoEyebrow(props, ref) {
  const { children, component, className, ...other } = props;
  const useStyles = useStylesCtx();
  return (
    <InfoEyebrowRoot
      ref={ref}
      {...other}
      as={component}
      className={cx(infoClasses.eyebrow, className)}
      ownerState={{ ...props, useStyles }}
    >
      {children}
    </InfoEyebrowRoot>
  );
});
/**
 * @deprecated use InfoEyebrow instead
 */
export const InfoCaption = InfoEyebrow;
