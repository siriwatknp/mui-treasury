import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { LayoutV6PresetContentBased } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Layout v6/Preset/ContentBased",
  component: LayoutV6PresetContentBased,
  parameters: {
    layout: "fullscreen",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof LayoutV6PresetContentBased>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentBased: Story = {
  render: () => <LayoutV6PresetContentBased />,
};
