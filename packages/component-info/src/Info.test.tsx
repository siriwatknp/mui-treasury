import React from "react";
import { screen } from "@testing-library/react";
import { runComponentStylingTests } from "test/runTestSuite";
import {
  Info,
  infoClasses,
  InfoEyebrow,
  InfoHead,
  InfoParagraph,
} from "./index";

describe("Info", () => {
  runComponentStylingTests(
    <Info data-testid="info-root">
      <InfoEyebrow>Eyebrow</InfoEyebrow>
      <InfoHead>Head</InfoHead>
      <InfoParagraph>Paragraph</InfoParagraph>
    </Info>,
    {
      getHTMLSlots: () => [
        screen.getByTestId(/info-root/i),
        screen.getByText(/eyebrow/i),
        screen.getByText(/head/i),
        screen.getByText(/paragraph/i),
      ],
      classes: infoClasses,
      componentName: "JunInfo",
      slots: ["root", "head", "eyebrow", "paragraph"],
      variantProps: { variant: "awesome" },
    }
  );
});
