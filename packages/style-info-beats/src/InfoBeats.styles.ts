import { CSSObject } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { Components } from "@mui/material/styles/components";
import {
  infoClasses,
  InfoSlotStyles,
  InfoThemeVariant,
} from "@mui-treasury/component-info";

type Output = Required<Pick<Components, "JunInfo">>;

declare module "@mui-treasury/component-info" {
  interface InfoPropsVariantOverrides {
    beats: true;
  }
}

const titleFontSize = "1.25rem";
const subtitleFontSize = "1.25rem";
const captionFontSize = "1rem";

export const getInfoBeatsStyles = (
  arg: Theme | { theme: Theme }
): CSSObject & Partial<InfoSlotStyles> => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    title: {
      fontSize: titleFontSize,
      fontWeight: 600,
      lineHeight: 1.4,
      marginBottom: "0px",
    },
    subtitle: {
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
      ".JunInfo-subtitle + &": {
        marginTop: "0.5rem",
      },
    },
  };
};

export const getInfoBeatsTheme = (theme: Theme): Output => {
  const { eyebrow, title, subtitle } = getInfoBeatsStyles({ theme });
  return {
    JunInfo: {
      styleOverrides: {
        eyebrow: eyebrow,
        title: title,
        subtitle: subtitle,
      },
    },
  };
};

export const getInfoBeatsVariant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, title, subtitle } = getInfoBeatsStyles({ theme });
  return {
    props: { variant: "beats" },
    style: {
      [`& .${infoClasses.title}`]: title,
      [`& .${infoClasses.subtitle}`]: subtitle,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
