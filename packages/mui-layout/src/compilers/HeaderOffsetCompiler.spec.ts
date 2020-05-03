import HeaderBuilder from "../builders/Header"
import HeaderOffsetCompiler from "./HeaderOffsetCompiler"

describe("HeaderOffsetCompiler", () => {
  it("return correct style", () => {
    const header = HeaderBuilder()

    header
      .create("header")
      .registerConfig("xs", {
        initialHeight: 56,
        position: "fixed",
      })
      .registerConfig("md", {
        position: "relative",
        initialHeight: 64,
      })
      .registerConfig("xl", {
        position: "fixed",
        initialHeight: 72,
      })

    const compiler = HeaderOffsetCompiler(header.getData())
    expect(compiler.getResultStyle()).toStrictEqual({
      xs: {
        height: 56,
      },
      md: {
        height: 0,
      },
      xl: {
        height: 72,
      },
    })
  })
})
