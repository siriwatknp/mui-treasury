import React, { ReactNode } from "react";
import { styled, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import cx from "clsx";
import { AppendUseStyles, useStylesCtx } from "./Info";
import { infoClasses } from "./infoClasses";

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
  overridesResolver: (props, styles) => styles.caption,
})<{ ownerState: AppendUseStyles<InfoCaptionProps> }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.text.secondary,
    fontSize: "0.75rem",
    marginBlockStart: "0.5em",
    marginBlockEnd: "0.75em",
    ...ownerState.useStyles(theme).caption,
  })
);

export const InfoCaption = React.forwardRef<HTMLDivElement, InfoCaptionProps>(
  function InfoCaption(props, ref) {
    const { children, component, className, ...other } = props;
    const useStyles = useStylesCtx();
    return (
      <InfoCaptionRoot
        ref={ref}
        {...other}
        as={component}
        className={cx(infoClasses.caption, className)}
        ownerState={{ ...props, useStyles }}
      >
        {children}
      </InfoCaptionRoot>
    );
  }
);
