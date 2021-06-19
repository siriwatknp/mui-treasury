import React from "react";
import { render } from "@testing-library/react";
import { BirthdateField } from "./BirthdateField";

describe("BirthdateField", () => {
  it("renders without clash", () => {
    expect(() => render(<BirthdateField />)).not.toThrow();
  });
});
