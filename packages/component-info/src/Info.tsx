import React, { CSSProperties } from "react";
import cx from "clsx";
import {
  styled,
  unstable_useThemeProps as useThemeProps,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import { SxProps } from "@material-ui/system";
import { OverridableComponent, GenerateStringUnion } from "@mui-treasury/types";
import { infoClasses } from "./infoClasses";

type ValueFunction<T> = T | ((theme: Theme) => T);

export interface InfoPropsVariantOverrides {}

export type InfoSlotStyles = {
  $head: CSSProperties;
  $paragraph: CSSProperties;
  $eyebrow: CSSProperties;
};

export type InfoProps = {
  /**
   * className append to the root element
   */
  className?: string;

  component?: React.ElementType;

  children: React.ReactNode;

  variant?: GenerateStringUnion<InfoPropsVariantOverrides>;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: ValueFunction<SxProps<Theme> & Partial<InfoSlotStyles>>;
} & Omit<JSX.IntrinsicElements["div"], "ref">;

type StylesCtxValue = {
  head?: CSSProperties;
  paragraph?: CSSProperties;
  eyebrow?: CSSProperties;
};

const StylesContext =
  React.createContext<StylesCtxValue | undefined>(undefined);

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
    const { styleProps } = props;
    return {
      ...styles.root,
      ...(styleProps.variant && styles[styleProps.variant]),
    };
  },
})<{ styleProps: InfoProps }>({
  display: "block",
});

export const Info: OverridableComponent<InfoProps> = React.forwardRef<
  HTMLDivElement,
  InfoProps
>(function Info(inProps, ref) {
  const props = useThemeProps<Theme, InfoProps, "JunInfo">({
    props: inProps,
    name: "JunInfo",
  });
  const theme = useTheme();
  const { children, component, variant, ...other } = props;
  const sx = typeof props.sx === "function" ? props.sx(theme) : props.sx;

  const styleProps = {
    ...props,
    variant,
  };

  return (
    <InfoRoot
      ref={ref}
      {...other}
      as={component}
      sx={sx}
      className={cx(infoClasses.root, props.className)}
      styleProps={styleProps}
    >
      <StylesContext.Provider
        value={{
          head: sx?.$head,
          paragraph: sx?.$paragraph,
          eyebrow: sx?.$eyebrow,
        }}
      >
        {children}
      </StylesContext.Provider>
    </InfoRoot>
  );
});
