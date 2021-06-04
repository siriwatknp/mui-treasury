import React from "react";
import { render } from "@testing-library/react";
import { Navigation, NavItem } from "@mui-treasury/component-navigation";

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
