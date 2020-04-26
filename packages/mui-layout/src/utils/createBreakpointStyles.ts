import {
  Breakpoint,
  Breakpoints,
} from "@material-ui/core/styles/createBreakpoints"
import { Dictionary, ResultStyle } from "../types"

export type Value = Dictionary<string | number>
export type MediaQueries = Dictionary<Value | string | number>

export default (breakpointsObject: ResultStyle, breakpoints: Breakpoints) => {
  const entries = Object.entries(breakpointsObject)
  let mediaQueries: MediaQueries = {}
  entries.forEach(([key, value]: [Breakpoint, Value]) => {
    if (key === "xs") {
      mediaQueries = { ...mediaQueries, ...value }
    } else {
      mediaQueries[breakpoints.up(key)] = value
    }
  })

  return mediaQueries
}
