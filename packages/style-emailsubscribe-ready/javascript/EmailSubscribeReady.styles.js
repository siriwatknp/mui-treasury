import "@mui-treasury/component-emailsubscribe";
import { emailSubscribeClasses } from "@mui-treasury/component-emailsubscribe";
const getInputStyles = ({ palette, shadows }) => {
  return {
    padding: "0.5rem 1rem",
    paddingRight: "6.5rem",
    backgroundColor:
      palette.mode === "dark" ? palette.action.focus : palette.action.hover,
    color: palette.text.primary,
    border: "none",
    borderRadius: 40,
    outline: "none",
    transition: "box-shadow 0.3s ease-out",
    "&:hover, &:focus": {
      boxShadow: shadows[4],
    },
  };
};
const getSubmitStyles = () => ({
  position: "absolute",
  top: 3,
  right: 3,
  bottom: 3,
  borderRadius: 40,
  backgroundColor: "#ff4e4e",
  color: "#fff",
  padding: "0.5rem 1rem",
  transition: "transform 0.2s",
  transformOrigin: "right",
  zIndex: 1,
  "&:hover, &:focus": {
    backgroundColor: "#e23e3e",
  },
  "&:active": {
    transform: "scale(0.92)",
  },
});
export const getEmailSubscribeReadyStyles = ({ theme }) => ({
  [`& .${emailSubscribeClasses.input}`]: getInputStyles(theme),
  [`& .${emailSubscribeClasses.submit}`]: getSubmitStyles(),
});
export const getEmailSubscribeReadyTheme = (theme) => {
  return {
    JunEmailSubscribe: {
      styleOverrides: {
        input: getInputStyles(theme),
        submit: getSubmitStyles(),
      },
    },
  };
};
