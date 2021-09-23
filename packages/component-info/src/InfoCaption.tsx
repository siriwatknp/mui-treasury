import React, { ReactNode } from "react";
import cx from "clsx";
import { styled, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { infoClasses } from "./infoClasses";
import { useStylesCtx, AppendUseStyles } from "./Info";

export type InfoCaptionProps = {
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

const InfoCaptionRoot = styled("div", {
  name: "JunInfo",
  slot: "Caption",
  overridesResolver: (props, styles) => styles.eyebrow,
})<{ ownerState: AppendUseStyles<InfoCaptionProps> }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.text.secondary,
    fontSize: "0.75rem",
    marginBlockStart: "0.5em",
    marginBlockEnd: "0.75em",
    ...ownerState.useStyles(theme).eyebrow,
  })
);

export const InfoCaption: OverridableComponent<InfoCaptionProps> =
  React.forwardRef<HTMLDivElement, InfoCaptionProps>(function InfoCaption(
    props,
    ref
  ) {
    const { children, component, className, ...other } = props;
    const useStyles = useStylesCtx();
    return (
      <InfoCaptionRoot
        ref={ref}
        {...other}
        as={component}
        className={cx(infoClasses.eyebrow, className)}
        ownerState={{ ...props, useStyles }}
      >
        {children}
      </InfoCaptionRoot>
    );
  });
