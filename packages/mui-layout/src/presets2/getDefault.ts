import LayoutBuilder from "../builders"

export default () => {
  const scheme = LayoutBuilder()

  scheme.configureHeader(builder => {
    builder
      .create("appHeader")
      .registerConfig("xs", {
        position: "relative",
        initialHeight: 56,
      })
      .registerConfig("md", {
        position: "sticky",
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
      .registerPersistentConfig("md", {
        width: 256,
        collapsible: true,
        collapsedWidth: 64,
        persistentBehavior: "fit",
      })
  })

  scheme.enableAutoCollapse("primarySidebar", "md")

  return scheme
}
