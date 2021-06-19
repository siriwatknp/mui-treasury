import React from "react";
import { render } from "@testing-library/react";
import FilledInput from "@material-ui/core/FilledInput";
import { DayMonthYear } from "./DayMonthYear";

describe("DayMonthYear", () => {
  it("renders without clash", () => {
    expect(() =>
      render(
        <DayMonthYear>
          <FilledInput data-slot="day" />
          <FilledInput data-slot="month" />
          <FilledInput data-slot="year" />
        </DayMonthYear>
      )
    ).not.toThrow();
  });
});
