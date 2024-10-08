import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { SelectShadcn } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Select/Shadcn",
  component: SelectShadcn,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof SelectShadcn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shadcn: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <SelectShadcn />
      <SelectShadcn error />
    </div>
  ),
};
