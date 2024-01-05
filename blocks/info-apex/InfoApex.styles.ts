import { Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import { InfoSlotStyles } from "../info-basic";

const titleFontSize = "0.875rem";
const subtitleFontSize = "0.75rem";

export const getInfoApexStyles = (
  arg: Theme | { theme: Theme }
): CSSObject & Partial<InfoSlotStyles> => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {},
    title: {
      color: palette.mode === "dark" ? "#b5b1d8" : "#4d4b5f",
      fontFamily: 'Ubuntu, "Helvetica Neue", Arial, sans-serif',
      fontSize: titleFontSize,
      lineHeight: 1.43,
      fontWeight: 700,
      letterSpacing: "0.5px",
      marginBottom: "2px",
    },
    subtitle: {
      color: palette.mode === "dark" ? palette.grey[500] : palette.grey[600],
      fontFamily: 'Ubuntu, "Helvetica Neue", Arial, sans-serif',
      fontSize: subtitleFontSize,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
  };
};
