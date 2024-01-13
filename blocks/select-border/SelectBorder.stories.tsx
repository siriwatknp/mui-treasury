import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { SelectBorder } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Select/Border",
  component: SelectBorder,
  parameters: {
    layout: "centered",
    githubUsername: "pacurtin", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof SelectBorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Border: Story = {
  render: () => <SelectBorder />,
};
