import React from "react";
import { render } from "@testing-library/react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { PinInput } from "./PinInput";

describe("PinInput", () => {
  it("renders without clash", () => {
    expect(() =>
      render(
        <PinInput>
          <OutlinedInput />
          <OutlinedInput />
          <OutlinedInput />
          <OutlinedInput />
        </PinInput>
      )
    ).not.toThrow();
  });
});
