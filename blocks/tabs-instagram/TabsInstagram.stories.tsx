import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { TabsInstagram } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Tabs/Instagram",
  component: TabsInstagram,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof TabsInstagram>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Instagram: Story = {
  render: () => <TabsInstagram />,
};
