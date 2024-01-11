import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { CardNews2 } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Card/News2",
  component: CardNews2,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [
    storyDialog(Usage),
    googleFont(["Playfair Display:wght@400;700"]),
  ],
} satisfies Meta<typeof CardNews2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const News2: Story = {
  render: () => <CardNews2 />,
};
