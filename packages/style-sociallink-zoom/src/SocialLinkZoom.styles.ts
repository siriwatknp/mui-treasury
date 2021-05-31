import "@mui-treasury/component-social-link";
import { Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunSocialLink">>;

export const getSocialLinkZoomStyles = ({
  theme: { palette },
}: {
  theme: Theme;
}): CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  fontSize: 24,
  padding: 12,
  color:
    palette.mode === "dark" ? palette.text.disabled : palette.primary.light,
  "&:not(:first-of-type)": {
    marginLeft: "0.5rem",
  },
  "&:hover, &:focus": {
    transform: "scale(1.3)",
    color: palette.mode === "dark" ? "#fff" : palette.primary.main,
  },
});

export const getSocialLinkZoomTheme = (theme: Theme): Output => {
  return {
    JunSocialLink: {
      styleOverrides: {
        root: getSocialLinkZoomStyles({ theme }),
      },
    },
  };
};
