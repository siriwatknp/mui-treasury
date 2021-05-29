---
to: packages/<%=h.toNamePath(name)%>/src/theme-extended.ts
unless_exists: true
---
import { StyleRules } from "@material-ui/core/styles";
import { <%= Name=h.toName(name) %>ClassKey, <%= Name %>Props } from "./<%= Name %>";

declare module "@material-ui/core/styles/components" {
  interface Components {
    Jun<%= Name %>?: {
      defaultProps?: Partial<<%= Name %>Props>;
      styleOverrides?: Partial<StyleRules<<%= Name %>ClassKey>>;
    };
  }
}

