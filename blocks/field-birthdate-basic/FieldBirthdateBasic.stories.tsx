import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { FieldBirthdateBasic } from "./FieldBirthdateBasic";
import Usage from "./usage.mdx";

const meta = {
  title: "Field/Birthdate/Basic",
  component: FieldBirthdateBasic,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof FieldBirthdateBasic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => <FieldBirthdateBasic defaultValue="01/01/2024" />,
};
