import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { LayoutExampleRightEdgeSidebar } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Layout v5/Example/RightEdgeSidebar",
  component: LayoutExampleRightEdgeSidebar,
  parameters: {
    layout: "fullscreen",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof LayoutExampleRightEdgeSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RightEdgeSidebar: Story = {
  render: () => <LayoutExampleRightEdgeSidebar />,
};
