import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  Navigation,
  NavItem,
  NavigationProps,
} from "@mui-treasury/component-navigation";

export default {
  title: "Component/Navigation",
  component: Navigation,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Demo: Story<NavigationProps> = (args) => {
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
};
