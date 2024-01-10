import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { SwitchAirbnb } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Switch/Airbnb",
  component: SwitchAirbnb,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof SwitchAirbnb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Airbnb: Story = {
  render: () => (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        gap: "1rem",
        borderRadius: "4px",
        backgroundColor: "rgb(96, 162, 155)",
      }}
    >
      <SwitchAirbnb />
      <SwitchAirbnb disabled />
    </div>
  ),
};
