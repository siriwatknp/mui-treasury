import { flattenLoose, flattenStrict } from "./flattenResponsive";

describe("flattenResponsive", () => {
  describe("flattenLoose", () => {
    it("flatten if only one key", () => {
      expect(flattenLoose({ xs: "absolute" })).toEqual("absolute");
      expect(flattenLoose({ md: "absolute" })).toEqual("absolute");
    });

    it("flatten if all value is the same", () => {
      expect(flattenLoose({ xs: "absolute", md: "absolute" })).toEqual(
        "absolute"
      );
    });

    it("return same value if responsive (not only xs)", () => {
      expect(flattenLoose({ xs: "absolute", md: "relative" })).toEqual({
        xs: "absolute",
        md: "relative",
      });
    });
  });

  describe("flattenStrict", () => {
    it("flatten if only xs field", () => {
      expect(flattenStrict({ xs: "absolute" })).toEqual("absolute");
    });

    it("flatten if all value is the same and 'xs' exists", () => {
      expect(flattenLoose({ xs: "absolute", md: "absolute" })).toEqual(
        "absolute"
      );
      expect(flattenLoose({ md: "absolute", lg: "absolute" })).toEqual({
        md: "absolute",
        lg: "absolute",
      });
    });

    it("return same value if responsive (not only xs)", () => {
      expect(flattenLoose({ xs: "absolute", md: "relative" })).toEqual({
        xs: "absolute",
        md: "relative",
      });
    });
  });
});
