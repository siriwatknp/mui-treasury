import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { AvatarGrow } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Avatar/Grow",
  component: AvatarGrow,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof AvatarGrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Grow: Story = {
  render: () => <AvatarGrow />,
};
