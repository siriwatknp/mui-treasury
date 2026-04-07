import type { CSSObject, Theme } from "@mui/material/styles";
import { InfoSlotStyles } from "../info-basic/info";

export const getInfoN01Styles = (
  arg: Theme | { theme: Theme },
): CSSObject & Partial<InfoSlotStyles> => {
  const theme = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {
      textTransform: "uppercase",
      color: (theme.vars || theme).palette.text.secondary,
      letterSpacing: "1px",
      fontSize: 12,
      marginBottom: "0.875em",
      display: "inline-block",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: "0.4em",
    },
    subtitle: {
      fontSize: 16,
      color: "rgba(0,0,0,0.72)",
      ...theme.applyStyles("dark", {
        color: "rgba(255,255,255,0.72)",
      }),
    },
  };
};
