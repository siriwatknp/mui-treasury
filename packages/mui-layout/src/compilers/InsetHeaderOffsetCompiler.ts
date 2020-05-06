import { HeaderConfigMap, InsetSidebarData, ResultStyle } from "../types"
import { combineBreakpoints, pickNearestBreakpoint } from "../utils"
import { isFixedInsetSidebarConfig } from "../utils/sidebarChecker"

export default (
  insetSidebar: Pick<InsetSidebarData, "configMapById">,
  header: HeaderConfigMap
) => {
  return {
    getResultStyle: (sidebarId: string) => {
      const result: ResultStyle = {}
      let found: boolean = false
      const configMap = insetSidebar.configMapById[sidebarId]
      if (configMap) {
        const breakpoints = combineBreakpoints(configMap, header)
        breakpoints.forEach(bp => {
          const config = pickNearestBreakpoint(configMap, bp)
          if (config) {
            if (isFixedInsetSidebarConfig(config)) {
              found = true
              result[bp] = {
                height: pickNearestBreakpoint(header, bp).initialHeight,
              }
            } else if (found) {
              found = false
              result[bp] = {
                height: 0,
              }
            }
          }
        })
      }
      return result
    },
  }
}
