import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { NavigationBulb } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Navigation/Bulb",
  component: NavigationBulb,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
    modules: ["navigation-basic"],
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof NavigationBulb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bulb: Story = {
  render: () => <NavigationBulb />,
};
