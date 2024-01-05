import { Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import { InfoSlotStyles } from "../info-basic";

export const getInfoN03Styles = (
  arg: Theme | { theme: Theme }
): CSSObject & Partial<InfoSlotStyles> => {
  const { palette } = "theme" in arg ? arg.theme : arg;
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
      color: palette.text.primary,
      lineHeight: 1.75,
    },
  };
};
