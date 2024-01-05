import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { InfoApex } from "./InfoApex";
import Usage from "./usage.mdx";

const meta = {
  title: "Info/Apex",
  component: InfoApex,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont(["Ubuntu"])],
} satisfies Meta<typeof InfoApex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Apex: Story = {
  render: () => (
    <div
      style={{
        width: 340,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <InfoApex />
    </div>
  ),
};
