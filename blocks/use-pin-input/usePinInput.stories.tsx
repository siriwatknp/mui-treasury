import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";
import { usePinInput, UsePinInputOptions } from "./usePinInput";

const meta = {
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
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
    modules: ["use-input-siblings"],
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<UsePinInputOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  render: (args) => {
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
  },
} satisfies Story;
