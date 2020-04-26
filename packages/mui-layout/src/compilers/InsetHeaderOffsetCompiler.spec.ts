import HeaderBuilder from "../builders/Header"
import InsetSidebarBuilder from "../builders/InsetSidebar"
import InsetHeaderOffsetCompiler from "./InsetHeaderOffsetCompiler"

describe("InsetHeaderOffsetCompiler", () => {
  it("return correct result", () => {
    const header = HeaderBuilder()

    header
      .create("header")
      .registerConfig("xs", {
        initialHeight: 56,
        position: "sticky",
      })
      .registerConfig("md", {
        initialHeight: 64,
        position: "fixed",
      })

    const insetSidebar = InsetSidebarBuilder()

    insetSidebar
      .create("inset-sidebar", { anchor: "right" })
      .registerFixedConfig("sm", {
        width: 256,
      })
      .registerStickyConfig("md", {
        width: 256,
        top: 0,
      })
      .registerFixedConfig("lg", {
        width: 256,
      })
      .registerFixedConfig("xl", {
        width: 256,
      })

    const compiler = InsetHeaderOffsetCompiler(
      insetSidebar.getData(),
      header.getData()
    )
    expect(compiler.getResultStyle("inset-sidebar")).toStrictEqual({
      sm: {
        height: 56,
      },
      md: {
        height: 0,
      },
      lg: {
        height: 64,
      },
      xl: {
        height: 64,
      },
    })
  })
})
