import React from "react";
import cx from "clsx";
import { styled } from "@mui/material/styles";
import { infoClasses } from "./infoClasses";
import { useStylesCtx } from "./Info";
const InfoParagraphRoot = styled("p", {
  name: "JunInfo",
  slot: "Body",
  overridesResolver: (props, styles) => styles.body,
})(({ theme, ownerState }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.5,
  fontSize: "1rem",
  margin: 0,
  ...ownerState.useStyles(theme).body,
}));
export const InfoBody = React.forwardRef(function InfoBody(props, ref) {
  const { children, component, className, ...other } = props;
  const useStyles = useStylesCtx();
  return (
    <InfoParagraphRoot
      ref={ref}
      {...other}
      as={component}
      className={cx(infoClasses.body, className)}
      ownerState={{ ...props, useStyles }}
    >
      {children}
    </InfoParagraphRoot>
  );
});
/**
 * @deprecated use InfoSubtitle instead
 */
export const InfoSubtitle = InfoBody;
