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
    head: {
      fontSize: titleFontSize,
      fontWeight: 500,
      lineHeight: 1.2,
      marginBottom: "0px",
    },
    body: {
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
  const { eyebrow, head, body } = getInfoChatzStyles({ theme });
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

export const getInfoChatzVariant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, head, body } = getInfoChatzStyles({ theme });
  return {
    props: { variant: "chatz" },
    style: {
      [`& .${infoClasses.head}`]: head,
      [`& .${infoClasses.body}`]: body,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
