import { generateUtilityClass, generateUtilityClasses } from "@mui/base";
export function getInfoUtilityClass(slot) {
  return generateUtilityClass("JunInfo", slot);
}
export const infoClasses = generateUtilityClasses("JunInfo", [
  "root",
  "head",
  "body",
  "eyebrow",
]);
