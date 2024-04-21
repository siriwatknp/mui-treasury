import { pickNearestBreakpoint } from "./pickNearestBreakpoint";

describe("pickNearestBreakpoint", () => {
  it("throw error for unknown breakpoint", () => {
    expect(() =>
      // @ts-ignore
      pickNearestBreakpoint({ xs: "xs value", lg: "lg value" }, "unknown")
    ).toThrow();
  });
  it("return first breakpoints that is not undefined", () => {
    expect(
      pickNearestBreakpoint({ xs: "xs value", lg: "lg value" }, "lg")
    ).toEqual("lg value");
    expect(
      pickNearestBreakpoint<string | number>({ xs: "xs value", lg: 0 }, "lg")
    ).toEqual(0);
  });

  it("should return matched breakpoint value", () => {
    const value = {
      xs: "xs",
      md: "md",
      xl: "xl",
    };
    expect(pickNearestBreakpoint(value, "xs")).toEqual("xs");
    expect(pickNearestBreakpoint(value, "xl")).toEqual("xl");
  });

  it("should return nearest breakpoint value if target not found", () => {
    const value = {
      xs: "xs",
      md: "md",
      xl: "xl",
    };
    expect(pickNearestBreakpoint(value, "lg")).toEqual("md");
  });
});
