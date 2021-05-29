import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";

export function getNumberSpinnerUtilityClass(slot: string) {
  return generateUtilityClass("JunNumberSpinner", slot);
}

export const numberSpinnerClasses = generateUtilityClasses("JunNumberSpinner", [
  "root",
]);
