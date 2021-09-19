---
to: packages/templates/src/<%= h.extractComponentPkg(name) %>/<%=h.extractStyleName(name)%>/<%= h.toName(name) %>.tsx
unless_exists: true
---
import React from "react";

export default function <%=h.toName(name)%>(props: { style?: React.CSSProperties }) {
  return <div>Start building your awesome component!</div>;
}
