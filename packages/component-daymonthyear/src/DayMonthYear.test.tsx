import React from "react";
import { render } from "@testing-library/react";
import { DayMonthYear } from "./DayMonthYear";

describe("DayMonthYear", () => {
  it("renders without clash", () => {
    expect(() => render(<DayMonthYear />)).not.toThrow();
  });
});
