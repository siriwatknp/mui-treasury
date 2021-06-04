import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { experimentalStyled as styled } from "@material-ui/core/styles";

import {
  Navigation,
  NavItem,
  NavigationProps,
} from "@mui-treasury/component-navigation";

import {
  getNavigationBulbTheme,
  getNavigationBulbStyles,
} from "@mui-treasury/style-navigation-bulb";

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

const NavigationBulb = styled(Navigation)(getNavigationBulbStyles);

export const Bulb: Story<NavigationProps> = (args) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const items = [...Array(5)].map((_, index) => (
    <NavItem
      key={index}
      active={activeIndex === index}
      href={index !== 3 ? "#" : undefined}
      disabled={index === 3}
      onClick={() => setActiveIndex(index)}
    >
      Item {index + 1}
    </NavItem>
  ));
  return (
    <>
      <NavigationBulb {...args}>{items}</NavigationBulb>
      <br />
      <Navigation {...args}>{items}</Navigation>
    </>
  );
};
Bulb.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getNavigationBulbTheme(theme),
    };
    return theme;
  }),
];
