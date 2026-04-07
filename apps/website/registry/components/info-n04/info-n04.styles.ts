import type { CSSObject, Theme } from "@mui/material/styles";
import { InfoSlotStyles } from "../info-basic/info";

export const getInfoN04Styles = (
  arg: Theme | { theme: Theme },
): CSSObject & Partial<InfoSlotStyles> => {
  const theme = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {
      display: "block",
      textAlign: "center",
      color: "#9e9e9e",
      letterSpacing: "2px",
      fontSize: 14,
      marginTop: 12,
    },
    title: {
      textAlign: "center",
      fontSize: 32,
      lineHeight: 2,
      fontWeight: 300,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      marginBottom: "0.72em",
      "&:after": {
        content: '""',
        width: 24,
        height: 2,
        backgroundColor: "#ddd",
        display: "block",
        margin: "8px auto",
        borderRadius: 2,
      },
    },
    subtitle: {
      textAlign: "center",
      fontSize: 14,
      color: "#222",
      lineHeight: 1.75,
      width: "88%",
      margin: "0 auto",
      ...theme.applyStyles("dark", {
        color: "#999",
      }),
    },
  };
};
