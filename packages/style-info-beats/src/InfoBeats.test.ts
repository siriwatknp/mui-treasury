import { runStyleTests } from "test/runTestSuite";
import {
  getInfoBeatsStyles,
  getInfoBeatsTheme,
  getInfoBeatsVariant,
} from "./InfoBeats.styles";

describe("style-info-beats", () => {
  runStyleTests({
    getStyles: getInfoBeatsStyles,
    getTheme: getInfoBeatsTheme,
    getVariant: getInfoBeatsVariant,
    componentName: "JunInfo",
    slots: ["eyebrow", "title", "subtitle"],
    variantProps: { variant: "beats" },
  });
});
