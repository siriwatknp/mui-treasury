import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { SwitchIos } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Switch/Ios",
  component: SwitchIos,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof SwitchIos>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ios: Story = {
  render: () => (
    <div className="flex gap-2 p-8 bg-gray-50 rounded-sm">
      <SwitchIos />
      <SwitchIos defaultChecked />
    </div>
  ),
};
