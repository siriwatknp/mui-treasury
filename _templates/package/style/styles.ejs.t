---
to: packages/<%=h.toNamePath(name)%>/src/<%= h.toName(name) %>.styles.ts
unless_exists: true
---
import "@mui-treasury/component-<%=h.extractComponentPkg(name)%>";
import { Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import { Components } from "@mui/material/styles/components";

type Output = Required<Pick<Components, "Jun<%=h.extractComponentName(name)%>">>;

export const getInfoN01Styles = (arg: Theme | { theme: Theme }): CSSObject => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {}
}

export const get<%= h.toName(name) %>Theme = (theme: Theme): Output => {
  return {
    Jun<%=h.extractComponentName(name)%>: {
      styleOverrides: {
        root: get<%=h.toName(name)%>Styles({ theme }),
      },
    },
  };
};

