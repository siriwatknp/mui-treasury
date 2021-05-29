import {
  createWidthInterface,
  getCssWidth,
  sumExternalGap,
} from "./WidthModel";

describe("getCssWidth", () => {
  it("return correctly", () => {
    expect(getCssWidth()).toEqual("auto");
    expect(getCssWidth("30px + 40rem")).toEqual("calc(100% - (30px + 40rem))");
    expect(getCssWidth("30%")).toEqual("calc(100% - (30%))");
    expect(getCssWidth(0)).toEqual("100%");
    expect(getCssWidth(100)).toEqual("calc(100% - 100px)");
  });
});

describe("sumExternalGap", () => {
  it("return correct value", () => {
    expect(sumExternalGap(256, 80)).toEqual("256px + 80px");
    expect(sumExternalGap(0, "30%")).toEqual("30%");
    expect(sumExternalGap(80, "30%")).toEqual("80px + 30%");
    expect(sumExternalGap(0, 0)).toEqual(0);
    expect(sumExternalGap("40rem", null)).toEqual("40rem");
    expect(sumExternalGap("", null)).toEqual(undefined);
  });
});

describe("createWidthObject", () => {
  it("return correct gap after combining", () => {
    const w1 = createWidthInterface(80);
    const w2 = createWidthInterface("30%");
    expect(w1.combine(w2).value).toEqual("80px + 30%");
    expect(w1.combine(w2).getStyle()).toEqual({
      width: "calc(100% - (80px + 30%))",
    });
  });

  it("return correct gap if combine undefined with 0", () => {
    const w1 = createWidthInterface();
    const w2 = createWidthInterface(0);
    expect(w1.combine(w2).value).toEqual(0);
    expect(w1.combine(w2).getStyle()).toEqual({
      width: "100%",
    });
  });

  it("return correct gap if some is 'auto'", () => {
    const w1 = createWidthInterface();
    const w2 = createWidthInterface("80px - 30%");
    expect(w1.combine(w2).value).toEqual("80px - 30%");
    expect(w1.combine(w2).getStyle()).toEqual({
      width: "calc(100% - (80px - 30%))",
    });
  });

  it("return correct gap if all are 'auto'", () => {
    const w1 = createWidthInterface();
    const w2 = createWidthInterface();
    expect(w1.combine(w2).value).toBeUndefined();
    expect(w1.combine(w2).getStyle()).toEqual({
      width: "auto",
    });
  });
});
