import { generateUtilityClass, generateUtilityClasses } from "@mui/base";
export function getNumberInputUtilityClass(slot) {
  return generateUtilityClass("JunNumberInput", slot);
}
export const numberInputClasses = generateUtilityClasses("JunNumberInput", [
  "root",
]);
