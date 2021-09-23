import React, { ReactNode } from "react";
import cx from "clsx";
import { styled, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { infoClasses } from "./infoClasses";
import { useStylesCtx, AppendUseStyles } from "./Info";

export type InfoParagraphProps = {
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
} & Omit<JSX.IntrinsicElements["p"], "ref">;

const InfoParagraphRoot = styled("p", {
  name: "JunInfo",
  slot: "Body",
  overridesResolver: (props, styles) => styles.subtitle,
})<{ ownerState: AppendUseStyles<InfoParagraphProps> }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.text.secondary,
    lineHeight: 1.5,
    fontSize: "1rem",
    margin: 0,
    ...ownerState.useStyles(theme).subtitle,
  })
);

export const InfoSubtitle: OverridableComponent<InfoParagraphProps> =
  React.forwardRef<HTMLParagraphElement, InfoParagraphProps>(
    function InfoSubtitle(props, ref) {
      const { children, component, className, ...other } = props;
      const useStyles = useStylesCtx();
      return (
        <InfoParagraphRoot
          ref={ref}
          {...other}
          as={component}
          className={cx(infoClasses.subtitle, className)}
          ownerState={{ ...props, useStyles }}
        >
          {children}
        </InfoParagraphRoot>
      );
    }
  );
