import { generateUtilityClass, generateUtilityClasses } from "@mui/base";
export function getDayMonthYearUtilityClass(slot) {
  return generateUtilityClass("JunDayMonthYear", slot);
}
export const dayMonthYearClasses = generateUtilityClasses("JunDayMonthYear", [
  "root",
]);
