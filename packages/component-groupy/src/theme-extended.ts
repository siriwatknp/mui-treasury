import { CSSInterpolation } from "@material-ui/system";
import { GroupyClassKey, GroupyProps } from "./Groupy";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunGroupy?: {
      defaultProps?: Partial<GroupyProps>;
      styleOverrides?: Partial<OverridesStyleRules<GroupyClassKey>>;
    };
  }
}
