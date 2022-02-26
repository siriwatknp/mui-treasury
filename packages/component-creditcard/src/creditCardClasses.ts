import { generateUtilityClass, generateUtilityClasses } from "@mui/base";

export interface CreditCardClasses {
  /** Styles applied to the field element. */
  field: string;
}

export type CreditCardClassKey = keyof typeof creditCardClasses;

export function getCreditCardUtilityClass(slot: string) {
  return generateUtilityClass("JunCreditCard", slot);
}

export const creditCardClasses: CreditCardClasses = generateUtilityClasses(
  "JunCreditCard",
  ["field"]
);
