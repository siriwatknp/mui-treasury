import React from "react";
import { render } from "@testing-library/react";
import {
  CCField,
  CCName,
  CCNumber,
  CCExpiration,
  CCSecurityCode,
} from "./index";

describe("CreditCard", () => {
  it("renders without clash", () => {
    expect(() =>
      render(
        <CCField>
          <CCName />
          <CCNumber />
          <CCExpiration />
          <CCSecurityCode />
        </CCField>
      )
    ).not.toThrow();
  });
});
