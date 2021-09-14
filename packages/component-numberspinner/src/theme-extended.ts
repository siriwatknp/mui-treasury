import { CSSInterpolation } from "@mui/system";
import { NumberSpinnerClassKey, NumberSpinnerProps } from "./NumberSpinner";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/components" {
  interface Components {
    JunNumberSpinner?: {
      defaultProps?: Partial<NumberSpinnerProps>;
      styleOverrides?: Partial<OverridesStyleRules<NumberSpinnerClassKey>>;
    };
  }
}
