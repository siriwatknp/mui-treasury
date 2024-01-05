import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import { Navigation, NavigationProps, NavItem } from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Navigation/Basic",
  component: Navigation,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<NavigationProps>;

export default meta;
type Story = StoryObj<NavigationProps>;

export const Basic: Story = {
  render: (args) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    return (
      <Navigation {...args}>
        {[...Array(5).fill(undefined)].map((_, index) => (
          <NavItem
            key={index}
            // href="#"
            active={activeIndex === index}
            disabled={index === 3}
            onClick={() => setActiveIndex(index)}
          >
            Item {index + 1}
          </NavItem>
        ))}
      </Navigation>
    );
  },
};
