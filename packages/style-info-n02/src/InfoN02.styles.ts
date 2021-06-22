import { CSSObject } from "@material-ui/system";
import { Theme } from "@material-ui/core/styles";
import { Components } from "@material-ui/core/styles/components";
import {
  infoClasses,
  InfoSlotStyles,
  InfoThemeVariant,
} from "@mui-treasury/component-info";

type Output = Required<Pick<Components, "JunInfo">>;

declare module "@mui-treasury/component-info/Info" {
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
    head: {
      fontSize: 24,
      fontWeight: 900,
      marginBottom: "0.4em",
    },
    body: {
      fontSize: 18,
      color: palette.text.secondary,
    },
  };
};

export const getInfoN02Theme = (theme: Theme): Output => {
  const { eyebrow, head, body } = getInfoN02Styles({ theme });
  return {
    JunInfo: {
      styleOverrides: {
        eyebrow: eyebrow,
        head: head,
        body: body,
      },
    },
  };
};

export const getInfoN02Variant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, head, body } = getInfoN02Styles({ theme });
  return {
    props: { variant: "n02" },
    style: {
      [`& .${infoClasses.head}`]: head,
      [`& .${infoClasses.body}`]: body,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
