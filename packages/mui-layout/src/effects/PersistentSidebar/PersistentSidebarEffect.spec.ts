import createModel from "./PersistentSidebarEffect"
import { ISidebarEffect, State } from "../../types"

const getWidthStyle = (model: ISidebarEffect, ...args: any[]) =>
  model.getObjectWidth(...args).getStyle()
const getMarginStyle = (model: ISidebarEffect, ...args: any[]) =>
  model.getObjectMargin(...args).getStyle()

describe("[Simple] None Behavior", () => {
  const baseConfig = {
    id: "persistent-sidebar",
    anchor: "left" as const,
    collapsible: true,
    collapsedWidth: 80,
    width: 256,
    persistentBehavior: "none" as const,
  }

  it("affect nothing", () => {
    const model = createModel(baseConfig, {
      sidebar: { "persistent-sidebar": { open: true, collapsed: false } },
    })
    expect(getMarginStyle(model)).toEqual({
      marginLeft: 0,
    })
    expect(getWidthStyle(model)).toEqual({
      width: "100%",
    })
  })
})

describe("[Simple] Fit Behavior", () => {
  let baseConfig: any
  let state: State
  beforeEach(() => {
    baseConfig = {
      id: "persistent-sidebar",
      anchor: "left",
      collapsible: true,
      collapsedWidth: 80,
      width: 256,
      persistentBehavior: "fit",
    }
    state = {
      sidebar: { "persistent-sidebar": { open: true, collapsed: false } },
    }
  })

  it("[anchor: left] affect margin left", () => {
    let model = createModel(baseConfig)
    expect(getMarginStyle(model)).toEqual({
      marginLeft: 0,
    })

    model = createModel(baseConfig, state)
    // default to "fit"
    expect(getMarginStyle(model)).toEqual({
      marginLeft: 256,
    })

    model = createModel(baseConfig, state)
    expect(getMarginStyle(model)).toEqual({
      marginLeft: 256,
    })

    model = createModel(baseConfig, state)
    expect(getMarginStyle(model)).toEqual({
      marginLeft: 256,
    })
  })

  it("[anchor: left] affect margin left when collapsed", () => {
    state.sidebar["persistent-sidebar"].collapsed = true
    let model = createModel(baseConfig, state)
    expect(getMarginStyle(model)).toEqual({
      marginLeft: 80,
    })
  })

  it("[anchor: right] affect margin right", () => {
    baseConfig.width = 300
    baseConfig.anchor = "right"
    let model = createModel(baseConfig)
    expect(getMarginStyle(model)).toEqual({
      marginRight: 0,
    })

    model = createModel(baseConfig, state)
    expect(getMarginStyle(model)).toEqual({
      marginRight: 300,
    })
  })

  it("affect other object's width", () => {
    baseConfig.width = "30%"
    baseConfig.collapsedWidth = 80
    let model = createModel(baseConfig, state)
    expect(getWidthStyle(model)).toEqual({ width: "calc(100% - (30%))" })
    expect(getWidthStyle(model)).toEqual({
      width: "calc(100% - (30%))",
    })

    state.sidebar["persistent-sidebar"].open = false
    model = createModel(baseConfig, state)
    expect(getWidthStyle(model)).toEqual({ width: "100%" })

    state.sidebar["persistent-sidebar"].open = true
    state.sidebar["persistent-sidebar"].collapsed = true
    model = createModel(baseConfig, state)
    expect(getWidthStyle(model)).toEqual({
      width: "calc(100% - 80px)",
    })
  })
})

describe("[Simple] Flexible Behavior", () => {
  let baseConfig: any
  let state: State
  beforeEach(() => {
    baseConfig = {
      id: "persistent-sidebar",
      anchor: "left",
      collapsible: true,
      collapsedWidth: 80,
      width: 256,
      persistentBehavior: "flexible",
    }
    state = {
      sidebar: { "persistent-sidebar": { open: true, collapsed: false } },
    }
  })
  it("[anchor: left | right] affect only margin left", () => {
    // ------------------------------------------------------------
    // special for persistent behavior : flexible
    // should only affect marginLeft as negative value, otherwise does not work
    // css constraint
    // todo support rtl direction
    let model = createModel(baseConfig, state)
    expect(getMarginStyle(model)).toEqual({
      marginLeft: 256,
    })

    baseConfig.anchor = "right"
    model = createModel(baseConfig, state)
    expect(getMarginStyle(model)).toEqual({
      marginLeft: -256,
    })
  })
})

describe("[ObjectReference] Mixed Behavior", () => {
  let baseConfig: any
  let state: State
  beforeEach(() => {
    baseConfig = {
      id: "persistent-sidebar",
      anchor: "left",
      collapsible: true,
      collapsedWidth: 80,
      width: 256,
      persistentBehavior: {
        object1: "fit",
        _other: "flexible",
      },
    }
    state = {
      sidebar: { "persistent-sidebar": { open: true, collapsed: false } },
    }
  })
  it("[anchor: left] return correct width and margin for each object", () => {
    let model = createModel(baseConfig, state)
    // object 1
    expect(getMarginStyle(model, "object1")).toEqual({
      marginLeft: 256,
    })
    expect(getWidthStyle(model, "object1")).toEqual({
      width: "calc(100% - 256px)",
    })

    // object 2
    expect(getMarginStyle(model, "object2")).toEqual({
      marginLeft: 256,
    })
    expect(getWidthStyle(model, "object2")).toEqual({
      width: "100%",
    })
  })

  it("[anchor: right] return correct width and margin for each object", () => {
    baseConfig.anchor = "right"
    state.sidebar["persistent-sidebar"].collapsed = true
    let model = createModel(baseConfig, state)
    // object 1
    expect(getMarginStyle(model, "object1")).toEqual({
      marginRight: 80,
    })
    expect(getWidthStyle(model, "object1")).toEqual({
      width: "calc(100% - 80px)",
    })

    // object 2
    expect(getMarginStyle(model, "object2")).toEqual({
      marginLeft: -80,
    })
    expect(getWidthStyle(model, "object2")).toEqual({
      width: "100%",
    })
  })
})
