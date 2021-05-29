import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";

export function getFormAddonUtilityClass(slot: string) {
  return generateUtilityClass("JunFormAddon", slot);
}

export const formAddonClasses = generateUtilityClasses("JunFormAddon", [
  "root",
  "borderless",
]);
