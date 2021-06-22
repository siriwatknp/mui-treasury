---
to: packages/<%=h.toNamePath(name)%>/src/<%=h.toName(name)%>.test.ts
unless_exists: true
---
import { runStyleTests } from "test/runTestSuite";
import {
  get<%= h.toName(name) %>Styles,
  get<%= h.toName(name) %>Theme,
  get<%= h.toName(name) %>Variant,
} from "./<%= h.toName(name) %>.styles";

describe("style-info-<%=h.extractStyleName(name)%>", () => {
  runStyleTests({
    getStyles: get<%= h.toName(name) %>Styles,
    getTheme: get<%= h.toName(name) %>Theme,
    getVariant: get<%= h.toName(name) %>Variant,
    componentName: "JunInfo",
    slots: ["eyebrow", "head", "body"],
    variantProps: { variant: "<%=h.extractStyleName(name)%>" },
  });
});

