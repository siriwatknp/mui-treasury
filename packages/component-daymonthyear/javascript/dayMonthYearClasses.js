import { generateUtilityClass, generateUtilityClasses } from "@mui/core";
export function getDayMonthYearUtilityClass(slot) {
  return generateUtilityClass("JunDayMonthYear", slot);
}
export const dayMonthYearClasses = generateUtilityClasses("JunDayMonthYear", [
  "root",
]);
