import React from "react";
import cx from "clsx";
import { styled, Theme, useThemeProps } from "@mui/material/styles";
import { SxProps, CSSObject } from "@mui/system";
import { OverridableComponent, GenerateStringUnion } from "@mui-treasury/types";
import { infoClasses } from "./infoClasses";

const defaultUseStyles = () => ({});

export interface InfoPropsVariantOverrides {}

export type InfoSlotStyles = {
  root: CSSObject;
  title: CSSObject;
  subtitle: CSSObject;
  caption: CSSObject;
  eyebrow: CSSObject;
};

export type AppendUseStyles<T> = T & {
  useStyles: (theme: Theme) => Partial<InfoSlotStyles>;
};

export type InfoProps = {
  /**
   * className append to the root element
   */
  className?: string;

  component?: React.ElementType;

  children: React.ReactNode;

  variant?: GenerateStringUnion<InfoPropsVariantOverrides>;

  useStyles?: (theme: Theme) => Partial<InfoSlotStyles>;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
} & Omit<JSX.IntrinsicElements["div"], "ref">;

const StylesContext =
  React.createContext<InfoProps["useStyles"] | undefined>(undefined);

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
})<{ ownerState: InfoProps }>(({ theme, ownerState }) => ({
  display: "block",
  ...(ownerState.useStyles && ownerState.useStyles(theme).root),
}));

export const Info: OverridableComponent<InfoProps> = React.forwardRef<
  HTMLDivElement,
  InfoProps
>(function Info(inProps, ref) {
  const props = useThemeProps<Theme, InfoProps, "JunInfo">({
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
