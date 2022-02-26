import { generateUtilityClass, generateUtilityClasses } from "@mui/base";

export function getNumberInputUtilityClass(slot: string) {
  return generateUtilityClass("JunNumberInput", slot);
}

export const numberInputClasses = generateUtilityClasses("JunNumberInput", [
  "root",
]);
