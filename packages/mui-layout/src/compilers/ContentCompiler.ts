import { Breakpoint } from "@material-ui/core/styles/createBreakpoints"
import EdgeSidebarEffects from "../effects/EdgeSidebars"
import createListEffect from "../effects/SidebarList/SidebarListEffect"
import { sortBreakpoints } from "../utils/createHiddenStyles"
import { EdgeSidebarData, ResultStyle, State } from "../types"

export default (state: State, edgeSidebar: EdgeSidebarData) => {
  return {
    getResultStyle: (id: string): ResultStyle => {
      const result: ResultStyle = {}
      const breakpoints = sortBreakpoints(
        Object.keys(edgeSidebar.configMap) as Breakpoint[]
      )
      EdgeSidebarEffects(state, edgeSidebar).iterateBreakpointEffects(
        breakpoints,
        (bp, effects) => {
          const { marginStyle, widthStyle } = createListEffect(effects, id)
          result[bp] = { ...widthStyle, ...marginStyle }
        }
      )
      return result
    },
  }
}
