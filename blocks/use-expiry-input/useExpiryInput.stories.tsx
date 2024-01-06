import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";
import { useExpiryInput, UseExpiryInputOptions } from "./useExpiryInput";

const meta = {
  title: "Hook/useExpiryInput",
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
    modules: ["use-input-siblings"],
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<UseExpiryInputOptions>;

export default meta;
type Story = StoryObj<UseExpiryInputOptions>;

export const Input: Story = {
  render: (args) => {
    const { getInputProps } = useExpiryInput(args);

    return (
      <div>
        <label htmlFor="expiry" style={{ display: "block", fontSize: "12px" }}>
          Expiry date
        </label>
        <input id="expiry" {...getInputProps()} />
      </div>
    );
  },
};
