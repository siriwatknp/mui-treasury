import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { CardEngagement } from "./CardEngagement";
import Usage from "./usage.mdx";

const meta = {
  title: "Card/Engagement",
  component: CardEngagement,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardEngagement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Engagement: Story = {
  render: () => (
    <div
      style={{
        width: 340,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardEngagement />
    </div>
  ),
};
