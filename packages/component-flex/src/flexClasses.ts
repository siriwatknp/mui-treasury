import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";

export interface FlexClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type FlexClassKey = keyof typeof flexClasses;

export function getFlexUtilityClass(slot: string) {
  return generateUtilityClass("JunFlex", slot);
}

export const flexClasses: FlexClasses = generateUtilityClasses("JunFlex", [
  "root",
]);
