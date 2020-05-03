import { keys, Breakpoints, Breakpoint } from "@material-ui/core/styles/createBreakpoints"

export default (width: number | undefined, breakpoints: Breakpoints): Breakpoint => {
  if (!width) return undefined
  let screen = ""
  let found = false
  const newKeys = [...keys]
  newKeys.reverse().forEach(breakpoint => {
    if (width >= breakpoints.values[breakpoint] && !found) {
      screen = breakpoint
      found = true
    }
  })
  return screen as Breakpoint
}
