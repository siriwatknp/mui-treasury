import generateUtilityClass from "@mui/material/generateUtilityClass";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";

export function getNavigationUtilityClass(slot: string) {
  return generateUtilityClass("JunNavigation", slot);
}

export const navigationClasses = generateUtilityClasses("JunNavigation", [
  "root",
  "item",
]);
