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
    n01: true;
  }
}

export const getInfoN01Styles = (
  arg: Theme | { theme: Theme }
): CSSObject & Partial<InfoSlotStyles> => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {
      textTransform: "uppercase",
      color: palette.text.secondary,
      letterSpacing: "1px",
      fontSize: 12,
      marginBottom: "0.875em",
      display: "inline-block",
    },
    head: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: "0.4em",
    },
    body: {
      fontSize: 16,
      color:
        palette.mode === "dark" ? "rgba(255,255,255,0.72)" : "rgba(0,0,0,0.72)",
    },
  };
};

export const getInfoN01Theme = (theme: Theme): Output => {
  const { eyebrow, head, body } = getInfoN01Styles({ theme });
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

export const getInfoN01Variant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, head, body } = getInfoN01Styles({ theme });
  return {
    props: { variant: "n01" },
    style: {
      [`& .${infoClasses.head}`]: head,
      [`& .${infoClasses.body}`]: body,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
