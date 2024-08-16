import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { TabsInsideTriangle } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Tabs/Inside Triangle",
  component: TabsInsideTriangle,
  parameters: {
    layout: "centered",
    githubUsername: "p-siriphanthong", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof TabsInsideTriangle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InsideTriangle: Story = {
  render: () => <TabsInsideTriangle />,
};
