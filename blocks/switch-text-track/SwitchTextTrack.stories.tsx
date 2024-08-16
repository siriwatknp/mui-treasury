import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { SwitchTextTrack } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Switch/Text Track",
  component: SwitchTextTrack,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof SwitchTextTrack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextTrack: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <SwitchTextTrack />
      <SwitchTextTrack defaultChecked />
    </div>
  ),
};
