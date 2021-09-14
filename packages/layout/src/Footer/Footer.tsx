import React from "react";
import { styled, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

import { useLayoutCtx, PropsWithFunctionChildren } from "../Root/Root";
import { getContentSxProps } from "../Content/getContentSxProps";
import { CSS_TRANSITION, FOOTER_ID } from "../utils/constant";

const FooterRoot = styled("footer", {
  name: "AppFooter",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  transition: CSS_TRANSITION,
});

type Props = JSX.IntrinsicElements["footer"];
export type FooterClassKey = "root";
export interface FooterProps extends Props {
  sx?: SxProps<Theme>;
}
export const Footer = ({
  children,
  ...props
}: PropsWithFunctionChildren<FooterProps>) => {
  const ctx = useLayoutCtx();
  const { builder } = ctx;
  const sxProps = getContentSxProps(builder, FOOTER_ID);
  return (
    <FooterRoot {...props} sx={{ ...props.sx, ...sxProps }}>
      {typeof children === "function" ? children(ctx) : children}
    </FooterRoot>
  );
};
