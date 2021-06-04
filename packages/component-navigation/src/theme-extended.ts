import { StyleRules } from "@material-ui/core/styles";
import { NavigationClassKey, NavigationProps } from "./Navigation";

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunNavigation?: {
      defaultProps?: Partial<NavigationProps>;
      styleOverrides?: Partial<StyleRules<NavigationClassKey>>;
    };
  }
}
