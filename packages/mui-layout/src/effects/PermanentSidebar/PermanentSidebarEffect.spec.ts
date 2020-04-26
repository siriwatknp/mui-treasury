import createEffect from "./PermanentSidebarEffect"
import { PermanentSidebarConfig, State } from "../../types"

describe("PermanentSidebar Effect", () => {
  let baseConfig: PermanentSidebarConfig
  let state: State
  beforeEach(() => {
    baseConfig = {
      id: "primarySidebar",
      anchor: "left",
      width: 256,
      collapsible: true,
      collapsedWidth: 80,
    }
    state = {
      sidebar: { primarySidebar: { collapsed: false } },
    }
  })

  it("[anchor: left] has correct effect", () => {
    let model = createEffect(baseConfig)
    expect(model.id).toEqual("primarySidebar")
    expect(model.getObjectMargin().getStyle()).toEqual({
      marginLeft: 256,
    })
    expect(model.getObjectWidth().getStyle()).toEqual({
      width: "calc(100% - 256px)",
    })
  })

  it("[anchor: left] state is collapsed has correct effect", () => {
    state.sidebar.primarySidebar.collapsed = true
    let model = createEffect(baseConfig, state)
    expect(model.id).toEqual("primarySidebar")
    expect(model.getObjectMargin().getStyle()).toEqual({
      marginLeft: 80,
    })
    expect(model.getObjectWidth().getStyle()).toEqual({
      width: "calc(100% - 80px)",
    })
  })

  it("[anchor: right] has correct effect", () => {
    baseConfig.anchor = "right"
    let model = createEffect(baseConfig)
    expect(model.id).toEqual("primarySidebar")
    expect(model.getObjectMargin().getStyle()).toEqual({
      marginRight: 256,
    })
    expect(model.getObjectWidth().getStyle()).toEqual({
      width: "calc(100% - 256px)",
    })
  })
})
