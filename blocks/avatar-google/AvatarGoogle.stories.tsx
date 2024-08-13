import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { AvatarGoogle } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Avatar/Google",
  component: AvatarGoogle,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
  argTypes: {
    size: {
      control: {
        type: "range",
        min: 20,
        max: 100,
        step: 1,
      },
    },
  },
} satisfies Meta<typeof AvatarGoogle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Google: Story = {
  render: ({ ...args }) => <AvatarGoogle {...args} />,
};
Google.args = {
  size: 40,
};
