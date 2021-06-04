import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";

export function getNavigationUtilityClass(slot: string) {
  return generateUtilityClass("JunNavigation", slot);
}

export const navigationClasses = generateUtilityClasses("JunNavigation", [
  "root",
  "item",
  "itemActive",
]);
