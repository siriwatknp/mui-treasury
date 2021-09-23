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
    n02: true;
  }
}

export const getInfoN02Styles = (
  arg: Theme | { theme: Theme }
): CSSObject & Partial<InfoSlotStyles> => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {
      textTransform: "uppercase",
      color: palette.text.secondary,
      fontWeight: "bold",
      letterSpacing: "1px",
      fontSize: 14,
      display: "inline-block",
    },
    title: {
      fontSize: 24,
      fontWeight: 900,
      marginBottom: "0.4em",
    },
    subtitle: {
      fontSize: 18,
      color: palette.text.secondary,
    },
  };
};

export const getInfoN02Theme = (theme: Theme): Output => {
  const { eyebrow, title, subtitle } = getInfoN02Styles({ theme });
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

export const getInfoN02Variant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, title, subtitle } = getInfoN02Styles({ theme });
  return {
    props: { variant: "n02" },
    style: {
      [`& .${infoClasses.title}`]: title,
      [`& .${infoClasses.subtitle}`]: subtitle,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
