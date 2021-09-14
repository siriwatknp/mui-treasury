import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
const SocialLinkRoot = styled(
  "a",
  {},
  {
    name: "JunSocialLink",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
  }
)(({ theme: { palette } }) => ({
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
export const SocialLink = React.forwardRef(function SocialLink(
  { children, component, ...inProps },
  ref
) {
  const props = useThemeProps({
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
