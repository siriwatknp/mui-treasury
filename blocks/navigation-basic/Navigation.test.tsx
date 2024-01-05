import { render } from "@testing-library/react";
import React from "react";
import { Navigation, NavItem } from "./index";

describe("Navigation", () => {
  it("renders without clash", () => {
    expect(() =>
      render(
        <Navigation>
          <NavItem>Menu 1</NavItem>
        </Navigation>
      )
    ).not.toThrow();
  });
});
