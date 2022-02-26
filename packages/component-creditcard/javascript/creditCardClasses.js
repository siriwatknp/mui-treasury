import { generateUtilityClass, generateUtilityClasses } from "@mui/base";
export function getCreditCardUtilityClass(slot) {
  return generateUtilityClass("JunCreditCard", slot);
}
export const creditCardClasses = generateUtilityClasses("JunCreditCard", [
  "field",
]);
