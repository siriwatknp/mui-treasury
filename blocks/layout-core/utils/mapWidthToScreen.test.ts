import { createTheme } from "@mui/material/styles";
import { mapWidthToScreen } from "./mapWidthToScreen";

const theme = createTheme();
const { breakpoints } = theme;
describe("mapWidthToScreen", () => {
  it("return correct screen", () => {
    expect(mapWidthToScreen(undefined, breakpoints)).toBeUndefined();
    expect(mapWidthToScreen(320, breakpoints)).toBe("xs");
    expect(mapWidthToScreen(768, breakpoints)).toBe("sm");
    expect(mapWidthToScreen(1024, breakpoints)).toBe("md");
    expect(mapWidthToScreen(1440, breakpoints)).toBe("lg");
    expect(mapWidthToScreen(1920, breakpoints)).toBe("xl");
  });
});
