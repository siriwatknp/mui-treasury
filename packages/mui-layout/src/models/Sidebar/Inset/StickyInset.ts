import { StickyInsetSidebarConfig } from "../../../types"

export default (config: StickyInsetSidebarConfig) => {
  return {
    getRootStyle: () => ({
      width: config.width,
    }),
    getBodyStyle: () => ({
      position: "sticky" as const,
      top: config.top,
      margin: "unset",
      padding: "unset",
      height: "auto",
    }),
  }
}
