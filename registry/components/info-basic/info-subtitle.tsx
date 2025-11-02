import React, { ReactNode } from "react";
import { styled, SxProps, Theme } from "@mui/material/styles";
import cx from "clsx";
import { AppendUseStyles, useStylesCtx } from "./info";
import { infoClasses } from "./info-classes";

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
} & Omit<React.JSX.IntrinsicElements["p"], "ref">;

const InfoParagraphRoot = styled("p", {
  name: "JunInfo",
  slot: "Body",
  overridesResolver: (props, styles) => styles.subtitle,
})<{ ownerState: AppendUseStyles<InfoParagraphProps> }>(
  ({ theme, ownerState }) => ({
    color: (theme.vars || theme).palette.text.secondary,
    lineHeight: 1.5,
    fontSize: "1rem",
    margin: 0,
    ...ownerState.useStyles(theme).subtitle,
  }),
);

export const InfoSubtitle = React.forwardRef<
  HTMLParagraphElement,
  InfoParagraphProps
>(function InfoSubtitle(props, ref) {
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
});
