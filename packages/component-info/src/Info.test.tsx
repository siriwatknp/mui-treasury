import React from "react";
import { screen } from "@testing-library/react";
import { runComponentStylingTests } from "test/runTestSuite";
import { Info, infoClasses, InfoEyebrow, InfoHead, InfoBody } from "./index";

describe("Info", () => {
  runComponentStylingTests(
    <Info data-testid="info-root">
      <InfoEyebrow>Eyebrow</InfoEyebrow>
      <InfoHead>Head</InfoHead>
      <InfoBody>Body</InfoBody>
    </Info>,
    {
      getHTMLSlots: () => [
        screen.getByTestId(/info-root/i),
        screen.getByText(/eyebrow/i),
        screen.getByText(/head/i),
        screen.getByText(/body/i),
      ],
      classes: infoClasses,
      componentName: "JunInfo",
      slots: ["root", "head", "eyebrow", "body"],
      variantProps: { variant: "awesome" },
    }
  );
});
