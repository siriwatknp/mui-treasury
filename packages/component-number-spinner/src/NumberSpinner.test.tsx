import React from "react";
import { render } from "@testing-library/react";
import { NumberSpinner } from "./NumberSpinner";

describe("NumberSpinner", () => {
  it("renders without clash", () => {
    expect(() => render(<NumberSpinner />)).not.toThrow();
  });
});
