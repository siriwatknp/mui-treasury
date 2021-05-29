import { isNil } from "../utils/isNil";
import { toValidCssValue } from "../utils/toValidCssValue";

export interface IMargin {
  value: MarginStyle;
  getStyle: () => MarginStyle;
  combine: (m: IMargin) => IMargin;
}

export type MarginStyle = {
  marginLeft?: string | number;
  marginRight?: string | number;
};

export const getCssMargin = (m?: string | number) => {
  if (typeof m === "string") {
    return `calc(${m})`;
  }
  return m;
};

const transformMargin = (
  m: MarginStyle,
  fn: (val: string | number | undefined) => string | number | undefined = (
    val
  ) => val
) => ({
  ...(!isNil(m.marginLeft) && {
    marginLeft: fn(m.marginLeft),
  }),
  ...(!isNil(m.marginRight) && {
    marginRight: fn(m.marginRight),
  }),
});

const getCssValue = (
  v1: string | number | undefined,
  v2: string | number | undefined
) => {
  if (isNil(v1)) return v2;
  if (isNil(v2)) return v1;
  return `${toValidCssValue(v1)} + ${toValidCssValue(v2)}`;
};

export const combineMargin = (
  m1: MarginStyle | undefined,
  m2: MarginStyle | undefined
) => {
  if (!m1 && m2) return m2;
  if (m1 && !m2) return m1;
  const marginLeft = getCssValue(m1?.marginLeft, m2?.marginLeft);
  const marginRight = getCssValue(m1?.marginRight, m2?.marginRight);
  return transformMargin({ marginLeft, marginRight });
};

export const createMarginInterface = (value: MarginStyle): IMargin => {
  return {
    value,
    combine: (m) => createMarginInterface(combineMargin(value, m.value)),
    getStyle: () => transformMargin(value, getCssMargin),
  };
};
