import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { usePinInput, UsePinInputOptions } from "@mui-treasury/use-pin-input";

export default {
  title: "Hook/usePinInput",
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["number", "alphanumeric"],
      },
    },
    onChange: {
      action: "change",
    },
    onBlur: {
      action: "blur",
    },
  },
  args: {
    type: "number",
    mask: false,
    autoFocus: false,
    otp: false,
  },
} as Meta;

export const FourPins: Story<UsePinInputOptions> = (args) => {
  const { pins } = usePinInput({
    ...args,
    pinLength: 4,
  });

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {pins.map((getInputProps, index) => (
        <input key={index} {...getInputProps()} />
      ))}
    </div>
  );
};
