---
to: packages/<%=h.toNamePath(name)%>/src/theme-extended.ts
unless_exists: true
---
import { CSSInterpolation } from "@material-ui/system";
import { <%= Name=h.toName(name) %>ClassKey, <%= Name %>Props } from "./<%= Name %>";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/components" {
  interface Components {
    Jun<%= Name %>?: {
      defaultProps?: Partial<<%= Name %>Props>;
      styleOverrides?: Partial<CSSInterpolation<<%= Name %>ClassKey>>;
    };
  }
}

