import { CSSInterpolation } from "@material-ui/system";
import { FlexProps } from "./Flex";
import { FlexClassKey } from "./flexClasses";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunFlex?: {
      defaultProps?: Partial<FlexProps>;
      styleOverrides?: Partial<OverridesStyleRules<FlexClassKey>>;
    };
  }
}
