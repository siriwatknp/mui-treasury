---
to: ../blocks/<%=name%>/src/<%= h.toNameCamel(name) %>.ts
unless_exists: true
---
import React from "react";

export type <%= h.toName(name) %>Options = {};

export function <%= h.toNameCamel(name) %>(options: <%= h.toName(name) %>Options) {
  const [state, setState] = React.useState(options);
  return state;
}
