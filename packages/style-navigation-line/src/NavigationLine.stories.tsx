import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { styled } from "@material-ui/core/styles";

import {
  Navigation,
  NavItem,
  NavigationProps,
} from "@mui-treasury/component-navigation";

import {
  getNavigationLineTheme,
  getNavigationLineStyles,
} from "@mui-treasury/style-navigation-line";

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

const NavigationLine = styled(Navigation)(getNavigationLineStyles);

export const Line: Story<NavigationProps> = (args) => {
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
      <NavigationLine {...args}>{items}</NavigationLine>
      <br />
      <Navigation {...args}>{items}</Navigation>
    </>
  );
};
Line.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getNavigationLineTheme(theme),
    };
    return theme;
  }),
];
