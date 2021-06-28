import { halveGap } from "./utils";

describe("halfGap", () => {
  it("number", () => {
    expect(halveGap(2)).toEqual(1);
  });

  it("string", () => {
    expect(halveGap("20px")).toEqual("10px");
    expect(halveGap("10rem")).toEqual("5rem");
    expect(halveGap("2em")).toEqual("1em");
  });

  it("object", () => {
    expect(halveGap({ xs: 2, md: 3 })).toEqual({ xs: 1, md: 1.5 });
    expect(halveGap({ xs: "20px", md: "24px" })).toEqual({
      xs: "10px",
      md: "12px",
    });
    expect(halveGap({ xs: 2, md: "3rem" })).toEqual({
      xs: 1,
      md: "1.5rem",
    });
  });

  it("array", () => {
    expect(halveGap([2, "20px", "3rem"])).toEqual([1, "10px", "1.5rem"]);
  });

  it("negative", () => {
    expect(halveGap(2, true)).toEqual(-1);
    expect(halveGap("10rem", true)).toEqual("-5rem");
    expect(halveGap({ xs: 2, md: "3rem" }, true)).toEqual({
      xs: -1,
      md: "-1.5rem",
    });
    expect(halveGap([2, "20px", "3rem"], true)).toEqual([
      -1,
      "-10px",
      "-1.5rem",
    ]);
  });
});
