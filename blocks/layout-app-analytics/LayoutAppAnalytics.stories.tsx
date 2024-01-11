import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";
import { LayoutAppAnalytics } from "./index";

const meta = {
  title: "Layout/App/Analytics",
  component: LayoutAppAnalytics,
  parameters: {
    layout: "fullscreen",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof LayoutAppAnalytics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Analytics: Story = {
  render: () => <LayoutAppAnalytics />,
};


