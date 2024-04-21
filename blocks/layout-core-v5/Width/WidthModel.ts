import { isNilOrEmpty } from "../utils/isNilOrEmpty";
import { toValidCssValue } from "../utils/toValidCssValue";

export type WidthStyle = {
  width: string | number;
};

export interface IWidth {
  value: number | string | undefined;
  getStyle: () => WidthStyle;
  combine: (w: IWidth) => IWidth;
}

export const getCssWidth = (externalGap?: string | number) => {
  if (typeof externalGap === "string") {
    return `calc(100% - (${externalGap}))`;
  }
  if (typeof externalGap === "number") {
    if (externalGap === 0) return "100%";
    return `calc(100% - ${externalGap}px)`;
  }
  return "auto";
};

export const sumExternalGap = (
  a?: string | number | null,
  b?: string | number | null
) => {
  if (isNilOrEmpty(a) && isNilOrEmpty(b)) return undefined;
  if (a === 0 && b === 0) return 0;
  if (!a && !isNilOrEmpty(b)) return b;
  if (!isNilOrEmpty(a) && !b) return a;
  return `${toValidCssValue(a!)} + ${toValidCssValue(b!)}`;
};

export const createWidthInterface = (externalGap?: string | number): IWidth => {
  return {
    value: externalGap,
    combine: (w) => createWidthInterface(sumExternalGap(externalGap, w.value)),
    getStyle: () => ({
      width: getCssWidth(externalGap),
    }),
  };
};
