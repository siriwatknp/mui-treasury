import { CSSInterpolation } from "@material-ui/system";
import { NumberInputClassKey, NumberInputProps } from "./NumberInput";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunNumberInput?: {
      defaultProps?: Partial<NumberInputProps>;
      styleOverrides?: Partial<OverridesStyleRules<NumberInputClassKey>>;
    };
  }
}
