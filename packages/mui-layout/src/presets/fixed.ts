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
      .registerPermanentConfig("md", {
        width: 256,
        collapsible: true,
        collapsedWidth: 64,
      })
  })

  scheme.enableAutoCollapse("primarySidebar", "md")

  return scheme
}
