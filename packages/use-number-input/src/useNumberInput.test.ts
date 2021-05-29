import { act, renderHook } from "@testing-library/react-hooks";
import { useNumberBoundary, toNumber, numberToString } from "./useNumberInput";

describe("useNumberBoundary", () => {
  describe("default options", () => {
    it("should be able to increment if empty", () => {
      const { result } = renderHook(() => useNumberBoundary());

      act(() => {
        result.current.increment();
      });

      expect(result.current.numberValue).toEqual(1);
      expect(result.current.interfaceValue).toEqual("1");
    });

    it("should be able to decrement if empty", () => {
      const { result } = renderHook(() => useNumberBoundary());

      act(() => {
        result.current.decrement();
      });

      expect(result.current.numberValue).toEqual(-1);
      expect(result.current.interfaceValue).toEqual("-1");
    });
  });

  describe("min, max", () => {
    it("should not increment more than max", () => {
      const { result } = renderHook(() =>
        useNumberBoundary({ max: 5, defaultValue: 5 })
      );

      act(() => {
        result.current.increment();
      });

      expect(result.current.interfaceValue).toEqual("5");
    });

    it("should not decrement less than min", () => {
      const { result } = renderHook(() =>
        useNumberBoundary({ min: -3, defaultValue: -3 })
      );

      act(() => {
        result.current.decrement();
      });

      expect(result.current.interfaceValue).toEqual("-3");
    });
  });

  describe("precision and step", () => {
    it("should increment/decrement according to precision and step", () => {
      const { result } = renderHook(() => useNumberBoundary());

      act(() => {
        result.current.increment({ precision: 2, step: 0.1 });
      });

      expect(result.current.interfaceValue).toEqual("0.10");
      expect(result.current.numberValue).toEqual(0.1);

      act(() => {
        result.current.decrement({ precision: 3, step: 0.01 });
      });

      expect(result.current.interfaceValue).toEqual("0.090");
      expect(result.current.numberValue).toEqual(0.09);
    });
  });
});

describe("utils", () => {
  describe("toNumber", () => {
    it("return undefined", () => {
      expect(toNumber("")).toEqual(undefined);
      expect(toNumber(undefined)).toEqual(undefined);
      expect(toNumber("abc")).toEqual(undefined);
    });

    it("string to number", () => {
      expect(toNumber("0.0512")).toEqual(0.0512);
    });

    it("negative to interger", () => {
      expect(toNumber("-1.")).toEqual(-1);
    });

    it("plus to interger", () => {
      expect(toNumber("+1.")).toEqual(1);
    });
  });

  describe("numberToString", () => {
    it("return empty string", () => {
      expect(numberToString(NaN)).toEqual("");
      expect(numberToString(undefined)).toEqual("");
    });

    it("return string with precision", () => {
      expect(numberToString(300, 2)).toEqual("300.00");
      expect(numberToString(0.1234, 1)).toEqual("0.1");
    });
  });
});
