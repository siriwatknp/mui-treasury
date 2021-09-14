import { CSSInterpolation } from "@mui/system";
import { DayMonthYearProps } from "./DayMonthYear";
import { DayMonthYearClassKey } from "./dayMonthYearClasses";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/components" {
  interface Components {
    JunDayMonthYear?: {
      defaultProps?: Partial<DayMonthYearProps>;
      styleOverrides?: Partial<OverridesStyleRules<DayMonthYearClassKey>>;
    };
  }
}
