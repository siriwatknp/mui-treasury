---
to: packages/<%=h.toNamePath(name)%>/src/<%= h.toName(name) %>.styles.ts
unless_exists: true
---
import { makeStyles } from "@material-ui/core/styles";

export const use<%= Name=h.toName(name) %>Styles = makeStyles(
  () => ({
    root: {},
  }),
  {
    name: "Mui<%= Name %>",
  }
);

export type <%= Name %>ClassKey = keyof ReturnType<typeof use<%= Name %>Styles>;
export type <%= Name %>Classes = Partial<Record<<%= Name %>ClassKey, string>>;
