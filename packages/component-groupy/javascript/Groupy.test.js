import React from "react";
import { render } from "@testing-library/react";
import { Groupy } from "./Groupy";
describe("Groupy", () => {
  it("renders without clash", () => {
    expect(() => render(<Groupy />)).not.toThrow();
  });
});
