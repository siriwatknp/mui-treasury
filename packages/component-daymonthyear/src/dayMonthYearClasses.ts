import { generateUtilityClass, generateUtilityClasses } from "@mui/base";

export interface DayMonthYearClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type DayMonthYearClassKey = keyof typeof dayMonthYearClasses;

export function getDayMonthYearUtilityClass(slot: string) {
  return generateUtilityClass("JunDayMonthYear", slot);
}

export const dayMonthYearClasses: DayMonthYearClasses = generateUtilityClasses(
  "JunDayMonthYear",
  ["root"]
);
