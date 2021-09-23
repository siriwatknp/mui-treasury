import React from "react";
import cx from "clsx";
import { styled } from "@mui/material/styles";
import { infoClasses } from "./infoClasses";
import { useStylesCtx } from "./Info";
const InfoTitleRoot = styled("h4", {
  name: "JunInfo",
  slot: "Head",
  overridesResolver: (props, styles) => styles.head,
})(({ theme, ownerState }) => ({
  letterSpacing: "0.0073529412em",
  fontSize: "1.25rem",
  fontWeight: "normal",
  margin: "0 0 0.5rem 0",
  lineHeight: 1.5,
  ...ownerState.useStyles(theme).head,
}));
export const InfoTitle = React.forwardRef(function InfoTitle(props, ref) {
  const { children, component, className, ...other } = props;
  const useStyles = useStylesCtx();
  return (
    <InfoTitleRoot
      ref={ref}
      {...other}
      as={component}
      className={cx(infoClasses.head, className)}
      ownerState={{ ...props, useStyles }}
    >
      {children}
    </InfoTitleRoot>
  );
});
/**
 * @deprecated use InfoTitle instead
 */
export const InfoTitle = InfoTitle;
