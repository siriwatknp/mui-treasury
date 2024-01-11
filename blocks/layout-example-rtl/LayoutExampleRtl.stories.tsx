import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { LayoutExampleRtl } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Layout/Example/Right-to-Left",
  component: LayoutExampleRtl,
  parameters: {
    layout: "fullscreen",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof LayoutExampleRtl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RighttoLeft: Story = {
  render: () => <LayoutExampleRtl />,
};
