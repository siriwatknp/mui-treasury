---
to: packages/<%=h.toNamePath(name)%>/src/<%=h.changeCase.camel(name)%>.ts
unless_exists: true
---
import React from "react";

export const <%=h.changeCase.camel(name)%> = () => {

}
