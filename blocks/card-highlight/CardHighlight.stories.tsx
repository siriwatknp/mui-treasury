import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { CardHighlight } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Card/Highlight",
  component: CardHighlight,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont(["Fjalla One", "Sen"])],
} satisfies Meta<typeof CardHighlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Highlight: Story = {
  render: () => <CardHighlight />,
};
