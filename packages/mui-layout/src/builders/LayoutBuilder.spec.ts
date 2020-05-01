import LayoutBuilder from "./LayoutBuilder"

describe("Layout Builder", () => {
  it("able to configure header", () => {
    const layout = LayoutBuilder()
    layout.configureHeader(builder => {
      builder.create("header").registerConfig("xs", {
        position: "sticky",
        clipped: true,
      })
    })
  })
})
