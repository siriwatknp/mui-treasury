import { generateUtilityClass, generateUtilityClasses } from "@mui/core";
export function getEmailSubscribeUtilityClass(slot) {
  return generateUtilityClass("JunEmailSubscribe", slot);
}
export const emailSubscribeClasses = generateUtilityClasses(
  "JunEmailSubscribe",
  ["form", "input", "submit"]
);
