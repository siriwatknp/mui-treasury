import { combineBreakpoints } from "./combineBreakpoints";

describe("combineBreakpoints", () => {
  it("combine correctly", () => {
    expect(
      combineBreakpoints({ xs: "", lg: "" }, { md: "", lg: "" }, { sm: "" })
    ).toEqual(["xs", "sm", "md", "lg"]);
  });

  it("can combine object + array", () => {
    expect(
      combineBreakpoints({ xs: "", sm: "", lg: "" }, ["sm", "md"])
    ).toEqual(["xs", "sm", "md", "lg"]);
  });
});
