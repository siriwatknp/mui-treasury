---
to: packages/<%=h.toNamePath(name)%>/src/<%=h.changeCase.camel(name)%>.test.ts
unless_exists: true
---
import { renderHook } from "@testing-library/react-hooks";
import { <%=h.changeCase.camel(name)%> } from "./<%=h.changeCase.camel(name)%>";

describe("<%=h.changeCase.camel(name)%>", () => {
  it("works!", () => {
    const { result } = renderHook(() => <%=h.changeCase.camel(name)%>());

    expect(result.current).toBeDefined()
  })
})
