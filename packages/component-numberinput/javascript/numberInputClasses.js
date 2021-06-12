import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";
export function getNumberInputUtilityClass(slot) {
  return generateUtilityClass("JunNumberInput", slot);
}
export const numberInputClasses = generateUtilityClasses("JunNumberInput", [
  "root",
]);
