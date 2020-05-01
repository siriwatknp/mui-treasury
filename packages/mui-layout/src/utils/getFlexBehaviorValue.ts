import { DrawerAnchor } from "../types"

export const attachOperator = (value: string | number, operator: 1 | -1) => {
  if (typeof value === "number") {
    return operator * value
  }
  if (typeof value === "string") {
    if (operator === 1) {
      return value
    }
    if (operator === -1) {
      return `-${value}`
    }
  }
}

const getFlexBehaviorValue = (
  anchor: DrawerAnchor,
  currentWidth: string | number
) => {
  if (anchor === "left") return attachOperator(currentWidth, 1)
  if (anchor === "right") return attachOperator(currentWidth, -1)
  return 0
}
export default getFlexBehaviorValue
