import { CSSInterpolation } from "@mui/system";
import { BirthdateFieldClassKey } from "./birthdateFieldClasses";
import { BirthdateFieldProps } from "./BirthdateField";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/components" {
  interface Components {
    JunBirthdateField?: {
      defaultProps?: Partial<BirthdateFieldProps>;
      styleOverrides?: Partial<OverridesStyleRules<BirthdateFieldClassKey>>;
    };
  }
}
