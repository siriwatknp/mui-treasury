import React, { PropsWithChildren } from "react";
import cx from "clsx";
import { styled, Theme, useThemeProps } from "@mui/material/styles";
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

const useUtilityClasses = (ownerState: StickerProps) => {
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
    const { ownerState } = props;

    return [
      styles.root,
      styles[ownerState.variant],
      styles[ownerState[`color${capitalize(ownerState.palette)}`]],
      ownerState.hasText && styles.hasText,
      ownerState.round && styles.round,
    ];
  },
})<{ ownerState: StickerProps }>(
  ({ theme: { treasury, ...theme }, ownerState }) => ({
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
