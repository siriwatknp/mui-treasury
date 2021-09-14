import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@mui/core";

export function getNumberInputUtilityClass(slot: string) {
  return generateUtilityClass("JunNumberInput", slot);
}

export const numberInputClasses = generateUtilityClasses("JunNumberInput", [
  "root",
]);
