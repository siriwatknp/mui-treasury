import { runStyleTests } from "test/runTestSuite";
import {
  getInfoN02Styles,
  getInfoN02Theme,
  getInfoN02Variant,
} from "./InfoN02.styles";

describe("style-info-n02", () => {
  runStyleTests({
    getStyles: getInfoN02Styles,
    getTheme: getInfoN02Theme,
    getVariant: getInfoN02Variant,
    componentName: "JunInfo",
    slots: ["eyebrow", "head", "paragraph"],
    variantProps: { variant: "n02" },
  });
});
