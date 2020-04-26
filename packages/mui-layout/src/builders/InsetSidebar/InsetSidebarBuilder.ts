import {
  AbsoluteInsetSidebarConfig,
  Dictionary,
  FixedInsetSidebarConfig,
  InsetSidebarConfig,
  InsetSidebarData,
  MapBreakpoint,
  SidebarProperties,
  StickyInsetSidebarConfig,
} from "../../types"
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints"

export interface IInsetSidebarRegistry {
  registerStickyConfig: (
    breakpoint: Breakpoint,
    config: Omit<StickyInsetSidebarConfig, "id" | "anchor" | "variant">
  ) => IInsetSidebarRegistry
  registerAbsoluteConfig: (
    breakpoint: Breakpoint,
    config: Omit<AbsoluteInsetSidebarConfig, "id" | "anchor" | "variant">
  ) => IInsetSidebarRegistry
  registerFixedConfig: (
    breakpoint: Breakpoint,
    config: Omit<FixedInsetSidebarConfig, "id" | "anchor" | "variant">
  ) => IInsetSidebarRegistry
}

export interface IInsetSidebarBuilder {
  create: (id: string, properties: SidebarProperties) => IInsetSidebarRegistry
  getData: () => InsetSidebarData
}

export type InsetSidebarConfigMap = MapBreakpoint<InsetSidebarConfig[]>
export type InsetSidebarConfigMapById = Dictionary<
  MapBreakpoint<InsetSidebarConfig>
>

export default (): IInsetSidebarBuilder => {
  const mapByBreakpoints: InsetSidebarConfigMap = {}
  const mapById: InsetSidebarConfigMapById = {}
  const addConfig = (bp: Breakpoint, config: InsetSidebarConfig): void => {
    if (!mapByBreakpoints[bp]) {
      mapByBreakpoints[bp] = []
    }
    mapByBreakpoints[bp].push(config)

    if (!mapById[config.id]) {
      mapById[config.id] = {}
    }
    mapById[config.id][bp] = config
  }
  return {
    create(id, props) {
      // InsetSidebar can be multiples, id is needed
      const Registry = (): IInsetSidebarRegistry => ({
        registerStickyConfig(breakpoint, config) {
          addConfig(breakpoint, { ...config, ...props, id, variant: "sticky" })
          return this
        },
        registerAbsoluteConfig(breakpoint, config) {
          addConfig(breakpoint, {
            ...config,
            ...props,
            id,
            variant: "absolute",
          })
          return this
        },
        registerFixedConfig(breakpoint, config) {
          addConfig(breakpoint, { ...config, ...props, id, variant: "fixed" })
          return this
        },
      })
      return Registry()
    },
    getData: () => ({
      configMapById: mapById,
      configMap: mapByBreakpoints,
    }),
  }
}
