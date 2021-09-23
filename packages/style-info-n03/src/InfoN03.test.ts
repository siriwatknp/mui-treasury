import { runStyleTests } from "test/runTestSuite";
import {
  getInfoN03Styles,
  getInfoN03Theme,
  getInfoN03Variant,
} from "./InfoN03.styles";

describe("style-info-n03", () => {
  runStyleTests({
    getStyles: getInfoN03Styles,
    getTheme: getInfoN03Theme,
    getVariant: getInfoN03Variant,
    componentName: "JunInfo",
    slots: ["eyebrow", "title", "subtitle"],
    variantProps: { variant: "n03" },
  });
});
