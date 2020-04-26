import EdgeSidebarBuilder from "../builders/EdgeSidebar"
import EdgeCollapseCompiler from "./EdgeCollapseCompiler"

describe("EdgeCollapseCompiler", () => {
  it("return correct hidden breakpoints", () => {
    const sidebar = EdgeSidebarBuilder()
    sidebar
      .create("sidebar", { anchor: "left" })
      .registerTemporaryConfig("xs", {
        width: "auto",
      })
      .registerPersistentConfig("sm", {
        collapsible: true,
        width: 256,
        persistentBehavior: "fit",
      })
      .registerPermanentConfig('lg', {
        collapsible: false,
        width: 256,
      })

    const compiler = EdgeCollapseCompiler(sidebar.getData())
    expect(compiler.getHiddenBreakpoints("sidebar"))
      .toStrictEqual(['xs', 'lg', 'xl'])
  })
})
