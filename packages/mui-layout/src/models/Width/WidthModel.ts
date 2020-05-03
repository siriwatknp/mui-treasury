import { isNilOrEmpty, toValidCssValue } from "../../utils"
import { IWidth } from "../../types"

export const getCssWidth = (externalGap?: string | number) => {
  if (typeof externalGap === "string") {
    return `calc(100% - (${externalGap}))`
  }
  if (typeof externalGap === "number") {
    if (externalGap === 0) return "100%"
    return `calc(100% - ${externalGap}px)`
  }
  return "auto"
}

export const sumExternalGap = (
  a?: string | number | null,
  b?: string | number | null
): number | string => {
  if (isNilOrEmpty(a) && isNilOrEmpty(b)) return undefined
  if (a === 0 && b === 0) return 0
  if (!a && b) return b;
  if (a && !b) return a;
  return `${toValidCssValue(a)} + ${toValidCssValue(b)}`
}

const createWidthInterface = (externalGap: string | number): IWidth => {
  return {
    value: externalGap,
    combine: w => createWidthInterface(sumExternalGap(externalGap, w.value)),
    getStyle: () => ({
      width: getCssWidth(externalGap),
    }),
  }
}

export default createWidthInterface
