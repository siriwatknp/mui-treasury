import InsetSidebarCompiler from "./InsetSidebarCompiler"
import InsetSidebarBuilder from "../builders/InsetSidebar"
import HeaderBuilder from "../builders/Header"

describe("InsetSidebarCompiler", () => {
  it("return correct style for multiple variants", () => {
    const header = HeaderBuilder()
    header.create("header").registerConfig("xs", {
      initialHeight: 56,
      position: "fixed",
    })

    const builder = InsetSidebarBuilder()

    builder
      .create("insetSidebar", { anchor: "right" })
      .registerFixedConfig("sm", {
        width: "40rem",
      })
      .registerAbsoluteConfig("md", {
        width: "33%",
      })
      .registerStickyConfig("lg", {
        top: "4rem",
        width: 256,
      })

    const compiler = InsetSidebarCompiler(builder.getData(), header.getData())

    expect(compiler.getResultStyle("insetSidebar")).toStrictEqual({
      root: {
        sm: {
          width: "40rem",
        },
        md: { width: "33%" },
        lg: { width: 256 },
      },
      body: {
        sm: {
          position: "fixed",
          top: 0,
          height: "100%",
          marginRight: -999,
          paddingRight: 999,
          width: "auto",
        },
        md: {
          position: "absolute",
          top: 0,
          width: "100%",
          height: "calc(100vh - 56px)",
          overflow: "auto",
          margin: "unset",
          padding: "unset",
        },
        lg: {
          position: "sticky",
          top: "4rem",
          height: "auto",
          margin: "unset",
          padding: "unset",
        },
      },
    })
  })
})
