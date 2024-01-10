import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { TabsPill } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Tabs/Pill",
  component: TabsPill,
  parameters: {
    layout: "centered",
    githubUsername: "davidedantonio", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof TabsPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pill: Story = {
  render: () => <TabsPill />,
};
