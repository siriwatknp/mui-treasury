import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Info,
  InfoCaption,
  InfoEyebrow,
  InfoProps,
  InfoSubtitle,
  InfoTitle,
} from ".";
import storyDialog from "../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";

const meta = {
  title: "Info/Basic",
  component: Info,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<InfoProps>;

export default meta;
type Story = StoryObj<InfoProps>;

export const Basic: Story = {
  render: () => (
    <Info>
      <InfoEyebrow>Material Blog</InfoEyebrow>
      <InfoTitle>Unveiling Material You</InfoTitle>
      <InfoSubtitle>The next stage for Material Design</InfoSubtitle>
      <InfoCaption>10 FEB 2021</InfoCaption>
    </Info>
  ),
};
