import Layout from "../builders"
import HeaderCompiler from "../compilers/HeaderCompiler"
import EdgeSidebarCompiler from "../compilers/EdgeSidebarCompiler"
import ContentCompiler from "../compilers/ContentCompiler"

describe("Header + PrimarySidebar + SecondarySidebar + Content", () => {
  it("can create config and get the correct config", () => {
    const scheme = Layout()
    scheme.configureEdgeSidebar(builder => {
      builder
        .create("primarySidebar", { anchor: "left" })
        .registerTemporaryConfig("xs", {
          width: "auto",
        })
        .registerPersistentConfig("sm", {
          width: 256,
          persistentBehavior: "fit",
          collapsible: true,
          collapsedWidth: 80,
        })
        .registerPersistentConfig("md", {
          width: "30%",
          persistentBehavior: "flexible",
          collapsible: true,
          collapsedWidth: 80,
        })
        .registerPermanentConfig("lg", {
          width: "50%",
          collapsible: true,
          collapsedWidth: "12%",
        })

      builder
        .create("secondarySidebar", { anchor: "right" })
        .registerPersistentConfig("md", {
          width: 240,
          persistentBehavior: {
            _other: "none",
            footer: "fit",
          },
          collapsible: true,
          collapsedWidth: 64,
        })
    })

    scheme.configureHeader(builder => {
      builder
        .create("header")
        .registerConfig("xs", {
          position: "fixed",
          clipped: false,
        })
        .registerConfig("md", {
          position: "relative",
          clipped: true,
        })
    })

    scheme.configureContent(builder => {
      builder.create("content")
    })

    scheme.configureFooter(builder => {
      builder.create("footer")
    })

    const state = {
      sidebar: {
        primarySidebar: { open: true, collapsed: false },
        secondarySidebar: { open: true, collapsed: false },
      },
    }
    const data = scheme.getComponentData()
    const edgeSidebarCompiler = EdgeSidebarCompiler(
      state,
      data.edgeSidebar,
      data.header
    )

    expect(edgeSidebarCompiler.getResultStyle("primarySidebar")).toStrictEqual({
      temporary: {
        xs: {
          width: "auto",
        },
      },
      permanent: {
        lg: { width: "50%" },
      },
      persistent: {
        sm: { width: 256 },
        md: { width: "30%" },
      },
    })

    expect(
      edgeSidebarCompiler.getResultStyle("secondarySidebar")
    ).toStrictEqual({
      permanent: {},
      temporary: {},
      persistent: {
        md: {
          width: 240,
        },
      },
    })

    const headerCompiler = HeaderCompiler(state, data.header, data.edgeSidebar)
    expect(headerCompiler.getResultStyle()).toStrictEqual({
      xs: {
        position: "fixed",
      },
      sm: {
        marginLeft: 256,
        width: "calc(100% - 256px)",
        position: "fixed",
      },
      md: {
        marginLeft: "calc(0px + 0px)",
        marginRight: "calc(0px + 0px)",
        width: "100%",
        zIndex: 1210,
        position: "relative",
      },
      lg: {
        marginLeft: "calc(0px + 0px)",
        marginRight: "calc(0px + 0px)",
        width: "100%",
        zIndex: 1210,
        position: "relative",
      },
    })

    const contentCompiler = ContentCompiler(state, data.edgeSidebar)
    expect(contentCompiler.getResultStyle("content")).toStrictEqual({
      xs: {},
      sm: {
        marginLeft: 256,
        width: "calc(100% - 256px)",
      },
      md: {
        marginLeft: "calc(30%)",
        marginRight: 0,
        width: "100%",
      },
      lg: {
        marginLeft: "calc(50%)",
        marginRight: 0,
        width: "calc(100% - (50%))",
      },
    })

    expect(contentCompiler.getResultStyle("footer")).toStrictEqual({
      xs: {},
      sm: {
        marginLeft: 256,
        width: "calc(100% - 256px)",
      },
      md: {
        marginLeft: "calc(30%)",
        marginRight: 240,
        width: "calc(100% - 240px)",
      },
      lg: {
        marginLeft: "calc(50%)",
        marginRight: 240,
        width: "calc(100% - (50% + 240px))",
      },
    })
  })
})
