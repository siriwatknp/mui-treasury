import React, { PropsWithChildren } from "react";
import cx from "clsx";
import {
  experimentalStyled as styled,
  unstable_useThemeProps as useThemeProps,
  Theme,
} from "@material-ui/core/styles";
import { SxProps } from "@material-ui/system";
import { OverridableComponent } from "@mui-treasury/types";

export type SocialLinkClassKey = "root";
export type SocialLinkProps = {
  /**
   * The system prop that allows defining system overrides as well asadditional CSS styles.
   */
  sx?: SxProps<Theme>;
} & Omit<JSX.IntrinsicElements["a"], "ref">;

const SocialLinkRoot = styled(
  "a",
  {},
  {
    name: "JunSocialLink",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
  }
)<{ styleProps: SocialLinkProps }>(({ theme: { palette } }) => ({
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

export const SocialLink: OverridableComponent<SocialLinkProps> =
  React.forwardRef<HTMLAnchorElement, PropsWithChildren<SocialLinkProps>>(
    function SocialLink({ children, ...inProps }, ref) {
      const props = useThemeProps<Theme, SocialLinkProps, "JunSocialLink">({
        props: inProps,
        name: "JunSocialLink",
      });
      const { ...other } = props;

      const styleProps = {
        ...props,
      };

      return (
        <SocialLinkRoot
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
          {...other}
          styleProps={styleProps}
          className={cx("JunSocialLink-root", props.className)}
        >
          {children}
        </SocialLinkRoot>
      );
    }
  );
