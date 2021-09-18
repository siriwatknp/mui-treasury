import { generateUtilityClass, generateUtilityClasses } from "@mui/core";
export function getCreditCardUtilityClass(slot) {
  return generateUtilityClass("JunCreditCard", slot);
}
export const creditCardClasses = generateUtilityClasses("JunCreditCard", [
  "field",
]);
