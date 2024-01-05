import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { CardTeam } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Card/Team",
  component: CardTeam,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont(["Ubuntu:wght@400;700"])],
} satisfies Meta<typeof CardTeam>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Team: Story = {
  render: () => <CardTeam />,
};
