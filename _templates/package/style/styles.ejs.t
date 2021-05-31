---
to: packages/<%=h.toNamePath(name)%>/src/<%= h.toName(name) %>.styles.ts
unless_exists: true
---
import "@mui-treasury/component-<%=h.extractComponentPkg(name)%>";
import { Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import { Components } from "@material-ui/core/styles/components";

type Output = Required<Pick<Components, "Jun<%=h.extractComponentName(name)%>">>;

export const get<%= h.toName(name) %>Styles = ({
  theme: { palette },
}: {
  theme: Theme;
}): CSSProperties => ({
  
});

export const get<%= h.toName(name) %>Theme = (theme: Theme): Output => {
  return {
    Jun<%=h.extractComponentName(name)%>: {
      styleOverrides: {
        root: get<%=h.toName(name)%>Styles({ theme }),
      },
    },
  };
};

