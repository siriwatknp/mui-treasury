import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";
export function getGroupyUtilityClass(slot) {
  return generateUtilityClass("JunGroupy", slot);
}
export const groupyClasses = generateUtilityClasses("JunGroupy", [
  "root",
  "horizontal",
  "vertical",
]);
