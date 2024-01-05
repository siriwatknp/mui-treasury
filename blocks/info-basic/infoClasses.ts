import generateUtilityClass from "@mui/material/generateUtilityClass";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";

export interface InfoClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the title element. */
  title: string;
  /** Styles applied to the subtitle element. */
  subtitle: string;
  /** Styles applied to the caption element. */
  caption: string;
  /** Styles applied to the eyebrow element. */
  eyebrow: string;
}

export type InfoClassKey = keyof typeof infoClasses;

export function getInfoUtilityClass(slot: string) {
  return generateUtilityClass("JunInfo", slot);
}

export const infoClasses: InfoClasses = generateUtilityClasses("JunInfo", [
  "root",
  "title",
  "subtitle",
  "caption",
  "eyebrow",
]);
