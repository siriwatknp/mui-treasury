import { isUniqueSidebars } from "./EdgeSidebarBuilder"

it("can check unique sidebars", () => {
  expect(
    isUniqueSidebars([
      { id: "sidebar-1" },
      { id: "sidebar-1" },
      { id: "sidebar-2" },
    ])
  ).toBeFalsy()
})
