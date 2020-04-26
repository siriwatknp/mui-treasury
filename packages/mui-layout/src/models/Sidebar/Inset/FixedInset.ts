import { FixedInsetSidebarConfig } from "../../../types"

export default (config: FixedInsetSidebarConfig) => {
  return {
    getRootStyle: () => ({
      width: config.width,
    }),
    getBodyStyle: () => ({
      position: "fixed" as const,
      top: 0,
      width: "auto",
      height: "100%",
      ...(config.anchor === "left" && { marginLeft: -999, paddingLeft: 999 }),
      ...(config.anchor === "right" && {
        marginRight: -999,
        paddingRight: 999,
      }),
    }),
  }
}
