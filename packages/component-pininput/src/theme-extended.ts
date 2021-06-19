import { CSSInterpolation } from "@material-ui/system";
import { PinInputClassKey } from "./pinInputClasses";
import { PinInputProps } from "./PinInput";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunPinInput?: {
      defaultProps?: Partial<PinInputProps>;
      styleOverrides?: Partial<OverridesStyleRules<PinInputClassKey>>;
    };
  }
}
