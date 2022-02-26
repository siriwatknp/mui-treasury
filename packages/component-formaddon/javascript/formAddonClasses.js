import { generateUtilityClass, generateUtilityClasses } from "@mui/base";
export function getFormAddonUtilityClass(slot) {
  return generateUtilityClass("JunFormAddon", slot);
}
export const formAddonClasses = generateUtilityClasses("JunFormAddon", [
  "root",
  "borderless",
]);
