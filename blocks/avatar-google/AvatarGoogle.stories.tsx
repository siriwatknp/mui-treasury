import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { AvatarGoogle } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Avatar/Google",
  component: AvatarGoogle,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof AvatarGoogle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Google: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <AvatarGoogle />
      <AvatarGoogle size={76} />
    </div>
  ),
};
