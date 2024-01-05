import { Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import { InfoSlotStyles } from "../info-basic";

const titleFontSize = "1rem";
const subtitleFontSize = "0.875rem";
const captionFontSize = "0.75rem";

export const getInfoChatzStyles = (
  arg: Theme | { theme: Theme }
): CSSObject & Partial<InfoSlotStyles> => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    root: {
      "& + &": {
        marginTop: "1rem",
      },
    },
    title: {
      fontFamily: 'Maven Pro, "Helvetica Neue", Arial, sans-serif',
      fontSize: titleFontSize,
      fontWeight: 500,
      lineHeight: 1.2,
      marginBottom: "0px",
    },
    subtitle: {
      color:
        palette.mode === "dark" ? palette.grey["500"] : palette.grey["700"],
      fontFamily: 'Maven Pro, "Helvetica Neue", Arial, sans-serif',
      fontSize: subtitleFontSize,
      lineHeight: 1.6,
      marginBottom: "0.25rem",
    },
    eyebrow: {
      color: palette.grey["600"],
      fontFamily: 'Maven Pro, "Helvetica Neue", Arial, sans-serif',
      fontSize: captionFontSize,
      lineHeight: 1.4,
    },
  };
};
