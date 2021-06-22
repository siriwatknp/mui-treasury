---
to: packages/<%=h.toNamePath(name)%>/src/<%= h.toName(name) %>.styles.ts
unless_exists: true
---
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
    <%=h.extractStyleName(name)%>: true;
  }
}

export const get<%= h.toName(name) %>Styles = (
  arg: Theme | { theme: Theme }
): CSSObject & Partial<InfoSlotStyles> => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {
      
    },
    head: {
      
    },
    paragraph: {
      
    },
  };
};

export const get<%= h.toName(name) %>Theme = (theme: Theme): Output => {
  const { eyebrow, head, paragraph } = get<%= h.toName(name) %>Styles({ theme });
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

export const get<%= h.toName(name) %>Variant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, head, paragraph } = get<%= h.toName(name) %>Styles({ theme });
  return {
    props: { variant: "<%=h.extractStyleName(name)%>" },
    style: {
      [`& .${infoClasses.head}`]: head,
      [`& .${infoClasses.paragraph}`]: paragraph,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};

