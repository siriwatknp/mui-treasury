import React, { ReactNode } from "react";
import cx from "clsx";
import { styled, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { infoClasses } from "./infoClasses";
import { useStylesCtx, AppendUseStyles } from "./Info";

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
  overridesResolver: (props, styles) => styles.eyebrow,
})<{ ownerState: AppendUseStyles<InfoEyebrowProps> }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.text.secondary,
    fontSize: "0.875rem",
    marginBottom: "0.25rem",
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    ...ownerState.useStyles(theme).eyebrow,
  })
);

export const InfoEyebrow: OverridableComponent<InfoEyebrowProps> =
  React.forwardRef<HTMLDivElement, InfoEyebrowProps>(function InfoEyebrow(
    props,
    ref
  ) {
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
