import { generateUtilityClass, generateUtilityClasses } from "@mui/base";

export function getNumberSpinnerUtilityClass(slot: string) {
  return generateUtilityClass("JunNumberSpinner", slot);
}

export const numberSpinnerClasses = generateUtilityClasses("JunNumberSpinner", [
  "root",
]);
