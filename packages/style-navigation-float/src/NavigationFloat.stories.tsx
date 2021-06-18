import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { styled } from "@material-ui/core/styles";

import {
  Navigation,
  NavItem,
  NavigationProps,
} from "@mui-treasury/component-navigation";

import {
  getNavigationFloatTheme,
  getNavigationFloatStyles,
} from "@mui-treasury/style-navigation-float";

import { withMuiThemeProvider } from "stories/_internal/decorators";

export default {
  title: "Component/Navigation/style-packages",
  component: Navigation,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

const NavigationFloat = styled(Navigation)(getNavigationFloatStyles);

export const Float: Story<NavigationProps> = (args) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const items = [...Array(5)].map((_, index) => (
    <NavItem
      key={index}
      // href="#"
      active={activeIndex === index}
      disabled={index === 3}
      onClick={() => setActiveIndex(index)}
    >
      Item {index + 1}
    </NavItem>
  ));
  return (
    <>
      <NavigationFloat {...args}>{items}</NavigationFloat>
      <br />
      <Navigation {...args}>{items}</Navigation>
    </>
  );
};
Float.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getNavigationFloatTheme(theme),
    };
    return theme;
  }),
];
