---
to: packages/<%=h.toNamePath(name)%>/src/<%=h.toNameCamel(name)%>Classes.ts
unless_exists: true
---
import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";

export function get<%= h.toName(name) %>UtilityClass(slot: string) {
  return generateUtilityClass("Jun<%=h.toName(name)%>", slot);
}

export const <%= h.toNameCamel(name) %>Classes = generateUtilityClasses("Jun<%=h.toName(name)%>", [
  "root",
]);
