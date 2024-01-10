import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { TabsElevated } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Tabs/Elevated",
  component: TabsElevated,
  parameters: {
    layout: "centered",
    githubUsername: "davidedantonio", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof TabsElevated>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
  render: () => <TabsElevated />,
};
