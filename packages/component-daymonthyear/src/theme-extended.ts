import { CSSInterpolation } from "@material-ui/system";
import { DayMonthYearProps } from "./DayMonthYear";
import { DayMonthYearClassKey } from "./dayMonthYearClasses";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunDayMonthYear?: {
      defaultProps?: Partial<DayMonthYearProps>;
      styleOverrides?: Partial<OverridesStyleRules<DayMonthYearClassKey>>;
    };
  }
}
