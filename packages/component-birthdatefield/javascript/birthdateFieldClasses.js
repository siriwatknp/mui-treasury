import { generateUtilityClass, generateUtilityClasses } from "@mui/core";
export function getBirthdateFieldUtilityClass(slot) {
  return generateUtilityClass("JunBirthdateField", slot);
}
export const birthdateFieldClasses = generateUtilityClasses(
  "JunBirthdateField",
  ["root"]
);
