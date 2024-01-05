import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { CardSysi } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Card/Sysi",
  component: CardSysi,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof CardSysi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sysi: Story = {
  render: () => <CardSysi />,
};
