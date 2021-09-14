import React, { PropsWithChildren } from "react";
import cx from "clsx";
import { styled, useThemeProps, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { OverridableComponent } from "@mui-treasury/types";

export type SocialLinkClassKey = "root";
export type SocialLinkProps = {
  /**
   * The system prop that allows defining system overrides as well asadditional CSS styles.
   */
  sx?: SxProps<Theme>;
} & Omit<JSX.IntrinsicElements["a"], "ref">;

const SocialLinkRoot = styled("a", {
  name: "JunSocialLink",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: SocialLinkProps }>(({ theme: { palette } }) => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  padding: 12,
  color: palette.text.secondary,
  "&:not(:first-of-type)": {
    marginLeft: "0.5rem",
  },
  "&:hover, &:focus": {
    color: palette.text.primary,
  },
}));

export const SocialLink: OverridableComponent<
  PropsWithChildren<SocialLinkProps>
> = React.forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<SocialLinkProps & { component?: React.ElementType }>
>(function SocialLink({ children, component, ...inProps }, ref) {
  const props = useThemeProps<Theme, SocialLinkProps, "JunSocialLink">({
    props: inProps,
    name: "JunSocialLink",
  });
  const { ...other } = props;

  const ownerState = {
    ...props,
  };

  return (
    <SocialLinkRoot
      ref={ref}
      as={component}
      target="_blank"
      rel="noopener noreferrer"
      {...other}
      ownerState={ownerState}
      className={cx("JunSocialLink-root", props.className)}
    >
      {children}
    </SocialLinkRoot>
  );
});
