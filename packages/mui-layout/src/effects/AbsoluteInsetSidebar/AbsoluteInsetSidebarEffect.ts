import { AbsoluteInsetSidebarConfig } from "../../types"

export default (config: AbsoluteInsetSidebarConfig) => {
  return {
    id: config.id,
    getAvoidingStyle: () => ({
      ...(config.anchor === "left" && { marginLeft: config.width }),
      ...(config.anchor === "right" && { marginRight: config.width }),
    }),
  }
}
