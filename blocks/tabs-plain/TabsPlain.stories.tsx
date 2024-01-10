import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { TabsPlain } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Tabs/Plain",
  component: TabsPlain,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof TabsPlain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  render: () => <TabsPlain />,
};
