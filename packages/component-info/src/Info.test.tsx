import React from "react";
import { screen } from "@testing-library/react";
import { runComponentStylingTests } from "test/runTestSuite";
import {
  Info,
  infoClasses,
  InfoEyebrow,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from "./index";

describe("Info", () => {
  runComponentStylingTests(
    <Info data-testid="info-root">
      <InfoEyebrow>Eyebrow</InfoEyebrow>
      <InfoTitle>Title</InfoTitle>
      <InfoSubtitle>Subtitle</InfoSubtitle>
      <InfoCaption>Caption</InfoCaption>
    </Info>,
    {
      getHTMLSlots: () => [
        screen.getByTestId(/info-root/i),
        screen.getByText(/eyebrow/i),
        screen.getByText(/^title$/i),
        screen.getByText(/subtitle/i),
        screen.getByText(/caption/i),
      ],
      classes: infoClasses,
      componentName: "JunInfo",
      slots: ["root", "eyebrow", "title", "subtitle", "caption"],
      variantProps: { variant: "awesome" },
    }
  );
});
