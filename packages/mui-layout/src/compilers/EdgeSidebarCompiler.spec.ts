import EdgeSidebarCompiler from "./EdgeSidebarCompiler"
import EdgeSidebarBuilder from "../builders/EdgeSidebar"
import HeaderBuilder from "../builders/Header"
import SidebarBuilder from "../builders/EdgeSidebar/EdgeSidebarBuilder"

const sidebarId = "primarySidebar"

describe("EdgeSidebarCompiler", () => {
  it("get correct result style", () => {
    const sidebar = EdgeSidebarBuilder()
    sidebar
      .create(sidebarId, { anchor: "left" })
      .registerPersistentConfig("xs", {
        width: 256,
        collapsible: true,
        collapsedWidth: 80,
        persistentBehavior: "flexible",
      })
      .registerPersistentConfig("md", {
        width: "30%",
        collapsible: false,
        persistentBehavior: "fit",
      })
      .registerPermanentConfig("lg", {
        width: "50%",
        collapsible: false,
      })

    const header = HeaderBuilder()
    header.create("header").registerConfig("xs", {
      clipped: false,
      position: "sticky",
    })
    const compiler = EdgeSidebarCompiler(
      {
        sidebar: { [sidebarId]: { collapsed: false, open: true } },
      },
      sidebar.getData(),
      header.getData()
    )

    expect(compiler.getResultStyle(sidebarId)).toStrictEqual({
      temporary: {},
      permanent: {
        lg: { width: "50%" },
      },
      persistent: {
        xs: { width: 256 },
        md: { width: "30%" },
      },
    })
  })

  it("return empty if no breakpoint config found", () => {
    const sidebar = SidebarBuilder()
    sidebar
      .create(sidebarId, { anchor: "left" })
      .registerPersistentConfig("md", {
        width: "30%",
        collapsible: true,
        collapsedWidth: "12%",
        persistentBehavior: "fit",
      })

    const header = HeaderBuilder()
    header.create("header").registerConfig("xs", {
      clipped: false,
      position: "sticky",
    })

    const compiler = EdgeSidebarCompiler(
      {
        sidebar: { [sidebarId]: { open: true, collapsed: true } },
      },
      sidebar.getData(),
      header.getData()
    )

    expect(compiler.getResultStyle(sidebarId)).toStrictEqual({
      temporary: {},
      permanent: {},
      persistent: {
        md: {
          width: "12%",
        },
      },
    })
  })
})
