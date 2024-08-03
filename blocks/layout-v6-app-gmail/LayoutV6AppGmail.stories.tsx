import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { LayoutV6AppGmail } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Layout V6/App/Gmail",
  component: LayoutV6AppGmail,
  parameters: {
    layout: "fullscreen",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof LayoutV6AppGmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gmail: Story = {
  render: () => <LayoutV6AppGmail />,
};
