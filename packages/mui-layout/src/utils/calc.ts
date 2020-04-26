import { toValidCssValue } from "./index"

export const subtractCalc = (...args: (string | number)[]) =>
  `calc(${args.map(toValidCssValue).join(" - ")})`

export const plusCalc = (...args: (string | number)[]) =>
  `calc(${args.map(toValidCssValue).join(" + ")})`
