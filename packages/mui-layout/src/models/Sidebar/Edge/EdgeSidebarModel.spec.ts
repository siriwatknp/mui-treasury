import createModel from "./EdgeSidebarModel"
import { CollapsibleSidebarConfig } from "../../../types"

describe("EdgeSidebarModel", () => {
  let baseConfig: CollapsibleSidebarConfig
  beforeEach(() => {
    baseConfig = {
      id: "s1",
      anchor: "left",
      collapsedWidth: 80,
      collapsible: true,
      width: "30%",
    }
  })
  it("return the width before collapsed", () => {
    let model = createModel(baseConfig)
    expect(model).toEqual({
      width: "30%",
    })
  })

  it("return the collapsed width", () => {
    let model = createModel(baseConfig, {
      sidebar: { s1: { collapsed: true } },
    })
    expect(model).toEqual({
      width: 80,
    })
  })
})
