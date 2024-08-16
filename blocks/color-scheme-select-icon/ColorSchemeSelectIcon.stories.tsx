import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";
import { ColorSchemeSelectIcon } from "./index";

const meta = {
  title: "Color Scheme/Select/Icon",
  component: ColorSchemeSelectIcon,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof ColorSchemeSelectIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  render: () => <ColorSchemeSelectIcon />,
};

