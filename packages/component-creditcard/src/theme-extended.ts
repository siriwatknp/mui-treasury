import { CSSInterpolation } from "@mui/system";
import { CCFieldProps } from "./CCField";
import { CreditCardClassKey } from "./creditCardClasses";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/components" {
  interface Components {
    JunCreditCard?: {
      defaultProps?: Partial<CCFieldProps>;
      styleOverrides?: Partial<OverridesStyleRules<CreditCardClassKey>>;
    };
  }
}
