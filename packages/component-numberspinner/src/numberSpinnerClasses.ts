import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@mui/core";

export function getNumberSpinnerUtilityClass(slot: string) {
  return generateUtilityClass("JunNumberSpinner", slot);
}

export const numberSpinnerClasses = generateUtilityClasses("JunNumberSpinner", [
  "root",
]);
