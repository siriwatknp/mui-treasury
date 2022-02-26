import { generateUtilityClass, generateUtilityClasses } from "@mui/base";
export function getPinInputUtilityClass(slot) {
  return generateUtilityClass("JunPinInput", slot);
}
export const pinInputClasses = generateUtilityClasses("JunPinInput", ["root"]);
