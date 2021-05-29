import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";

export function getGroupyUtilityClass(slot: string) {
  return generateUtilityClass("JunGroupy", slot);
}

export const groupyClasses = generateUtilityClasses("JunGroupy", [
  "root",
  "horizontal",
  "vertical",
]);
