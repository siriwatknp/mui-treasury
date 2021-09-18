import { generateUtilityClass, generateUtilityClasses } from "@mui/core";
export function getFormAddonUtilityClass(slot) {
  return generateUtilityClass("JunFormAddon", slot);
}
export const formAddonClasses = generateUtilityClasses("JunFormAddon", [
  "root",
  "borderless",
]);
