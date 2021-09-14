import "@mui-treasury/component-emailsubscribe";
import { emailSubscribeClasses } from "@mui-treasury/component-emailsubscribe";
import { Theme, alpha } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import { Components } from "@mui/material/styles/components";

type Output = Required<Pick<Components, "JunEmailSubscribe">>;

const fontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

export const getEmailSubscribeBootstrapStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette, spacing } = "theme" in arg ? arg.theme : arg;
  const { white } = palette.common;
  const inputRadius = "4px";
  const borderWidth = 1;
  const inputPadding = ".375rem .75rem";
  const borderColor = "#ced4da";
  const normalColor = "#80bdff";
  return {
    [`& .${emailSubscribeClasses.input}`]: {
      boxSizing: "border-box",
      borderRadius: inputRadius,
      position: "relative",
      backgroundColor: white,
      borderWidth,
      borderColor,
      height: "calc(1.5em + .75rem + 2px)",
      padding: inputPadding,
      transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      // Use the system font instead of the default Roboto font.
      fontFamily,
      "&:hover": {
        borderColor,
        boxShadow: "none",
        backgroundColor: white,
      },
      "&:focus": {
        outline: "none",
        borderRadius: inputRadius,
        borderColor: normalColor,
        backgroundColor: white,
        boxShadow: `0 0 0 0.2rem ${alpha(
          normalColor,
          palette.mode === "dark" ? 0.48 : 0.75
        )}`,
      },
    },
    [`& .${emailSubscribeClasses.submit}`]: {
      marginLeft: "0.5rem",
      fontFamily,
      fontSize: "1rem",
      padding: spacing(1, 1.5),
      backgroundColor: "#007bff",
      borderRadius: inputRadius,
      color: "#fff",
      lineHeight: 1.2,
      "&:hover, &:focus": {
        backgroundColor: "#0069d9",
        border: "none",
      },
    },
  };
};

export const getEmailSubscribeBootstrapTheme = (theme: Theme): Output => {
  return {
    JunEmailSubscribe: {
      styleOverrides: {
        form: getEmailSubscribeBootstrapStyles(theme),
      },
    },
  };
};
