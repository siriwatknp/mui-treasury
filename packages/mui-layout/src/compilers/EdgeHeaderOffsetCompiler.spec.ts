import HeaderBuilder from "../builders/Header"
import EdgeSidebarBuilder from "../builders/EdgeSidebar"
import SubheaderBuilder from '../builders/Subheader';
import EdgeHeaderOffsetCompiler from "./EdgeHeaderOffsetCompiler"

describe("EdgeHeaderOffsetCompiler", () => {
  it("return correct result style", () => {
    const header = HeaderBuilder()

    header
      .create("header")
      .registerConfig("xs", {
        initialHeight: 56,
        position: "fixed",
        clipped: false,
      })
      .registerConfig("sm", {
        initialHeight: 56,
        position: "sticky",
        clipped: true,
      })
      .registerConfig("md", {
        initialHeight: 64,
        position: "fixed",
        clipped: false,
      })
      .registerConfig("xl", {
        initialHeight: 64,
        position: "relative",
        clipped: true,
      })

    const subheader = SubheaderBuilder()

    const sidebar = EdgeSidebarBuilder()
    sidebar
      .create("sidebar", { anchor: "left" })
      .registerPermanentConfig("sm", {
        collapsible: false,
        width: 256,
      })
      .registerPersistentConfig("lg", {
        collapsible: false,
        width: 256,
        persistentBehavior: "fit",
      })

    const compiler = EdgeHeaderOffsetCompiler(
      sidebar.getData(),
      header.getData(),
      subheader.getData(),
    )

    expect(compiler.getResultStyle("sidebar")).toStrictEqual({
      sm: {
        height: 56,
      },
      md: {
        height: 0,
      },
      xl: {
        height: 64,
      },
    })
  })

  it("return correct result style 2", () => {
    const header = HeaderBuilder()

    header
      .create("appHeader")
      .registerConfig("xs", {
        position: "fixed",
        clipped: true,
        initialHeight: 56,
      })
      .registerConfig("md", {
        position: "relative",
        clipped: true,
        initialHeight: 64,
      })
      .registerConfig("lg", {
        position: "sticky",
        initialHeight: 64,
        clipped: true,
      })

    const subheader = SubheaderBuilder()

    const sidebar = EdgeSidebarBuilder()
    sidebar
      .create("primarySidebar", { anchor: "left" })
      .registerTemporaryConfig("xs", {
        width: "auto",
      })
      .registerPersistentConfig("sm", {
        width: 256,
        persistentBehavior: "fit",
        collapsible: true,
        collapsedWidth: 80,
        headerMagnetEnabled: true,
      })
      .registerPersistentConfig("md", {
        width: "30%",
        persistentBehavior: "fit",
        collapsible: true,
        collapsedWidth: 80,
      })

    const compiler = EdgeHeaderOffsetCompiler(
      sidebar.getData(),
      header.getData(),
      subheader.getData(),
    )

    expect(compiler.getResultStyle("primarySidebar")).toStrictEqual({
      sm: {
        height: 56,
      },
      md: {
        height: 64,
      },
      lg: {
        height: 64,
      },
    })
  })

  it('return sum of headers height if subheaders provided', () => {
    const header = HeaderBuilder()

    header
      .create("appHeader")
      .registerConfig("xs", {
        position: "fixed",
        clipped: true,
        initialHeight: 56,
      })
      .registerConfig("md", {
        position: "relative",
        clipped: true,
        initialHeight: 64,
      })
      .registerConfig("lg", {
        position: "sticky",
        initialHeight: 64,
        clipped: true,
      })

    const subheader = SubheaderBuilder()
    subheader.create('subheader1')
      .registerConfig('sm', {
        position: 'relative',
        initialHeight: 40,
        clipped: {
          primarySidebar: true,
        },
      })

    subheader.create('subheader2')
      .registerConfig('sm', {
        position: 'fixed',
        initialHeight: 24,
        clipped: false,
      })
      .registerConfig('lg', {
        position: 'sticky',
        initialHeight: 40,
        clipped: true,
      })

    const sidebar = EdgeSidebarBuilder()
    sidebar
      .create("primarySidebar", { anchor: "left" })
      .registerTemporaryConfig("xs", {
        width: "auto",
      })
      .registerPersistentConfig("sm", {
        width: 256,
        persistentBehavior: "fit",
        collapsible: true,
        collapsedWidth: 80,
        headerMagnetEnabled: true,
      })
      .registerPersistentConfig("md", {
        width: "30%",
        persistentBehavior: "fit",
        collapsible: true,
        collapsedWidth: 80,
      })

    const compiler = EdgeHeaderOffsetCompiler(
      sidebar.getData(),
      header.getData(),
      subheader.getData(),
    )

    expect(compiler.getResultStyle("primarySidebar")).toStrictEqual({
      sm: {
        height: 'calc(56px + 40px)',
      },
      md: {
        height: 'calc(64px + 40px)',
      },
      lg: {
        height: 'calc(64px + 40px + 40px)',
      },
    })
  })
})
