import { runStyleTests } from "test/runTestSuite";
import {
  getInfoN01Styles,
  getInfoN01Theme,
  getInfoN01Variant,
} from "./InfoN01.styles";

describe("style-info-n01", () => {
  runStyleTests({
    getStyles: getInfoN01Styles,
    getTheme: getInfoN01Theme,
    getVariant: getInfoN01Variant,
    componentName: "JunInfo",
    slots: ["eyebrow", "title", "subtitle"],
    variantProps: { variant: "n01" },
  });
});
