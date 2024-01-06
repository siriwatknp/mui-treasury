import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { FieldPinInput, FieldPinInputProps } from "./FieldPinInput";
import Usage from "./usage.mdx";

const meta = {
  title: "Field/Pin/Input",
  component: FieldPinInput,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
    modules: ["use-pin-input", "use-input-siblings"],
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof FieldPinInput>;

export default meta;
type Story = StoryObj<Omit<FieldPinInputProps, "children">>;

export const Outlined: Story = {
  render: (args) => {
    return (
      <FieldPinInput {...args}>
        <OutlinedInput />
        <OutlinedInput />
        <OutlinedInput />
        <OutlinedInput />
      </FieldPinInput>
    );
  },
};

export const Filled: Story = {
  render: (args) => {
    return (
      <FieldPinInput {...args}>
        <FilledInput disableUnderline hiddenLabel />
        <FilledInput disableUnderline hiddenLabel />
        <FilledInput disableUnderline hiddenLabel />
        <FilledInput disableUnderline hiddenLabel />
      </FieldPinInput>
    );
  },
};
