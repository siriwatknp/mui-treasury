import React from "react";
import { render } from "@testing-library/react";
import { Info } from "./Info";

describe("Info", () => {
  it("renders without clash", () => {
    expect(() => render(<Info />)).not.toThrow();
  });
});
