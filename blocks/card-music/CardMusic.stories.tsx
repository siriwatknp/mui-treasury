import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { CardMusic } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Card/Music",
  component: CardMusic,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof CardMusic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Music: Story = {
  render: () => <CardMusic />,
};
