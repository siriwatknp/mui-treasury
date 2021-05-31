import "@mui-treasury/component-social-link";
import { Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunSocialLink">>;

export const getSocialLinkMoonStyles = ({
  theme: { palette },
}: {
  theme: Theme;
}): CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  fontSize: 24,
  padding: 12,
  borderRadius: 40,
  border: "1px solid",
  borderColor: palette.divider,
  color: palette.text.secondary,
  transition: "0.3s ease-out",
  "&:not(:first-of-type)": {
    marginLeft: "0.5rem",
  },
  "&:hover, &:focus": {
    transform: "translateY(-4px)",
    borderColor: palette.text.secondary,
    color: palette.mode === "dark" ? "#fff" : palette.text.primary,
  },
});

export const getSocialLinkMoonTheme = (theme: Theme): Output => {
  return {
    JunSocialLink: {
      styleOverrides: {
        root: getSocialLinkMoonStyles({ theme }),
      },
    },
  };
};
