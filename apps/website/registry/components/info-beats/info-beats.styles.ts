import type { CSSObject } from "@mui/material/styles";
import type { InfoSlotStyles } from "../info-basic/info";
import { infoClasses } from "../info-basic/info-classes";

const titleFontSize = "1.25rem";
const subtitleFontSize = "1.25rem";
const captionFontSize = "1rem";

export const getInfoBeatsStyles = (): CSSObject & Partial<InfoSlotStyles> => {
  return {
    title: {
      fontFamily: 'Spartan, "Helvetica Neue", Arial, sans-serif',
      fontSize: titleFontSize,
      fontWeight: 600,
      lineHeight: 1.4,
      marginBottom: "0px",
    },
    subtitle: {
      fontFamily: 'Spartan, "Helvetica Neue", Arial, sans-serif',
      fontSize: subtitleFontSize,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    eyebrow: {
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
      color: "#d57b7b",
      fontSize: captionFontSize,
      textTransform: "initial",
      lineHeight: 1.5,
      [`.${infoClasses.subtitle} + &`]: {
        marginTop: "0.5rem",
      },
    },
  };
};
