import { CSSInterpolation } from "@mui/system";
import { GroupyClassKey, GroupyProps } from "./Groupy";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/components" {
  interface Components {
    JunGroupy?: {
      defaultProps?: Partial<GroupyProps>;
      styleOverrides?: Partial<OverridesStyleRules<GroupyClassKey>>;
    };
  }
}
