import "@mui-treasury/component-emailsubscribe";
import { emailSubscribeClasses } from "@mui-treasury/component-emailsubscribe";
import { blueGrey } from "@mui/material/colors";
const getFormStyles = ({ palette }) => {
  return {
    position: "relative",
    backgroundColor:
      palette.mode === "dark" ? palette.background.default : blueGrey[50],
  };
};
const getInputStyles = ({ palette }) => {
  return {
    border: "none",
    borderRadius: 0,
    backgroundColor: palette.action.hover,
    padding: "0.5rem 1rem",
    paddingRight: "3rem",
    color: palette.text.primary,
    "&:hover, &:focus": {
      backgroundColor: palette.action.focus,
      boxShadow: "none",
      border: "none",
    },
  };
};
const getSubmitStyles = ({ palette }) => ({
  alignSelf: "stretch",
  position: "absolute",
  borderRadius: 0,
  zIndex: 1,
  backgroundColor: "unset",
  top: 0,
  right: 0,
  bottom: 0,
  padding: "0 0.75rem",
  color: palette.action.active,
  "&:hover, &:focus": {
    backgroundColor: palette.action.hover,
  },
});
export const getEmailSubscribeMinimalStyles = ({ theme }) => ({
  ...getFormStyles(theme),
  [`& .${emailSubscribeClasses.input}`]: getInputStyles(theme),
  [`& .${emailSubscribeClasses.submit}`]: getSubmitStyles(theme),
});
export const getEmailSubscribeMinimalTheme = (theme) => {
  return {
    JunEmailSubscribe: {
      styleOverrides: {
        form: getFormStyles(theme),
        input: getInputStyles(theme),
        submit: getSubmitStyles(theme),
      },
    },
  };
};
