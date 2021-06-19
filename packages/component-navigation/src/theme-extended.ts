import { CSSInterpolation } from "@material-ui/system";
import { NavigationClassKey, NavigationProps } from "./Navigation";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunNavigation?: {
      defaultProps?: Partial<NavigationProps>;
      styleOverrides?: Partial<OverridesStyleRules<NavigationClassKey>>;
    };
  }
}
