import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
import { infoClasses } from "./infoClasses";
const defaultUseStyles = () => ({});
const StylesContext = React.createContext(undefined);
export const useStylesCtx = () => {
  const value = React.useContext(StylesContext);
  if (!value) {
    throw new Error("`useStylesCtx` must be called under <Info>");
  }
  return value;
};
const InfoRoot = styled("div", {
  name: "JunInfo",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant]];
  },
})(({ theme, ownerState }) => ({
  display: "block",
  ...(ownerState.useStyles && ownerState.useStyles(theme).root),
}));
export const Info = React.forwardRef(function Info(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JunInfo",
  });
  const { children, component, variant, useStyles, ...other } = props;
  const ownerState = {
    ...props,
    variant,
    useStyles,
  };
  return (
    <InfoRoot
      ref={ref}
      {...other}
      as={component}
      className={cx(infoClasses.root, props.className)}
      ownerState={ownerState}
    >
      <StylesContext.Provider value={useStyles || defaultUseStyles}>
        {children}
      </StylesContext.Provider>
    </InfoRoot>
  );
});
