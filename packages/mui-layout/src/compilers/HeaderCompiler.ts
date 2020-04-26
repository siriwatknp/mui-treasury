import { EdgeSidebarData, HeaderConfigMap, ResultStyle, State } from "../types"
import EdgeSidebars from "../effects/EdgeSidebars"
import createHeaderModel from "../models/Header/HeaderModel"
import { combineBreakpoints, pickNearestBreakpoint } from "../utils"

export default (
  state: State,
  header: HeaderConfigMap,
  edgeSidebar: EdgeSidebarData
) => {
  return {
    getResultStyle: (): ResultStyle => {
      const result: ResultStyle = {}
      const breakpoints = combineBreakpoints(header, edgeSidebar.configMap)
      EdgeSidebars(state, edgeSidebar).iterateBreakpointEffects(
        breakpoints,
        (bp, effects) => {
          const headerConfig = pickNearestBreakpoint(header, bp)
          if (!headerConfig) {
            throw new Error(
              `Cannot find HeaderConfig at breakpoint: ${bp}, please provide config at least on "xs" breakpoint`
            )
          }

          result[bp] = createHeaderModel(headerConfig, effects).getStyle()
        }
      )
      return result
    },
  }
}
