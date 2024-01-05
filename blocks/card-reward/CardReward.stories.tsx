import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { CardReward } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Card/Reward",
  component: CardReward,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof CardReward>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Reward: Story = {
  render: () => <CardReward />,
};
