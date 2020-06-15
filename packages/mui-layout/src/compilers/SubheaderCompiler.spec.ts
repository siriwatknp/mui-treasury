import SubheaderCompiler from "./SubheaderCompiler"
import SubheaderBuilder from "../builders/Subheader"
import EdgeSidebarBuilder from "../builders/EdgeSidebar"

describe("SubheaderCompiler", () => {
  it("return correct result style by mapping all possible breakpoints with related effect", () => {
    const subheader = SubheaderBuilder()

    const SUBHEADER_1 = 'subheader1'

    subheader
      .create(SUBHEADER_1)
      .registerConfig("xs", {
        clipped: true,
        position: "sticky",
      })
      .registerConfig("md", {
        clipped: false,
        position: "sticky",
      })
      .registerConfig("lg", {
        clipped: true,
        position: "fixed",
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

    const compiler = SubheaderCompiler(
      { sidebar: { "sidebar-1": { open: true, collapsed: false } } },
      subheader.getData(),
      sidebar.getData()
    )

    expect(compiler.getResultStyle(SUBHEADER_1)).toStrictEqual({
      xs: {
        zIndex: 1210,
        marginLeft: 0,
        marginRight: 0,
        width: "100%",
        position: "sticky",
      },
      md: {
        width: "calc(100% - 256px)",
        marginLeft: 256,
        position: "sticky",
      },
      lg: {
        width: '100%',
        position: 'fixed',
        zIndex: 1210,
        marginLeft: 0,
        marginRight: 0,
      },
      xl: {
        zIndex: 1210,
        marginLeft: 0,
        marginRight: 0,
        position: 'fixed',
        width: '100%',
      },
    })
  })
})
