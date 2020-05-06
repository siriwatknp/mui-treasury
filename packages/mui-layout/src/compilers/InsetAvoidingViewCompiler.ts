import { Breakpoints } from "@material-ui/core/styles/createBreakpoints"
import { InsetSidebarConfig, InsetSidebarData, MapBreakpoint } from "../types"
import { MediaQueries } from "../utils/createBreakpointStyles"
import {
  isAbsoluteInsetSidebarConfig,
  isFixedInsetSidebarConfig,
} from "../utils/sidebarChecker"
import { createFixedInsetSidebarEffect } from "../effects/FixedInsetSidebar"
import { createAbsoluteInsetSidebarEffect } from "../effects/AbsoluteInsetSidebar"

export default (insetSidebar: Pick<InsetSidebarData, "configMapById">) => {
  const iterateBreakpoints = (
    breakpoints: Breakpoints,
    result: MediaQueries,
    configMap: MapBreakpoint<InsetSidebarConfig>
  ) => {
    let lastConfig: InsetSidebarConfig = undefined
    breakpoints.keys.forEach(bp => {
      const config = configMap[bp]
      if (config) {
        lastConfig = config
      }
      if (lastConfig && isFixedInsetSidebarConfig(lastConfig)) {
        result[breakpoints.only(bp)] = {
          ...(result[breakpoints.only(bp)] as object),
          ...createFixedInsetSidebarEffect(lastConfig).getAvoidingStyle(),
        }
      }
      if (lastConfig && isAbsoluteInsetSidebarConfig(lastConfig)) {
        result[breakpoints.only(bp)] = {
          ...(result[breakpoints.only(bp)] as object),
          ...createAbsoluteInsetSidebarEffect(lastConfig).getAvoidingStyle(),
        }
      }
    })
  }

  return {
    getMediaQueryStyle: (breakpoints: Breakpoints) => {
      const sidebarIds = Object.keys(insetSidebar.configMapById)
      let styles: MediaQueries = {}
      sidebarIds.forEach(id => {
        const configMap = insetSidebar.configMapById[id]
        iterateBreakpoints(breakpoints, styles, configMap)
      })

      return styles
    },
  }
}
