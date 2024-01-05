import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";
import { NavigationLine } from "./index";

const meta = {
  title: "Navigation/Line",
  component: NavigationLine,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof NavigationLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Line: Story = {
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
      <NavigationLine />
    </div>
  ),
};


