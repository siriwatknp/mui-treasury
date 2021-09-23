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
    n03: true;
  }
}

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

export const getInfoN03Theme = (theme: Theme): Output => {
  const { eyebrow, title, subtitle } = getInfoN03Styles({ theme });
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

export const getInfoN03Variant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, title, subtitle } = getInfoN03Styles({ theme });
  return {
    props: { variant: "n03" },
    style: {
      [`& .${infoClasses.title}`]: title,
      [`& .${infoClasses.subtitle}`]: subtitle,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
