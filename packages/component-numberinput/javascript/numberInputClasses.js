import { generateUtilityClass, generateUtilityClasses } from "@mui/core";
export function getNumberInputUtilityClass(slot) {
  return generateUtilityClass("JunNumberInput", slot);
}
export const numberInputClasses = generateUtilityClasses("JunNumberInput", [
  "root",
]);
