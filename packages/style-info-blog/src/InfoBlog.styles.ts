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
    blog: true;
  }
}

export const getInfoBlogStyles = (
  arg: Theme | { theme: Theme }
): CSSObject & Partial<InfoSlotStyles> => {
  const { spacing } = "theme" in arg ? arg.theme : arg;
  const family =
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";
  return {
    eyebrow: {
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontSize: 12,
      marginBottom: "0.875em",
      display: "inline-block",
    },
    head: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: "0.35em",
      fontFamily: family,
    },
    paragraph: {
      marginBottom: spacing(2),
      fontSize: "0.8rem",
      letterSpacing: "0.00938em",
      fontFamily: family,
    },
  };
};

export const getInfoBlogTheme = (theme: Theme): Output => {
  const { eyebrow, head, paragraph } = getInfoBlogStyles({ theme });
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

export const getInfoBlogVariant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, head, paragraph } = getInfoBlogStyles({ theme });
  return {
    props: { variant: "blog" },
    style: {
      [`& .${infoClasses.head}`]: head,
      [`& .${infoClasses.paragraph}`]: paragraph,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
