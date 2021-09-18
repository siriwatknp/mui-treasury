import { generateUtilityClass, generateUtilityClasses } from "@mui/core";
export function getPinInputUtilityClass(slot) {
  return generateUtilityClass("JunPinInput", slot);
}
export const pinInputClasses = generateUtilityClasses("JunPinInput", ["root"]);
