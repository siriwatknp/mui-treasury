import type { CSSObject, Theme } from "@mui/material/styles";
import { InfoSlotStyles } from "../info-basic/info";

export const getInfoN02Styles = (
  arg: Theme | { theme: Theme },
): CSSObject & Partial<InfoSlotStyles> => {
  const theme = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {
      textTransform: "uppercase",
      color: (theme.vars || theme).palette.text.secondary,
      fontWeight: "bold",
      letterSpacing: "1px",
      fontSize: 14,
      display: "inline-block",
    },
    title: {
      fontSize: 24,
      fontWeight: 900,
      marginBottom: "0.4em",
    },
    subtitle: {
      fontSize: 18,
      color: (theme.vars || theme).palette.text.secondary,
    },
  };
};
