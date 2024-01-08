import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { TabsChrome } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Tabs/Chrome",
  component: TabsChrome,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof TabsChrome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Chrome: Story = {
  render: () => <TabsChrome />,
};
