import { createSxResult } from "./createSxResult";

describe("createSxResult", () => {
  it("does not include repeated value", () => {
    expect(
      createSxResult((bp) => {
        if (bp === "lg") {
          return 48;
        }
        return 0;
      })
    ).toEqual({
      xs: 0,
      lg: 48,
      xl: 0,
    });
  });

  it("has custom breakpoints", () => {
    expect(
      createSxResult(
        () => {
          return "sticky";
        },
        {
          breakpoints: ["xs"],
        }
      )
    ).toEqual({
      xs: "sticky",
    });
  });

  it("omit undefined value", () => {
    expect(
      createSxResult((bp) => {
        if (bp === "xl") {
          return undefined;
        }
        return "relative";
      })
    ).toEqual({
      xs: "relative",
    });
  });

  it("has initial value", () => {
    expect(
      createSxResult(
        (bp) => {
          if (bp !== "sm") {
            return 1100;
          }
          return 1210;
        },
        {
          initialValue: 1100,
        }
      )
    ).toEqual({
      sm: 1210,
      md: 1100,
    });
  });

  it("has initial value 2", () => {
    expect(
      createSxResult(
        (bp) => {
          if (bp !== "sm" && bp !== "xl") {
            return 1100;
          }
          return 1210;
        },
        {
          initialValue: 1100,
        }
      )
    ).toEqual({
      sm: 1210,
      md: 1100,
      xl: 1210,
    });
  });
});
