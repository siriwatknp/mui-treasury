import type { Theme, CSSObject } from "@mui/material/styles";
import type { InfoSlotStyles } from "../info-basic/info";

const titleFontSize = "0.875rem";
const subtitleFontSize = "0.75rem";

export const getInfoApexStyles = (
  arg: Theme | { theme: Theme },
): CSSObject & Partial<InfoSlotStyles> => {
  const theme = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {},
    title: {
      color: "#4d4b5f",
      fontFamily: 'Ubuntu, "Helvetica Neue", Arial, sans-serif',
      fontSize: titleFontSize,
      lineHeight: 1.43,
      fontWeight: 700,
      letterSpacing: "0.5px",
      marginBottom: "2px",
      ...theme.applyStyles("dark", {
        color: "#b5b1d8",
      }),
    },
    subtitle: {
      color: (theme.vars || theme).palette.grey[600],
      fontFamily: 'Ubuntu, "Helvetica Neue", Arial, sans-serif',
      fontSize: subtitleFontSize,
      lineHeight: 1.4,
      letterSpacing: 0,
      ...theme.applyStyles("dark", {
        color: (theme.vars || theme).palette.grey[500],
      }),
    },
  };
};
