import React from "react";
import { render } from "@testing-library/react";
import { FormAddon } from "./FormAddon";

describe("FormAddon", () => {
  it("renders without clash", () => {
    expect(() => render(<FormAddon />)).not.toThrow();
  });
});
