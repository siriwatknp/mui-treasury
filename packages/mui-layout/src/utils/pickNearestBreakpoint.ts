import { Breakpoint, keys } from "@material-ui/core/styles/createBreakpoints"
import { MapBreakpoint } from "../types"

const pickNearestBreakpoint = <T>(
  value: MapBreakpoint<T>,
  breakpoint: Breakpoint
): T => {
  const possibleBreakpoints = keys.slice(0, keys.indexOf(breakpoint) + 1)
  return possibleBreakpoints.reduceRight((result, currentBreakpoint) => {
    if (result) return result
    return value[currentBreakpoint]
  }, value[breakpoint])
}

export default pickNearestBreakpoint
