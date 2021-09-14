import { CSSInterpolation } from "@mui/system";
import { NumberInputClassKey, NumberInputProps } from "./NumberInput";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/components" {
  interface Components {
    JunNumberInput?: {
      defaultProps?: Partial<NumberInputProps>;
      styleOverrides?: Partial<OverridesStyleRules<NumberInputClassKey>>;
    };
  }
}
