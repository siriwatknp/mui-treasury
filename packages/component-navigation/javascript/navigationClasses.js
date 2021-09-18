import { generateUtilityClass, generateUtilityClasses } from "@mui/core";
export function getNavigationUtilityClass(slot) {
  return generateUtilityClass("JunNavigation", slot);
}
export const navigationClasses = generateUtilityClasses("JunNavigation", [
  "root",
  "item",
]);
