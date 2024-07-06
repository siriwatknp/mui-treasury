import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { LayoutV6AppReactLegacy } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Layout v6/App/ReactLegacy",
  component: LayoutV6AppReactLegacy,
  parameters: {
    layout: "fullscreen",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof LayoutV6AppReactLegacy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReactLegacy: Story = {
  render: () => <LayoutV6AppReactLegacy />,
};
