import React, { ReactNode } from "react";
import { styled, SxProps, Theme } from "@mui/material/styles";
import cx from "clsx";
import { AppendUseStyles, useStylesCtx } from "./info";
import { infoClasses } from "./info-classes";

export type InfoTitleProps = {
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
} & Omit<React.JSX.IntrinsicElements["div"], "ref">;

const InfoTitleRoot = styled("div", {
  name: "JunInfo",
  slot: "Head",
  overridesResolver: (props, styles) => styles.title,
})<{ ownerState: AppendUseStyles<InfoTitleProps> }>(
  ({ theme, ownerState }) => ({
    letterSpacing: "0.0073529412em",
    fontSize: "1.25rem",
    fontWeight: "normal",
    margin: "0 0 0.4em 0", // force other side to prevent user agent stylesheet
    lineHeight: 1.5,
    ...ownerState.useStyles(theme).title,
  }),
);

export const InfoTitle = React.forwardRef<HTMLHeadingElement, InfoTitleProps>(
  function InfoTitle(props, ref) {
    const { children, component, className, ...other } = props;
    const useStyles = useStylesCtx();
    return (
      <InfoTitleRoot
        ref={ref}
        {...other}
        as={component}
        className={cx(infoClasses.title, className)}
        ownerState={{ ...props, useStyles }}
      >
        {children}
      </InfoTitleRoot>
    );
  },
);
