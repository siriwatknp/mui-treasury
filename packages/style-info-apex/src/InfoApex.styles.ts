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
    apex: true;
  }
}

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
      fontSize: titleFontSize,
      lineHeight: 1.66,
      fontWeight: 700,
      letterSpacing: "0.5px",
      marginBottom: "0px",
    },
    subtitle: {
      color: palette.mode === "dark" ? palette.grey[500] : palette.grey[600],
      fontSize: subtitleFontSize,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
  };
};

export const getInfoApexTheme = (theme: Theme): Output => {
  const { eyebrow, title, subtitle } = getInfoApexStyles({ theme });
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

export const getInfoApexVariant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, title, subtitle } = getInfoApexStyles({ theme });
  return {
    props: { variant: "apex" },
    style: {
      [`& .${infoClasses.title}`]: title,
      [`& .${infoClasses.subtitle}`]: subtitle,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
