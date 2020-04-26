import { Breakpoint } from "@material-ui/core/styles/createBreakpoints"
import {
  EdgeSidebarConfig,
  IEdgeSidebarBuilder,
  IEdgeSidebarRegistry,
  SidebarConfigMap,
  SidebarConfigMapById,
} from "../../types"

export const isUniqueSidebars = (
  sidebars: Pick<EdgeSidebarConfig, "id">[]
): boolean => {
  const keys: string[] = []
  let isUnique = true
  sidebars.forEach(({ id }) => {
    if (!id) {
      throw new Error("[Layout] - All Sidebar must have id")
    }
    if (keys.includes(id)) {
      isUnique = false
    } else {
      keys.push(id)
    }
  })
  return isUnique
}

export default (): IEdgeSidebarBuilder => {
  const sidebarIds: string[] = []
  const mapByBreakpoint: SidebarConfigMap = {}
  const mapById: SidebarConfigMapById = {}
  const addConfig = (
    breakpoint: Breakpoint,
    config: EdgeSidebarConfig
  ): void => {
    if (!sidebarIds.includes(config.id)) {
      sidebarIds.push(config.id)
    }

    if (!mapByBreakpoint[breakpoint]) {
      mapByBreakpoint[breakpoint] = []
    }
    // todo: this can be inconsistent
    // sidebar {id} can have duplicate "xs" config
    mapByBreakpoint[breakpoint].push(config)

    if (!mapById[config.id]) {
      mapById[config.id] = {}
    }
    mapById[config.id][breakpoint] = config

    if (!isUniqueSidebars(mapByBreakpoint[breakpoint])) {
      throw new Error(
        `Sidebar id: ${config.id} is duplicated at breakpoint "${breakpoint}"`
      )
    }
  }
  return {
    create: function(id, props) {
      const Registry = (): IEdgeSidebarRegistry => ({
        registerPersistentConfig(breakpoint, config) {
          addConfig(breakpoint, {
            ...config,
            ...props,
            id,
            variant: "persistent",
          })
          return this
        },
        registerPermanentConfig(breakpoint, config) {
          addConfig(breakpoint, {
            ...config,
            ...props,
            id,
            variant: "permanent",
          })
          return this
        },
        registerTemporaryConfig(breakpoint, config) {
          addConfig(breakpoint, {
            ...config,
            ...props,
            id,
            variant: "temporary",
          })
          return this
        },
      })
      return Registry()
    },
    getData() {
      return {
        sidebarIds,
        configMap: mapByBreakpoint,
        configMapById: mapById,
      }
    },
    getSidebarIds: () => sidebarIds,
  }
}
