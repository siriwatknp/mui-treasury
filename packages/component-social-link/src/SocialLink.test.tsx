import React from "react";
import { render } from "@testing-library/react";
import { SocialLink } from "./SocialLink";
import { Dribbble } from "./icons";

describe("SocialLink", () => {
  it("renders without clash", () => {
    expect(() =>
      render(
        <SocialLink>
          <Dribbble />
        </SocialLink>
      )
    ).not.toThrow();
  });
});
