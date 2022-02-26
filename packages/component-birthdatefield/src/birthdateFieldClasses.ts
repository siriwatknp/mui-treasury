import { generateUtilityClass, generateUtilityClasses } from "@mui/base";

export interface BirthdateFieldClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type BirthdateFieldClassKey = keyof typeof birthdateFieldClasses;

export function getBirthdateFieldUtilityClass(slot: string) {
  return generateUtilityClass("JunBirthdateField", slot);
}

export const birthdateFieldClasses: BirthdateFieldClasses =
  generateUtilityClasses("JunBirthdateField", ["root"]);
