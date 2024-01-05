import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FilledInput from "@mui/material/FilledInput";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { FieldNumberSpinner } from "./FieldNumberSpinner";
import Usage from "./usage.mdx";

const meta = {
  title: "Field/Number/Spinner",
  component: FieldNumberSpinner,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof FieldNumberSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  render: (args) => {
    return <FieldNumberSpinner {...args} />;
  },
};

export const Filled: Story = {
  render: (args) => {
    return (
      <FieldNumberSpinner
        {...args}
        inputElement={<FilledInput hiddenLabel />}
      />
    );
  },
};
