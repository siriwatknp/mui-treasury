import "@mui-treasury/component-sociallink";
import { Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "JunSocialLink">>;

export const getSocialLinkBallStyles = ({
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
  backgroundColor:
    palette.mode === "dark"
      ? "rgba(255,255,255,0.08)"
      : palette.action.selected,
  color: palette.text.secondary,
  "&:not(:first-of-type)": {
    marginLeft: "0.5rem",
  },
  "&:hover, &:focus": {
    backgroundColor:
      palette.mode === "dark" ? palette.action.focus : palette.action.disabled,
    color: palette.mode === "dark" ? "#fff" : palette.text.primary,
  },
});

export const getSocialLinkBallTheme = (theme: Theme): Output => {
  return {
    JunSocialLink: {
      styleOverrides: {
        root: getSocialLinkBallStyles({ theme }),
      },
    },
  };
};
