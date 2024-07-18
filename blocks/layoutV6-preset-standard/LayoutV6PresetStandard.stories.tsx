import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { LayoutV6PresetStandard } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Layout v6/Preset/Standard",
  component: LayoutV6PresetStandard,
  parameters: {
    layout: "fullscreen",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof LayoutV6PresetStandard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  render: () => <LayoutV6PresetStandard />,
};
