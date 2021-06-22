import { runStyleTests } from "test/runTestSuite";
import {
  getInfoN04Styles,
  getInfoN04Theme,
  getInfoN04Variant,
} from "./InfoN04.styles";

describe("style-info-n04", () => {
  runStyleTests({
    getStyles: getInfoN04Styles,
    getTheme: getInfoN04Theme,
    getVariant: getInfoN04Variant,
    componentName: "JunInfo",
    slots: ["eyebrow", "head", "paragraph"],
    variantProps: { variant: "n04" },
  });
});
