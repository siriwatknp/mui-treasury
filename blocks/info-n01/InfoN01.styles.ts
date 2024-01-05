import { Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import { InfoSlotStyles } from "../info-basic";

export const getInfoN01Styles = (
  arg: Theme | { theme: Theme }
): CSSObject & Partial<InfoSlotStyles> => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {
      textTransform: "uppercase",
      color: palette.text.secondary,
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
      color:
        palette.mode === "dark" ? "rgba(255,255,255,0.72)" : "rgba(0,0,0,0.72)",
    },
  };
};
