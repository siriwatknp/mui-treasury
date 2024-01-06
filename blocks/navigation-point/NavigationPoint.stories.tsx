import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { NavigationPoint } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Navigation/Point",
  component: NavigationPoint,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
    modules: ["navigation-basic"],
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof NavigationPoint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Point: Story = {
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
      <NavigationPoint />
    </div>
  ),
};
