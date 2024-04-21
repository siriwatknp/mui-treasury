import { StackedHeaders } from "./StackedHeaders";

describe("StackedHeaders", () => {
  describe("Sample 1", () => {
    const result = StackedHeaders([
      { position: "relative", height: 20 },
      { position: "sticky", height: 64, top: 0 },
    ]);
    it("totalHeight", () => {
      expect(result.totalHeight).toEqual("calc(20px + 64px)");
    });

    it("diffHeight", () => {
      expect(result.diffHeight).toEqual("calc(calc(20px + 64px) - 64px)");
    });
  });

  describe("Sample 2", () => {
    const result = StackedHeaders([
      {
        position: "relative",
        height: 64,
      },
      { position: "relative", height: 20 },
    ]);
    it("totalHeight", () => {
      expect(result.totalHeight).toEqual("calc(64px + 20px)");
    });

    it("diffHeight", () => {
      expect(result.diffHeight).toEqual("calc(64px + 20px)");
    });
  });

  describe("Sample 3", () => {
    const result = StackedHeaders([
      {
        position: "relative",
        height: 20,
      },
      { position: "sticky", height: 64 },
      { position: "sticky", height: 48, top: 64 },
    ]);
    it("totalHeight", () => {
      expect(result.totalHeight).toEqual("calc(20px + 64px + 48px)");
    });

    it("diffHeight", () => {
      expect(result.diffHeight).toEqual(
        "calc(calc(20px + 64px + 48px) - max(64px, calc(48px + 64px)))"
      );
    });
  });

  describe("Sample 4", () => {
    const result = StackedHeaders([
      {
        position: "sticky",
        height: 20,
      },
      { position: "sticky", height: 56 },
      { position: "relative", height: 48 },
    ]);
    it("totalHeight", () => {
      expect(result.totalHeight).toEqual("calc(20px + 56px + 48px)");
    });

    it("diffHeight", () => {
      expect(result.diffHeight).toEqual(
        "calc(calc(20px + 56px + 48px) - max(20px, 56px))"
      );
    });
  });

  describe("Sample 5", () => {
    it("fixed position", () => {
      expect(StackedHeaders([{ height: 56, position: "fixed" }])).toEqual({
        totalHeight: "56px",
        diffHeight: "calc(56px - 56px)",
      });
    });

    it("sticky position", () => {
      expect(StackedHeaders([{ height: 56, position: "sticky" }])).toEqual({
        totalHeight: "56px",
        diffHeight: "calc(56px - 56px)",
      });
    });

    it("relative position", () => {
      expect(StackedHeaders([{ height: 56, position: "relative" }])).toEqual({
        totalHeight: "56px",
        diffHeight: "56px",
      });
    });
  });
});
