import React, { ReactNode } from "react";
import cx from "clsx";
import { styled, Theme } from "@material-ui/core/styles";
import { SxProps } from "@material-ui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { infoClasses } from "./infoClasses";
import { useStylesCtx } from "./Info";

export type InfoEyebrowProps = {
  /**
   * className append to the root element
   */
  className?: string;

  component?: React.ElementType;

  children: ReactNode;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
} & Omit<JSX.IntrinsicElements["div"], "ref">;

const InfoEyebrowRoot = styled("div", {
  name: "JunInfo",
  slot: "Eyebrow",
  overridesResolver: (props, styles) => styles.caption,
})<{ styleProps: InfoEyebrowProps }>(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
  marginBottom: "0.25rem",
  lineHeight: "1.25rem",
  textTransform: "uppercase",
}));

export const InfoEyebrow: OverridableComponent<InfoEyebrowProps> =
  React.forwardRef<HTMLDivElement, InfoEyebrowProps>(function InfoEyebrow(
    props,
    ref
  ) {
    const { children, component, className, sx, ...other } = props;
    const context = useStylesCtx();
    return (
      <InfoEyebrowRoot
        ref={ref}
        {...other}
        as={component}
        className={cx(infoClasses.eyebrow, className)}
        styleProps={props}
        sx={{ ...context.eyebrow, ...sx }}
      >
        {children}
      </InfoEyebrowRoot>
    );
  });
