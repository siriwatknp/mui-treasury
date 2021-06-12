import "@mui-treasury/component-emailsubscribe";
import { emailSubscribeClasses } from "@mui-treasury/component-emailsubscribe";
const getFormStyles = () => ({
  width: 343,
});
const getInputStyles = ({ palette, spacing }) => {
  return {
    borderRadius: 0,
    padding: spacing(0, 1.5),
    backgroundColor:
      palette.mode === "dark" ? palette.divider : palette.action.selected,
    color: palette.text.primary,
    border: "none",
    "&:hover, &:focus": {
      boxShadow: "none",
      backgroundColor:
        palette.mode === "dark" ? "rgba(255,255,255,0.2)" : palette.divider,
    },
  };
};
const getSubmitStyles = ({ palette, spacing }) => ({
  borderRadius: 0,
  marginLeft: "0.5rem",
  padding: spacing(1, 3),
  backgroundColor: palette.divider,
  color: palette.text.primary,
  fontSize: "1rem",
  lineHeight: 1.5,
  "&:hover": {
    backgroundColor:
      palette.mode === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
  },
});
export const getEmailSubscribeTranslucentStyles = ({ theme }) => ({
  ...getFormStyles(),
  [`& .${emailSubscribeClasses.input}`]: getInputStyles(theme),
  [`& .${emailSubscribeClasses.submit}`]: getSubmitStyles(theme),
});
export const getEmailSubscribeTranslucentTheme = (theme) => {
  return {
    JunEmailSubscribe: {
      styleOverrides: {
        form: getFormStyles(),
        input: getInputStyles(theme),
        submit: getSubmitStyles(theme),
      },
    },
  };
};
