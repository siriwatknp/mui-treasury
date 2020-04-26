import EdgeSidebarBuilder from "../builders/EdgeSidebar"
import EdgeTriggerCompiler from "./EdgeTriggerCompiler"

describe("EdgeTriggerCompiler", () => {
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
      .registerTemporaryConfig("md", {
        width: "auto",
      })
      .registerPermanentConfig("lg", {
        collapsible: false,
        width: 256,
      })

    const compiler = EdgeTriggerCompiler(sidebar.getData())
    expect(compiler.getHiddenBreakpoints("sidebar")).toStrictEqual(["lg", "xl"])
  })
})
