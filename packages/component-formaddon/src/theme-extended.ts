import { CSSInterpolation } from "@mui/system";
import { FormAddonClassKey, FormAddonProps } from "./FormAddon";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/components" {
  interface Components {
    JunFormAddon?: {
      defaultProps?: Partial<FormAddonProps>;
      styleOverrides?: Partial<OverridesStyleRules<FormAddonClassKey>>;
    };
  }
}
