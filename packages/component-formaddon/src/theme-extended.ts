import { StyleRules } from "@material-ui/core/styles";
import { FormAddonClassKey, FormAddonProps } from "./FormAddon";

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunFormAddon?: {
      defaultProps?: Partial<FormAddonProps>;
      styleOverrides?: Partial<StyleRules<FormAddonClassKey>>;
    };
  }
}
