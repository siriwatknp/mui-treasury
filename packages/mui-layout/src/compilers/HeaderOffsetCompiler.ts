import { HeaderConfig, HeaderConfigMap, ResultStyle } from "../types"
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints"

export default (header: HeaderConfigMap) => {
  return {
    getResultStyle: () => {
      const result: ResultStyle = {}
      let found: boolean = false
      Object.entries(header).forEach(
        ([bp, config]: [Breakpoint, HeaderConfig]) => {
          if (config.position === "fixed" && !config.hidden) {
            found = true
            result[bp] = {
              height: config.initialHeight,
            }
          } else if (found) {
            found = false
            result[bp] = {
              height: 0,
            }
          }
        }
      )
      return result
    },
  }
}
