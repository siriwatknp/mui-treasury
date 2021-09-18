import { generateUtilityClass, generateUtilityClasses } from "@mui/core";
export function getGroupyUtilityClass(slot) {
  return generateUtilityClass("JunGroupy", slot);
}
export const groupyClasses = generateUtilityClasses("JunGroupy", [
  "root",
  "horizontal",
  "vertical",
]);
