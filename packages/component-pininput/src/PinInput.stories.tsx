import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import OutlinedInput from "@mui/material/OutlinedInput";
import FilledInput from "@mui/material/FilledInput";
import { PinInput, PinInputProps } from "@mui-treasury/component-pininput";

export default {
  title: "Component/PinInput",
  component: PinInput,
  argTypes: {
    onChange: { action: "change" },
    onBlur: { action: "blur" },
  },
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Outlined: Story<PinInputProps> = (args) => {
  return (
    <PinInput {...args}>
      <OutlinedInput />
      <OutlinedInput />
      <OutlinedInput />
      <OutlinedInput />
    </PinInput>
  );
};

export const Filled: Story<PinInputProps> = (args) => {
  return (
    <PinInput {...args}>
      <FilledInput disableUnderline hiddenLabel />
      <FilledInput disableUnderline hiddenLabel />
      <FilledInput disableUnderline hiddenLabel />
      <FilledInput disableUnderline hiddenLabel />
    </PinInput>
  );
};
