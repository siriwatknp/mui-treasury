import { generateUtilityClass, generateUtilityClasses } from "@mui/base";
export function getGroupyUtilityClass(slot) {
  return generateUtilityClass("JunGroupy", slot);
}
export const groupyClasses = generateUtilityClasses("JunGroupy", [
  "root",
  "horizontal",
  "vertical",
]);
