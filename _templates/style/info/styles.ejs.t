---
to: packages/<%=h.toNamePath(name)%>/src/<%= h.toName(name) %>.styles.ts
unless_exists: true
---
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
    title: {
      
    },
    subtitle: {
      
    },
  };
};

export const get<%= h.toName(name) %>Theme = (theme: Theme): Output => {
  const { eyebrow, title, subtitle } = get<%= h.toName(name) %>Styles({ theme });
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

export const get<%= h.toName(name) %>Variant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, title, subtitle } = get<%= h.toName(name) %>Styles({ theme });
  return {
    props: { variant: "<%=h.extractStyleName(name)%>" },
    style: {
      [`& .${infoClasses.title}`]: title,
      [`& .${infoClasses.subtitle}`]: subtitle,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};

