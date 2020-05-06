import HeaderEffect from "../effects/Header"
import { EdgeSidebarData, HeaderConfigMap, ResultStyle } from "../types"
import { combineBreakpoints, pickNearestBreakpoint } from "../utils"
import { isCollapsibleSidebarConfig } from "../utils/sidebarChecker"

export default (
  edgeSidebar: Pick<EdgeSidebarData, "configMapById">,
  header: HeaderConfigMap
) => {
  return {
    getResultStyle: (sidebarId: string) => {
      const result: ResultStyle = {}
      let found: boolean = false
      const configMap = edgeSidebar.configMapById[sidebarId]
      if (configMap) {
        const breakpoints = combineBreakpoints(configMap, header)
        breakpoints.forEach(bp => {
          const sidebarConfig = pickNearestBreakpoint(configMap, bp)
          const headerConfig = pickNearestBreakpoint(header, bp)
          if (sidebarConfig) {
            if (
              headerConfig &&
              HeaderEffect(headerConfig).isObjectClipped(sidebarId) &&
              isCollapsibleSidebarConfig(sidebarConfig)
            ) {
              found = true
              result[bp] = {
                height: headerConfig.initialHeight,
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
