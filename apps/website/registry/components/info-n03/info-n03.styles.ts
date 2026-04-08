import type { CSSObject, Theme } from "@mui/material/styles";
import { InfoSlotStyles } from "../info-basic/info";

export const getInfoN03Styles = (
  arg: Theme | { theme: Theme },
): CSSObject & Partial<InfoSlotStyles> => {
  const theme = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {
      textTransform: "uppercase",
      color: "#9e9e9e",
      marginBottom: "0.35em",
      fontWeight: "bold",
      letterSpacing: "2px",
      fontSize: 16,
      display: "inline-block",
    },
    title: {
      fontSize: 24,
      fontWeight: 900,
      marginBottom: "0.72em",
    },
    subtitle: {
      fontSize: 16,
      color: (theme.vars || theme).palette.text.primary,
      lineHeight: 1.75,
    },
  };
};
