import LayoutBuilder from "../builders"

export default () => {
  const scheme = LayoutBuilder()

  scheme.configureHeader(builder => {
    builder
      .registerConfig("xs", {
        position: "sticky",
        initialHeight: 56,
      })
      .registerConfig("md", {
        position: "relative",
        initialHeight: 64,
        clipped: true,
      })
  })

  scheme.configureEdgeSidebar(builder => {
    builder
      .create("primarySidebar", {
        anchor: "left",
      })
      .registerTemporaryConfig("xs", {
        width: 256,
      })
      .registerPermanentConfig("sm", {
        width: 256,
        collapsible: true,
        collapsedWidth: 64,
        headerMagnetEnabled: true
      })
  })

  scheme.enableAutoCollapse("primarySidebar", "sm")

  return scheme
}
