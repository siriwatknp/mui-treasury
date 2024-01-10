import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { SwitchLovely } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Switch/Lovely",
  component: SwitchLovely,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof SwitchLovely>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lovely: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <SwitchLovely />
      <SwitchLovely defaultChecked />
    </div>
  ),
};
