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
      {[...Array(5)].map((_, index) => (
        <NavItem
          key={index}
          active={activeIndex === index}
          href={index !== 3 ? "#" : undefined}
          disabled={index === 3}
          onClick={() => setActiveIndex(index)}
        >
          Item {index + 1}
        </NavItem>
      ))}
    </Navigation>
  );
};
