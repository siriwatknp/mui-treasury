import { CSSObject } from "@material-ui/system";
import { Theme } from "@material-ui/core/styles";
import { Components } from "@material-ui/core/styles/components";
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
    head: {
      fontSize: 24,
      fontWeight: 900,
      marginBottom: "0.72em",
    },
    paragraph: {
      fontSize: 16,
      color: palette.text.primary,
      lineHeight: 1.75,
    },
  };
};

export const getInfoN03Theme = (theme: Theme): Output => {
  const { eyebrow, head, paragraph } = getInfoN03Styles({ theme });
  return {
    JunInfo: {
      styleOverrides: {
        eyebrow: eyebrow,
        head: head,
        paragraph: paragraph,
      },
    },
  };
};

export const getInfoN03Variant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, head, paragraph } = getInfoN03Styles({ theme });
  return {
    props: { variant: "n03" },
    style: {
      [`& .${infoClasses.head}`]: head,
      [`& .${infoClasses.paragraph}`]: paragraph,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
