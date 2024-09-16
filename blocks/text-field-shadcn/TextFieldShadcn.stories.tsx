import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { TextFieldShadcn } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Text Field/Shadcn",
  component: TextFieldShadcn,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof TextFieldShadcn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shadcn: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <TextFieldShadcn />
      <TextFieldShadcn error />
    </div>
  ),
};
