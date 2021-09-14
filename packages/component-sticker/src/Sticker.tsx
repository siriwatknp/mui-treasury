import React, { PropsWithChildren } from "react";
import cx from "clsx";
import { styled, Theme } from "@mui/material/styles";
import useThemeProps from "@mui/material/styles/useThemeProps";
import { Palette } from "@mui-treasury/theme-treasury";
import { unstable_composeClasses as composeClasses } from "@mui/core";
import { SxProps } from "@mui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { capitalize } from "@mui/material/utils";
import { getStickerUtilityClass, stickerClasses } from "./stickerClasses";

export type StickerClassKey = keyof typeof stickerClasses;
export type StickerClasses = Partial<typeof stickerClasses>;

export type StickerProps = {
  /**
   * className append to the root element
   */
  className?: string;

  /**
   * variant of the square
   * @default 'none'
   */
  variant?: "none" | "solid" | "soft" | "outlined";

  /**
   * If `true`, this element has round shape
   * @default false
   */
  round?: boolean;

  /**
   * If `true`, this element has base padding left & right (for containing text)
   * @default false
   */
  hasText?: boolean;

  /**
   * The color of the element, rely on @mui-treasury/theme-treasury
   */
  palette?: Palette;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: StickerClasses;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
};

const useUtilityClasses = (styleProps: StickerProps) => {
  const { variant, round, palette, hasText, classes } = styleProps;
  const slots = {
    root: [
      "root",
      round && "round",
      hasText && "hasText",
      variant,
      palette && `color${capitalize(palette)}`,
    ],
  };
  return composeClasses(
    slots,
    getStickerUtilityClass,
    classes as Required<StickerProps["classes"]>
  );
};

const StickerRoot = styled("div", {
  name: "JunSticker",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { styleProps } = props;

    return [
      styles.root,
      styles[styleProps.variant],
      styles[styleProps[`color${capitalize(styleProps.palette)}`]],
      styleProps.hasText && styles.hasText,
      styleProps.round && styles.round,
    ];
  },
})<{ styleProps: StickerProps }>(
  ({ theme: { treasury, ...theme }, styleProps }) => ({
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
  })
);

interface StickerComponent
  extends OverridableComponent<PropsWithChildren<StickerProps>> {}

export const Sticker: StickerComponent = React.forwardRef<
  any,
  PropsWithChildren<StickerProps & { component?: React.ElementType }>
>(function Sticker({ children, component, ...inProps }, ref) {
  const props = useThemeProps<Theme, StickerProps, "JunSticker">({
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
