import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@mui/core";

export interface InfoClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the head element. */
  head: string;
  /** Styles applied to the body element. */
  body: string;
  /** Styles applied to the eyebrow element. */
  eyebrow: string;
}

export type InfoClassKey = keyof typeof infoClasses;

export function getInfoUtilityClass(slot: string) {
  return generateUtilityClass("JunInfo", slot);
}

export const infoClasses: InfoClasses = generateUtilityClasses("JunInfo", [
  "root",
  "head",
  "body",
  "eyebrow",
]);
