import { createMarginInterface, combineMargin } from "./MarginModel";

describe("combineMargin", () => {
  it("return correct margin", () => {
    expect(combineMargin(undefined, undefined)).toEqual({});
    expect(combineMargin({ marginLeft: 256 }, undefined)).toEqual({
      marginLeft: 256,
    });
    expect(combineMargin(undefined, { marginRight: "30%" })).toEqual({
      marginRight: "30%",
    });
    expect(combineMargin({ marginLeft: 256 }, { marginRight: -80 })).toEqual({
      marginLeft: 256,
      marginRight: -80,
    });
    expect(
      combineMargin({ marginLeft: 256 }, { marginLeft: "12%", marginRight: 80 })
    ).toEqual({
      marginLeft: "256px + 12%",
      marginRight: 80,
    });
  });
});

describe("createMarginInterface", () => {
  it("can combine margin", () => {
    const m1 = createMarginInterface({ marginLeft: 64, marginRight: "20%" });
    const m2 = createMarginInterface({ marginRight: "-12%" });
    expect(m1.combine(m2).value).toEqual({
      marginLeft: 64,
      marginRight: "20% + -12%",
    });
    expect(m1.combine(m2).getStyle()).toEqual({
      marginLeft: 64,
      marginRight: "calc(20% + -12%)",
    });
  });
});
