import { CSSInterpolation } from "@material-ui/system";
import { FormAddonClassKey, FormAddonProps } from "./FormAddon";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunFormAddon?: {
      defaultProps?: Partial<FormAddonProps>;
      styleOverrides?: Partial<OverridesStyleRules<FormAddonClassKey>>;
    };
  }
}
