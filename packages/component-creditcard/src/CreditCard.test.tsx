import React from "react";
import { render } from "@testing-library/react";
import { CreditCard } from "./CCField";

describe("CreditCard", () => {
  it("renders without clash", () => {
    expect(() => render(<CreditCard />)).not.toThrow();
  });
});
