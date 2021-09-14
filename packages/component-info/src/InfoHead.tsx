import React, { ReactNode } from "react";
import cx from "clsx";
import { styled, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { infoClasses } from "./infoClasses";
import { useStylesCtx, AppendUseStyles } from "./Info";

export type InfoHeadProps = {
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
} & Omit<JSX.IntrinsicElements["h4"], "ref">;

const InfoHeadRoot = styled("h4", {
  name: "JunInfo",
  slot: "Head",
  overridesResolver: (props, styles) => styles.head,
})<{ ownerState: AppendUseStyles<InfoHeadProps> }>(({ theme, ownerState }) => ({
  letterSpacing: "0.0073529412em",
  fontSize: "1.25rem",
  fontWeight: "normal",
  margin: "0 0 0.5rem 0",
  lineHeight: 1.5,
  ...ownerState.useStyles(theme).head,
}));

export const InfoHead: OverridableComponent<InfoHeadProps> = React.forwardRef<
  HTMLHeadingElement,
  InfoHeadProps
>(function InfoHead(props, ref) {
  const { children, component, className, ...other } = props;
  const useStyles = useStylesCtx();
  return (
    <InfoHeadRoot
      ref={ref}
      {...other}
      as={component}
      className={cx(infoClasses.head, className)}
      ownerState={{ ...props, useStyles }}
    >
      {children}
    </InfoHeadRoot>
  );
});

/**
 * @deprecated use InfoHead instead
 */
export const InfoTitle = InfoHead;
