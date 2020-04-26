import { FixedInsetSidebarConfig } from "../../types"

export default (config: FixedInsetSidebarConfig) => {
  return {
    id: config.id,
    getAvoidingStyle: () => ({
      ...(config.anchor === "left" && { marginLeft: config.width }),
      ...(config.anchor === "right" && { marginRight: config.width }),
    }),
  }
}
