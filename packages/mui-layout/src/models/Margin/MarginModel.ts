import { isNil, toValidCssValue } from "../../utils"
import { MarginStyle, IMargin } from "../../types"

export const getCssMargin = (m?: string | number) => {
  if (typeof m === "string") {
    return `calc(${m})`
  }
  return m
}

const transformMargin = (
  m: MarginStyle,
  fn: (val: string | number) => string | number = val => val
) => ({
  ...(!isNil(m.marginLeft) && {
    marginLeft: fn(m.marginLeft),
  }),
  ...(!isNil(m.marginRight) && {
    marginRight: fn(m.marginRight),
  }),
})

const getCssValue = (v1: string | number, v2: string | number) => {
  if (isNil(v1)) return v2
  if (isNil(v2)) return v1
  return `${toValidCssValue(v1)} + ${toValidCssValue(v2)}`
}

export const combineMargin = (m1: MarginStyle, m2: MarginStyle) => {
  if (!m1 && !m2) return undefined
  if (!m1 && m2) return m2
  if (m1 && !m2) return m1
  const marginLeft = getCssValue(m1.marginLeft, m2.marginLeft)
  const marginRight = getCssValue(m1.marginRight, m2.marginRight)
  return transformMargin({ marginLeft, marginRight })
}

const createMarginInterface = (value: MarginStyle): IMargin => {
  return {
    value,
    combine: m => createMarginInterface(combineMargin(value, m.value)),
    getStyle: () => transformMargin(value, getCssMargin),
  }
}

export default createMarginInterface
