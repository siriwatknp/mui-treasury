import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { LayoutV6AppClaude } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Layout v6/App/Claude",
  component: LayoutV6AppClaude,
  parameters: {
    layout: "fullscreen",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
    modules: ["layout-code-v6"],
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof LayoutV6AppClaude>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Claude: Story = {
  render: () => <LayoutV6AppClaude />,
};
