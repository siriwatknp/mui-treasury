import { CSSInterpolation } from "@mui/system";
import { PinInputClassKey } from "./pinInputClasses";
import { PinInputProps } from "./PinInput";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/components" {
  interface Components {
    JunPinInput?: {
      defaultProps?: Partial<PinInputProps>;
      styleOverrides?: Partial<OverridesStyleRules<PinInputClassKey>>;
    };
  }
}
