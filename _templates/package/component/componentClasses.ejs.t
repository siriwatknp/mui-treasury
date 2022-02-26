---
to: packages/<%=h.toNamePath(name)%>/src/<%=h.toNameCamel(name)%>Classes.ts
unless_exists: true
---
import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@mui/base";

export interface <%=Name = h.toName(name)%>Classes {
  /** Styles applied to the root element. */
  root: string;
};

export type <%=Name%>ClassKey = keyof typeof <%= nameCamel=h.toNameCamel(name) %>Classes;

export function get<%= h.toName(name) %>UtilityClass(slot: string) {
  return generateUtilityClass("Jun<%=h.toName(name)%>", slot);
}

export const <%= h.toNameCamel(name) %>Classes: <%=Name%>Classes = generateUtilityClasses("Jun<%=h.toName(name)%>", [
  "root",
]);
