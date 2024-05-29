import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { LayoutV6AppShoppingCart } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Layout v6/App",
  component: LayoutV6AppShoppingCart,
  parameters: {
    layout: "fullscreen",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof LayoutV6AppShoppingCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShoppingCart: Story = {
  render: () => <LayoutV6AppShoppingCart />,
};
