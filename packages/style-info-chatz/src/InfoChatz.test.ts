import { runStyleTests } from "test/runTestSuite";
import {
  getInfoChatzStyles,
  getInfoChatzTheme,
  getInfoChatzVariant,
} from "./InfoChatz.styles";

describe("style-info-chatz", () => {
  runStyleTests({
    getStyles: getInfoChatzStyles,
    getTheme: getInfoChatzTheme,
    getVariant: getInfoChatzVariant,
    componentName: "JunInfo",
    slots: ["eyebrow", "title", "subtitle"],
    variantProps: { variant: "chatz" },
  });
});
