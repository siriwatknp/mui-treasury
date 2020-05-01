import {
  HeaderConfig,
  HeaderConfigMap,
  IHeaderBuilder,
  IRegistry,
} from "../../types"

export default (): IHeaderBuilder => {
  let id: string
  const map: HeaderConfigMap = {}

  return {
    create: function(headerId: string) {
      id = headerId
      const Registry = (): IRegistry<HeaderConfig> => ({
        registerConfig(breakpoint, config) {
          map[breakpoint] = { ...config, id: headerId }
          return this
        },
      })
      return Registry()
    },
    getId: () => id,
    getData: () => map,
  }
}
