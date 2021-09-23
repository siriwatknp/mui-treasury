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
    chatz: true;
  }
}

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
      fontSize: titleFontSize,
      fontWeight: 500,
      lineHeight: 1.2,
      marginBottom: "0px",
    },
    subtitle: {
      color:
        palette.mode === "dark" ? palette.grey["500"] : palette.grey["700"],
      fontSize: subtitleFontSize,
      lineHeight: 1.6,
      marginBottom: "0.25rem",
    },
    eyebrow: {
      color: palette.grey["600"],
      fontSize: captionFontSize,
      lineHeight: 1.4,
    },
  };
};

export const getInfoChatzTheme = (theme: Theme): Output => {
  const { eyebrow, title, subtitle } = getInfoChatzStyles({ theme });
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

export const getInfoChatzVariant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, title, subtitle } = getInfoChatzStyles({ theme });
  return {
    props: { variant: "chatz" },
    style: {
      [`& .${infoClasses.title}`]: title,
      [`& .${infoClasses.subtitle}`]: subtitle,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};