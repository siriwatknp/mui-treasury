import { generateUtilityClass, generateUtilityClasses } from "@mui/core";
export function getInfoUtilityClass(slot) {
  return generateUtilityClass("JunInfo", slot);
}
export const infoClasses = generateUtilityClasses("JunInfo", [
  "root",
  "head",
  "body",
  "eyebrow",
]);
