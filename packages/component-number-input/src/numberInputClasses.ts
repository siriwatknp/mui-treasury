import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";

export function getNumberInputUtilityClass(slot: string) {
  return generateUtilityClass("JunNumberInput", slot);
}

export const numberInputClasses = generateUtilityClasses("JunNumberInput", [
  "root",
]);
