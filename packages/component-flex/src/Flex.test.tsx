import React from "react";
import { render } from "@testing-library/react";
import { Flex } from "./Flex";

describe("Flex", () => {
  it("renders without clash", () => {
    expect(() => render(<Flex />)).not.toThrow();
  });
});
