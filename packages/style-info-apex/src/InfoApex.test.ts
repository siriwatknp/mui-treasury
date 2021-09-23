import { runStyleTests } from "test/runTestSuite";
import {
  getInfoApexStyles,
  getInfoApexTheme,
  getInfoApexVariant,
} from "./InfoApex.styles";

describe("style-info-apex", () => {
  runStyleTests({
    getStyles: getInfoApexStyles,
    getTheme: getInfoApexTheme,
    getVariant: getInfoApexVariant,
    componentName: "JunInfo",
    slots: ["eyebrow", "title", "subtitle"],
    variantProps: { variant: "apex" },
  });
});
