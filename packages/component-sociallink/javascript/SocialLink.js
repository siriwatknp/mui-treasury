import React from "react";
import cx from "clsx";
import {
  styled,
  unstable_useThemeProps as useThemeProps,
} from "@material-ui/core/styles";
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
  const styleProps = {
    ...props,
  };
  return (
    <SocialLinkRoot
      ref={ref}
      as={component}
      target="_blank"
      rel="noopener noreferrer"
      {...other}
      styleProps={styleProps}
      className={cx("JunSocialLink-root", props.className)}
    >
      {children}
    </SocialLinkRoot>
  );
});
