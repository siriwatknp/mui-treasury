import { toValidCssValue } from "./toValidCssValue";

type ValidItems = (string | number)[];

export const subtractCalc = (...args: (string | number | undefined)[]) => {
  const valid = args.filter((v) => !!v);
  if (!valid.length) return "0px";
  return valid.length === 1
    ? toValidCssValue(valid[0]!)
    : `calc(${(args.filter((item) => !!item) as ValidItems)
        .map(toValidCssValue)
        .join(" - ")})`;
};

export const plusCalc = (...args: (string | number | undefined)[]) => {
  const valid = args.filter((v) => !!v);
  if (!valid.length) return "0px";
  return valid.length === 1
    ? toValidCssValue(valid[0]!)
    : `calc(${(args.filter((item) => !!item) as ValidItems)
        .map(toValidCssValue)
        .join(" + ")})`;
};
