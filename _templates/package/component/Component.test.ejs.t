---
to: packages/<%=h.toNamePath(name)%>/src/<%=h.toName(name)%>.test.tsx
unless_exists: true
---
import React from "react";
import { render } from "@testing-library/react";
import { <%= Name=h.toName(name) %> } from "./<%=Name%>";

describe("<%= Name %>", () => {
  it("renders without clash", () => {
    expect(() => render(<<%= Name %> />)).not.toThrow()
  })
})
