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
        position: "sticky",
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
      .registerPermanentConfig("md", {
        width: 200,
        collapsible: false,
      })
      .registerPermanentConfig("lg", {
        width: 256,
        collapsible: false,
      })
  })

  return scheme
}
