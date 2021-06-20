import React from "react";
import { render } from "@testing-library/react";
import { Info, InfoEyebrow, InfoHead, InfoParagraph } from "./index";

describe("Info", () => {
  it("renders without clash", () => {
    expect(() =>
      render(
        <Info>
          <InfoEyebrow>Eyebrow</InfoEyebrow>
          <InfoHead>Head</InfoHead>
          <InfoParagraph>Paragraph</InfoParagraph>
        </Info>
      )
    ).not.toThrow();
  });
});
