import { CSSInterpolation } from "@material-ui/system";
import { NumberSpinnerClassKey, NumberSpinnerProps } from "./NumberSpinner";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunNumberSpinner?: {
      defaultProps?: Partial<NumberSpinnerProps>;
      styleOverrides?: Partial<OverridesStyleRules<NumberSpinnerClassKey>>;
    };
  }
}
