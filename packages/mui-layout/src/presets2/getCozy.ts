import LayoutBuilder from "../builders"

export default () => {
  const scheme = LayoutBuilder()

  scheme.configureHeader(builder => {
    builder
      .create("appHeader")
      .registerConfig("xs", {
        position: "fixed",
        initialHeight: 56,
      })
      .registerConfig("sm", {
        position: "fixed",
        initialHeight: 64,
      })
      .registerConfig("md", {
        position: "fixed",
        clipped: true,
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
      .registerPermanentConfig("sm", {
        width: 64,
        collapsible: false,
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
