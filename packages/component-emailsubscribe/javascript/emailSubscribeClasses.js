import { generateUtilityClass, generateUtilityClasses } from "@mui/base";
export function getEmailSubscribeUtilityClass(slot) {
  return generateUtilityClass("JunEmailSubscribe", slot);
}
export const emailSubscribeClasses = generateUtilityClasses(
  "JunEmailSubscribe",
  ["form", "input", "submit"]
);
