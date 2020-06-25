import HeaderCompiler from "./HeaderCompiler"
import HeaderBuilder from "../builders/Header"
import EdgeSidebarBuilder from "../builders/EdgeSidebar"

describe("HeaderCompiler", () => {
  it("return correct result style by mapping all possible breakpoints with related effect", () => {
    const header = HeaderBuilder()

    header
      .create("header")
      .registerConfig("xs", {
        clipped: true,
        position: "sticky",
      })
      .registerConfig("md", {
        clipped: false,
        position: "sticky",
      })

    const sidebar = EdgeSidebarBuilder()
    sidebar
      .create("sidebar-1", { anchor: "left" })
      .registerPersistentConfig("xs", {
        width: 256,
        collapsible: true,
        collapsedWidth: 80,
        persistentBehavior: "fit",
      })
      .registerPersistentConfig("xl", {
        width: "30%",
        collapsible: false,
        persistentBehavior: "fit",
      })

    const compiler = HeaderCompiler(
      { sidebar: { "sidebar-1": { open: true, collapsed: false } } },
      header.getData(),
      sidebar.getData()
    )

    expect(compiler.getResultStyle()).toStrictEqual({
      xs: {
        zIndex: 1210,
        marginLeft: 0,
        marginRight: 0,
        width: "100%",
        position: "sticky",
        height: 56,
      },
      md: {
        width: "calc(100% - 256px)",
        marginLeft: 256,
        position: "sticky",
        height: 64,
      },
      xl: {
        marginLeft: "calc(30%)",
        width: "calc(100% - (30%))",
        position: "sticky",
        height: 64,
      },
    })
  })
})
