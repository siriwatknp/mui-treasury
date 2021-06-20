import { InfoThemeVariant } from "@mui-treasury/component-info";
import { Theme } from "@material-ui/core/styles";
import { Components } from "@material-ui/core/styles/components";
import { infoClasses, InfoSlotStyles } from "@mui-treasury/component-info";
import { CSSProperties } from "react";

type Output = Required<Pick<Components, "JunInfo">>;

declare module "@mui-treasury/component-info" {
  interface InfoPropsVariantOverrides {
    n01: true;
  }
}

export const getInfoN01Styles = (
  arg: Theme | { theme: Theme }
): CSSProperties & InfoSlotStyles => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    $eyebrow: {
      textTransform: "uppercase",
      color: palette.text.secondary,
      letterSpacing: "1px",
      fontSize: 12,
      marginBottom: "0.875em",
      display: "inline-block",
    },
    $head: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: "0.4em",
    },
    $paragraph: {
      fontSize: 16,
      color:
        palette.mode === "dark" ? "rgba(255,255,255,0.72)" : "rgba(0,0,0,0.72)",
    },
  };
};

export const getInfoN01Theme = (theme: Theme): Output => {
  const { $eyebrow, $head, $paragraph } = getInfoN01Styles({ theme });
  return {
    JunInfo: {
      styleOverrides: {
        eyebrow: $eyebrow,
        head: $head,
        paragraph: $paragraph,
      },
    },
  };
};

export const getInfoN01Variant = (theme: Theme): InfoThemeVariant => {
  const { $eyebrow, $head, $paragraph } = getInfoN01Styles({ theme });
  return {
    props: { variant: "n01" },
    style: {
      [`& .${infoClasses.head}`]: $head,
      [`& .${infoClasses.paragraph}`]: $paragraph,
      [`& .${infoClasses.eyebrow}`]: $eyebrow,
    },
  };
};
