import React, { ReactNode } from "react";
import cx from "clsx";
import { styled, Theme } from "@material-ui/core/styles";
import { SxProps } from "@material-ui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { infoClasses } from "./infoClasses";
import { useStylesCtx } from "./Info";

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
  slot: "Paragraph",
  overridesResolver: (props, styles) => styles.paragraph,
})<{ styleProps: InfoParagraphProps }>(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.5,
  fontSize: "1rem",
  margin: 0,
}));

export const InfoParagraph: OverridableComponent<InfoParagraphProps> =
  React.forwardRef<HTMLParagraphElement, InfoParagraphProps>(
    function InfoParagraph(props, ref) {
      const { children, component, className, sx, ...other } = props;
      const context = useStylesCtx();
      return (
        <InfoParagraphRoot
          ref={ref}
          {...other}
          as={component}
          className={cx(infoClasses.paragraph, className)}
          styleProps={props}
          sx={{ ...context.paragraph, ...sx }}
        >
          {children}
        </InfoParagraphRoot>
      );
    }
  );
