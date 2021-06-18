import { Breakpoint } from "@material-ui/system";
import { Responsive } from "./types";

export const toResponsiveCssValue = (value: Responsive<string | number>) => {
  const result: Responsive<string> = {};
  for (const key in value) {
    const bp = key as Breakpoint;
    result[bp] = toValidCssValue(value[bp] as string | number);
  }
  return result;
};

export const toValidCssValue = (value: string | number) => {
  if (typeof value === "number") return `${value}px`;
  return value;
};
